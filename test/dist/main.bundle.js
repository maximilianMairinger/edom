/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "test/dist/" + ({"vendors~resizeObserverPolyfill":"vendors~resizeObserverPolyfill","vendors~webAnimationsApiPolyfill":"vendors~webAnimationsApiPolyfill"}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./test/test.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./edom.ts":
/*!*****************!*\
  !*** ./edom.ts ***!
  \*****************/
/*! exports provided: default, NodeLs, Tel, Easing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeLs", function() { return NodeLs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tel", function() { return Tel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Easing", function() { return Easing; });
/* harmony import */ var bezier_easing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bezier-easing */ "./node_modules/bezier-easing/src/index.js");
/* harmony import */ var bezier_easing__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bezier_easing__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dash_camelcase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dash-camelcase */ "./node_modules/dash-camelcase/dist/dash-camelcase.js");
/* harmony import */ var dash_camelcase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dash_camelcase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var front_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! front-db */ "./node_modules/front-db/dist/dataBase.js");
/* harmony import */ var front_db__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(front_db__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var decompose_dommatrix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! decompose-dommatrix */ "./node_modules/decompose-dommatrix/dist/decomposeDOMMatrix.js");
/* harmony import */ var decompose_dommatrix__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(decompose_dommatrix__WEBPACK_IMPORTED_MODULE_3__);




// TODO: make anim only available on HTMLElement since animate is not supported on EventTraget
// IDEA modify promise returned by anim so that you can give a string as then arg which gets exectuted with this context
//@ts-ignore
let ResObs;
async function init() {
    let proms = [];
    if (Element.prototype.animate === undefined)
        proms.add(__webpack_require__.e(/*! import() | webAnimationsApiPolyfill */ "vendors~webAnimationsApiPolyfill").then(__webpack_require__.t.bind(null, /*! web-animations-js */ "./node_modules/web-animations-js/web-animations.min.js", 7)));
    //@ts-ignore
    if (window.ResizeObserver === undefined)
        proms.add(__webpack_require__.e(/*! import() | resizeObserverPolyfill */ "vendors~resizeObserverPolyfill").then(__webpack_require__.bind(null, /*! resize-observer-polyfill */ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js")).then(({ default: r }) => { ResObs = r; }));
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
            let dec = decompose_dommatrix__WEBPACK_IMPORTED_MODULE_3___default()(new DOMMatrix(to));
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
                o.active = new front_db__WEBPACK_IMPORTED_MODULE_2__["Data"](true);
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
                if (importance instanceof front_db__WEBPACK_IMPORTED_MODULE_2__["Data"]) {
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
class NodeLs extends Array {
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
class Tel {
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
class Easing {
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
        return Object(dash_camelcase__WEBPACK_IMPORTED_MODULE_1__["camelCaseToDash"])(this.keyword);
    }
    get function() {
        if (this.keyword !== undefined) {
            let f = Easing.keywords[Object(dash_camelcase__WEBPACK_IMPORTED_MODULE_1__["dashToCamelCase"])(this.keyword)];
            this.x1 = f[0];
            this.y1 = f[1];
            this.x2 = f[2];
            this.y2 = f[3];
        }
        return bezier_easing__WEBPACK_IMPORTED_MODULE_0___default()(this.x1, this.y1, this.x2, this.y2);
    }
}
Easing.keywords = {
    linear: [.25, .25, .75, .75],
    ease: [.25, .1, .25, 1],
    easeIn: [.42, 0, 1, 1],
    easeOut: [0, 0, .58, 1],
    easeInOut: [.42, 0, .58, 1]
};


/***/ }),

/***/ "./node_modules/bezier-easing/src/index.js":
/*!*************************************************!*\
  !*** ./node_modules/bezier-easing/src/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * https://github.com/gre/bezier-easing
 * BezierEasing - use bezier curve for transition easing function
 * by Gaëtan Renaudeau 2014 - 2015 – MIT License
 */

// These values are established by empiricism with tests (tradeoff: performance VS precision)
var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 0.001;
var SUBDIVISION_PRECISION = 0.0000001;
var SUBDIVISION_MAX_ITERATIONS = 10;

var kSplineTableSize = 11;
var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

var float32ArraySupported = typeof Float32Array === 'function';

function A (aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1; }
function B (aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1; }
function C (aA1)      { return 3.0 * aA1; }

// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
function calcBezier (aT, aA1, aA2) { return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT; }

// Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
function getSlope (aT, aA1, aA2) { return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1); }

function binarySubdivide (aX, aA, aB, mX1, mX2) {
  var currentX, currentT, i = 0;
  do {
    currentT = aA + (aB - aA) / 2.0;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0.0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
  return currentT;
}

function newtonRaphsonIterate (aX, aGuessT, mX1, mX2) {
 for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
   var currentSlope = getSlope(aGuessT, mX1, mX2);
   if (currentSlope === 0.0) {
     return aGuessT;
   }
   var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
   aGuessT -= currentX / currentSlope;
 }
 return aGuessT;
}

function LinearEasing (x) {
  return x;
}

module.exports = function bezier (mX1, mY1, mX2, mY2) {
  if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
    throw new Error('bezier x values must be in [0, 1] range');
  }

  if (mX1 === mY1 && mX2 === mY2) {
    return LinearEasing;
  }

  // Precompute samples table
  var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
  for (var i = 0; i < kSplineTableSize; ++i) {
    sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
  }

  function getTForX (aX) {
    var intervalStart = 0.0;
    var currentSample = 1;
    var lastSample = kSplineTableSize - 1;

    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }
    --currentSample;

    // Interpolate to provide an initial guess for t
    var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    var guessForT = intervalStart + dist * kSampleStepSize;

    var initialSlope = getSlope(guessForT, mX1, mX2);
    if (initialSlope >= NEWTON_MIN_SLOPE) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0.0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }

  return function BezierEasing (x) {
    // Because JavaScript number are imprecise, we should guarantee the extremes are right.
    if (x === 0) {
      return 0;
    }
    if (x === 1) {
      return 1;
    }
    return calcBezier(getTForX(x), mY1, mY2);
  };
};


/***/ }),

/***/ "./node_modules/dash-camelcase/dist/dash-camelcase.js":
/*!************************************************************!*\
  !*** ./node_modules/dash-camelcase/dist/dash-camelcase.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function camelCaseToDash(camelCaseString, joinWith = "-") {
    return camelCaseString.replace(/([a-z])([A-Z])/g, "$1" + joinWith + "$2").toLowerCase();
}
exports.camelCaseToDash = camelCaseToDash;
function toUpper(match, group1) {
    return group1 ? group1.toUpperCase() : '';
}
var DEFAULT_REGEX = /[-_]+(.)?/g;
function dashToCamelCase(dashString, splitAt) {
    return dashString.replace(splitAt ? new RegExp('[' + splitAt + ']+(.)', 'g') : DEFAULT_REGEX, toUpper);
}
exports.dashToCamelCase = dashToCamelCase;


/***/ }),

/***/ "./node_modules/decompose-dommatrix/dist/decomposeDOMMatrix.js":
/*!*********************************************************************!*\
  !*** ./node_modules/decompose-dommatrix/dist/decomposeDOMMatrix.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./decomposeDommatrix.mjs");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./decomposeDommatrix.mjs":
/*!********************************!*\
  !*** ./decomposeDommatrix.mjs ***!
  \********************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return decomposeDOMMatrix; });\n/* harmony import */ var _decomposeMatrix_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decomposeMatrix.mjs */ \"./decomposeMatrix.mjs\");\n/*\n\nDOMMatrix is column major, meaning:\n _               _\n| m11 m21 m31 m41 |  \n  m12 m22 m32 m42\n  m13 m23 m33 m43\n  m14 m24 m34 m44\n|_               _|\n\n*/\n\n\n\nfunction decomposeDOMMatrix(domMatrix) {\n\tconst indexableVersionOfMatrix = new Array(4);\n\tfor (let columnIndex = 1; columnIndex < 5; columnIndex++) {\n\t\tconst columnArray = indexableVersionOfMatrix[columnIndex - 1] = new Array(4);\n\t\tfor (let rowIndex = 1; rowIndex < 5; rowIndex++) {\n\t\t\tcolumnArray[rowIndex - 1] = domMatrix[`m${columnIndex}${rowIndex}`];\n\t\t}\n\t}\n\n\treturn Object(_decomposeMatrix_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(indexableVersionOfMatrix);\n}\n\n//# sourceURL=webpack://decomposeDOMMatrix/./decomposeDommatrix.mjs?");

/***/ }),

/***/ "./decomposeMatrix.mjs":
/*!*****************************!*\
  !*** ./decomposeMatrix.mjs ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return decomposeMatrix; });\n/* harmony import */ var _vectorFunctions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vectorFunctions.mjs */ \"./vectorFunctions.mjs\");\n/* harmony import */ var _roundToThreePlaces_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./roundToThreePlaces.mjs */ \"./roundToThreePlaces.mjs\");\n/* harmony import */ var _quaternionToDegreesXYZ_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quaternionToDegreesXYZ.mjs */ \"./quaternionToDegreesXYZ.mjs\");\n/*\n\nthis code is copied from https://github.com/facebook/react-native/blob/master/Libraries/Utilities/MatrixMath.js#L572 and modified\nfor some clarity and being able to work standalone. Expects the matrix to be a 4-element array of 4-element arrays of numbers.\n\n[\n    [column1 row1 value, column1 row2 value, column1 row3 value],\n    [column2 row1 value, column2 row2 value, column2 row3 value],\n    [column3 row1 value, column3 row2 value, column3 row3 value],\n    [column4 row1 value, column4 row2 value, column4 row3 value]\n]\n\n*/\n\n\n\n\n\nconst RAD_TO_DEG = 180 / Math.PI;\n\nfunction decomposeMatrix(matrix) {\n\tconst quaternion = new Array(4);\n\tconst scale = new Array(3);\n\tconst skew = new Array(3);\n\tconst translation = new Array(3);\n\n\t// translation is simple\n\t// it's the first 3 values in the last column\n\t// i.e. m41 is X translation, m42 is Y and m43 is Z\n\tfor (let i = 0; i < 3; i++) {\n\t\ttranslation[i] = matrix[3][i];\n\t}\n\n\t// Now get scale and shear.\n\tconst normalizedColumns = new Array(3);\n\tfor (let columnIndex = 0; columnIndex < 3; columnIndex++) {\n\t\tnormalizedColumns[columnIndex] = matrix[columnIndex].slice(0, 3);\n\t}\n\n\t// Compute X scale factor and normalize first row.\n\tscale[0] = _vectorFunctions_mjs__WEBPACK_IMPORTED_MODULE_0__[\"length\"](normalizedColumns[0]);\n\tnormalizedColumns[0] = _vectorFunctions_mjs__WEBPACK_IMPORTED_MODULE_0__[\"normalize\"](normalizedColumns[0], scale[0]);\n\n\t// Compute XY shear factor and make 2nd row orthogonal to 1st.\n\tskew[0] = _vectorFunctions_mjs__WEBPACK_IMPORTED_MODULE_0__[\"dotProduct\"](normalizedColumns[0], normalizedColumns[1]);\n\tnormalizedColumns[1] = _vectorFunctions_mjs__WEBPACK_IMPORTED_MODULE_0__[\"linearCombination\"](normalizedColumns[1], normalizedColumns[0], 1.0, -skew[0]);\n\n\t// Now, compute Y scale and normalize 2nd row.\n\tscale[1] = _vectorFunctions_mjs__WEBPACK_IMPORTED_MODULE_0__[\"length\"](normalizedColumns[1]);\n\tnormalizedColumns[1] = _vectorFunctions_mjs__WEBPACK_IMPORTED_MODULE_0__[\"normalize\"](normalizedColumns[1], scale[1]);\n\tskew[0] /= scale[1];\n\n\t// Compute XZ and YZ shears, orthogonalize 3rd row\n\tskew[1] = _vectorFunctions_mjs__WEBPACK_IMPORTED_MODULE_0__[\"dotProduct\"](normalizedColumns[0], normalizedColumns[2]);\n\tnormalizedColumns[2] = _vectorFunctions_mjs__WEBPACK_IMPORTED_MODULE_0__[\"linearCombination\"](normalizedColumns[2], normalizedColumns[0], 1.0, -skew[1]);\n\tskew[2] = _vectorFunctions_mjs__WEBPACK_IMPORTED_MODULE_0__[\"dotProduct\"](normalizedColumns[1], normalizedColumns[2]);\n\tnormalizedColumns[2] = _vectorFunctions_mjs__WEBPACK_IMPORTED_MODULE_0__[\"linearCombination\"](normalizedColumns[2], normalizedColumns[1], 1.0, -skew[2]);\n\n\t// Next, get Z scale and normalize 3rd row.\n\tscale[2] = _vectorFunctions_mjs__WEBPACK_IMPORTED_MODULE_0__[\"length\"](normalizedColumns[2]);\n\tnormalizedColumns[2] = _vectorFunctions_mjs__WEBPACK_IMPORTED_MODULE_0__[\"normalize\"](normalizedColumns[2], scale[2]);\n\tskew[1] /= scale[2];\n\tskew[2] /= scale[2];\n\n\t// At this point, the matrix defined in normalizedColumns is orthonormal.\n\t// Check for a coordinate system flip.  If the determinant\n\t// is -1, then negate the matrix and the scaling factors.\n\tconst pdum3 = _vectorFunctions_mjs__WEBPACK_IMPORTED_MODULE_0__[\"crossProduct\"](normalizedColumns[1], normalizedColumns[2]);\n\tif (_vectorFunctions_mjs__WEBPACK_IMPORTED_MODULE_0__[\"dotProduct\"](normalizedColumns[0], pdum3) < 0) {\n\t\tfor (let i = 0; i < 3; i++) {\n\t\t\tscale[i] *= -1;\n\t\t\tnormalizedColumns[i][0] *= -1;\n\t\t\tnormalizedColumns[i][1] *= -1;\n\t\t\tnormalizedColumns[i][2] *= -1;\n\t\t}\n\t}\n\n\t// Now, get the rotations out\n\tquaternion[0] =\n\t\t0.5 * Math.sqrt(Math.max(1 + normalizedColumns[0][0] - normalizedColumns[1][1] - normalizedColumns[2][2], 0));\n\tquaternion[1] =\n\t\t0.5 * Math.sqrt(Math.max(1 - normalizedColumns[0][0] + normalizedColumns[1][1] - normalizedColumns[2][2], 0));\n\tquaternion[2] =\n\t\t0.5 * Math.sqrt(Math.max(1 - normalizedColumns[0][0] - normalizedColumns[1][1] + normalizedColumns[2][2], 0));\n\tquaternion[3] =\n\t\t0.5 * Math.sqrt(Math.max(1 + normalizedColumns[0][0] + normalizedColumns[1][1] + normalizedColumns[2][2], 0));\n\n\tif (normalizedColumns[2][1] > normalizedColumns[1][2]) {\n\t\tquaternion[0] = -quaternion[0];\n\t}\n\tif (normalizedColumns[0][2] > normalizedColumns[2][0]) {\n\t\tquaternion[1] = -quaternion[1];\n\t}\n\tif (normalizedColumns[1][0] > normalizedColumns[0][1]) {\n\t\tquaternion[2] = -quaternion[2];\n\t}\n\n\t// correct for occasional, weird Euler synonyms for 2d rotation\n\tlet rotationDegrees;\n\tif (\n\t\tquaternion[0] < 0.001 &&\n\t\tquaternion[0] >= 0 &&\n\t\tquaternion[1] < 0.001 &&\n\t\tquaternion[1] >= 0\n\t) {\n\t\t// this is a 2d rotation on the z-axis\n\t\trotationDegrees = [\n\t\t\t0,\n\t\t\t0,\n\t\t\tObject(_roundToThreePlaces_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n\t\t\t\t(Math.atan2(normalizedColumns[0][1], normalizedColumns[0][0]) * 180) / Math.PI\n\t\t\t)\n\t\t];\n\t} else {\n\t\trotationDegrees = Object(_quaternionToDegreesXYZ_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(quaternion);\n\t}\n\n\t// expose both base data and convenience names\n\treturn {\n\t\trotateX: rotationDegrees[0],\n\t\trotateY: rotationDegrees[1],\n\t\trotateZ: rotationDegrees[2],\n\t\tscaleX: Object(_roundToThreePlaces_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(scale[0]),\n\t\tscaleY: Object(_roundToThreePlaces_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(scale[1]),\n\t\tscaleZ: Object(_roundToThreePlaces_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(scale[2]),\n\t\ttranslateX: translation[0],\n\t\ttranslateY: translation[1],\n\t\ttranslateZ: translation[2],\n\t\tskewXY: Object(_roundToThreePlaces_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(skew[0]) * RAD_TO_DEG,\n\t\tskewXZ: Object(_roundToThreePlaces_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(skew[1]) * RAD_TO_DEG,\n\t\tskewYZ: Object(_roundToThreePlaces_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(skew[2] * RAD_TO_DEG)\n\t};\n}\n\n//# sourceURL=webpack://decomposeDOMMatrix/./decomposeMatrix.mjs?");

/***/ }),

/***/ "./quaternionToDegreesXYZ.mjs":
/*!************************************!*\
  !*** ./quaternionToDegreesXYZ.mjs ***!
  \************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return quaternionToDegreesXYZ; });\n/* harmony import */ var _roundToThreePlaces_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./roundToThreePlaces.mjs */ \"./roundToThreePlaces.mjs\");\n/*\n\n copied from: https://github.com/facebook/react-native/blob/master/Libraries/Utilities/MatrixMath.js\n\n*/\n\n\n\n\nconst RAD_TO_DEG = 180 / Math.PI;\n\nfunction quaternionToDegreesXYZ(quaternion) {\n\n\tconst [qx, qy, qz, qw] = quaternion;\n\tconst qw2 = qw * qw;\n\tconst qx2 = qx * qx;\n\tconst qy2 = qy * qy;\n\tconst qz2 = qz * qz;\n\tconst test = qx * qy + qz * qw;\n\tconst unit = qw2 + qx2 + qy2 + qz2;\n\n\tif (test > 0.49999 * unit) {\n\t  return [0, 2 * Math.atan2(qx, qw) * RAD_TO_DEG, 90];\n\t}\n\tif (test < -0.49999 * unit) {\n\t  return [0, -2 * Math.atan2(qx, qw) * RAD_TO_DEG, -90];\n\t}\n\n\treturn [\n\t  Object(_roundToThreePlaces_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n\t\tMath.atan2(2 * qx * qw - 2 * qy * qz, 1 - 2 * qx2 - 2 * qz2) * RAD_TO_DEG,\n\t  ),\n\t  Object(_roundToThreePlaces_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n\t\tMath.atan2(2 * qy * qw - 2 * qx * qz, 1 - 2 * qy2 - 2 * qz2) * RAD_TO_DEG,\n\t  ),\n\t  Object(_roundToThreePlaces_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Math.asin(2 * qx * qy + 2 * qz * qw) * RAD_TO_DEG),\n\t];\n\n}\n\n//# sourceURL=webpack://decomposeDOMMatrix/./quaternionToDegreesXYZ.mjs?");

/***/ }),

/***/ "./roundToThreePlaces.mjs":
/*!********************************!*\
  !*** ./roundToThreePlaces.mjs ***!
  \********************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return roundToThreePlaces; });\n/*\n\nfrom https://github.com/facebook/react-native/blob/master/Libraries/Utilities/MatrixMath.js\n\n*/ \n\nfunction roundToThreePlaces(number){\n    const arr = number.toString().split('e');\n    return Math.round(arr[0] + 'e' + (arr[1] ? +arr[1] - 3 : 3)) * 0.001;\n}\n\n//# sourceURL=webpack://decomposeDOMMatrix/./roundToThreePlaces.mjs?");

/***/ }),

/***/ "./vectorFunctions.mjs":
/*!*****************************!*\
  !*** ./vectorFunctions.mjs ***!
  \*****************************/
/*! exports provided: length, normalize, dotProduct, crossProduct, linearCombination */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"length\", function() { return length; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"normalize\", function() { return normalize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dotProduct\", function() { return dotProduct; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"crossProduct\", function() { return crossProduct; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"linearCombination\", function() { return linearCombination; });\n/*\n\n copied from https://github.com/facebook/react-native/blob/master/Libraries/Utilities/MatrixMath.js#L572\n\n vectors are just arrays of numbers\n\n*/\n\nfunction length(vector) {\n    return Math.sqrt(\n        vector[0] * vector[0] + \n        vector[1] * vector[1] + \n        vector[2] * vector[2]\n    );\n}\n\nfunction normalize(vector, preComputedVectorLength) {\n    return [\n        vector[0]/preComputedVectorLength, \n        vector[1]/preComputedVectorLength,\n        vector[2]/preComputedVectorLength\n    ];\n}\n\nfunction dotProduct(vectorA, vectorB) {\n    return (\n        vectorA[0] * vectorB[0] +\n        vectorA[1] * vectorB[1] +\n        vectorA[2] * vectorB[2]\n    );\n}\n\nfunction crossProduct(vectorA, vectorB) {\n    return [\n        vectorA[1] * vectorB[2] - vectorA[2] * vectorB[1],\n        vectorA[2] * vectorB[0] - vectorA[0] * vectorB[2],\n        vectorA[0] * vectorB[1] - vectorA[1] * vectorB[0]\n    ];\n}\n\nfunction linearCombination(vectorA, vectorB, aScaleFactor, bScaleFactor) {\n    return [\n        vectorA[0] * aScaleFactor + vectorB[0] * bScaleFactor,\n        vectorA[1] * aScaleFactor + vectorB[1] * bScaleFactor,\n        vectorA[2] * aScaleFactor + vectorB[2] * bScaleFactor\n    ];\n}\n\n//# sourceURL=webpack://decomposeDOMMatrix/./vectorFunctions.mjs?");

/***/ })

/******/ });
});

/***/ }),

/***/ "./node_modules/front-db/dist/dataBase.js":
/*!************************************************!*\
  !*** ./node_modules/front-db/dist/dataBase.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file basically contains a observable Class (called Data) and a
// DataBase which contains a komplex (not primitiv types = objects)
// map off Observables as is often given when requesting data (e.g. JSON).
Object.defineProperty(exports, "__esModule", { value: true });
let xrray = __webpack_require__(/*! xrray */ "./node_modules/xrray/xrray.js");
xrray();
const { InvalidValueException } = xrray;
class InvalidKey extends Error {
    constructor(key, data) {
        super("Invalid key \"" + key + "\" for the following data structure:\n" + data.toString());
    }
}
exports.InvalidKey = InvalidKey;
class InvalidCast extends Error {
    constructor(castAttempt) {
        super("Cannot cast to " + castAttempt.name);
    }
}
exports.InvalidCast = InvalidCast;
// Formats fetched ( = raw) data into an nested Data construct.
function formatData(fetched, formatLocation, deleteUnseenVals = false) {
    if (formatLocation === undefined)
        formatLocation = new Data(new fetched.constructor());
    let ls;
    let updatedFormatLocation = false;
    if (deleteUnseenVals)
        ls = [];
    if (typeof fetched === "object") {
        for (let d in fetched) {
            if (!fetched.hasOwnProperty(d))
                continue;
            if (deleteUnseenVals)
                ls.add(d);
            if (typeof fetched[d] === "object") {
                if (formatLocation.val[d] === undefined)
                    formatLocation.val[d] = new Data(new fetched[d].constructor());
                formatData(fetched[d], formatLocation.val[d], deleteUnseenVals);
                updatedFormatLocation = true;
            }
            else if (formatLocation.val[d] === undefined) {
                formatLocation.val[d] = new Data(fetched[d]);
                updatedFormatLocation = true;
            }
            else if (formatLocation.val[d] instanceof Data)
                formatLocation.val[d].val = fetched[d];
        }
        if (deleteUnseenVals) {
            for (let d in formatLocation.val) {
                if (!formatLocation.val.hasOwnProperty(d))
                    continue;
                if (!ls.includes(d))
                    if (formatLocation.val instanceof Array)
                        formatLocation.val.removeI(parseInt(d));
                    else
                        delete formatLocation.val[d];
                updatedFormatLocation = true;
            }
        }
        //@ts-ignore when something is added notify listeners
        if (updatedFormatLocation)
            formatLocation.notify(true);
    }
    else
        formatLocation.val = fetched;
    return formatLocation;
}
function setData(data, location, complete) {
    if (!(location instanceof Data) && location !== undefined)
        location = new Data(location);
    let dataLocation = formatData(data, location);
    if (complete !== undefined)
        complete();
    return new DataBase(dataLocation);
}
exports.default = setData;
/*
 * Holds and handles access to an complex map of data. This data Consisits of in each other nexted Data intsances
 * (to init such an map, consult formatData.)
 */
class DataBase {
    constructor(data) {
        this.data = data;
    }
    toString() {
        return "DataBase: " + this.data.toString();
    }
    /**
     * Gets a reference to subData found under given key(s) / path
     * A reference is a new DataBase instance just containing the referenced Data
     *
     * This function resolves references via the "recursively anchored Data" (rad) procedure. For further
     * insights what this means please consult the documentation of the function rad
     */
    ref(...keys) {
        return new DataBase(this.rad(...keys));
    }
    peek(...keys) {
        return new DataBase(this.fds(...keys));
    }
    current(...keys) {
        return (this.fds(...keys)).val;
    }
    /**
     * Gets the underlying Data found under given key(s) / path
     * Similar to ref but not wrapped inside a DataBase instance
     *
     * This function resolves references via the "recursively anchored Data" (rad) procedure. For further
     * insights what this means please consult the documentation of the function rad
     */
    get(key, cb) {
        if (typeof key === "string" || typeof key === "number" || key instanceof Data) {
            let data = (key instanceof Data) ? key : this.rad(key);
            if (cb !== undefined) {
                data.subscribe(cb);
            }
            else {
                return data;
            }
        }
        else {
            let map = [];
            if (cb !== undefined) {
                for (let i = 0; i < key.length; i++) {
                    //@ts-ignore
                    let data = (key[i] instanceof Data) ? key[i] : this.rad(key[i]);
                    const subscribtion = (v) => {
                        map[i] = v;
                        if (key.length === map.length) {
                            if (cb !== undefined) {
                                cb(...map);
                            }
                            else
                                return map;
                        }
                    };
                    data.subscribe(subscribtion);
                }
            }
            else {
                for (let i = 0; i < key.length; i++) {
                    //@ts-ignore
                    map[i] = (key[i] instanceof Data) ? key[i] : this.rad(key[i]);
                }
                return map;
            }
        }
    }
    set(key, to) {
        let fds = this.fds(key);
        formatData(to, fds, true);
    }
    /**
     * Gets recursively anchored Data (rad)
     * Meaning for each nesting step there will be one listener attatched to enable objects to be observed
     * This is very resource (mem) expensive. Use only when necessary
     */
    rad(...keys) {
        let last = this.data;
        let organizedKeys = keys.join(".").split(".");
        organizedKeys.ea((k) => {
            if (k !== "") {
                let next = last.val[k];
                if (next === undefined)
                    throw new InvalidKey(k, last);
                //@ts-ignore
                last.subscribeInternally((any) => {
                    let a = any[k];
                    let dt = a instanceof Data;
                    if (!(typeof a === "object" && !dt))
                        next.val = (dt) ? a.val : a;
                });
                last = next;
            }
        });
        return last;
    }
    fds(...keys) {
        let last = this.data;
        let organizedKeys = keys.join(".").split(".");
        organizedKeys.ea((k) => {
            if (k !== "") {
                let next = last.val[k];
                if (next === undefined)
                    throw new InvalidKey(k, last);
                last = next;
            }
        });
        return last;
    }
    //TODO: make this available for DB as a whole and limit acces via interfaces (conditinal types)
    get asArray() {
        //@ts-ignore
        if (this.data.val instanceof Array)
            return new DataArray(this.data);
        else
            throw new InvalidCast(Array);
    }
    get asNumber() {
        //@ts-ignore
        if (typeof this.data.val === "number")
            return new DataNumber(this.data);
        else
            throw new InvalidCast(Number);
    }
    equals(that) {
        return (that === undefined) ? false : this.data.equals(that.data, true);
    }
    same(that) {
        return this.data.val === that.data.val;
    }
}
exports.DataBase = DataBase;
class DataNumber extends DataBase {
    constructor(data) {
        super(data);
    }
    inc(by = 1) {
        this.data.val += by;
        return this.data.val;
    }
    dec(by = 1) {
        this.data.val -= by;
        return this.data.val;
    }
}
exports.DataNumber = DataNumber;
class DataArray extends DataBase {
    constructor(data) {
        super(data);
    }
    list(loop, stepIntoPathAfterwards = "") {
        for (let i = 0; i < this.length(); i++) {
            let end = loop(new DataBase(this.fds(i, stepIntoPathAfterwards)), i);
            if (end !== undefined)
                return end;
        }
    }
    forEach(loop, beforeLoop, afterLoop, stepIntoPathAfterwards = "") {
        let proms = [];
        this.get("", () => {
            if (beforeLoop !== undefined)
                proms.add(beforeLoop());
            this.data.val.ea((e, i) => {
                proms.add(loop(new DataBase(this.fds(i, stepIntoPathAfterwards)), i));
            });
            proms = proms.filter((e) => {
                return e instanceof Promise;
            });
            if (afterLoop !== undefined) {
                if (proms.length === 0)
                    Promise.all(proms).then(afterLoop);
                else
                    afterLoop();
            }
        });
        if (proms.length !== 0)
            return Promise.all(proms);
    }
    length(cb) {
        if (cb === undefined)
            return this.data.val.length;
        else {
            this.get("", (a) => {
                cb(a.length);
            });
        }
    }
    realLength(cb) {
        if (cb === undefined)
            return this.data.val.realLength;
        else {
            this.get("", (a) => {
                cb(a.realLength);
            });
        }
    }
    alter(cb, initalizeLoop = false) {
        this.beforeLastChange = this.data.clone();
        if (initalizeLoop) {
            this.data.val.ea((e, i) => {
                cb(new DataBase(e), i);
            });
        }
        this.get("", (a) => {
            let indexesToBeCalled = [];
            a.ea((e, i) => {
                if (e !== undefined) {
                    indexesToBeCalled.add(i);
                    if (!e.equals(this.beforeLastChange.val[i], true))
                        cb(new DataBase(e), i);
                }
            });
            this.beforeLastChange.val.ea((e, i) => {
                if (!indexesToBeCalled.includes(i))
                    cb(null, i);
            });
            this.beforeLastChange = this.data.clone();
        });
    }
    morph(cb, initalizeLoop = false) {
        this.beforeLastChange = this.data.clone();
        if (initalizeLoop) {
            this.data.val.ea((e, i) => {
                cb(new DataBase(e), i);
            });
        }
        let cba = DataArray.morphMap.get(this.data);
        if (cba === undefined)
            DataArray.morphMap.set(this.data, [cb]);
        else
            cba.add(cb);
    }
    add(val, atIndex) {
        let length = this.length();
        let maxIndex = length - 1;
        if (atIndex === undefined)
            atIndex = length;
        this.data.val.Reverse().ea((e, i) => {
            i = maxIndex - i;
            if (i < atIndex)
                return;
            //THIS IF IS NECESSARY BECAUSE WHEN SETTING EMPTY ARRAY SOLOTS TO UNDEFINED THEY GET PICKED UP BY ITERATORS
            if (this.data.val[i] === undefined)
                delete this.data.val[i + 1];
            else
                this.data.val[i + 1] = this.data.val[i];
        });
        delete this.data.val[atIndex];
        let ob = {};
        ob[atIndex] = val;
        formatData(ob, this.data);
        let cba = DataArray.morphMap.get(this.data);
        if (cba !== undefined)
            cba.ea((f) => {
                f(new DataBase(this.data.val[atIndex]), atIndex);
            });
    }
    removeI(index, closeGap = true) {
        if (closeGap)
            this.data.val.removeI(index);
        else
            delete this.data.val[index];
        //@ts-ignore
        this.data.notify(true);
        let cba = DataArray.morphMap.get(this.data);
        if (cba !== undefined)
            cba.ea((f) => {
                f(null, index);
            });
    }
    removeV(val, closeGap = true) {
        let data = formatData(val);
        let index = this.data.val.ea((e, i) => {
            if (e.equals(data))
                return i;
        });
        if (index === undefined)
            throw new InvalidValueException(val, this.data.toString());
        if (closeGap)
            this.data.val.removeI(index);
        else
            delete this.data.val[index];
        //@ts-ignore
        this.data.notify(true);
        let cba = DataArray.morphMap.get(this.data);
        if (cba !== undefined)
            cba.ea((f) => {
                f(null, index);
            });
    }
}
DataArray.morphMap = new Map();
exports.DataArray = DataArray;
class Data {
    constructor(val) {
        this.cbs = [];
        this.internalCBs = [];
        this.val = val;
    }
    /**
     * Set the val
     */
    set val(to) {
        if (this.val === to)
            return;
        this._val = to;
        this.notify(false);
    }
    /**
     * Gets the current val
     */
    get val() {
        return this._val;
    }
    /**
     * Subscribe to val
     * @param cb callback which gets called whenever the val changes
     */
    subscribe(cb, init = true) {
        this.cbs.add(cb);
        if (init)
            cb(this.val);
    }
    subscribeInternally(cb) {
        this.internalCBs.add(cb);
        cb(this.val);
    }
    unsubscribe(cb) {
        if (cb !== null)
            this.cbs.remove(cb);
        else
            this.cbs.clear();
    }
    toString(tabIn = 0, insideObject = false) {
        tabIn++;
        let s = "";
        let v = this.val;
        if (typeof v === "object") {
            let hasProps = false;
            let ar = v instanceof Array;
            if (ar)
                s += "[";
            else
                s += "{";
            s += "\n";
            for (let k in v) {
                if (!v.hasOwnProperty(k))
                    continue;
                hasProps = true;
                //@ts-ignore
                s += "\t".repeat(tabIn) + k + ": " + v[k].toString(tabIn, true);
            }
            if (!hasProps)
                s = s.substring(0, s.length - 1);
            else {
                s = s.substring(0, s.length - 2) + "\n";
                s += "\t".repeat(tabIn - 1);
            }
            if (ar)
                s += "]";
            else
                s += "}";
        }
        else {
            let st = typeof v === "string";
            if (st)
                s += "\"";
            s += v;
            if (st)
                s += "\"";
        }
        s += insideObject ? "," : "";
        return s + "\n";
    }
    notify(wild = false) {
        let val = this.val;
        this.cbs.ea((f) => {
            f(val);
        });
        if (!wild) {
            this.internalCBs.ea((f) => {
                f(val);
            });
        }
    }
    /**
     * Compares if all keys in this are equal to the equivelent ones on data
     * Different Data Instances holding the same value are the equal
     * Data can have more keys than this and still be equal.
     * If you dont want this pass in true to the strict param. This will be more recource intensive
     */
    equals(data, strict = false) {
        let v = this.val;
        if (data === undefined || data === null)
            return false;
        let d = data.val;
        if (v == d)
            return true;
        let ls;
        if (strict)
            ls = [];
        for (let k in v) {
            if (!v.hasOwnProperty(k))
                continue;
            if (strict)
                ls.add(k);
            if (v[k] !== d[k]) {
                if (v[k] instanceof Data) {
                    if (d[k] instanceof Data) {
                        //@ts-ignore
                        if (!v[k].equals(d[k], strict))
                            return false;
                    }
                    else
                        return false;
                }
                else
                    return false;
            }
        }
        if (strict) {
            for (let k in d) {
                if (!v.hasOwnProperty(k))
                    continue;
                if (!ls.includes(k))
                    return false;
            }
        }
        return true;
    }
    clone() {
        let d;
        let v = this.val;
        if (typeof v === "object") {
            //@ts-ignore
            let data = new v.constructor();
            d = new Data(data);
            for (let k in v) {
                if (!v.hasOwnProperty(k))
                    continue;
                //@ts-ignore
                d.val[k] = v[k].clone();
            }
        }
        else
            d = new Data(v);
        d.internalCBs.add(...this.internalCBs);
        d.cbs.add(...this.cbs);
        return d;
    }
}
exports.Data = Data;


