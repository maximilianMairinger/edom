import baz from "bezier-easing";
import { camelCaseToDash, dashToCamelCase } from "dash-camelcase";
import { Data } from "front-db";
import decomposeMatrix from "decompose-dommatrix";
// TODO: make anim only available on HTMLElement since animate is not supported on EventTraget
// IDEA modify promise returned by anim so that you can give a string as then arg which gets exectuted with this context
//@ts-ignore
let ResObs;
export default async function init() {
    let proms = [];
    if (Element.prototype.animate === undefined)
        proms.add(import(/* webpackChunkName: "webAnimationsApiPolyfill" */ "web-animations-js"));
    //@ts-ignore
    if (window.ResizeObserver === undefined)
        proms.add(import(/* webpackChunkName: "resizeObserverPolyfill" */ "resize-observer-polyfill").then(({ default: r }) => { ResObs = r; }));
    //@ts-ignore
    else
        ResObs = window.ResizeObserver;
    await Promise.all(proms);
    let p = EventTarget.prototype;
    p.insertAfter = function (newNode, referenceNode) {
        if (referenceNode.parent !== this)
            throw new Error("This is not the parent of referenceNode.");
        let sib = referenceNode.nextSibling;
        if (sib !== null)
            this.insertBefore(newNode, sib);
        else
            this.apd(newNode);
        return this;
    };
    (() => {
        const dataTransfers = {};
        let dataTransferID = 0;
        let resizeListener = new Map();
        //only init when needed since this heavily consumes resources (cpu).
        let obs;
        let obsUndefined = true;
        function initResObs() {
            obsUndefined = false;
            obs = new ResObs((elements) => {
                elements.ea((elem) => {
                    resizeListener.get(elem.target).forEach((actualFunc) => {
                        actualFunc();
                    });
                });
            });
        }
        let eventListenerIndex = new Map();
        const key = "advancedDataTransfere";
        //TODO: document / window.on("ready")
        //TODO: return data / or promise when no cb is given
        p.on = function (...a) {
            let isResize = a[0] === "resize";
            if (isResize && this !== window) {
                if (obsUndefined)
                    initResObs();
                let map = resizeListener.get(this);
                if (map === undefined) {
                    obs.observe(this);
                    map = new Map();
                    resizeListener.set(this, map);
                }
                map.set(a[1], a[1].bind(this));
            }
            else {
                let actualListener;
                if (isResize) {
                    a[1].bind(this)(false);
                    actualListener = a[1];
                }
                else if (a[0] === "dragstart") {
                    dataTransferID++;
                    actualListener = (e) => {
                        e.setData = (data) => {
                            dataTransfers[dataTransferID] = data;
                            e.dataTransfer.setData(key, dataTransferID);
                        };
                        a[1](e);
                    };
                }
                else if (a[0] === "drop") {
                    actualListener = (e) => {
                        e.getData = () => {
                            let id = e.dataTransfer.getData(key);
                            let found = id !== "" ? dataTransfers[id] : null;
                            delete dataTransfers[id];
                            return found;
                        };
                        a[1](e);
                    };
                }
                else {
                    actualListener = a[1];
                }
                actualListener = actualListener.bind(this);
                let that = eventListenerIndex.get(this);
                let o = { event: a[0], actualListener, userListener: a[1], options: a[2] };
                if (that === undefined)
                    eventListenerIndex.set(this, [o]);
                else
                    that.add(o);
                this.addEventListener(a[0], actualListener, a[2]);
            }
            return this;
        };
        p.off = function (...a) {
            if (a[0] === "resize" && this !== window) {
                if (obsUndefined)
                    initResObs();
                let map = resizeListener.get(this);
                if (map !== undefined) {
                    map.delete(a[1]);
                    if (map.size === 0) {
                        obs.unobserve(this);
                        resizeListener.delete(this);
                    }
                }
            }
            else {
                let toBeRm = [];
                let that = eventListenerIndex.get(this);
                if (that !== undefined) {
                    if (a[0] !== undefined && a[1] !== undefined) {
                        that.ea((e) => {
                            if (e.event === a[0] && e.userListener === a[1])
                                toBeRm.add(e);
                        });
                    }
                    else {
                        that.ea((e) => {
                            if (e.event === a[0] || e.userListener === a[1])
                                toBeRm.add(e);
                        });
                    }
                    toBeRm.ea((e) => {
                        this.removeEventListener(e.event, e.actualListener);
                        that.rm(e);
                    });
                    if (that.empty)
                        eventListenerIndex.delete(this);
                }
            }
            return this;
        };
    })();
    p.listener = p.listen = p.ls = function (event, listener, patch) {
        return new Tel(this, event, listener, patch);
    };
    Object.defineProperty(p, "html", {
        get() {
            return this.innerHTML;
        },
        set(to) {
            this.innerHTML = to;
        }
    });
    Object.defineProperty(p, "inner", {
        set(to) {
            if (to instanceof Array) {
                this.html = "";
                this.apd(...to);
            }
            else if (to instanceof Element) {
                this.html = "";
                this.append(to);
            }
            else
                this.innerHTML = to;
        }
    });
    p.addClass = function (...className) {
        this.classList.add(...className);
        return this;
    };
    p.removeClass = function (...className) {
        this.classList.remove(...className);
        return this;
    };
    p.hasClass = function (...className) {
        let has = true;
        className.ea((cls) => {
            if (!this.classList.contains(cls))
                has = false;
        });
        return has;
    };
    p.toggleClass = function (...className) {
        className.ea((cls) => {
            if (this.hasClass(cls))
                this.removeClass(cls);
            else
                this.addClass(cls);
        });
        return this;
    };
    p.apd = function (...elems) {
        this.append(...elems);
        return this;
    };
    p.emptyNodes = function () {
        this.html = "";
        return this;
    };
    p.hide = function () {
        this.css("display", "none");
        return this;
    };
    p.show = function () {
        this.css("display", "block");
        return this;
    };
    p.childs = function (selector_depth = 1) {
        if (typeof selector_depth === "string")
            return new NodeLs(...this.querySelectorAll(selector_depth));
        else if (selector_depth > 0) {
            return new NodeLs(...this.children, ...new NodeLs(...this.children).childs(selector_depth - 1));
        }
        return new NodeLs();
    };
    Object.defineProperty(p, "height", {
        get() {
            return this.css("height");
        },
        set(to) {
            this.css("height", to);
        }
    });
    Object.defineProperty(p, "width", {
        get() {
            return this.css("width");
        },
        set(to) {
            this.css("width", to);
        }
    });
    Object.defineProperty(p, "offsetRight", { get() {
            return this.offsetLeft + this.offsetWidth;
        } });
    Object.defineProperty(p, "offsetBottom", { get() {
            return this.offsetTop + this.offsetHeight;
        } });
    Object.defineProperty(p, "absoluteOffset", { get() {
            return this.getBoundingClientRect();
        } });
    Object.defineProperty(p, "outerWidth", { get() {
            return this.offsetWidth;
        } });
    Object.defineProperty(p, "outerHeight", { get() {
            return this.offsetHeight;
        } });
    Object.defineProperty(p, "innerWidth", { get() {
            return this.clientWidth;
        } });
    Object.defineProperty(p, "innerHeight", { get() {
            return this.clientHeight;
        } });
    Object.defineProperty(p, "parent", { get() {
            return this.parentElement;
        } });
    let formatStyle = (() => {
        let joinComma = ",";
        let joinSpace = " ";
        function formatStyle(prop, style, that) {
            let end;
            let transformApplies = TransformProp.applies(prop);
            //@ts-ignore
            let isAr = style instanceof Array;
            if (isAr) {
                let ar = [];
                //@ts-ignore
                for (let stl of style) {
                    ar.add(formatStl(prop, stl));
                }
                end = ar.join(transformApplies ? joinComma : joinSpace);
            }
            else
                end = formatStl(prop, style);
            if (that instanceof TransformProp) {
                if (transformApplies) {
                    //@ts-ignore
                    if (transformApplies) {
                        //@ts-ignore
                        if (isAr)
                            end.ea((e) => {
                                //@ts-ignore
                                that[prop] = e;
                            });
                        //@ts-ignore
                        else
                            that[prop] = end;
                    }
                    return that;
                }
                else
                    return end;
            }
            else if (that instanceof Element) {
                if (transformApplies) {
                    let me = getTransformProps(that);
                    //@ts-ignore
                    me[prop] = end;
                    return me;
                }
                else
                    return end;
            }
            else
                return end;
        }
        let specialFix = {
            opacity: "",
            offset: "",
            gridArea: "",
            flexGrow: "",
            zIndex: "",
            skew: "deg",
            skewX: "deg",
            skewY: "deg",
            rotate: "deg",
            rotate3d: "deg",
            rotateX: "deg",
            rotateY: "deg",
            rotateZ: "deg",
            scale: "",
            scale3d: "",
            scaleX: "",
            scaleY: "",
            scaleZ: "",
            matrix: "",
            matrix3d: "",
            backgroundImage: (style) => {
                if (typeof style === "number")
                    throw "Unexpected style";
                else {
                    if (style.substring(0, 4) !== "url(")
                        style = "url(" + style;
                    let lc = style.charAt(style.length - 1);
                    if (lc !== ")" && lc !== ";")
                        style += ")";
                }
                return style;
            }
        };
        let abnormalKey = Object.keys(specialFix);
        function formatStl(prop, style) {
            let specialMetial = !prop || abnormalKey.includes(prop);
            if (specialMetial) {
                let fix = specialFix[prop];
                if (!fix)
                    return style.toString();
                else if (typeof fix === "string") {
                    if (typeof style === "number")
                        return style + fix;
                    else
                        return style.toString();
                }
                else
                    return fix(style);
            }
            else {
                if (typeof style === "string")
                    return style;
                else
                    return style + "px";
            }
        }
        return formatStyle;
    })();
    let transfromProps = new Map();
    function getTransformProps(that) {
        let me = transfromProps.get(that);
        if (me === undefined) {
            me = new TransformProp(that.css("transform"));
            transfromProps.set(that, me);
        }
        return me;
    }
    function formatCss(css, that) {
        let transformProp;
        if (that === true)
            that = new TransformProp();
        for (let key in css) {
            //@ts-ignore
            let s = formatStyle(key, css[key], that);
            if (!(s instanceof TransformProp))
                css[key] = s;
            else {
                delete css[key];
                transformProp = s;
            }
        }
        if (transformProp)
            css.transform = transformProp.toString();
        return transformProp;
    }
    function formatAnimationCss(css, that) {
        if ("offset" in css) {
            let { offset } = css;
            delete css.offset;
            //@ts-ignore
            let end = formatCss(css, that);
            css.offset = offset;
            return end;
        }
        //@ts-ignore
        else
            return formatCss(css, that);
    }
    class TransformProp {
        constructor(transform) {
            this.primitives = {};
            this.changed = true;
            if (transform) {
                let split = transform.split(")");
            }
        }
        set translate(to) {
            // TODO: why not split(",")
            if (!(to instanceof Array))
                to = to.split(" ");
            this.allocate(to, ["translateX", "translateY", "translateZ"]);
        }
        // TODO maybe split this up and return a number[] of the translates; this would have to be consitently implemented through all css (like margin or padding)
        get translate() {
            return this.combineVals("translateX", "translateY", "translateZ");
        }
        set scale(to) {
            if (!(to instanceof Array))
                to = to.split(" ");
            if (to[0] !== undefined) {
                if (to[1] !== undefined) {
                    if (to[2] !== undefined) {
                        this.scaleX = to[0];
                        this.scaleY = to[1];
                        this.scaleZ = to[2];
                    }
                    else {
                        this.scaleX = to[0];
                        this.scaleY = to[1];
                    }
                }
                else {
                    this.scaleX = to[0];
                    this.scaleY = to[0];
                    this.scaleZ = to[0];
                }
            }
        }
        get scale() {
            let scaleX = this.scaleX;
            let scaleY = this.scaleY;
            let scaleZ = this.scaleZ;
            if (scaleX === scaleY && scaleY === scaleZ)
                return scaleX;
            //combineVals with known vals
            let s = "";
            let a = [scaleX, scaleY, scaleZ];
            a.ea((e) => {
                s += e + " ";
            });
            return s.substr(0, s.length - 1);
        }
        set skew(to) {
            if (!(to instanceof Array))
                to = to.split(" ");
            this.allocate(to, ["skewX", "skewY"]);
        }
        get skew() {
            return this.combineVals("skewX", "skewY");
        }
        set matrix(to) {
            debugger;
            if (to instanceof Array)
                to = to.join(" ");
            let dec = decomposeMatrix(new DOMMatrix(to));
            let skew = dec.skewXY;
            delete dec.skewXY;
            delete dec.skewXZ;
            delete dec.skewYZ;
            for (let d in dec) {
                if (dec[d] === 0)
                    delete this[d];
                //@ts-ignore
                else
                    this[d] = formatStyle(d, dec[d], false);
            }
            //@ts-ignore
            this.skewX = formatStyle("skewX", skew, false);
        }
        combineVals(...vals) {
            let s = "";
            vals.ea((val) => {
                let e = this[val];
                if (e !== TransformProp.primitiveDefaults[val])
                    s += e + " ";
            });
            return s.length === 0 ? TransformProp.primitiveDefaults[vals.first] : s.substr(0, s.length - 1);
        }
        allocate(input, funcs) {
            funcs.ea((func, i) => {
                //@ts-ignore
                if (input[i] !== undefined)
                    this[func] = input[i];
            });
        }
        toString() {
            if (this.changed) {
                this.changed = false;
                this.store = "";
                for (let prop of TransformProp.primitiveTransformProps) {
                    // This MUST formated in the following order to achive consitent results [translate rotate skew scale]
                    if (prop in this.primitives)
                        if (this.primitives[prop] !== TransformProp.primitiveDefaults[prop])
                            this.store += prop + TransformProp.clampOpen + this.primitives[prop] + TransformProp.clampClose;
                }
            }
            return this.store || "none";
        }
    }
    TransformProp.primitiveDefaults = {
        translateX: "0px",
        translateY: "0px",
        translateZ: "0px",
        rotateX: "0deg",
        rotateY: "0deg",
        rotateZ: "0deg",
        skewX: "0deg",
        skewY: "0deg",
        scaleX: "1",
        scaleY: "1",
        scaleZ: "1",
        perspective: "none"
    };
    TransformProp.primitiveTransformProps = Object.keys(TransformProp.primitiveDefaults);
    TransformProp.umbrellaTransformProps = [
        "rotate", "rotate3d", "scale", "scale3d", "translate", "translate3d", "skew", "matrix", "matrix3d"
    ];
    TransformProp.transformProps = [...TransformProp.primitiveTransformProps, ...TransformProp.umbrellaTransformProps];
    TransformProp.applies = (...prop) => {
        return TransformProp.transformProps.contains(...prop);
    };
    TransformProp.clampOpen = "(";
    TransformProp.clampClose = ") ";
    TransformProp.primitiveTransformProps.ea((prop) => {
        Object.defineProperty(TransformProp.prototype, prop, {
            get() {
                return this.primitives[prop] || TransformProp.primitiveDefaults[prop];
            },
            set(style) {
                this.changed = true;
                this.primitives[prop] = style;
            }
        });
    });
    p.css = function (key_css, val) {
        if (typeof key_css === "object") {
            let css = cloneData(key_css);
            formatCss(css, this);
            for (let prop in css) {
                this.style[prop] = css[prop];
            }
        }
        else if (val !== undefined && typeof val !== "boolean") {
            let s = formatStyle(key_css, val, this);
            if (!(s instanceof TransformProp))
                this.style[key_css] = s;
            else
                this.style.transform = s.toString();
        }
        else {
            let s;
            if (TransformProp.applies(key_css)) {
                if (elemsWithoutConsitentTransformProps.includes({ elem: this })) {
                    let t = new TransformProp();
                    t.matrix = getComputedStyle(this).transform;
                    s = t[key_css];
                }
                else
                    s = getTransformProps(this)[key_css];
            }
            else {
                s = window.getComputedStyle(this)[key_css];
            }
            if (s === undefined)
                throw "Unknown key \"" + key_css + "\".";
            if (val || s.split(" ").length > 1)
                return s;
            let n = parseFloat(s);
            if (isNaN(n))
                return s;
            return n;
        }
        return this;
    };
    function currentFrame(keys, that) {
        let ret = {};
        let cs = getComputedStyle(that);
        let hasTransformProp = [];
        for (let key of keys) {
            if (TransformProp.applies(key))
                hasTransformProp.add(key);
            else
                ret[key] = cs[key] || "0";
        }
        if (hasTransformProp) {
            let props = transfromProps.get(that);
            for (let prop of hasTransformProp) {
                ret[prop] = props[prop];
            }
        }
        ret.offset = 0;
        return ret;
    }
    let detectIfInTransitionProperty = (() => {
        function woan(key, that) {
            let s = "The transition propert";
            if (key instanceof Array)
                s += "ies \"";
            else
                s += "y \"";
            s += key.toString() + "\" is not empty for the following element. It is recommended to not use css aniamtions and this framework for the same properties.\n\nIn order to prevent an aniamtion from triggering twice in a row the result of this one will not display its result in the dom explorer.\n\n";
            console.warn(s, that);
        }
        return function (cssKeys, transitionPropertys, transitionDuration, that) {
            let warn = [];
            for (let key of cssKeys) {
                if (transitionDuration !== 0 && (transitionPropertys.includes(key) || transitionPropertys === "all")) {
                    warn.add(key);
                }
            }
            let length = warn.length;
            if (length !== 0)
                if (length === 1)
                    woan(warn[0], that);
                else
                    woan(warn, that);
            return warn;
        };
    })();
    function evaluateAllKeys(frames) {
        let allKeys = Object.keys(frames.first);
        for (let i = 1; i < frames.length; i++) {
            let keys = Object.keys(frames[i]);
            for (let e of keys) {
                if (!allKeys.includes(e))
                    allKeys.add(e);
            }
        }
        if (allKeys.includes("offset"))
            allKeys.rm("offset");
        return allKeys;
    }
    class ElemsWithoutConsitentTransformProps {
        constructor(...elems) {
            this.store = [];
            this.add(...elems);
        }
        add(...elems) {
            elems.ea((e) => {
                if (!this.includes(e))
                    this.store.add(e);
            });
        }
        rm(...elems) {
            let indices = [];
            elems.ea((e) => {
                let hasNoIdentifier = e.identifier === undefined;
                this.store.ea((s, i) => {
                    if (e === s || (s.elem === e.elem && (hasNoIdentifier || s.identifier === e.identifier)))
                        indices.add(i);
                });
            });
            this.store.rmI(...indices);
        }
        includes(...elems) {
            if (elems.ea((e) => {
                let hasNoIdentifier = e.identifier === undefined;
                if (this.store.ea((s) => {
                    if (e === s || (s.elem === e.elem && (hasNoIdentifier || s.identifier === e.identifier)))
                        return true;
                }))
                    return true;
            }))
                return true;
            return false;
        }
    }
    let easeInOut = new Easing("easeInOut");
    // let ease = new Easing("ease")
    let easeInOutFunc = easeInOut.function;
    // let easeInOutString = easeInOut.string
    // let easeFunc = ease.function
    // let easeString = ease.string
    let maxAnimationProgress = .9999999;
    let minAnimationProgress = 0.0000001;
    let nameSpaceIndex = new Map();
    let elemsWithoutConsitentTransformProps = new ElemsWithoutConsitentTransformProps();
    let maxProgressInOneStep = .1;
    // .1 / 16.6666666666666667
    let maxProgressInOneStepWithoutDelta = .006;
    let frameDelta = 16.6666666666666667;
    let lastFrameTimeStamp = 0;
    let loop = (frameTimeStamp) => {
        frameDelta = frameTimeStamp - lastFrameTimeStamp;
        lastFrameTimeStamp = frameTimeStamp;
        requestAnimationFrame(loop);
        // log(frameDelta)
    };
    requestAnimationFrame(loop);
    // TODO: maybe HTML attrbs anim
    // So that you could animate innerHTML e.g.
    // maybe fade aout font-color and then back... or just set it
    // TODO: add x as shorthand for translate X usw.
    // TODO: instead of options just the duration can be given as well. so elem.anim({...}, 300)
    // TODO: make warning if animation to or from auto. Based on https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions#Which_CSS_properties_can_be_transitioned
    p.anim = async function (frame_frames, options = {}, guidance) {
        let props = transfromProps.get(this);
        if (props === undefined)
            transfromProps.set(this, new TransformProp());
        let animationIsGuided = guidance !== undefined;
        //@ts-ignore
        if (frame_frames[Object.keys(frame_frames)[0]] instanceof Array)
            frame_frames = convertFrameStructure(frame_frames);
        else
            frame_frames = cloneData(frame_frames);
        if (nameSpaceIndex.get(this) === undefined)
            nameSpaceIndex.set(this, []);
        let ns = nameSpaceIndex.get(this);
        if (options.name === undefined) {
            let inc = 1;
            while (ns.includes(inc.toString())) {
                inc++;
            }
            let s = inc.toString();
            //@ts-ignore
            options.name = s;
            ns.add(s);
        }
        else {
            let inc = 2;
            let name;
            if (!ns.includes(options.name))
                name = options.name;
            else {
                while (ns.includes(options.name + inc)) {
                    inc++;
                }
                name = options.name + inc;
            }
            //@ts-ignore
            options.name = name;
            ns.add(name);
        }
        let progressNameString = "animation-" + options.name + "-progress";
        let endFrames;
        let transitionProperty = this.css("transition-property");
        let transitionDuration = this.css("transition-duration");
        let needToCalculateInitalFrame = false;
        let allKeys;
        if (frame_frames instanceof Array) {
            let frames = frame_frames;
            allKeys = [];
            for (let frame of frames) {
                let keys = Object.keys(frame);
                if (keys.includes("offset"))
                    keys.rmV("offset");
                for (let key of keys) {
                    if (!allKeys.includes(key))
                        allKeys.add(key);
                }
            }
            if (frames[0].offset !== 0) {
                needToCalculateInitalFrame = true;
                let initFrame = currentFrame(allKeys, this);
                frames.dda(initFrame);
            }
            spreadOffset(frames);
            let needed = new Map();
            for (let i = 0; i < frames.length; i++) {
                let frame = frames[i];
                let thiskeys = Object.keys(frame);
                if (thiskeys.includes("offset"))
                    thiskeys.rmV("offset");
                for (let key of allKeys) {
                    if (!thiskeys.includes(key)) {
                        let prevStyle;
                        let nextStyle;
                        let prevOffset;
                        let nextOffset;
                        let wantedOffset = frame.offset;
                        for (let j = 0; j < frames.length; j++) {
                            let framej = frames[j];
                            if (framej[key] !== undefined) {
                                if (j < i) {
                                    prevStyle = framej[key];
                                    prevOffset = framej.offset;
                                }
                                else {
                                    nextStyle = framej[key];
                                    nextOffset = framej.offset;
                                    break;
                                }
                            }
                        }
                        if (prevStyle === undefined) {
                            frame[key] = nextStyle;
                        }
                        else if (nextStyle === undefined) {
                            frame[key] = prevStyle;
                        }
                        else if (nextStyle === prevStyle) {
                            frame[key] = prevStyle;
                        }
                        else {
                            let at = ((wantedOffset - prevOffset) / (nextOffset - prevOffset));
                            let me = needed.get(frame);
                            if (me !== undefined) {
                                let f = me.ea((e) => {
                                    if (e.identify.prevOffset === prevOffset && e.identify.nextOffset === nextOffset) {
                                        e.frames[0][key] = prevStyle;
                                        e.frames[1][key] = nextStyle;
                                        e.keys.add(key);
                                        return true;
                                    }
                                });
                                if (!f) {
                                    me.add({
                                        keys: [key],
                                        at,
                                        frames: [
                                            { [key]: prevStyle },
                                            { [key]: nextStyle }
                                        ],
                                        identify: {
                                            prevOffset,
                                            nextOffset
                                        }
                                    });
                                }
                            }
                            else {
                                needed.set(frame, [
                                    {
                                        keys: [key],
                                        at,
                                        frames: [
                                            { [key]: prevStyle },
                                            { [key]: nextStyle }
                                        ],
                                        identify: {
                                            prevOffset,
                                            nextOffset
                                        }
                                    }
                                ]);
                            }
                        }
                    }
                }
            }
            let notAlreadyFormattedFrames = [];
            for (let frame of frames) {
                if (needed.get(frame) === undefined)
                    formatAnimationCss(frame, true);
                else
                    notAlreadyFormattedFrames.add(frame);
            }
            let proms = [];
            needed.forEach((ne, frame) => {
                ne.ea((e) => {
                    proms.add(getStyleAtProgress([e.frames, e], 1).then((style) => {
                        for (let key in style) {
                            frame[key] = style[key];
                        }
                    }));
                });
            });
            await Promise.all(proms);
            notAlreadyFormattedFrames.ea((frame) => {
                formatAnimationCss(frame, true);
            });
            allKeys = evaluateAllKeys(frames);
            endFrames = frames;
        }
        else {
            formatAnimationCss(frame_frames, true);
            allKeys = Object.keys(frame_frames);
            if (allKeys.includes("offset"))
                allKeys.rmV("offset");
            needToCalculateInitalFrame = true;
            let initFrame = currentFrame(allKeys, this);
            endFrames = [initFrame, frame_frames];
        }
        let detectedProperties = detectIfInTransitionProperty(allKeys, transitionProperty, transitionDuration, this);
        let cssCanBeUsedToFill = allKeys.excludes(...detectedProperties);
        let elemsWithoutConsitentTransformPropsKey = { elem: this, identifier: options.name };
        if (!animationIsGuided) {
            let o = options;
            elemsWithoutConsitentTransformProps.add(elemsWithoutConsitentTransformPropsKey);
            //Defaults
            //@ts-ignore
            if (o.duration === undefined)
                o.duration = 200;
            else if (o.duration <= 0)
                throw "Given option duration " + o.duration + " cannot be negative.";
            //@ts-ignore
            if (o.iterations === undefined)
                o.iterations = 1;
            else if (o.iterations <= 0)
                throw "Given option iterations " + o.iterations + " cannot be negative.";
            //@ts-ignore
            if (o.easing === undefined) {
                //@ts-ignore
                o.easing = "ease";
            }
            else {
                //@ts-ignore
                if (o.easing instanceof Easing)
                    o.easing = o.easing.string;
            }
            let fill = o.fill;
            if (fill === undefined)
                fill = true;
            //@ts-ignore
            o.fill = "both";
            return await new Promise(async (res, rej) => {
                let animation;
                let errorInAnimation = false;
                try {
                    animation = this.animate(endFrames, o);
                }
                catch (e) {
                    console.error(`
  Encountered following error while attempting to animate.
  
  --------
  
  ` + e.message + `
  
  --------
  
  
  Falling back on css to prevent logic failures.`, frame_frames);
                    this.css(endFrames.last);
                    transfromProps.get(this).matrix = getComputedStyle(this).transform;
                    elemsWithoutConsitentTransformProps.rm(elemsWithoutConsitentTransformPropsKey);
                    rej(e);
                    errorInAnimation = true;
                    this.setAttribute(progressNameString, "Failed");
                    setTimeout(() => {
                        this.removeAttribute(progressNameString);
                        ns.rmV(options.name);
                    }, 1000);
                }
                let iterations = o.iterations;
                if (iterations !== Infinity)
                    animation.onfinish = () => {
                        let lastFrame = endFrames.last;
                        transfromProps.get(this).matrix = lastFrame.transform;
                        elemsWithoutConsitentTransformProps.rm(elemsWithoutConsitentTransformPropsKey);
                        if (fill && cssCanBeUsedToFill) {
                            this.css(lastFrame);
                            animation.cancel();
                        }
                        res();
                    };
                let displayProgress = () => {
                    if (errorInAnimation)
                        return;
                    let freq = o.duration / 100;
                    let min = 16;
                    if (freq < min)
                        freq = min;
                    let cur = 0;
                    let progress = 0;
                    let int = setInterval(() => {
                        cur += freq;
                        progress = Math.round((cur / o.duration) * 100);
                        if (progress >= 100) {
                            clearInterval(int);
                            iterations--;
                            if (iterations <= 0) {
                                setTimeout(() => {
                                    this.removeAttribute(progressNameString);
                                    ns.rmV(options.name);
                                }, 1000);
                            }
                            else
                                displayProgress();
                            progress = 100;
                        }
                        this.setAttribute(progressNameString, progress + "%");
                    }, freq);
                };
                displayProgress();
            });
        }
        else {
            //@ts-ignore
            let o = options;
            let easingFunc;
            // Defaults
            //@ts-ignore
            if (o.start === undefined)
                o.start = 0;
            //@ts-ignore
            if (o.end === undefined)
                o.end = o.start + 100;
            //@ts-ignore
            if (o.smooth === undefined)
                o.smooth = true;
            //@ts-ignore
            if (o.active === undefined)
                o.active = new Data(true);
            if (o.easing === undefined) {
                easingFunc = easeInOutFunc;
            }
            else {
                //@ts-ignore
                if (typeof o.easing === "string")
                    o.easing = new Easing(o.easing);
                easingFunc = o.easing.function;
            }
            if (o.start >= o.end)
                throw "Given option start " + o.start + " and end " + o.end + " are not consistent. End must be greater than start.";
            o.active.subscribe((active) => {
                notActive = !active;
                if (active) {
                    elemsWithoutConsitentTransformProps.add(elemsWithoutConsitentTransformPropsKey);
                    subscription();
                }
                else {
                    if (elemsWithoutConsitentTransformProps.includes(elemsWithoutConsitentTransformPropsKey)) {
                        transfromProps.get(this).matrix = getComputedStyle(this).transform;
                        elemsWithoutConsitentTransformProps.rm(elemsWithoutConsitentTransformPropsKey);
                    }
                    this.setAttribute(progressNameString, "Inactive");
                }
            }, false);
            //move constants
            let inSmoothing;
            let cancelSmoothing;
            let lastAnimation;
            let lastProgress = minAnimationProgress;
            let progress = minAnimationProgress;
            let progressAbsorption = 0;
            let nextProgress = 1;
            let prevProgress = 0;
            let slide = 0;
            let lastProgressAbsorption = progressAbsorption;
            let rawProgress = minAnimationProgress;
            let rawLastProgress = minAnimationProgress;
            let notActive = !o.active.val;
            let notInLimitCorrection = true;
            let absuluteProgress;
            let subscription = () => {
                if (notActive)
                    return;
                lastProgress = progress;
                rawLastProgress = rawProgress;
                progress = progressToSaveProgress(((absuluteProgress - o.start) / (o.end - o.start)));
                rawProgress = progress;
                if (progress === lastProgress)
                    return;
                if (inSmoothing) {
                    cancelSmoothing();
                    if (rawLastProgress === rawProgress)
                        return;
                }
                if (o.smooth) {
                    if (rawLastProgress < rawProgress) {
                        progressAbsorption = progressAbsorption * (rawProgress - nextProgress) / (rawLastProgress - nextProgress);
                    }
                    else {
                        progressAbsorption = progressAbsorption * (rawProgress - prevProgress) / (rawLastProgress - prevProgress);
                    }
                    if ((lastProgressAbsorption < 0 && progressAbsorption >= 0) || (progressAbsorption <= 0 && lastProgressAbsorption > 0)) {
                        progressAbsorption = 0;
                    }
                    progress += progressAbsorption;
                    lastProgressAbsorption = progressAbsorption;
                    slide = (slide / 1.7) + ((progress - lastProgress) / frameDelta);
                }
                let diff = progress - lastProgress;
                let overlimit = Math.abs(diff) > maxProgressInOneStep;
                if (overlimit) {
                    progress = progressToSaveProgress(lastProgress + (((diff > 0) ? maxProgressInOneStepWithoutDelta : -maxProgressInOneStepWithoutDelta) * frameDelta));
                }
                if (lastProgress === minAnimationProgress || lastProgress === maxAnimationProgress) {
                    if (needToCalculateInitalFrame) {
                        endFrames[0] = currentFrame(allKeys, this);
                        needToCalculateInitalFrame = false;
                    }
                    if (o.inCb !== undefined) {
                        if (typeof o.inCb === "string")
                            this[o.inCb]();
                        else
                            o.inCb.call(this);
                    }
                }
                //animation
                setTimeout(() => {
                    this.setAttribute(progressNameString, Math.round(progress * 100) + "%");
                }, 0);
                if (lastAnimation !== undefined)
                    lastAnimation.cancel();
                let thisAnimation;
                let op = { duration: 100, fill: "both", easing: "linear", iterations: 1, iterationStart: progressToSaveProgress(easingFunc(progress)) };
                try {
                    thisAnimation = this.animate(endFrames, op);
                    thisAnimation.pause();
                    lastAnimation = thisAnimation;
                }
                catch (e) {
                    errorAnimation("main", endFrames, op, this, e);
                    progressAbsorption = 0;
                    progress = 0;
                }
                requestAnimationFrame(() => {
                    if (overlimit && !(progress <= minAnimationProgress || progress >= maxAnimationProgress)) {
                        notInLimitCorrection = false;
                        subscription();
                        return;
                    }
                    else
                        notInLimitCorrection = true;
                    requestAnimationFrame(() => {
                        if (thisAnimation === lastAnimation) {
                            let rdyToSetEndVals;
                            if (o.smooth) {
                                let resRdyToSetEndVals;
                                rdyToSetEndVals = new SyncProm((res) => {
                                    resRdyToSetEndVals = res;
                                });
                                inSmoothing = true;
                                let cancelAnimationSmoothing;
                                cancelSmoothing = () => {
                                    cancelAnimationSmoothing = true;
                                    cleanUpSmoothening(true);
                                };
                                let smoothProgress = progress;
                                let localCopyOfProgress = progress;
                                let that = this;
                                smooth();
                                function smooth() {
                                    if (cancelAnimationSmoothing) {
                                        cancelAnimationSmoothing = false;
                                        return;
                                    }
                                    smoothProgress += slide * frameDelta;
                                    slide = slide * .5;
                                    // To be honest I dont know why this cant be just done once at to start of cleanUpSmoothening but wired things happen if it doesnt go here
                                    // this keyframes show the problem {translateX: 500}, {translateY: 500, backgroundColor: "red"},
                                    smoothProgress = progressToSaveProgress(smoothProgress);
                                    let easedSmoothProgress = easingFunc(smoothProgress);
                                    let minBorderReached = easedSmoothProgress <= minAnimationProgress;
                                    let maxBorderReached = easedSmoothProgress >= maxAnimationProgress;
                                    if (minBorderReached)
                                        easedSmoothProgress = minAnimationProgress;
                                    else if (maxBorderReached)
                                        easedSmoothProgress = maxAnimationProgress;
                                    if (lastAnimation !== undefined)
                                        lastAnimation.cancel();
                                    let op = { duration: 100, fill: "both", easing: "linear", iterations: 1, iterationStart: easedSmoothProgress };
                                    try {
                                        lastAnimation = that.animate(endFrames, op);
                                        lastAnimation.pause();
                                    }
                                    catch (e) {
                                        errorAnimation("smooth", endFrames, op, that, e);
                                        progressAbsorption = 0;
                                        progress = 0;
                                        return;
                                    }
                                    if (Math.abs(slide) >= .000001 && !(minBorderReached || maxBorderReached))
                                        requestAnimationFrame(smooth);
                                    else
                                        cleanUpSmoothening(false);
                                }
                                function cleanUpSmoothening(hurry) {
                                    slide = 0;
                                    let smallerProgress;
                                    let biggerProgress;
                                    if (localCopyOfProgress < smoothProgress) {
                                        smallerProgress = localCopyOfProgress;
                                        biggerProgress = smoothProgress;
                                    }
                                    else {
                                        smallerProgress = smoothProgress;
                                        biggerProgress = localCopyOfProgress;
                                    }
                                    for (let { offset } of endFrames) {
                                        if (offset <= smallerProgress) {
                                            prevProgress = offset;
                                        }
                                        else if (offset >= biggerProgress) {
                                            nextProgress = offset;
                                            break;
                                        }
                                    }
                                    progressAbsorption = progressAbsorption + ((smoothProgress - localCopyOfProgress));
                                    lastProgressAbsorption = progressAbsorption;
                                    if (hurry)
                                        lastProgress = smoothProgress;
                                    else
                                        progress = smoothProgress;
                                    inSmoothing = false;
                                    resRdyToSetEndVals(hurry);
                                }
                            }
                            else
                                rdyToSetEndVals = SyncProm.resolve(false);
                            rdyToSetEndVals.then((hurry) => {
                                if (!hurry) {
                                    let currentFrame = {};
                                    let cs = getComputedStyle(this);
                                    allKeys.ea((key) => {
                                        currentFrame[key] = cs[key];
                                    });
                                    //@ts-ignore
                                    if (currentFrame.transform !== undefined && elemsWithoutConsitentTransformProps.includes(elemsWithoutConsitentTransformPropsKey)) {
                                        let me = transfromProps.get(this);
                                        //@ts-ignore
                                        me.matrix = currentFrame.transform;
                                        elemsWithoutConsitentTransformProps.rm(elemsWithoutConsitentTransformPropsKey);
                                        first = true;
                                        let transform = me.toString();
                                        //@ts-ignore
                                        if (transform !== "none")
                                            currentFrame.transform = transform;
                                        //@ts-ignore
                                        else
                                            delete currentFrame.transform;
                                    }
                                    this.css(currentFrame);
                                }
                                if (cssCanBeUsedToFill)
                                    lastAnimation.cancel();
                                lastAnimation = undefined;
                                if (progress === minAnimationProgress || progress === maxAnimationProgress) {
                                    if (o.outCb !== undefined) {
                                        if (typeof o.outCb === "string")
                                            this[o.outCb]();
                                        else
                                            o.outCb.call(this);
                                    }
                                }
                            });
                        }
                    });
                });
            };
            let first = true;
            guidance.subscribe((progress) => {
                if (first) {
                    elemsWithoutConsitentTransformProps.add(elemsWithoutConsitentTransformPropsKey);
                    first = false;
                }
                absuluteProgress = progress;
                if (notInLimitCorrection) {
                    subscription();
                }
            }, false);
        }
    };
    function errorAnimation(thread, workingFrames, options, that, error) {
        console.error("Unexpected error while animating (Thread: " + thread + ") using the following parameters\n\nFrames: ", workingFrames, "\nOptions: ", options, "\n\nSetting progressAbsorption to 0 to prevent further failures.\nthis: ", that, "\nException: \n", error);
    }
    class SyncProm {
        constructor(cb) {
            this._then = [];
            this.hasBeenResed = false;
            if (cb !== undefined) {
                cb(this._res.bind(this), this._rej.bind(this));
            }
            else {
                this.res = this._res;
                this.rej = this._rej;
            }
        }
        static resolve(res) {
            return new SyncProm((r) => { r(res); });
        }
        static reject() {
            return new SyncProm((r, n) => { n(); });
        }
        _res(val) {
            let then = this._then;
            for (let i = 0; i < then.length; i++) {
                then[i](val);
                delete then[i];
            }
            this.hasBeenResed = true;
            this.resVal = val;
        }
        _rej() {
            delete this._then;
            this.hasBeenResed = null;
        }
        then(to) {
            if (this.hasBeenResed) {
                to(this.resVal);
            }
            else if (this.hasBeenResed !== null) {
                this._then.add(to);
            }
        }
    }
    //Hardcode the spread of offset here similiar to how it is calculated intern, in order to later inject smoothended frame.
    function spreadOffset(frames) {
        frames.first.offset = 0;
        frames.last.offset = 1;
        if (frames.length === 2)
            return;
        let last = 1;
        let lastOffset = -1;
        for (let i = last; i < frames.length; i++) {
            let l = i + 1;
            let o = frames[i].offset;
            if (o !== undefined && o !== null) {
                if (o >= lastOffset && o >= 0 && o <= 1) {
                    lastOffset = o;
                    frames.slice(last, l);
                    let start = frames[last - 1].offset;
                    let end = frames[i].offset;
                    let space = (end - start) / (l - last);
                    let offset = start;
                    for (let j = last; j < i; j++) {
                        offset += space;
                        frames[j].offset = offset;
                    }
                    last = l;
                }
                else
                    throw "Offsets must be given in incrementing sequence, spanning between 0 - 1";
            }
        }
    }
    // transform props distinguish
    function convertFrameStructure(ob) {
        let max = 0;
        for (let key in ob) {
            let x = ob[key].length;
            if (max < x)
                max = x;
        }
        let o = [];
        for (let i = 0; i < max; i++) {
            o[i] = {};
        }
        for (let key in ob) {
            ob[key].forEach((val, i) => {
                o[i][key] = val;
            });
        }
        return o;
    }
    function setupBackgroundTask(task, constraint = { time: 16, timeout: 16 }) {
        //@ts-ignore
        if (constraint.timeout === undefined)
            constraint.timeout = 16;
        const requestQueue = [];
        let importanceStructureHasChanged = false;
        let recursionOngoing = false;
        let start;
        let iterationsAsConstraint = "iterations" in constraint;
        let initRecursion = iterationsAsConstraint ? () => {
            start = 0;
        } : () => {
            start = new Date();
        };
        let compairConstraint = iterationsAsConstraint ? () => {
            //@ts-ignore
            start++;
            //@ts-ignore
            return start > constraint.iterations;
        } : () => {
            //@ts-ignore
            return new Date() - start > constraint.time;
        };
        function changeImportanceStructure() {
            importanceStructureHasChanged = true;
        }
        return function execute(params, importance = 0) {
            return new Promise((res) => {
                if (importance instanceof Data) {
                    requestQueue.add({ importance, params, res });
                    importance.subscribe(changeImportanceStructure);
                }
                else
                    requestQueue.add({ importance: { val: importance }, params, res });
                if (!recursionOngoing) {
                    recursionOngoing = true;
                    setTimeout(() => {
                        initRecursion();
                        recursivelyCallElems();
                    }, 0);
                }
            });
        };
        async function recursivelyCallElems() {
            if (importanceStructureHasChanged) {
                sortRequestQueue();
                importanceStructureHasChanged = false;
            }
            if (!requestQueue.empty) {
                let elem = requestQueue.first;
                elem.res(task(...elem.params));
                requestQueue.rmI(0);
                if (compairConstraint()) {
                    setTimeout(() => {
                        initRecursion();
                        recursivelyCallElems();
                    }, constraint.timeout);
                }
                else
                    recursivelyCallElems();
            }
            else {
                recursionOngoing = false;
            }
        }
        function sortRequestQueue() {
            requestQueue.sort(({ importance: a }, { importance: b }) => {
                return a.val - b.val;
            });
        }
    }
    function progressToSaveProgress(progress) {
        if (progress < minAnimationProgress)
            progress = minAnimationProgress;
        else if (progress > maxAnimationProgress)
            progress = maxAnimationProgress;
        return progress;
    }
    let getStyleAtProgress = (() => {
        // TODO: maybe dont make wrapper, but use current element to determin style 
        // (the idea is that when the animation is canceled imediatly it shouldnt 
        // have any impact on drawn frames)
        let wrapper = document.createElement("get-style-at-progress-element-wrapper");
        wrapper.css({ display: "block", position: "absolute", width: "100%", height: "100vh", translateY: "-999999999vh" });
        let elem = document.createElement("get-style-at-progress-element");
        document.body.apd(wrapper.apd(elem));
        return setupBackgroundTask(getStyleAtProgress);
        function getStyleAtProgress(frames, intrest) {
            let { keys } = intrest;
            let transformKeys = [];
            keys.ea((e) => {
                if (TransformProp.applies(e)) {
                    transformKeys.add(e);
                }
            });
            keys.rmV(...transformKeys);
            frames.ea((frame) => {
                formatCss(frame, true);
            });
            let animation = elem.animate(frames, {
                duration: 100,
                fill: "both",
                easing: "linear",
                iterations: 1,
                iterationStart: progressToSaveProgress(intrest.at)
            });
            let res = {};
            let cs = getComputedStyle(elem);
            if (!transformKeys.empty) {
                let t = new TransformProp();
                //@ts-ignore
                t.matrix = cs.transform;
                transformKeys.ea((key) => {
                    res[key] = t.primitives[key];
                });
            }
            for (let k of keys) {
                res[k] = cs[k];
            }
            animation.cancel();
            return res;
        }
    })();
}
//empty nodes selector
//extend NodeLs api with native HTMLElement functions like remove()
export class NodeLs extends Array {
    constructor(...a) {
        super(...a);
    }
    //                                                                                                                                              TODO: change for stagger (delay between elements get animated), when undefined all at once
    async anim(frame_frames, options = {}, guided = false, oneAfterTheOther = false) {
        this.warn("anim");
        if (oneAfterTheOther) {
            for (let e of this) {
                //@ts-ignore
                await e.anim(frame_frames, options, guided);
            }
        }
        else {
            let ls = [];
            for (let e of this) {
                //@ts-ignore
                ls.add(e.anim(frame_frames, options, guided));
            }
            await Promise.all(ls);
        }
    }
    on(event, callback) {
        this.exec("on", arguments);
        return this;
    }
    show() {
        this.exec("show", arguments);
        return this;
    }
    removeClass(className) {
        this.exec("removeClass", arguments);
        return this;
    }
    apd(...elems) {
        this.exec("apd", arguments);
        return this;
    }
    emptyNodes() {
        this.exec("empty", arguments);
        return this;
    }
    hide() {
        this.exec("hide", arguments);
        return this;
    }
    css(key_css, val) {
        this.exec("css", arguments);
        return this;
    }
    childs(selector = 1) {
        let ls = new NodeLs();
        this.ea((e) => {
            ls.add(...e.childs(selector));
        });
        return ls;
    }
    addClass(...classNames) {
        this.exec("addClass", arguments);
        return this;
    }
    hasClass(...classNames) {
        let has = true;
        this.ea((e) => {
            if (!e.hasClass(...classNames))
                has = false;
        });
        return has;
    }
    toggleClass(...classNames) {
        this.exec("toggleClass", arguments);
        return this;
    }
    off(type, listener, options) {
        this.exec("off", arguments);
        return this;
    }
    set html(to) {
        this.ea((e) => {
            e.html = to;
        });
    }
    get html() {
        let s = "";
        this.ea((e) => {
            s += e.html;
        });
        return s;
    }
    set inner(to) {
        this.ea((e) => {
            e.inner = to;
        });
    }
    warn(cmd) {
        if (this.length === 0)
            console.warn("Trying to execute command \"" + cmd + "\" on empty NodeLs.");
    }
    exec(functionName, args) {
        this.warn(functionName);
        this.ea((e) => {
            e[functionName](...args);
        });
    }
}
export class Tel {
    constructor(nodes, event, listener, enable = true) {
        this._enabled = false;
        this.p = new Nel(undefined, event, listener);
        if (nodes instanceof Array)
            this.p.nodes = new NodeLs(...nodes);
        else
            this.p.nodes = new NodeLs(nodes);
        if (enable)
            this.enable();
    }
    get nodes() {
        return new NodeLs(...this.p.nodes);
    }
    get event() {
        return this.p.event;
    }
    get listener() {
        return this.p.listener;
    }
    setNode(...node) {
        this.disable();
        this.p.nodes = new NodeLs(...node);
        this.enable();
    }
    set event(event) {
        this.disable();
        this.p.event = event;
        this.enable();
    }
    set listener(listener) {
        this.disable();
        this.p.listener = listener;
        this.enable();
    }
    set enabled(to) {
        if (to) {
            if (this._enabled)
                return;
            this.p.nodes.on(this.event, this.listener);
        }
        else {
            if (!this._enabled)
                return;
            this.p.nodes.off(this.event, this.listener);
        }
        this._enabled = to;
    }
    get enabled() {
        return this._enabled;
    }
    enable() {
        this.enabled = true;
    }
    disable() {
        this.enabled = false;
    }
    repatch() {
        this.disable();
        this.enable();
    }
}
class Nel {
    constructor(nodes, event, listener) {
        this.nodes = nodes;
        this.event = event;
        this.listener = listener;
    }
}
function cloneData(a) {
    return JSON.parse(JSON.stringify(a));
}
export class Easing {
    constructor(x1_keyword, y1, x2, y2) {
        if (typeof x1_keyword !== "number") {
            this.keyword = x1_keyword;
        }
        else {
            this.x1 = x1_keyword;
            this.y1 = y1;
            this.x2 = x2;
            this.y2 = y2;
        }
    }
    get string() {
        if (this.keyword === undefined)
            return "cubic-bezier(" + this.x1 + "," + this.y1 + "," + this.x2 + "," + this.y2 + ")";
        return camelCaseToDash(this.keyword);
    }
    get function() {
        if (this.keyword !== undefined) {
            let f = Easing.keywords[dashToCamelCase(this.keyword)];
            this.x1 = f[0];
            this.y1 = f[1];
            this.x2 = f[2];
            this.y2 = f[3];
        }
        return baz(this.x1, this.y1, this.x2, this.y2);
    }
}
Easing.keywords = {
    linear: [.25, .25, .75, .75],
    ease: [.25, .1, .25, 1],
    easeIn: [.42, 0, 1, 1],
    easeOut: [0, 0, .58, 1],
    easeInOut: [.42, 0, .58, 1]
};