/***/ }),

/***/ "./node_modules/xrray/xrray.js":
/*!*************************************!*\
  !*** ./node_modules/xrray/xrray.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = (function() {
  'use strict';
  class Exception extends Error {
    constructor(msg) {
      super();
      this.message = this.constructor.name;
      if (msg !== undefined) this.message += ": " + msg;
    }
  }
  class IndexOutOfBoundsException extends Exception {
    constructor(index, array) {
      super("Given value \"" + index + "\" must be in range 0-" + (array.length-1) + ".");
      this.index = index;
      this.array = array;
    }
  }
  class InvalidInputException extends Exception {
    constructor(msg) {
      super("Given input is invalid.\n" + msg);
    }
  }
  class InvalidConstructorException extends Exception{
    constructor(msg = "") {
      super("Given constructor must inherit form Array.\n" + msg);
    }
  }
  class InvalidValueException extends Exception {
    constructor(value, array) {
      super("Unable to find given value: " + value.constructor.name + " " + JSON.stringify(value) + "; within following array: " + array.toString());
      this.value = value;
      this.array = array;
    }
  }

  //Throws IndexOutOfBoundsException when given index is out of bounds of a
  function isIndex(i, a) {
    if(!a.hasOwnProperty(i)) throw new IndexOutOfBoundsException(i,a);
  }

  const ar = "xrray";

  function init(ArConstr = Array) {
    if(!(new ArConstr() instanceof Array)) throw new InvalidConstructorException();
    if (ArConstr.xrray === ar) return ArConstr;

    ArConstr.xrray = ar;

    let p = ArConstr.prototype;

    p.each = p.ea = function(f, t = this) {
      if (this.length > 0) {
        let e;
        let startI;
        for (startI = 0; startI < t.length; startI++) {
          if (t.hasOwnProperty(startI)) {
            e = f.call(t, t[startI], startI, this);
            break;
          }
        }
        startI++;
        if (e instanceof Promise) {
          return (async () => {
            let r = await e;
            if (r !== undefined) return r;

            for (let i = startI; i < t.length; i++) {
              if (!t.hasOwnProperty(i)) continue;
              let e = await f.call(t, t[i], i, this);
              if (e !== undefined) return e;
            }
          })();
        }
        else {
          if (e !== undefined) return e;
          for (let i = startI; i < t.length; i++) {
            if (!t.hasOwnProperty(i)) continue;
            let e = f.call(t, t[i], i, this);
            if (e !== undefined) return e;
          }
        }
      }
    }

    Object.defineProperty(p, "empty", {get() {
      return this.length === 0;
    }});

    Object.defineProperty(p, "last", {get() {
      if(this.length === 0) return undefined;
      return this[this.length-1];
    }});

    Object.defineProperty(p, "realLength", {get() {
      let l = 0;
      for (let i = 0; i < this.length; i++) {
        if (this.hasOwnProperty(i)) l++;
      }
      return l;
    }});

    Object.defineProperty(p, "first", {get() {
      return this[0];
    }});

    p.clear = function() {
      this.length = 0;
      return this;
    }
    p.Clear = function() {
      return new ArConstr();
    }

    p.add = function(...values) {
      this.push(...values);
      return this;
    }
    p.Add = function(...values) {
      return new ArConstr().add(...this).add(...values);
    }

    p.set = function(a = []) {
      if(this === a) return this;
      if(a instanceof Array) return this.clear().add(...a);
      return this.clear().add(a);
    }
    p.Set = function(a = []) {
      return new ArConstr().add(...a);
    }

    p.clone = function() {
      return this.Set(this);
    }

    p.Reverse = function() {
      return this.Set(this).reverse();
    }

    p.gather = function(...a) {
      a.ea((e) => {
        if (!this.includes(e)) this.add(e);
      })
      return this;
    }

    p.Gather = function(...a) {
      let t = this.clone();
      a.ea((e) => {
        if (!t.includes(e)) t.add(e);
      })
      return t;
    }

    let mark = {};

    //Throws InvalidValueException when the given value cannot be found withing this
    // TODO: differentate indexall and indexfirst
    p.index = function(...values) {
      let that = this.Set(this);
      let indexes = new ArConstr();
      values.ea((v) => {
        if(!this.includes(v)) throw new InvalidValueException(v,this);
        while (true) {
          let index = that.indexOf(v);
          if (indexes.last !== index && index !== -1){
            indexes.add(index);
            that[index] = mark;
          }
          else break;
        }
      });
      return indexes;
    }
    //Throws IndexOutOfBoundsException when given index is out of bounds of this
    p.removeI = function(...indices) {
      let rollback = this.Set(this);
      try {
        for (let i = 0; i < indices.length; i++) {
          isIndex(indices[i], this)
          this[indices[i]] = mark;
        }
        for (let i = 0; i < this.length; i++) {
          if (this[i] === mark) {
            this.splice(i, 1);
            i--;
          }
        }
      } catch (e) {
        if (e instanceof IndexOutOfBoundsException) this.set(rollback);
        throw e;
      }
      return this;
    }
    p.rmI = p.removeI;
    //Throws IndexOutOfBoundsException when given index is out of bounds of this
    p.RemoveI = function(...indices) {
      return this.Set(this).removeI(...indices);
    }
    p.RmI = p.RemoveI;

    //Throws InvalidValueException when the given value cannot be found withing this
    p.removeV = function(...values) {
      return this.removeI(...this.index(...values));
    }
    p.rmV = p.removeV;

    //Throws InvalidValueException when the given value cannot be found withing this
    p.RemoveV = function(...values) {
      return this.Set(this).removeV(...values);
    }
    p.RmV = p.RemoveV;

    //Throws InvalidValueException when the given param is detected as value but cannot be found withing this
    p.remove = function(...valueOrIndex) {
      try {
        this.removeI(...valueOrIndex);
      } catch (e) {
        if (e instanceof IndexOutOfBoundsException) this.removeV(...valueOrIndex);
        else throw e;
      }
      return this;
    }
    p.rm = p.remove;

    //Throws IndexOutOfBoundsException when given param is detected as index but out of bounds of this
    //Throws InvalidValueException when the given param is detected as value but cannot be found withing this
    p.Remove = function(...valueOrIndex) {
      return this.Set(this).remove(...valueOrIndex);
    }
    p.Rm = p.Remove;

    p.Get = function(...indexes) {
      let n = [];
      indexes.flat(Infinity).forEach((i) => {
        n.add(this[i]);
      });
      return n;
    }
    p.get = function(...indexes) {
      return this.set(this.Get(...indexes))
    }

    p.dda = function(...values) {
      return this.reverse().add(...values).reverse();
    }
    p.Dda = function(...values) {
      return this.Reverse().add(...values).reverse();
    }

    //Throws IndexOutOfBoundsException when given index is out of bounds of a
    p.rem = function(amount) {
      isIndex(amount,this);
      this.length -= amount;
      return this;
    }
    //Throws IndexOutOfBoundsException when given index is out of bounds of a
    p.Rem = function(amount) {
      return this.Set(this).rem(amount);
    }

    //Throws IndexOutOfBoundsException when given index is out of bounds of a
    p.mer = function(amount) {
      return this.reverse().rem(amount).reverse();
    }
    //Throws IndexOutOfBoundsException when given index is out of bounds of a
    p.Mer = function(amount) {
      return this.Reverse().rem(amount).reverese();
    }

    //Throws IndexOutOfBoundsException when given index(es) are out of bounds of this
    //Throws InvalidInputException when given parameters are not equal in length
    p.swapI = function(i1, i2) {
      i1 = [i1].flat(Infinity);
      i2 = [i2].flat(Infinity);
      if(i1.length === i2.length) {
        let rollback = this.Set(this);
        try {
          for (let i = 0; i < i1.length; i++) {
            isIndex(i1[i],this);
            isIndex(i2[i],this);
            [this[i1[i]],this[i2[i]]] = [this[i2[i]],this[i1[i]]];
          }
        } catch (e) {
          if(e instanceof IndexOutOfBoundsException) this.set(rollback);
          throw e;
        }
        return this;
      }
      throw new InvalidInputException("Parameter i1 and i2 must ether be two indexes, or two index-Arrays of the same length.");
    }
    //Throws IndexOutOfBoundsException when given index(es) are out of bounds of this
    //Throws InvalidInputException when given parameters are not equal in length
    p.SwapI = function(i1, i2) {
      return this.Set(this).swapI(i1, i2);
    }

    //Throws InvalidValueException when the given value cannot be found withing this
    //Throws InvalidInputException when given parameters are not equal in length
    p.swapV = function(v1, v2) {
      v1 = this.Set(v1).flat(2);
      v2 = this.Set(v2).flat(2);
      if (v1.length === v2.length) {
        for (var i = 0; i < v1.length; i++) {
          this.swapI(this.index(v1[i]),this.index(v2[i]));
        }
        return this;
      }
      throw new InvalidInputException("Parameter v1 and v2 must ether be two values, or two value-Arrays of the same length.");
    }
    //Throws InvalidValueException when the given value cannot be found withing this
    //Throws InvalidInputException when given parameters are not equal in length
    p.SwapV = function(v1, v2) {
      return this.Set(this).swapV(v1, v2);
    }

    //Throws IndexOutOfBoundsException when given param is detected as index but out of bounds of this
    //Throws InvalidValueException when the given param is detected as value but cannot be found withing this
    p.swap = function(vi1, vi2) {
      try {
        this.swapI(vi1, vi2);
      } catch (e) {
        if (e instanceof IndexOutOfBoundsException) this.swapV(vi1, vi2);
        else throw e;
      }
      return this;
    }
    //Throws IndexOutOfBoundsException when given param is detected as index but out of bounds of this
    //Throws InvalidValueException when the given param is detected as value but cannot be found withing this
    p.Swap = function(vi1, vi2) {
      return this.Set(this).swap(vi1, vi2)
    }

    p.prior = function(i, by = 1) {
      let r = i - by;
      if (r >= 0) return this[r];
      return this[this.length-(by-i)]
    }
    p.next = function(i, by = 1) {
      let r = i + by;
      if (r <= this.length-1) return this[r];
      return this[by-(i-this.length-1)]
    }

    p.inject = function(item, index) {
      this.splice(index, 0, item);
      return this
    }

    p.contains = function(...vals) {
      for (let v of vals) {
        if (!this.includes(v)) return false
      }
      return true
    }
    p.excludes = function(...vals) {
      for (let v of vals) {
        if (this.includes(v)) return false
      }
      return true
    }

    return ArConstr
  }
  init.Exception = Exception;
  init.IndexOutOfBoundsException = IndexOutOfBoundsException;
  init.InvalidInputException = InvalidInputException;
  init.InvalidConstructorException = InvalidConstructorException;
  init.InvalidValueException = InvalidValueException;
  //init.version = "unknown";
  return init;
}());


/***/ }),

/***/ "./test/test.ts":
/*!**********************!*\
  !*** ./test/test.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../edom */ "./edom.ts");

console.log(_edom__WEBPACK_IMPORTED_MODULE_0__["default"]);
console.log("work");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZWRvbS50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmV6aWVyLWVhc2luZy9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Rhc2gtY2FtZWxjYXNlL2Rpc3QvZGFzaC1jYW1lbGNhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RlY29tcG9zZS1kb21tYXRyaXgvZGlzdC9kZWNvbXBvc2VET01NYXRyaXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Zyb250LWRiL2Rpc3QvZGF0YUJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3hycmF5L3hycmF5LmpzIiwid2VicGFjazovLy8uL3Rlc3QvdGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOzs7O1FBSUE7UUFDQTtRQUNBLG1EQUFtRCx3SUFBd0k7UUFDM0w7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBOzs7UUFHQTs7UUFFQTtRQUNBLGlDQUFpQzs7UUFFakM7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsNkNBQTZDO0FBQzdDO0FBQ0EsU0FBUyxFQUFFO0FBQ1gsOENBQThDO0FBQzlDO0FBQ0EsU0FBUyxFQUFFO0FBQ1gsZ0RBQWdEO0FBQ2hEO0FBQ0EsU0FBUyxFQUFFO0FBQ1gsNENBQTRDO0FBQzVDO0FBQ0EsU0FBUyxFQUFFO0FBQ1gsNkNBQTZDO0FBQzdDO0FBQ0EsU0FBUyxFQUFFO0FBQ1gsNENBQTRDO0FBQzVDO0FBQ0EsU0FBUyxFQUFFO0FBQ1gsNkNBQTZDO0FBQzdDO0FBQ0EsU0FBUyxFQUFFO0FBQ1gsd0NBQXdDO0FBQ3hDO0FBQ0EsU0FBUyxFQUFFO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDBEQUFlO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRSxhQUFhO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHVCQUF1QixtQkFBbUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FB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QSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3BoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzR0FBc0c7QUFDdEc7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG1CQUFtQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBZ0MsY0FBYztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsY0FBYztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1Q0FBdUM7QUFDdkM7QUFDQSxNQUFNOztBQUVOLHNDQUFzQztBQUN0QztBQUNBO0FBQ0EsTUFBTTs7QUFFTiw0Q0FBNEM7QUFDNUM7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU4sdUNBQXVDO0FBQ3ZDO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG9CQUFvQjtBQUMzQztBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsaUJBQWlCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZUFBZTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGVBQWU7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDalhEO0FBQUE7QUFBNkI7QUFDN0IsWUFBWSw2Q0FBSTtBQUNoQiIsImZpbGUiOiJ0ZXN0L2Rpc3QvbWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcblxuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHR9O1xuXG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuXG5cbiBcdC8vIHNjcmlwdCBwYXRoIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBqc29ucFNjcmlwdFNyYyhjaHVua0lkKSB7XG4gXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcInRlc3QvZGlzdC9cIiArICh7XCJ2ZW5kb3JzfnJlc2l6ZU9ic2VydmVyUG9seWZpbGxcIjpcInZlbmRvcnN+cmVzaXplT2JzZXJ2ZXJQb2x5ZmlsbFwiLFwidmVuZG9yc353ZWJBbmltYXRpb25zQXBpUG9seWZpbGxcIjpcInZlbmRvcnN+d2ViQW5pbWF0aW9uc0FwaVBvbHlmaWxsXCJ9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLmpzXCJcbiBcdH1cblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblxuIFx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cbiBcdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG4gXHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XTtcbiBcdFx0XHRcdH0pO1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlKTtcblxuIFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuIFx0XHRcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuIFx0XHRcdFx0dmFyIG9uU2NyaXB0Q29tcGxldGU7XG5cbiBcdFx0XHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04JztcbiBcdFx0XHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuIFx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcbiBcdFx0XHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0c2NyaXB0LnNyYyA9IGpzb25wU2NyaXB0U3JjKGNodW5rSWQpO1xuXG4gXHRcdFx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG4gXHRcdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcbiBcdFx0XHRcdG9uU2NyaXB0Q29tcGxldGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiBcdFx0XHRcdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuIFx0XHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuIFx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG4gXHRcdFx0XHRcdHZhciBjaHVuayA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0XHRcdFx0aWYoY2h1bmsgIT09IDApIHtcbiBcdFx0XHRcdFx0XHRpZihjaHVuaykge1xuIFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcbiBcdFx0XHRcdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG4gXHRcdFx0XHRcdFx0XHRjaHVua1sxXShlcnJvcik7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fTtcbiBcdFx0XHRcdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuIFx0XHRcdFx0XHRvblNjcmlwdENvbXBsZXRlKHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KTtcbiBcdFx0XHRcdH0sIDEyMDAwMCk7XG4gXHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlO1xuIFx0XHRcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gb24gZXJyb3IgZnVuY3Rpb24gZm9yIGFzeW5jIGxvYWRpbmdcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHsgY29uc29sZS5lcnJvcihlcnIpOyB0aHJvdyBlcnI7IH07XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi90ZXN0L3Rlc3QudHNcIik7XG4iLCJpbXBvcnQgYmF6IGZyb20gXCJiZXppZXItZWFzaW5nXCI7XHJcbmltcG9ydCB7IGNhbWVsQ2FzZVRvRGFzaCwgZGFzaFRvQ2FtZWxDYXNlIH0gZnJvbSBcImRhc2gtY2FtZWxjYXNlXCI7XHJcbmltcG9ydCB7IERhdGEgfSBmcm9tIFwiZnJvbnQtZGJcIjtcclxuaW1wb3J0IGRlY29tcG9zZU1hdHJpeCBmcm9tIFwiZGVjb21wb3NlLWRvbW1hdHJpeFwiO1xyXG4vLyBUT0RPOiBtYWtlIGFuaW0gb25seSBhdmFpbGFibGUgb24gSFRNTEVsZW1lbnQgc2luY2UgYW5pbWF0ZSBpcyBub3Qgc3VwcG9ydGVkIG9uIEV2ZW50VHJhZ2V0XHJcbi8vIElERUEgbW9kaWZ5IHByb21pc2UgcmV0dXJuZWQgYnkgYW5pbSBzbyB0aGF0IHlvdSBjYW4gZ2l2ZSBhIHN0cmluZyBhcyB0aGVuIGFyZyB3aGljaCBnZXRzIGV4ZWN0dXRlZCB3aXRoIHRoaXMgY29udGV4dFxyXG4vL0B0cy1pZ25vcmVcclxubGV0IFJlc09icztcclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIGxldCBwcm9tcyA9IFtdO1xyXG4gICAgaWYgKEVsZW1lbnQucHJvdG90eXBlLmFuaW1hdGUgPT09IHVuZGVmaW5lZClcclxuICAgICAgICBwcm9tcy5hZGQoaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwid2ViQW5pbWF0aW9uc0FwaVBvbHlmaWxsXCIgKi8gXCJ3ZWItYW5pbWF0aW9ucy1qc1wiKSk7XHJcbiAgICAvL0B0cy1pZ25vcmVcclxuICAgIGlmICh3aW5kb3cuUmVzaXplT2JzZXJ2ZXIgPT09IHVuZGVmaW5lZClcclxuICAgICAgICBwcm9tcy5hZGQoaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwicmVzaXplT2JzZXJ2ZXJQb2x5ZmlsbFwiICovIFwicmVzaXplLW9ic2VydmVyLXBvbHlmaWxsXCIpLnRoZW4oKHsgZGVmYXVsdDogciB9KSA9PiB7IFJlc09icyA9IHI7IH0pKTtcclxuICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgZWxzZVxyXG4gICAgICAgIFJlc09icyA9IHdpbmRvdy5SZXNpemVPYnNlcnZlcjtcclxuICAgIGF3YWl0IFByb21pc2UuYWxsKHByb21zKTtcclxuICAgIGxldCBwID0gRXZlbnRUYXJnZXQucHJvdG90eXBlO1xyXG4gICAgcC5pbnNlcnRBZnRlciA9IGZ1bmN0aW9uIChuZXdOb2RlLCByZWZlcmVuY2VOb2RlKSB7XHJcbiAgICAgICAgaWYgKHJlZmVyZW5jZU5vZGUucGFyZW50ICE9PSB0aGlzKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIGlzIG5vdCB0aGUgcGFyZW50IG9mIHJlZmVyZW5jZU5vZGUuXCIpO1xyXG4gICAgICAgIGxldCBzaWIgPSByZWZlcmVuY2VOb2RlLm5leHRTaWJsaW5nO1xyXG4gICAgICAgIGlmIChzaWIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRoaXMuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIHNpYik7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLmFwZChuZXdOb2RlKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICAoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGFUcmFuc2ZlcnMgPSB7fTtcclxuICAgICAgICBsZXQgZGF0YVRyYW5zZmVySUQgPSAwO1xyXG4gICAgICAgIGxldCByZXNpemVMaXN0ZW5lciA9IG5ldyBNYXAoKTtcclxuICAgICAgICAvL29ubHkgaW5pdCB3aGVuIG5lZWRlZCBzaW5jZSB0aGlzIGhlYXZpbHkgY29uc3VtZXMgcmVzb3VyY2VzIChjcHUpLlxyXG4gICAgICAgIGxldCBvYnM7XHJcbiAgICAgICAgbGV0IG9ic1VuZGVmaW5lZCA9IHRydWU7XHJcbiAgICAgICAgZnVuY3Rpb24gaW5pdFJlc09icygpIHtcclxuICAgICAgICAgICAgb2JzVW5kZWZpbmVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIG9icyA9IG5ldyBSZXNPYnMoKGVsZW1lbnRzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50cy5lYSgoZWxlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc2l6ZUxpc3RlbmVyLmdldChlbGVtLnRhcmdldCkuZm9yRWFjaCgoYWN0dWFsRnVuYykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWxGdW5jKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBldmVudExpc3RlbmVySW5kZXggPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgY29uc3Qga2V5ID0gXCJhZHZhbmNlZERhdGFUcmFuc2ZlcmVcIjtcclxuICAgICAgICAvL1RPRE86IGRvY3VtZW50IC8gd2luZG93Lm9uKFwicmVhZHlcIilcclxuICAgICAgICAvL1RPRE86IHJldHVybiBkYXRhIC8gb3IgcHJvbWlzZSB3aGVuIG5vIGNiIGlzIGdpdmVuXHJcbiAgICAgICAgcC5vbiA9IGZ1bmN0aW9uICguLi5hKSB7XHJcbiAgICAgICAgICAgIGxldCBpc1Jlc2l6ZSA9IGFbMF0gPT09IFwicmVzaXplXCI7XHJcbiAgICAgICAgICAgIGlmIChpc1Jlc2l6ZSAmJiB0aGlzICE9PSB3aW5kb3cpIHtcclxuICAgICAgICAgICAgICAgIGlmIChvYnNVbmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdFJlc09icygpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG1hcCA9IHJlc2l6ZUxpc3RlbmVyLmdldCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIGlmIChtYXAgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9icy5vYnNlcnZlKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcCA9IG5ldyBNYXAoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXNpemVMaXN0ZW5lci5zZXQodGhpcywgbWFwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG1hcC5zZXQoYVsxXSwgYVsxXS5iaW5kKHRoaXMpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBhY3R1YWxMaXN0ZW5lcjtcclxuICAgICAgICAgICAgICAgIGlmIChpc1Jlc2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFbMV0uYmluZCh0aGlzKShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0dWFsTGlzdGVuZXIgPSBhWzFdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoYVswXSA9PT0gXCJkcmFnc3RhcnRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFUcmFuc2ZlcklEKys7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0dWFsTGlzdGVuZXIgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnNldERhdGEgPSAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVRyYW5zZmVyc1tkYXRhVHJhbnNmZXJJRF0gPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YShrZXksIGRhdGFUcmFuc2ZlcklEKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYVsxXShlKTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoYVswXSA9PT0gXCJkcm9wXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBhY3R1YWxMaXN0ZW5lciA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuZ2V0RGF0YSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpZCA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoa2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmb3VuZCA9IGlkICE9PSBcIlwiID8gZGF0YVRyYW5zZmVyc1tpZF0gOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGRhdGFUcmFuc2ZlcnNbaWRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZvdW5kO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhWzFdKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhY3R1YWxMaXN0ZW5lciA9IGFbMV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhY3R1YWxMaXN0ZW5lciA9IGFjdHVhbExpc3RlbmVyLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGhhdCA9IGV2ZW50TGlzdGVuZXJJbmRleC5nZXQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbyA9IHsgZXZlbnQ6IGFbMF0sIGFjdHVhbExpc3RlbmVyLCB1c2VyTGlzdGVuZXI6IGFbMV0sIG9wdGlvbnM6IGFbMl0gfTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGF0ID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRMaXN0ZW5lckluZGV4LnNldCh0aGlzLCBbb10pO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuYWRkKG8pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGFbMF0sIGFjdHVhbExpc3RlbmVyLCBhWzJdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9O1xyXG4gICAgICAgIHAub2ZmID0gZnVuY3Rpb24gKC4uLmEpIHtcclxuICAgICAgICAgICAgaWYgKGFbMF0gPT09IFwicmVzaXplXCIgJiYgdGhpcyAhPT0gd2luZG93KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob2JzVW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgICAgIGluaXRSZXNPYnMoKTtcclxuICAgICAgICAgICAgICAgIGxldCBtYXAgPSByZXNpemVMaXN0ZW5lci5nZXQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAobWFwICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXAuZGVsZXRlKGFbMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXAuc2l6ZSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYnMudW5vYnNlcnZlKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNpemVMaXN0ZW5lci5kZWxldGUodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvQmVSbSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRoYXQgPSBldmVudExpc3RlbmVySW5kZXguZ2V0KHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoYXQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhWzBdICE9PSB1bmRlZmluZWQgJiYgYVsxXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuZWEoKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmV2ZW50ID09PSBhWzBdICYmIGUudXNlckxpc3RlbmVyID09PSBhWzFdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvQmVSbS5hZGQoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5lYSgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUuZXZlbnQgPT09IGFbMF0gfHwgZS51c2VyTGlzdGVuZXIgPT09IGFbMV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9CZVJtLmFkZChlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRvQmVSbS5lYSgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZS5ldmVudCwgZS5hY3R1YWxMaXN0ZW5lcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQucm0oZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoYXQuZW1wdHkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50TGlzdGVuZXJJbmRleC5kZWxldGUodGhpcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfTtcclxuICAgIH0pKCk7XHJcbiAgICBwLmxpc3RlbmVyID0gcC5saXN0ZW4gPSBwLmxzID0gZnVuY3Rpb24gKGV2ZW50LCBsaXN0ZW5lciwgcGF0Y2gpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFRlbCh0aGlzLCBldmVudCwgbGlzdGVuZXIsIHBhdGNoKTtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocCwgXCJodG1sXCIsIHtcclxuICAgICAgICBnZXQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlubmVySFRNTDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldCh0bykge1xyXG4gICAgICAgICAgICB0aGlzLmlubmVySFRNTCA9IHRvO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHAsIFwiaW5uZXJcIiwge1xyXG4gICAgICAgIHNldCh0bykge1xyXG4gICAgICAgICAgICBpZiAodG8gaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5odG1sID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBkKC4uLnRvKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0byBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaHRtbCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZCh0byk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pbm5lckhUTUwgPSB0bztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHAuYWRkQ2xhc3MgPSBmdW5jdGlvbiAoLi4uY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgcC5yZW1vdmVDbGFzcyA9IGZ1bmN0aW9uICguLi5jbGFzc05hbWUpIHtcclxuICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoLi4uY2xhc3NOYW1lKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBwLmhhc0NsYXNzID0gZnVuY3Rpb24gKC4uLmNsYXNzTmFtZSkge1xyXG4gICAgICAgIGxldCBoYXMgPSB0cnVlO1xyXG4gICAgICAgIGNsYXNzTmFtZS5lYSgoY2xzKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5jbGFzc0xpc3QuY29udGFpbnMoY2xzKSlcclxuICAgICAgICAgICAgICAgIGhhcyA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBoYXM7XHJcbiAgICB9O1xyXG4gICAgcC50b2dnbGVDbGFzcyA9IGZ1bmN0aW9uICguLi5jbGFzc05hbWUpIHtcclxuICAgICAgICBjbGFzc05hbWUuZWEoKGNscykgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5oYXNDbGFzcyhjbHMpKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVDbGFzcyhjbHMpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZENsYXNzKGNscyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgcC5hcGQgPSBmdW5jdGlvbiAoLi4uZWxlbXMpIHtcclxuICAgICAgICB0aGlzLmFwcGVuZCguLi5lbGVtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgcC5lbXB0eU5vZGVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuaHRtbCA9IFwiXCI7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgcC5oaWRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgcC5zaG93ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIHAuY2hpbGRzID0gZnVuY3Rpb24gKHNlbGVjdG9yX2RlcHRoID0gMSkge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygc2VsZWN0b3JfZGVwdGggPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTm9kZUxzKC4uLnRoaXMucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcl9kZXB0aCkpO1xyXG4gICAgICAgIGVsc2UgaWYgKHNlbGVjdG9yX2RlcHRoID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE5vZGVMcyguLi50aGlzLmNoaWxkcmVuLCAuLi5uZXcgTm9kZUxzKC4uLnRoaXMuY2hpbGRyZW4pLmNoaWxkcyhzZWxlY3Rvcl9kZXB0aCAtIDEpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBOb2RlTHMoKTtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocCwgXCJoZWlnaHRcIiwge1xyXG4gICAgICAgIGdldCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3NzKFwiaGVpZ2h0XCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0KHRvKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3NzKFwiaGVpZ2h0XCIsIHRvKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwLCBcIndpZHRoXCIsIHtcclxuICAgICAgICBnZXQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNzcyhcIndpZHRoXCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0KHRvKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3NzKFwid2lkdGhcIiwgdG8pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHAsIFwib2Zmc2V0UmlnaHRcIiwgeyBnZXQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9mZnNldExlZnQgKyB0aGlzLm9mZnNldFdpZHRoO1xyXG4gICAgICAgIH0gfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocCwgXCJvZmZzZXRCb3R0b21cIiwgeyBnZXQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9mZnNldFRvcCArIHRoaXMub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgIH0gfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocCwgXCJhYnNvbHV0ZU9mZnNldFwiLCB7IGdldCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgfSB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwLCBcIm91dGVyV2lkdGhcIiwgeyBnZXQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9mZnNldFdpZHRoO1xyXG4gICAgICAgIH0gfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocCwgXCJvdXRlckhlaWdodFwiLCB7IGdldCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgIH0gfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocCwgXCJpbm5lcldpZHRoXCIsIHsgZ2V0KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jbGllbnRXaWR0aDtcclxuICAgICAgICB9IH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHAsIFwiaW5uZXJIZWlnaHRcIiwgeyBnZXQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNsaWVudEhlaWdodDtcclxuICAgICAgICB9IH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHAsIFwicGFyZW50XCIsIHsgZ2V0KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgIH0gfSk7XHJcbiAgICBsZXQgZm9ybWF0U3R5bGUgPSAoKCkgPT4ge1xyXG4gICAgICAgIGxldCBqb2luQ29tbWEgPSBcIixcIjtcclxuICAgICAgICBsZXQgam9pblNwYWNlID0gXCIgXCI7XHJcbiAgICAgICAgZnVuY3Rpb24gZm9ybWF0U3R5bGUocHJvcCwgc3R5bGUsIHRoYXQpIHtcclxuICAgICAgICAgICAgbGV0IGVuZDtcclxuICAgICAgICAgICAgbGV0IHRyYW5zZm9ybUFwcGxpZXMgPSBUcmFuc2Zvcm1Qcm9wLmFwcGxpZXMocHJvcCk7XHJcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBsZXQgaXNBciA9IHN0eWxlIGluc3RhbmNlb2YgQXJyYXk7XHJcbiAgICAgICAgICAgIGlmIChpc0FyKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYXIgPSBbXTtcclxuICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgc3RsIG9mIHN0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXIuYWRkKGZvcm1hdFN0bChwcm9wLCBzdGwpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVuZCA9IGFyLmpvaW4odHJhbnNmb3JtQXBwbGllcyA/IGpvaW5Db21tYSA6IGpvaW5TcGFjZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgZW5kID0gZm9ybWF0U3RsKHByb3AsIHN0eWxlKTtcclxuICAgICAgICAgICAgaWYgKHRoYXQgaW5zdGFuY2VvZiBUcmFuc2Zvcm1Qcm9wKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHJhbnNmb3JtQXBwbGllcykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2Zvcm1BcHBsaWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNBcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZC5lYSgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXRbcHJvcF0gPSBlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0W3Byb3BdID0gZW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhhdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZW5kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoYXQgaW5zdGFuY2VvZiBFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHJhbnNmb3JtQXBwbGllcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBtZSA9IGdldFRyYW5zZm9ybVByb3BzKHRoYXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgICAgIG1lW3Byb3BdID0gZW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZW5kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzcGVjaWFsRml4ID0ge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiBcIlwiLFxyXG4gICAgICAgICAgICBvZmZzZXQ6IFwiXCIsXHJcbiAgICAgICAgICAgIGdyaWRBcmVhOiBcIlwiLFxyXG4gICAgICAgICAgICBmbGV4R3JvdzogXCJcIixcclxuICAgICAgICAgICAgekluZGV4OiBcIlwiLFxyXG4gICAgICAgICAgICBza2V3OiBcImRlZ1wiLFxyXG4gICAgICAgICAgICBza2V3WDogXCJkZWdcIixcclxuICAgICAgICAgICAgc2tld1k6IFwiZGVnXCIsXHJcbiAgICAgICAgICAgIHJvdGF0ZTogXCJkZWdcIixcclxuICAgICAgICAgICAgcm90YXRlM2Q6IFwiZGVnXCIsXHJcbiAgICAgICAgICAgIHJvdGF0ZVg6IFwiZGVnXCIsXHJcbiAgICAgICAgICAgIHJvdGF0ZVk6IFwiZGVnXCIsXHJcbiAgICAgICAgICAgIHJvdGF0ZVo6IFwiZGVnXCIsXHJcbiAgICAgICAgICAgIHNjYWxlOiBcIlwiLFxyXG4gICAgICAgICAgICBzY2FsZTNkOiBcIlwiLFxyXG4gICAgICAgICAgICBzY2FsZVg6IFwiXCIsXHJcbiAgICAgICAgICAgIHNjYWxlWTogXCJcIixcclxuICAgICAgICAgICAgc2NhbGVaOiBcIlwiLFxyXG4gICAgICAgICAgICBtYXRyaXg6IFwiXCIsXHJcbiAgICAgICAgICAgIG1hdHJpeDNkOiBcIlwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IChzdHlsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzdHlsZSA9PT0gXCJudW1iZXJcIilcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBcIlVuZXhwZWN0ZWQgc3R5bGVcIjtcclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZS5zdWJzdHJpbmcoMCwgNCkgIT09IFwidXJsKFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSA9IFwidXJsKFwiICsgc3R5bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxjID0gc3R5bGUuY2hhckF0KHN0eWxlLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsYyAhPT0gXCIpXCIgJiYgbGMgIT09IFwiO1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSArPSBcIilcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBzdHlsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbGV0IGFibm9ybWFsS2V5ID0gT2JqZWN0LmtleXMoc3BlY2lhbEZpeCk7XHJcbiAgICAgICAgZnVuY3Rpb24gZm9ybWF0U3RsKHByb3AsIHN0eWxlKSB7XHJcbiAgICAgICAgICAgIGxldCBzcGVjaWFsTWV0aWFsID0gIXByb3AgfHwgYWJub3JtYWxLZXkuaW5jbHVkZXMocHJvcCk7XHJcbiAgICAgICAgICAgIGlmIChzcGVjaWFsTWV0aWFsKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZml4ID0gc3BlY2lhbEZpeFtwcm9wXTtcclxuICAgICAgICAgICAgICAgIGlmICghZml4KVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdHlsZS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGZpeCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc3R5bGUgPT09IFwibnVtYmVyXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdHlsZSArIGZpeDtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdHlsZS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmaXgoc3R5bGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzdHlsZSA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3R5bGU7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0eWxlICsgXCJweFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmb3JtYXRTdHlsZTtcclxuICAgIH0pKCk7XHJcbiAgICBsZXQgdHJhbnNmcm9tUHJvcHMgPSBuZXcgTWFwKCk7XHJcbiAgICBmdW5jdGlvbiBnZXRUcmFuc2Zvcm1Qcm9wcyh0aGF0KSB7XHJcbiAgICAgICAgbGV0IG1lID0gdHJhbnNmcm9tUHJvcHMuZ2V0KHRoYXQpO1xyXG4gICAgICAgIGlmIChtZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIG1lID0gbmV3IFRyYW5zZm9ybVByb3AodGhhdC5jc3MoXCJ0cmFuc2Zvcm1cIikpO1xyXG4gICAgICAgICAgICB0cmFuc2Zyb21Qcm9wcy5zZXQodGhhdCwgbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWU7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBmb3JtYXRDc3MoY3NzLCB0aGF0KSB7XHJcbiAgICAgICAgbGV0IHRyYW5zZm9ybVByb3A7XHJcbiAgICAgICAgaWYgKHRoYXQgPT09IHRydWUpXHJcbiAgICAgICAgICAgIHRoYXQgPSBuZXcgVHJhbnNmb3JtUHJvcCgpO1xyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBjc3MpIHtcclxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgIGxldCBzID0gZm9ybWF0U3R5bGUoa2V5LCBjc3Nba2V5XSwgdGhhdCk7XHJcbiAgICAgICAgICAgIGlmICghKHMgaW5zdGFuY2VvZiBUcmFuc2Zvcm1Qcm9wKSlcclxuICAgICAgICAgICAgICAgIGNzc1trZXldID0gcztcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgY3NzW2tleV07XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1Qcm9wID0gcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHJhbnNmb3JtUHJvcClcclxuICAgICAgICAgICAgY3NzLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVByb3AudG9TdHJpbmcoKTtcclxuICAgICAgICByZXR1cm4gdHJhbnNmb3JtUHJvcDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGZvcm1hdEFuaW1hdGlvbkNzcyhjc3MsIHRoYXQpIHtcclxuICAgICAgICBpZiAoXCJvZmZzZXRcIiBpbiBjc3MpIHtcclxuICAgICAgICAgICAgbGV0IHsgb2Zmc2V0IH0gPSBjc3M7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBjc3Mub2Zmc2V0O1xyXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgbGV0IGVuZCA9IGZvcm1hdENzcyhjc3MsIHRoYXQpO1xyXG4gICAgICAgICAgICBjc3Mub2Zmc2V0ID0gb2Zmc2V0O1xyXG4gICAgICAgICAgICByZXR1cm4gZW5kO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBmb3JtYXRDc3MoY3NzLCB0aGF0KTtcclxuICAgIH1cclxuICAgIGNsYXNzIFRyYW5zZm9ybVByb3Age1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHRyYW5zZm9ybSkge1xyXG4gICAgICAgICAgICB0aGlzLnByaW1pdGl2ZXMgPSB7fTtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKHRyYW5zZm9ybSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHNwbGl0ID0gdHJhbnNmb3JtLnNwbGl0KFwiKVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXQgdHJhbnNsYXRlKHRvKSB7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IHdoeSBub3Qgc3BsaXQoXCIsXCIpXHJcbiAgICAgICAgICAgIGlmICghKHRvIGluc3RhbmNlb2YgQXJyYXkpKVxyXG4gICAgICAgICAgICAgICAgdG8gPSB0by5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgICAgIHRoaXMuYWxsb2NhdGUodG8sIFtcInRyYW5zbGF0ZVhcIiwgXCJ0cmFuc2xhdGVZXCIsIFwidHJhbnNsYXRlWlwiXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFRPRE8gbWF5YmUgc3BsaXQgdGhpcyB1cCBhbmQgcmV0dXJuIGEgbnVtYmVyW10gb2YgdGhlIHRyYW5zbGF0ZXM7IHRoaXMgd291bGQgaGF2ZSB0byBiZSBjb25zaXRlbnRseSBpbXBsZW1lbnRlZCB0aHJvdWdoIGFsbCBjc3MgKGxpa2UgbWFyZ2luIG9yIHBhZGRpbmcpXHJcbiAgICAgICAgZ2V0IHRyYW5zbGF0ZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tYmluZVZhbHMoXCJ0cmFuc2xhdGVYXCIsIFwidHJhbnNsYXRlWVwiLCBcInRyYW5zbGF0ZVpcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldCBzY2FsZSh0bykge1xyXG4gICAgICAgICAgICBpZiAoISh0byBpbnN0YW5jZW9mIEFycmF5KSlcclxuICAgICAgICAgICAgICAgIHRvID0gdG8uc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgICAgICBpZiAodG9bMF0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRvWzFdICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodG9bMl0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjYWxlWCA9IHRvWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjYWxlWSA9IHRvWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjYWxlWiA9IHRvWzJdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2FsZVggPSB0b1swXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2FsZVkgPSB0b1sxXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjYWxlWCA9IHRvWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NhbGVZID0gdG9bMF07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2FsZVogPSB0b1swXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBnZXQgc2NhbGUoKSB7XHJcbiAgICAgICAgICAgIGxldCBzY2FsZVggPSB0aGlzLnNjYWxlWDtcclxuICAgICAgICAgICAgbGV0IHNjYWxlWSA9IHRoaXMuc2NhbGVZO1xyXG4gICAgICAgICAgICBsZXQgc2NhbGVaID0gdGhpcy5zY2FsZVo7XHJcbiAgICAgICAgICAgIGlmIChzY2FsZVggPT09IHNjYWxlWSAmJiBzY2FsZVkgPT09IHNjYWxlWilcclxuICAgICAgICAgICAgICAgIHJldHVybiBzY2FsZVg7XHJcbiAgICAgICAgICAgIC8vY29tYmluZVZhbHMgd2l0aCBrbm93biB2YWxzXHJcbiAgICAgICAgICAgIGxldCBzID0gXCJcIjtcclxuICAgICAgICAgICAgbGV0IGEgPSBbc2NhbGVYLCBzY2FsZVksIHNjYWxlWl07XHJcbiAgICAgICAgICAgIGEuZWEoKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHMgKz0gZSArIFwiIFwiO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHMuc3Vic3RyKDAsIHMubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldCBza2V3KHRvKSB7XHJcbiAgICAgICAgICAgIGlmICghKHRvIGluc3RhbmNlb2YgQXJyYXkpKVxyXG4gICAgICAgICAgICAgICAgdG8gPSB0by5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgICAgIHRoaXMuYWxsb2NhdGUodG8sIFtcInNrZXdYXCIsIFwic2tld1lcIl0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnZXQgc2tldygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tYmluZVZhbHMoXCJza2V3WFwiLCBcInNrZXdZXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXQgbWF0cml4KHRvKSB7XHJcbiAgICAgICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgICAgICBpZiAodG8gaW5zdGFuY2VvZiBBcnJheSlcclxuICAgICAgICAgICAgICAgIHRvID0gdG8uam9pbihcIiBcIik7XHJcbiAgICAgICAgICAgIGxldCBkZWMgPSBkZWNvbXBvc2VNYXRyaXgobmV3IERPTU1hdHJpeCh0bykpO1xyXG4gICAgICAgICAgICBsZXQgc2tldyA9IGRlYy5za2V3WFk7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBkZWMuc2tld1hZO1xyXG4gICAgICAgICAgICBkZWxldGUgZGVjLnNrZXdYWjtcclxuICAgICAgICAgICAgZGVsZXRlIGRlYy5za2V3WVo7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGQgaW4gZGVjKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGVjW2RdID09PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzW2RdO1xyXG4gICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tkXSA9IGZvcm1hdFN0eWxlKGQsIGRlY1tkXSwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICB0aGlzLnNrZXdYID0gZm9ybWF0U3R5bGUoXCJza2V3WFwiLCBza2V3LCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbWJpbmVWYWxzKC4uLnZhbHMpIHtcclxuICAgICAgICAgICAgbGV0IHMgPSBcIlwiO1xyXG4gICAgICAgICAgICB2YWxzLmVhKCh2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBlID0gdGhpc1t2YWxdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGUgIT09IFRyYW5zZm9ybVByb3AucHJpbWl0aXZlRGVmYXVsdHNbdmFsXSlcclxuICAgICAgICAgICAgICAgICAgICBzICs9IGUgKyBcIiBcIjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBzLmxlbmd0aCA9PT0gMCA/IFRyYW5zZm9ybVByb3AucHJpbWl0aXZlRGVmYXVsdHNbdmFscy5maXJzdF0gOiBzLnN1YnN0cigwLCBzLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhbGxvY2F0ZShpbnB1dCwgZnVuY3MpIHtcclxuICAgICAgICAgICAgZnVuY3MuZWEoKGZ1bmMsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgaWYgKGlucHV0W2ldICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tmdW5jXSA9IGlucHV0W2ldO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNoYW5nZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBwcm9wIG9mIFRyYW5zZm9ybVByb3AucHJpbWl0aXZlVHJhbnNmb3JtUHJvcHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIE1VU1QgZm9ybWF0ZWQgaW4gdGhlIGZvbGxvd2luZyBvcmRlciB0byBhY2hpdmUgY29uc2l0ZW50IHJlc3VsdHMgW3RyYW5zbGF0ZSByb3RhdGUgc2tldyBzY2FsZV1cclxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCBpbiB0aGlzLnByaW1pdGl2ZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByaW1pdGl2ZXNbcHJvcF0gIT09IFRyYW5zZm9ybVByb3AucHJpbWl0aXZlRGVmYXVsdHNbcHJvcF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JlICs9IHByb3AgKyBUcmFuc2Zvcm1Qcm9wLmNsYW1wT3BlbiArIHRoaXMucHJpbWl0aXZlc1twcm9wXSArIFRyYW5zZm9ybVByb3AuY2xhbXBDbG9zZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdG9yZSB8fCBcIm5vbmVcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBUcmFuc2Zvcm1Qcm9wLnByaW1pdGl2ZURlZmF1bHRzID0ge1xyXG4gICAgICAgIHRyYW5zbGF0ZVg6IFwiMHB4XCIsXHJcbiAgICAgICAgdHJhbnNsYXRlWTogXCIwcHhcIixcclxuICAgICAgICB0cmFuc2xhdGVaOiBcIjBweFwiLFxyXG4gICAgICAgIHJvdGF0ZVg6IFwiMGRlZ1wiLFxyXG4gICAgICAgIHJvdGF0ZVk6IFwiMGRlZ1wiLFxyXG4gICAgICAgIHJvdGF0ZVo6IFwiMGRlZ1wiLFxyXG4gICAgICAgIHNrZXdYOiBcIjBkZWdcIixcclxuICAgICAgICBza2V3WTogXCIwZGVnXCIsXHJcbiAgICAgICAgc2NhbGVYOiBcIjFcIixcclxuICAgICAgICBzY2FsZVk6IFwiMVwiLFxyXG4gICAgICAgIHNjYWxlWjogXCIxXCIsXHJcbiAgICAgICAgcGVyc3BlY3RpdmU6IFwibm9uZVwiXHJcbiAgICB9O1xyXG4gICAgVHJhbnNmb3JtUHJvcC5wcmltaXRpdmVUcmFuc2Zvcm1Qcm9wcyA9IE9iamVjdC5rZXlzKFRyYW5zZm9ybVByb3AucHJpbWl0aXZlRGVmYXVsdHMpO1xyXG4gICAgVHJhbnNmb3JtUHJvcC51bWJyZWxsYVRyYW5zZm9ybVByb3BzID0gW1xyXG4gICAgICAgIFwicm90YXRlXCIsIFwicm90YXRlM2RcIiwgXCJzY2FsZVwiLCBcInNjYWxlM2RcIiwgXCJ0cmFuc2xhdGVcIiwgXCJ0cmFuc2xhdGUzZFwiLCBcInNrZXdcIiwgXCJtYXRyaXhcIiwgXCJtYXRyaXgzZFwiXHJcbiAgICBdO1xyXG4gICAgVHJhbnNmb3JtUHJvcC50cmFuc2Zvcm1Qcm9wcyA9IFsuLi5UcmFuc2Zvcm1Qcm9wLnByaW1pdGl2ZVRyYW5zZm9ybVByb3BzLCAuLi5UcmFuc2Zvcm1Qcm9wLnVtYnJlbGxhVHJhbnNmb3JtUHJvcHNdO1xyXG4gICAgVHJhbnNmb3JtUHJvcC5hcHBsaWVzID0gKC4uLnByb3ApID0+IHtcclxuICAgICAgICByZXR1cm4gVHJhbnNmb3JtUHJvcC50cmFuc2Zvcm1Qcm9wcy5jb250YWlucyguLi5wcm9wKTtcclxuICAgIH07XHJcbiAgICBUcmFuc2Zvcm1Qcm9wLmNsYW1wT3BlbiA9IFwiKFwiO1xyXG4gICAgVHJhbnNmb3JtUHJvcC5jbGFtcENsb3NlID0gXCIpIFwiO1xyXG4gICAgVHJhbnNmb3JtUHJvcC5wcmltaXRpdmVUcmFuc2Zvcm1Qcm9wcy5lYSgocHJvcCkgPT4ge1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmFuc2Zvcm1Qcm9wLnByb3RvdHlwZSwgcHJvcCwge1xyXG4gICAgICAgICAgICBnZXQoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcmltaXRpdmVzW3Byb3BdIHx8IFRyYW5zZm9ybVByb3AucHJpbWl0aXZlRGVmYXVsdHNbcHJvcF07XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNldChzdHlsZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJpbWl0aXZlc1twcm9wXSA9IHN0eWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHAuY3NzID0gZnVuY3Rpb24gKGtleV9jc3MsIHZhbCkge1xyXG4gICAgICAgIGlmICh0eXBlb2Yga2V5X2NzcyA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICBsZXQgY3NzID0gY2xvbmVEYXRhKGtleV9jc3MpO1xyXG4gICAgICAgICAgICBmb3JtYXRDc3MoY3NzLCB0aGlzKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgcHJvcCBpbiBjc3MpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3R5bGVbcHJvcF0gPSBjc3NbcHJvcF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodmFsICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHZhbCAhPT0gXCJib29sZWFuXCIpIHtcclxuICAgICAgICAgICAgbGV0IHMgPSBmb3JtYXRTdHlsZShrZXlfY3NzLCB2YWwsIHRoaXMpO1xyXG4gICAgICAgICAgICBpZiAoIShzIGluc3RhbmNlb2YgVHJhbnNmb3JtUHJvcCkpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0eWxlW2tleV9jc3NdID0gcztcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdHlsZS50cmFuc2Zvcm0gPSBzLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgcztcclxuICAgICAgICAgICAgaWYgKFRyYW5zZm9ybVByb3AuYXBwbGllcyhrZXlfY3NzKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1zV2l0aG91dENvbnNpdGVudFRyYW5zZm9ybVByb3BzLmluY2x1ZGVzKHsgZWxlbTogdGhpcyB9KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0ID0gbmV3IFRyYW5zZm9ybVByb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICB0Lm1hdHJpeCA9IGdldENvbXB1dGVkU3R5bGUodGhpcykudHJhbnNmb3JtO1xyXG4gICAgICAgICAgICAgICAgICAgIHMgPSB0W2tleV9jc3NdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHMgPSBnZXRUcmFuc2Zvcm1Qcm9wcyh0aGlzKVtrZXlfY3NzXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzKVtrZXlfY3NzXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocyA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgXCJVbmtub3duIGtleSBcXFwiXCIgKyBrZXlfY3NzICsgXCJcXFwiLlwiO1xyXG4gICAgICAgICAgICBpZiAodmFsIHx8IHMuc3BsaXQoXCIgXCIpLmxlbmd0aCA+IDEpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcztcclxuICAgICAgICAgICAgbGV0IG4gPSBwYXJzZUZsb2F0KHMpO1xyXG4gICAgICAgICAgICBpZiAoaXNOYU4obikpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcztcclxuICAgICAgICAgICAgcmV0dXJuIG47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIGZ1bmN0aW9uIGN1cnJlbnRGcmFtZShrZXlzLCB0aGF0KSB7XHJcbiAgICAgICAgbGV0IHJldCA9IHt9O1xyXG4gICAgICAgIGxldCBjcyA9IGdldENvbXB1dGVkU3R5bGUodGhhdCk7XHJcbiAgICAgICAgbGV0IGhhc1RyYW5zZm9ybVByb3AgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBrZXkgb2Yga2V5cykge1xyXG4gICAgICAgICAgICBpZiAoVHJhbnNmb3JtUHJvcC5hcHBsaWVzKGtleSkpXHJcbiAgICAgICAgICAgICAgICBoYXNUcmFuc2Zvcm1Qcm9wLmFkZChrZXkpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXRba2V5XSA9IGNzW2tleV0gfHwgXCIwXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChoYXNUcmFuc2Zvcm1Qcm9wKSB7XHJcbiAgICAgICAgICAgIGxldCBwcm9wcyA9IHRyYW5zZnJvbVByb3BzLmdldCh0aGF0KTtcclxuICAgICAgICAgICAgZm9yIChsZXQgcHJvcCBvZiBoYXNUcmFuc2Zvcm1Qcm9wKSB7XHJcbiAgICAgICAgICAgICAgICByZXRbcHJvcF0gPSBwcm9wc1twcm9wXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXQub2Zmc2V0ID0gMDtcclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG4gICAgbGV0IGRldGVjdElmSW5UcmFuc2l0aW9uUHJvcGVydHkgPSAoKCkgPT4ge1xyXG4gICAgICAgIGZ1bmN0aW9uIHdvYW4oa2V5LCB0aGF0KSB7XHJcbiAgICAgICAgICAgIGxldCBzID0gXCJUaGUgdHJhbnNpdGlvbiBwcm9wZXJ0XCI7XHJcbiAgICAgICAgICAgIGlmIChrZXkgaW5zdGFuY2VvZiBBcnJheSlcclxuICAgICAgICAgICAgICAgIHMgKz0gXCJpZXMgXFxcIlwiO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBzICs9IFwieSBcXFwiXCI7XHJcbiAgICAgICAgICAgIHMgKz0ga2V5LnRvU3RyaW5nKCkgKyBcIlxcXCIgaXMgbm90IGVtcHR5IGZvciB0aGUgZm9sbG93aW5nIGVsZW1lbnQuIEl0IGlzIHJlY29tbWVuZGVkIHRvIG5vdCB1c2UgY3NzIGFuaWFtdGlvbnMgYW5kIHRoaXMgZnJhbWV3b3JrIGZvciB0aGUgc2FtZSBwcm9wZXJ0aWVzLlxcblxcbkluIG9yZGVyIHRvIHByZXZlbnQgYW4gYW5pYW10aW9uIGZyb20gdHJpZ2dlcmluZyB0d2ljZSBpbiBhIHJvdyB0aGUgcmVzdWx0IG9mIHRoaXMgb25lIHdpbGwgbm90IGRpc3BsYXkgaXRzIHJlc3VsdCBpbiB0aGUgZG9tIGV4cGxvcmVyLlxcblxcblwiO1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4ocywgdGhhdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoY3NzS2V5cywgdHJhbnNpdGlvblByb3BlcnR5cywgdHJhbnNpdGlvbkR1cmF0aW9uLCB0aGF0KSB7XHJcbiAgICAgICAgICAgIGxldCB3YXJuID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBvZiBjc3NLZXlzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHJhbnNpdGlvbkR1cmF0aW9uICE9PSAwICYmICh0cmFuc2l0aW9uUHJvcGVydHlzLmluY2x1ZGVzKGtleSkgfHwgdHJhbnNpdGlvblByb3BlcnR5cyA9PT0gXCJhbGxcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB3YXJuLmFkZChrZXkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBsZW5ndGggPSB3YXJuLmxlbmd0aDtcclxuICAgICAgICAgICAgaWYgKGxlbmd0aCAhPT0gMClcclxuICAgICAgICAgICAgICAgIGlmIChsZW5ndGggPT09IDEpXHJcbiAgICAgICAgICAgICAgICAgICAgd29hbih3YXJuWzBdLCB0aGF0KTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB3b2FuKHdhcm4sIHRoYXQpO1xyXG4gICAgICAgICAgICByZXR1cm4gd2FybjtcclxuICAgICAgICB9O1xyXG4gICAgfSkoKTtcclxuICAgIGZ1bmN0aW9uIGV2YWx1YXRlQWxsS2V5cyhmcmFtZXMpIHtcclxuICAgICAgICBsZXQgYWxsS2V5cyA9IE9iamVjdC5rZXlzKGZyYW1lcy5maXJzdCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBmcmFtZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhmcmFtZXNbaV0pO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBlIG9mIGtleXMpIHtcclxuICAgICAgICAgICAgICAgIGlmICghYWxsS2V5cy5pbmNsdWRlcyhlKSlcclxuICAgICAgICAgICAgICAgICAgICBhbGxLZXlzLmFkZChlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYWxsS2V5cy5pbmNsdWRlcyhcIm9mZnNldFwiKSlcclxuICAgICAgICAgICAgYWxsS2V5cy5ybShcIm9mZnNldFwiKTtcclxuICAgICAgICByZXR1cm4gYWxsS2V5cztcclxuICAgIH1cclxuICAgIGNsYXNzIEVsZW1zV2l0aG91dENvbnNpdGVudFRyYW5zZm9ybVByb3BzIHtcclxuICAgICAgICBjb25zdHJ1Y3RvciguLi5lbGVtcykge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JlID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuYWRkKC4uLmVsZW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYWRkKC4uLmVsZW1zKSB7XHJcbiAgICAgICAgICAgIGVsZW1zLmVhKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaW5jbHVkZXMoZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5hZGQoZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBybSguLi5lbGVtcykge1xyXG4gICAgICAgICAgICBsZXQgaW5kaWNlcyA9IFtdO1xyXG4gICAgICAgICAgICBlbGVtcy5lYSgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGhhc05vSWRlbnRpZmllciA9IGUuaWRlbnRpZmllciA9PT0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5lYSgocywgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlID09PSBzIHx8IChzLmVsZW0gPT09IGUuZWxlbSAmJiAoaGFzTm9JZGVudGlmaWVyIHx8IHMuaWRlbnRpZmllciA9PT0gZS5pZGVudGlmaWVyKSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGljZXMuYWRkKGkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JlLnJtSSguLi5pbmRpY2VzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5jbHVkZXMoLi4uZWxlbXMpIHtcclxuICAgICAgICAgICAgaWYgKGVsZW1zLmVhKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaGFzTm9JZGVudGlmaWVyID0gZS5pZGVudGlmaWVyID09PSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdG9yZS5lYSgocykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlID09PSBzIHx8IChzLmVsZW0gPT09IGUuZWxlbSAmJiAoaGFzTm9JZGVudGlmaWVyIHx8IHMuaWRlbnRpZmllciA9PT0gZS5pZGVudGlmaWVyKSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgZWFzZUluT3V0ID0gbmV3IEVhc2luZyhcImVhc2VJbk91dFwiKTtcclxuICAgIC8vIGxldCBlYXNlID0gbmV3IEVhc2luZyhcImVhc2VcIilcclxuICAgIGxldCBlYXNlSW5PdXRGdW5jID0gZWFzZUluT3V0LmZ1bmN0aW9uO1xyXG4gICAgLy8gbGV0IGVhc2VJbk91dFN0cmluZyA9IGVhc2VJbk91dC5zdHJpbmdcclxuICAgIC8vIGxldCBlYXNlRnVuYyA9IGVhc2UuZnVuY3Rpb25cclxuICAgIC8vIGxldCBlYXNlU3RyaW5nID0gZWFzZS5zdHJpbmdcclxuICAgIGxldCBtYXhBbmltYXRpb25Qcm9ncmVzcyA9IC45OTk5OTk5O1xyXG4gICAgbGV0IG1pbkFuaW1hdGlvblByb2dyZXNzID0gMC4wMDAwMDAxO1xyXG4gICAgbGV0IG5hbWVTcGFjZUluZGV4ID0gbmV3IE1hcCgpO1xyXG4gICAgbGV0IGVsZW1zV2l0aG91dENvbnNpdGVudFRyYW5zZm9ybVByb3BzID0gbmV3IEVsZW1zV2l0aG91dENvbnNpdGVudFRyYW5zZm9ybVByb3BzKCk7XHJcbiAgICBsZXQgbWF4UHJvZ3Jlc3NJbk9uZVN0ZXAgPSAuMTtcclxuICAgIC8vIC4xIC8gMTYuNjY2NjY2NjY2NjY2NjY2N1xyXG4gICAgbGV0IG1heFByb2dyZXNzSW5PbmVTdGVwV2l0aG91dERlbHRhID0gLjAwNjtcclxuICAgIGxldCBmcmFtZURlbHRhID0gMTYuNjY2NjY2NjY2NjY2NjY2NztcclxuICAgIGxldCBsYXN0RnJhbWVUaW1lU3RhbXAgPSAwO1xyXG4gICAgbGV0IGxvb3AgPSAoZnJhbWVUaW1lU3RhbXApID0+IHtcclxuICAgICAgICBmcmFtZURlbHRhID0gZnJhbWVUaW1lU3RhbXAgLSBsYXN0RnJhbWVUaW1lU3RhbXA7XHJcbiAgICAgICAgbGFzdEZyYW1lVGltZVN0YW1wID0gZnJhbWVUaW1lU3RhbXA7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xyXG4gICAgICAgIC8vIGxvZyhmcmFtZURlbHRhKVxyXG4gICAgfTtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcclxuICAgIC8vIFRPRE86IG1heWJlIEhUTUwgYXR0cmJzIGFuaW1cclxuICAgIC8vIFNvIHRoYXQgeW91IGNvdWxkIGFuaW1hdGUgaW5uZXJIVE1MIGUuZy5cclxuICAgIC8vIG1heWJlIGZhZGUgYW91dCBmb250LWNvbG9yIGFuZCB0aGVuIGJhY2suLi4gb3IganVzdCBzZXQgaXRcclxuICAgIC8vIFRPRE86IGFkZCB4IGFzIHNob3J0aGFuZCBmb3IgdHJhbnNsYXRlIFggdXN3LlxyXG4gICAgLy8gVE9ETzogaW5zdGVhZCBvZiBvcHRpb25zIGp1c3QgdGhlIGR1cmF0aW9uIGNhbiBiZSBnaXZlbiBhcyB3ZWxsLiBzbyBlbGVtLmFuaW0oey4uLn0sIDMwMClcclxuICAgIC8vIFRPRE86IG1ha2Ugd2FybmluZyBpZiBhbmltYXRpb24gdG8gb3IgZnJvbSBhdXRvLiBCYXNlZCBvbiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvQ1NTX1RyYW5zaXRpb25zL1VzaW5nX0NTU190cmFuc2l0aW9ucyNXaGljaF9DU1NfcHJvcGVydGllc19jYW5fYmVfdHJhbnNpdGlvbmVkXHJcbiAgICBwLmFuaW0gPSBhc3luYyBmdW5jdGlvbiAoZnJhbWVfZnJhbWVzLCBvcHRpb25zID0ge30sIGd1aWRhbmNlKSB7XHJcbiAgICAgICAgbGV0IHByb3BzID0gdHJhbnNmcm9tUHJvcHMuZ2V0KHRoaXMpO1xyXG4gICAgICAgIGlmIChwcm9wcyA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICB0cmFuc2Zyb21Qcm9wcy5zZXQodGhpcywgbmV3IFRyYW5zZm9ybVByb3AoKSk7XHJcbiAgICAgICAgbGV0IGFuaW1hdGlvbklzR3VpZGVkID0gZ3VpZGFuY2UgIT09IHVuZGVmaW5lZDtcclxuICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICBpZiAoZnJhbWVfZnJhbWVzW09iamVjdC5rZXlzKGZyYW1lX2ZyYW1lcylbMF1dIGluc3RhbmNlb2YgQXJyYXkpXHJcbiAgICAgICAgICAgIGZyYW1lX2ZyYW1lcyA9IGNvbnZlcnRGcmFtZVN0cnVjdHVyZShmcmFtZV9mcmFtZXMpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgZnJhbWVfZnJhbWVzID0gY2xvbmVEYXRhKGZyYW1lX2ZyYW1lcyk7XHJcbiAgICAgICAgaWYgKG5hbWVTcGFjZUluZGV4LmdldCh0aGlzKSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBuYW1lU3BhY2VJbmRleC5zZXQodGhpcywgW10pO1xyXG4gICAgICAgIGxldCBucyA9IG5hbWVTcGFjZUluZGV4LmdldCh0aGlzKTtcclxuICAgICAgICBpZiAob3B0aW9ucy5uYW1lID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbGV0IGluYyA9IDE7XHJcbiAgICAgICAgICAgIHdoaWxlIChucy5pbmNsdWRlcyhpbmMudG9TdHJpbmcoKSkpIHtcclxuICAgICAgICAgICAgICAgIGluYysrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBzID0gaW5jLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBvcHRpb25zLm5hbWUgPSBzO1xyXG4gICAgICAgICAgICBucy5hZGQocyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgaW5jID0gMjtcclxuICAgICAgICAgICAgbGV0IG5hbWU7XHJcbiAgICAgICAgICAgIGlmICghbnMuaW5jbHVkZXMob3B0aW9ucy5uYW1lKSlcclxuICAgICAgICAgICAgICAgIG5hbWUgPSBvcHRpb25zLm5hbWU7XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKG5zLmluY2x1ZGVzKG9wdGlvbnMubmFtZSArIGluYykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbmMrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG5hbWUgPSBvcHRpb25zLm5hbWUgKyBpbmM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgIG9wdGlvbnMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgICAgIG5zLmFkZChuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHByb2dyZXNzTmFtZVN0cmluZyA9IFwiYW5pbWF0aW9uLVwiICsgb3B0aW9ucy5uYW1lICsgXCItcHJvZ3Jlc3NcIjtcclxuICAgICAgICBsZXQgZW5kRnJhbWVzO1xyXG4gICAgICAgIGxldCB0cmFuc2l0aW9uUHJvcGVydHkgPSB0aGlzLmNzcyhcInRyYW5zaXRpb24tcHJvcGVydHlcIik7XHJcbiAgICAgICAgbGV0IHRyYW5zaXRpb25EdXJhdGlvbiA9IHRoaXMuY3NzKFwidHJhbnNpdGlvbi1kdXJhdGlvblwiKTtcclxuICAgICAgICBsZXQgbmVlZFRvQ2FsY3VsYXRlSW5pdGFsRnJhbWUgPSBmYWxzZTtcclxuICAgICAgICBsZXQgYWxsS2V5cztcclxuICAgICAgICBpZiAoZnJhbWVfZnJhbWVzIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICAgICAgbGV0IGZyYW1lcyA9IGZyYW1lX2ZyYW1lcztcclxuICAgICAgICAgICAgYWxsS2V5cyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBmcmFtZSBvZiBmcmFtZXMpIHtcclxuICAgICAgICAgICAgICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMoZnJhbWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGtleXMuaW5jbHVkZXMoXCJvZmZzZXRcIikpXHJcbiAgICAgICAgICAgICAgICAgICAga2V5cy5ybVYoXCJvZmZzZXRcIik7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgb2Yga2V5cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghYWxsS2V5cy5pbmNsdWRlcyhrZXkpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxLZXlzLmFkZChrZXkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChmcmFtZXNbMF0ub2Zmc2V0ICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBuZWVkVG9DYWxjdWxhdGVJbml0YWxGcmFtZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5pdEZyYW1lID0gY3VycmVudEZyYW1lKGFsbEtleXMsIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgZnJhbWVzLmRkYShpbml0RnJhbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNwcmVhZE9mZnNldChmcmFtZXMpO1xyXG4gICAgICAgICAgICBsZXQgbmVlZGVkID0gbmV3IE1hcCgpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZyYW1lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGZyYW1lID0gZnJhbWVzW2ldO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRoaXNrZXlzID0gT2JqZWN0LmtleXMoZnJhbWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXNrZXlzLmluY2x1ZGVzKFwib2Zmc2V0XCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXNrZXlzLnJtVihcIm9mZnNldFwiKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGtleSBvZiBhbGxLZXlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlza2V5cy5pbmNsdWRlcyhrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcmV2U3R5bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXh0U3R5bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcmV2T2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV4dE9mZnNldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHdhbnRlZE9mZnNldCA9IGZyYW1lLm9mZnNldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBmcmFtZXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmcmFtZWogPSBmcmFtZXNbal07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZnJhbWVqW2tleV0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqIDwgaSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2U3R5bGUgPSBmcmFtZWpba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldk9mZnNldCA9IGZyYW1lai5vZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0U3R5bGUgPSBmcmFtZWpba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dE9mZnNldCA9IGZyYW1lai5vZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJldlN0eWxlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lW2tleV0gPSBuZXh0U3R5bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobmV4dFN0eWxlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lW2tleV0gPSBwcmV2U3R5bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobmV4dFN0eWxlID09PSBwcmV2U3R5bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lW2tleV0gPSBwcmV2U3R5bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYXQgPSAoKHdhbnRlZE9mZnNldCAtIHByZXZPZmZzZXQpIC8gKG5leHRPZmZzZXQgLSBwcmV2T2Zmc2V0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWUgPSBuZWVkZWQuZ2V0KGZyYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGYgPSBtZS5lYSgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5pZGVudGlmeS5wcmV2T2Zmc2V0ID09PSBwcmV2T2Zmc2V0ICYmIGUuaWRlbnRpZnkubmV4dE9mZnNldCA9PT0gbmV4dE9mZnNldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5mcmFtZXNbMF1ba2V5XSA9IHByZXZTdHlsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuZnJhbWVzWzFdW2tleV0gPSBuZXh0U3R5bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmtleXMuYWRkKGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZS5hZGQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5czogW2tleV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgW2tleV06IHByZXZTdHlsZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgW2tleV06IG5leHRTdHlsZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRlbnRpZnk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2T2Zmc2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRPZmZzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmVlZGVkLnNldChmcmFtZSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzOiBba2V5XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWVzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBba2V5XTogcHJldlN0eWxlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBba2V5XTogbmV4dFN0eWxlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZGVudGlmeToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZPZmZzZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dE9mZnNldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IG5vdEFscmVhZHlGb3JtYXR0ZWRGcmFtZXMgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgZnJhbWUgb2YgZnJhbWVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobmVlZGVkLmdldChmcmFtZSkgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXRBbmltYXRpb25Dc3MoZnJhbWUsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIG5vdEFscmVhZHlGb3JtYXR0ZWRGcmFtZXMuYWRkKGZyYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgcHJvbXMgPSBbXTtcclxuICAgICAgICAgICAgbmVlZGVkLmZvckVhY2goKG5lLCBmcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbmUuZWEoKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9tcy5hZGQoZ2V0U3R5bGVBdFByb2dyZXNzKFtlLmZyYW1lcywgZV0sIDEpLnRoZW4oKHN0eWxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBzdHlsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWVba2V5XSA9IHN0eWxlW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHByb21zKTtcclxuICAgICAgICAgICAgbm90QWxyZWFkeUZvcm1hdHRlZEZyYW1lcy5lYSgoZnJhbWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGZvcm1hdEFuaW1hdGlvbkNzcyhmcmFtZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBhbGxLZXlzID0gZXZhbHVhdGVBbGxLZXlzKGZyYW1lcyk7XHJcbiAgICAgICAgICAgIGVuZEZyYW1lcyA9IGZyYW1lcztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGZvcm1hdEFuaW1hdGlvbkNzcyhmcmFtZV9mcmFtZXMsIHRydWUpO1xyXG4gICAgICAgICAgICBhbGxLZXlzID0gT2JqZWN0LmtleXMoZnJhbWVfZnJhbWVzKTtcclxuICAgICAgICAgICAgaWYgKGFsbEtleXMuaW5jbHVkZXMoXCJvZmZzZXRcIikpXHJcbiAgICAgICAgICAgICAgICBhbGxLZXlzLnJtVihcIm9mZnNldFwiKTtcclxuICAgICAgICAgICAgbmVlZFRvQ2FsY3VsYXRlSW5pdGFsRnJhbWUgPSB0cnVlO1xyXG4gICAgICAgICAgICBsZXQgaW5pdEZyYW1lID0gY3VycmVudEZyYW1lKGFsbEtleXMsIHRoaXMpO1xyXG4gICAgICAgICAgICBlbmRGcmFtZXMgPSBbaW5pdEZyYW1lLCBmcmFtZV9mcmFtZXNdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZGV0ZWN0ZWRQcm9wZXJ0aWVzID0gZGV0ZWN0SWZJblRyYW5zaXRpb25Qcm9wZXJ0eShhbGxLZXlzLCB0cmFuc2l0aW9uUHJvcGVydHksIHRyYW5zaXRpb25EdXJhdGlvbiwgdGhpcyk7XHJcbiAgICAgICAgbGV0IGNzc0NhbkJlVXNlZFRvRmlsbCA9IGFsbEtleXMuZXhjbHVkZXMoLi4uZGV0ZWN0ZWRQcm9wZXJ0aWVzKTtcclxuICAgICAgICBsZXQgZWxlbXNXaXRob3V0Q29uc2l0ZW50VHJhbnNmb3JtUHJvcHNLZXkgPSB7IGVsZW06IHRoaXMsIGlkZW50aWZpZXI6IG9wdGlvbnMubmFtZSB9O1xyXG4gICAgICAgIGlmICghYW5pbWF0aW9uSXNHdWlkZWQpIHtcclxuICAgICAgICAgICAgbGV0IG8gPSBvcHRpb25zO1xyXG4gICAgICAgICAgICBlbGVtc1dpdGhvdXRDb25zaXRlbnRUcmFuc2Zvcm1Qcm9wcy5hZGQoZWxlbXNXaXRob3V0Q29uc2l0ZW50VHJhbnNmb3JtUHJvcHNLZXkpO1xyXG4gICAgICAgICAgICAvL0RlZmF1bHRzXHJcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBpZiAoby5kdXJhdGlvbiA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgby5kdXJhdGlvbiA9IDIwMDtcclxuICAgICAgICAgICAgZWxzZSBpZiAoby5kdXJhdGlvbiA8PSAwKVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgXCJHaXZlbiBvcHRpb24gZHVyYXRpb24gXCIgKyBvLmR1cmF0aW9uICsgXCIgY2Fubm90IGJlIG5lZ2F0aXZlLlwiO1xyXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgaWYgKG8uaXRlcmF0aW9ucyA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgby5pdGVyYXRpb25zID0gMTtcclxuICAgICAgICAgICAgZWxzZSBpZiAoby5pdGVyYXRpb25zIDw9IDApXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBcIkdpdmVuIG9wdGlvbiBpdGVyYXRpb25zIFwiICsgby5pdGVyYXRpb25zICsgXCIgY2Fubm90IGJlIG5lZ2F0aXZlLlwiO1xyXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgaWYgKG8uZWFzaW5nID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgby5lYXNpbmcgPSBcImVhc2VcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgaWYgKG8uZWFzaW5nIGluc3RhbmNlb2YgRWFzaW5nKVxyXG4gICAgICAgICAgICAgICAgICAgIG8uZWFzaW5nID0gby5lYXNpbmcuc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBmaWxsID0gby5maWxsO1xyXG4gICAgICAgICAgICBpZiAoZmlsbCA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgZmlsbCA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBvLmZpbGwgPSBcImJvdGhcIjtcclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlKGFzeW5jIChyZXMsIHJlaikgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGFuaW1hdGlvbjtcclxuICAgICAgICAgICAgICAgIGxldCBlcnJvckluQW5pbWF0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbiA9IHRoaXMuYW5pbWF0ZShlbmRGcmFtZXMsIG8pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBcbiAgRW5jb3VudGVyZWQgZm9sbG93aW5nIGVycm9yIHdoaWxlIGF0dGVtcHRpbmcgdG8gYW5pbWF0ZS5cbiAgXG4gIC0tLS0tLS0tXG4gIFxuICBgICsgZS5tZXNzYWdlICsgYFxuICBcbiAgLS0tLS0tLS1cbiAgXG4gIFxuICBGYWxsaW5nIGJhY2sgb24gY3NzIHRvIHByZXZlbnQgbG9naWMgZmFpbHVyZXMuYCwgZnJhbWVfZnJhbWVzKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNzcyhlbmRGcmFtZXMubGFzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmcm9tUHJvcHMuZ2V0KHRoaXMpLm1hdHJpeCA9IGdldENvbXB1dGVkU3R5bGUodGhpcykudHJhbnNmb3JtO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1zV2l0aG91dENvbnNpdGVudFRyYW5zZm9ybVByb3BzLnJtKGVsZW1zV2l0aG91dENvbnNpdGVudFRyYW5zZm9ybVByb3BzS2V5KTtcclxuICAgICAgICAgICAgICAgICAgICByZWooZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JJbkFuaW1hdGlvbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUocHJvZ3Jlc3NOYW1lU3RyaW5nLCBcIkZhaWxlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUocHJvZ3Jlc3NOYW1lU3RyaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnMucm1WKG9wdGlvbnMubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgaXRlcmF0aW9ucyA9IG8uaXRlcmF0aW9ucztcclxuICAgICAgICAgICAgICAgIGlmIChpdGVyYXRpb25zICE9PSBJbmZpbml0eSlcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24ub25maW5pc2ggPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsYXN0RnJhbWUgPSBlbmRGcmFtZXMubGFzdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmcm9tUHJvcHMuZ2V0KHRoaXMpLm1hdHJpeCA9IGxhc3RGcmFtZS50cmFuc2Zvcm07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1zV2l0aG91dENvbnNpdGVudFRyYW5zZm9ybVByb3BzLnJtKGVsZW1zV2l0aG91dENvbnNpdGVudFRyYW5zZm9ybVByb3BzS2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpbGwgJiYgY3NzQ2FuQmVVc2VkVG9GaWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNzcyhsYXN0RnJhbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLmNhbmNlbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBsZXQgZGlzcGxheVByb2dyZXNzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvckluQW5pbWF0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZyZXEgPSBvLmR1cmF0aW9uIC8gMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBtaW4gPSAxNjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZnJlcSA8IG1pbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJlcSA9IG1pbjtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VyID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJvZ3Jlc3MgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbnQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1ciArPSBmcmVxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzcyA9IE1hdGgucm91bmQoKGN1ciAvIG8uZHVyYXRpb24pICogMTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2dyZXNzID49IDEwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlcmF0aW9ucy0tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZXJhdGlvbnMgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShwcm9ncmVzc05hbWVTdHJpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBucy5ybVYob3B0aW9ucy5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5UHJvZ3Jlc3MoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzID0gMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKHByb2dyZXNzTmFtZVN0cmluZywgcHJvZ3Jlc3MgKyBcIiVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgZnJlcSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheVByb2dyZXNzKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgIGxldCBvID0gb3B0aW9ucztcclxuICAgICAgICAgICAgbGV0IGVhc2luZ0Z1bmM7XHJcbiAgICAgICAgICAgIC8vIERlZmF1bHRzXHJcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBpZiAoby5zdGFydCA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgby5zdGFydCA9IDA7XHJcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBpZiAoby5lbmQgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgIG8uZW5kID0gby5zdGFydCArIDEwMDtcclxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgIGlmIChvLnNtb290aCA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgby5zbW9vdGggPSB0cnVlO1xyXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgaWYgKG8uYWN0aXZlID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICBvLmFjdGl2ZSA9IG5ldyBEYXRhKHRydWUpO1xyXG4gICAgICAgICAgICBpZiAoby5lYXNpbmcgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgZWFzaW5nRnVuYyA9IGVhc2VJbk91dEZ1bmM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygby5lYXNpbmcgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgby5lYXNpbmcgPSBuZXcgRWFzaW5nKG8uZWFzaW5nKTtcclxuICAgICAgICAgICAgICAgIGVhc2luZ0Z1bmMgPSBvLmVhc2luZy5mdW5jdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoby5zdGFydCA+PSBvLmVuZClcclxuICAgICAgICAgICAgICAgIHRocm93IFwiR2l2ZW4gb3B0aW9uIHN0YXJ0IFwiICsgby5zdGFydCArIFwiIGFuZCBlbmQgXCIgKyBvLmVuZCArIFwiIGFyZSBub3QgY29uc2lzdGVudC4gRW5kIG11c3QgYmUgZ3JlYXRlciB0aGFuIHN0YXJ0LlwiO1xyXG4gICAgICAgICAgICBvLmFjdGl2ZS5zdWJzY3JpYmUoKGFjdGl2ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbm90QWN0aXZlID0gIWFjdGl2ZTtcclxuICAgICAgICAgICAgICAgIGlmIChhY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtc1dpdGhvdXRDb25zaXRlbnRUcmFuc2Zvcm1Qcm9wcy5hZGQoZWxlbXNXaXRob3V0Q29uc2l0ZW50VHJhbnNmb3JtUHJvcHNLZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1zV2l0aG91dENvbnNpdGVudFRyYW5zZm9ybVByb3BzLmluY2x1ZGVzKGVsZW1zV2l0aG91dENvbnNpdGVudFRyYW5zZm9ybVByb3BzS2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zyb21Qcm9wcy5nZXQodGhpcykubWF0cml4ID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzKS50cmFuc2Zvcm07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1zV2l0aG91dENvbnNpdGVudFRyYW5zZm9ybVByb3BzLnJtKGVsZW1zV2l0aG91dENvbnNpdGVudFRyYW5zZm9ybVByb3BzS2V5KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUocHJvZ3Jlc3NOYW1lU3RyaW5nLCBcIkluYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICAgICAgICAgIC8vbW92ZSBjb25zdGFudHNcclxuICAgICAgICAgICAgbGV0IGluU21vb3RoaW5nO1xyXG4gICAgICAgICAgICBsZXQgY2FuY2VsU21vb3RoaW5nO1xyXG4gICAgICAgICAgICBsZXQgbGFzdEFuaW1hdGlvbjtcclxuICAgICAgICAgICAgbGV0IGxhc3RQcm9ncmVzcyA9IG1pbkFuaW1hdGlvblByb2dyZXNzO1xyXG4gICAgICAgICAgICBsZXQgcHJvZ3Jlc3MgPSBtaW5BbmltYXRpb25Qcm9ncmVzcztcclxuICAgICAgICAgICAgbGV0IHByb2dyZXNzQWJzb3JwdGlvbiA9IDA7XHJcbiAgICAgICAgICAgIGxldCBuZXh0UHJvZ3Jlc3MgPSAxO1xyXG4gICAgICAgICAgICBsZXQgcHJldlByb2dyZXNzID0gMDtcclxuICAgICAgICAgICAgbGV0IHNsaWRlID0gMDtcclxuICAgICAgICAgICAgbGV0IGxhc3RQcm9ncmVzc0Fic29ycHRpb24gPSBwcm9ncmVzc0Fic29ycHRpb247XHJcbiAgICAgICAgICAgIGxldCByYXdQcm9ncmVzcyA9IG1pbkFuaW1hdGlvblByb2dyZXNzO1xyXG4gICAgICAgICAgICBsZXQgcmF3TGFzdFByb2dyZXNzID0gbWluQW5pbWF0aW9uUHJvZ3Jlc3M7XHJcbiAgICAgICAgICAgIGxldCBub3RBY3RpdmUgPSAhby5hY3RpdmUudmFsO1xyXG4gICAgICAgICAgICBsZXQgbm90SW5MaW1pdENvcnJlY3Rpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICBsZXQgYWJzdWx1dGVQcm9ncmVzcztcclxuICAgICAgICAgICAgbGV0IHN1YnNjcmlwdGlvbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChub3RBY3RpdmUpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgbGFzdFByb2dyZXNzID0gcHJvZ3Jlc3M7XHJcbiAgICAgICAgICAgICAgICByYXdMYXN0UHJvZ3Jlc3MgPSByYXdQcm9ncmVzcztcclxuICAgICAgICAgICAgICAgIHByb2dyZXNzID0gcHJvZ3Jlc3NUb1NhdmVQcm9ncmVzcygoKGFic3VsdXRlUHJvZ3Jlc3MgLSBvLnN0YXJ0KSAvIChvLmVuZCAtIG8uc3RhcnQpKSk7XHJcbiAgICAgICAgICAgICAgICByYXdQcm9ncmVzcyA9IHByb2dyZXNzO1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb2dyZXNzID09PSBsYXN0UHJvZ3Jlc3MpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgaWYgKGluU21vb3RoaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsU21vb3RoaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJhd0xhc3RQcm9ncmVzcyA9PT0gcmF3UHJvZ3Jlc3MpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChvLnNtb290aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyYXdMYXN0UHJvZ3Jlc3MgPCByYXdQcm9ncmVzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc0Fic29ycHRpb24gPSBwcm9ncmVzc0Fic29ycHRpb24gKiAocmF3UHJvZ3Jlc3MgLSBuZXh0UHJvZ3Jlc3MpIC8gKHJhd0xhc3RQcm9ncmVzcyAtIG5leHRQcm9ncmVzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc0Fic29ycHRpb24gPSBwcm9ncmVzc0Fic29ycHRpb24gKiAocmF3UHJvZ3Jlc3MgLSBwcmV2UHJvZ3Jlc3MpIC8gKHJhd0xhc3RQcm9ncmVzcyAtIHByZXZQcm9ncmVzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgobGFzdFByb2dyZXNzQWJzb3JwdGlvbiA8IDAgJiYgcHJvZ3Jlc3NBYnNvcnB0aW9uID49IDApIHx8IChwcm9ncmVzc0Fic29ycHRpb24gPD0gMCAmJiBsYXN0UHJvZ3Jlc3NBYnNvcnB0aW9uID4gMCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NBYnNvcnB0aW9uID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3MgKz0gcHJvZ3Jlc3NBYnNvcnB0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RQcm9ncmVzc0Fic29ycHRpb24gPSBwcm9ncmVzc0Fic29ycHRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGUgPSAoc2xpZGUgLyAxLjcpICsgKChwcm9ncmVzcyAtIGxhc3RQcm9ncmVzcykgLyBmcmFtZURlbHRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCBkaWZmID0gcHJvZ3Jlc3MgLSBsYXN0UHJvZ3Jlc3M7XHJcbiAgICAgICAgICAgICAgICBsZXQgb3ZlcmxpbWl0ID0gTWF0aC5hYnMoZGlmZikgPiBtYXhQcm9ncmVzc0luT25lU3RlcDtcclxuICAgICAgICAgICAgICAgIGlmIChvdmVybGltaXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzcyA9IHByb2dyZXNzVG9TYXZlUHJvZ3Jlc3MobGFzdFByb2dyZXNzICsgKCgoZGlmZiA+IDApID8gbWF4UHJvZ3Jlc3NJbk9uZVN0ZXBXaXRob3V0RGVsdGEgOiAtbWF4UHJvZ3Jlc3NJbk9uZVN0ZXBXaXRob3V0RGVsdGEpICogZnJhbWVEZWx0YSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGxhc3RQcm9ncmVzcyA9PT0gbWluQW5pbWF0aW9uUHJvZ3Jlc3MgfHwgbGFzdFByb2dyZXNzID09PSBtYXhBbmltYXRpb25Qcm9ncmVzcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZWVkVG9DYWxjdWxhdGVJbml0YWxGcmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRGcmFtZXNbMF0gPSBjdXJyZW50RnJhbWUoYWxsS2V5cywgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5lZWRUb0NhbGN1bGF0ZUluaXRhbEZyYW1lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvLmluQ2IgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG8uaW5DYiA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbby5pbkNiXSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvLmluQ2IuY2FsbCh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL2FuaW1hdGlvblxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUocHJvZ3Jlc3NOYW1lU3RyaW5nLCBNYXRoLnJvdW5kKHByb2dyZXNzICogMTAwKSArIFwiJVwiKTtcclxuICAgICAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxhc3RBbmltYXRpb24gIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgICAgICBsYXN0QW5pbWF0aW9uLmNhbmNlbCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRoaXNBbmltYXRpb247XHJcbiAgICAgICAgICAgICAgICBsZXQgb3AgPSB7IGR1cmF0aW9uOiAxMDAsIGZpbGw6IFwiYm90aFwiLCBlYXNpbmc6IFwibGluZWFyXCIsIGl0ZXJhdGlvbnM6IDEsIGl0ZXJhdGlvblN0YXJ0OiBwcm9ncmVzc1RvU2F2ZVByb2dyZXNzKGVhc2luZ0Z1bmMocHJvZ3Jlc3MpKSB9O1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzQW5pbWF0aW9uID0gdGhpcy5hbmltYXRlKGVuZEZyYW1lcywgb3ApO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXNBbmltYXRpb24ucGF1c2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBsYXN0QW5pbWF0aW9uID0gdGhpc0FuaW1hdGlvbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JBbmltYXRpb24oXCJtYWluXCIsIGVuZEZyYW1lcywgb3AsIHRoaXMsIGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzQWJzb3JwdGlvbiA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob3ZlcmxpbWl0ICYmICEocHJvZ3Jlc3MgPD0gbWluQW5pbWF0aW9uUHJvZ3Jlc3MgfHwgcHJvZ3Jlc3MgPj0gbWF4QW5pbWF0aW9uUHJvZ3Jlc3MpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdEluTGltaXRDb3JyZWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm90SW5MaW1pdENvcnJlY3Rpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzQW5pbWF0aW9uID09PSBsYXN0QW5pbWF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmR5VG9TZXRFbmRWYWxzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG8uc21vb3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlc1JkeVRvU2V0RW5kVmFscztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZHlUb1NldEVuZFZhbHMgPSBuZXcgU3luY1Byb20oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNSZHlUb1NldEVuZFZhbHMgPSByZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5TbW9vdGhpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjYW5jZWxBbmltYXRpb25TbW9vdGhpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsU21vb3RoaW5nID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25TbW9vdGhpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhblVwU21vb3RoZW5pbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc21vb3RoUHJvZ3Jlc3MgPSBwcm9ncmVzcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbG9jYWxDb3B5T2ZQcm9ncmVzcyA9IHByb2dyZXNzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbW9vdGgoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBzbW9vdGgoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYW5jZWxBbmltYXRpb25TbW9vdGhpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvblNtb290aGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtb290aFByb2dyZXNzICs9IHNsaWRlICogZnJhbWVEZWx0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGUgPSBzbGlkZSAqIC41O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUbyBiZSBob25lc3QgSSBkb250IGtub3cgd2h5IHRoaXMgY2FudCBiZSBqdXN0IGRvbmUgb25jZSBhdCB0byBzdGFydCBvZiBjbGVhblVwU21vb3RoZW5pbmcgYnV0IHdpcmVkIHRoaW5ncyBoYXBwZW4gaWYgaXQgZG9lc250IGdvIGhlcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBrZXlmcmFtZXMgc2hvdyB0aGUgcHJvYmxlbSB7dHJhbnNsYXRlWDogNTAwfSwge3RyYW5zbGF0ZVk6IDUwMCwgYmFja2dyb3VuZENvbG9yOiBcInJlZFwifSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21vb3RoUHJvZ3Jlc3MgPSBwcm9ncmVzc1RvU2F2ZVByb2dyZXNzKHNtb290aFByb2dyZXNzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVhc2VkU21vb3RoUHJvZ3Jlc3MgPSBlYXNpbmdGdW5jKHNtb290aFByb2dyZXNzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1pbkJvcmRlclJlYWNoZWQgPSBlYXNlZFNtb290aFByb2dyZXNzIDw9IG1pbkFuaW1hdGlvblByb2dyZXNzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWF4Qm9yZGVyUmVhY2hlZCA9IGVhc2VkU21vb3RoUHJvZ3Jlc3MgPj0gbWF4QW5pbWF0aW9uUHJvZ3Jlc3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtaW5Cb3JkZXJSZWFjaGVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWFzZWRTbW9vdGhQcm9ncmVzcyA9IG1pbkFuaW1hdGlvblByb2dyZXNzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChtYXhCb3JkZXJSZWFjaGVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWFzZWRTbW9vdGhQcm9ncmVzcyA9IG1heEFuaW1hdGlvblByb2dyZXNzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFzdEFuaW1hdGlvbiAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdEFuaW1hdGlvbi5jYW5jZWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9wID0geyBkdXJhdGlvbjogMTAwLCBmaWxsOiBcImJvdGhcIiwgZWFzaW5nOiBcImxpbmVhclwiLCBpdGVyYXRpb25zOiAxLCBpdGVyYXRpb25TdGFydDogZWFzZWRTbW9vdGhQcm9ncmVzcyB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdEFuaW1hdGlvbiA9IHRoYXQuYW5pbWF0ZShlbmRGcmFtZXMsIG9wKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RBbmltYXRpb24ucGF1c2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JBbmltYXRpb24oXCJzbW9vdGhcIiwgZW5kRnJhbWVzLCBvcCwgdGhhdCwgZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc0Fic29ycHRpb24gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhzbGlkZSkgPj0gLjAwMDAwMSAmJiAhKG1pbkJvcmRlclJlYWNoZWQgfHwgbWF4Qm9yZGVyUmVhY2hlZCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc21vb3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYW5VcFNtb290aGVuaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gY2xlYW5VcFNtb290aGVuaW5nKGh1cnJ5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNtYWxsZXJQcm9ncmVzcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJpZ2dlclByb2dyZXNzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9jYWxDb3B5T2ZQcm9ncmVzcyA8IHNtb290aFByb2dyZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbGVyUHJvZ3Jlc3MgPSBsb2NhbENvcHlPZlByb2dyZXNzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmlnZ2VyUHJvZ3Jlc3MgPSBzbW9vdGhQcm9ncmVzcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsZXJQcm9ncmVzcyA9IHNtb290aFByb2dyZXNzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmlnZ2VyUHJvZ3Jlc3MgPSBsb2NhbENvcHlPZlByb2dyZXNzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHsgb2Zmc2V0IH0gb2YgZW5kRnJhbWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob2Zmc2V0IDw9IHNtYWxsZXJQcm9ncmVzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZQcm9ncmVzcyA9IG9mZnNldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG9mZnNldCA+PSBiaWdnZXJQcm9ncmVzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRQcm9ncmVzcyA9IG9mZnNldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc0Fic29ycHRpb24gPSBwcm9ncmVzc0Fic29ycHRpb24gKyAoKHNtb290aFByb2dyZXNzIC0gbG9jYWxDb3B5T2ZQcm9ncmVzcykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0UHJvZ3Jlc3NBYnNvcnB0aW9uID0gcHJvZ3Jlc3NBYnNvcnB0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaHVycnkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0UHJvZ3Jlc3MgPSBzbW9vdGhQcm9ncmVzcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSBzbW9vdGhQcm9ncmVzcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5TbW9vdGhpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzUmR5VG9TZXRFbmRWYWxzKGh1cnJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmR5VG9TZXRFbmRWYWxzID0gU3luY1Byb20ucmVzb2x2ZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZHlUb1NldEVuZFZhbHMudGhlbigoaHVycnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWh1cnJ5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50RnJhbWUgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNzID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsS2V5cy5lYSgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RnJhbWVba2V5XSA9IGNzW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRGcmFtZS50cmFuc2Zvcm0gIT09IHVuZGVmaW5lZCAmJiBlbGVtc1dpdGhvdXRDb25zaXRlbnRUcmFuc2Zvcm1Qcm9wcy5pbmNsdWRlcyhlbGVtc1dpdGhvdXRDb25zaXRlbnRUcmFuc2Zvcm1Qcm9wc0tleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtZSA9IHRyYW5zZnJvbVByb3BzLmdldCh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWUubWF0cml4ID0gY3VycmVudEZyYW1lLnRyYW5zZm9ybTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1zV2l0aG91dENvbnNpdGVudFRyYW5zZm9ybVByb3BzLnJtKGVsZW1zV2l0aG91dENvbnNpdGVudFRyYW5zZm9ybVByb3BzS2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0cmFuc2Zvcm0gPSBtZS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHJhbnNmb3JtICE9PSBcIm5vbmVcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RnJhbWUudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGN1cnJlbnRGcmFtZS50cmFuc2Zvcm07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jc3MoY3VycmVudEZyYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNzc0NhbkJlVXNlZFRvRmlsbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdEFuaW1hdGlvbi5jYW5jZWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0QW5pbWF0aW9uID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9ncmVzcyA9PT0gbWluQW5pbWF0aW9uUHJvZ3Jlc3MgfHwgcHJvZ3Jlc3MgPT09IG1heEFuaW1hdGlvblByb2dyZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvLm91dENiICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygby5vdXRDYiA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW28ub3V0Q2JdKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgby5vdXRDYi5jYWxsKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBsZXQgZmlyc3QgPSB0cnVlO1xyXG4gICAgICAgICAgICBndWlkYW5jZS5zdWJzY3JpYmUoKHByb2dyZXNzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmlyc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtc1dpdGhvdXRDb25zaXRlbnRUcmFuc2Zvcm1Qcm9wcy5hZGQoZWxlbXNXaXRob3V0Q29uc2l0ZW50VHJhbnNmb3JtUHJvcHNLZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhYnN1bHV0ZVByb2dyZXNzID0gcHJvZ3Jlc3M7XHJcbiAgICAgICAgICAgICAgICBpZiAobm90SW5MaW1pdENvcnJlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBmdW5jdGlvbiBlcnJvckFuaW1hdGlvbih0aHJlYWQsIHdvcmtpbmdGcmFtZXMsIG9wdGlvbnMsIHRoYXQsIGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlVuZXhwZWN0ZWQgZXJyb3Igd2hpbGUgYW5pbWF0aW5nIChUaHJlYWQ6IFwiICsgdGhyZWFkICsgXCIpIHVzaW5nIHRoZSBmb2xsb3dpbmcgcGFyYW1ldGVyc1xcblxcbkZyYW1lczogXCIsIHdvcmtpbmdGcmFtZXMsIFwiXFxuT3B0aW9uczogXCIsIG9wdGlvbnMsIFwiXFxuXFxuU2V0dGluZyBwcm9ncmVzc0Fic29ycHRpb24gdG8gMCB0byBwcmV2ZW50IGZ1cnRoZXIgZmFpbHVyZXMuXFxudGhpczogXCIsIHRoYXQsIFwiXFxuRXhjZXB0aW9uOiBcXG5cIiwgZXJyb3IpO1xyXG4gICAgfVxyXG4gICAgY2xhc3MgU3luY1Byb20ge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RoZW4gPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5oYXNCZWVuUmVzZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKGNiICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGNiKHRoaXMuX3Jlcy5iaW5kKHRoaXMpLCB0aGlzLl9yZWouYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlcyA9IHRoaXMuX3JlcztcclxuICAgICAgICAgICAgICAgIHRoaXMucmVqID0gdGhpcy5fcmVqO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0YXRpYyByZXNvbHZlKHJlcykge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFN5bmNQcm9tKChyKSA9PiB7IHIocmVzKTsgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0YXRpYyByZWplY3QoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgU3luY1Byb20oKHIsIG4pID0+IHsgbigpOyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgX3Jlcyh2YWwpIHtcclxuICAgICAgICAgICAgbGV0IHRoZW4gPSB0aGlzLl90aGVuO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoZW5baV0odmFsKTtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGVuW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaGFzQmVlblJlc2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5yZXNWYWwgPSB2YWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF9yZWooKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl90aGVuO1xyXG4gICAgICAgICAgICB0aGlzLmhhc0JlZW5SZXNlZCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoZW4odG8pIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaGFzQmVlblJlc2VkKSB7XHJcbiAgICAgICAgICAgICAgICB0byh0aGlzLnJlc1ZhbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5oYXNCZWVuUmVzZWQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3RoZW4uYWRkKHRvKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vSGFyZGNvZGUgdGhlIHNwcmVhZCBvZiBvZmZzZXQgaGVyZSBzaW1pbGlhciB0byBob3cgaXQgaXMgY2FsY3VsYXRlZCBpbnRlcm4sIGluIG9yZGVyIHRvIGxhdGVyIGluamVjdCBzbW9vdGhlbmRlZCBmcmFtZS5cclxuICAgIGZ1bmN0aW9uIHNwcmVhZE9mZnNldChmcmFtZXMpIHtcclxuICAgICAgICBmcmFtZXMuZmlyc3Qub2Zmc2V0ID0gMDtcclxuICAgICAgICBmcmFtZXMubGFzdC5vZmZzZXQgPSAxO1xyXG4gICAgICAgIGlmIChmcmFtZXMubGVuZ3RoID09PSAyKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgbGV0IGxhc3QgPSAxO1xyXG4gICAgICAgIGxldCBsYXN0T2Zmc2V0ID0gLTE7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IGxhc3Q7IGkgPCBmcmFtZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGwgPSBpICsgMTtcclxuICAgICAgICAgICAgbGV0IG8gPSBmcmFtZXNbaV0ub2Zmc2V0O1xyXG4gICAgICAgICAgICBpZiAobyAhPT0gdW5kZWZpbmVkICYmIG8gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGlmIChvID49IGxhc3RPZmZzZXQgJiYgbyA+PSAwICYmIG8gPD0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RPZmZzZXQgPSBvO1xyXG4gICAgICAgICAgICAgICAgICAgIGZyYW1lcy5zbGljZShsYXN0LCBsKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3RhcnQgPSBmcmFtZXNbbGFzdCAtIDFdLm9mZnNldDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZW5kID0gZnJhbWVzW2ldLm9mZnNldDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3BhY2UgPSAoZW5kIC0gc3RhcnQpIC8gKGwgLSBsYXN0KTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgb2Zmc2V0ID0gc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IGxhc3Q7IGogPCBpOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ICs9IHNwYWNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmFtZXNbal0ub2Zmc2V0ID0gb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBsYXN0ID0gbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBcIk9mZnNldHMgbXVzdCBiZSBnaXZlbiBpbiBpbmNyZW1lbnRpbmcgc2VxdWVuY2UsIHNwYW5uaW5nIGJldHdlZW4gMCAtIDFcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHRyYW5zZm9ybSBwcm9wcyBkaXN0aW5ndWlzaFxyXG4gICAgZnVuY3Rpb24gY29udmVydEZyYW1lU3RydWN0dXJlKG9iKSB7XHJcbiAgICAgICAgbGV0IG1heCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIG9iKSB7XHJcbiAgICAgICAgICAgIGxldCB4ID0gb2Jba2V5XS5sZW5ndGg7XHJcbiAgICAgICAgICAgIGlmIChtYXggPCB4KVxyXG4gICAgICAgICAgICAgICAgbWF4ID0geDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG8gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1heDsgaSsrKSB7XHJcbiAgICAgICAgICAgIG9baV0gPSB7fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIG9iKSB7XHJcbiAgICAgICAgICAgIG9iW2tleV0uZm9yRWFjaCgodmFsLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvW2ldW2tleV0gPSB2YWw7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbztcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNldHVwQmFja2dyb3VuZFRhc2sodGFzaywgY29uc3RyYWludCA9IHsgdGltZTogMTYsIHRpbWVvdXQ6IDE2IH0pIHtcclxuICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICBpZiAoY29uc3RyYWludC50aW1lb3V0ID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIGNvbnN0cmFpbnQudGltZW91dCA9IDE2O1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3RRdWV1ZSA9IFtdO1xyXG4gICAgICAgIGxldCBpbXBvcnRhbmNlU3RydWN0dXJlSGFzQ2hhbmdlZCA9IGZhbHNlO1xyXG4gICAgICAgIGxldCByZWN1cnNpb25PbmdvaW5nID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IHN0YXJ0O1xyXG4gICAgICAgIGxldCBpdGVyYXRpb25zQXNDb25zdHJhaW50ID0gXCJpdGVyYXRpb25zXCIgaW4gY29uc3RyYWludDtcclxuICAgICAgICBsZXQgaW5pdFJlY3Vyc2lvbiA9IGl0ZXJhdGlvbnNBc0NvbnN0cmFpbnQgPyAoKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXJ0ID0gMDtcclxuICAgICAgICB9IDogKCkgPT4ge1xyXG4gICAgICAgICAgICBzdGFydCA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBsZXQgY29tcGFpckNvbnN0cmFpbnQgPSBpdGVyYXRpb25zQXNDb25zdHJhaW50ID8gKCkgPT4ge1xyXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgc3RhcnQrKztcclxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgIHJldHVybiBzdGFydCA+IGNvbnN0cmFpbnQuaXRlcmF0aW9ucztcclxuICAgICAgICB9IDogKCkgPT4ge1xyXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCkgLSBzdGFydCA+IGNvbnN0cmFpbnQudGltZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZ1bmN0aW9uIGNoYW5nZUltcG9ydGFuY2VTdHJ1Y3R1cmUoKSB7XHJcbiAgICAgICAgICAgIGltcG9ydGFuY2VTdHJ1Y3R1cmVIYXNDaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGV4ZWN1dGUocGFyYW1zLCBpbXBvcnRhbmNlID0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGltcG9ydGFuY2UgaW5zdGFuY2VvZiBEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdFF1ZXVlLmFkZCh7IGltcG9ydGFuY2UsIHBhcmFtcywgcmVzIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGltcG9ydGFuY2Uuc3Vic2NyaWJlKGNoYW5nZUltcG9ydGFuY2VTdHJ1Y3R1cmUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RRdWV1ZS5hZGQoeyBpbXBvcnRhbmNlOiB7IHZhbDogaW1wb3J0YW5jZSB9LCBwYXJhbXMsIHJlcyB9KTtcclxuICAgICAgICAgICAgICAgIGlmICghcmVjdXJzaW9uT25nb2luZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlY3Vyc2lvbk9uZ29pbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0UmVjdXJzaW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZWx5Q2FsbEVsZW1zKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gcmVjdXJzaXZlbHlDYWxsRWxlbXMoKSB7XHJcbiAgICAgICAgICAgIGlmIChpbXBvcnRhbmNlU3RydWN0dXJlSGFzQ2hhbmdlZCkge1xyXG4gICAgICAgICAgICAgICAgc29ydFJlcXVlc3RRdWV1ZSgpO1xyXG4gICAgICAgICAgICAgICAgaW1wb3J0YW5jZVN0cnVjdHVyZUhhc0NoYW5nZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXJlcXVlc3RRdWV1ZS5lbXB0eSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGVsZW0gPSByZXF1ZXN0UXVldWUuZmlyc3Q7XHJcbiAgICAgICAgICAgICAgICBlbGVtLnJlcyh0YXNrKC4uLmVsZW0ucGFyYW1zKSk7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0UXVldWUucm1JKDApO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbXBhaXJDb25zdHJhaW50KCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdFJlY3Vyc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWN1cnNpdmVseUNhbGxFbGVtcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIGNvbnN0cmFpbnQudGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgcmVjdXJzaXZlbHlDYWxsRWxlbXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlY3Vyc2lvbk9uZ29pbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBzb3J0UmVxdWVzdFF1ZXVlKCkge1xyXG4gICAgICAgICAgICByZXF1ZXN0UXVldWUuc29ydCgoeyBpbXBvcnRhbmNlOiBhIH0sIHsgaW1wb3J0YW5jZTogYiB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYS52YWwgLSBiLnZhbDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcHJvZ3Jlc3NUb1NhdmVQcm9ncmVzcyhwcm9ncmVzcykge1xyXG4gICAgICAgIGlmIChwcm9ncmVzcyA8IG1pbkFuaW1hdGlvblByb2dyZXNzKVxyXG4gICAgICAgICAgICBwcm9ncmVzcyA9IG1pbkFuaW1hdGlvblByb2dyZXNzO1xyXG4gICAgICAgIGVsc2UgaWYgKHByb2dyZXNzID4gbWF4QW5pbWF0aW9uUHJvZ3Jlc3MpXHJcbiAgICAgICAgICAgIHByb2dyZXNzID0gbWF4QW5pbWF0aW9uUHJvZ3Jlc3M7XHJcbiAgICAgICAgcmV0dXJuIHByb2dyZXNzO1xyXG4gICAgfVxyXG4gICAgbGV0IGdldFN0eWxlQXRQcm9ncmVzcyA9ICgoKSA9PiB7XHJcbiAgICAgICAgLy8gVE9ETzogbWF5YmUgZG9udCBtYWtlIHdyYXBwZXIsIGJ1dCB1c2UgY3VycmVudCBlbGVtZW50IHRvIGRldGVybWluIHN0eWxlIFxyXG4gICAgICAgIC8vICh0aGUgaWRlYSBpcyB0aGF0IHdoZW4gdGhlIGFuaW1hdGlvbiBpcyBjYW5jZWxlZCBpbWVkaWF0bHkgaXQgc2hvdWxkbnQgXHJcbiAgICAgICAgLy8gaGF2ZSBhbnkgaW1wYWN0IG9uIGRyYXduIGZyYW1lcylcclxuICAgICAgICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJnZXQtc3R5bGUtYXQtcHJvZ3Jlc3MtZWxlbWVudC13cmFwcGVyXCIpO1xyXG4gICAgICAgIHdyYXBwZXIuY3NzKHsgZGlzcGxheTogXCJibG9ja1wiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDB2aFwiLCB0cmFuc2xhdGVZOiBcIi05OTk5OTk5OTl2aFwiIH0pO1xyXG4gICAgICAgIGxldCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImdldC1zdHlsZS1hdC1wcm9ncmVzcy1lbGVtZW50XCIpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBkKHdyYXBwZXIuYXBkKGVsZW0pKTtcclxuICAgICAgICByZXR1cm4gc2V0dXBCYWNrZ3JvdW5kVGFzayhnZXRTdHlsZUF0UHJvZ3Jlc3MpO1xyXG4gICAgICAgIGZ1bmN0aW9uIGdldFN0eWxlQXRQcm9ncmVzcyhmcmFtZXMsIGludHJlc3QpIHtcclxuICAgICAgICAgICAgbGV0IHsga2V5cyB9ID0gaW50cmVzdDtcclxuICAgICAgICAgICAgbGV0IHRyYW5zZm9ybUtleXMgPSBbXTtcclxuICAgICAgICAgICAga2V5cy5lYSgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKFRyYW5zZm9ybVByb3AuYXBwbGllcyhlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybUtleXMuYWRkKGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAga2V5cy5ybVYoLi4udHJhbnNmb3JtS2V5cyk7XHJcbiAgICAgICAgICAgIGZyYW1lcy5lYSgoZnJhbWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGZvcm1hdENzcyhmcmFtZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBsZXQgYW5pbWF0aW9uID0gZWxlbS5hbmltYXRlKGZyYW1lcywge1xyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMCxcclxuICAgICAgICAgICAgICAgIGZpbGw6IFwiYm90aFwiLFxyXG4gICAgICAgICAgICAgICAgZWFzaW5nOiBcImxpbmVhclwiLFxyXG4gICAgICAgICAgICAgICAgaXRlcmF0aW9uczogMSxcclxuICAgICAgICAgICAgICAgIGl0ZXJhdGlvblN0YXJ0OiBwcm9ncmVzc1RvU2F2ZVByb2dyZXNzKGludHJlc3QuYXQpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBsZXQgcmVzID0ge307XHJcbiAgICAgICAgICAgIGxldCBjcyA9IGdldENvbXB1dGVkU3R5bGUoZWxlbSk7XHJcbiAgICAgICAgICAgIGlmICghdHJhbnNmb3JtS2V5cy5lbXB0eSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHQgPSBuZXcgVHJhbnNmb3JtUHJvcCgpO1xyXG4gICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICB0Lm1hdHJpeCA9IGNzLnRyYW5zZm9ybTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybUtleXMuZWEoKGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc1trZXldID0gdC5wcmltaXRpdmVzW2tleV07XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBrIG9mIGtleXMpIHtcclxuICAgICAgICAgICAgICAgIHJlc1trXSA9IGNzW2tdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi5jYW5jZWwoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICB9XHJcbiAgICB9KSgpO1xyXG59XHJcbi8vZW1wdHkgbm9kZXMgc2VsZWN0b3JcclxuLy9leHRlbmQgTm9kZUxzIGFwaSB3aXRoIG5hdGl2ZSBIVE1MRWxlbWVudCBmdW5jdGlvbnMgbGlrZSByZW1vdmUoKVxyXG5leHBvcnQgY2xhc3MgTm9kZUxzIGV4dGVuZHMgQXJyYXkge1xyXG4gICAgY29uc3RydWN0b3IoLi4uYSkge1xyXG4gICAgICAgIHN1cGVyKC4uLmEpO1xyXG4gICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVE9ETzogY2hhbmdlIGZvciBzdGFnZ2VyIChkZWxheSBiZXR3ZWVuIGVsZW1lbnRzIGdldCBhbmltYXRlZCksIHdoZW4gdW5kZWZpbmVkIGFsbCBhdCBvbmNlXHJcbiAgICBhc3luYyBhbmltKGZyYW1lX2ZyYW1lcywgb3B0aW9ucyA9IHt9LCBndWlkZWQgPSBmYWxzZSwgb25lQWZ0ZXJUaGVPdGhlciA9IGZhbHNlKSB7XHJcbiAgICAgICAgdGhpcy53YXJuKFwiYW5pbVwiKTtcclxuICAgICAgICBpZiAob25lQWZ0ZXJUaGVPdGhlcikge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBlIG9mIHRoaXMpIHtcclxuICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgYXdhaXQgZS5hbmltKGZyYW1lX2ZyYW1lcywgb3B0aW9ucywgZ3VpZGVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGxzID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGUgb2YgdGhpcykge1xyXG4gICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICBscy5hZGQoZS5hbmltKGZyYW1lX2ZyYW1lcywgb3B0aW9ucywgZ3VpZGVkKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwobHMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uKGV2ZW50LCBjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuZXhlYyhcIm9uXCIsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBzaG93KCkge1xyXG4gICAgICAgIHRoaXMuZXhlYyhcInNob3dcIiwgYXJndW1lbnRzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge1xyXG4gICAgICAgIHRoaXMuZXhlYyhcInJlbW92ZUNsYXNzXCIsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBhcGQoLi4uZWxlbXMpIHtcclxuICAgICAgICB0aGlzLmV4ZWMoXCJhcGRcIiwgYXJndW1lbnRzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGVtcHR5Tm9kZXMoKSB7XHJcbiAgICAgICAgdGhpcy5leGVjKFwiZW1wdHlcIiwgYXJndW1lbnRzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGhpZGUoKSB7XHJcbiAgICAgICAgdGhpcy5leGVjKFwiaGlkZVwiLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgY3NzKGtleV9jc3MsIHZhbCkge1xyXG4gICAgICAgIHRoaXMuZXhlYyhcImNzc1wiLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgY2hpbGRzKHNlbGVjdG9yID0gMSkge1xyXG4gICAgICAgIGxldCBscyA9IG5ldyBOb2RlTHMoKTtcclxuICAgICAgICB0aGlzLmVhKChlKSA9PiB7XHJcbiAgICAgICAgICAgIGxzLmFkZCguLi5lLmNoaWxkcyhzZWxlY3RvcikpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBscztcclxuICAgIH1cclxuICAgIGFkZENsYXNzKC4uLmNsYXNzTmFtZXMpIHtcclxuICAgICAgICB0aGlzLmV4ZWMoXCJhZGRDbGFzc1wiLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgaGFzQ2xhc3MoLi4uY2xhc3NOYW1lcykge1xyXG4gICAgICAgIGxldCBoYXMgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZWEoKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFlLmhhc0NsYXNzKC4uLmNsYXNzTmFtZXMpKVxyXG4gICAgICAgICAgICAgICAgaGFzID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGhhcztcclxuICAgIH1cclxuICAgIHRvZ2dsZUNsYXNzKC4uLmNsYXNzTmFtZXMpIHtcclxuICAgICAgICB0aGlzLmV4ZWMoXCJ0b2dnbGVDbGFzc1wiLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgb2ZmKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5leGVjKFwib2ZmXCIsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBzZXQgaHRtbCh0bykge1xyXG4gICAgICAgIHRoaXMuZWEoKGUpID0+IHtcclxuICAgICAgICAgICAgZS5odG1sID0gdG87XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBnZXQgaHRtbCgpIHtcclxuICAgICAgICBsZXQgcyA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5lYSgoZSkgPT4ge1xyXG4gICAgICAgICAgICBzICs9IGUuaHRtbDtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcztcclxuICAgIH1cclxuICAgIHNldCBpbm5lcih0bykge1xyXG4gICAgICAgIHRoaXMuZWEoKGUpID0+IHtcclxuICAgICAgICAgICAgZS5pbm5lciA9IHRvO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgd2FybihjbWQpIHtcclxuICAgICAgICBpZiAodGhpcy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlRyeWluZyB0byBleGVjdXRlIGNvbW1hbmQgXFxcIlwiICsgY21kICsgXCJcXFwiIG9uIGVtcHR5IE5vZGVMcy5cIik7XHJcbiAgICB9XHJcbiAgICBleGVjKGZ1bmN0aW9uTmFtZSwgYXJncykge1xyXG4gICAgICAgIHRoaXMud2FybihmdW5jdGlvbk5hbWUpO1xyXG4gICAgICAgIHRoaXMuZWEoKGUpID0+IHtcclxuICAgICAgICAgICAgZVtmdW5jdGlvbk5hbWVdKC4uLmFyZ3MpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBUZWwge1xyXG4gICAgY29uc3RydWN0b3Iobm9kZXMsIGV2ZW50LCBsaXN0ZW5lciwgZW5hYmxlID0gdHJ1ZSkge1xyXG4gICAgICAgIHRoaXMuX2VuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnAgPSBuZXcgTmVsKHVuZGVmaW5lZCwgZXZlbnQsIGxpc3RlbmVyKTtcclxuICAgICAgICBpZiAobm9kZXMgaW5zdGFuY2VvZiBBcnJheSlcclxuICAgICAgICAgICAgdGhpcy5wLm5vZGVzID0gbmV3IE5vZGVMcyguLi5ub2Rlcyk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLnAubm9kZXMgPSBuZXcgTm9kZUxzKG5vZGVzKTtcclxuICAgICAgICBpZiAoZW5hYmxlKVxyXG4gICAgICAgICAgICB0aGlzLmVuYWJsZSgpO1xyXG4gICAgfVxyXG4gICAgZ2V0IG5vZGVzKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgTm9kZUxzKC4uLnRoaXMucC5ub2Rlcyk7XHJcbiAgICB9XHJcbiAgICBnZXQgZXZlbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucC5ldmVudDtcclxuICAgIH1cclxuICAgIGdldCBsaXN0ZW5lcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wLmxpc3RlbmVyO1xyXG4gICAgfVxyXG4gICAgc2V0Tm9kZSguLi5ub2RlKSB7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlKCk7XHJcbiAgICAgICAgdGhpcy5wLm5vZGVzID0gbmV3IE5vZGVMcyguLi5ub2RlKTtcclxuICAgICAgICB0aGlzLmVuYWJsZSgpO1xyXG4gICAgfVxyXG4gICAgc2V0IGV2ZW50KGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlKCk7XHJcbiAgICAgICAgdGhpcy5wLmV2ZW50ID0gZXZlbnQ7XHJcbiAgICAgICAgdGhpcy5lbmFibGUoKTtcclxuICAgIH1cclxuICAgIHNldCBsaXN0ZW5lcihsaXN0ZW5lcikge1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZSgpO1xyXG4gICAgICAgIHRoaXMucC5saXN0ZW5lciA9IGxpc3RlbmVyO1xyXG4gICAgICAgIHRoaXMuZW5hYmxlKCk7XHJcbiAgICB9XHJcbiAgICBzZXQgZW5hYmxlZCh0bykge1xyXG4gICAgICAgIGlmICh0bykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fZW5hYmxlZClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgdGhpcy5wLm5vZGVzLm9uKHRoaXMuZXZlbnQsIHRoaXMubGlzdGVuZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9lbmFibGVkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB0aGlzLnAubm9kZXMub2ZmKHRoaXMuZXZlbnQsIHRoaXMubGlzdGVuZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9lbmFibGVkID0gdG87XHJcbiAgICB9XHJcbiAgICBnZXQgZW5hYmxlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZW5hYmxlZDtcclxuICAgIH1cclxuICAgIGVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgZGlzYWJsZSgpIHtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHJlcGF0Y2goKSB7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlKCk7XHJcbiAgICAgICAgdGhpcy5lbmFibGUoKTtcclxuICAgIH1cclxufVxyXG5jbGFzcyBOZWwge1xyXG4gICAgY29uc3RydWN0b3Iobm9kZXMsIGV2ZW50LCBsaXN0ZW5lcikge1xyXG4gICAgICAgIHRoaXMubm9kZXMgPSBub2RlcztcclxuICAgICAgICB0aGlzLmV2ZW50ID0gZXZlbnQ7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5lciA9IGxpc3RlbmVyO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGNsb25lRGF0YShhKSB7XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShhKSk7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEVhc2luZyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih4MV9rZXl3b3JkLCB5MSwgeDIsIHkyKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB4MV9rZXl3b3JkICE9PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMua2V5d29yZCA9IHgxX2tleXdvcmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLngxID0geDFfa2V5d29yZDtcclxuICAgICAgICAgICAgdGhpcy55MSA9IHkxO1xyXG4gICAgICAgICAgICB0aGlzLngyID0geDI7XHJcbiAgICAgICAgICAgIHRoaXMueTIgPSB5MjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQgc3RyaW5nKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmtleXdvcmQgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuIFwiY3ViaWMtYmV6aWVyKFwiICsgdGhpcy54MSArIFwiLFwiICsgdGhpcy55MSArIFwiLFwiICsgdGhpcy54MiArIFwiLFwiICsgdGhpcy55MiArIFwiKVwiO1xyXG4gICAgICAgIHJldHVybiBjYW1lbENhc2VUb0Rhc2godGhpcy5rZXl3b3JkKTtcclxuICAgIH1cclxuICAgIGdldCBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAodGhpcy5rZXl3b3JkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbGV0IGYgPSBFYXNpbmcua2V5d29yZHNbZGFzaFRvQ2FtZWxDYXNlKHRoaXMua2V5d29yZCldO1xyXG4gICAgICAgICAgICB0aGlzLngxID0gZlswXTtcclxuICAgICAgICAgICAgdGhpcy55MSA9IGZbMV07XHJcbiAgICAgICAgICAgIHRoaXMueDIgPSBmWzJdO1xyXG4gICAgICAgICAgICB0aGlzLnkyID0gZlszXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJheih0aGlzLngxLCB0aGlzLnkxLCB0aGlzLngyLCB0aGlzLnkyKTtcclxuICAgIH1cclxufVxyXG5FYXNpbmcua2V5d29yZHMgPSB7XHJcbiAgICBsaW5lYXI6IFsuMjUsIC4yNSwgLjc1LCAuNzVdLFxyXG4gICAgZWFzZTogWy4yNSwgLjEsIC4yNSwgMV0sXHJcbiAgICBlYXNlSW46IFsuNDIsIDAsIDEsIDFdLFxyXG4gICAgZWFzZU91dDogWzAsIDAsIC41OCwgMV0sXHJcbiAgICBlYXNlSW5PdXQ6IFsuNDIsIDAsIC41OCwgMV1cclxufTtcclxuIiwiLyoqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmdcbiAqIEJlemllckVhc2luZyAtIHVzZSBiZXppZXIgY3VydmUgZm9yIHRyYW5zaXRpb24gZWFzaW5nIGZ1bmN0aW9uXG4gKiBieSBHYcOrdGFuIFJlbmF1ZGVhdSAyMDE0IC0gMjAxNSDigJMgTUlUIExpY2Vuc2VcbiAqL1xuXG4vLyBUaGVzZSB2YWx1ZXMgYXJlIGVzdGFibGlzaGVkIGJ5IGVtcGlyaWNpc20gd2l0aCB0ZXN0cyAodHJhZGVvZmY6IHBlcmZvcm1hbmNlIFZTIHByZWNpc2lvbilcbnZhciBORVdUT05fSVRFUkFUSU9OUyA9IDQ7XG52YXIgTkVXVE9OX01JTl9TTE9QRSA9IDAuMDAxO1xudmFyIFNVQkRJVklTSU9OX1BSRUNJU0lPTiA9IDAuMDAwMDAwMTtcbnZhciBTVUJESVZJU0lPTl9NQVhfSVRFUkFUSU9OUyA9IDEwO1xuXG52YXIga1NwbGluZVRhYmxlU2l6ZSA9IDExO1xudmFyIGtTYW1wbGVTdGVwU2l6ZSA9IDEuMCAvIChrU3BsaW5lVGFibGVTaXplIC0gMS4wKTtcblxudmFyIGZsb2F0MzJBcnJheVN1cHBvcnRlZCA9IHR5cGVvZiBGbG9hdDMyQXJyYXkgPT09ICdmdW5jdGlvbic7XG5cbmZ1bmN0aW9uIEEgKGFBMSwgYUEyKSB7IHJldHVybiAxLjAgLSAzLjAgKiBhQTIgKyAzLjAgKiBhQTE7IH1cbmZ1bmN0aW9uIEIgKGFBMSwgYUEyKSB7IHJldHVybiAzLjAgKiBhQTIgLSA2LjAgKiBhQTE7IH1cbmZ1bmN0aW9uIEMgKGFBMSkgICAgICB7IHJldHVybiAzLjAgKiBhQTE7IH1cblxuLy8gUmV0dXJucyB4KHQpIGdpdmVuIHQsIHgxLCBhbmQgeDIsIG9yIHkodCkgZ2l2ZW4gdCwgeTEsIGFuZCB5Mi5cbmZ1bmN0aW9uIGNhbGNCZXppZXIgKGFULCBhQTEsIGFBMikgeyByZXR1cm4gKChBKGFBMSwgYUEyKSAqIGFUICsgQihhQTEsIGFBMikpICogYVQgKyBDKGFBMSkpICogYVQ7IH1cblxuLy8gUmV0dXJucyBkeC9kdCBnaXZlbiB0LCB4MSwgYW5kIHgyLCBvciBkeS9kdCBnaXZlbiB0LCB5MSwgYW5kIHkyLlxuZnVuY3Rpb24gZ2V0U2xvcGUgKGFULCBhQTEsIGFBMikgeyByZXR1cm4gMy4wICogQShhQTEsIGFBMikgKiBhVCAqIGFUICsgMi4wICogQihhQTEsIGFBMikgKiBhVCArIEMoYUExKTsgfVxuXG5mdW5jdGlvbiBiaW5hcnlTdWJkaXZpZGUgKGFYLCBhQSwgYUIsIG1YMSwgbVgyKSB7XG4gIHZhciBjdXJyZW50WCwgY3VycmVudFQsIGkgPSAwO1xuICBkbyB7XG4gICAgY3VycmVudFQgPSBhQSArIChhQiAtIGFBKSAvIDIuMDtcbiAgICBjdXJyZW50WCA9IGNhbGNCZXppZXIoY3VycmVudFQsIG1YMSwgbVgyKSAtIGFYO1xuICAgIGlmIChjdXJyZW50WCA+IDAuMCkge1xuICAgICAgYUIgPSBjdXJyZW50VDtcbiAgICB9IGVsc2Uge1xuICAgICAgYUEgPSBjdXJyZW50VDtcbiAgICB9XG4gIH0gd2hpbGUgKE1hdGguYWJzKGN1cnJlbnRYKSA+IFNVQkRJVklTSU9OX1BSRUNJU0lPTiAmJiArK2kgPCBTVUJESVZJU0lPTl9NQVhfSVRFUkFUSU9OUyk7XG4gIHJldHVybiBjdXJyZW50VDtcbn1cblxuZnVuY3Rpb24gbmV3dG9uUmFwaHNvbkl0ZXJhdGUgKGFYLCBhR3Vlc3NULCBtWDEsIG1YMikge1xuIGZvciAodmFyIGkgPSAwOyBpIDwgTkVXVE9OX0lURVJBVElPTlM7ICsraSkge1xuICAgdmFyIGN1cnJlbnRTbG9wZSA9IGdldFNsb3BlKGFHdWVzc1QsIG1YMSwgbVgyKTtcbiAgIGlmIChjdXJyZW50U2xvcGUgPT09IDAuMCkge1xuICAgICByZXR1cm4gYUd1ZXNzVDtcbiAgIH1cbiAgIHZhciBjdXJyZW50WCA9IGNhbGNCZXppZXIoYUd1ZXNzVCwgbVgxLCBtWDIpIC0gYVg7XG4gICBhR3Vlc3NUIC09IGN1cnJlbnRYIC8gY3VycmVudFNsb3BlO1xuIH1cbiByZXR1cm4gYUd1ZXNzVDtcbn1cblxuZnVuY3Rpb24gTGluZWFyRWFzaW5nICh4KSB7XG4gIHJldHVybiB4O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJlemllciAobVgxLCBtWTEsIG1YMiwgbVkyKSB7XG4gIGlmICghKDAgPD0gbVgxICYmIG1YMSA8PSAxICYmIDAgPD0gbVgyICYmIG1YMiA8PSAxKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignYmV6aWVyIHggdmFsdWVzIG11c3QgYmUgaW4gWzAsIDFdIHJhbmdlJyk7XG4gIH1cblxuICBpZiAobVgxID09PSBtWTEgJiYgbVgyID09PSBtWTIpIHtcbiAgICByZXR1cm4gTGluZWFyRWFzaW5nO1xuICB9XG5cbiAgLy8gUHJlY29tcHV0ZSBzYW1wbGVzIHRhYmxlXG4gIHZhciBzYW1wbGVWYWx1ZXMgPSBmbG9hdDMyQXJyYXlTdXBwb3J0ZWQgPyBuZXcgRmxvYXQzMkFycmF5KGtTcGxpbmVUYWJsZVNpemUpIDogbmV3IEFycmF5KGtTcGxpbmVUYWJsZVNpemUpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtTcGxpbmVUYWJsZVNpemU7ICsraSkge1xuICAgIHNhbXBsZVZhbHVlc1tpXSA9IGNhbGNCZXppZXIoaSAqIGtTYW1wbGVTdGVwU2l6ZSwgbVgxLCBtWDIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0VEZvclggKGFYKSB7XG4gICAgdmFyIGludGVydmFsU3RhcnQgPSAwLjA7XG4gICAgdmFyIGN1cnJlbnRTYW1wbGUgPSAxO1xuICAgIHZhciBsYXN0U2FtcGxlID0ga1NwbGluZVRhYmxlU2l6ZSAtIDE7XG5cbiAgICBmb3IgKDsgY3VycmVudFNhbXBsZSAhPT0gbGFzdFNhbXBsZSAmJiBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0gPD0gYVg7ICsrY3VycmVudFNhbXBsZSkge1xuICAgICAgaW50ZXJ2YWxTdGFydCArPSBrU2FtcGxlU3RlcFNpemU7XG4gICAgfVxuICAgIC0tY3VycmVudFNhbXBsZTtcblxuICAgIC8vIEludGVycG9sYXRlIHRvIHByb3ZpZGUgYW4gaW5pdGlhbCBndWVzcyBmb3IgdFxuICAgIHZhciBkaXN0ID0gKGFYIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKSAvIChzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZSArIDFdIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKTtcbiAgICB2YXIgZ3Vlc3NGb3JUID0gaW50ZXJ2YWxTdGFydCArIGRpc3QgKiBrU2FtcGxlU3RlcFNpemU7XG5cbiAgICB2YXIgaW5pdGlhbFNsb3BlID0gZ2V0U2xvcGUoZ3Vlc3NGb3JULCBtWDEsIG1YMik7XG4gICAgaWYgKGluaXRpYWxTbG9wZSA+PSBORVdUT05fTUlOX1NMT1BFKSB7XG4gICAgICByZXR1cm4gbmV3dG9uUmFwaHNvbkl0ZXJhdGUoYVgsIGd1ZXNzRm9yVCwgbVgxLCBtWDIpO1xuICAgIH0gZWxzZSBpZiAoaW5pdGlhbFNsb3BlID09PSAwLjApIHtcbiAgICAgIHJldHVybiBndWVzc0ZvclQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBiaW5hcnlTdWJkaXZpZGUoYVgsIGludGVydmFsU3RhcnQsIGludGVydmFsU3RhcnQgKyBrU2FtcGxlU3RlcFNpemUsIG1YMSwgbVgyKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gQmV6aWVyRWFzaW5nICh4KSB7XG4gICAgLy8gQmVjYXVzZSBKYXZhU2NyaXB0IG51bWJlciBhcmUgaW1wcmVjaXNlLCB3ZSBzaG91bGQgZ3VhcmFudGVlIHRoZSBleHRyZW1lcyBhcmUgcmlnaHQuXG4gICAgaWYgKHggPT09IDApIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBpZiAoeCA9PT0gMSkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIHJldHVybiBjYWxjQmV6aWVyKGdldFRGb3JYKHgpLCBtWTEsIG1ZMik7XG4gIH07XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZnVuY3Rpb24gY2FtZWxDYXNlVG9EYXNoKGNhbWVsQ2FzZVN0cmluZywgam9pbldpdGggPSBcIi1cIikge1xyXG4gICAgcmV0dXJuIGNhbWVsQ2FzZVN0cmluZy5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLCBcIiQxXCIgKyBqb2luV2l0aCArIFwiJDJcIikudG9Mb3dlckNhc2UoKTtcclxufVxyXG5leHBvcnRzLmNhbWVsQ2FzZVRvRGFzaCA9IGNhbWVsQ2FzZVRvRGFzaDtcclxuZnVuY3Rpb24gdG9VcHBlcihtYXRjaCwgZ3JvdXAxKSB7XHJcbiAgICByZXR1cm4gZ3JvdXAxID8gZ3JvdXAxLnRvVXBwZXJDYXNlKCkgOiAnJztcclxufVxyXG52YXIgREVGQVVMVF9SRUdFWCA9IC9bLV9dKyguKT8vZztcclxuZnVuY3Rpb24gZGFzaFRvQ2FtZWxDYXNlKGRhc2hTdHJpbmcsIHNwbGl0QXQpIHtcclxuICAgIHJldHVybiBkYXNoU3RyaW5nLnJlcGxhY2Uoc3BsaXRBdCA/IG5ldyBSZWdFeHAoJ1snICsgc3BsaXRBdCArICddKyguKScsICdnJykgOiBERUZBVUxUX1JFR0VYLCB0b1VwcGVyKTtcclxufVxyXG5leHBvcnRzLmRhc2hUb0NhbWVsQ2FzZSA9IGRhc2hUb0NhbWVsQ2FzZTtcclxuIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZGVjb21wb3NlRE9NTWF0cml4XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImRlY29tcG9zZURPTU1hdHJpeFwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbi8qKioqKiovIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4vKioqKioqLyBcdFx0cmV0dXJuIG5zO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZGVjb21wb3NlRG9tbWF0cml4Lm1qc1wiKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKHtcblxuLyoqKi8gXCIuL2RlY29tcG9zZURvbW1hdHJpeC5tanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vZGVjb21wb3NlRG9tbWF0cml4Lm1qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogZGVmYXVsdCAqL1xuLyoqKi8gKGZ1bmN0aW9uKF9fd2VicGFja19tb2R1bGVfXywgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbmV2YWwoXCJfX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XFxuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcXFwiZGVmYXVsdFxcXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gZGVjb21wb3NlRE9NTWF0cml4OyB9KTtcXG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2RlY29tcG9zZU1hdHJpeF9tanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vZGVjb21wb3NlTWF0cml4Lm1qcyAqLyBcXFwiLi9kZWNvbXBvc2VNYXRyaXgubWpzXFxcIik7XFxuLypcXG5cXG5ET01NYXRyaXggaXMgY29sdW1uIG1ham9yLCBtZWFuaW5nOlxcbiBfICAgICAgICAgICAgICAgX1xcbnwgbTExIG0yMSBtMzEgbTQxIHwgIFxcbiAgbTEyIG0yMiBtMzIgbTQyXFxuICBtMTMgbTIzIG0zMyBtNDNcXG4gIG0xNCBtMjQgbTM0IG00NFxcbnxfICAgICAgICAgICAgICAgX3xcXG5cXG4qL1xcblxcblxcblxcbmZ1bmN0aW9uIGRlY29tcG9zZURPTU1hdHJpeChkb21NYXRyaXgpIHtcXG5cXHRjb25zdCBpbmRleGFibGVWZXJzaW9uT2ZNYXRyaXggPSBuZXcgQXJyYXkoNCk7XFxuXFx0Zm9yIChsZXQgY29sdW1uSW5kZXggPSAxOyBjb2x1bW5JbmRleCA8IDU7IGNvbHVtbkluZGV4KyspIHtcXG5cXHRcXHRjb25zdCBjb2x1bW5BcnJheSA9IGluZGV4YWJsZVZlcnNpb25PZk1hdHJpeFtjb2x1bW5JbmRleCAtIDFdID0gbmV3IEFycmF5KDQpO1xcblxcdFxcdGZvciAobGV0IHJvd0luZGV4ID0gMTsgcm93SW5kZXggPCA1OyByb3dJbmRleCsrKSB7XFxuXFx0XFx0XFx0Y29sdW1uQXJyYXlbcm93SW5kZXggLSAxXSA9IGRvbU1hdHJpeFtgbSR7Y29sdW1uSW5kZXh9JHtyb3dJbmRleH1gXTtcXG5cXHRcXHR9XFxuXFx0fVxcblxcblxcdHJldHVybiBPYmplY3QoX2RlY29tcG9zZU1hdHJpeF9tanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcXFwiZGVmYXVsdFxcXCJdKShpbmRleGFibGVWZXJzaW9uT2ZNYXRyaXgpO1xcbn1cXG5cXG4vLyMgc291cmNlVVJMPXdlYnBhY2s6Ly9kZWNvbXBvc2VET01NYXRyaXgvLi9kZWNvbXBvc2VEb21tYXRyaXgubWpzP1wiKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9kZWNvbXBvc2VNYXRyaXgubWpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL2RlY29tcG9zZU1hdHJpeC5tanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihfX3dlYnBhY2tfbW9kdWxlX18sIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5ldmFsKFwiX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXFxcImRlZmF1bHRcXFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIGRlY29tcG9zZU1hdHJpeDsgfSk7XFxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF92ZWN0b3JGdW5jdGlvbnNfbWpzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3ZlY3RvckZ1bmN0aW9ucy5tanMgKi8gXFxcIi4vdmVjdG9yRnVuY3Rpb25zLm1qc1xcXCIpO1xcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfcm91bmRUb1RocmVlUGxhY2VzX21qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9yb3VuZFRvVGhyZWVQbGFjZXMubWpzICovIFxcXCIuL3JvdW5kVG9UaHJlZVBsYWNlcy5tanNcXFwiKTtcXG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3F1YXRlcm5pb25Ub0RlZ3JlZXNYWVpfbWpzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3F1YXRlcm5pb25Ub0RlZ3JlZXNYWVoubWpzICovIFxcXCIuL3F1YXRlcm5pb25Ub0RlZ3JlZXNYWVoubWpzXFxcIik7XFxuLypcXG5cXG50aGlzIGNvZGUgaXMgY29waWVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0LW5hdGl2ZS9ibG9iL21hc3Rlci9MaWJyYXJpZXMvVXRpbGl0aWVzL01hdHJpeE1hdGguanMjTDU3MiBhbmQgbW9kaWZpZWRcXG5mb3Igc29tZSBjbGFyaXR5IGFuZCBiZWluZyBhYmxlIHRvIHdvcmsgc3RhbmRhbG9uZS4gRXhwZWN0cyB0aGUgbWF0cml4IHRvIGJlIGEgNC1lbGVtZW50IGFycmF5IG9mIDQtZWxlbWVudCBhcnJheXMgb2YgbnVtYmVycy5cXG5cXG5bXFxuICAgIFtjb2x1bW4xIHJvdzEgdmFsdWUsIGNvbHVtbjEgcm93MiB2YWx1ZSwgY29sdW1uMSByb3czIHZhbHVlXSxcXG4gICAgW2NvbHVtbjIgcm93MSB2YWx1ZSwgY29sdW1uMiByb3cyIHZhbHVlLCBjb2x1bW4yIHJvdzMgdmFsdWVdLFxcbiAgICBbY29sdW1uMyByb3cxIHZhbHVlLCBjb2x1bW4zIHJvdzIgdmFsdWUsIGNvbHVtbjMgcm93MyB2YWx1ZV0sXFxuICAgIFtjb2x1bW40IHJvdzEgdmFsdWUsIGNvbHVtbjQgcm93MiB2YWx1ZSwgY29sdW1uNCByb3czIHZhbHVlXVxcbl1cXG5cXG4qL1xcblxcblxcblxcblxcblxcbmNvbnN0IFJBRF9UT19ERUcgPSAxODAgLyBNYXRoLlBJO1xcblxcbmZ1bmN0aW9uIGRlY29tcG9zZU1hdHJpeChtYXRyaXgpIHtcXG5cXHRjb25zdCBxdWF0ZXJuaW9uID0gbmV3IEFycmF5KDQpO1xcblxcdGNvbnN0IHNjYWxlID0gbmV3IEFycmF5KDMpO1xcblxcdGNvbnN0IHNrZXcgPSBuZXcgQXJyYXkoMyk7XFxuXFx0Y29uc3QgdHJhbnNsYXRpb24gPSBuZXcgQXJyYXkoMyk7XFxuXFxuXFx0Ly8gdHJhbnNsYXRpb24gaXMgc2ltcGxlXFxuXFx0Ly8gaXQncyB0aGUgZmlyc3QgMyB2YWx1ZXMgaW4gdGhlIGxhc3QgY29sdW1uXFxuXFx0Ly8gaS5lLiBtNDEgaXMgWCB0cmFuc2xhdGlvbiwgbTQyIGlzIFkgYW5kIG00MyBpcyBaXFxuXFx0Zm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcXG5cXHRcXHR0cmFuc2xhdGlvbltpXSA9IG1hdHJpeFszXVtpXTtcXG5cXHR9XFxuXFxuXFx0Ly8gTm93IGdldCBzY2FsZSBhbmQgc2hlYXIuXFxuXFx0Y29uc3Qgbm9ybWFsaXplZENvbHVtbnMgPSBuZXcgQXJyYXkoMyk7XFxuXFx0Zm9yIChsZXQgY29sdW1uSW5kZXggPSAwOyBjb2x1bW5JbmRleCA8IDM7IGNvbHVtbkluZGV4KyspIHtcXG5cXHRcXHRub3JtYWxpemVkQ29sdW1uc1tjb2x1bW5JbmRleF0gPSBtYXRyaXhbY29sdW1uSW5kZXhdLnNsaWNlKDAsIDMpO1xcblxcdH1cXG5cXG5cXHQvLyBDb21wdXRlIFggc2NhbGUgZmFjdG9yIGFuZCBub3JtYWxpemUgZmlyc3Qgcm93LlxcblxcdHNjYWxlWzBdID0gX3ZlY3RvckZ1bmN0aW9uc19tanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcXFwibGVuZ3RoXFxcIl0obm9ybWFsaXplZENvbHVtbnNbMF0pO1xcblxcdG5vcm1hbGl6ZWRDb2x1bW5zWzBdID0gX3ZlY3RvckZ1bmN0aW9uc19tanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcXFwibm9ybWFsaXplXFxcIl0obm9ybWFsaXplZENvbHVtbnNbMF0sIHNjYWxlWzBdKTtcXG5cXG5cXHQvLyBDb21wdXRlIFhZIHNoZWFyIGZhY3RvciBhbmQgbWFrZSAybmQgcm93IG9ydGhvZ29uYWwgdG8gMXN0LlxcblxcdHNrZXdbMF0gPSBfdmVjdG9yRnVuY3Rpb25zX21qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1xcXCJkb3RQcm9kdWN0XFxcIl0obm9ybWFsaXplZENvbHVtbnNbMF0sIG5vcm1hbGl6ZWRDb2x1bW5zWzFdKTtcXG5cXHRub3JtYWxpemVkQ29sdW1uc1sxXSA9IF92ZWN0b3JGdW5jdGlvbnNfbWpzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXFxcImxpbmVhckNvbWJpbmF0aW9uXFxcIl0obm9ybWFsaXplZENvbHVtbnNbMV0sIG5vcm1hbGl6ZWRDb2x1bW5zWzBdLCAxLjAsIC1za2V3WzBdKTtcXG5cXG5cXHQvLyBOb3csIGNvbXB1dGUgWSBzY2FsZSBhbmQgbm9ybWFsaXplIDJuZCByb3cuXFxuXFx0c2NhbGVbMV0gPSBfdmVjdG9yRnVuY3Rpb25zX21qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1xcXCJsZW5ndGhcXFwiXShub3JtYWxpemVkQ29sdW1uc1sxXSk7XFxuXFx0bm9ybWFsaXplZENvbHVtbnNbMV0gPSBfdmVjdG9yRnVuY3Rpb25zX21qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1xcXCJub3JtYWxpemVcXFwiXShub3JtYWxpemVkQ29sdW1uc1sxXSwgc2NhbGVbMV0pO1xcblxcdHNrZXdbMF0gLz0gc2NhbGVbMV07XFxuXFxuXFx0Ly8gQ29tcHV0ZSBYWiBhbmQgWVogc2hlYXJzLCBvcnRob2dvbmFsaXplIDNyZCByb3dcXG5cXHRza2V3WzFdID0gX3ZlY3RvckZ1bmN0aW9uc19tanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcXFwiZG90UHJvZHVjdFxcXCJdKG5vcm1hbGl6ZWRDb2x1bW5zWzBdLCBub3JtYWxpemVkQ29sdW1uc1syXSk7XFxuXFx0bm9ybWFsaXplZENvbHVtbnNbMl0gPSBfdmVjdG9yRnVuY3Rpb25zX21qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1xcXCJsaW5lYXJDb21iaW5hdGlvblxcXCJdKG5vcm1hbGl6ZWRDb2x1bW5zWzJdLCBub3JtYWxpemVkQ29sdW1uc1swXSwgMS4wLCAtc2tld1sxXSk7XFxuXFx0c2tld1syXSA9IF92ZWN0b3JGdW5jdGlvbnNfbWpzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXFxcImRvdFByb2R1Y3RcXFwiXShub3JtYWxpemVkQ29sdW1uc1sxXSwgbm9ybWFsaXplZENvbHVtbnNbMl0pO1xcblxcdG5vcm1hbGl6ZWRDb2x1bW5zWzJdID0gX3ZlY3RvckZ1bmN0aW9uc19tanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcXFwibGluZWFyQ29tYmluYXRpb25cXFwiXShub3JtYWxpemVkQ29sdW1uc1syXSwgbm9ybWFsaXplZENvbHVtbnNbMV0sIDEuMCwgLXNrZXdbMl0pO1xcblxcblxcdC8vIE5leHQsIGdldCBaIHNjYWxlIGFuZCBub3JtYWxpemUgM3JkIHJvdy5cXG5cXHRzY2FsZVsyXSA9IF92ZWN0b3JGdW5jdGlvbnNfbWpzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXFxcImxlbmd0aFxcXCJdKG5vcm1hbGl6ZWRDb2x1bW5zWzJdKTtcXG5cXHRub3JtYWxpemVkQ29sdW1uc1syXSA9IF92ZWN0b3JGdW5jdGlvbnNfbWpzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXFxcIm5vcm1hbGl6ZVxcXCJdKG5vcm1hbGl6ZWRDb2x1bW5zWzJdLCBzY2FsZVsyXSk7XFxuXFx0c2tld1sxXSAvPSBzY2FsZVsyXTtcXG5cXHRza2V3WzJdIC89IHNjYWxlWzJdO1xcblxcblxcdC8vIEF0IHRoaXMgcG9pbnQsIHRoZSBtYXRyaXggZGVmaW5lZCBpbiBub3JtYWxpemVkQ29sdW1ucyBpcyBvcnRob25vcm1hbC5cXG5cXHQvLyBDaGVjayBmb3IgYSBjb29yZGluYXRlIHN5c3RlbSBmbGlwLiAgSWYgdGhlIGRldGVybWluYW50XFxuXFx0Ly8gaXMgLTEsIHRoZW4gbmVnYXRlIHRoZSBtYXRyaXggYW5kIHRoZSBzY2FsaW5nIGZhY3RvcnMuXFxuXFx0Y29uc3QgcGR1bTMgPSBfdmVjdG9yRnVuY3Rpb25zX21qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1xcXCJjcm9zc1Byb2R1Y3RcXFwiXShub3JtYWxpemVkQ29sdW1uc1sxXSwgbm9ybWFsaXplZENvbHVtbnNbMl0pO1xcblxcdGlmIChfdmVjdG9yRnVuY3Rpb25zX21qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1xcXCJkb3RQcm9kdWN0XFxcIl0obm9ybWFsaXplZENvbHVtbnNbMF0sIHBkdW0zKSA8IDApIHtcXG5cXHRcXHRmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xcblxcdFxcdFxcdHNjYWxlW2ldICo9IC0xO1xcblxcdFxcdFxcdG5vcm1hbGl6ZWRDb2x1bW5zW2ldWzBdICo9IC0xO1xcblxcdFxcdFxcdG5vcm1hbGl6ZWRDb2x1bW5zW2ldWzFdICo9IC0xO1xcblxcdFxcdFxcdG5vcm1hbGl6ZWRDb2x1bW5zW2ldWzJdICo9IC0xO1xcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0Ly8gTm93LCBnZXQgdGhlIHJvdGF0aW9ucyBvdXRcXG5cXHRxdWF0ZXJuaW9uWzBdID1cXG5cXHRcXHQwLjUgKiBNYXRoLnNxcnQoTWF0aC5tYXgoMSArIG5vcm1hbGl6ZWRDb2x1bW5zWzBdWzBdIC0gbm9ybWFsaXplZENvbHVtbnNbMV1bMV0gLSBub3JtYWxpemVkQ29sdW1uc1syXVsyXSwgMCkpO1xcblxcdHF1YXRlcm5pb25bMV0gPVxcblxcdFxcdDAuNSAqIE1hdGguc3FydChNYXRoLm1heCgxIC0gbm9ybWFsaXplZENvbHVtbnNbMF1bMF0gKyBub3JtYWxpemVkQ29sdW1uc1sxXVsxXSAtIG5vcm1hbGl6ZWRDb2x1bW5zWzJdWzJdLCAwKSk7XFxuXFx0cXVhdGVybmlvblsyXSA9XFxuXFx0XFx0MC41ICogTWF0aC5zcXJ0KE1hdGgubWF4KDEgLSBub3JtYWxpemVkQ29sdW1uc1swXVswXSAtIG5vcm1hbGl6ZWRDb2x1bW5zWzFdWzFdICsgbm9ybWFsaXplZENvbHVtbnNbMl1bMl0sIDApKTtcXG5cXHRxdWF0ZXJuaW9uWzNdID1cXG5cXHRcXHQwLjUgKiBNYXRoLnNxcnQoTWF0aC5tYXgoMSArIG5vcm1hbGl6ZWRDb2x1bW5zWzBdWzBdICsgbm9ybWFsaXplZENvbHVtbnNbMV1bMV0gKyBub3JtYWxpemVkQ29sdW1uc1syXVsyXSwgMCkpO1xcblxcblxcdGlmIChub3JtYWxpemVkQ29sdW1uc1syXVsxXSA+IG5vcm1hbGl6ZWRDb2x1bW5zWzFdWzJdKSB7XFxuXFx0XFx0cXVhdGVybmlvblswXSA9IC1xdWF0ZXJuaW9uWzBdO1xcblxcdH1cXG5cXHRpZiAobm9ybWFsaXplZENvbHVtbnNbMF1bMl0gPiBub3JtYWxpemVkQ29sdW1uc1syXVswXSkge1xcblxcdFxcdHF1YXRlcm5pb25bMV0gPSAtcXVhdGVybmlvblsxXTtcXG5cXHR9XFxuXFx0aWYgKG5vcm1hbGl6ZWRDb2x1bW5zWzFdWzBdID4gbm9ybWFsaXplZENvbHVtbnNbMF1bMV0pIHtcXG5cXHRcXHRxdWF0ZXJuaW9uWzJdID0gLXF1YXRlcm5pb25bMl07XFxuXFx0fVxcblxcblxcdC8vIGNvcnJlY3QgZm9yIG9jY2FzaW9uYWwsIHdlaXJkIEV1bGVyIHN5bm9ueW1zIGZvciAyZCByb3RhdGlvblxcblxcdGxldCByb3RhdGlvbkRlZ3JlZXM7XFxuXFx0aWYgKFxcblxcdFxcdHF1YXRlcm5pb25bMF0gPCAwLjAwMSAmJlxcblxcdFxcdHF1YXRlcm5pb25bMF0gPj0gMCAmJlxcblxcdFxcdHF1YXRlcm5pb25bMV0gPCAwLjAwMSAmJlxcblxcdFxcdHF1YXRlcm5pb25bMV0gPj0gMFxcblxcdCkge1xcblxcdFxcdC8vIHRoaXMgaXMgYSAyZCByb3RhdGlvbiBvbiB0aGUgei1heGlzXFxuXFx0XFx0cm90YXRpb25EZWdyZWVzID0gW1xcblxcdFxcdFxcdDAsXFxuXFx0XFx0XFx0MCxcXG5cXHRcXHRcXHRPYmplY3QoX3JvdW5kVG9UaHJlZVBsYWNlc19tanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcXFwiZGVmYXVsdFxcXCJdKShcXG5cXHRcXHRcXHRcXHQoTWF0aC5hdGFuMihub3JtYWxpemVkQ29sdW1uc1swXVsxXSwgbm9ybWFsaXplZENvbHVtbnNbMF1bMF0pICogMTgwKSAvIE1hdGguUElcXG5cXHRcXHRcXHQpXFxuXFx0XFx0XTtcXG5cXHR9IGVsc2Uge1xcblxcdFxcdHJvdGF0aW9uRGVncmVlcyA9IE9iamVjdChfcXVhdGVybmlvblRvRGVncmVlc1hZWl9tanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX1tcXFwiZGVmYXVsdFxcXCJdKShxdWF0ZXJuaW9uKTtcXG5cXHR9XFxuXFxuXFx0Ly8gZXhwb3NlIGJvdGggYmFzZSBkYXRhIGFuZCBjb252ZW5pZW5jZSBuYW1lc1xcblxcdHJldHVybiB7XFxuXFx0XFx0cm90YXRlWDogcm90YXRpb25EZWdyZWVzWzBdLFxcblxcdFxcdHJvdGF0ZVk6IHJvdGF0aW9uRGVncmVlc1sxXSxcXG5cXHRcXHRyb3RhdGVaOiByb3RhdGlvbkRlZ3JlZXNbMl0sXFxuXFx0XFx0c2NhbGVYOiBPYmplY3QoX3JvdW5kVG9UaHJlZVBsYWNlc19tanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcXFwiZGVmYXVsdFxcXCJdKShzY2FsZVswXSksXFxuXFx0XFx0c2NhbGVZOiBPYmplY3QoX3JvdW5kVG9UaHJlZVBsYWNlc19tanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcXFwiZGVmYXVsdFxcXCJdKShzY2FsZVsxXSksXFxuXFx0XFx0c2NhbGVaOiBPYmplY3QoX3JvdW5kVG9UaHJlZVBsYWNlc19tanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcXFwiZGVmYXVsdFxcXCJdKShzY2FsZVsyXSksXFxuXFx0XFx0dHJhbnNsYXRlWDogdHJhbnNsYXRpb25bMF0sXFxuXFx0XFx0dHJhbnNsYXRlWTogdHJhbnNsYXRpb25bMV0sXFxuXFx0XFx0dHJhbnNsYXRlWjogdHJhbnNsYXRpb25bMl0sXFxuXFx0XFx0c2tld1hZOiBPYmplY3QoX3JvdW5kVG9UaHJlZVBsYWNlc19tanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcXFwiZGVmYXVsdFxcXCJdKShza2V3WzBdKSAqIFJBRF9UT19ERUcsXFxuXFx0XFx0c2tld1haOiBPYmplY3QoX3JvdW5kVG9UaHJlZVBsYWNlc19tanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcXFwiZGVmYXVsdFxcXCJdKShza2V3WzFdKSAqIFJBRF9UT19ERUcsXFxuXFx0XFx0c2tld1laOiBPYmplY3QoX3JvdW5kVG9UaHJlZVBsYWNlc19tanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcXFwiZGVmYXVsdFxcXCJdKShza2V3WzJdICogUkFEX1RPX0RFRylcXG5cXHR9O1xcbn1cXG5cXG4vLyMgc291cmNlVVJMPXdlYnBhY2s6Ly9kZWNvbXBvc2VET01NYXRyaXgvLi9kZWNvbXBvc2VNYXRyaXgubWpzP1wiKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9xdWF0ZXJuaW9uVG9EZWdyZWVzWFlaLm1qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vcXVhdGVybmlvblRvRGVncmVlc1hZWi5tanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24oX193ZWJwYWNrX21vZHVsZV9fLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuZXZhbChcIl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcXG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFxcXCJkZWZhdWx0XFxcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBxdWF0ZXJuaW9uVG9EZWdyZWVzWFlaOyB9KTtcXG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3JvdW5kVG9UaHJlZVBsYWNlc19tanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vcm91bmRUb1RocmVlUGxhY2VzLm1qcyAqLyBcXFwiLi9yb3VuZFRvVGhyZWVQbGFjZXMubWpzXFxcIik7XFxuLypcXG5cXG4gY29waWVkIGZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC1uYXRpdmUvYmxvYi9tYXN0ZXIvTGlicmFyaWVzL1V0aWxpdGllcy9NYXRyaXhNYXRoLmpzXFxuXFxuKi9cXG5cXG5cXG5cXG5cXG5jb25zdCBSQURfVE9fREVHID0gMTgwIC8gTWF0aC5QSTtcXG5cXG5mdW5jdGlvbiBxdWF0ZXJuaW9uVG9EZWdyZWVzWFlaKHF1YXRlcm5pb24pIHtcXG5cXG5cXHRjb25zdCBbcXgsIHF5LCBxeiwgcXddID0gcXVhdGVybmlvbjtcXG5cXHRjb25zdCBxdzIgPSBxdyAqIHF3O1xcblxcdGNvbnN0IHF4MiA9IHF4ICogcXg7XFxuXFx0Y29uc3QgcXkyID0gcXkgKiBxeTtcXG5cXHRjb25zdCBxejIgPSBxeiAqIHF6O1xcblxcdGNvbnN0IHRlc3QgPSBxeCAqIHF5ICsgcXogKiBxdztcXG5cXHRjb25zdCB1bml0ID0gcXcyICsgcXgyICsgcXkyICsgcXoyO1xcblxcblxcdGlmICh0ZXN0ID4gMC40OTk5OSAqIHVuaXQpIHtcXG5cXHQgIHJldHVybiBbMCwgMiAqIE1hdGguYXRhbjIocXgsIHF3KSAqIFJBRF9UT19ERUcsIDkwXTtcXG5cXHR9XFxuXFx0aWYgKHRlc3QgPCAtMC40OTk5OSAqIHVuaXQpIHtcXG5cXHQgIHJldHVybiBbMCwgLTIgKiBNYXRoLmF0YW4yKHF4LCBxdykgKiBSQURfVE9fREVHLCAtOTBdO1xcblxcdH1cXG5cXG5cXHRyZXR1cm4gW1xcblxcdCAgT2JqZWN0KF9yb3VuZFRvVGhyZWVQbGFjZXNfbWpzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXFxcImRlZmF1bHRcXFwiXSkoXFxuXFx0XFx0TWF0aC5hdGFuMigyICogcXggKiBxdyAtIDIgKiBxeSAqIHF6LCAxIC0gMiAqIHF4MiAtIDIgKiBxejIpICogUkFEX1RPX0RFRyxcXG5cXHQgICksXFxuXFx0ICBPYmplY3QoX3JvdW5kVG9UaHJlZVBsYWNlc19tanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcXFwiZGVmYXVsdFxcXCJdKShcXG5cXHRcXHRNYXRoLmF0YW4yKDIgKiBxeSAqIHF3IC0gMiAqIHF4ICogcXosIDEgLSAyICogcXkyIC0gMiAqIHF6MikgKiBSQURfVE9fREVHLFxcblxcdCAgKSxcXG5cXHQgIE9iamVjdChfcm91bmRUb1RocmVlUGxhY2VzX21qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1xcXCJkZWZhdWx0XFxcIl0pKE1hdGguYXNpbigyICogcXggKiBxeSArIDIgKiBxeiAqIHF3KSAqIFJBRF9UT19ERUcpLFxcblxcdF07XFxuXFxufVxcblxcbi8vIyBzb3VyY2VVUkw9d2VicGFjazovL2RlY29tcG9zZURPTU1hdHJpeC8uL3F1YXRlcm5pb25Ub0RlZ3JlZXNYWVoubWpzP1wiKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9yb3VuZFRvVGhyZWVQbGFjZXMubWpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3JvdW5kVG9UaHJlZVBsYWNlcy5tanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihfX3dlYnBhY2tfbW9kdWxlX18sIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5ldmFsKFwiX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXFxcImRlZmF1bHRcXFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHJvdW5kVG9UaHJlZVBsYWNlczsgfSk7XFxuLypcXG5cXG5mcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC1uYXRpdmUvYmxvYi9tYXN0ZXIvTGlicmFyaWVzL1V0aWxpdGllcy9NYXRyaXhNYXRoLmpzXFxuXFxuKi8gXFxuXFxuZnVuY3Rpb24gcm91bmRUb1RocmVlUGxhY2VzKG51bWJlcil7XFxuICAgIGNvbnN0IGFyciA9IG51bWJlci50b1N0cmluZygpLnNwbGl0KCdlJyk7XFxuICAgIHJldHVybiBNYXRoLnJvdW5kKGFyclswXSArICdlJyArIChhcnJbMV0gPyArYXJyWzFdIC0gMyA6IDMpKSAqIDAuMDAxO1xcbn1cXG5cXG4vLyMgc291cmNlVVJMPXdlYnBhY2s6Ly9kZWNvbXBvc2VET01NYXRyaXgvLi9yb3VuZFRvVGhyZWVQbGFjZXMubWpzP1wiKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi92ZWN0b3JGdW5jdGlvbnMubWpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3ZlY3RvckZ1bmN0aW9ucy5tanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGxlbmd0aCwgbm9ybWFsaXplLCBkb3RQcm9kdWN0LCBjcm9zc1Byb2R1Y3QsIGxpbmVhckNvbWJpbmF0aW9uICovXG4vKioqLyAoZnVuY3Rpb24oX193ZWJwYWNrX21vZHVsZV9fLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuZXZhbChcIl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcXG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFxcXCJsZW5ndGhcXFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIGxlbmd0aDsgfSk7XFxuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcXFwibm9ybWFsaXplXFxcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBub3JtYWxpemU7IH0pO1xcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXFxcImRvdFByb2R1Y3RcXFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIGRvdFByb2R1Y3Q7IH0pO1xcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXFxcImNyb3NzUHJvZHVjdFxcXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gY3Jvc3NQcm9kdWN0OyB9KTtcXG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFxcXCJsaW5lYXJDb21iaW5hdGlvblxcXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gbGluZWFyQ29tYmluYXRpb247IH0pO1xcbi8qXFxuXFxuIGNvcGllZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC1uYXRpdmUvYmxvYi9tYXN0ZXIvTGlicmFyaWVzL1V0aWxpdGllcy9NYXRyaXhNYXRoLmpzI0w1NzJcXG5cXG4gdmVjdG9ycyBhcmUganVzdCBhcnJheXMgb2YgbnVtYmVyc1xcblxcbiovXFxuXFxuZnVuY3Rpb24gbGVuZ3RoKHZlY3Rvcikge1xcbiAgICByZXR1cm4gTWF0aC5zcXJ0KFxcbiAgICAgICAgdmVjdG9yWzBdICogdmVjdG9yWzBdICsgXFxuICAgICAgICB2ZWN0b3JbMV0gKiB2ZWN0b3JbMV0gKyBcXG4gICAgICAgIHZlY3RvclsyXSAqIHZlY3RvclsyXVxcbiAgICApO1xcbn1cXG5cXG5mdW5jdGlvbiBub3JtYWxpemUodmVjdG9yLCBwcmVDb21wdXRlZFZlY3Rvckxlbmd0aCkge1xcbiAgICByZXR1cm4gW1xcbiAgICAgICAgdmVjdG9yWzBdL3ByZUNvbXB1dGVkVmVjdG9yTGVuZ3RoLCBcXG4gICAgICAgIHZlY3RvclsxXS9wcmVDb21wdXRlZFZlY3Rvckxlbmd0aCxcXG4gICAgICAgIHZlY3RvclsyXS9wcmVDb21wdXRlZFZlY3Rvckxlbmd0aFxcbiAgICBdO1xcbn1cXG5cXG5mdW5jdGlvbiBkb3RQcm9kdWN0KHZlY3RvckEsIHZlY3RvckIpIHtcXG4gICAgcmV0dXJuIChcXG4gICAgICAgIHZlY3RvckFbMF0gKiB2ZWN0b3JCWzBdICtcXG4gICAgICAgIHZlY3RvckFbMV0gKiB2ZWN0b3JCWzFdICtcXG4gICAgICAgIHZlY3RvckFbMl0gKiB2ZWN0b3JCWzJdXFxuICAgICk7XFxufVxcblxcbmZ1bmN0aW9uIGNyb3NzUHJvZHVjdCh2ZWN0b3JBLCB2ZWN0b3JCKSB7XFxuICAgIHJldHVybiBbXFxuICAgICAgICB2ZWN0b3JBWzFdICogdmVjdG9yQlsyXSAtIHZlY3RvckFbMl0gKiB2ZWN0b3JCWzFdLFxcbiAgICAgICAgdmVjdG9yQVsyXSAqIHZlY3RvckJbMF0gLSB2ZWN0b3JBWzBdICogdmVjdG9yQlsyXSxcXG4gICAgICAgIHZlY3RvckFbMF0gKiB2ZWN0b3JCWzFdIC0gdmVjdG9yQVsxXSAqIHZlY3RvckJbMF1cXG4gICAgXTtcXG59XFxuXFxuZnVuY3Rpb24gbGluZWFyQ29tYmluYXRpb24odmVjdG9yQSwgdmVjdG9yQiwgYVNjYWxlRmFjdG9yLCBiU2NhbGVGYWN0b3IpIHtcXG4gICAgcmV0dXJuIFtcXG4gICAgICAgIHZlY3RvckFbMF0gKiBhU2NhbGVGYWN0b3IgKyB2ZWN0b3JCWzBdICogYlNjYWxlRmFjdG9yLFxcbiAgICAgICAgdmVjdG9yQVsxXSAqIGFTY2FsZUZhY3RvciArIHZlY3RvckJbMV0gKiBiU2NhbGVGYWN0b3IsXFxuICAgICAgICB2ZWN0b3JBWzJdICogYVNjYWxlRmFjdG9yICsgdmVjdG9yQlsyXSAqIGJTY2FsZUZhY3RvclxcbiAgICBdO1xcbn1cXG5cXG4vLyMgc291cmNlVVJMPXdlYnBhY2s6Ly9kZWNvbXBvc2VET01NYXRyaXgvLi92ZWN0b3JGdW5jdGlvbnMubWpzP1wiKTtcblxuLyoqKi8gfSlcblxuLyoqKioqKi8gfSk7XG59KTsiLCJcInVzZSBzdHJpY3RcIjtcclxuLy8gVGhpcyBmaWxlIGJhc2ljYWxseSBjb250YWlucyBhIG9ic2VydmFibGUgQ2xhc3MgKGNhbGxlZCBEYXRhKSBhbmQgYVxyXG4vLyBEYXRhQmFzZSB3aGljaCBjb250YWlucyBhIGtvbXBsZXggKG5vdCBwcmltaXRpdiB0eXBlcyA9IG9iamVjdHMpXHJcbi8vIG1hcCBvZmYgT2JzZXJ2YWJsZXMgYXMgaXMgb2Z0ZW4gZ2l2ZW4gd2hlbiByZXF1ZXN0aW5nIGRhdGEgKGUuZy4gSlNPTikuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxubGV0IHhycmF5ID0gcmVxdWlyZShcInhycmF5XCIpO1xyXG54cnJheSgpO1xyXG5jb25zdCB7IEludmFsaWRWYWx1ZUV4Y2VwdGlvbiB9ID0geHJyYXk7XHJcbmNsYXNzIEludmFsaWRLZXkgZXh0ZW5kcyBFcnJvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihrZXksIGRhdGEpIHtcclxuICAgICAgICBzdXBlcihcIkludmFsaWQga2V5IFxcXCJcIiArIGtleSArIFwiXFxcIiBmb3IgdGhlIGZvbGxvd2luZyBkYXRhIHN0cnVjdHVyZTpcXG5cIiArIGRhdGEudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5JbnZhbGlkS2V5ID0gSW52YWxpZEtleTtcclxuY2xhc3MgSW52YWxpZENhc3QgZXh0ZW5kcyBFcnJvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYXN0QXR0ZW1wdCkge1xyXG4gICAgICAgIHN1cGVyKFwiQ2Fubm90IGNhc3QgdG8gXCIgKyBjYXN0QXR0ZW1wdC5uYW1lKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkludmFsaWRDYXN0ID0gSW52YWxpZENhc3Q7XHJcbi8vIEZvcm1hdHMgZmV0Y2hlZCAoID0gcmF3KSBkYXRhIGludG8gYW4gbmVzdGVkIERhdGEgY29uc3RydWN0LlxyXG5mdW5jdGlvbiBmb3JtYXREYXRhKGZldGNoZWQsIGZvcm1hdExvY2F0aW9uLCBkZWxldGVVbnNlZW5WYWxzID0gZmFsc2UpIHtcclxuICAgIGlmIChmb3JtYXRMb2NhdGlvbiA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgIGZvcm1hdExvY2F0aW9uID0gbmV3IERhdGEobmV3IGZldGNoZWQuY29uc3RydWN0b3IoKSk7XHJcbiAgICBsZXQgbHM7XHJcbiAgICBsZXQgdXBkYXRlZEZvcm1hdExvY2F0aW9uID0gZmFsc2U7XHJcbiAgICBpZiAoZGVsZXRlVW5zZWVuVmFscylcclxuICAgICAgICBscyA9IFtdO1xyXG4gICAgaWYgKHR5cGVvZiBmZXRjaGVkID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZCBpbiBmZXRjaGVkKSB7XHJcbiAgICAgICAgICAgIGlmICghZmV0Y2hlZC5oYXNPd25Qcm9wZXJ0eShkKSlcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZiAoZGVsZXRlVW5zZWVuVmFscylcclxuICAgICAgICAgICAgICAgIGxzLmFkZChkKTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBmZXRjaGVkW2RdID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZm9ybWF0TG9jYXRpb24udmFsW2RdID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0TG9jYXRpb24udmFsW2RdID0gbmV3IERhdGEobmV3IGZldGNoZWRbZF0uY29uc3RydWN0b3IoKSk7XHJcbiAgICAgICAgICAgICAgICBmb3JtYXREYXRhKGZldGNoZWRbZF0sIGZvcm1hdExvY2F0aW9uLnZhbFtkXSwgZGVsZXRlVW5zZWVuVmFscyk7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVkRm9ybWF0TG9jYXRpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGZvcm1hdExvY2F0aW9uLnZhbFtkXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtYXRMb2NhdGlvbi52YWxbZF0gPSBuZXcgRGF0YShmZXRjaGVkW2RdKTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZWRGb3JtYXRMb2NhdGlvbiA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoZm9ybWF0TG9jYXRpb24udmFsW2RdIGluc3RhbmNlb2YgRGF0YSlcclxuICAgICAgICAgICAgICAgIGZvcm1hdExvY2F0aW9uLnZhbFtkXS52YWwgPSBmZXRjaGVkW2RdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGVsZXRlVW5zZWVuVmFscykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBkIGluIGZvcm1hdExvY2F0aW9uLnZhbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFmb3JtYXRMb2NhdGlvbi52YWwuaGFzT3duUHJvcGVydHkoZCkpXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWxzLmluY2x1ZGVzKGQpKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmb3JtYXRMb2NhdGlvbi52YWwgaW5zdGFuY2VvZiBBcnJheSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0TG9jYXRpb24udmFsLnJlbW92ZUkocGFyc2VJbnQoZCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGZvcm1hdExvY2F0aW9uLnZhbFtkXTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZWRGb3JtYXRMb2NhdGlvbiA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9AdHMtaWdub3JlIHdoZW4gc29tZXRoaW5nIGlzIGFkZGVkIG5vdGlmeSBsaXN0ZW5lcnNcclxuICAgICAgICBpZiAodXBkYXRlZEZvcm1hdExvY2F0aW9uKVxyXG4gICAgICAgICAgICBmb3JtYXRMb2NhdGlvbi5ub3RpZnkodHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICAgICAgZm9ybWF0TG9jYXRpb24udmFsID0gZmV0Y2hlZDtcclxuICAgIHJldHVybiBmb3JtYXRMb2NhdGlvbjtcclxufVxyXG5mdW5jdGlvbiBzZXREYXRhKGRhdGEsIGxvY2F0aW9uLCBjb21wbGV0ZSkge1xyXG4gICAgaWYgKCEobG9jYXRpb24gaW5zdGFuY2VvZiBEYXRhKSAmJiBsb2NhdGlvbiAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgIGxvY2F0aW9uID0gbmV3IERhdGEobG9jYXRpb24pO1xyXG4gICAgbGV0IGRhdGFMb2NhdGlvbiA9IGZvcm1hdERhdGEoZGF0YSwgbG9jYXRpb24pO1xyXG4gICAgaWYgKGNvbXBsZXRlICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgY29tcGxldGUoKTtcclxuICAgIHJldHVybiBuZXcgRGF0YUJhc2UoZGF0YUxvY2F0aW9uKTtcclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBzZXREYXRhO1xyXG4vKlxyXG4gKiBIb2xkcyBhbmQgaGFuZGxlcyBhY2Nlc3MgdG8gYW4gY29tcGxleCBtYXAgb2YgZGF0YS4gVGhpcyBkYXRhIENvbnNpc2l0cyBvZiBpbiBlYWNoIG90aGVyIG5leHRlZCBEYXRhIGludHNhbmNlc1xyXG4gKiAodG8gaW5pdCBzdWNoIGFuIG1hcCwgY29uc3VsdCBmb3JtYXREYXRhLilcclxuICovXHJcbmNsYXNzIERhdGFCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcclxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgfVxyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiRGF0YUJhc2U6IFwiICsgdGhpcy5kYXRhLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldHMgYSByZWZlcmVuY2UgdG8gc3ViRGF0YSBmb3VuZCB1bmRlciBnaXZlbiBrZXkocykgLyBwYXRoXHJcbiAgICAgKiBBIHJlZmVyZW5jZSBpcyBhIG5ldyBEYXRhQmFzZSBpbnN0YW5jZSBqdXN0IGNvbnRhaW5pbmcgdGhlIHJlZmVyZW5jZWQgRGF0YVxyXG4gICAgICpcclxuICAgICAqIFRoaXMgZnVuY3Rpb24gcmVzb2x2ZXMgcmVmZXJlbmNlcyB2aWEgdGhlIFwicmVjdXJzaXZlbHkgYW5jaG9yZWQgRGF0YVwiIChyYWQpIHByb2NlZHVyZS4gRm9yIGZ1cnRoZXJcclxuICAgICAqIGluc2lnaHRzIHdoYXQgdGhpcyBtZWFucyBwbGVhc2UgY29uc3VsdCB0aGUgZG9jdW1lbnRhdGlvbiBvZiB0aGUgZnVuY3Rpb24gcmFkXHJcbiAgICAgKi9cclxuICAgIHJlZiguLi5rZXlzKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRhQmFzZSh0aGlzLnJhZCguLi5rZXlzKSk7XHJcbiAgICB9XHJcbiAgICBwZWVrKC4uLmtleXMpIHtcclxuICAgICAgICByZXR1cm4gbmV3IERhdGFCYXNlKHRoaXMuZmRzKC4uLmtleXMpKTtcclxuICAgIH1cclxuICAgIGN1cnJlbnQoLi4ua2V5cykge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5mZHMoLi4ua2V5cykpLnZhbDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgdW5kZXJseWluZyBEYXRhIGZvdW5kIHVuZGVyIGdpdmVuIGtleShzKSAvIHBhdGhcclxuICAgICAqIFNpbWlsYXIgdG8gcmVmIGJ1dCBub3Qgd3JhcHBlZCBpbnNpZGUgYSBEYXRhQmFzZSBpbnN0YW5jZVxyXG4gICAgICpcclxuICAgICAqIFRoaXMgZnVuY3Rpb24gcmVzb2x2ZXMgcmVmZXJlbmNlcyB2aWEgdGhlIFwicmVjdXJzaXZlbHkgYW5jaG9yZWQgRGF0YVwiIChyYWQpIHByb2NlZHVyZS4gRm9yIGZ1cnRoZXJcclxuICAgICAqIGluc2lnaHRzIHdoYXQgdGhpcyBtZWFucyBwbGVhc2UgY29uc3VsdCB0aGUgZG9jdW1lbnRhdGlvbiBvZiB0aGUgZnVuY3Rpb24gcmFkXHJcbiAgICAgKi9cclxuICAgIGdldChrZXksIGNiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBrZXkgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIGtleSA9PT0gXCJudW1iZXJcIiB8fCBrZXkgaW5zdGFuY2VvZiBEYXRhKSB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gKGtleSBpbnN0YW5jZW9mIERhdGEpID8ga2V5IDogdGhpcy5yYWQoa2V5KTtcclxuICAgICAgICAgICAgaWYgKGNiICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGRhdGEuc3Vic2NyaWJlKGNiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgbWFwID0gW107XHJcbiAgICAgICAgICAgIGlmIChjYiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gKGtleVtpXSBpbnN0YW5jZW9mIERhdGEpID8ga2V5W2ldIDogdGhpcy5yYWQoa2V5W2ldKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdWJzY3JpYnRpb24gPSAodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXBbaV0gPSB2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5Lmxlbmd0aCA9PT0gbWFwLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNiICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYiguLi5tYXApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuc3Vic2NyaWJlKHN1YnNjcmlidGlvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgICAgIG1hcFtpXSA9IChrZXlbaV0gaW5zdGFuY2VvZiBEYXRhKSA/IGtleVtpXSA6IHRoaXMucmFkKGtleVtpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWFwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0KGtleSwgdG8pIHtcclxuICAgICAgICBsZXQgZmRzID0gdGhpcy5mZHMoa2V5KTtcclxuICAgICAgICBmb3JtYXREYXRhKHRvLCBmZHMsIHRydWUpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHJlY3Vyc2l2ZWx5IGFuY2hvcmVkIERhdGEgKHJhZClcclxuICAgICAqIE1lYW5pbmcgZm9yIGVhY2ggbmVzdGluZyBzdGVwIHRoZXJlIHdpbGwgYmUgb25lIGxpc3RlbmVyIGF0dGF0Y2hlZCB0byBlbmFibGUgb2JqZWN0cyB0byBiZSBvYnNlcnZlZFxyXG4gICAgICogVGhpcyBpcyB2ZXJ5IHJlc291cmNlIChtZW0pIGV4cGVuc2l2ZS4gVXNlIG9ubHkgd2hlbiBuZWNlc3NhcnlcclxuICAgICAqL1xyXG4gICAgcmFkKC4uLmtleXMpIHtcclxuICAgICAgICBsZXQgbGFzdCA9IHRoaXMuZGF0YTtcclxuICAgICAgICBsZXQgb3JnYW5pemVkS2V5cyA9IGtleXMuam9pbihcIi5cIikuc3BsaXQoXCIuXCIpO1xyXG4gICAgICAgIG9yZ2FuaXplZEtleXMuZWEoKGspID0+IHtcclxuICAgICAgICAgICAgaWYgKGsgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBuZXh0ID0gbGFzdC52YWxba107XHJcbiAgICAgICAgICAgICAgICBpZiAobmV4dCA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBJbnZhbGlkS2V5KGssIGxhc3QpO1xyXG4gICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICBsYXN0LnN1YnNjcmliZUludGVybmFsbHkoKGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBhID0gYW55W2tdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkdCA9IGEgaW5zdGFuY2VvZiBEYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHR5cGVvZiBhID09PSBcIm9iamVjdFwiICYmICFkdCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQudmFsID0gKGR0KSA/IGEudmFsIDogYTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgbGFzdCA9IG5leHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbGFzdDtcclxuICAgIH1cclxuICAgIGZkcyguLi5rZXlzKSB7XHJcbiAgICAgICAgbGV0IGxhc3QgPSB0aGlzLmRhdGE7XHJcbiAgICAgICAgbGV0IG9yZ2FuaXplZEtleXMgPSBrZXlzLmpvaW4oXCIuXCIpLnNwbGl0KFwiLlwiKTtcclxuICAgICAgICBvcmdhbml6ZWRLZXlzLmVhKChrKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChrICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV4dCA9IGxhc3QudmFsW2tdO1xyXG4gICAgICAgICAgICAgICAgaWYgKG5leHQgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgSW52YWxpZEtleShrLCBsYXN0KTtcclxuICAgICAgICAgICAgICAgIGxhc3QgPSBuZXh0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGxhc3Q7XHJcbiAgICB9XHJcbiAgICAvL1RPRE86IG1ha2UgdGhpcyBhdmFpbGFibGUgZm9yIERCIGFzIGEgd2hvbGUgYW5kIGxpbWl0IGFjY2VzIHZpYSBpbnRlcmZhY2VzIChjb25kaXRpbmFsIHR5cGVzKVxyXG4gICAgZ2V0IGFzQXJyYXkoKSB7XHJcbiAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS52YWwgaW5zdGFuY2VvZiBBcnJheSlcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRhQXJyYXkodGhpcy5kYXRhKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBJbnZhbGlkQ2FzdChBcnJheSk7XHJcbiAgICB9XHJcbiAgICBnZXQgYXNOdW1iZXIoKSB7XHJcbiAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmRhdGEudmFsID09PSBcIm51bWJlclwiKVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGFOdW1iZXIodGhpcy5kYXRhKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBJbnZhbGlkQ2FzdChOdW1iZXIpO1xyXG4gICAgfVxyXG4gICAgZXF1YWxzKHRoYXQpIHtcclxuICAgICAgICByZXR1cm4gKHRoYXQgPT09IHVuZGVmaW5lZCkgPyBmYWxzZSA6IHRoaXMuZGF0YS5lcXVhbHModGhhdC5kYXRhLCB0cnVlKTtcclxuICAgIH1cclxuICAgIHNhbWUodGhhdCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEudmFsID09PSB0aGF0LmRhdGEudmFsO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuRGF0YUJhc2UgPSBEYXRhQmFzZTtcclxuY2xhc3MgRGF0YU51bWJlciBleHRlbmRzIERhdGFCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcclxuICAgICAgICBzdXBlcihkYXRhKTtcclxuICAgIH1cclxuICAgIGluYyhieSA9IDEpIHtcclxuICAgICAgICB0aGlzLmRhdGEudmFsICs9IGJ5O1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEudmFsO1xyXG4gICAgfVxyXG4gICAgZGVjKGJ5ID0gMSkge1xyXG4gICAgICAgIHRoaXMuZGF0YS52YWwgLT0gYnk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS52YWw7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5EYXRhTnVtYmVyID0gRGF0YU51bWJlcjtcclxuY2xhc3MgRGF0YUFycmF5IGV4dGVuZHMgRGF0YUJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xyXG4gICAgICAgIHN1cGVyKGRhdGEpO1xyXG4gICAgfVxyXG4gICAgbGlzdChsb29wLCBzdGVwSW50b1BhdGhBZnRlcndhcmRzID0gXCJcIikge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGgoKTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBlbmQgPSBsb29wKG5ldyBEYXRhQmFzZSh0aGlzLmZkcyhpLCBzdGVwSW50b1BhdGhBZnRlcndhcmRzKSksIGkpO1xyXG4gICAgICAgICAgICBpZiAoZW5kICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZW5kO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZvckVhY2gobG9vcCwgYmVmb3JlTG9vcCwgYWZ0ZXJMb29wLCBzdGVwSW50b1BhdGhBZnRlcndhcmRzID0gXCJcIikge1xyXG4gICAgICAgIGxldCBwcm9tcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZ2V0KFwiXCIsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGJlZm9yZUxvb3AgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgIHByb21zLmFkZChiZWZvcmVMb29wKCkpO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEudmFsLmVhKChlLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwcm9tcy5hZGQobG9vcChuZXcgRGF0YUJhc2UodGhpcy5mZHMoaSwgc3RlcEludG9QYXRoQWZ0ZXJ3YXJkcykpLCBpKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBwcm9tcyA9IHByb21zLmZpbHRlcigoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGUgaW5zdGFuY2VvZiBQcm9taXNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKGFmdGVyTG9vcCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvbXMubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKHByb21zKS50aGVuKGFmdGVyTG9vcCk7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgYWZ0ZXJMb29wKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAocHJvbXMubGVuZ3RoICE9PSAwKVxyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbXMpO1xyXG4gICAgfVxyXG4gICAgbGVuZ3RoKGNiKSB7XHJcbiAgICAgICAgaWYgKGNiID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGEudmFsLmxlbmd0aDtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5nZXQoXCJcIiwgKGEpID0+IHtcclxuICAgICAgICAgICAgICAgIGNiKGEubGVuZ3RoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVhbExlbmd0aChjYikge1xyXG4gICAgICAgIGlmIChjYiA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhLnZhbC5yZWFsTGVuZ3RoO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmdldChcIlwiLCAoYSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2IoYS5yZWFsTGVuZ3RoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYWx0ZXIoY2IsIGluaXRhbGl6ZUxvb3AgPSBmYWxzZSkge1xyXG4gICAgICAgIHRoaXMuYmVmb3JlTGFzdENoYW5nZSA9IHRoaXMuZGF0YS5jbG9uZSgpO1xyXG4gICAgICAgIGlmIChpbml0YWxpemVMb29wKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS52YWwuZWEoKGUsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNiKG5ldyBEYXRhQmFzZShlKSwgaSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdldChcIlwiLCAoYSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaW5kZXhlc1RvQmVDYWxsZWQgPSBbXTtcclxuICAgICAgICAgICAgYS5lYSgoZSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4ZXNUb0JlQ2FsbGVkLmFkZChpKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWUuZXF1YWxzKHRoaXMuYmVmb3JlTGFzdENoYW5nZS52YWxbaV0sIHRydWUpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYihuZXcgRGF0YUJhc2UoZSksIGkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5iZWZvcmVMYXN0Q2hhbmdlLnZhbC5lYSgoZSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFpbmRleGVzVG9CZUNhbGxlZC5pbmNsdWRlcyhpKSlcclxuICAgICAgICAgICAgICAgICAgICBjYihudWxsLCBpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuYmVmb3JlTGFzdENoYW5nZSA9IHRoaXMuZGF0YS5jbG9uZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgbW9ycGgoY2IsIGluaXRhbGl6ZUxvb3AgPSBmYWxzZSkge1xyXG4gICAgICAgIHRoaXMuYmVmb3JlTGFzdENoYW5nZSA9IHRoaXMuZGF0YS5jbG9uZSgpO1xyXG4gICAgICAgIGlmIChpbml0YWxpemVMb29wKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS52YWwuZWEoKGUsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNiKG5ldyBEYXRhQmFzZShlKSwgaSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY2JhID0gRGF0YUFycmF5Lm1vcnBoTWFwLmdldCh0aGlzLmRhdGEpO1xyXG4gICAgICAgIGlmIChjYmEgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgRGF0YUFycmF5Lm1vcnBoTWFwLnNldCh0aGlzLmRhdGEsIFtjYl0pO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgY2JhLmFkZChjYik7XHJcbiAgICB9XHJcbiAgICBhZGQodmFsLCBhdEluZGV4KSB7XHJcbiAgICAgICAgbGV0IGxlbmd0aCA9IHRoaXMubGVuZ3RoKCk7XHJcbiAgICAgICAgbGV0IG1heEluZGV4ID0gbGVuZ3RoIC0gMTtcclxuICAgICAgICBpZiAoYXRJbmRleCA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBhdEluZGV4ID0gbGVuZ3RoO1xyXG4gICAgICAgIHRoaXMuZGF0YS52YWwuUmV2ZXJzZSgpLmVhKChlLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGkgPSBtYXhJbmRleCAtIGk7XHJcbiAgICAgICAgICAgIGlmIChpIDwgYXRJbmRleClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgLy9USElTIElGIElTIE5FQ0VTU0FSWSBCRUNBVVNFIFdIRU4gU0VUVElORyBFTVBUWSBBUlJBWSBTT0xPVFMgVE8gVU5ERUZJTkVEIFRIRVkgR0VUIFBJQ0tFRCBVUCBCWSBJVEVSQVRPUlNcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS52YWxbaV0gPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmRhdGEudmFsW2kgKyAxXTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLnZhbFtpICsgMV0gPSB0aGlzLmRhdGEudmFsW2ldO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmRhdGEudmFsW2F0SW5kZXhdO1xyXG4gICAgICAgIGxldCBvYiA9IHt9O1xyXG4gICAgICAgIG9iW2F0SW5kZXhdID0gdmFsO1xyXG4gICAgICAgIGZvcm1hdERhdGEob2IsIHRoaXMuZGF0YSk7XHJcbiAgICAgICAgbGV0IGNiYSA9IERhdGFBcnJheS5tb3JwaE1hcC5nZXQodGhpcy5kYXRhKTtcclxuICAgICAgICBpZiAoY2JhICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIGNiYS5lYSgoZikgPT4ge1xyXG4gICAgICAgICAgICAgICAgZihuZXcgRGF0YUJhc2UodGhpcy5kYXRhLnZhbFthdEluZGV4XSksIGF0SW5kZXgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJlbW92ZUkoaW5kZXgsIGNsb3NlR2FwID0gdHJ1ZSkge1xyXG4gICAgICAgIGlmIChjbG9zZUdhcClcclxuICAgICAgICAgICAgdGhpcy5kYXRhLnZhbC5yZW1vdmVJKGluZGV4KTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmRhdGEudmFsW2luZGV4XTtcclxuICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICB0aGlzLmRhdGEubm90aWZ5KHRydWUpO1xyXG4gICAgICAgIGxldCBjYmEgPSBEYXRhQXJyYXkubW9ycGhNYXAuZ2V0KHRoaXMuZGF0YSk7XHJcbiAgICAgICAgaWYgKGNiYSAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBjYmEuZWEoKGYpID0+IHtcclxuICAgICAgICAgICAgICAgIGYobnVsbCwgaW5kZXgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJlbW92ZVYodmFsLCBjbG9zZUdhcCA9IHRydWUpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IGZvcm1hdERhdGEodmFsKTtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmRhdGEudmFsLmVhKChlLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLmVxdWFscyhkYXRhKSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChpbmRleCA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgSW52YWxpZFZhbHVlRXhjZXB0aW9uKHZhbCwgdGhpcy5kYXRhLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIGlmIChjbG9zZUdhcClcclxuICAgICAgICAgICAgdGhpcy5kYXRhLnZhbC5yZW1vdmVJKGluZGV4KTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmRhdGEudmFsW2luZGV4XTtcclxuICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICB0aGlzLmRhdGEubm90aWZ5KHRydWUpO1xyXG4gICAgICAgIGxldCBjYmEgPSBEYXRhQXJyYXkubW9ycGhNYXAuZ2V0KHRoaXMuZGF0YSk7XHJcbiAgICAgICAgaWYgKGNiYSAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBjYmEuZWEoKGYpID0+IHtcclxuICAgICAgICAgICAgICAgIGYobnVsbCwgaW5kZXgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5EYXRhQXJyYXkubW9ycGhNYXAgPSBuZXcgTWFwKCk7XHJcbmV4cG9ydHMuRGF0YUFycmF5ID0gRGF0YUFycmF5O1xyXG5jbGFzcyBEYXRhIHtcclxuICAgIGNvbnN0cnVjdG9yKHZhbCkge1xyXG4gICAgICAgIHRoaXMuY2JzID0gW107XHJcbiAgICAgICAgdGhpcy5pbnRlcm5hbENCcyA9IFtdO1xyXG4gICAgICAgIHRoaXMudmFsID0gdmFsO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgdGhlIHZhbFxyXG4gICAgICovXHJcbiAgICBzZXQgdmFsKHRvKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsID09PSB0bylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuX3ZhbCA9IHRvO1xyXG4gICAgICAgIHRoaXMubm90aWZ5KGZhbHNlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgY3VycmVudCB2YWxcclxuICAgICAqL1xyXG4gICAgZ2V0IHZhbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdmFsO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTdWJzY3JpYmUgdG8gdmFsXHJcbiAgICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgd2hpY2ggZ2V0cyBjYWxsZWQgd2hlbmV2ZXIgdGhlIHZhbCBjaGFuZ2VzXHJcbiAgICAgKi9cclxuICAgIHN1YnNjcmliZShjYiwgaW5pdCA9IHRydWUpIHtcclxuICAgICAgICB0aGlzLmNicy5hZGQoY2IpO1xyXG4gICAgICAgIGlmIChpbml0KVxyXG4gICAgICAgICAgICBjYih0aGlzLnZhbCk7XHJcbiAgICB9XHJcbiAgICBzdWJzY3JpYmVJbnRlcm5hbGx5KGNiKSB7XHJcbiAgICAgICAgdGhpcy5pbnRlcm5hbENCcy5hZGQoY2IpO1xyXG4gICAgICAgIGNiKHRoaXMudmFsKTtcclxuICAgIH1cclxuICAgIHVuc3Vic2NyaWJlKGNiKSB7XHJcbiAgICAgICAgaWYgKGNiICE9PSBudWxsKVxyXG4gICAgICAgICAgICB0aGlzLmNicy5yZW1vdmUoY2IpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5jYnMuY2xlYXIoKTtcclxuICAgIH1cclxuICAgIHRvU3RyaW5nKHRhYkluID0gMCwgaW5zaWRlT2JqZWN0ID0gZmFsc2UpIHtcclxuICAgICAgICB0YWJJbisrO1xyXG4gICAgICAgIGxldCBzID0gXCJcIjtcclxuICAgICAgICBsZXQgdiA9IHRoaXMudmFsO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdiA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICBsZXQgaGFzUHJvcHMgPSBmYWxzZTtcclxuICAgICAgICAgICAgbGV0IGFyID0gdiBpbnN0YW5jZW9mIEFycmF5O1xyXG4gICAgICAgICAgICBpZiAoYXIpXHJcbiAgICAgICAgICAgICAgICBzICs9IFwiW1wiO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBzICs9IFwie1wiO1xyXG4gICAgICAgICAgICBzICs9IFwiXFxuXCI7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGsgaW4gdikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF2Lmhhc093blByb3BlcnR5KGspKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgaGFzUHJvcHMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICBzICs9IFwiXFx0XCIucmVwZWF0KHRhYkluKSArIGsgKyBcIjogXCIgKyB2W2tdLnRvU3RyaW5nKHRhYkluLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWhhc1Byb3BzKVxyXG4gICAgICAgICAgICAgICAgcyA9IHMuc3Vic3RyaW5nKDAsIHMubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcyA9IHMuc3Vic3RyaW5nKDAsIHMubGVuZ3RoIC0gMikgKyBcIlxcblwiO1xyXG4gICAgICAgICAgICAgICAgcyArPSBcIlxcdFwiLnJlcGVhdCh0YWJJbiAtIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChhcilcclxuICAgICAgICAgICAgICAgIHMgKz0gXCJdXCI7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHMgKz0gXCJ9XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgc3QgPSB0eXBlb2YgdiA9PT0gXCJzdHJpbmdcIjtcclxuICAgICAgICAgICAgaWYgKHN0KVxyXG4gICAgICAgICAgICAgICAgcyArPSBcIlxcXCJcIjtcclxuICAgICAgICAgICAgcyArPSB2O1xyXG4gICAgICAgICAgICBpZiAoc3QpXHJcbiAgICAgICAgICAgICAgICBzICs9IFwiXFxcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzICs9IGluc2lkZU9iamVjdCA/IFwiLFwiIDogXCJcIjtcclxuICAgICAgICByZXR1cm4gcyArIFwiXFxuXCI7XHJcbiAgICB9XHJcbiAgICBub3RpZnkod2lsZCA9IGZhbHNlKSB7XHJcbiAgICAgICAgbGV0IHZhbCA9IHRoaXMudmFsO1xyXG4gICAgICAgIHRoaXMuY2JzLmVhKChmKSA9PiB7XHJcbiAgICAgICAgICAgIGYodmFsKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoIXdpbGQpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnRlcm5hbENCcy5lYSgoZikgPT4ge1xyXG4gICAgICAgICAgICAgICAgZih2YWwpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENvbXBhcmVzIGlmIGFsbCBrZXlzIGluIHRoaXMgYXJlIGVxdWFsIHRvIHRoZSBlcXVpdmVsZW50IG9uZXMgb24gZGF0YVxyXG4gICAgICogRGlmZmVyZW50IERhdGEgSW5zdGFuY2VzIGhvbGRpbmcgdGhlIHNhbWUgdmFsdWUgYXJlIHRoZSBlcXVhbFxyXG4gICAgICogRGF0YSBjYW4gaGF2ZSBtb3JlIGtleXMgdGhhbiB0aGlzIGFuZCBzdGlsbCBiZSBlcXVhbC5cclxuICAgICAqIElmIHlvdSBkb250IHdhbnQgdGhpcyBwYXNzIGluIHRydWUgdG8gdGhlIHN0cmljdCBwYXJhbS4gVGhpcyB3aWxsIGJlIG1vcmUgcmVjb3VyY2UgaW50ZW5zaXZlXHJcbiAgICAgKi9cclxuICAgIGVxdWFscyhkYXRhLCBzdHJpY3QgPSBmYWxzZSkge1xyXG4gICAgICAgIGxldCB2ID0gdGhpcy52YWw7XHJcbiAgICAgICAgaWYgKGRhdGEgPT09IHVuZGVmaW5lZCB8fCBkYXRhID09PSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgbGV0IGQgPSBkYXRhLnZhbDtcclxuICAgICAgICBpZiAodiA9PSBkKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBsZXQgbHM7XHJcbiAgICAgICAgaWYgKHN0cmljdClcclxuICAgICAgICAgICAgbHMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBrIGluIHYpIHtcclxuICAgICAgICAgICAgaWYgKCF2Lmhhc093blByb3BlcnR5KGspKVxyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmIChzdHJpY3QpXHJcbiAgICAgICAgICAgICAgICBscy5hZGQoayk7XHJcbiAgICAgICAgICAgIGlmICh2W2tdICE9PSBkW2tdKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodltrXSBpbnN0YW5jZW9mIERhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZFtrXSBpbnN0YW5jZW9mIERhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdltrXS5lcXVhbHMoZFtrXSwgc3RyaWN0KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdHJpY3QpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgayBpbiBkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXYuaGFzT3duUHJvcGVydHkoaykpXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWxzLmluY2x1ZGVzKGspKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGNsb25lKCkge1xyXG4gICAgICAgIGxldCBkO1xyXG4gICAgICAgIGxldCB2ID0gdGhpcy52YWw7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2ID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IG5ldyB2LmNvbnN0cnVjdG9yKCk7XHJcbiAgICAgICAgICAgIGQgPSBuZXcgRGF0YShkYXRhKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgayBpbiB2KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXYuaGFzT3duUHJvcGVydHkoaykpXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgIGQudmFsW2tdID0gdltrXS5jbG9uZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgZCA9IG5ldyBEYXRhKHYpO1xyXG4gICAgICAgIGQuaW50ZXJuYWxDQnMuYWRkKC4uLnRoaXMuaW50ZXJuYWxDQnMpO1xyXG4gICAgICAgIGQuY2JzLmFkZCguLi50aGlzLmNicyk7XHJcbiAgICAgICAgcmV0dXJuIGQ7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5EYXRhID0gRGF0YTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgY2xhc3MgRXhjZXB0aW9uIGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKG1zZykge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMubWVzc2FnZSA9IHRoaXMuY29uc3RydWN0b3IubmFtZTtcbiAgICAgIGlmIChtc2cgIT09IHVuZGVmaW5lZCkgdGhpcy5tZXNzYWdlICs9IFwiOiBcIiArIG1zZztcbiAgICB9XG4gIH1cbiAgY2xhc3MgSW5kZXhPdXRPZkJvdW5kc0V4Y2VwdGlvbiBleHRlbmRzIEV4Y2VwdGlvbiB7XG4gICAgY29uc3RydWN0b3IoaW5kZXgsIGFycmF5KSB7XG4gICAgICBzdXBlcihcIkdpdmVuIHZhbHVlIFxcXCJcIiArIGluZGV4ICsgXCJcXFwiIG11c3QgYmUgaW4gcmFuZ2UgMC1cIiArIChhcnJheS5sZW5ndGgtMSkgKyBcIi5cIik7XG4gICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gICAgfVxuICB9XG4gIGNsYXNzIEludmFsaWRJbnB1dEV4Y2VwdGlvbiBleHRlbmRzIEV4Y2VwdGlvbiB7XG4gICAgY29uc3RydWN0b3IobXNnKSB7XG4gICAgICBzdXBlcihcIkdpdmVuIGlucHV0IGlzIGludmFsaWQuXFxuXCIgKyBtc2cpO1xuICAgIH1cbiAgfVxuICBjbGFzcyBJbnZhbGlkQ29uc3RydWN0b3JFeGNlcHRpb24gZXh0ZW5kcyBFeGNlcHRpb257XG4gICAgY29uc3RydWN0b3IobXNnID0gXCJcIikge1xuICAgICAgc3VwZXIoXCJHaXZlbiBjb25zdHJ1Y3RvciBtdXN0IGluaGVyaXQgZm9ybSBBcnJheS5cXG5cIiArIG1zZyk7XG4gICAgfVxuICB9XG4gIGNsYXNzIEludmFsaWRWYWx1ZUV4Y2VwdGlvbiBleHRlbmRzIEV4Y2VwdGlvbiB7XG4gICAgY29uc3RydWN0b3IodmFsdWUsIGFycmF5KSB7XG4gICAgICBzdXBlcihcIlVuYWJsZSB0byBmaW5kIGdpdmVuIHZhbHVlOiBcIiArIHZhbHVlLmNvbnN0cnVjdG9yLm5hbWUgKyBcIiBcIiArIEpTT04uc3RyaW5naWZ5KHZhbHVlKSArIFwiOyB3aXRoaW4gZm9sbG93aW5nIGFycmF5OiBcIiArIGFycmF5LnRvU3RyaW5nKCkpO1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICAgIH1cbiAgfVxuXG4gIC8vVGhyb3dzIEluZGV4T3V0T2ZCb3VuZHNFeGNlcHRpb24gd2hlbiBnaXZlbiBpbmRleCBpcyBvdXQgb2YgYm91bmRzIG9mIGFcbiAgZnVuY3Rpb24gaXNJbmRleChpLCBhKSB7XG4gICAgaWYoIWEuaGFzT3duUHJvcGVydHkoaSkpIHRocm93IG5ldyBJbmRleE91dE9mQm91bmRzRXhjZXB0aW9uKGksYSk7XG4gIH1cblxuICBjb25zdCBhciA9IFwieHJyYXlcIjtcblxuICBmdW5jdGlvbiBpbml0KEFyQ29uc3RyID0gQXJyYXkpIHtcbiAgICBpZighKG5ldyBBckNvbnN0cigpIGluc3RhbmNlb2YgQXJyYXkpKSB0aHJvdyBuZXcgSW52YWxpZENvbnN0cnVjdG9yRXhjZXB0aW9uKCk7XG4gICAgaWYgKEFyQ29uc3RyLnhycmF5ID09PSBhcikgcmV0dXJuIEFyQ29uc3RyO1xuXG4gICAgQXJDb25zdHIueHJyYXkgPSBhcjtcblxuICAgIGxldCBwID0gQXJDb25zdHIucHJvdG90eXBlO1xuXG4gICAgcC5lYWNoID0gcC5lYSA9IGZ1bmN0aW9uKGYsIHQgPSB0aGlzKSB7XG4gICAgICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCBlO1xuICAgICAgICBsZXQgc3RhcnRJO1xuICAgICAgICBmb3IgKHN0YXJ0SSA9IDA7IHN0YXJ0SSA8IHQubGVuZ3RoOyBzdGFydEkrKykge1xuICAgICAgICAgIGlmICh0Lmhhc093blByb3BlcnR5KHN0YXJ0SSkpIHtcbiAgICAgICAgICAgIGUgPSBmLmNhbGwodCwgdFtzdGFydEldLCBzdGFydEksIHRoaXMpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN0YXJ0SSsrO1xuICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICByZXR1cm4gKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGxldCByID0gYXdhaXQgZTtcbiAgICAgICAgICAgIGlmIChyICE9PSB1bmRlZmluZWQpIHJldHVybiByO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gc3RhcnRJOyBpIDwgdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBpZiAoIXQuaGFzT3duUHJvcGVydHkoaSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICBsZXQgZSA9IGF3YWl0IGYuY2FsbCh0LCB0W2ldLCBpLCB0aGlzKTtcbiAgICAgICAgICAgICAgaWYgKGUgIT09IHVuZGVmaW5lZCkgcmV0dXJuIGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBpZiAoZSAhPT0gdW5kZWZpbmVkKSByZXR1cm4gZTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gc3RhcnRJOyBpIDwgdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCF0Lmhhc093blByb3BlcnR5KGkpKSBjb250aW51ZTtcbiAgICAgICAgICAgIGxldCBlID0gZi5jYWxsKHQsIHRbaV0sIGksIHRoaXMpO1xuICAgICAgICAgICAgaWYgKGUgIT09IHVuZGVmaW5lZCkgcmV0dXJuIGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHAsIFwiZW1wdHlcIiwge2dldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmxlbmd0aCA9PT0gMDtcbiAgICB9fSk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocCwgXCJsYXN0XCIsIHtnZXQoKSB7XG4gICAgICBpZih0aGlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIHJldHVybiB0aGlzW3RoaXMubGVuZ3RoLTFdO1xuICAgIH19KTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwLCBcInJlYWxMZW5ndGhcIiwge2dldCgpIHtcbiAgICAgIGxldCBsID0gMDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShpKSkgbCsrO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGw7XG4gICAgfX0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHAsIFwiZmlyc3RcIiwge2dldCgpIHtcbiAgICAgIHJldHVybiB0aGlzWzBdO1xuICAgIH19KTtcblxuICAgIHAuY2xlYXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMubGVuZ3RoID0gMDtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBwLkNsZWFyID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbmV3IEFyQ29uc3RyKCk7XG4gICAgfVxuXG4gICAgcC5hZGQgPSBmdW5jdGlvbiguLi52YWx1ZXMpIHtcbiAgICAgIHRoaXMucHVzaCguLi52YWx1ZXMpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHAuQWRkID0gZnVuY3Rpb24oLi4udmFsdWVzKSB7XG4gICAgICByZXR1cm4gbmV3IEFyQ29uc3RyKCkuYWRkKC4uLnRoaXMpLmFkZCguLi52YWx1ZXMpO1xuICAgIH1cblxuICAgIHAuc2V0ID0gZnVuY3Rpb24oYSA9IFtdKSB7XG4gICAgICBpZih0aGlzID09PSBhKSByZXR1cm4gdGhpcztcbiAgICAgIGlmKGEgaW5zdGFuY2VvZiBBcnJheSkgcmV0dXJuIHRoaXMuY2xlYXIoKS5hZGQoLi4uYSk7XG4gICAgICByZXR1cm4gdGhpcy5jbGVhcigpLmFkZChhKTtcbiAgICB9XG4gICAgcC5TZXQgPSBmdW5jdGlvbihhID0gW10pIHtcbiAgICAgIHJldHVybiBuZXcgQXJDb25zdHIoKS5hZGQoLi4uYSk7XG4gICAgfVxuXG4gICAgcC5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuU2V0KHRoaXMpO1xuICAgIH1cblxuICAgIHAuUmV2ZXJzZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuU2V0KHRoaXMpLnJldmVyc2UoKTtcbiAgICB9XG5cbiAgICBwLmdhdGhlciA9IGZ1bmN0aW9uKC4uLmEpIHtcbiAgICAgIGEuZWEoKGUpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLmluY2x1ZGVzKGUpKSB0aGlzLmFkZChlKTtcbiAgICAgIH0pXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwLkdhdGhlciA9IGZ1bmN0aW9uKC4uLmEpIHtcbiAgICAgIGxldCB0ID0gdGhpcy5jbG9uZSgpO1xuICAgICAgYS5lYSgoZSkgPT4ge1xuICAgICAgICBpZiAoIXQuaW5jbHVkZXMoZSkpIHQuYWRkKGUpO1xuICAgICAgfSlcbiAgICAgIHJldHVybiB0O1xuICAgIH1cblxuICAgIGxldCBtYXJrID0ge307XG5cbiAgICAvL1Rocm93cyBJbnZhbGlkVmFsdWVFeGNlcHRpb24gd2hlbiB0aGUgZ2l2ZW4gdmFsdWUgY2Fubm90IGJlIGZvdW5kIHdpdGhpbmcgdGhpc1xuICAgIC8vIFRPRE86IGRpZmZlcmVudGF0ZSBpbmRleGFsbCBhbmQgaW5kZXhmaXJzdFxuICAgIHAuaW5kZXggPSBmdW5jdGlvbiguLi52YWx1ZXMpIHtcbiAgICAgIGxldCB0aGF0ID0gdGhpcy5TZXQodGhpcyk7XG4gICAgICBsZXQgaW5kZXhlcyA9IG5ldyBBckNvbnN0cigpO1xuICAgICAgdmFsdWVzLmVhKCh2KSA9PiB7XG4gICAgICAgIGlmKCF0aGlzLmluY2x1ZGVzKHYpKSB0aHJvdyBuZXcgSW52YWxpZFZhbHVlRXhjZXB0aW9uKHYsdGhpcyk7XG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgbGV0IGluZGV4ID0gdGhhdC5pbmRleE9mKHYpO1xuICAgICAgICAgIGlmIChpbmRleGVzLmxhc3QgIT09IGluZGV4ICYmIGluZGV4ICE9PSAtMSl7XG4gICAgICAgICAgICBpbmRleGVzLmFkZChpbmRleCk7XG4gICAgICAgICAgICB0aGF0W2luZGV4XSA9IG1hcms7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGluZGV4ZXM7XG4gICAgfVxuICAgIC8vVGhyb3dzIEluZGV4T3V0T2ZCb3VuZHNFeGNlcHRpb24gd2hlbiBnaXZlbiBpbmRleCBpcyBvdXQgb2YgYm91bmRzIG9mIHRoaXNcbiAgICBwLnJlbW92ZUkgPSBmdW5jdGlvbiguLi5pbmRpY2VzKSB7XG4gICAgICBsZXQgcm9sbGJhY2sgPSB0aGlzLlNldCh0aGlzKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5kaWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlzSW5kZXgoaW5kaWNlc1tpXSwgdGhpcylcbiAgICAgICAgICB0aGlzW2luZGljZXNbaV1dID0gbWFyaztcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAodGhpc1tpXSA9PT0gbWFyaykge1xuICAgICAgICAgICAgdGhpcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICBpLS07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChlIGluc3RhbmNlb2YgSW5kZXhPdXRPZkJvdW5kc0V4Y2VwdGlvbikgdGhpcy5zZXQocm9sbGJhY2spO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHAucm1JID0gcC5yZW1vdmVJO1xuICAgIC8vVGhyb3dzIEluZGV4T3V0T2ZCb3VuZHNFeGNlcHRpb24gd2hlbiBnaXZlbiBpbmRleCBpcyBvdXQgb2YgYm91bmRzIG9mIHRoaXNcbiAgICBwLlJlbW92ZUkgPSBmdW5jdGlvbiguLi5pbmRpY2VzKSB7XG4gICAgICByZXR1cm4gdGhpcy5TZXQodGhpcykucmVtb3ZlSSguLi5pbmRpY2VzKTtcbiAgICB9XG4gICAgcC5SbUkgPSBwLlJlbW92ZUk7XG5cbiAgICAvL1Rocm93cyBJbnZhbGlkVmFsdWVFeGNlcHRpb24gd2hlbiB0aGUgZ2l2ZW4gdmFsdWUgY2Fubm90IGJlIGZvdW5kIHdpdGhpbmcgdGhpc1xuICAgIHAucmVtb3ZlViA9IGZ1bmN0aW9uKC4uLnZhbHVlcykge1xuICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlSSguLi50aGlzLmluZGV4KC4uLnZhbHVlcykpO1xuICAgIH1cbiAgICBwLnJtViA9IHAucmVtb3ZlVjtcblxuICAgIC8vVGhyb3dzIEludmFsaWRWYWx1ZUV4Y2VwdGlvbiB3aGVuIHRoZSBnaXZlbiB2YWx1ZSBjYW5ub3QgYmUgZm91bmQgd2l0aGluZyB0aGlzXG4gICAgcC5SZW1vdmVWID0gZnVuY3Rpb24oLi4udmFsdWVzKSB7XG4gICAgICByZXR1cm4gdGhpcy5TZXQodGhpcykucmVtb3ZlViguLi52YWx1ZXMpO1xuICAgIH1cbiAgICBwLlJtViA9IHAuUmVtb3ZlVjtcblxuICAgIC8vVGhyb3dzIEludmFsaWRWYWx1ZUV4Y2VwdGlvbiB3aGVuIHRoZSBnaXZlbiBwYXJhbSBpcyBkZXRlY3RlZCBhcyB2YWx1ZSBidXQgY2Fubm90IGJlIGZvdW5kIHdpdGhpbmcgdGhpc1xuICAgIHAucmVtb3ZlID0gZnVuY3Rpb24oLi4udmFsdWVPckluZGV4KSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLnJlbW92ZUkoLi4udmFsdWVPckluZGV4KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBJbmRleE91dE9mQm91bmRzRXhjZXB0aW9uKSB0aGlzLnJlbW92ZVYoLi4udmFsdWVPckluZGV4KTtcbiAgICAgICAgZWxzZSB0aHJvdyBlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHAucm0gPSBwLnJlbW92ZTtcblxuICAgIC8vVGhyb3dzIEluZGV4T3V0T2ZCb3VuZHNFeGNlcHRpb24gd2hlbiBnaXZlbiBwYXJhbSBpcyBkZXRlY3RlZCBhcyBpbmRleCBidXQgb3V0IG9mIGJvdW5kcyBvZiB0aGlzXG4gICAgLy9UaHJvd3MgSW52YWxpZFZhbHVlRXhjZXB0aW9uIHdoZW4gdGhlIGdpdmVuIHBhcmFtIGlzIGRldGVjdGVkIGFzIHZhbHVlIGJ1dCBjYW5ub3QgYmUgZm91bmQgd2l0aGluZyB0aGlzXG4gICAgcC5SZW1vdmUgPSBmdW5jdGlvbiguLi52YWx1ZU9ySW5kZXgpIHtcbiAgICAgIHJldHVybiB0aGlzLlNldCh0aGlzKS5yZW1vdmUoLi4udmFsdWVPckluZGV4KTtcbiAgICB9XG4gICAgcC5SbSA9IHAuUmVtb3ZlO1xuXG4gICAgcC5HZXQgPSBmdW5jdGlvbiguLi5pbmRleGVzKSB7XG4gICAgICBsZXQgbiA9IFtdO1xuICAgICAgaW5kZXhlcy5mbGF0KEluZmluaXR5KS5mb3JFYWNoKChpKSA9PiB7XG4gICAgICAgIG4uYWRkKHRoaXNbaV0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbjtcbiAgICB9XG4gICAgcC5nZXQgPSBmdW5jdGlvbiguLi5pbmRleGVzKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXQodGhpcy5HZXQoLi4uaW5kZXhlcykpXG4gICAgfVxuXG4gICAgcC5kZGEgPSBmdW5jdGlvbiguLi52YWx1ZXMpIHtcbiAgICAgIHJldHVybiB0aGlzLnJldmVyc2UoKS5hZGQoLi4udmFsdWVzKS5yZXZlcnNlKCk7XG4gICAgfVxuICAgIHAuRGRhID0gZnVuY3Rpb24oLi4udmFsdWVzKSB7XG4gICAgICByZXR1cm4gdGhpcy5SZXZlcnNlKCkuYWRkKC4uLnZhbHVlcykucmV2ZXJzZSgpO1xuICAgIH1cblxuICAgIC8vVGhyb3dzIEluZGV4T3V0T2ZCb3VuZHNFeGNlcHRpb24gd2hlbiBnaXZlbiBpbmRleCBpcyBvdXQgb2YgYm91bmRzIG9mIGFcbiAgICBwLnJlbSA9IGZ1bmN0aW9uKGFtb3VudCkge1xuICAgICAgaXNJbmRleChhbW91bnQsdGhpcyk7XG4gICAgICB0aGlzLmxlbmd0aCAtPSBhbW91bnQ7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLy9UaHJvd3MgSW5kZXhPdXRPZkJvdW5kc0V4Y2VwdGlvbiB3aGVuIGdpdmVuIGluZGV4IGlzIG91dCBvZiBib3VuZHMgb2YgYVxuICAgIHAuUmVtID0gZnVuY3Rpb24oYW1vdW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5TZXQodGhpcykucmVtKGFtb3VudCk7XG4gICAgfVxuXG4gICAgLy9UaHJvd3MgSW5kZXhPdXRPZkJvdW5kc0V4Y2VwdGlvbiB3aGVuIGdpdmVuIGluZGV4IGlzIG91dCBvZiBib3VuZHMgb2YgYVxuICAgIHAubWVyID0gZnVuY3Rpb24oYW1vdW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXZlcnNlKCkucmVtKGFtb3VudCkucmV2ZXJzZSgpO1xuICAgIH1cbiAgICAvL1Rocm93cyBJbmRleE91dE9mQm91bmRzRXhjZXB0aW9uIHdoZW4gZ2l2ZW4gaW5kZXggaXMgb3V0IG9mIGJvdW5kcyBvZiBhXG4gICAgcC5NZXIgPSBmdW5jdGlvbihhbW91bnQpIHtcbiAgICAgIHJldHVybiB0aGlzLlJldmVyc2UoKS5yZW0oYW1vdW50KS5yZXZlcmVzZSgpO1xuICAgIH1cblxuICAgIC8vVGhyb3dzIEluZGV4T3V0T2ZCb3VuZHNFeGNlcHRpb24gd2hlbiBnaXZlbiBpbmRleChlcykgYXJlIG91dCBvZiBib3VuZHMgb2YgdGhpc1xuICAgIC8vVGhyb3dzIEludmFsaWRJbnB1dEV4Y2VwdGlvbiB3aGVuIGdpdmVuIHBhcmFtZXRlcnMgYXJlIG5vdCBlcXVhbCBpbiBsZW5ndGhcbiAgICBwLnN3YXBJID0gZnVuY3Rpb24oaTEsIGkyKSB7XG4gICAgICBpMSA9IFtpMV0uZmxhdChJbmZpbml0eSk7XG4gICAgICBpMiA9IFtpMl0uZmxhdChJbmZpbml0eSk7XG4gICAgICBpZihpMS5sZW5ndGggPT09IGkyLmxlbmd0aCkge1xuICAgICAgICBsZXQgcm9sbGJhY2sgPSB0aGlzLlNldCh0aGlzKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGkxLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpc0luZGV4KGkxW2ldLHRoaXMpO1xuICAgICAgICAgICAgaXNJbmRleChpMltpXSx0aGlzKTtcbiAgICAgICAgICAgIFt0aGlzW2kxW2ldXSx0aGlzW2kyW2ldXV0gPSBbdGhpc1tpMltpXV0sdGhpc1tpMVtpXV1dO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGlmKGUgaW5zdGFuY2VvZiBJbmRleE91dE9mQm91bmRzRXhjZXB0aW9uKSB0aGlzLnNldChyb2xsYmFjayk7XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBJbnZhbGlkSW5wdXRFeGNlcHRpb24oXCJQYXJhbWV0ZXIgaTEgYW5kIGkyIG11c3QgZXRoZXIgYmUgdHdvIGluZGV4ZXMsIG9yIHR3byBpbmRleC1BcnJheXMgb2YgdGhlIHNhbWUgbGVuZ3RoLlwiKTtcbiAgICB9XG4gICAgLy9UaHJvd3MgSW5kZXhPdXRPZkJvdW5kc0V4Y2VwdGlvbiB3aGVuIGdpdmVuIGluZGV4KGVzKSBhcmUgb3V0IG9mIGJvdW5kcyBvZiB0aGlzXG4gICAgLy9UaHJvd3MgSW52YWxpZElucHV0RXhjZXB0aW9uIHdoZW4gZ2l2ZW4gcGFyYW1ldGVycyBhcmUgbm90IGVxdWFsIGluIGxlbmd0aFxuICAgIHAuU3dhcEkgPSBmdW5jdGlvbihpMSwgaTIpIHtcbiAgICAgIHJldHVybiB0aGlzLlNldCh0aGlzKS5zd2FwSShpMSwgaTIpO1xuICAgIH1cblxuICAgIC8vVGhyb3dzIEludmFsaWRWYWx1ZUV4Y2VwdGlvbiB3aGVuIHRoZSBnaXZlbiB2YWx1ZSBjYW5ub3QgYmUgZm91bmQgd2l0aGluZyB0aGlzXG4gICAgLy9UaHJvd3MgSW52YWxpZElucHV0RXhjZXB0aW9uIHdoZW4gZ2l2ZW4gcGFyYW1ldGVycyBhcmUgbm90IGVxdWFsIGluIGxlbmd0aFxuICAgIHAuc3dhcFYgPSBmdW5jdGlvbih2MSwgdjIpIHtcbiAgICAgIHYxID0gdGhpcy5TZXQodjEpLmZsYXQoMik7XG4gICAgICB2MiA9IHRoaXMuU2V0KHYyKS5mbGF0KDIpO1xuICAgICAgaWYgKHYxLmxlbmd0aCA9PT0gdjIubGVuZ3RoKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdjEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0aGlzLnN3YXBJKHRoaXMuaW5kZXgodjFbaV0pLHRoaXMuaW5kZXgodjJbaV0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBJbnZhbGlkSW5wdXRFeGNlcHRpb24oXCJQYXJhbWV0ZXIgdjEgYW5kIHYyIG11c3QgZXRoZXIgYmUgdHdvIHZhbHVlcywgb3IgdHdvIHZhbHVlLUFycmF5cyBvZiB0aGUgc2FtZSBsZW5ndGguXCIpO1xuICAgIH1cbiAgICAvL1Rocm93cyBJbnZhbGlkVmFsdWVFeGNlcHRpb24gd2hlbiB0aGUgZ2l2ZW4gdmFsdWUgY2Fubm90IGJlIGZvdW5kIHdpdGhpbmcgdGhpc1xuICAgIC8vVGhyb3dzIEludmFsaWRJbnB1dEV4Y2VwdGlvbiB3aGVuIGdpdmVuIHBhcmFtZXRlcnMgYXJlIG5vdCBlcXVhbCBpbiBsZW5ndGhcbiAgICBwLlN3YXBWID0gZnVuY3Rpb24odjEsIHYyKSB7XG4gICAgICByZXR1cm4gdGhpcy5TZXQodGhpcykuc3dhcFYodjEsIHYyKTtcbiAgICB9XG5cbiAgICAvL1Rocm93cyBJbmRleE91dE9mQm91bmRzRXhjZXB0aW9uIHdoZW4gZ2l2ZW4gcGFyYW0gaXMgZGV0ZWN0ZWQgYXMgaW5kZXggYnV0IG91dCBvZiBib3VuZHMgb2YgdGhpc1xuICAgIC8vVGhyb3dzIEludmFsaWRWYWx1ZUV4Y2VwdGlvbiB3aGVuIHRoZSBnaXZlbiBwYXJhbSBpcyBkZXRlY3RlZCBhcyB2YWx1ZSBidXQgY2Fubm90IGJlIGZvdW5kIHdpdGhpbmcgdGhpc1xuICAgIHAuc3dhcCA9IGZ1bmN0aW9uKHZpMSwgdmkyKSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLnN3YXBJKHZpMSwgdmkyKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBJbmRleE91dE9mQm91bmRzRXhjZXB0aW9uKSB0aGlzLnN3YXBWKHZpMSwgdmkyKTtcbiAgICAgICAgZWxzZSB0aHJvdyBlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8vVGhyb3dzIEluZGV4T3V0T2ZCb3VuZHNFeGNlcHRpb24gd2hlbiBnaXZlbiBwYXJhbSBpcyBkZXRlY3RlZCBhcyBpbmRleCBidXQgb3V0IG9mIGJvdW5kcyBvZiB0aGlzXG4gICAgLy9UaHJvd3MgSW52YWxpZFZhbHVlRXhjZXB0aW9uIHdoZW4gdGhlIGdpdmVuIHBhcmFtIGlzIGRldGVjdGVkIGFzIHZhbHVlIGJ1dCBjYW5ub3QgYmUgZm91bmQgd2l0aGluZyB0aGlzXG4gICAgcC5Td2FwID0gZnVuY3Rpb24odmkxLCB2aTIpIHtcbiAgICAgIHJldHVybiB0aGlzLlNldCh0aGlzKS5zd2FwKHZpMSwgdmkyKVxuICAgIH1cblxuICAgIHAucHJpb3IgPSBmdW5jdGlvbihpLCBieSA9IDEpIHtcbiAgICAgIGxldCByID0gaSAtIGJ5O1xuICAgICAgaWYgKHIgPj0gMCkgcmV0dXJuIHRoaXNbcl07XG4gICAgICByZXR1cm4gdGhpc1t0aGlzLmxlbmd0aC0oYnktaSldXG4gICAgfVxuICAgIHAubmV4dCA9IGZ1bmN0aW9uKGksIGJ5ID0gMSkge1xuICAgICAgbGV0IHIgPSBpICsgYnk7XG4gICAgICBpZiAociA8PSB0aGlzLmxlbmd0aC0xKSByZXR1cm4gdGhpc1tyXTtcbiAgICAgIHJldHVybiB0aGlzW2J5LShpLXRoaXMubGVuZ3RoLTEpXVxuICAgIH1cblxuICAgIHAuaW5qZWN0ID0gZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgIHRoaXMuc3BsaWNlKGluZGV4LCAwLCBpdGVtKTtcbiAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgcC5jb250YWlucyA9IGZ1bmN0aW9uKC4uLnZhbHMpIHtcbiAgICAgIGZvciAobGV0IHYgb2YgdmFscykge1xuICAgICAgICBpZiAoIXRoaXMuaW5jbHVkZXModikpIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgcC5leGNsdWRlcyA9IGZ1bmN0aW9uKC4uLnZhbHMpIHtcbiAgICAgIGZvciAobGV0IHYgb2YgdmFscykge1xuICAgICAgICBpZiAodGhpcy5pbmNsdWRlcyh2KSkgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIHJldHVybiBBckNvbnN0clxuICB9XG4gIGluaXQuRXhjZXB0aW9uID0gRXhjZXB0aW9uO1xuICBpbml0LkluZGV4T3V0T2ZCb3VuZHNFeGNlcHRpb24gPSBJbmRleE91dE9mQm91bmRzRXhjZXB0aW9uO1xuICBpbml0LkludmFsaWRJbnB1dEV4Y2VwdGlvbiA9IEludmFsaWRJbnB1dEV4Y2VwdGlvbjtcbiAgaW5pdC5JbnZhbGlkQ29uc3RydWN0b3JFeGNlcHRpb24gPSBJbnZhbGlkQ29uc3RydWN0b3JFeGNlcHRpb247XG4gIGluaXQuSW52YWxpZFZhbHVlRXhjZXB0aW9uID0gSW52YWxpZFZhbHVlRXhjZXB0aW9uO1xuICAvL2luaXQudmVyc2lvbiA9IFwidW5rbm93blwiO1xuICByZXR1cm4gaW5pdDtcbn0oKSk7XG4iLCJpbXBvcnQgaW5pdCBmcm9tIFwiLi8uLi9lZG9tXCI7XHJcbmNvbnNvbGUubG9nKGluaXQpO1xyXG5jb25zb2xlLmxvZyhcIndvcmtcIik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=