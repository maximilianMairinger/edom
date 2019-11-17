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
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return init; });
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
                    that[prop] = end;
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
    //@ts-ignore
    global.transfromProps = transfromProps;
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
    function splitTransformPropsIntoKeyVal(val) {
        val = val.replace(/( |\t)/g, "");
        let ar = val.split(")");
        //@ts-ignore
        ar.rmI(ar.length - 1);
        let end = [];
        ar.forEach((e) => {
            let l = e.split("(");
            end.push({ key: l[0], val: l[1] });
        });
        return end;
    }
    let splitValueFromUnit = (() => {
        let val;
        return function splitValueFromUnit(value) {
            val = value;
            let max = val.length - 1;
            console.log(max);
            let edge = max - 2;
            if (!isEdge(edge)) {
                edge = max - 3;
                if (!isEdge(edge)) {
                    edge = max - 1;
                    if (!isEdge(edge)) {
                        edge = max;
                        if (!isEdge(edge)) {
                            let gotIt = false;
                            for (let i = max - 4; i < 0; i--) {
                                if (isEdge(i)) {
                                    gotIt = true;
                                    break;
                                }
                            }
                            if (gotIt === false)
                                throw "InvalidUnable to find Unit - Value Seperation in \"" + value + "\"";
                        }
                    }
                }
            }
            edge++;
            return { val: +val.substr(0, edge), unit: val.substr(edge) };
        };
        function isEdge(at) {
            return !isNaN(+val[at]) && isNaN(+val[at + 1]);
        }
    })();
    class TransformProp {
        constructor(transform_clone) {
            this.primitives = {};
            this.changed = false;
            this.store = "none";
            if (transform_clone) {
                if (transform_clone instanceof TransformProp) {
                    for (let k in transform_clone.primitives) {
                        this.primitives[k] = transform_clone.primitives[k];
                    }
                    this.changed = transform_clone.changed;
                    this.store = transform_clone.store;
                }
                else
                    this.transform = transform_clone;
            }
        }
        set translate(to) {
            if (!(to instanceof Array))
                to = to.split(",");
            this.allocate(to, ["translateX", "translateY", "translateZ"]);
        }
        // TODO maybe split this up and return a number[] of the translates; this would have to be consitently implemented through all css (like margin or padding)
        get translate() {
            return this.combineVals("translateX", "translateY", "translateZ");
        }
        set scale(to) {
            if (!(to instanceof Array))
                to = to.split(",");
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
            return [scaleX, scaleY, scaleZ];
        }
        set skew(to) {
            if (!(to instanceof Array))
                to = to.split(",");
            this.allocate(to, ["skewX", "skewY"]);
        }
        get skew() {
            return this.combineVals("skewX", "skewY");
        }
        set matrix(to) {
            if (to instanceof Array)
                to = to.join(",");
            this.decomposeMatrix("matrix(" + to + ")");
        }
        set matrix3d(to) {
            if (to instanceof Array)
                to = to.join(",");
            this.decomposeMatrix("matrix3d(" + to + ")");
        }
        set transform(to) {
            if (to === "none")
                return;
            let ar = splitTransformPropsIntoKeyVal(to);
            let ordered = {};
            ar.ea((e) => {
                let t = ordered[e.key] === undefined ? ordered[e.key] = [] : ordered[e.key];
                t.add(e.val);
            });
            for (let k in ordered) {
                if (TransformProp.umbrellaTransformProps.includes(k)) {
                    this.decomposeMatrix(to);
                    return;
                }
            }
            for (let k in ordered) {
                let t = ordered[k];
                if (t.length === 1) {
                    this[k] = t.first;
                    return;
                }
                else if (!(t instanceof Array)) {
                    let split = [];
                    t.ea((e) => {
                        split.add(splitValueFromUnit(e.val));
                    });
                    let unit = split.first.unit;
                    let canCompose = true;
                    for (let i = 0; i < split.length; i++) {
                        if (split[i].unit !== unit)
                            canCompose = false;
                    }
                    if (canCompose) {
                        let val = 0;
                        split.ea((e) => {
                            val += e.val;
                        });
                        this[k] = val + unit;
                        delete ordered[k];
                    }
                }
            }
            let rest = "";
            for (let k in ordered) {
                rest += k + "(" + ordered[k] + ") ";
            }
            this.decomposeMatrix(rest);
        }
        decomposeMatrix(to) {
            let dec = decompose_dommatrix__WEBPACK_IMPORTED_MODULE_3___default()(new DOMMatrix(to));
            let skew = dec.skewXY;
            delete dec.skewXY;
            delete dec.skewXZ;
            delete dec.skewYZ;
            for (let d in dec) {
                //@ts-ignore
                if (dec[d] !== TransformProp.primitiveDefaults[d])
                    this[d] = formatStyle(d, dec[d], false);
            }
            if (skew !== TransformProp.primitiveDefaults.skewX)
                this.skewX = formatStyle("skewX", skew, false);
        }
        combineVals(...vals) {
            let s = "";
            vals.ea((val) => {
                let e = this[val];
                if (e !== TransformProp.primitiveDefaults[val] + unitIndex[val])
                    s += e + ",";
            });
            return s.length === 0 ? TransformProp.primitiveDefaults[vals.first] + unitIndex[vals.first] : s.substr(0, s.length - 1);
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
                        if (this.primitives[prop] !== TransformProp.primitiveDefaults[prop] + unitIndex[prop])
                            this.store += prop + TransformProp.clampOpen + this.primitives[prop] + TransformProp.clampClose;
                }
            }
            return this.store || "none";
        }
    }
    TransformProp.primitiveDefaults = {
        translateX: 0,
        translateY: 0,
        translateZ: 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        skewX: 0,
        skewY: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1
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
    let hasPx = ["x", "y", "z", "translateX", "translateY", "translateZ", "skewX", "skewY", "rotate", "rotate3d", "translate", "translate3d", "skew", "backgroundSize", "border", "borderBottom", "borderBottomLeftRadius", "borderBottomRightRadius", "borderBottomWidth", "borderLeft", "borderLeftWidth", "borderRadius", "borderRight", "borderRightWidth", "borderTop", "borderTopLeftRadius", "borderTopRightRadius", "borderTopWidth", "borderWidth", "bottom", "columnGap", "columnRuleWidth", "columnWidth", "columns", "flexBasis", "font", "fontSize", "gridColumnGap", "gridGap", "gridRowGap", "height", "left", "letterSpacing", "lineHeight", "margin", "marginBottom", "marginLeft", "marginRight", "marginTop", "maskSize", "maxHeight", "maxWidth", "minHeight", "minWidth", "outline", "outlineOffset", "outlineWidth", "padding", "paddingBottom", "paddingLeft", "paddingRight", "paddingTop", "perspective", "right", "shapeMargin", "tabSize", "top", "width", "wordSpacing"];
    let hasDeg = ["rotateX", "rotateY", "rotateZ", "rotate"];
    let px = "px";
    let unitIndex = {};
    hasPx.ea((e) => {
        unitIndex[e] = px;
    });
    let deg = "deg";
    hasDeg.ea((e) => {
        unitIndex[e] = deg;
    });
    TransformProp.primitiveTransformProps.ea((prop) => {
        Object.defineProperty(TransformProp.prototype, prop, {
            get() {
                return this.primitives[prop] || TransformProp.primitiveDefaults[prop] + unitIndex[prop];
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
                    t.transform = getComputedStyle(this).transform;
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
        let thisTransProps = getTransformProps(this);
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
            debugger;
            let copyProps = new TransformProp(thisTransProps);
            notAlreadyFormattedFrames.ea((frame) => {
                formatAnimationCss(frame, copyProps);
            });
            allKeys = evaluateAllKeys(frames);
            endFrames = frames;
        }
        else {
            debugger;
            formatAnimationCss(frame_frames, new TransformProp(thisTransProps));
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
                    thisTransProps.transform = getComputedStyle(this).transform;
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
                        thisTransProps.transform = lastFrame.transform;
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
                        thisTransProps.transform = getComputedStyle(this).transform;
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
                                        //@ts-ignore
                                        thisTransProps.transform = currentFrame.transform;
                                        elemsWithoutConsitentTransformProps.rm(elemsWithoutConsitentTransformPropsKey);
                                        first = true;
                                        let transform = thisTransProps.toString();
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
                debugger;
                let t = new TransformProp();
                //@ts-ignore
                t.transform = cs.transform;
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
    on(type, listener) {
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
    off(type, listener) {
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
        // We ll only use methods here that are avalable to EventTargets here (on, off)
        //@ts-ignore
        if (nodes instanceof Array)
            this.p.nodes = new NodeLs(...nodes);
        //@ts-ignore
        else
            this.p.nodes = new NodeLs(nodes);
        if (enable)
            this.enable();
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
    //@ts-ignore
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

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

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


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

const c = function (query) {
    return document.childs(query);
};
window.addEventListener("load", () => {
    Object(_edom__WEBPACK_IMPORTED_MODULE_0__["default"])().then(() => {
        let elem = c("#test")[0];
        console.log("rdy");
        elem.anim({
            translateX: [200, 600],
        }, { duration: 4000 });
    });
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZWRvbS50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmV6aWVyLWVhc2luZy9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Rhc2gtY2FtZWxjYXNlL2Rpc3QvZGFzaC1jYW1lbGNhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RlY29tcG9zZS1kb21tYXRyaXgvZGlzdC9kZWNvbXBvc2VET01NYXRyaXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Zyb250LWRiL2Rpc3QvZGF0YUJhc2UuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMveHJyYXkveHJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vdGVzdC90ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7Ozs7UUFJQTtRQUNBO1FBQ0EsbURBQW1ELHdJQUF3STtRQUMzTDs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7OztRQUdBOztRQUVBO1FBQ0EsaUNBQWlDOztRQUVqQztRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0Esd0JBQXdCLGtDQUFrQztRQUMxRCxNQUFNO1FBQ047UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0EsMENBQTBDLG9CQUFvQixXQUFXOztRQUV6RTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGdCQUFnQix1QkFBdUI7UUFDdkM7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNyTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0M7QUFDa0M7QUFDbEM7QUFDa0I7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQSxrQkFBa0IsaU9BQThFO0FBQ2hHO0FBQ0E7QUFDQSxrQkFBa0IsME9BQW1GLFFBQVEsYUFBYSxNQUFNLFlBQVksRUFBRTtBQUM5STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCw2Q0FBNkM7QUFDN0M7QUFDQSxTQUFTLEVBQUU7QUFDWCw4Q0FBOEM7QUFDOUM7QUFDQSxTQUFTLEVBQUU7QUFDWCxnREFBZ0Q7QUFDaEQ7QUFDQSxTQUFTLEVBQUU7QUFDWCw0Q0FBNEM7QUFDNUM7QUFDQSxTQUFTLEVBQUU7QUFDWCw2Q0FBNkM7QUFDN0M7QUFDQSxTQUFTLEVBQUU7QUFDWCw0Q0FBNEM7QUFDNUM7QUFDQSxTQUFTLEVBQUU7QUFDWCw2Q0FBNkM7QUFDN0M7QUFDQSxTQUFTLEVBQUU7QUFDWCx3Q0FBd0M7QUFDeEM7QUFDQSxTQUFTLEVBQUU7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsdUJBQXVCO0FBQzdDLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELE9BQU87QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLG1DQUFtQyxrQkFBa0I7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDBEQUFlO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQWtFLGFBQWE7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsdUJBQXVCLG1CQUFtQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNGQUFzRixJQUFJO0FBQzFGO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixtQkFBbUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxtQkFBbUI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsbUJBQW1CO0FBQ2hFLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsbUJBQW1CO0FBQ2hFLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDZDQUFJO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0VBQXdFLGdCQUFnQixHQUFHLHdDQUF3QztBQUNuSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsU0FBUztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsUUFBUSxFQUFFO0FBQ2xEO0FBQ0E7QUFDQSwyQ0FBMkMsS0FBSyxFQUFFO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1CQUFtQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxPQUFPO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFNBQVM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsd0JBQXdCO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsNkNBQUk7QUFDOUMsc0NBQXNDLDBCQUEwQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsY0FBYyxrQkFBa0IsZUFBZTtBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGdCQUFnQixHQUFHLGdCQUFnQjtBQUNuRTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFHQUFxRztBQUMxSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsc0VBQWU7QUFDOUI7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHNFQUFlO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG9EQUFHO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3Z3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsdUJBQXVCLG9DQUFvQztBQUMzRCx1QkFBdUIsOEJBQThCO0FBQ3JELHVCQUF1QixrQkFBa0I7O0FBRXpDO0FBQ0Esb0NBQW9DLDhEQUE4RDs7QUFFbEc7QUFDQSxrQ0FBa0Msc0VBQXNFOztBQUV4RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsdUJBQXVCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVSxtRUFBbUU7QUFDN0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMxR2E7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0EsSUFBSSxJQUF5RDtBQUM3RDtBQUNBLE1BQU0sRUFLbUM7QUFDekMsQ0FBQztBQUNELG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxnQ0FBZ0M7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFLGtCQUFrQjtBQUNsRjtBQUNBLHlEQUF5RCxjQUFjO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELGlDQUFpQztBQUNsRix3SEFBd0gsbUJBQW1CLEVBQUU7QUFDN0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDBCQUEwQixFQUFFO0FBQy9ELHlDQUF5QyxlQUFlO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsK0RBQStEO0FBQzdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaURBQWlELHFHQUFxRywyQkFBMkIsRUFBRSxFQUFFLDJKQUEySiwwTkFBME4sa0RBQWtELDZCQUE2QixpQkFBaUIsaUJBQWlCLG1GQUFtRiw0QkFBNEIsY0FBYyxjQUFjLGtEQUFrRCxZQUFZLEVBQUUsU0FBUyxHQUFHLE9BQU8sS0FBSyw4R0FBOEcsR0FBRzs7QUFFLytCLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaURBQWlELHFHQUFxRyx3QkFBd0IsRUFBRSxFQUFFLDJKQUEySixvS0FBb0ssZ0xBQWdMLCtrQkFBK2tCLHNDQUFzQyxvQ0FBb0MsK0JBQStCLDhCQUE4QixxQ0FBcUMseUpBQXlKLE9BQU8sT0FBTyxvQ0FBb0MsS0FBSyw0RUFBNEUsNkJBQTZCLGlCQUFpQixpQkFBaUIsdUVBQXVFLEtBQUssMkpBQTJKLDRIQUE0SCxnTUFBZ00sK0pBQStKLHVKQUF1Siw0SEFBNEgsd0JBQXdCLG9MQUFvTCwrSkFBK0osNEhBQTRILCtKQUErSixvSkFBb0osNEhBQTRILHdCQUF3Qix3QkFBd0IsNFVBQTRVLDZHQUE2RyxxQkFBcUIsT0FBTyxPQUFPLHVCQUF1QixzQ0FBc0Msc0NBQXNDLHNDQUFzQyxPQUFPLEtBQUssMEtBQTBLLHVJQUF1SSx1SUFBdUksdUlBQXVJLDhEQUE4RCxxQ0FBcUMsS0FBSyw0REFBNEQscUNBQXFDLEtBQUssNERBQTRELHFDQUFxQyxLQUFLLDZGQUE2Riw4SEFBOEgsb1JBQW9SLEtBQUssT0FBTyxrSEFBa0gsS0FBSyxnRUFBZ0UsOHpCQUE4ekIsR0FBRzs7QUFFem1OLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaURBQWlELHFHQUFxRywrQkFBK0IsRUFBRSxFQUFFLG9LQUFvSyw2SkFBNkosaURBQWlELDBDQUEwQyx3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0IsbUNBQW1DLHVDQUF1QyxrQ0FBa0MsMERBQTBELEtBQUssaUNBQWlDLDREQUE0RCxLQUFLLHVlQUF1ZSxLQUFLOztBQUU5NkMsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpREFBaUQscUdBQXFHLDJCQUEyQixFQUFFLEVBQUUsa0pBQWtKLCtDQUErQywyRUFBMkUsR0FBRzs7QUFFcGMsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpREFBaUQsb0dBQW9HLGVBQWUsRUFBRSxFQUFFLHVHQUF1RyxrQkFBa0IsRUFBRSxFQUFFLHdHQUF3RyxtQkFBbUIsRUFBRSxFQUFFLDBHQUEwRyxxQkFBcUIsRUFBRSxFQUFFLCtHQUErRywwQkFBMEIsRUFBRSxFQUFFLDBMQUEwTCxrSUFBa0ksR0FBRyx5REFBeUQsMEpBQTBKLEdBQUcsMkNBQTJDLDZIQUE2SCxHQUFHLDZDQUE2Qyx5TUFBeU0sR0FBRyw4RUFBOEUscU5BQXFOLEdBQUc7O0FBRW41RCxPQUFPOztBQUVQLFVBQVU7QUFDVixDQUFDLEU7Ozs7Ozs7Ozs7OztBQy9KWTtBQUNiO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVELFlBQVksbUJBQU8sQ0FBQyw0Q0FBTztBQUMzQjtBQUNBLE9BQU8sd0JBQXdCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGdCQUFnQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixnQkFBZ0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsbUJBQW1CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNwaEJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1Qzs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0dBQXNHO0FBQ3RHO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixtQkFBbUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0NBQWdDLGNBQWM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGNBQWM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUNBQXVDO0FBQ3ZDO0FBQ0EsTUFBTTs7QUFFTixzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBLE1BQU07O0FBRU4sNENBQTRDO0FBQzVDO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0QztBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOLHVDQUF1QztBQUN2QztBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixvQkFBb0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGlCQUFpQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGVBQWU7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixlQUFlO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2pYRDtBQUFBO0FBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxREFBSTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxHQUFHLGlCQUFpQjtBQUM3QixLQUFLO0FBQ0wsQ0FBQyIsImZpbGUiOiJ0ZXN0L2Rpc3QvbWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcblxuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHR9O1xuXG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuXG5cbiBcdC8vIHNjcmlwdCBwYXRoIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBqc29ucFNjcmlwdFNyYyhjaHVua0lkKSB7XG4gXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcInRlc3QvZGlzdC9cIiArICh7XCJ2ZW5kb3JzfnJlc2l6ZU9ic2VydmVyUG9seWZpbGxcIjpcInZlbmRvcnN+cmVzaXplT2JzZXJ2ZXJQb2x5ZmlsbFwiLFwidmVuZG9yc353ZWJBbmltYXRpb25zQXBpUG9seWZpbGxcIjpcInZlbmRvcnN+d2ViQW5pbWF0aW9uc0FwaVBvbHlmaWxsXCJ9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLmpzXCJcbiBcdH1cblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblxuIFx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cbiBcdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG4gXHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XTtcbiBcdFx0XHRcdH0pO1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlKTtcblxuIFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuIFx0XHRcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuIFx0XHRcdFx0dmFyIG9uU2NyaXB0Q29tcGxldGU7XG5cbiBcdFx0XHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04JztcbiBcdFx0XHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuIFx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcbiBcdFx0XHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0c2NyaXB0LnNyYyA9IGpzb25wU2NyaXB0U3JjKGNodW5rSWQpO1xuXG4gXHRcdFx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG4gXHRcdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcbiBcdFx0XHRcdG9uU2NyaXB0Q29tcGxldGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiBcdFx0XHRcdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuIFx0XHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuIFx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG4gXHRcdFx0XHRcdHZhciBjaHVuayA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0XHRcdFx0aWYoY2h1bmsgIT09IDApIHtcbiBcdFx0XHRcdFx0XHRpZihjaHVuaykge1xuIFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcbiBcdFx0XHRcdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG4gXHRcdFx0XHRcdFx0XHRjaHVua1sxXShlcnJvcik7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fTtcbiBcdFx0XHRcdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuIFx0XHRcdFx0XHRvblNjcmlwdENvbXBsZXRlKHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KTtcbiBcdFx0XHRcdH0sIDEyMDAwMCk7XG4gXHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlO1xuIFx0XHRcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gb24gZXJyb3IgZnVuY3Rpb24gZm9yIGFzeW5jIGxvYWRpbmdcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHsgY29uc29sZS5lcnJvcihlcnIpOyB0aHJvdyBlcnI7IH07XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi90ZXN0L3Rlc3QudHNcIik7XG4iLCJpbXBvcnQgYmF6IGZyb20gXCJiZXppZXItZWFzaW5nXCI7XHJcbmltcG9ydCB7IGNhbWVsQ2FzZVRvRGFzaCwgZGFzaFRvQ2FtZWxDYXNlIH0gZnJvbSBcImRhc2gtY2FtZWxjYXNlXCI7XHJcbmltcG9ydCB7IERhdGEgfSBmcm9tIFwiZnJvbnQtZGJcIjtcclxuaW1wb3J0IGRlY29tcG9zZU1hdHJpeCBmcm9tIFwiZGVjb21wb3NlLWRvbW1hdHJpeFwiO1xyXG4vLyBUT0RPOiBtYWtlIGFuaW0gb25seSBhdmFpbGFibGUgb24gSFRNTEVsZW1lbnQgc2luY2UgYW5pbWF0ZSBpcyBub3Qgc3VwcG9ydGVkIG9uIEV2ZW50VHJhZ2V0XHJcbi8vIElERUEgbW9kaWZ5IHByb21pc2UgcmV0dXJuZWQgYnkgYW5pbSBzbyB0aGF0IHlvdSBjYW4gZ2l2ZSBhIHN0cmluZyBhcyB0aGVuIGFyZyB3aGljaCBnZXRzIGV4ZWN0dXRlZCB3aXRoIHRoaXMgY29udGV4dFxyXG4vL0B0cy1pZ25vcmVcclxubGV0IFJlc09icztcclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIGxldCBwcm9tcyA9IFtdO1xyXG4gICAgaWYgKEVsZW1lbnQucHJvdG90eXBlLmFuaW1hdGUgPT09IHVuZGVmaW5lZClcclxuICAgICAgICBwcm9tcy5hZGQoaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwid2ViQW5pbWF0aW9uc0FwaVBvbHlmaWxsXCIgKi8gXCJ3ZWItYW5pbWF0aW9ucy1qc1wiKSk7XHJcbiAgICAvL0B0cy1pZ25vcmVcclxuICAgIGlmICh3aW5kb3cuUmVzaXplT2JzZXJ2ZXIgPT09IHVuZGVmaW5lZClcclxuICAgICAgICBwcm9tcy5hZGQoaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwicmVzaXplT2JzZXJ2ZXJQb2x5ZmlsbFwiICovIFwicmVzaXplLW9ic2VydmVyLXBvbHlmaWxsXCIpLnRoZW4oKHsgZGVmYXVsdDogciB9KSA9PiB7IFJlc09icyA9IHI7IH0pKTtcclxuICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgZWxzZVxyXG4gICAgICAgIFJlc09icyA9IHdpbmRvdy5SZXNpemVPYnNlcnZlcjtcclxuICAgIGF3YWl0IFByb21pc2UuYWxsKHByb21zKTtcclxuICAgIGxldCBwID0gRXZlbnRUYXJnZXQucHJvdG90eXBlO1xyXG4gICAgcC5pbnNlcnRBZnRlciA9IGZ1bmN0aW9uIChuZXdOb2RlLCByZWZlcmVuY2VOb2RlKSB7XHJcbiAgICAgICAgaWYgKHJlZmVyZW5jZU5vZGUucGFyZW50ICE9PSB0aGlzKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIGlzIG5vdCB0aGUgcGFyZW50IG9mIHJlZmVyZW5jZU5vZGUuXCIpO1xyXG4gICAgICAgIGxldCBzaWIgPSByZWZlcmVuY2VOb2RlLm5leHRTaWJsaW5nO1xyXG4gICAgICAgIGlmIChzaWIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRoaXMuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIHNpYik7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLmFwZChuZXdOb2RlKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICAoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGFUcmFuc2ZlcnMgPSB7fTtcclxuICAgICAgICBsZXQgZGF0YVRyYW5zZmVySUQgPSAwO1xyXG4gICAgICAgIGxldCByZXNpemVMaXN0ZW5lciA9IG5ldyBNYXAoKTtcclxuICAgICAgICAvL29ubHkgaW5pdCB3aGVuIG5lZWRlZCBzaW5jZSB0aGlzIGhlYXZpbHkgY29uc3VtZXMgcmVzb3VyY2VzIChjcHUpLlxyXG4gICAgICAgIGxldCBvYnM7XHJcbiAgICAgICAgbGV0IG9ic1VuZGVmaW5lZCA9IHRydWU7XHJcbiAgICAgICAgZnVuY3Rpb24gaW5pdFJlc09icygpIHtcclxuICAgICAgICAgICAgb2JzVW5kZWZpbmVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIG9icyA9IG5ldyBSZXNPYnMoKGVsZW1lbnRzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50cy5lYSgoZWxlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc2l6ZUxpc3RlbmVyLmdldChlbGVtLnRhcmdldCkuZm9yRWFjaCgoYWN0dWFsRnVuYykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWxGdW5jKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBldmVudExpc3RlbmVySW5kZXggPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgY29uc3Qga2V5ID0gXCJhZHZhbmNlZERhdGFUcmFuc2ZlcmVcIjtcclxuICAgICAgICAvL1RPRE86IGRvY3VtZW50IC8gd2luZG93Lm9uKFwicmVhZHlcIilcclxuICAgICAgICAvL1RPRE86IHJldHVybiBkYXRhIC8gb3IgcHJvbWlzZSB3aGVuIG5vIGNiIGlzIGdpdmVuXHJcbiAgICAgICAgcC5vbiA9IGZ1bmN0aW9uICguLi5hKSB7XHJcbiAgICAgICAgICAgIGxldCBpc1Jlc2l6ZSA9IGFbMF0gPT09IFwicmVzaXplXCI7XHJcbiAgICAgICAgICAgIGlmIChpc1Jlc2l6ZSAmJiB0aGlzICE9PSB3aW5kb3cpIHtcclxuICAgICAgICAgICAgICAgIGlmIChvYnNVbmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdFJlc09icygpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG1hcCA9IHJlc2l6ZUxpc3RlbmVyLmdldCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIGlmIChtYXAgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9icy5vYnNlcnZlKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcCA9IG5ldyBNYXAoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXNpemVMaXN0ZW5lci5zZXQodGhpcywgbWFwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG1hcC5zZXQoYVsxXSwgYVsxXS5iaW5kKHRoaXMpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBhY3R1YWxMaXN0ZW5lcjtcclxuICAgICAgICAgICAgICAgIGlmIChpc1Jlc2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFbMV0uYmluZCh0aGlzKShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0dWFsTGlzdGVuZXIgPSBhWzFdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoYVswXSA9PT0gXCJkcmFnc3RhcnRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFUcmFuc2ZlcklEKys7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0dWFsTGlzdGVuZXIgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnNldERhdGEgPSAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVRyYW5zZmVyc1tkYXRhVHJhbnNmZXJJRF0gPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YShrZXksIGRhdGFUcmFuc2ZlcklEKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYVsxXShlKTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoYVswXSA9PT0gXCJkcm9wXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBhY3R1YWxMaXN0ZW5lciA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuZ2V0RGF0YSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpZCA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoa2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmb3VuZCA9IGlkICE9PSBcIlwiID8gZGF0YVRyYW5zZmVyc1tpZF0gOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGRhdGFUcmFuc2ZlcnNbaWRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZvdW5kO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhWzFdKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhY3R1YWxMaXN0ZW5lciA9IGFbMV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhY3R1YWxMaXN0ZW5lciA9IGFjdHVhbExpc3RlbmVyLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGhhdCA9IGV2ZW50TGlzdGVuZXJJbmRleC5nZXQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbyA9IHsgZXZlbnQ6IGFbMF0sIGFjdHVhbExpc3RlbmVyLCB1c2VyTGlzdGVuZXI6IGFbMV0sIG9wdGlvbnM6IGFbMl0gfTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGF0ID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRMaXN0ZW5lckluZGV4LnNldCh0aGlzLCBbb10pO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuYWRkKG8pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGFbMF0sIGFjdHVhbExpc3RlbmVyLCBhWzJdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9O1xyXG4gICAgICAgIHAub2ZmID0gZnVuY3Rpb24gKC4uLmEpIHtcclxuICAgICAgICAgICAgaWYgKGFbMF0gPT09IFwicmVzaXplXCIgJiYgdGhpcyAhPT0gd2luZG93KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob2JzVW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgICAgIGluaXRSZXNPYnMoKTtcclxuICAgICAgICAgICAgICAgIGxldCBtYXAgPSByZXNpemVMaXN0ZW5lci5nZXQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAobWFwICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXAuZGVsZXRlKGFbMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXAuc2l6ZSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYnMudW5vYnNlcnZlKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNpemVMaXN0ZW5lci5kZWxldGUodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvQmVSbSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRoYXQgPSBldmVudExpc3RlbmVySW5kZXguZ2V0KHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoYXQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhWzBdICE9PSB1bmRlZmluZWQgJiYgYVsxXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuZWEoKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmV2ZW50ID09PSBhWzBdICYmIGUudXNlckxpc3RlbmVyID09PSBhWzFdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvQmVSbS5hZGQoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5lYSgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUuZXZlbnQgPT09IGFbMF0gfHwgZS51c2VyTGlzdGVuZXIgPT09IGFbMV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9CZVJtLmFkZChlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRvQmVSbS5lYSgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZS5ldmVudCwgZS5hY3R1YWxMaXN0ZW5lcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQucm0oZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoYXQuZW1wdHkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50TGlzdGVuZXJJbmRleC5kZWxldGUodGhpcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfTtcclxuICAgIH0pKCk7XHJcbiAgICBwLmxpc3RlbmVyID0gcC5saXN0ZW4gPSBwLmxzID0gZnVuY3Rpb24gKGV2ZW50LCBsaXN0ZW5lciwgcGF0Y2gpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFRlbCh0aGlzLCBldmVudCwgbGlzdGVuZXIsIHBhdGNoKTtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocCwgXCJodG1sXCIsIHtcclxuICAgICAgICBnZXQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlubmVySFRNTDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldCh0bykge1xyXG4gICAgICAgICAgICB0aGlzLmlubmVySFRNTCA9IHRvO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHAsIFwiaW5uZXJcIiwge1xyXG4gICAgICAgIHNldCh0bykge1xyXG4gICAgICAgICAgICBpZiAodG8gaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5odG1sID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBkKC4uLnRvKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0byBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaHRtbCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZCh0byk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pbm5lckhUTUwgPSB0bztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHAuYWRkQ2xhc3MgPSBmdW5jdGlvbiAoLi4uY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgcC5yZW1vdmVDbGFzcyA9IGZ1bmN0aW9uICguLi5jbGFzc05hbWUpIHtcclxuICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoLi4uY2xhc3NOYW1lKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBwLmhhc0NsYXNzID0gZnVuY3Rpb24gKC4uLmNsYXNzTmFtZSkge1xyXG4gICAgICAgIGxldCBoYXMgPSB0cnVlO1xyXG4gICAgICAgIGNsYXNzTmFtZS5lYSgoY2xzKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5jbGFzc0xpc3QuY29udGFpbnMoY2xzKSlcclxuICAgICAgICAgICAgICAgIGhhcyA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBoYXM7XHJcbiAgICB9O1xyXG4gICAgcC50b2dnbGVDbGFzcyA9IGZ1bmN0aW9uICguLi5jbGFzc05hbWUpIHtcclxuICAgICAgICBjbGFzc05hbWUuZWEoKGNscykgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5oYXNDbGFzcyhjbHMpKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVDbGFzcyhjbHMpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZENsYXNzKGNscyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgcC5hcGQgPSBmdW5jdGlvbiAoLi4uZWxlbXMpIHtcclxuICAgICAgICB0aGlzLmFwcGVuZCguLi5lbGVtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgcC5lbXB0eU5vZGVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuaHRtbCA9IFwiXCI7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgcC5oaWRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgcC5zaG93ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIHAuY2hpbGRzID0gZnVuY3Rpb24gKHNlbGVjdG9yX2RlcHRoID0gMSkge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygc2VsZWN0b3JfZGVwdGggPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTm9kZUxzKC4uLnRoaXMucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcl9kZXB0aCkpO1xyXG4gICAgICAgIGVsc2UgaWYgKHNlbGVjdG9yX2RlcHRoID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE5vZGVMcyguLi50aGlzLmNoaWxkcmVuLCAuLi5uZXcgTm9kZUxzKC4uLnRoaXMuY2hpbGRyZW4pLmNoaWxkcyhzZWxlY3Rvcl9kZXB0aCAtIDEpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBOb2RlTHMoKTtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocCwgXCJoZWlnaHRcIiwge1xyXG4gICAgICAgIGdldCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3NzKFwiaGVpZ2h0XCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0KHRvKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3NzKFwiaGVpZ2h0XCIsIHRvKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwLCBcIndpZHRoXCIsIHtcclxuICAgICAgICBnZXQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNzcyhcIndpZHRoXCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0KHRvKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3NzKFwid2lkdGhcIiwgdG8pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHAsIFwib2Zmc2V0UmlnaHRcIiwgeyBnZXQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9mZnNldExlZnQgKyB0aGlzLm9mZnNldFdpZHRoO1xyXG4gICAgICAgIH0gfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocCwgXCJvZmZzZXRCb3R0b21cIiwgeyBnZXQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9mZnNldFRvcCArIHRoaXMub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgIH0gfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocCwgXCJhYnNvbHV0ZU9mZnNldFwiLCB7IGdldCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgfSB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwLCBcIm91dGVyV2lkdGhcIiwgeyBnZXQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9mZnNldFdpZHRoO1xyXG4gICAgICAgIH0gfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocCwgXCJvdXRlckhlaWdodFwiLCB7IGdldCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgIH0gfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocCwgXCJpbm5lcldpZHRoXCIsIHsgZ2V0KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jbGllbnRXaWR0aDtcclxuICAgICAgICB9IH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHAsIFwiaW5uZXJIZWlnaHRcIiwgeyBnZXQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNsaWVudEhlaWdodDtcclxuICAgICAgICB9IH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHAsIFwicGFyZW50XCIsIHsgZ2V0KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgIH0gfSk7XHJcbiAgICBsZXQgZm9ybWF0U3R5bGUgPSAoKCkgPT4ge1xyXG4gICAgICAgIGxldCBqb2luQ29tbWEgPSBcIixcIjtcclxuICAgICAgICBsZXQgam9pblNwYWNlID0gXCIgXCI7XHJcbiAgICAgICAgZnVuY3Rpb24gZm9ybWF0U3R5bGUocHJvcCwgc3R5bGUsIHRoYXQpIHtcclxuICAgICAgICAgICAgbGV0IGVuZDtcclxuICAgICAgICAgICAgbGV0IHRyYW5zZm9ybUFwcGxpZXMgPSBUcmFuc2Zvcm1Qcm9wLmFwcGxpZXMocHJvcCk7XHJcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBsZXQgaXNBciA9IHN0eWxlIGluc3RhbmNlb2YgQXJyYXk7XHJcbiAgICAgICAgICAgIGlmIChpc0FyKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYXIgPSBbXTtcclxuICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgc3RsIG9mIHN0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXIuYWRkKGZvcm1hdFN0bChwcm9wLCBzdGwpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVuZCA9IGFyLmpvaW4odHJhbnNmb3JtQXBwbGllcyA/IGpvaW5Db21tYSA6IGpvaW5TcGFjZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgZW5kID0gZm9ybWF0U3RsKHByb3AsIHN0eWxlKTtcclxuICAgICAgICAgICAgaWYgKHRoYXQgaW5zdGFuY2VvZiBUcmFuc2Zvcm1Qcm9wKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHJhbnNmb3JtQXBwbGllcykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoYXRbcHJvcF0gPSBlbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoYXQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVuZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGF0IGluc3RhbmNlb2YgRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRyYW5zZm9ybUFwcGxpZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbWUgPSBnZXRUcmFuc2Zvcm1Qcm9wcyh0aGF0KTtcclxuICAgICAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgICAgICBtZVtwcm9wXSA9IGVuZDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVuZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZW5kO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc3BlY2lhbEZpeCA9IHtcclxuICAgICAgICAgICAgb3BhY2l0eTogXCJcIixcclxuICAgICAgICAgICAgb2Zmc2V0OiBcIlwiLFxyXG4gICAgICAgICAgICBncmlkQXJlYTogXCJcIixcclxuICAgICAgICAgICAgZmxleEdyb3c6IFwiXCIsXHJcbiAgICAgICAgICAgIHpJbmRleDogXCJcIixcclxuICAgICAgICAgICAgc2tldzogXCJkZWdcIixcclxuICAgICAgICAgICAgc2tld1g6IFwiZGVnXCIsXHJcbiAgICAgICAgICAgIHNrZXdZOiBcImRlZ1wiLFxyXG4gICAgICAgICAgICByb3RhdGU6IFwiZGVnXCIsXHJcbiAgICAgICAgICAgIHJvdGF0ZTNkOiBcImRlZ1wiLFxyXG4gICAgICAgICAgICByb3RhdGVYOiBcImRlZ1wiLFxyXG4gICAgICAgICAgICByb3RhdGVZOiBcImRlZ1wiLFxyXG4gICAgICAgICAgICByb3RhdGVaOiBcImRlZ1wiLFxyXG4gICAgICAgICAgICBzY2FsZTogXCJcIixcclxuICAgICAgICAgICAgc2NhbGUzZDogXCJcIixcclxuICAgICAgICAgICAgc2NhbGVYOiBcIlwiLFxyXG4gICAgICAgICAgICBzY2FsZVk6IFwiXCIsXHJcbiAgICAgICAgICAgIHNjYWxlWjogXCJcIixcclxuICAgICAgICAgICAgbWF0cml4OiBcIlwiLFxyXG4gICAgICAgICAgICBtYXRyaXgzZDogXCJcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiAoc3R5bGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc3R5bGUgPT09IFwibnVtYmVyXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgXCJVbmV4cGVjdGVkIHN0eWxlXCI7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGUuc3Vic3RyaW5nKDAsIDQpICE9PSBcInVybChcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUgPSBcInVybChcIiArIHN0eWxlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsYyA9IHN0eWxlLmNoYXJBdChzdHlsZS5sZW5ndGggLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobGMgIT09IFwiKVwiICYmIGxjICE9PSBcIjtcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUgKz0gXCIpXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3R5bGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGxldCBhYm5vcm1hbEtleSA9IE9iamVjdC5rZXlzKHNwZWNpYWxGaXgpO1xyXG4gICAgICAgIGZ1bmN0aW9uIGZvcm1hdFN0bChwcm9wLCBzdHlsZSkge1xyXG4gICAgICAgICAgICBsZXQgc3BlY2lhbE1ldGlhbCA9ICFwcm9wIHx8IGFibm9ybWFsS2V5LmluY2x1ZGVzKHByb3ApO1xyXG4gICAgICAgICAgICBpZiAoc3BlY2lhbE1ldGlhbCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGZpeCA9IHNwZWNpYWxGaXhbcHJvcF07XHJcbiAgICAgICAgICAgICAgICBpZiAoIWZpeClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3R5bGUudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBmaXggPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHN0eWxlID09PSBcIm51bWJlclwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3R5bGUgKyBmaXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3R5bGUudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZml4KHN0eWxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc3R5bGUgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0eWxlO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdHlsZSArIFwicHhcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZm9ybWF0U3R5bGU7XHJcbiAgICB9KSgpO1xyXG4gICAgbGV0IHRyYW5zZnJvbVByb3BzID0gbmV3IE1hcCgpO1xyXG4gICAgLy9AdHMtaWdub3JlXHJcbiAgICBnbG9iYWwudHJhbnNmcm9tUHJvcHMgPSB0cmFuc2Zyb21Qcm9wcztcclxuICAgIGZ1bmN0aW9uIGdldFRyYW5zZm9ybVByb3BzKHRoYXQpIHtcclxuICAgICAgICBsZXQgbWUgPSB0cmFuc2Zyb21Qcm9wcy5nZXQodGhhdCk7XHJcbiAgICAgICAgaWYgKG1lID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbWUgPSBuZXcgVHJhbnNmb3JtUHJvcCh0aGF0LmNzcyhcInRyYW5zZm9ybVwiKSk7XHJcbiAgICAgICAgICAgIHRyYW5zZnJvbVByb3BzLnNldCh0aGF0LCBtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtZTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGZvcm1hdENzcyhjc3MsIHRoYXQpIHtcclxuICAgICAgICBsZXQgdHJhbnNmb3JtUHJvcDtcclxuICAgICAgICBpZiAodGhhdCA9PT0gdHJ1ZSlcclxuICAgICAgICAgICAgdGhhdCA9IG5ldyBUcmFuc2Zvcm1Qcm9wKCk7XHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGNzcykge1xyXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgbGV0IHMgPSBmb3JtYXRTdHlsZShrZXksIGNzc1trZXldLCB0aGF0KTtcclxuICAgICAgICAgICAgaWYgKCEocyBpbnN0YW5jZW9mIFRyYW5zZm9ybVByb3ApKVxyXG4gICAgICAgICAgICAgICAgY3NzW2tleV0gPSBzO1xyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBjc3Nba2V5XTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybVByb3AgPSBzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0cmFuc2Zvcm1Qcm9wKVxyXG4gICAgICAgICAgICBjc3MudHJhbnNmb3JtID0gdHJhbnNmb3JtUHJvcC50b1N0cmluZygpO1xyXG4gICAgICAgIHJldHVybiB0cmFuc2Zvcm1Qcm9wO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZm9ybWF0QW5pbWF0aW9uQ3NzKGNzcywgdGhhdCkge1xyXG4gICAgICAgIGlmIChcIm9mZnNldFwiIGluIGNzcykge1xyXG4gICAgICAgICAgICBsZXQgeyBvZmZzZXQgfSA9IGNzcztcclxuICAgICAgICAgICAgZGVsZXRlIGNzcy5vZmZzZXQ7XHJcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBsZXQgZW5kID0gZm9ybWF0Q3NzKGNzcywgdGhhdCk7XHJcbiAgICAgICAgICAgIGNzcy5vZmZzZXQgPSBvZmZzZXQ7XHJcbiAgICAgICAgICAgIHJldHVybiBlbmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIGZvcm1hdENzcyhjc3MsIHRoYXQpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc3BsaXRUcmFuc2Zvcm1Qcm9wc0ludG9LZXlWYWwodmFsKSB7XHJcbiAgICAgICAgdmFsID0gdmFsLnJlcGxhY2UoLyggfFxcdCkvZywgXCJcIik7XHJcbiAgICAgICAgbGV0IGFyID0gdmFsLnNwbGl0KFwiKVwiKTtcclxuICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICBhci5ybUkoYXIubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgbGV0IGVuZCA9IFtdO1xyXG4gICAgICAgIGFyLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgbGV0IGwgPSBlLnNwbGl0KFwiKFwiKTtcclxuICAgICAgICAgICAgZW5kLnB1c2goeyBrZXk6IGxbMF0sIHZhbDogbFsxXSB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gZW5kO1xyXG4gICAgfVxyXG4gICAgbGV0IHNwbGl0VmFsdWVGcm9tVW5pdCA9ICgoKSA9PiB7XHJcbiAgICAgICAgbGV0IHZhbDtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gc3BsaXRWYWx1ZUZyb21Vbml0KHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHZhbCA9IHZhbHVlO1xyXG4gICAgICAgICAgICBsZXQgbWF4ID0gdmFsLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1heCk7XHJcbiAgICAgICAgICAgIGxldCBlZGdlID0gbWF4IC0gMjtcclxuICAgICAgICAgICAgaWYgKCFpc0VkZ2UoZWRnZSkpIHtcclxuICAgICAgICAgICAgICAgIGVkZ2UgPSBtYXggLSAzO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFpc0VkZ2UoZWRnZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBlZGdlID0gbWF4IC0gMTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzRWRnZShlZGdlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlZGdlID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzRWRnZShlZGdlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGdvdEl0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gbWF4IC0gNDsgaSA8IDA7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0VkZ2UoaSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ290SXQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ290SXQgPT09IGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IFwiSW52YWxpZFVuYWJsZSB0byBmaW5kIFVuaXQgLSBWYWx1ZSBTZXBlcmF0aW9uIGluIFxcXCJcIiArIHZhbHVlICsgXCJcXFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWRnZSsrO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWw6ICt2YWwuc3Vic3RyKDAsIGVkZ2UpLCB1bml0OiB2YWwuc3Vic3RyKGVkZ2UpIH07XHJcbiAgICAgICAgfTtcclxuICAgICAgICBmdW5jdGlvbiBpc0VkZ2UoYXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuICFpc05hTigrdmFsW2F0XSkgJiYgaXNOYU4oK3ZhbFthdCArIDFdKTtcclxuICAgICAgICB9XHJcbiAgICB9KSgpO1xyXG4gICAgY2xhc3MgVHJhbnNmb3JtUHJvcCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IodHJhbnNmb3JtX2Nsb25lKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJpbWl0aXZlcyA9IHt9O1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zdG9yZSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICBpZiAodHJhbnNmb3JtX2Nsb25lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHJhbnNmb3JtX2Nsb25lIGluc3RhbmNlb2YgVHJhbnNmb3JtUHJvcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGsgaW4gdHJhbnNmb3JtX2Nsb25lLnByaW1pdGl2ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmltaXRpdmVzW2tdID0gdHJhbnNmb3JtX2Nsb25lLnByaW1pdGl2ZXNba107XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlZCA9IHRyYW5zZm9ybV9jbG9uZS5jaGFuZ2VkO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUgPSB0cmFuc2Zvcm1fY2xvbmUuc3RvcmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1fY2xvbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0IHRyYW5zbGF0ZSh0bykge1xyXG4gICAgICAgICAgICBpZiAoISh0byBpbnN0YW5jZW9mIEFycmF5KSlcclxuICAgICAgICAgICAgICAgIHRvID0gdG8uc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFsbG9jYXRlKHRvLCBbXCJ0cmFuc2xhdGVYXCIsIFwidHJhbnNsYXRlWVwiLCBcInRyYW5zbGF0ZVpcIl0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBUT0RPIG1heWJlIHNwbGl0IHRoaXMgdXAgYW5kIHJldHVybiBhIG51bWJlcltdIG9mIHRoZSB0cmFuc2xhdGVzOyB0aGlzIHdvdWxkIGhhdmUgdG8gYmUgY29uc2l0ZW50bHkgaW1wbGVtZW50ZWQgdGhyb3VnaCBhbGwgY3NzIChsaWtlIG1hcmdpbiBvciBwYWRkaW5nKVxyXG4gICAgICAgIGdldCB0cmFuc2xhdGUoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbWJpbmVWYWxzKFwidHJhbnNsYXRlWFwiLCBcInRyYW5zbGF0ZVlcIiwgXCJ0cmFuc2xhdGVaXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXQgc2NhbGUodG8pIHtcclxuICAgICAgICAgICAgaWYgKCEodG8gaW5zdGFuY2VvZiBBcnJheSkpXHJcbiAgICAgICAgICAgICAgICB0byA9IHRvLnNwbGl0KFwiLFwiKTtcclxuICAgICAgICAgICAgaWYgKHRvWzBdICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0b1sxXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvWzJdICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2FsZVggPSB0b1swXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2FsZVkgPSB0b1sxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2FsZVogPSB0b1syXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NhbGVYID0gdG9bMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NhbGVZID0gdG9bMV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2FsZVggPSB0b1swXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjYWxlWSA9IHRvWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NhbGVaID0gdG9bMF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZ2V0IHNjYWxlKCkge1xyXG4gICAgICAgICAgICBsZXQgc2NhbGVYID0gdGhpcy5zY2FsZVg7XHJcbiAgICAgICAgICAgIGxldCBzY2FsZVkgPSB0aGlzLnNjYWxlWTtcclxuICAgICAgICAgICAgbGV0IHNjYWxlWiA9IHRoaXMuc2NhbGVaO1xyXG4gICAgICAgICAgICBpZiAoc2NhbGVYID09PSBzY2FsZVkgJiYgc2NhbGVZID09PSBzY2FsZVopXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NhbGVYO1xyXG4gICAgICAgICAgICByZXR1cm4gW3NjYWxlWCwgc2NhbGVZLCBzY2FsZVpdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXQgc2tldyh0bykge1xyXG4gICAgICAgICAgICBpZiAoISh0byBpbnN0YW5jZW9mIEFycmF5KSlcclxuICAgICAgICAgICAgICAgIHRvID0gdG8uc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFsbG9jYXRlKHRvLCBbXCJza2V3WFwiLCBcInNrZXdZXCJdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2V0IHNrZXcoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbWJpbmVWYWxzKFwic2tld1hcIiwgXCJza2V3WVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0IG1hdHJpeCh0bykge1xyXG4gICAgICAgICAgICBpZiAodG8gaW5zdGFuY2VvZiBBcnJheSlcclxuICAgICAgICAgICAgICAgIHRvID0gdG8uam9pbihcIixcIik7XHJcbiAgICAgICAgICAgIHRoaXMuZGVjb21wb3NlTWF0cml4KFwibWF0cml4KFwiICsgdG8gKyBcIilcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldCBtYXRyaXgzZCh0bykge1xyXG4gICAgICAgICAgICBpZiAodG8gaW5zdGFuY2VvZiBBcnJheSlcclxuICAgICAgICAgICAgICAgIHRvID0gdG8uam9pbihcIixcIik7XHJcbiAgICAgICAgICAgIHRoaXMuZGVjb21wb3NlTWF0cml4KFwibWF0cml4M2QoXCIgKyB0byArIFwiKVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0IHRyYW5zZm9ybSh0bykge1xyXG4gICAgICAgICAgICBpZiAodG8gPT09IFwibm9uZVwiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBsZXQgYXIgPSBzcGxpdFRyYW5zZm9ybVByb3BzSW50b0tleVZhbCh0byk7XHJcbiAgICAgICAgICAgIGxldCBvcmRlcmVkID0ge307XHJcbiAgICAgICAgICAgIGFyLmVhKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdCA9IG9yZGVyZWRbZS5rZXldID09PSB1bmRlZmluZWQgPyBvcmRlcmVkW2Uua2V5XSA9IFtdIDogb3JkZXJlZFtlLmtleV07XHJcbiAgICAgICAgICAgICAgICB0LmFkZChlLnZhbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBrIGluIG9yZGVyZWQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChUcmFuc2Zvcm1Qcm9wLnVtYnJlbGxhVHJhbnNmb3JtUHJvcHMuaW5jbHVkZXMoaykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlY29tcG9zZU1hdHJpeCh0byk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGsgaW4gb3JkZXJlZCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHQgPSBvcmRlcmVkW2tdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHQubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpc1trXSA9IHQuZmlyc3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoISh0IGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNwbGl0ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgdC5lYSgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGxpdC5hZGQoc3BsaXRWYWx1ZUZyb21Vbml0KGUudmFsKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVuaXQgPSBzcGxpdC5maXJzdC51bml0O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjYW5Db21wb3NlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNwbGl0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzcGxpdFtpXS51bml0ICE9PSB1bml0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuQ29tcG9zZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FuQ29tcG9zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BsaXQuZWEoKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbCArPSBlLnZhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNba10gPSB2YWwgKyB1bml0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgb3JkZXJlZFtrXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHJlc3QgPSBcIlwiO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBrIGluIG9yZGVyZWQpIHtcclxuICAgICAgICAgICAgICAgIHJlc3QgKz0gayArIFwiKFwiICsgb3JkZXJlZFtrXSArIFwiKSBcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmRlY29tcG9zZU1hdHJpeChyZXN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVjb21wb3NlTWF0cml4KHRvKSB7XHJcbiAgICAgICAgICAgIGxldCBkZWMgPSBkZWNvbXBvc2VNYXRyaXgobmV3IERPTU1hdHJpeCh0bykpO1xyXG4gICAgICAgICAgICBsZXQgc2tldyA9IGRlYy5za2V3WFk7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBkZWMuc2tld1hZO1xyXG4gICAgICAgICAgICBkZWxldGUgZGVjLnNrZXdYWjtcclxuICAgICAgICAgICAgZGVsZXRlIGRlYy5za2V3WVo7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGQgaW4gZGVjKSB7XHJcbiAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgIGlmIChkZWNbZF0gIT09IFRyYW5zZm9ybVByb3AucHJpbWl0aXZlRGVmYXVsdHNbZF0pXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tkXSA9IGZvcm1hdFN0eWxlKGQsIGRlY1tkXSwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChza2V3ICE9PSBUcmFuc2Zvcm1Qcm9wLnByaW1pdGl2ZURlZmF1bHRzLnNrZXdYKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5za2V3WCA9IGZvcm1hdFN0eWxlKFwic2tld1hcIiwgc2tldywgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb21iaW5lVmFscyguLi52YWxzKSB7XHJcbiAgICAgICAgICAgIGxldCBzID0gXCJcIjtcclxuICAgICAgICAgICAgdmFscy5lYSgodmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZSA9IHRoaXNbdmFsXTtcclxuICAgICAgICAgICAgICAgIGlmIChlICE9PSBUcmFuc2Zvcm1Qcm9wLnByaW1pdGl2ZURlZmF1bHRzW3ZhbF0gKyB1bml0SW5kZXhbdmFsXSlcclxuICAgICAgICAgICAgICAgICAgICBzICs9IGUgKyBcIixcIjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBzLmxlbmd0aCA9PT0gMCA/IFRyYW5zZm9ybVByb3AucHJpbWl0aXZlRGVmYXVsdHNbdmFscy5maXJzdF0gKyB1bml0SW5kZXhbdmFscy5maXJzdF0gOiBzLnN1YnN0cigwLCBzLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhbGxvY2F0ZShpbnB1dCwgZnVuY3MpIHtcclxuICAgICAgICAgICAgZnVuY3MuZWEoKGZ1bmMsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgaWYgKGlucHV0W2ldICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tmdW5jXSA9IGlucHV0W2ldO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNoYW5nZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBwcm9wIG9mIFRyYW5zZm9ybVByb3AucHJpbWl0aXZlVHJhbnNmb3JtUHJvcHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIE1VU1QgZm9ybWF0ZWQgaW4gdGhlIGZvbGxvd2luZyBvcmRlciB0byBhY2hpdmUgY29uc2l0ZW50IHJlc3VsdHMgW3RyYW5zbGF0ZSByb3RhdGUgc2tldyBzY2FsZV1cclxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCBpbiB0aGlzLnByaW1pdGl2ZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByaW1pdGl2ZXNbcHJvcF0gIT09IFRyYW5zZm9ybVByb3AucHJpbWl0aXZlRGVmYXVsdHNbcHJvcF0gKyB1bml0SW5kZXhbcHJvcF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JlICs9IHByb3AgKyBUcmFuc2Zvcm1Qcm9wLmNsYW1wT3BlbiArIHRoaXMucHJpbWl0aXZlc1twcm9wXSArIFRyYW5zZm9ybVByb3AuY2xhbXBDbG9zZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdG9yZSB8fCBcIm5vbmVcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBUcmFuc2Zvcm1Qcm9wLnByaW1pdGl2ZURlZmF1bHRzID0ge1xyXG4gICAgICAgIHRyYW5zbGF0ZVg6IDAsXHJcbiAgICAgICAgdHJhbnNsYXRlWTogMCxcclxuICAgICAgICB0cmFuc2xhdGVaOiAwLFxyXG4gICAgICAgIHJvdGF0ZVg6IDAsXHJcbiAgICAgICAgcm90YXRlWTogMCxcclxuICAgICAgICByb3RhdGVaOiAwLFxyXG4gICAgICAgIHNrZXdYOiAwLFxyXG4gICAgICAgIHNrZXdZOiAwLFxyXG4gICAgICAgIHNjYWxlWDogMSxcclxuICAgICAgICBzY2FsZVk6IDEsXHJcbiAgICAgICAgc2NhbGVaOiAxXHJcbiAgICB9O1xyXG4gICAgVHJhbnNmb3JtUHJvcC5wcmltaXRpdmVUcmFuc2Zvcm1Qcm9wcyA9IE9iamVjdC5rZXlzKFRyYW5zZm9ybVByb3AucHJpbWl0aXZlRGVmYXVsdHMpO1xyXG4gICAgVHJhbnNmb3JtUHJvcC51bWJyZWxsYVRyYW5zZm9ybVByb3BzID0gW1xyXG4gICAgICAgIFwicm90YXRlXCIsIFwicm90YXRlM2RcIiwgXCJzY2FsZVwiLCBcInNjYWxlM2RcIiwgXCJ0cmFuc2xhdGVcIiwgXCJ0cmFuc2xhdGUzZFwiLCBcInNrZXdcIiwgXCJtYXRyaXhcIiwgXCJtYXRyaXgzZFwiXHJcbiAgICBdO1xyXG4gICAgVHJhbnNmb3JtUHJvcC50cmFuc2Zvcm1Qcm9wcyA9IFsuLi5UcmFuc2Zvcm1Qcm9wLnByaW1pdGl2ZVRyYW5zZm9ybVByb3BzLCAuLi5UcmFuc2Zvcm1Qcm9wLnVtYnJlbGxhVHJhbnNmb3JtUHJvcHNdO1xyXG4gICAgVHJhbnNmb3JtUHJvcC5hcHBsaWVzID0gKC4uLnByb3ApID0+IHtcclxuICAgICAgICByZXR1cm4gVHJhbnNmb3JtUHJvcC50cmFuc2Zvcm1Qcm9wcy5jb250YWlucyguLi5wcm9wKTtcclxuICAgIH07XHJcbiAgICBUcmFuc2Zvcm1Qcm9wLmNsYW1wT3BlbiA9IFwiKFwiO1xyXG4gICAgVHJhbnNmb3JtUHJvcC5jbGFtcENsb3NlID0gXCIpIFwiO1xyXG4gICAgbGV0IGhhc1B4ID0gW1wieFwiLCBcInlcIiwgXCJ6XCIsIFwidHJhbnNsYXRlWFwiLCBcInRyYW5zbGF0ZVlcIiwgXCJ0cmFuc2xhdGVaXCIsIFwic2tld1hcIiwgXCJza2V3WVwiLCBcInJvdGF0ZVwiLCBcInJvdGF0ZTNkXCIsIFwidHJhbnNsYXRlXCIsIFwidHJhbnNsYXRlM2RcIiwgXCJza2V3XCIsIFwiYmFja2dyb3VuZFNpemVcIiwgXCJib3JkZXJcIiwgXCJib3JkZXJCb3R0b21cIiwgXCJib3JkZXJCb3R0b21MZWZ0UmFkaXVzXCIsIFwiYm9yZGVyQm90dG9tUmlnaHRSYWRpdXNcIiwgXCJib3JkZXJCb3R0b21XaWR0aFwiLCBcImJvcmRlckxlZnRcIiwgXCJib3JkZXJMZWZ0V2lkdGhcIiwgXCJib3JkZXJSYWRpdXNcIiwgXCJib3JkZXJSaWdodFwiLCBcImJvcmRlclJpZ2h0V2lkdGhcIiwgXCJib3JkZXJUb3BcIiwgXCJib3JkZXJUb3BMZWZ0UmFkaXVzXCIsIFwiYm9yZGVyVG9wUmlnaHRSYWRpdXNcIiwgXCJib3JkZXJUb3BXaWR0aFwiLCBcImJvcmRlcldpZHRoXCIsIFwiYm90dG9tXCIsIFwiY29sdW1uR2FwXCIsIFwiY29sdW1uUnVsZVdpZHRoXCIsIFwiY29sdW1uV2lkdGhcIiwgXCJjb2x1bW5zXCIsIFwiZmxleEJhc2lzXCIsIFwiZm9udFwiLCBcImZvbnRTaXplXCIsIFwiZ3JpZENvbHVtbkdhcFwiLCBcImdyaWRHYXBcIiwgXCJncmlkUm93R2FwXCIsIFwiaGVpZ2h0XCIsIFwibGVmdFwiLCBcImxldHRlclNwYWNpbmdcIiwgXCJsaW5lSGVpZ2h0XCIsIFwibWFyZ2luXCIsIFwibWFyZ2luQm90dG9tXCIsIFwibWFyZ2luTGVmdFwiLCBcIm1hcmdpblJpZ2h0XCIsIFwibWFyZ2luVG9wXCIsIFwibWFza1NpemVcIiwgXCJtYXhIZWlnaHRcIiwgXCJtYXhXaWR0aFwiLCBcIm1pbkhlaWdodFwiLCBcIm1pbldpZHRoXCIsIFwib3V0bGluZVwiLCBcIm91dGxpbmVPZmZzZXRcIiwgXCJvdXRsaW5lV2lkdGhcIiwgXCJwYWRkaW5nXCIsIFwicGFkZGluZ0JvdHRvbVwiLCBcInBhZGRpbmdMZWZ0XCIsIFwicGFkZGluZ1JpZ2h0XCIsIFwicGFkZGluZ1RvcFwiLCBcInBlcnNwZWN0aXZlXCIsIFwicmlnaHRcIiwgXCJzaGFwZU1hcmdpblwiLCBcInRhYlNpemVcIiwgXCJ0b3BcIiwgXCJ3aWR0aFwiLCBcIndvcmRTcGFjaW5nXCJdO1xyXG4gICAgbGV0IGhhc0RlZyA9IFtcInJvdGF0ZVhcIiwgXCJyb3RhdGVZXCIsIFwicm90YXRlWlwiLCBcInJvdGF0ZVwiXTtcclxuICAgIGxldCBweCA9IFwicHhcIjtcclxuICAgIGxldCB1bml0SW5kZXggPSB7fTtcclxuICAgIGhhc1B4LmVhKChlKSA9PiB7XHJcbiAgICAgICAgdW5pdEluZGV4W2VdID0gcHg7XHJcbiAgICB9KTtcclxuICAgIGxldCBkZWcgPSBcImRlZ1wiO1xyXG4gICAgaGFzRGVnLmVhKChlKSA9PiB7XHJcbiAgICAgICAgdW5pdEluZGV4W2VdID0gZGVnO1xyXG4gICAgfSk7XHJcbiAgICBUcmFuc2Zvcm1Qcm9wLnByaW1pdGl2ZVRyYW5zZm9ybVByb3BzLmVhKChwcm9wKSA9PiB7XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyYW5zZm9ybVByb3AucHJvdG90eXBlLCBwcm9wLCB7XHJcbiAgICAgICAgICAgIGdldCgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByaW1pdGl2ZXNbcHJvcF0gfHwgVHJhbnNmb3JtUHJvcC5wcmltaXRpdmVEZWZhdWx0c1twcm9wXSArIHVuaXRJbmRleFtwcm9wXTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2V0KHN0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmltaXRpdmVzW3Byb3BdID0gc3R5bGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgcC5jc3MgPSBmdW5jdGlvbiAoa2V5X2NzcywgdmFsKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBrZXlfY3NzID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIGxldCBjc3MgPSBjbG9uZURhdGEoa2V5X2Nzcyk7XHJcbiAgICAgICAgICAgIGZvcm1hdENzcyhjc3MsIHRoaXMpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBwcm9wIGluIGNzcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdHlsZVtwcm9wXSA9IGNzc1twcm9wXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh2YWwgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgdmFsICE9PSBcImJvb2xlYW5cIikge1xyXG4gICAgICAgICAgICBsZXQgcyA9IGZvcm1hdFN0eWxlKGtleV9jc3MsIHZhbCwgdGhpcyk7XHJcbiAgICAgICAgICAgIGlmICghKHMgaW5zdGFuY2VvZiBUcmFuc2Zvcm1Qcm9wKSlcclxuICAgICAgICAgICAgICAgIHRoaXMuc3R5bGVba2V5X2Nzc10gPSBzO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0eWxlLnRyYW5zZm9ybSA9IHMudG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBzO1xyXG4gICAgICAgICAgICBpZiAoVHJhbnNmb3JtUHJvcC5hcHBsaWVzKGtleV9jc3MpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbXNXaXRob3V0Q29uc2l0ZW50VHJhbnNmb3JtUHJvcHMuaW5jbHVkZXMoeyBlbGVtOiB0aGlzIH0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHQgPSBuZXcgVHJhbnNmb3JtUHJvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHQudHJhbnNmb3JtID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzKS50cmFuc2Zvcm07XHJcbiAgICAgICAgICAgICAgICAgICAgcyA9IHRba2V5X2Nzc107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgcyA9IGdldFRyYW5zZm9ybVByb3BzKHRoaXMpW2tleV9jc3NdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMpW2tleV9jc3NdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBcIlVua25vd24ga2V5IFxcXCJcIiArIGtleV9jc3MgKyBcIlxcXCIuXCI7XHJcbiAgICAgICAgICAgIGlmICh2YWwgfHwgcy5zcGxpdChcIiBcIikubGVuZ3RoID4gMSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBzO1xyXG4gICAgICAgICAgICBsZXQgbiA9IHBhcnNlRmxvYXQocyk7XHJcbiAgICAgICAgICAgIGlmIChpc05hTihuKSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBzO1xyXG4gICAgICAgICAgICByZXR1cm4gbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgZnVuY3Rpb24gY3VycmVudEZyYW1lKGtleXMsIHRoYXQpIHtcclxuICAgICAgICBsZXQgcmV0ID0ge307XHJcbiAgICAgICAgbGV0IGNzID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGF0KTtcclxuICAgICAgICBsZXQgaGFzVHJhbnNmb3JtUHJvcCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGtleSBvZiBrZXlzKSB7XHJcbiAgICAgICAgICAgIGlmIChUcmFuc2Zvcm1Qcm9wLmFwcGxpZXMoa2V5KSlcclxuICAgICAgICAgICAgICAgIGhhc1RyYW5zZm9ybVByb3AuYWRkKGtleSk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHJldFtrZXldID0gY3Nba2V5XSB8fCBcIjBcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGhhc1RyYW5zZm9ybVByb3ApIHtcclxuICAgICAgICAgICAgbGV0IHByb3BzID0gdHJhbnNmcm9tUHJvcHMuZ2V0KHRoYXQpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBwcm9wIG9mIGhhc1RyYW5zZm9ybVByb3ApIHtcclxuICAgICAgICAgICAgICAgIHJldFtwcm9wXSA9IHByb3BzW3Byb3BdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldC5vZmZzZXQgPSAwO1xyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcbiAgICBsZXQgZGV0ZWN0SWZJblRyYW5zaXRpb25Qcm9wZXJ0eSA9ICgoKSA9PiB7XHJcbiAgICAgICAgZnVuY3Rpb24gd29hbihrZXksIHRoYXQpIHtcclxuICAgICAgICAgICAgbGV0IHMgPSBcIlRoZSB0cmFuc2l0aW9uIHByb3BlcnRcIjtcclxuICAgICAgICAgICAgaWYgKGtleSBpbnN0YW5jZW9mIEFycmF5KVxyXG4gICAgICAgICAgICAgICAgcyArPSBcImllcyBcXFwiXCI7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHMgKz0gXCJ5IFxcXCJcIjtcclxuICAgICAgICAgICAgcyArPSBrZXkudG9TdHJpbmcoKSArIFwiXFxcIiBpcyBub3QgZW1wdHkgZm9yIHRoZSBmb2xsb3dpbmcgZWxlbWVudC4gSXQgaXMgcmVjb21tZW5kZWQgdG8gbm90IHVzZSBjc3MgYW5pYW10aW9ucyBhbmQgdGhpcyBmcmFtZXdvcmsgZm9yIHRoZSBzYW1lIHByb3BlcnRpZXMuXFxuXFxuSW4gb3JkZXIgdG8gcHJldmVudCBhbiBhbmlhbXRpb24gZnJvbSB0cmlnZ2VyaW5nIHR3aWNlIGluIGEgcm93IHRoZSByZXN1bHQgb2YgdGhpcyBvbmUgd2lsbCBub3QgZGlzcGxheSBpdHMgcmVzdWx0IGluIHRoZSBkb20gZXhwbG9yZXIuXFxuXFxuXCI7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihzLCB0aGF0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChjc3NLZXlzLCB0cmFuc2l0aW9uUHJvcGVydHlzLCB0cmFuc2l0aW9uRHVyYXRpb24sIHRoYXQpIHtcclxuICAgICAgICAgICAgbGV0IHdhcm4gPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQga2V5IG9mIGNzc0tleXMpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0cmFuc2l0aW9uRHVyYXRpb24gIT09IDAgJiYgKHRyYW5zaXRpb25Qcm9wZXJ0eXMuaW5jbHVkZXMoa2V5KSB8fCB0cmFuc2l0aW9uUHJvcGVydHlzID09PSBcImFsbFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdhcm4uYWRkKGtleSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGxlbmd0aCA9IHdhcm4ubGVuZ3RoO1xyXG4gICAgICAgICAgICBpZiAobGVuZ3RoICE9PSAwKVxyXG4gICAgICAgICAgICAgICAgaWYgKGxlbmd0aCA9PT0gMSlcclxuICAgICAgICAgICAgICAgICAgICB3b2FuKHdhcm5bMF0sIHRoYXQpO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHdvYW4od2FybiwgdGhhdCk7XHJcbiAgICAgICAgICAgIHJldHVybiB3YXJuO1xyXG4gICAgICAgIH07XHJcbiAgICB9KSgpO1xyXG4gICAgZnVuY3Rpb24gZXZhbHVhdGVBbGxLZXlzKGZyYW1lcykge1xyXG4gICAgICAgIGxldCBhbGxLZXlzID0gT2JqZWN0LmtleXMoZnJhbWVzLmZpcnN0KTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGZyYW1lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKGZyYW1lc1tpXSk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGUgb2Yga2V5cykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFhbGxLZXlzLmluY2x1ZGVzKGUpKVxyXG4gICAgICAgICAgICAgICAgICAgIGFsbEtleXMuYWRkKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhbGxLZXlzLmluY2x1ZGVzKFwib2Zmc2V0XCIpKVxyXG4gICAgICAgICAgICBhbGxLZXlzLnJtKFwib2Zmc2V0XCIpO1xyXG4gICAgICAgIHJldHVybiBhbGxLZXlzO1xyXG4gICAgfVxyXG4gICAgY2xhc3MgRWxlbXNXaXRob3V0Q29uc2l0ZW50VHJhbnNmb3JtUHJvcHMge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKC4uLmVsZW1zKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmUgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5hZGQoLi4uZWxlbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhZGQoLi4uZWxlbXMpIHtcclxuICAgICAgICAgICAgZWxlbXMuZWEoKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pbmNsdWRlcyhlKSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLmFkZChlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJtKC4uLmVsZW1zKSB7XHJcbiAgICAgICAgICAgIGxldCBpbmRpY2VzID0gW107XHJcbiAgICAgICAgICAgIGVsZW1zLmVhKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaGFzTm9JZGVudGlmaWVyID0gZS5pZGVudGlmaWVyID09PSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLmVhKChzLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUgPT09IHMgfHwgKHMuZWxlbSA9PT0gZS5lbGVtICYmIChoYXNOb0lkZW50aWZpZXIgfHwgcy5pZGVudGlmaWVyID09PSBlLmlkZW50aWZpZXIpKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kaWNlcy5hZGQoaSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmUucm1JKC4uLmluZGljZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbmNsdWRlcyguLi5lbGVtcykge1xyXG4gICAgICAgICAgICBpZiAoZWxlbXMuZWEoKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBoYXNOb0lkZW50aWZpZXIgPSBlLmlkZW50aWZpZXIgPT09IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0b3JlLmVhKChzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUgPT09IHMgfHwgKHMuZWxlbSA9PT0gZS5lbGVtICYmIChoYXNOb0lkZW50aWZpZXIgfHwgcy5pZGVudGlmaWVyID09PSBlLmlkZW50aWZpZXIpKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCBlYXNlSW5PdXQgPSBuZXcgRWFzaW5nKFwiZWFzZUluT3V0XCIpO1xyXG4gICAgLy8gbGV0IGVhc2UgPSBuZXcgRWFzaW5nKFwiZWFzZVwiKVxyXG4gICAgbGV0IGVhc2VJbk91dEZ1bmMgPSBlYXNlSW5PdXQuZnVuY3Rpb247XHJcbiAgICAvLyBsZXQgZWFzZUluT3V0U3RyaW5nID0gZWFzZUluT3V0LnN0cmluZ1xyXG4gICAgLy8gbGV0IGVhc2VGdW5jID0gZWFzZS5mdW5jdGlvblxyXG4gICAgLy8gbGV0IGVhc2VTdHJpbmcgPSBlYXNlLnN0cmluZ1xyXG4gICAgbGV0IG1heEFuaW1hdGlvblByb2dyZXNzID0gLjk5OTk5OTk7XHJcbiAgICBsZXQgbWluQW5pbWF0aW9uUHJvZ3Jlc3MgPSAwLjAwMDAwMDE7XHJcbiAgICBsZXQgbmFtZVNwYWNlSW5kZXggPSBuZXcgTWFwKCk7XHJcbiAgICBsZXQgZWxlbXNXaXRob3V0Q29uc2l0ZW50VHJhbnNmb3JtUHJvcHMgPSBuZXcgRWxlbXNXaXRob3V0Q29uc2l0ZW50VHJhbnNmb3JtUHJvcHMoKTtcclxuICAgIGxldCBtYXhQcm9ncmVzc0luT25lU3RlcCA9IC4xO1xyXG4gICAgLy8gLjEgLyAxNi42NjY2NjY2NjY2NjY2NjY3XHJcbiAgICBsZXQgbWF4UHJvZ3Jlc3NJbk9uZVN0ZXBXaXRob3V0RGVsdGEgPSAuMDA2O1xyXG4gICAgbGV0IGZyYW1lRGVsdGEgPSAxNi42NjY2NjY2NjY2NjY2NjY3O1xyXG4gICAgbGV0IGxhc3RGcmFtZVRpbWVTdGFtcCA9IDA7XHJcbiAgICBsZXQgbG9vcCA9IChmcmFtZVRpbWVTdGFtcCkgPT4ge1xyXG4gICAgICAgIGZyYW1lRGVsdGEgPSBmcmFtZVRpbWVTdGFtcCAtIGxhc3RGcmFtZVRpbWVTdGFtcDtcclxuICAgICAgICBsYXN0RnJhbWVUaW1lU3RhbXAgPSBmcmFtZVRpbWVTdGFtcDtcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XHJcbiAgICAgICAgLy8gbG9nKGZyYW1lRGVsdGEpXHJcbiAgICB9O1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xyXG4gICAgLy8gVE9ETzogbWF5YmUgSFRNTCBhdHRyYnMgYW5pbVxyXG4gICAgLy8gU28gdGhhdCB5b3UgY291bGQgYW5pbWF0ZSBpbm5lckhUTUwgZS5nLlxyXG4gICAgLy8gbWF5YmUgZmFkZSBhb3V0IGZvbnQtY29sb3IgYW5kIHRoZW4gYmFjay4uLiBvciBqdXN0IHNldCBpdFxyXG4gICAgLy8gVE9ETzogYWRkIHggYXMgc2hvcnRoYW5kIGZvciB0cmFuc2xhdGUgWCB1c3cuXHJcbiAgICAvLyBUT0RPOiBpbnN0ZWFkIG9mIG9wdGlvbnMganVzdCB0aGUgZHVyYXRpb24gY2FuIGJlIGdpdmVuIGFzIHdlbGwuIHNvIGVsZW0uYW5pbSh7Li4ufSwgMzAwKVxyXG4gICAgLy8gVE9ETzogbWFrZSB3YXJuaW5nIGlmIGFuaW1hdGlvbiB0byBvciBmcm9tIGF1dG8uIEJhc2VkIG9uIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9DU1NfVHJhbnNpdGlvbnMvVXNpbmdfQ1NTX3RyYW5zaXRpb25zI1doaWNoX0NTU19wcm9wZXJ0aWVzX2Nhbl9iZV90cmFuc2l0aW9uZWRcclxuICAgIHAuYW5pbSA9IGFzeW5jIGZ1bmN0aW9uIChmcmFtZV9mcmFtZXMsIG9wdGlvbnMgPSB7fSwgZ3VpZGFuY2UpIHtcclxuICAgICAgICBsZXQgdGhpc1RyYW5zUHJvcHMgPSBnZXRUcmFuc2Zvcm1Qcm9wcyh0aGlzKTtcclxuICAgICAgICBsZXQgYW5pbWF0aW9uSXNHdWlkZWQgPSBndWlkYW5jZSAhPT0gdW5kZWZpbmVkO1xyXG4gICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgIGlmIChmcmFtZV9mcmFtZXNbT2JqZWN0LmtleXMoZnJhbWVfZnJhbWVzKVswXV0gaW5zdGFuY2VvZiBBcnJheSlcclxuICAgICAgICAgICAgZnJhbWVfZnJhbWVzID0gY29udmVydEZyYW1lU3RydWN0dXJlKGZyYW1lX2ZyYW1lcyk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBmcmFtZV9mcmFtZXMgPSBjbG9uZURhdGEoZnJhbWVfZnJhbWVzKTtcclxuICAgICAgICBpZiAobmFtZVNwYWNlSW5kZXguZ2V0KHRoaXMpID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIG5hbWVTcGFjZUluZGV4LnNldCh0aGlzLCBbXSk7XHJcbiAgICAgICAgbGV0IG5zID0gbmFtZVNwYWNlSW5kZXguZ2V0KHRoaXMpO1xyXG4gICAgICAgIGlmIChvcHRpb25zLm5hbWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBsZXQgaW5jID0gMTtcclxuICAgICAgICAgICAgd2hpbGUgKG5zLmluY2x1ZGVzKGluYy50b1N0cmluZygpKSkge1xyXG4gICAgICAgICAgICAgICAgaW5jKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHMgPSBpbmMudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgIG9wdGlvbnMubmFtZSA9IHM7XHJcbiAgICAgICAgICAgIG5zLmFkZChzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBpbmMgPSAyO1xyXG4gICAgICAgICAgICBsZXQgbmFtZTtcclxuICAgICAgICAgICAgaWYgKCFucy5pbmNsdWRlcyhvcHRpb25zLm5hbWUpKVxyXG4gICAgICAgICAgICAgICAgbmFtZSA9IG9wdGlvbnMubmFtZTtcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAobnMuaW5jbHVkZXMob3B0aW9ucy5uYW1lICsgaW5jKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGluYysrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbmFtZSA9IG9wdGlvbnMubmFtZSArIGluYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgb3B0aW9ucy5uYW1lID0gbmFtZTtcclxuICAgICAgICAgICAgbnMuYWRkKG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcHJvZ3Jlc3NOYW1lU3RyaW5nID0gXCJhbmltYXRpb24tXCIgKyBvcHRpb25zLm5hbWUgKyBcIi1wcm9ncmVzc1wiO1xyXG4gICAgICAgIGxldCBlbmRGcmFtZXM7XHJcbiAgICAgICAgbGV0IHRyYW5zaXRpb25Qcm9wZXJ0eSA9IHRoaXMuY3NzKFwidHJhbnNpdGlvbi1wcm9wZXJ0eVwiKTtcclxuICAgICAgICBsZXQgdHJhbnNpdGlvbkR1cmF0aW9uID0gdGhpcy5jc3MoXCJ0cmFuc2l0aW9uLWR1cmF0aW9uXCIpO1xyXG4gICAgICAgIGxldCBuZWVkVG9DYWxjdWxhdGVJbml0YWxGcmFtZSA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBhbGxLZXlzO1xyXG4gICAgICAgIGlmIChmcmFtZV9mcmFtZXMgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICBsZXQgZnJhbWVzID0gZnJhbWVfZnJhbWVzO1xyXG4gICAgICAgICAgICBhbGxLZXlzID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGZyYW1lIG9mIGZyYW1lcykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhmcmFtZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5cy5pbmNsdWRlcyhcIm9mZnNldFwiKSlcclxuICAgICAgICAgICAgICAgICAgICBrZXlzLnJtVihcIm9mZnNldFwiKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGtleSBvZiBrZXlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhbGxLZXlzLmluY2x1ZGVzKGtleSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbEtleXMuYWRkKGtleSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGZyYW1lc1swXS5vZmZzZXQgIT09IDApIHtcclxuICAgICAgICAgICAgICAgIG5lZWRUb0NhbGN1bGF0ZUluaXRhbEZyYW1lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGxldCBpbml0RnJhbWUgPSBjdXJyZW50RnJhbWUoYWxsS2V5cywgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICBmcmFtZXMuZGRhKGluaXRGcmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3ByZWFkT2Zmc2V0KGZyYW1lcyk7XHJcbiAgICAgICAgICAgIGxldCBuZWVkZWQgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZnJhbWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZnJhbWUgPSBmcmFtZXNbaV07XHJcbiAgICAgICAgICAgICAgICBsZXQgdGhpc2tleXMgPSBPYmplY3Qua2V5cyhmcmFtZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpc2tleXMuaW5jbHVkZXMoXCJvZmZzZXRcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpc2tleXMucm1WKFwib2Zmc2V0XCIpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQga2V5IG9mIGFsbEtleXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXNrZXlzLmluY2x1ZGVzKGtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByZXZTdHlsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5leHRTdHlsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByZXZPZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXh0T2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgd2FudGVkT2Zmc2V0ID0gZnJhbWUub2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGZyYW1lcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZyYW1laiA9IGZyYW1lc1tqXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmcmFtZWpba2V5XSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGogPCBpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZTdHlsZSA9IGZyYW1laltrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2T2Zmc2V0ID0gZnJhbWVqLm9mZnNldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRTdHlsZSA9IGZyYW1laltrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0T2Zmc2V0ID0gZnJhbWVqLm9mZnNldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcmV2U3R5bGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWVba2V5XSA9IG5leHRTdHlsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChuZXh0U3R5bGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWVba2V5XSA9IHByZXZTdHlsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChuZXh0U3R5bGUgPT09IHByZXZTdHlsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWVba2V5XSA9IHByZXZTdHlsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhdCA9ICgod2FudGVkT2Zmc2V0IC0gcHJldk9mZnNldCkgLyAobmV4dE9mZnNldCAtIHByZXZPZmZzZXQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtZSA9IG5lZWRlZC5nZXQoZnJhbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1lICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZiA9IG1lLmVhKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmlkZW50aWZ5LnByZXZPZmZzZXQgPT09IHByZXZPZmZzZXQgJiYgZS5pZGVudGlmeS5uZXh0T2Zmc2V0ID09PSBuZXh0T2Zmc2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmZyYW1lc1swXVtrZXldID0gcHJldlN0eWxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5mcmFtZXNbMV1ba2V5XSA9IG5leHRTdHlsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUua2V5cy5hZGQoa2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFmKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lLmFkZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzOiBba2V5XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWVzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBba2V5XTogcHJldlN0eWxlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBba2V5XTogbmV4dFN0eWxlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZGVudGlmeToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZPZmZzZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dE9mZnNldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZWVkZWQuc2V0KGZyYW1lLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXM6IFtrZXldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFtZXM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFtrZXldOiBwcmV2U3R5bGUgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFtrZXldOiBuZXh0U3R5bGUgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkZW50aWZ5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldk9mZnNldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0T2Zmc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgbm90QWxyZWFkeUZvcm1hdHRlZEZyYW1lcyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBmcmFtZSBvZiBmcmFtZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChuZWVkZWQuZ2V0KGZyYW1lKSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdEFuaW1hdGlvbkNzcyhmcmFtZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgbm90QWxyZWFkeUZvcm1hdHRlZEZyYW1lcy5hZGQoZnJhbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBwcm9tcyA9IFtdO1xyXG4gICAgICAgICAgICBuZWVkZWQuZm9yRWFjaCgobmUsIGZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBuZS5lYSgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21zLmFkZChnZXRTdHlsZUF0UHJvZ3Jlc3MoW2UuZnJhbWVzLCBlXSwgMSkudGhlbigoc3R5bGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHN0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFtZVtrZXldID0gc3R5bGVba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwocHJvbXMpO1xyXG4gICAgICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICAgICAgbGV0IGNvcHlQcm9wcyA9IG5ldyBUcmFuc2Zvcm1Qcm9wKHRoaXNUcmFuc1Byb3BzKTtcclxuICAgICAgICAgICAgbm90QWxyZWFkeUZvcm1hdHRlZEZyYW1lcy5lYSgoZnJhbWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGZvcm1hdEFuaW1hdGlvbkNzcyhmcmFtZSwgY29weVByb3BzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGFsbEtleXMgPSBldmFsdWF0ZUFsbEtleXMoZnJhbWVzKTtcclxuICAgICAgICAgICAgZW5kRnJhbWVzID0gZnJhbWVzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgICAgIGZvcm1hdEFuaW1hdGlvbkNzcyhmcmFtZV9mcmFtZXMsIG5ldyBUcmFuc2Zvcm1Qcm9wKHRoaXNUcmFuc1Byb3BzKSk7XHJcbiAgICAgICAgICAgIGFsbEtleXMgPSBPYmplY3Qua2V5cyhmcmFtZV9mcmFtZXMpO1xyXG4gICAgICAgICAgICBpZiAoYWxsS2V5cy5pbmNsdWRlcyhcIm9mZnNldFwiKSlcclxuICAgICAgICAgICAgICAgIGFsbEtleXMucm1WKFwib2Zmc2V0XCIpO1xyXG4gICAgICAgICAgICBuZWVkVG9DYWxjdWxhdGVJbml0YWxGcmFtZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGxldCBpbml0RnJhbWUgPSBjdXJyZW50RnJhbWUoYWxsS2V5cywgdGhpcyk7XHJcbiAgICAgICAgICAgIGVuZEZyYW1lcyA9IFtpbml0RnJhbWUsIGZyYW1lX2ZyYW1lc107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBkZXRlY3RlZFByb3BlcnRpZXMgPSBkZXRlY3RJZkluVHJhbnNpdGlvblByb3BlcnR5KGFsbEtleXMsIHRyYW5zaXRpb25Qcm9wZXJ0eSwgdHJhbnNpdGlvbkR1cmF0aW9uLCB0aGlzKTtcclxuICAgICAgICBsZXQgY3NzQ2FuQmVVc2VkVG9GaWxsID0gYWxsS2V5cy5leGNsdWRlcyguLi5kZXRlY3RlZFByb3BlcnRpZXMpO1xyXG4gICAgICAgIGxldCBlbGVtc1dpdGhvdXRDb25zaXRlbnRUcmFuc2Zvcm1Qcm9wc0tleSA9IHsgZWxlbTogdGhpcywgaWRlbnRpZmllcjogb3B0aW9ucy5uYW1lIH07XHJcbiAgICAgICAgaWYgKCFhbmltYXRpb25Jc0d1aWRlZCkge1xyXG4gICAgICAgICAgICBsZXQgbyA9IG9wdGlvbnM7XHJcbiAgICAgICAgICAgIGVsZW1zV2l0aG91dENvbnNpdGVudFRyYW5zZm9ybVByb3BzLmFkZChlbGVtc1dpdGhvdXRDb25zaXRlbnRUcmFuc2Zvcm1Qcm9wc0tleSk7XHJcbiAgICAgICAgICAgIC8vRGVmYXVsdHNcclxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgIGlmIChvLmR1cmF0aW9uID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICBvLmR1cmF0aW9uID0gMjAwO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChvLmR1cmF0aW9uIDw9IDApXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBcIkdpdmVuIG9wdGlvbiBkdXJhdGlvbiBcIiArIG8uZHVyYXRpb24gKyBcIiBjYW5ub3QgYmUgbmVnYXRpdmUuXCI7XHJcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBpZiAoby5pdGVyYXRpb25zID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICBvLml0ZXJhdGlvbnMgPSAxO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChvLml0ZXJhdGlvbnMgPD0gMClcclxuICAgICAgICAgICAgICAgIHRocm93IFwiR2l2ZW4gb3B0aW9uIGl0ZXJhdGlvbnMgXCIgKyBvLml0ZXJhdGlvbnMgKyBcIiBjYW5ub3QgYmUgbmVnYXRpdmUuXCI7XHJcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBpZiAoby5lYXNpbmcgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICBvLmVhc2luZyA9IFwiZWFzZVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICBpZiAoby5lYXNpbmcgaW5zdGFuY2VvZiBFYXNpbmcpXHJcbiAgICAgICAgICAgICAgICAgICAgby5lYXNpbmcgPSBvLmVhc2luZy5zdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGZpbGwgPSBvLmZpbGw7XHJcbiAgICAgICAgICAgIGlmIChmaWxsID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICBmaWxsID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgIG8uZmlsbCA9IFwiYm90aFwiO1xyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgbmV3IFByb21pc2UoYXN5bmMgKHJlcywgcmVqKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYW5pbWF0aW9uO1xyXG4gICAgICAgICAgICAgICAgbGV0IGVycm9ySW5BbmltYXRpb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uID0gdGhpcy5hbmltYXRlKGVuZEZyYW1lcywgbyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFxuICBFbmNvdW50ZXJlZCBmb2xsb3dpbmcgZXJyb3Igd2hpbGUgYXR0ZW1wdGluZyB0byBhbmltYXRlLlxuICBcbiAgLS0tLS0tLS1cbiAgXG4gIGAgKyBlLm1lc3NhZ2UgKyBgXG4gIFxuICAtLS0tLS0tLVxuICBcbiAgXG4gIEZhbGxpbmcgYmFjayBvbiBjc3MgdG8gcHJldmVudCBsb2dpYyBmYWlsdXJlcy5gLCBmcmFtZV9mcmFtZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3NzKGVuZEZyYW1lcy5sYXN0KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzVHJhbnNQcm9wcy50cmFuc2Zvcm0gPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMpLnRyYW5zZm9ybTtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtc1dpdGhvdXRDb25zaXRlbnRUcmFuc2Zvcm1Qcm9wcy5ybShlbGVtc1dpdGhvdXRDb25zaXRlbnRUcmFuc2Zvcm1Qcm9wc0tleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9ySW5BbmltYXRpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKHByb2dyZXNzTmFtZVN0cmluZywgXCJGYWlsZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKHByb2dyZXNzTmFtZVN0cmluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5zLnJtVihvcHRpb25zLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IGl0ZXJhdGlvbnMgPSBvLml0ZXJhdGlvbnM7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlcmF0aW9ucyAhPT0gSW5maW5pdHkpXHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLm9uZmluaXNoID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGFzdEZyYW1lID0gZW5kRnJhbWVzLmxhc3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNUcmFuc1Byb3BzLnRyYW5zZm9ybSA9IGxhc3RGcmFtZS50cmFuc2Zvcm07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1zV2l0aG91dENvbnNpdGVudFRyYW5zZm9ybVByb3BzLnJtKGVsZW1zV2l0aG91dENvbnNpdGVudFRyYW5zZm9ybVByb3BzS2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpbGwgJiYgY3NzQ2FuQmVVc2VkVG9GaWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNzcyhsYXN0RnJhbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLmNhbmNlbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBsZXQgZGlzcGxheVByb2dyZXNzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvckluQW5pbWF0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZyZXEgPSBvLmR1cmF0aW9uIC8gMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBtaW4gPSAxNjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZnJlcSA8IG1pbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJlcSA9IG1pbjtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VyID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJvZ3Jlc3MgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbnQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1ciArPSBmcmVxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzcyA9IE1hdGgucm91bmQoKGN1ciAvIG8uZHVyYXRpb24pICogMTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2dyZXNzID49IDEwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlcmF0aW9ucy0tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZXJhdGlvbnMgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShwcm9ncmVzc05hbWVTdHJpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBucy5ybVYob3B0aW9ucy5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5UHJvZ3Jlc3MoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzID0gMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKHByb2dyZXNzTmFtZVN0cmluZywgcHJvZ3Jlc3MgKyBcIiVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgZnJlcSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheVByb2dyZXNzKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgIGxldCBvID0gb3B0aW9ucztcclxuICAgICAgICAgICAgbGV0IGVhc2luZ0Z1bmM7XHJcbiAgICAgICAgICAgIC8vIERlZmF1bHRzXHJcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBpZiAoby5zdGFydCA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgby5zdGFydCA9IDA7XHJcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBpZiAoby5lbmQgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgIG8uZW5kID0gby5zdGFydCArIDEwMDtcclxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgIGlmIChvLnNtb290aCA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgby5zbW9vdGggPSB0cnVlO1xyXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgaWYgKG8uYWN0aXZlID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICBvLmFjdGl2ZSA9IG5ldyBEYXRhKHRydWUpO1xyXG4gICAgICAgICAgICBpZiAoby5lYXNpbmcgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgZWFzaW5nRnVuYyA9IGVhc2VJbk91dEZ1bmM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygby5lYXNpbmcgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgby5lYXNpbmcgPSBuZXcgRWFzaW5nKG8uZWFzaW5nKTtcclxuICAgICAgICAgICAgICAgIGVhc2luZ0Z1bmMgPSBvLmVhc2luZy5mdW5jdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoby5zdGFydCA+PSBvLmVuZClcclxuICAgICAgICAgICAgICAgIHRocm93IFwiR2l2ZW4gb3B0aW9uIHN0YXJ0IFwiICsgby5zdGFydCArIFwiIGFuZCBlbmQgXCIgKyBvLmVuZCArIFwiIGFyZSBub3QgY29uc2lzdGVudC4gRW5kIG11c3QgYmUgZ3JlYXRlciB0aGFuIHN0YXJ0LlwiO1xyXG4gICAgICAgICAgICBvLmFjdGl2ZS5zdWJzY3JpYmUoKGFjdGl2ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbm90QWN0aXZlID0gIWFjdGl2ZTtcclxuICAgICAgICAgICAgICAgIGlmIChhY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtc1dpdGhvdXRDb25zaXRlbnRUcmFuc2Zvcm1Qcm9wcy5hZGQoZWxlbXNXaXRob3V0Q29uc2l0ZW50VHJhbnNmb3JtUHJvcHNLZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1zV2l0aG91dENvbnNpdGVudFRyYW5zZm9ybVByb3BzLmluY2x1ZGVzKGVsZW1zV2l0aG91dENvbnNpdGVudFRyYW5zZm9ybVByb3BzS2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzVHJhbnNQcm9wcy50cmFuc2Zvcm0gPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMpLnRyYW5zZm9ybTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbXNXaXRob3V0Q29uc2l0ZW50VHJhbnNmb3JtUHJvcHMucm0oZWxlbXNXaXRob3V0Q29uc2l0ZW50VHJhbnNmb3JtUHJvcHNLZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShwcm9ncmVzc05hbWVTdHJpbmcsIFwiSW5hY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICAgICAgLy9tb3ZlIGNvbnN0YW50c1xyXG4gICAgICAgICAgICBsZXQgaW5TbW9vdGhpbmc7XHJcbiAgICAgICAgICAgIGxldCBjYW5jZWxTbW9vdGhpbmc7XHJcbiAgICAgICAgICAgIGxldCBsYXN0QW5pbWF0aW9uO1xyXG4gICAgICAgICAgICBsZXQgbGFzdFByb2dyZXNzID0gbWluQW5pbWF0aW9uUHJvZ3Jlc3M7XHJcbiAgICAgICAgICAgIGxldCBwcm9ncmVzcyA9IG1pbkFuaW1hdGlvblByb2dyZXNzO1xyXG4gICAgICAgICAgICBsZXQgcHJvZ3Jlc3NBYnNvcnB0aW9uID0gMDtcclxuICAgICAgICAgICAgbGV0IG5leHRQcm9ncmVzcyA9IDE7XHJcbiAgICAgICAgICAgIGxldCBwcmV2UHJvZ3Jlc3MgPSAwO1xyXG4gICAgICAgICAgICBsZXQgc2xpZGUgPSAwO1xyXG4gICAgICAgICAgICBsZXQgbGFzdFByb2dyZXNzQWJzb3JwdGlvbiA9IHByb2dyZXNzQWJzb3JwdGlvbjtcclxuICAgICAgICAgICAgbGV0IHJhd1Byb2dyZXNzID0gbWluQW5pbWF0aW9uUHJvZ3Jlc3M7XHJcbiAgICAgICAgICAgIGxldCByYXdMYXN0UHJvZ3Jlc3MgPSBtaW5BbmltYXRpb25Qcm9ncmVzcztcclxuICAgICAgICAgICAgbGV0IG5vdEFjdGl2ZSA9ICFvLmFjdGl2ZS52YWw7XHJcbiAgICAgICAgICAgIGxldCBub3RJbkxpbWl0Q29ycmVjdGlvbiA9IHRydWU7XHJcbiAgICAgICAgICAgIGxldCBhYnN1bHV0ZVByb2dyZXNzO1xyXG4gICAgICAgICAgICBsZXQgc3Vic2NyaXB0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5vdEFjdGl2ZSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBsYXN0UHJvZ3Jlc3MgPSBwcm9ncmVzcztcclxuICAgICAgICAgICAgICAgIHJhd0xhc3RQcm9ncmVzcyA9IHJhd1Byb2dyZXNzO1xyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSBwcm9ncmVzc1RvU2F2ZVByb2dyZXNzKCgoYWJzdWx1dGVQcm9ncmVzcyAtIG8uc3RhcnQpIC8gKG8uZW5kIC0gby5zdGFydCkpKTtcclxuICAgICAgICAgICAgICAgIHJhd1Byb2dyZXNzID0gcHJvZ3Jlc3M7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvZ3Jlc3MgPT09IGxhc3RQcm9ncmVzcylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5TbW9vdGhpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxTbW9vdGhpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmF3TGFzdFByb2dyZXNzID09PSByYXdQcm9ncmVzcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG8uc21vb3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJhd0xhc3RQcm9ncmVzcyA8IHJhd1Byb2dyZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzQWJzb3JwdGlvbiA9IHByb2dyZXNzQWJzb3JwdGlvbiAqIChyYXdQcm9ncmVzcyAtIG5leHRQcm9ncmVzcykgLyAocmF3TGFzdFByb2dyZXNzIC0gbmV4dFByb2dyZXNzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzQWJzb3JwdGlvbiA9IHByb2dyZXNzQWJzb3JwdGlvbiAqIChyYXdQcm9ncmVzcyAtIHByZXZQcm9ncmVzcykgLyAocmF3TGFzdFByb2dyZXNzIC0gcHJldlByb2dyZXNzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKChsYXN0UHJvZ3Jlc3NBYnNvcnB0aW9uIDwgMCAmJiBwcm9ncmVzc0Fic29ycHRpb24gPj0gMCkgfHwgKHByb2dyZXNzQWJzb3JwdGlvbiA8PSAwICYmIGxhc3RQcm9ncmVzc0Fic29ycHRpb24gPiAwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc0Fic29ycHRpb24gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzcyArPSBwcm9ncmVzc0Fic29ycHRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdFByb2dyZXNzQWJzb3JwdGlvbiA9IHByb2dyZXNzQWJzb3JwdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZSA9IChzbGlkZSAvIDEuNykgKyAoKHByb2dyZXNzIC0gbGFzdFByb2dyZXNzKSAvIGZyYW1lRGVsdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IGRpZmYgPSBwcm9ncmVzcyAtIGxhc3RQcm9ncmVzcztcclxuICAgICAgICAgICAgICAgIGxldCBvdmVybGltaXQgPSBNYXRoLmFicyhkaWZmKSA+IG1heFByb2dyZXNzSW5PbmVTdGVwO1xyXG4gICAgICAgICAgICAgICAgaWYgKG92ZXJsaW1pdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzID0gcHJvZ3Jlc3NUb1NhdmVQcm9ncmVzcyhsYXN0UHJvZ3Jlc3MgKyAoKChkaWZmID4gMCkgPyBtYXhQcm9ncmVzc0luT25lU3RlcFdpdGhvdXREZWx0YSA6IC1tYXhQcm9ncmVzc0luT25lU3RlcFdpdGhvdXREZWx0YSkgKiBmcmFtZURlbHRhKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobGFzdFByb2dyZXNzID09PSBtaW5BbmltYXRpb25Qcm9ncmVzcyB8fCBsYXN0UHJvZ3Jlc3MgPT09IG1heEFuaW1hdGlvblByb2dyZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5lZWRUb0NhbGN1bGF0ZUluaXRhbEZyYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZEZyYW1lc1swXSA9IGN1cnJlbnRGcmFtZShhbGxLZXlzLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmVlZFRvQ2FsY3VsYXRlSW5pdGFsRnJhbWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG8uaW5DYiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygby5pbkNiID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tvLmluQ2JdKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8uaW5DYi5jYWxsKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vYW5pbWF0aW9uXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShwcm9ncmVzc05hbWVTdHJpbmcsIE1hdGgucm91bmQocHJvZ3Jlc3MgKiAxMDApICsgXCIlXCIpO1xyXG4gICAgICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgICAgICBpZiAobGFzdEFuaW1hdGlvbiAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RBbmltYXRpb24uY2FuY2VsKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGhpc0FuaW1hdGlvbjtcclxuICAgICAgICAgICAgICAgIGxldCBvcCA9IHsgZHVyYXRpb246IDEwMCwgZmlsbDogXCJib3RoXCIsIGVhc2luZzogXCJsaW5lYXJcIiwgaXRlcmF0aW9uczogMSwgaXRlcmF0aW9uU3RhcnQ6IHByb2dyZXNzVG9TYXZlUHJvZ3Jlc3MoZWFzaW5nRnVuYyhwcm9ncmVzcykpIH07XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXNBbmltYXRpb24gPSB0aGlzLmFuaW1hdGUoZW5kRnJhbWVzLCBvcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpc0FuaW1hdGlvbi5wYXVzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RBbmltYXRpb24gPSB0aGlzQW5pbWF0aW9uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvckFuaW1hdGlvbihcIm1haW5cIiwgZW5kRnJhbWVzLCBvcCwgdGhpcywgZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NBYnNvcnB0aW9uID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzcyA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvdmVybGltaXQgJiYgIShwcm9ncmVzcyA8PSBtaW5BbmltYXRpb25Qcm9ncmVzcyB8fCBwcm9ncmVzcyA+PSBtYXhBbmltYXRpb25Qcm9ncmVzcykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm90SW5MaW1pdENvcnJlY3Rpb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub3RJbkxpbWl0Q29ycmVjdGlvbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXNBbmltYXRpb24gPT09IGxhc3RBbmltYXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZHlUb1NldEVuZFZhbHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoby5zbW9vdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzUmR5VG9TZXRFbmRWYWxzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJkeVRvU2V0RW5kVmFscyA9IG5ldyBTeW5jUHJvbSgocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc1JkeVRvU2V0RW5kVmFscyA9IHJlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpblNtb290aGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhbmNlbEFuaW1hdGlvblNtb290aGluZztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxTbW9vdGhpbmcgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvblNtb290aGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFuVXBTbW9vdGhlbmluZyh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzbW9vdGhQcm9ncmVzcyA9IHByb2dyZXNzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsb2NhbENvcHlPZlByb2dyZXNzID0gcHJvZ3Jlc3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtb290aCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHNtb290aCgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbmNlbEFuaW1hdGlvblNtb290aGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uU21vb3RoaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21vb3RoUHJvZ3Jlc3MgKz0gc2xpZGUgKiBmcmFtZURlbHRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZSA9IHNsaWRlICogLjU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRvIGJlIGhvbmVzdCBJIGRvbnQga25vdyB3aHkgdGhpcyBjYW50IGJlIGp1c3QgZG9uZSBvbmNlIGF0IHRvIHN0YXJ0IG9mIGNsZWFuVXBTbW9vdGhlbmluZyBidXQgd2lyZWQgdGhpbmdzIGhhcHBlbiBpZiBpdCBkb2VzbnQgZ28gaGVyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIGtleWZyYW1lcyBzaG93IHRoZSBwcm9ibGVtIHt0cmFuc2xhdGVYOiA1MDB9LCB7dHJhbnNsYXRlWTogNTAwLCBiYWNrZ3JvdW5kQ29sb3I6IFwicmVkXCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbW9vdGhQcm9ncmVzcyA9IHByb2dyZXNzVG9TYXZlUHJvZ3Jlc3Moc21vb3RoUHJvZ3Jlc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZWFzZWRTbW9vdGhQcm9ncmVzcyA9IGVhc2luZ0Z1bmMoc21vb3RoUHJvZ3Jlc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWluQm9yZGVyUmVhY2hlZCA9IGVhc2VkU21vb3RoUHJvZ3Jlc3MgPD0gbWluQW5pbWF0aW9uUHJvZ3Jlc3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYXhCb3JkZXJSZWFjaGVkID0gZWFzZWRTbW9vdGhQcm9ncmVzcyA+PSBtYXhBbmltYXRpb25Qcm9ncmVzcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1pbkJvcmRlclJlYWNoZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlYXNlZFNtb290aFByb2dyZXNzID0gbWluQW5pbWF0aW9uUHJvZ3Jlc3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG1heEJvcmRlclJlYWNoZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlYXNlZFNtb290aFByb2dyZXNzID0gbWF4QW5pbWF0aW9uUHJvZ3Jlc3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXN0QW5pbWF0aW9uICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0QW5pbWF0aW9uLmNhbmNlbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgb3AgPSB7IGR1cmF0aW9uOiAxMDAsIGZpbGw6IFwiYm90aFwiLCBlYXNpbmc6IFwibGluZWFyXCIsIGl0ZXJhdGlvbnM6IDEsIGl0ZXJhdGlvblN0YXJ0OiBlYXNlZFNtb290aFByb2dyZXNzIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0QW5pbWF0aW9uID0gdGhhdC5hbmltYXRlKGVuZEZyYW1lcywgb3ApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdEFuaW1hdGlvbi5wYXVzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvckFuaW1hdGlvbihcInNtb290aFwiLCBlbmRGcmFtZXMsIG9wLCB0aGF0LCBlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzQWJzb3JwdGlvbiA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzcyA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHNsaWRlKSA+PSAuMDAwMDAxICYmICEobWluQm9yZGVyUmVhY2hlZCB8fCBtYXhCb3JkZXJSZWFjaGVkKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShzbW9vdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhblVwU21vb3RoZW5pbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBjbGVhblVwU21vb3RoZW5pbmcoaHVycnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc21hbGxlclByb2dyZXNzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYmlnZ2VyUHJvZ3Jlc3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsb2NhbENvcHlPZlByb2dyZXNzIDwgc21vb3RoUHJvZ3Jlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsZXJQcm9ncmVzcyA9IGxvY2FsQ29weU9mUHJvZ3Jlc3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaWdnZXJQcm9ncmVzcyA9IHNtb290aFByb2dyZXNzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGxlclByb2dyZXNzID0gc21vb3RoUHJvZ3Jlc3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaWdnZXJQcm9ncmVzcyA9IGxvY2FsQ29weU9mUHJvZ3Jlc3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgeyBvZmZzZXQgfSBvZiBlbmRGcmFtZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvZmZzZXQgPD0gc21hbGxlclByb2dyZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldlByb2dyZXNzID0gb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAob2Zmc2V0ID49IGJpZ2dlclByb2dyZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFByb2dyZXNzID0gb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzQWJzb3JwdGlvbiA9IHByb2dyZXNzQWJzb3JwdGlvbiArICgoc21vb3RoUHJvZ3Jlc3MgLSBsb2NhbENvcHlPZlByb2dyZXNzKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RQcm9ncmVzc0Fic29ycHRpb24gPSBwcm9ncmVzc0Fic29ycHRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChodXJyeSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RQcm9ncmVzcyA9IHNtb290aFByb2dyZXNzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzcyA9IHNtb290aFByb2dyZXNzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpblNtb290aGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNSZHlUb1NldEVuZFZhbHMoaHVycnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZHlUb1NldEVuZFZhbHMgPSBTeW5jUHJvbS5yZXNvbHZlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJkeVRvU2V0RW5kVmFscy50aGVuKChodXJyeSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaHVycnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRGcmFtZSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY3MgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxLZXlzLmVhKChrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRGcmFtZVtrZXldID0gY3Nba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudEZyYW1lLnRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkICYmIGVsZW1zV2l0aG91dENvbnNpdGVudFRyYW5zZm9ybVByb3BzLmluY2x1ZGVzKGVsZW1zV2l0aG91dENvbnNpdGVudFRyYW5zZm9ybVByb3BzS2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzVHJhbnNQcm9wcy50cmFuc2Zvcm0gPSBjdXJyZW50RnJhbWUudHJhbnNmb3JtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbXNXaXRob3V0Q29uc2l0ZW50VHJhbnNmb3JtUHJvcHMucm0oZWxlbXNXaXRob3V0Q29uc2l0ZW50VHJhbnNmb3JtUHJvcHNLZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3QgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRyYW5zZm9ybSA9IHRoaXNUcmFuc1Byb3BzLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2Zvcm0gIT09IFwibm9uZVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRGcmFtZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgY3VycmVudEZyYW1lLnRyYW5zZm9ybTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNzcyhjdXJyZW50RnJhbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3NzQ2FuQmVVc2VkVG9GaWxsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0QW5pbWF0aW9uLmNhbmNlbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RBbmltYXRpb24gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2dyZXNzID09PSBtaW5BbmltYXRpb25Qcm9ncmVzcyB8fCBwcm9ncmVzcyA9PT0gbWF4QW5pbWF0aW9uUHJvZ3Jlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG8ub3V0Q2IgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvLm91dENiID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbby5vdXRDYl0oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvLm91dENiLmNhbGwodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGxldCBmaXJzdCA9IHRydWU7XHJcbiAgICAgICAgICAgIGd1aWRhbmNlLnN1YnNjcmliZSgocHJvZ3Jlc3MpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChmaXJzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1zV2l0aG91dENvbnNpdGVudFRyYW5zZm9ybVByb3BzLmFkZChlbGVtc1dpdGhvdXRDb25zaXRlbnRUcmFuc2Zvcm1Qcm9wc0tleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGFic3VsdXRlUHJvZ3Jlc3MgPSBwcm9ncmVzcztcclxuICAgICAgICAgICAgICAgIGlmIChub3RJbkxpbWl0Q29ycmVjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZ1bmN0aW9uIGVycm9yQW5pbWF0aW9uKHRocmVhZCwgd29ya2luZ0ZyYW1lcywgb3B0aW9ucywgdGhhdCwgZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiVW5leHBlY3RlZCBlcnJvciB3aGlsZSBhbmltYXRpbmcgKFRocmVhZDogXCIgKyB0aHJlYWQgKyBcIikgdXNpbmcgdGhlIGZvbGxvd2luZyBwYXJhbWV0ZXJzXFxuXFxuRnJhbWVzOiBcIiwgd29ya2luZ0ZyYW1lcywgXCJcXG5PcHRpb25zOiBcIiwgb3B0aW9ucywgXCJcXG5cXG5TZXR0aW5nIHByb2dyZXNzQWJzb3JwdGlvbiB0byAwIHRvIHByZXZlbnQgZnVydGhlciBmYWlsdXJlcy5cXG50aGlzOiBcIiwgdGhhdCwgXCJcXG5FeGNlcHRpb246IFxcblwiLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgICBjbGFzcyBTeW5jUHJvbSB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoY2IpIHtcclxuICAgICAgICAgICAgdGhpcy5fdGhlbiA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLmhhc0JlZW5SZXNlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoY2IgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgY2IodGhpcy5fcmVzLmJpbmQodGhpcyksIHRoaXMuX3Jlai5iaW5kKHRoaXMpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzID0gdGhpcy5fcmVzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWogPSB0aGlzLl9yZWo7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc3RhdGljIHJlc29sdmUocmVzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgU3luY1Byb20oKHIpID0+IHsgcihyZXMpOyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RhdGljIHJlamVjdCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTeW5jUHJvbSgociwgbikgPT4geyBuKCk7IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfcmVzKHZhbCkge1xyXG4gICAgICAgICAgICBsZXQgdGhlbiA9IHRoaXMuX3RoZW47XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhlbltpXSh2YWwpO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoZW5baV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5oYXNCZWVuUmVzZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnJlc1ZhbCA9IHZhbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgX3JlaigpIHtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX3RoZW47XHJcbiAgICAgICAgICAgIHRoaXMuaGFzQmVlblJlc2VkID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhlbih0bykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5oYXNCZWVuUmVzZWQpIHtcclxuICAgICAgICAgICAgICAgIHRvKHRoaXMucmVzVmFsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmhhc0JlZW5SZXNlZCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdGhlbi5hZGQodG8pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy9IYXJkY29kZSB0aGUgc3ByZWFkIG9mIG9mZnNldCBoZXJlIHNpbWlsaWFyIHRvIGhvdyBpdCBpcyBjYWxjdWxhdGVkIGludGVybiwgaW4gb3JkZXIgdG8gbGF0ZXIgaW5qZWN0IHNtb290aGVuZGVkIGZyYW1lLlxyXG4gICAgZnVuY3Rpb24gc3ByZWFkT2Zmc2V0KGZyYW1lcykge1xyXG4gICAgICAgIGZyYW1lcy5maXJzdC5vZmZzZXQgPSAwO1xyXG4gICAgICAgIGZyYW1lcy5sYXN0Lm9mZnNldCA9IDE7XHJcbiAgICAgICAgaWYgKGZyYW1lcy5sZW5ndGggPT09IDIpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBsZXQgbGFzdCA9IDE7XHJcbiAgICAgICAgbGV0IGxhc3RPZmZzZXQgPSAtMTtcclxuICAgICAgICBmb3IgKGxldCBpID0gbGFzdDsgaSA8IGZyYW1lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgbCA9IGkgKyAxO1xyXG4gICAgICAgICAgICBsZXQgbyA9IGZyYW1lc1tpXS5vZmZzZXQ7XHJcbiAgICAgICAgICAgIGlmIChvICE9PSB1bmRlZmluZWQgJiYgbyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG8gPj0gbGFzdE9mZnNldCAmJiBvID49IDAgJiYgbyA8PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdE9mZnNldCA9IG87XHJcbiAgICAgICAgICAgICAgICAgICAgZnJhbWVzLnNsaWNlKGxhc3QsIGwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGFydCA9IGZyYW1lc1tsYXN0IC0gMV0ub2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbmQgPSBmcmFtZXNbaV0ub2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzcGFjZSA9IChlbmQgLSBzdGFydCkgLyAobCAtIGxhc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBvZmZzZXQgPSBzdGFydDtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gbGFzdDsgaiA8IGk7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQgKz0gc3BhY2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lc1tqXS5vZmZzZXQgPSBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3QgPSBsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IFwiT2Zmc2V0cyBtdXN0IGJlIGdpdmVuIGluIGluY3JlbWVudGluZyBzZXF1ZW5jZSwgc3Bhbm5pbmcgYmV0d2VlbiAwIC0gMVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gdHJhbnNmb3JtIHByb3BzIGRpc3Rpbmd1aXNoXHJcbiAgICBmdW5jdGlvbiBjb252ZXJ0RnJhbWVTdHJ1Y3R1cmUob2IpIHtcclxuICAgICAgICBsZXQgbWF4ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gb2IpIHtcclxuICAgICAgICAgICAgbGV0IHggPSBvYltrZXldLmxlbmd0aDtcclxuICAgICAgICAgICAgaWYgKG1heCA8IHgpXHJcbiAgICAgICAgICAgICAgICBtYXggPSB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF4OyBpKyspIHtcclxuICAgICAgICAgICAgb1tpXSA9IHt9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gb2IpIHtcclxuICAgICAgICAgICAgb2Jba2V5XS5mb3JFYWNoKCh2YWwsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIG9baV1ba2V5XSA9IHZhbDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2V0dXBCYWNrZ3JvdW5kVGFzayh0YXNrLCBjb25zdHJhaW50ID0geyB0aW1lOiAxNiwgdGltZW91dDogMTYgfSkge1xyXG4gICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgIGlmIChjb25zdHJhaW50LnRpbWVvdXQgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgY29uc3RyYWludC50aW1lb3V0ID0gMTY7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdFF1ZXVlID0gW107XHJcbiAgICAgICAgbGV0IGltcG9ydGFuY2VTdHJ1Y3R1cmVIYXNDaGFuZ2VkID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IHJlY3Vyc2lvbk9uZ29pbmcgPSBmYWxzZTtcclxuICAgICAgICBsZXQgc3RhcnQ7XHJcbiAgICAgICAgbGV0IGl0ZXJhdGlvbnNBc0NvbnN0cmFpbnQgPSBcIml0ZXJhdGlvbnNcIiBpbiBjb25zdHJhaW50O1xyXG4gICAgICAgIGxldCBpbml0UmVjdXJzaW9uID0gaXRlcmF0aW9uc0FzQ29uc3RyYWludCA/ICgpID0+IHtcclxuICAgICAgICAgICAgc3RhcnQgPSAwO1xyXG4gICAgICAgIH0gOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXJ0ID0gbmV3IERhdGUoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGxldCBjb21wYWlyQ29uc3RyYWludCA9IGl0ZXJhdGlvbnNBc0NvbnN0cmFpbnQgPyAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBzdGFydCsrO1xyXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXJ0ID4gY29uc3RyYWludC5pdGVyYXRpb25zO1xyXG4gICAgICAgIH0gOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoKSAtIHN0YXJ0ID4gY29uc3RyYWludC50aW1lO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZnVuY3Rpb24gY2hhbmdlSW1wb3J0YW5jZVN0cnVjdHVyZSgpIHtcclxuICAgICAgICAgICAgaW1wb3J0YW5jZVN0cnVjdHVyZUhhc0NoYW5nZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gZXhlY3V0ZShwYXJhbXMsIGltcG9ydGFuY2UgPSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW1wb3J0YW5jZSBpbnN0YW5jZW9mIERhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0UXVldWUuYWRkKHsgaW1wb3J0YW5jZSwgcGFyYW1zLCByZXMgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW5jZS5zdWJzY3JpYmUoY2hhbmdlSW1wb3J0YW5jZVN0cnVjdHVyZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdFF1ZXVlLmFkZCh7IGltcG9ydGFuY2U6IHsgdmFsOiBpbXBvcnRhbmNlIH0sIHBhcmFtcywgcmVzIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZWN1cnNpb25PbmdvaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVjdXJzaW9uT25nb2luZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRSZWN1cnNpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjdXJzaXZlbHlDYWxsRWxlbXMoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiByZWN1cnNpdmVseUNhbGxFbGVtcygpIHtcclxuICAgICAgICAgICAgaWYgKGltcG9ydGFuY2VTdHJ1Y3R1cmVIYXNDaGFuZ2VkKSB7XHJcbiAgICAgICAgICAgICAgICBzb3J0UmVxdWVzdFF1ZXVlKCk7XHJcbiAgICAgICAgICAgICAgICBpbXBvcnRhbmNlU3RydWN0dXJlSGFzQ2hhbmdlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghcmVxdWVzdFF1ZXVlLmVtcHR5KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZWxlbSA9IHJlcXVlc3RRdWV1ZS5maXJzdDtcclxuICAgICAgICAgICAgICAgIGVsZW0ucmVzKHRhc2soLi4uZWxlbS5wYXJhbXMpKTtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RRdWV1ZS5ybUkoMCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29tcGFpckNvbnN0cmFpbnQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0UmVjdXJzaW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZWx5Q2FsbEVsZW1zKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgY29uc3RyYWludC50aW1lb3V0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICByZWN1cnNpdmVseUNhbGxFbGVtcygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVjdXJzaW9uT25nb2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHNvcnRSZXF1ZXN0UXVldWUoKSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3RRdWV1ZS5zb3J0KCh7IGltcG9ydGFuY2U6IGEgfSwgeyBpbXBvcnRhbmNlOiBiIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhLnZhbCAtIGIudmFsO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBwcm9ncmVzc1RvU2F2ZVByb2dyZXNzKHByb2dyZXNzKSB7XHJcbiAgICAgICAgaWYgKHByb2dyZXNzIDwgbWluQW5pbWF0aW9uUHJvZ3Jlc3MpXHJcbiAgICAgICAgICAgIHByb2dyZXNzID0gbWluQW5pbWF0aW9uUHJvZ3Jlc3M7XHJcbiAgICAgICAgZWxzZSBpZiAocHJvZ3Jlc3MgPiBtYXhBbmltYXRpb25Qcm9ncmVzcylcclxuICAgICAgICAgICAgcHJvZ3Jlc3MgPSBtYXhBbmltYXRpb25Qcm9ncmVzcztcclxuICAgICAgICByZXR1cm4gcHJvZ3Jlc3M7XHJcbiAgICB9XHJcbiAgICBsZXQgZ2V0U3R5bGVBdFByb2dyZXNzID0gKCgpID0+IHtcclxuICAgICAgICAvLyBUT0RPOiBtYXliZSBkb250IG1ha2Ugd3JhcHBlciwgYnV0IHVzZSBjdXJyZW50IGVsZW1lbnQgdG8gZGV0ZXJtaW4gc3R5bGUgXHJcbiAgICAgICAgLy8gKHRoZSBpZGVhIGlzIHRoYXQgd2hlbiB0aGUgYW5pbWF0aW9uIGlzIGNhbmNlbGVkIGltZWRpYXRseSBpdCBzaG91bGRudCBcclxuICAgICAgICAvLyBoYXZlIGFueSBpbXBhY3Qgb24gZHJhd24gZnJhbWVzKVxyXG4gICAgICAgIGxldCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImdldC1zdHlsZS1hdC1wcm9ncmVzcy1lbGVtZW50LXdyYXBwZXJcIik7XHJcbiAgICAgICAgd3JhcHBlci5jc3MoeyBkaXNwbGF5OiBcImJsb2NrXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMHZoXCIsIHRyYW5zbGF0ZVk6IFwiLTk5OTk5OTk5OXZoXCIgfSk7XHJcbiAgICAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZ2V0LXN0eWxlLWF0LXByb2dyZXNzLWVsZW1lbnRcIik7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcGQod3JhcHBlci5hcGQoZWxlbSkpO1xyXG4gICAgICAgIHJldHVybiBzZXR1cEJhY2tncm91bmRUYXNrKGdldFN0eWxlQXRQcm9ncmVzcyk7XHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0U3R5bGVBdFByb2dyZXNzKGZyYW1lcywgaW50cmVzdCkge1xyXG4gICAgICAgICAgICBsZXQgeyBrZXlzIH0gPSBpbnRyZXN0O1xyXG4gICAgICAgICAgICBsZXQgdHJhbnNmb3JtS2V5cyA9IFtdO1xyXG4gICAgICAgICAgICBrZXlzLmVhKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoVHJhbnNmb3JtUHJvcC5hcHBsaWVzKGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtS2V5cy5hZGQoZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBrZXlzLnJtViguLi50cmFuc2Zvcm1LZXlzKTtcclxuICAgICAgICAgICAgZnJhbWVzLmVhKChmcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZm9ybWF0Q3NzKGZyYW1lLCB0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGxldCBhbmltYXRpb24gPSBlbGVtLmFuaW1hdGUoZnJhbWVzLCB7XHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwLFxyXG4gICAgICAgICAgICAgICAgZmlsbDogXCJib3RoXCIsXHJcbiAgICAgICAgICAgICAgICBlYXNpbmc6IFwibGluZWFyXCIsXHJcbiAgICAgICAgICAgICAgICBpdGVyYXRpb25zOiAxLFxyXG4gICAgICAgICAgICAgICAgaXRlcmF0aW9uU3RhcnQ6IHByb2dyZXNzVG9TYXZlUHJvZ3Jlc3MoaW50cmVzdC5hdClcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGxldCByZXMgPSB7fTtcclxuICAgICAgICAgICAgbGV0IGNzID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtKTtcclxuICAgICAgICAgICAgaWYgKCF0cmFuc2Zvcm1LZXlzLmVtcHR5KSB7XHJcbiAgICAgICAgICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICAgICAgICAgIGxldCB0ID0gbmV3IFRyYW5zZm9ybVByb3AoKTtcclxuICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgdC50cmFuc2Zvcm0gPSBjcy50cmFuc2Zvcm07XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1LZXlzLmVhKChrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNba2V5XSA9IHQucHJpbWl0aXZlc1trZXldO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgayBvZiBrZXlzKSB7XHJcbiAgICAgICAgICAgICAgICByZXNba10gPSBjc1trXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhbmltYXRpb24uY2FuY2VsKCk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgfVxyXG4gICAgfSkoKTtcclxufVxyXG4vL2VtcHR5IG5vZGVzIHNlbGVjdG9yXHJcbi8vZXh0ZW5kIE5vZGVMcyBhcGkgd2l0aCBuYXRpdmUgSFRNTEVsZW1lbnQgZnVuY3Rpb25zIGxpa2UgcmVtb3ZlKClcclxuZXhwb3J0IGNsYXNzIE5vZGVMcyBleHRlbmRzIEFycmF5IHtcclxuICAgIGNvbnN0cnVjdG9yKC4uLmEpIHtcclxuICAgICAgICBzdXBlciguLi5hKTtcclxuICAgIH1cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRPRE86IGNoYW5nZSBmb3Igc3RhZ2dlciAoZGVsYXkgYmV0d2VlbiBlbGVtZW50cyBnZXQgYW5pbWF0ZWQpLCB3aGVuIHVuZGVmaW5lZCBhbGwgYXQgb25jZVxyXG4gICAgYXN5bmMgYW5pbShmcmFtZV9mcmFtZXMsIG9wdGlvbnMgPSB7fSwgZ3VpZGVkID0gZmFsc2UsIG9uZUFmdGVyVGhlT3RoZXIgPSBmYWxzZSkge1xyXG4gICAgICAgIHRoaXMud2FybihcImFuaW1cIik7XHJcbiAgICAgICAgaWYgKG9uZUFmdGVyVGhlT3RoZXIpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgZSBvZiB0aGlzKSB7XHJcbiAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgIGF3YWl0IGUuYW5pbShmcmFtZV9mcmFtZXMsIG9wdGlvbnMsIGd1aWRlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBscyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBlIG9mIHRoaXMpIHtcclxuICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgbHMuYWRkKGUuYW5pbShmcmFtZV9mcmFtZXMsIG9wdGlvbnMsIGd1aWRlZCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKGxzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvbih0eXBlLCBsaXN0ZW5lcikge1xyXG4gICAgICAgIHRoaXMuZXhlYyhcIm9uXCIsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBzaG93KCkge1xyXG4gICAgICAgIHRoaXMuZXhlYyhcInNob3dcIiwgYXJndW1lbnRzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge1xyXG4gICAgICAgIHRoaXMuZXhlYyhcInJlbW92ZUNsYXNzXCIsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBhcGQoLi4uZWxlbXMpIHtcclxuICAgICAgICB0aGlzLmV4ZWMoXCJhcGRcIiwgYXJndW1lbnRzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGVtcHR5Tm9kZXMoKSB7XHJcbiAgICAgICAgdGhpcy5leGVjKFwiZW1wdHlcIiwgYXJndW1lbnRzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGhpZGUoKSB7XHJcbiAgICAgICAgdGhpcy5leGVjKFwiaGlkZVwiLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgY3NzKGtleV9jc3MsIHZhbCkge1xyXG4gICAgICAgIHRoaXMuZXhlYyhcImNzc1wiLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgY2hpbGRzKHNlbGVjdG9yID0gMSkge1xyXG4gICAgICAgIGxldCBscyA9IG5ldyBOb2RlTHMoKTtcclxuICAgICAgICB0aGlzLmVhKChlKSA9PiB7XHJcbiAgICAgICAgICAgIGxzLmFkZCguLi5lLmNoaWxkcyhzZWxlY3RvcikpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBscztcclxuICAgIH1cclxuICAgIGFkZENsYXNzKC4uLmNsYXNzTmFtZXMpIHtcclxuICAgICAgICB0aGlzLmV4ZWMoXCJhZGRDbGFzc1wiLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgaGFzQ2xhc3MoLi4uY2xhc3NOYW1lcykge1xyXG4gICAgICAgIGxldCBoYXMgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZWEoKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFlLmhhc0NsYXNzKC4uLmNsYXNzTmFtZXMpKVxyXG4gICAgICAgICAgICAgICAgaGFzID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGhhcztcclxuICAgIH1cclxuICAgIHRvZ2dsZUNsYXNzKC4uLmNsYXNzTmFtZXMpIHtcclxuICAgICAgICB0aGlzLmV4ZWMoXCJ0b2dnbGVDbGFzc1wiLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgb2ZmKHR5cGUsIGxpc3RlbmVyKSB7XHJcbiAgICAgICAgdGhpcy5leGVjKFwib2ZmXCIsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBzZXQgaHRtbCh0bykge1xyXG4gICAgICAgIHRoaXMuZWEoKGUpID0+IHtcclxuICAgICAgICAgICAgZS5odG1sID0gdG87XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBnZXQgaHRtbCgpIHtcclxuICAgICAgICBsZXQgcyA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5lYSgoZSkgPT4ge1xyXG4gICAgICAgICAgICBzICs9IGUuaHRtbDtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcztcclxuICAgIH1cclxuICAgIHNldCBpbm5lcih0bykge1xyXG4gICAgICAgIHRoaXMuZWEoKGUpID0+IHtcclxuICAgICAgICAgICAgZS5pbm5lciA9IHRvO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgd2FybihjbWQpIHtcclxuICAgICAgICBpZiAodGhpcy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlRyeWluZyB0byBleGVjdXRlIGNvbW1hbmQgXFxcIlwiICsgY21kICsgXCJcXFwiIG9uIGVtcHR5IE5vZGVMcy5cIik7XHJcbiAgICB9XHJcbiAgICBleGVjKGZ1bmN0aW9uTmFtZSwgYXJncykge1xyXG4gICAgICAgIHRoaXMud2FybihmdW5jdGlvbk5hbWUpO1xyXG4gICAgICAgIHRoaXMuZWEoKGUpID0+IHtcclxuICAgICAgICAgICAgZVtmdW5jdGlvbk5hbWVdKC4uLmFyZ3MpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBUZWwge1xyXG4gICAgY29uc3RydWN0b3Iobm9kZXMsIGV2ZW50LCBsaXN0ZW5lciwgZW5hYmxlID0gdHJ1ZSkge1xyXG4gICAgICAgIHRoaXMuX2VuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnAgPSBuZXcgTmVsKHVuZGVmaW5lZCwgZXZlbnQsIGxpc3RlbmVyKTtcclxuICAgICAgICAvLyBXZSBsbCBvbmx5IHVzZSBtZXRob2RzIGhlcmUgdGhhdCBhcmUgYXZhbGFibGUgdG8gRXZlbnRUYXJnZXRzIGhlcmUgKG9uLCBvZmYpXHJcbiAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgaWYgKG5vZGVzIGluc3RhbmNlb2YgQXJyYXkpXHJcbiAgICAgICAgICAgIHRoaXMucC5ub2RlcyA9IG5ldyBOb2RlTHMoLi4ubm9kZXMpO1xyXG4gICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5wLm5vZGVzID0gbmV3IE5vZGVMcyhub2Rlcyk7XHJcbiAgICAgICAgaWYgKGVuYWJsZSlcclxuICAgICAgICAgICAgdGhpcy5lbmFibGUoKTtcclxuICAgIH1cclxuICAgIGdldCBldmVudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wLmV2ZW50O1xyXG4gICAgfVxyXG4gICAgZ2V0IGxpc3RlbmVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnAubGlzdGVuZXI7XHJcbiAgICB9XHJcbiAgICBzZXROb2RlKC4uLm5vZGUpIHtcclxuICAgICAgICB0aGlzLmRpc2FibGUoKTtcclxuICAgICAgICB0aGlzLnAubm9kZXMgPSBuZXcgTm9kZUxzKC4uLm5vZGUpO1xyXG4gICAgICAgIHRoaXMuZW5hYmxlKCk7XHJcbiAgICB9XHJcbiAgICBzZXQgZXZlbnQoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLmRpc2FibGUoKTtcclxuICAgICAgICB0aGlzLnAuZXZlbnQgPSBldmVudDtcclxuICAgICAgICB0aGlzLmVuYWJsZSgpO1xyXG4gICAgfVxyXG4gICAgc2V0IGxpc3RlbmVyKGxpc3RlbmVyKSB7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlKCk7XHJcbiAgICAgICAgdGhpcy5wLmxpc3RlbmVyID0gbGlzdGVuZXI7XHJcbiAgICAgICAgdGhpcy5lbmFibGUoKTtcclxuICAgIH1cclxuICAgIHNldCBlbmFibGVkKHRvKSB7XHJcbiAgICAgICAgaWYgKHRvKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9lbmFibGVkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB0aGlzLnAubm9kZXMub24odGhpcy5ldmVudCwgdGhpcy5saXN0ZW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2VuYWJsZWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIHRoaXMucC5ub2Rlcy5vZmYodGhpcy5ldmVudCwgdGhpcy5saXN0ZW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2VuYWJsZWQgPSB0bztcclxuICAgIH1cclxuICAgIGdldCBlbmFibGVkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbmFibGVkO1xyXG4gICAgfVxyXG4gICAgZW5hYmxlKCkge1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBkaXNhYmxlKCkge1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmVwYXRjaCgpIHtcclxuICAgICAgICB0aGlzLmRpc2FibGUoKTtcclxuICAgICAgICB0aGlzLmVuYWJsZSgpO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIE5lbCB7XHJcbiAgICAvL0B0cy1pZ25vcmVcclxuICAgIGNvbnN0cnVjdG9yKG5vZGVzLCBldmVudCwgbGlzdGVuZXIpIHtcclxuICAgICAgICB0aGlzLm5vZGVzID0gbm9kZXM7XHJcbiAgICAgICAgdGhpcy5ldmVudCA9IGV2ZW50O1xyXG4gICAgICAgIHRoaXMubGlzdGVuZXIgPSBsaXN0ZW5lcjtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBjbG9uZURhdGEoYSkge1xyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYSkpO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBFYXNpbmcge1xyXG4gICAgY29uc3RydWN0b3IoeDFfa2V5d29yZCwgeTEsIHgyLCB5Mikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgeDFfa2V5d29yZCAhPT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICB0aGlzLmtleXdvcmQgPSB4MV9rZXl3b3JkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy54MSA9IHgxX2tleXdvcmQ7XHJcbiAgICAgICAgICAgIHRoaXMueTEgPSB5MTtcclxuICAgICAgICAgICAgdGhpcy54MiA9IHgyO1xyXG4gICAgICAgICAgICB0aGlzLnkyID0geTI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0IHN0cmluZygpIHtcclxuICAgICAgICBpZiAodGhpcy5rZXl3b3JkID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybiBcImN1YmljLWJlemllcihcIiArIHRoaXMueDEgKyBcIixcIiArIHRoaXMueTEgKyBcIixcIiArIHRoaXMueDIgKyBcIixcIiArIHRoaXMueTIgKyBcIilcIjtcclxuICAgICAgICByZXR1cm4gY2FtZWxDYXNlVG9EYXNoKHRoaXMua2V5d29yZCk7XHJcbiAgICB9XHJcbiAgICBnZXQgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMua2V5d29yZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGxldCBmID0gRWFzaW5nLmtleXdvcmRzW2Rhc2hUb0NhbWVsQ2FzZSh0aGlzLmtleXdvcmQpXTtcclxuICAgICAgICAgICAgdGhpcy54MSA9IGZbMF07XHJcbiAgICAgICAgICAgIHRoaXMueTEgPSBmWzFdO1xyXG4gICAgICAgICAgICB0aGlzLngyID0gZlsyXTtcclxuICAgICAgICAgICAgdGhpcy55MiA9IGZbM107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBiYXoodGhpcy54MSwgdGhpcy55MSwgdGhpcy54MiwgdGhpcy55Mik7XHJcbiAgICB9XHJcbn1cclxuRWFzaW5nLmtleXdvcmRzID0ge1xyXG4gICAgbGluZWFyOiBbLjI1LCAuMjUsIC43NSwgLjc1XSxcclxuICAgIGVhc2U6IFsuMjUsIC4xLCAuMjUsIDFdLFxyXG4gICAgZWFzZUluOiBbLjQyLCAwLCAxLCAxXSxcclxuICAgIGVhc2VPdXQ6IFswLCAwLCAuNTgsIDFdLFxyXG4gICAgZWFzZUluT3V0OiBbLjQyLCAwLCAuNTgsIDFdXHJcbn07XHJcbiIsIi8qKlxuICogaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nXG4gKiBCZXppZXJFYXNpbmcgLSB1c2UgYmV6aWVyIGN1cnZlIGZvciB0cmFuc2l0aW9uIGVhc2luZyBmdW5jdGlvblxuICogYnkgR2HDq3RhbiBSZW5hdWRlYXUgMjAxNCAtIDIwMTUg4oCTIE1JVCBMaWNlbnNlXG4gKi9cblxuLy8gVGhlc2UgdmFsdWVzIGFyZSBlc3RhYmxpc2hlZCBieSBlbXBpcmljaXNtIHdpdGggdGVzdHMgKHRyYWRlb2ZmOiBwZXJmb3JtYW5jZSBWUyBwcmVjaXNpb24pXG52YXIgTkVXVE9OX0lURVJBVElPTlMgPSA0O1xudmFyIE5FV1RPTl9NSU5fU0xPUEUgPSAwLjAwMTtcbnZhciBTVUJESVZJU0lPTl9QUkVDSVNJT04gPSAwLjAwMDAwMDE7XG52YXIgU1VCRElWSVNJT05fTUFYX0lURVJBVElPTlMgPSAxMDtcblxudmFyIGtTcGxpbmVUYWJsZVNpemUgPSAxMTtcbnZhciBrU2FtcGxlU3RlcFNpemUgPSAxLjAgLyAoa1NwbGluZVRhYmxlU2l6ZSAtIDEuMCk7XG5cbnZhciBmbG9hdDMyQXJyYXlTdXBwb3J0ZWQgPSB0eXBlb2YgRmxvYXQzMkFycmF5ID09PSAnZnVuY3Rpb24nO1xuXG5mdW5jdGlvbiBBIChhQTEsIGFBMikgeyByZXR1cm4gMS4wIC0gMy4wICogYUEyICsgMy4wICogYUExOyB9XG5mdW5jdGlvbiBCIChhQTEsIGFBMikgeyByZXR1cm4gMy4wICogYUEyIC0gNi4wICogYUExOyB9XG5mdW5jdGlvbiBDIChhQTEpICAgICAgeyByZXR1cm4gMy4wICogYUExOyB9XG5cbi8vIFJldHVybnMgeCh0KSBnaXZlbiB0LCB4MSwgYW5kIHgyLCBvciB5KHQpIGdpdmVuIHQsIHkxLCBhbmQgeTIuXG5mdW5jdGlvbiBjYWxjQmV6aWVyIChhVCwgYUExLCBhQTIpIHsgcmV0dXJuICgoQShhQTEsIGFBMikgKiBhVCArIEIoYUExLCBhQTIpKSAqIGFUICsgQyhhQTEpKSAqIGFUOyB9XG5cbi8vIFJldHVybnMgZHgvZHQgZ2l2ZW4gdCwgeDEsIGFuZCB4Miwgb3IgZHkvZHQgZ2l2ZW4gdCwgeTEsIGFuZCB5Mi5cbmZ1bmN0aW9uIGdldFNsb3BlIChhVCwgYUExLCBhQTIpIHsgcmV0dXJuIDMuMCAqIEEoYUExLCBhQTIpICogYVQgKiBhVCArIDIuMCAqIEIoYUExLCBhQTIpICogYVQgKyBDKGFBMSk7IH1cblxuZnVuY3Rpb24gYmluYXJ5U3ViZGl2aWRlIChhWCwgYUEsIGFCLCBtWDEsIG1YMikge1xuICB2YXIgY3VycmVudFgsIGN1cnJlbnRULCBpID0gMDtcbiAgZG8ge1xuICAgIGN1cnJlbnRUID0gYUEgKyAoYUIgLSBhQSkgLyAyLjA7XG4gICAgY3VycmVudFggPSBjYWxjQmV6aWVyKGN1cnJlbnRULCBtWDEsIG1YMikgLSBhWDtcbiAgICBpZiAoY3VycmVudFggPiAwLjApIHtcbiAgICAgIGFCID0gY3VycmVudFQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFBID0gY3VycmVudFQ7XG4gICAgfVxuICB9IHdoaWxlIChNYXRoLmFicyhjdXJyZW50WCkgPiBTVUJESVZJU0lPTl9QUkVDSVNJT04gJiYgKytpIDwgU1VCRElWSVNJT05fTUFYX0lURVJBVElPTlMpO1xuICByZXR1cm4gY3VycmVudFQ7XG59XG5cbmZ1bmN0aW9uIG5ld3RvblJhcGhzb25JdGVyYXRlIChhWCwgYUd1ZXNzVCwgbVgxLCBtWDIpIHtcbiBmb3IgKHZhciBpID0gMDsgaSA8IE5FV1RPTl9JVEVSQVRJT05TOyArK2kpIHtcbiAgIHZhciBjdXJyZW50U2xvcGUgPSBnZXRTbG9wZShhR3Vlc3NULCBtWDEsIG1YMik7XG4gICBpZiAoY3VycmVudFNsb3BlID09PSAwLjApIHtcbiAgICAgcmV0dXJuIGFHdWVzc1Q7XG4gICB9XG4gICB2YXIgY3VycmVudFggPSBjYWxjQmV6aWVyKGFHdWVzc1QsIG1YMSwgbVgyKSAtIGFYO1xuICAgYUd1ZXNzVCAtPSBjdXJyZW50WCAvIGN1cnJlbnRTbG9wZTtcbiB9XG4gcmV0dXJuIGFHdWVzc1Q7XG59XG5cbmZ1bmN0aW9uIExpbmVhckVhc2luZyAoeCkge1xuICByZXR1cm4geDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiZXppZXIgKG1YMSwgbVkxLCBtWDIsIG1ZMikge1xuICBpZiAoISgwIDw9IG1YMSAmJiBtWDEgPD0gMSAmJiAwIDw9IG1YMiAmJiBtWDIgPD0gMSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2JlemllciB4IHZhbHVlcyBtdXN0IGJlIGluIFswLCAxXSByYW5nZScpO1xuICB9XG5cbiAgaWYgKG1YMSA9PT0gbVkxICYmIG1YMiA9PT0gbVkyKSB7XG4gICAgcmV0dXJuIExpbmVhckVhc2luZztcbiAgfVxuXG4gIC8vIFByZWNvbXB1dGUgc2FtcGxlcyB0YWJsZVxuICB2YXIgc2FtcGxlVmFsdWVzID0gZmxvYXQzMkFycmF5U3VwcG9ydGVkID8gbmV3IEZsb2F0MzJBcnJheShrU3BsaW5lVGFibGVTaXplKSA6IG5ldyBBcnJheShrU3BsaW5lVGFibGVTaXplKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrU3BsaW5lVGFibGVTaXplOyArK2kpIHtcbiAgICBzYW1wbGVWYWx1ZXNbaV0gPSBjYWxjQmV6aWVyKGkgKiBrU2FtcGxlU3RlcFNpemUsIG1YMSwgbVgyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFRGb3JYIChhWCkge1xuICAgIHZhciBpbnRlcnZhbFN0YXJ0ID0gMC4wO1xuICAgIHZhciBjdXJyZW50U2FtcGxlID0gMTtcbiAgICB2YXIgbGFzdFNhbXBsZSA9IGtTcGxpbmVUYWJsZVNpemUgLSAxO1xuXG4gICAgZm9yICg7IGN1cnJlbnRTYW1wbGUgIT09IGxhc3RTYW1wbGUgJiYgc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdIDw9IGFYOyArK2N1cnJlbnRTYW1wbGUpIHtcbiAgICAgIGludGVydmFsU3RhcnQgKz0ga1NhbXBsZVN0ZXBTaXplO1xuICAgIH1cbiAgICAtLWN1cnJlbnRTYW1wbGU7XG5cbiAgICAvLyBJbnRlcnBvbGF0ZSB0byBwcm92aWRlIGFuIGluaXRpYWwgZ3Vlc3MgZm9yIHRcbiAgICB2YXIgZGlzdCA9IChhWCAtIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSkgLyAoc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGUgKyAxXSAtIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSk7XG4gICAgdmFyIGd1ZXNzRm9yVCA9IGludGVydmFsU3RhcnQgKyBkaXN0ICoga1NhbXBsZVN0ZXBTaXplO1xuXG4gICAgdmFyIGluaXRpYWxTbG9wZSA9IGdldFNsb3BlKGd1ZXNzRm9yVCwgbVgxLCBtWDIpO1xuICAgIGlmIChpbml0aWFsU2xvcGUgPj0gTkVXVE9OX01JTl9TTE9QRSkge1xuICAgICAgcmV0dXJuIG5ld3RvblJhcGhzb25JdGVyYXRlKGFYLCBndWVzc0ZvclQsIG1YMSwgbVgyKTtcbiAgICB9IGVsc2UgaWYgKGluaXRpYWxTbG9wZSA9PT0gMC4wKSB7XG4gICAgICByZXR1cm4gZ3Vlc3NGb3JUO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYmluYXJ5U3ViZGl2aWRlKGFYLCBpbnRlcnZhbFN0YXJ0LCBpbnRlcnZhbFN0YXJ0ICsga1NhbXBsZVN0ZXBTaXplLCBtWDEsIG1YMik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIEJlemllckVhc2luZyAoeCkge1xuICAgIC8vIEJlY2F1c2UgSmF2YVNjcmlwdCBudW1iZXIgYXJlIGltcHJlY2lzZSwgd2Ugc2hvdWxkIGd1YXJhbnRlZSB0aGUgZXh0cmVtZXMgYXJlIHJpZ2h0LlxuICAgIGlmICh4ID09PSAwKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgaWYgKHggPT09IDEpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICByZXR1cm4gY2FsY0JlemllcihnZXRURm9yWCh4KSwgbVkxLCBtWTIpO1xuICB9O1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmZ1bmN0aW9uIGNhbWVsQ2FzZVRvRGFzaChjYW1lbENhc2VTdHJpbmcsIGpvaW5XaXRoID0gXCItXCIpIHtcclxuICAgIHJldHVybiBjYW1lbENhc2VTdHJpbmcucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgXCIkMVwiICsgam9pbldpdGggKyBcIiQyXCIpLnRvTG93ZXJDYXNlKCk7XHJcbn1cclxuZXhwb3J0cy5jYW1lbENhc2VUb0Rhc2ggPSBjYW1lbENhc2VUb0Rhc2g7XHJcbmZ1bmN0aW9uIHRvVXBwZXIobWF0Y2gsIGdyb3VwMSkge1xyXG4gICAgcmV0dXJuIGdyb3VwMSA/IGdyb3VwMS50b1VwcGVyQ2FzZSgpIDogJyc7XHJcbn1cclxudmFyIERFRkFVTFRfUkVHRVggPSAvWy1fXSsoLik/L2c7XHJcbmZ1bmN0aW9uIGRhc2hUb0NhbWVsQ2FzZShkYXNoU3RyaW5nLCBzcGxpdEF0KSB7XHJcbiAgICByZXR1cm4gZGFzaFN0cmluZy5yZXBsYWNlKHNwbGl0QXQgPyBuZXcgUmVnRXhwKCdbJyArIHNwbGl0QXQgKyAnXSsoLiknLCAnZycpIDogREVGQVVMVF9SRUdFWCwgdG9VcHBlcik7XHJcbn1cclxuZXhwb3J0cy5kYXNoVG9DYW1lbENhc2UgPSBkYXNoVG9DYW1lbENhc2U7XHJcbiIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImRlY29tcG9zZURPTU1hdHJpeFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJkZWNvbXBvc2VET01NYXRyaXhcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4vKioqKioqLyBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vKioqKioqLyBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuLyoqKioqKi8gXHRcdHJldHVybiBucztcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2RlY29tcG9zZURvbW1hdHJpeC5tanNcIik7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovICh7XG5cbi8qKiovIFwiLi9kZWNvbXBvc2VEb21tYXRyaXgubWpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL2RlY29tcG9zZURvbW1hdHJpeC5tanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihfX3dlYnBhY2tfbW9kdWxlX18sIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5ldmFsKFwiX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXFxcImRlZmF1bHRcXFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIGRlY29tcG9zZURPTU1hdHJpeDsgfSk7XFxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9kZWNvbXBvc2VNYXRyaXhfbWpzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2RlY29tcG9zZU1hdHJpeC5tanMgKi8gXFxcIi4vZGVjb21wb3NlTWF0cml4Lm1qc1xcXCIpO1xcbi8qXFxuXFxuRE9NTWF0cml4IGlzIGNvbHVtbiBtYWpvciwgbWVhbmluZzpcXG4gXyAgICAgICAgICAgICAgIF9cXG58IG0xMSBtMjEgbTMxIG00MSB8ICBcXG4gIG0xMiBtMjIgbTMyIG00MlxcbiAgbTEzIG0yMyBtMzMgbTQzXFxuICBtMTQgbTI0IG0zNCBtNDRcXG58XyAgICAgICAgICAgICAgIF98XFxuXFxuKi9cXG5cXG5cXG5cXG5mdW5jdGlvbiBkZWNvbXBvc2VET01NYXRyaXgoZG9tTWF0cml4KSB7XFxuXFx0Y29uc3QgaW5kZXhhYmxlVmVyc2lvbk9mTWF0cml4ID0gbmV3IEFycmF5KDQpO1xcblxcdGZvciAobGV0IGNvbHVtbkluZGV4ID0gMTsgY29sdW1uSW5kZXggPCA1OyBjb2x1bW5JbmRleCsrKSB7XFxuXFx0XFx0Y29uc3QgY29sdW1uQXJyYXkgPSBpbmRleGFibGVWZXJzaW9uT2ZNYXRyaXhbY29sdW1uSW5kZXggLSAxXSA9IG5ldyBBcnJheSg0KTtcXG5cXHRcXHRmb3IgKGxldCByb3dJbmRleCA9IDE7IHJvd0luZGV4IDwgNTsgcm93SW5kZXgrKykge1xcblxcdFxcdFxcdGNvbHVtbkFycmF5W3Jvd0luZGV4IC0gMV0gPSBkb21NYXRyaXhbYG0ke2NvbHVtbkluZGV4fSR7cm93SW5kZXh9YF07XFxuXFx0XFx0fVxcblxcdH1cXG5cXG5cXHRyZXR1cm4gT2JqZWN0KF9kZWNvbXBvc2VNYXRyaXhfbWpzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXFxcImRlZmF1bHRcXFwiXSkoaW5kZXhhYmxlVmVyc2lvbk9mTWF0cml4KTtcXG59XFxuXFxuLy8jIHNvdXJjZVVSTD13ZWJwYWNrOi8vZGVjb21wb3NlRE9NTWF0cml4Ly4vZGVjb21wb3NlRG9tbWF0cml4Lm1qcz9cIik7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vZGVjb21wb3NlTWF0cml4Lm1qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9kZWNvbXBvc2VNYXRyaXgubWpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24oX193ZWJwYWNrX21vZHVsZV9fLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuZXZhbChcIl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcXG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFxcXCJkZWZhdWx0XFxcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBkZWNvbXBvc2VNYXRyaXg7IH0pO1xcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfdmVjdG9yRnVuY3Rpb25zX21qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi92ZWN0b3JGdW5jdGlvbnMubWpzICovIFxcXCIuL3ZlY3RvckZ1bmN0aW9ucy5tanNcXFwiKTtcXG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3JvdW5kVG9UaHJlZVBsYWNlc19tanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vcm91bmRUb1RocmVlUGxhY2VzLm1qcyAqLyBcXFwiLi9yb3VuZFRvVGhyZWVQbGFjZXMubWpzXFxcIik7XFxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9xdWF0ZXJuaW9uVG9EZWdyZWVzWFlaX21qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9xdWF0ZXJuaW9uVG9EZWdyZWVzWFlaLm1qcyAqLyBcXFwiLi9xdWF0ZXJuaW9uVG9EZWdyZWVzWFlaLm1qc1xcXCIpO1xcbi8qXFxuXFxudGhpcyBjb2RlIGlzIGNvcGllZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC1uYXRpdmUvYmxvYi9tYXN0ZXIvTGlicmFyaWVzL1V0aWxpdGllcy9NYXRyaXhNYXRoLmpzI0w1NzIgYW5kIG1vZGlmaWVkXFxuZm9yIHNvbWUgY2xhcml0eSBhbmQgYmVpbmcgYWJsZSB0byB3b3JrIHN0YW5kYWxvbmUuIEV4cGVjdHMgdGhlIG1hdHJpeCB0byBiZSBhIDQtZWxlbWVudCBhcnJheSBvZiA0LWVsZW1lbnQgYXJyYXlzIG9mIG51bWJlcnMuXFxuXFxuW1xcbiAgICBbY29sdW1uMSByb3cxIHZhbHVlLCBjb2x1bW4xIHJvdzIgdmFsdWUsIGNvbHVtbjEgcm93MyB2YWx1ZV0sXFxuICAgIFtjb2x1bW4yIHJvdzEgdmFsdWUsIGNvbHVtbjIgcm93MiB2YWx1ZSwgY29sdW1uMiByb3czIHZhbHVlXSxcXG4gICAgW2NvbHVtbjMgcm93MSB2YWx1ZSwgY29sdW1uMyByb3cyIHZhbHVlLCBjb2x1bW4zIHJvdzMgdmFsdWVdLFxcbiAgICBbY29sdW1uNCByb3cxIHZhbHVlLCBjb2x1bW40IHJvdzIgdmFsdWUsIGNvbHVtbjQgcm93MyB2YWx1ZV1cXG5dXFxuXFxuKi9cXG5cXG5cXG5cXG5cXG5cXG5jb25zdCBSQURfVE9fREVHID0gMTgwIC8gTWF0aC5QSTtcXG5cXG5mdW5jdGlvbiBkZWNvbXBvc2VNYXRyaXgobWF0cml4KSB7XFxuXFx0Y29uc3QgcXVhdGVybmlvbiA9IG5ldyBBcnJheSg0KTtcXG5cXHRjb25zdCBzY2FsZSA9IG5ldyBBcnJheSgzKTtcXG5cXHRjb25zdCBza2V3ID0gbmV3IEFycmF5KDMpO1xcblxcdGNvbnN0IHRyYW5zbGF0aW9uID0gbmV3IEFycmF5KDMpO1xcblxcblxcdC8vIHRyYW5zbGF0aW9uIGlzIHNpbXBsZVxcblxcdC8vIGl0J3MgdGhlIGZpcnN0IDMgdmFsdWVzIGluIHRoZSBsYXN0IGNvbHVtblxcblxcdC8vIGkuZS4gbTQxIGlzIFggdHJhbnNsYXRpb24sIG00MiBpcyBZIGFuZCBtNDMgaXMgWlxcblxcdGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XFxuXFx0XFx0dHJhbnNsYXRpb25baV0gPSBtYXRyaXhbM11baV07XFxuXFx0fVxcblxcblxcdC8vIE5vdyBnZXQgc2NhbGUgYW5kIHNoZWFyLlxcblxcdGNvbnN0IG5vcm1hbGl6ZWRDb2x1bW5zID0gbmV3IEFycmF5KDMpO1xcblxcdGZvciAobGV0IGNvbHVtbkluZGV4ID0gMDsgY29sdW1uSW5kZXggPCAzOyBjb2x1bW5JbmRleCsrKSB7XFxuXFx0XFx0bm9ybWFsaXplZENvbHVtbnNbY29sdW1uSW5kZXhdID0gbWF0cml4W2NvbHVtbkluZGV4XS5zbGljZSgwLCAzKTtcXG5cXHR9XFxuXFxuXFx0Ly8gQ29tcHV0ZSBYIHNjYWxlIGZhY3RvciBhbmQgbm9ybWFsaXplIGZpcnN0IHJvdy5cXG5cXHRzY2FsZVswXSA9IF92ZWN0b3JGdW5jdGlvbnNfbWpzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXFxcImxlbmd0aFxcXCJdKG5vcm1hbGl6ZWRDb2x1bW5zWzBdKTtcXG5cXHRub3JtYWxpemVkQ29sdW1uc1swXSA9IF92ZWN0b3JGdW5jdGlvbnNfbWpzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXFxcIm5vcm1hbGl6ZVxcXCJdKG5vcm1hbGl6ZWRDb2x1bW5zWzBdLCBzY2FsZVswXSk7XFxuXFxuXFx0Ly8gQ29tcHV0ZSBYWSBzaGVhciBmYWN0b3IgYW5kIG1ha2UgMm5kIHJvdyBvcnRob2dvbmFsIHRvIDFzdC5cXG5cXHRza2V3WzBdID0gX3ZlY3RvckZ1bmN0aW9uc19tanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcXFwiZG90UHJvZHVjdFxcXCJdKG5vcm1hbGl6ZWRDb2x1bW5zWzBdLCBub3JtYWxpemVkQ29sdW1uc1sxXSk7XFxuXFx0bm9ybWFsaXplZENvbHVtbnNbMV0gPSBfdmVjdG9yRnVuY3Rpb25zX21qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1xcXCJsaW5lYXJDb21iaW5hdGlvblxcXCJdKG5vcm1hbGl6ZWRDb2x1bW5zWzFdLCBub3JtYWxpemVkQ29sdW1uc1swXSwgMS4wLCAtc2tld1swXSk7XFxuXFxuXFx0Ly8gTm93LCBjb21wdXRlIFkgc2NhbGUgYW5kIG5vcm1hbGl6ZSAybmQgcm93LlxcblxcdHNjYWxlWzFdID0gX3ZlY3RvckZ1bmN0aW9uc19tanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcXFwibGVuZ3RoXFxcIl0obm9ybWFsaXplZENvbHVtbnNbMV0pO1xcblxcdG5vcm1hbGl6ZWRDb2x1bW5zWzFdID0gX3ZlY3RvckZ1bmN0aW9uc19tanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcXFwibm9ybWFsaXplXFxcIl0obm9ybWFsaXplZENvbHVtbnNbMV0sIHNjYWxlWzFdKTtcXG5cXHRza2V3WzBdIC89IHNjYWxlWzFdO1xcblxcblxcdC8vIENvbXB1dGUgWFogYW5kIFlaIHNoZWFycywgb3J0aG9nb25hbGl6ZSAzcmQgcm93XFxuXFx0c2tld1sxXSA9IF92ZWN0b3JGdW5jdGlvbnNfbWpzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXFxcImRvdFByb2R1Y3RcXFwiXShub3JtYWxpemVkQ29sdW1uc1swXSwgbm9ybWFsaXplZENvbHVtbnNbMl0pO1xcblxcdG5vcm1hbGl6ZWRDb2x1bW5zWzJdID0gX3ZlY3RvckZ1bmN0aW9uc19tanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcXFwibGluZWFyQ29tYmluYXRpb25cXFwiXShub3JtYWxpemVkQ29sdW1uc1syXSwgbm9ybWFsaXplZENvbHVtbnNbMF0sIDEuMCwgLXNrZXdbMV0pO1xcblxcdHNrZXdbMl0gPSBfdmVjdG9yRnVuY3Rpb25zX21qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1xcXCJkb3RQcm9kdWN0XFxcIl0obm9ybWFsaXplZENvbHVtbnNbMV0sIG5vcm1hbGl6ZWRDb2x1bW5zWzJdKTtcXG5cXHRub3JtYWxpemVkQ29sdW1uc1syXSA9IF92ZWN0b3JGdW5jdGlvbnNfbWpzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXFxcImxpbmVhckNvbWJpbmF0aW9uXFxcIl0obm9ybWFsaXplZENvbHVtbnNbMl0sIG5vcm1hbGl6ZWRDb2x1bW5zWzFdLCAxLjAsIC1za2V3WzJdKTtcXG5cXG5cXHQvLyBOZXh0LCBnZXQgWiBzY2FsZSBhbmQgbm9ybWFsaXplIDNyZCByb3cuXFxuXFx0c2NhbGVbMl0gPSBfdmVjdG9yRnVuY3Rpb25zX21qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1xcXCJsZW5ndGhcXFwiXShub3JtYWxpemVkQ29sdW1uc1syXSk7XFxuXFx0bm9ybWFsaXplZENvbHVtbnNbMl0gPSBfdmVjdG9yRnVuY3Rpb25zX21qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1xcXCJub3JtYWxpemVcXFwiXShub3JtYWxpemVkQ29sdW1uc1syXSwgc2NhbGVbMl0pO1xcblxcdHNrZXdbMV0gLz0gc2NhbGVbMl07XFxuXFx0c2tld1syXSAvPSBzY2FsZVsyXTtcXG5cXG5cXHQvLyBBdCB0aGlzIHBvaW50LCB0aGUgbWF0cml4IGRlZmluZWQgaW4gbm9ybWFsaXplZENvbHVtbnMgaXMgb3J0aG9ub3JtYWwuXFxuXFx0Ly8gQ2hlY2sgZm9yIGEgY29vcmRpbmF0ZSBzeXN0ZW0gZmxpcC4gIElmIHRoZSBkZXRlcm1pbmFudFxcblxcdC8vIGlzIC0xLCB0aGVuIG5lZ2F0ZSB0aGUgbWF0cml4IGFuZCB0aGUgc2NhbGluZyBmYWN0b3JzLlxcblxcdGNvbnN0IHBkdW0zID0gX3ZlY3RvckZ1bmN0aW9uc19tanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcXFwiY3Jvc3NQcm9kdWN0XFxcIl0obm9ybWFsaXplZENvbHVtbnNbMV0sIG5vcm1hbGl6ZWRDb2x1bW5zWzJdKTtcXG5cXHRpZiAoX3ZlY3RvckZ1bmN0aW9uc19tanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcXFwiZG90UHJvZHVjdFxcXCJdKG5vcm1hbGl6ZWRDb2x1bW5zWzBdLCBwZHVtMykgPCAwKSB7XFxuXFx0XFx0Zm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcXG5cXHRcXHRcXHRzY2FsZVtpXSAqPSAtMTtcXG5cXHRcXHRcXHRub3JtYWxpemVkQ29sdW1uc1tpXVswXSAqPSAtMTtcXG5cXHRcXHRcXHRub3JtYWxpemVkQ29sdW1uc1tpXVsxXSAqPSAtMTtcXG5cXHRcXHRcXHRub3JtYWxpemVkQ29sdW1uc1tpXVsyXSAqPSAtMTtcXG5cXHRcXHR9XFxuXFx0fVxcblxcblxcdC8vIE5vdywgZ2V0IHRoZSByb3RhdGlvbnMgb3V0XFxuXFx0cXVhdGVybmlvblswXSA9XFxuXFx0XFx0MC41ICogTWF0aC5zcXJ0KE1hdGgubWF4KDEgKyBub3JtYWxpemVkQ29sdW1uc1swXVswXSAtIG5vcm1hbGl6ZWRDb2x1bW5zWzFdWzFdIC0gbm9ybWFsaXplZENvbHVtbnNbMl1bMl0sIDApKTtcXG5cXHRxdWF0ZXJuaW9uWzFdID1cXG5cXHRcXHQwLjUgKiBNYXRoLnNxcnQoTWF0aC5tYXgoMSAtIG5vcm1hbGl6ZWRDb2x1bW5zWzBdWzBdICsgbm9ybWFsaXplZENvbHVtbnNbMV1bMV0gLSBub3JtYWxpemVkQ29sdW1uc1syXVsyXSwgMCkpO1xcblxcdHF1YXRlcm5pb25bMl0gPVxcblxcdFxcdDAuNSAqIE1hdGguc3FydChNYXRoLm1heCgxIC0gbm9ybWFsaXplZENvbHVtbnNbMF1bMF0gLSBub3JtYWxpemVkQ29sdW1uc1sxXVsxXSArIG5vcm1hbGl6ZWRDb2x1bW5zWzJdWzJdLCAwKSk7XFxuXFx0cXVhdGVybmlvblszXSA9XFxuXFx0XFx0MC41ICogTWF0aC5zcXJ0KE1hdGgubWF4KDEgKyBub3JtYWxpemVkQ29sdW1uc1swXVswXSArIG5vcm1hbGl6ZWRDb2x1bW5zWzFdWzFdICsgbm9ybWFsaXplZENvbHVtbnNbMl1bMl0sIDApKTtcXG5cXG5cXHRpZiAobm9ybWFsaXplZENvbHVtbnNbMl1bMV0gPiBub3JtYWxpemVkQ29sdW1uc1sxXVsyXSkge1xcblxcdFxcdHF1YXRlcm5pb25bMF0gPSAtcXVhdGVybmlvblswXTtcXG5cXHR9XFxuXFx0aWYgKG5vcm1hbGl6ZWRDb2x1bW5zWzBdWzJdID4gbm9ybWFsaXplZENvbHVtbnNbMl1bMF0pIHtcXG5cXHRcXHRxdWF0ZXJuaW9uWzFdID0gLXF1YXRlcm5pb25bMV07XFxuXFx0fVxcblxcdGlmIChub3JtYWxpemVkQ29sdW1uc1sxXVswXSA+IG5vcm1hbGl6ZWRDb2x1bW5zWzBdWzFdKSB7XFxuXFx0XFx0cXVhdGVybmlvblsyXSA9IC1xdWF0ZXJuaW9uWzJdO1xcblxcdH1cXG5cXG5cXHQvLyBjb3JyZWN0IGZvciBvY2Nhc2lvbmFsLCB3ZWlyZCBFdWxlciBzeW5vbnltcyBmb3IgMmQgcm90YXRpb25cXG5cXHRsZXQgcm90YXRpb25EZWdyZWVzO1xcblxcdGlmIChcXG5cXHRcXHRxdWF0ZXJuaW9uWzBdIDwgMC4wMDEgJiZcXG5cXHRcXHRxdWF0ZXJuaW9uWzBdID49IDAgJiZcXG5cXHRcXHRxdWF0ZXJuaW9uWzFdIDwgMC4wMDEgJiZcXG5cXHRcXHRxdWF0ZXJuaW9uWzFdID49IDBcXG5cXHQpIHtcXG5cXHRcXHQvLyB0aGlzIGlzIGEgMmQgcm90YXRpb24gb24gdGhlIHotYXhpc1xcblxcdFxcdHJvdGF0aW9uRGVncmVlcyA9IFtcXG5cXHRcXHRcXHQwLFxcblxcdFxcdFxcdDAsXFxuXFx0XFx0XFx0T2JqZWN0KF9yb3VuZFRvVGhyZWVQbGFjZXNfbWpzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXFxcImRlZmF1bHRcXFwiXSkoXFxuXFx0XFx0XFx0XFx0KE1hdGguYXRhbjIobm9ybWFsaXplZENvbHVtbnNbMF1bMV0sIG5vcm1hbGl6ZWRDb2x1bW5zWzBdWzBdKSAqIDE4MCkgLyBNYXRoLlBJXFxuXFx0XFx0XFx0KVxcblxcdFxcdF07XFxuXFx0fSBlbHNlIHtcXG5cXHRcXHRyb3RhdGlvbkRlZ3JlZXMgPSBPYmplY3QoX3F1YXRlcm5pb25Ub0RlZ3JlZXNYWVpfbWpzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19bXFxcImRlZmF1bHRcXFwiXSkocXVhdGVybmlvbik7XFxuXFx0fVxcblxcblxcdC8vIGV4cG9zZSBib3RoIGJhc2UgZGF0YSBhbmQgY29udmVuaWVuY2UgbmFtZXNcXG5cXHRyZXR1cm4ge1xcblxcdFxcdHJvdGF0ZVg6IHJvdGF0aW9uRGVncmVlc1swXSxcXG5cXHRcXHRyb3RhdGVZOiByb3RhdGlvbkRlZ3JlZXNbMV0sXFxuXFx0XFx0cm90YXRlWjogcm90YXRpb25EZWdyZWVzWzJdLFxcblxcdFxcdHNjYWxlWDogT2JqZWN0KF9yb3VuZFRvVGhyZWVQbGFjZXNfbWpzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXFxcImRlZmF1bHRcXFwiXSkoc2NhbGVbMF0pLFxcblxcdFxcdHNjYWxlWTogT2JqZWN0KF9yb3VuZFRvVGhyZWVQbGFjZXNfbWpzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXFxcImRlZmF1bHRcXFwiXSkoc2NhbGVbMV0pLFxcblxcdFxcdHNjYWxlWjogT2JqZWN0KF9yb3VuZFRvVGhyZWVQbGFjZXNfbWpzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXFxcImRlZmF1bHRcXFwiXSkoc2NhbGVbMl0pLFxcblxcdFxcdHRyYW5zbGF0ZVg6IHRyYW5zbGF0aW9uWzBdLFxcblxcdFxcdHRyYW5zbGF0ZVk6IHRyYW5zbGF0aW9uWzFdLFxcblxcdFxcdHRyYW5zbGF0ZVo6IHRyYW5zbGF0aW9uWzJdLFxcblxcdFxcdHNrZXdYWTogT2JqZWN0KF9yb3VuZFRvVGhyZWVQbGFjZXNfbWpzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXFxcImRlZmF1bHRcXFwiXSkoc2tld1swXSkgKiBSQURfVE9fREVHLFxcblxcdFxcdHNrZXdYWjogT2JqZWN0KF9yb3VuZFRvVGhyZWVQbGFjZXNfbWpzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXFxcImRlZmF1bHRcXFwiXSkoc2tld1sxXSkgKiBSQURfVE9fREVHLFxcblxcdFxcdHNrZXdZWjogT2JqZWN0KF9yb3VuZFRvVGhyZWVQbGFjZXNfbWpzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXFxcImRlZmF1bHRcXFwiXSkoc2tld1syXSAqIFJBRF9UT19ERUcpXFxuXFx0fTtcXG59XFxuXFxuLy8jIHNvdXJjZVVSTD13ZWJwYWNrOi8vZGVjb21wb3NlRE9NTWF0cml4Ly4vZGVjb21wb3NlTWF0cml4Lm1qcz9cIik7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vcXVhdGVybmlvblRvRGVncmVlc1hZWi5tanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3F1YXRlcm5pb25Ub0RlZ3JlZXNYWVoubWpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogZGVmYXVsdCAqL1xuLyoqKi8gKGZ1bmN0aW9uKF9fd2VicGFja19tb2R1bGVfXywgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbmV2YWwoXCJfX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XFxuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcXFwiZGVmYXVsdFxcXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gcXVhdGVybmlvblRvRGVncmVlc1hZWjsgfSk7XFxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9yb3VuZFRvVGhyZWVQbGFjZXNfbWpzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3JvdW5kVG9UaHJlZVBsYWNlcy5tanMgKi8gXFxcIi4vcm91bmRUb1RocmVlUGxhY2VzLm1qc1xcXCIpO1xcbi8qXFxuXFxuIGNvcGllZCBmcm9tOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QtbmF0aXZlL2Jsb2IvbWFzdGVyL0xpYnJhcmllcy9VdGlsaXRpZXMvTWF0cml4TWF0aC5qc1xcblxcbiovXFxuXFxuXFxuXFxuXFxuY29uc3QgUkFEX1RPX0RFRyA9IDE4MCAvIE1hdGguUEk7XFxuXFxuZnVuY3Rpb24gcXVhdGVybmlvblRvRGVncmVlc1hZWihxdWF0ZXJuaW9uKSB7XFxuXFxuXFx0Y29uc3QgW3F4LCBxeSwgcXosIHF3XSA9IHF1YXRlcm5pb247XFxuXFx0Y29uc3QgcXcyID0gcXcgKiBxdztcXG5cXHRjb25zdCBxeDIgPSBxeCAqIHF4O1xcblxcdGNvbnN0IHF5MiA9IHF5ICogcXk7XFxuXFx0Y29uc3QgcXoyID0gcXogKiBxejtcXG5cXHRjb25zdCB0ZXN0ID0gcXggKiBxeSArIHF6ICogcXc7XFxuXFx0Y29uc3QgdW5pdCA9IHF3MiArIHF4MiArIHF5MiArIHF6MjtcXG5cXG5cXHRpZiAodGVzdCA+IDAuNDk5OTkgKiB1bml0KSB7XFxuXFx0ICByZXR1cm4gWzAsIDIgKiBNYXRoLmF0YW4yKHF4LCBxdykgKiBSQURfVE9fREVHLCA5MF07XFxuXFx0fVxcblxcdGlmICh0ZXN0IDwgLTAuNDk5OTkgKiB1bml0KSB7XFxuXFx0ICByZXR1cm4gWzAsIC0yICogTWF0aC5hdGFuMihxeCwgcXcpICogUkFEX1RPX0RFRywgLTkwXTtcXG5cXHR9XFxuXFxuXFx0cmV0dXJuIFtcXG5cXHQgIE9iamVjdChfcm91bmRUb1RocmVlUGxhY2VzX21qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1xcXCJkZWZhdWx0XFxcIl0pKFxcblxcdFxcdE1hdGguYXRhbjIoMiAqIHF4ICogcXcgLSAyICogcXkgKiBxeiwgMSAtIDIgKiBxeDIgLSAyICogcXoyKSAqIFJBRF9UT19ERUcsXFxuXFx0ICApLFxcblxcdCAgT2JqZWN0KF9yb3VuZFRvVGhyZWVQbGFjZXNfbWpzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXFxcImRlZmF1bHRcXFwiXSkoXFxuXFx0XFx0TWF0aC5hdGFuMigyICogcXkgKiBxdyAtIDIgKiBxeCAqIHF6LCAxIC0gMiAqIHF5MiAtIDIgKiBxejIpICogUkFEX1RPX0RFRyxcXG5cXHQgICksXFxuXFx0ICBPYmplY3QoX3JvdW5kVG9UaHJlZVBsYWNlc19tanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcXFwiZGVmYXVsdFxcXCJdKShNYXRoLmFzaW4oMiAqIHF4ICogcXkgKyAyICogcXogKiBxdykgKiBSQURfVE9fREVHKSxcXG5cXHRdO1xcblxcbn1cXG5cXG4vLyMgc291cmNlVVJMPXdlYnBhY2s6Ly9kZWNvbXBvc2VET01NYXRyaXgvLi9xdWF0ZXJuaW9uVG9EZWdyZWVzWFlaLm1qcz9cIik7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vcm91bmRUb1RocmVlUGxhY2VzLm1qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9yb3VuZFRvVGhyZWVQbGFjZXMubWpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24oX193ZWJwYWNrX21vZHVsZV9fLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuZXZhbChcIl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcXG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFxcXCJkZWZhdWx0XFxcIiwgZnVuY3Rpb24oKSB7IHJldHVybiByb3VuZFRvVGhyZWVQbGFjZXM7IH0pO1xcbi8qXFxuXFxuZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QtbmF0aXZlL2Jsb2IvbWFzdGVyL0xpYnJhcmllcy9VdGlsaXRpZXMvTWF0cml4TWF0aC5qc1xcblxcbiovIFxcblxcbmZ1bmN0aW9uIHJvdW5kVG9UaHJlZVBsYWNlcyhudW1iZXIpe1xcbiAgICBjb25zdCBhcnIgPSBudW1iZXIudG9TdHJpbmcoKS5zcGxpdCgnZScpO1xcbiAgICByZXR1cm4gTWF0aC5yb3VuZChhcnJbMF0gKyAnZScgKyAoYXJyWzFdID8gK2FyclsxXSAtIDMgOiAzKSkgKiAwLjAwMTtcXG59XFxuXFxuLy8jIHNvdXJjZVVSTD13ZWJwYWNrOi8vZGVjb21wb3NlRE9NTWF0cml4Ly4vcm91bmRUb1RocmVlUGxhY2VzLm1qcz9cIik7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vdmVjdG9yRnVuY3Rpb25zLm1qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi92ZWN0b3JGdW5jdGlvbnMubWpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBsZW5ndGgsIG5vcm1hbGl6ZSwgZG90UHJvZHVjdCwgY3Jvc3NQcm9kdWN0LCBsaW5lYXJDb21iaW5hdGlvbiAqL1xuLyoqKi8gKGZ1bmN0aW9uKF9fd2VicGFja19tb2R1bGVfXywgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbmV2YWwoXCJfX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XFxuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcXFwibGVuZ3RoXFxcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBsZW5ndGg7IH0pO1xcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXFxcIm5vcm1hbGl6ZVxcXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gbm9ybWFsaXplOyB9KTtcXG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFxcXCJkb3RQcm9kdWN0XFxcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBkb3RQcm9kdWN0OyB9KTtcXG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFxcXCJjcm9zc1Byb2R1Y3RcXFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIGNyb3NzUHJvZHVjdDsgfSk7XFxuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcXFwibGluZWFyQ29tYmluYXRpb25cXFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIGxpbmVhckNvbWJpbmF0aW9uOyB9KTtcXG4vKlxcblxcbiBjb3BpZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QtbmF0aXZlL2Jsb2IvbWFzdGVyL0xpYnJhcmllcy9VdGlsaXRpZXMvTWF0cml4TWF0aC5qcyNMNTcyXFxuXFxuIHZlY3RvcnMgYXJlIGp1c3QgYXJyYXlzIG9mIG51bWJlcnNcXG5cXG4qL1xcblxcbmZ1bmN0aW9uIGxlbmd0aCh2ZWN0b3IpIHtcXG4gICAgcmV0dXJuIE1hdGguc3FydChcXG4gICAgICAgIHZlY3RvclswXSAqIHZlY3RvclswXSArIFxcbiAgICAgICAgdmVjdG9yWzFdICogdmVjdG9yWzFdICsgXFxuICAgICAgICB2ZWN0b3JbMl0gKiB2ZWN0b3JbMl1cXG4gICAgKTtcXG59XFxuXFxuZnVuY3Rpb24gbm9ybWFsaXplKHZlY3RvciwgcHJlQ29tcHV0ZWRWZWN0b3JMZW5ndGgpIHtcXG4gICAgcmV0dXJuIFtcXG4gICAgICAgIHZlY3RvclswXS9wcmVDb21wdXRlZFZlY3Rvckxlbmd0aCwgXFxuICAgICAgICB2ZWN0b3JbMV0vcHJlQ29tcHV0ZWRWZWN0b3JMZW5ndGgsXFxuICAgICAgICB2ZWN0b3JbMl0vcHJlQ29tcHV0ZWRWZWN0b3JMZW5ndGhcXG4gICAgXTtcXG59XFxuXFxuZnVuY3Rpb24gZG90UHJvZHVjdCh2ZWN0b3JBLCB2ZWN0b3JCKSB7XFxuICAgIHJldHVybiAoXFxuICAgICAgICB2ZWN0b3JBWzBdICogdmVjdG9yQlswXSArXFxuICAgICAgICB2ZWN0b3JBWzFdICogdmVjdG9yQlsxXSArXFxuICAgICAgICB2ZWN0b3JBWzJdICogdmVjdG9yQlsyXVxcbiAgICApO1xcbn1cXG5cXG5mdW5jdGlvbiBjcm9zc1Byb2R1Y3QodmVjdG9yQSwgdmVjdG9yQikge1xcbiAgICByZXR1cm4gW1xcbiAgICAgICAgdmVjdG9yQVsxXSAqIHZlY3RvckJbMl0gLSB2ZWN0b3JBWzJdICogdmVjdG9yQlsxXSxcXG4gICAgICAgIHZlY3RvckFbMl0gKiB2ZWN0b3JCWzBdIC0gdmVjdG9yQVswXSAqIHZlY3RvckJbMl0sXFxuICAgICAgICB2ZWN0b3JBWzBdICogdmVjdG9yQlsxXSAtIHZlY3RvckFbMV0gKiB2ZWN0b3JCWzBdXFxuICAgIF07XFxufVxcblxcbmZ1bmN0aW9uIGxpbmVhckNvbWJpbmF0aW9uKHZlY3RvckEsIHZlY3RvckIsIGFTY2FsZUZhY3RvciwgYlNjYWxlRmFjdG9yKSB7XFxuICAgIHJldHVybiBbXFxuICAgICAgICB2ZWN0b3JBWzBdICogYVNjYWxlRmFjdG9yICsgdmVjdG9yQlswXSAqIGJTY2FsZUZhY3RvcixcXG4gICAgICAgIHZlY3RvckFbMV0gKiBhU2NhbGVGYWN0b3IgKyB2ZWN0b3JCWzFdICogYlNjYWxlRmFjdG9yLFxcbiAgICAgICAgdmVjdG9yQVsyXSAqIGFTY2FsZUZhY3RvciArIHZlY3RvckJbMl0gKiBiU2NhbGVGYWN0b3JcXG4gICAgXTtcXG59XFxuXFxuLy8jIHNvdXJjZVVSTD13ZWJwYWNrOi8vZGVjb21wb3NlRE9NTWF0cml4Ly4vdmVjdG9yRnVuY3Rpb25zLm1qcz9cIik7XG5cbi8qKiovIH0pXG5cbi8qKioqKiovIH0pO1xufSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbi8vIFRoaXMgZmlsZSBiYXNpY2FsbHkgY29udGFpbnMgYSBvYnNlcnZhYmxlIENsYXNzIChjYWxsZWQgRGF0YSkgYW5kIGFcclxuLy8gRGF0YUJhc2Ugd2hpY2ggY29udGFpbnMgYSBrb21wbGV4IChub3QgcHJpbWl0aXYgdHlwZXMgPSBvYmplY3RzKVxyXG4vLyBtYXAgb2ZmIE9ic2VydmFibGVzIGFzIGlzIG9mdGVuIGdpdmVuIHdoZW4gcmVxdWVzdGluZyBkYXRhIChlLmcuIEpTT04pLlxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmxldCB4cnJheSA9IHJlcXVpcmUoXCJ4cnJheVwiKTtcclxueHJyYXkoKTtcclxuY29uc3QgeyBJbnZhbGlkVmFsdWVFeGNlcHRpb24gfSA9IHhycmF5O1xyXG5jbGFzcyBJbnZhbGlkS2V5IGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgY29uc3RydWN0b3Ioa2V5LCBkYXRhKSB7XHJcbiAgICAgICAgc3VwZXIoXCJJbnZhbGlkIGtleSBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgZm9yIHRoZSBmb2xsb3dpbmcgZGF0YSBzdHJ1Y3R1cmU6XFxuXCIgKyBkYXRhLnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuSW52YWxpZEtleSA9IEludmFsaWRLZXk7XHJcbmNsYXNzIEludmFsaWRDYXN0IGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgY29uc3RydWN0b3IoY2FzdEF0dGVtcHQpIHtcclxuICAgICAgICBzdXBlcihcIkNhbm5vdCBjYXN0IHRvIFwiICsgY2FzdEF0dGVtcHQubmFtZSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5JbnZhbGlkQ2FzdCA9IEludmFsaWRDYXN0O1xyXG4vLyBGb3JtYXRzIGZldGNoZWQgKCA9IHJhdykgZGF0YSBpbnRvIGFuIG5lc3RlZCBEYXRhIGNvbnN0cnVjdC5cclxuZnVuY3Rpb24gZm9ybWF0RGF0YShmZXRjaGVkLCBmb3JtYXRMb2NhdGlvbiwgZGVsZXRlVW5zZWVuVmFscyA9IGZhbHNlKSB7XHJcbiAgICBpZiAoZm9ybWF0TG9jYXRpb24gPT09IHVuZGVmaW5lZClcclxuICAgICAgICBmb3JtYXRMb2NhdGlvbiA9IG5ldyBEYXRhKG5ldyBmZXRjaGVkLmNvbnN0cnVjdG9yKCkpO1xyXG4gICAgbGV0IGxzO1xyXG4gICAgbGV0IHVwZGF0ZWRGb3JtYXRMb2NhdGlvbiA9IGZhbHNlO1xyXG4gICAgaWYgKGRlbGV0ZVVuc2VlblZhbHMpXHJcbiAgICAgICAgbHMgPSBbXTtcclxuICAgIGlmICh0eXBlb2YgZmV0Y2hlZCA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgIGZvciAobGV0IGQgaW4gZmV0Y2hlZCkge1xyXG4gICAgICAgICAgICBpZiAoIWZldGNoZWQuaGFzT3duUHJvcGVydHkoZCkpXHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgaWYgKGRlbGV0ZVVuc2VlblZhbHMpXHJcbiAgICAgICAgICAgICAgICBscy5hZGQoZCk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZmV0Y2hlZFtkXSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZvcm1hdExvY2F0aW9uLnZhbFtkXSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdExvY2F0aW9uLnZhbFtkXSA9IG5ldyBEYXRhKG5ldyBmZXRjaGVkW2RdLmNvbnN0cnVjdG9yKCkpO1xyXG4gICAgICAgICAgICAgICAgZm9ybWF0RGF0YShmZXRjaGVkW2RdLCBmb3JtYXRMb2NhdGlvbi52YWxbZF0sIGRlbGV0ZVVuc2VlblZhbHMpO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlZEZvcm1hdExvY2F0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChmb3JtYXRMb2NhdGlvbi52YWxbZF0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgZm9ybWF0TG9jYXRpb24udmFsW2RdID0gbmV3IERhdGEoZmV0Y2hlZFtkXSk7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVkRm9ybWF0TG9jYXRpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGZvcm1hdExvY2F0aW9uLnZhbFtkXSBpbnN0YW5jZW9mIERhdGEpXHJcbiAgICAgICAgICAgICAgICBmb3JtYXRMb2NhdGlvbi52YWxbZF0udmFsID0gZmV0Y2hlZFtkXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRlbGV0ZVVuc2VlblZhbHMpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgZCBpbiBmb3JtYXRMb2NhdGlvbi52YWwpIHtcclxuICAgICAgICAgICAgICAgIGlmICghZm9ybWF0TG9jYXRpb24udmFsLmhhc093blByb3BlcnR5KGQpKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFscy5pbmNsdWRlcyhkKSlcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZm9ybWF0TG9jYXRpb24udmFsIGluc3RhbmNlb2YgQXJyYXkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdExvY2F0aW9uLnZhbC5yZW1vdmVJKHBhcnNlSW50KGQpKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBmb3JtYXRMb2NhdGlvbi52YWxbZF07XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVkRm9ybWF0TG9jYXRpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vQHRzLWlnbm9yZSB3aGVuIHNvbWV0aGluZyBpcyBhZGRlZCBub3RpZnkgbGlzdGVuZXJzXHJcbiAgICAgICAgaWYgKHVwZGF0ZWRGb3JtYXRMb2NhdGlvbilcclxuICAgICAgICAgICAgZm9ybWF0TG9jYXRpb24ubm90aWZ5KHRydWUpO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAgICAgIGZvcm1hdExvY2F0aW9uLnZhbCA9IGZldGNoZWQ7XHJcbiAgICByZXR1cm4gZm9ybWF0TG9jYXRpb247XHJcbn1cclxuZnVuY3Rpb24gc2V0RGF0YShkYXRhLCBsb2NhdGlvbiwgY29tcGxldGUpIHtcclxuICAgIGlmICghKGxvY2F0aW9uIGluc3RhbmNlb2YgRGF0YSkgJiYgbG9jYXRpb24gIT09IHVuZGVmaW5lZClcclxuICAgICAgICBsb2NhdGlvbiA9IG5ldyBEYXRhKGxvY2F0aW9uKTtcclxuICAgIGxldCBkYXRhTG9jYXRpb24gPSBmb3JtYXREYXRhKGRhdGEsIGxvY2F0aW9uKTtcclxuICAgIGlmIChjb21wbGV0ZSAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgIGNvbXBsZXRlKCk7XHJcbiAgICByZXR1cm4gbmV3IERhdGFCYXNlKGRhdGFMb2NhdGlvbik7XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gc2V0RGF0YTtcclxuLypcclxuICogSG9sZHMgYW5kIGhhbmRsZXMgYWNjZXNzIHRvIGFuIGNvbXBsZXggbWFwIG9mIGRhdGEuIFRoaXMgZGF0YSBDb25zaXNpdHMgb2YgaW4gZWFjaCBvdGhlciBuZXh0ZWQgRGF0YSBpbnRzYW5jZXNcclxuICogKHRvIGluaXQgc3VjaCBhbiBtYXAsIGNvbnN1bHQgZm9ybWF0RGF0YS4pXHJcbiAqL1xyXG5jbGFzcyBEYXRhQmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgIH1cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiBcIkRhdGFCYXNlOiBcIiArIHRoaXMuZGF0YS50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIGEgcmVmZXJlbmNlIHRvIHN1YkRhdGEgZm91bmQgdW5kZXIgZ2l2ZW4ga2V5KHMpIC8gcGF0aFxyXG4gICAgICogQSByZWZlcmVuY2UgaXMgYSBuZXcgRGF0YUJhc2UgaW5zdGFuY2UganVzdCBjb250YWluaW5nIHRoZSByZWZlcmVuY2VkIERhdGFcclxuICAgICAqXHJcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIHJlc29sdmVzIHJlZmVyZW5jZXMgdmlhIHRoZSBcInJlY3Vyc2l2ZWx5IGFuY2hvcmVkIERhdGFcIiAocmFkKSBwcm9jZWR1cmUuIEZvciBmdXJ0aGVyXHJcbiAgICAgKiBpbnNpZ2h0cyB3aGF0IHRoaXMgbWVhbnMgcGxlYXNlIGNvbnN1bHQgdGhlIGRvY3VtZW50YXRpb24gb2YgdGhlIGZ1bmN0aW9uIHJhZFxyXG4gICAgICovXHJcbiAgICByZWYoLi4ua2V5cykge1xyXG4gICAgICAgIHJldHVybiBuZXcgRGF0YUJhc2UodGhpcy5yYWQoLi4ua2V5cykpO1xyXG4gICAgfVxyXG4gICAgcGVlayguLi5rZXlzKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRhQmFzZSh0aGlzLmZkcyguLi5rZXlzKSk7XHJcbiAgICB9XHJcbiAgICBjdXJyZW50KC4uLmtleXMpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuZmRzKC4uLmtleXMpKS52YWw7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIHVuZGVybHlpbmcgRGF0YSBmb3VuZCB1bmRlciBnaXZlbiBrZXkocykgLyBwYXRoXHJcbiAgICAgKiBTaW1pbGFyIHRvIHJlZiBidXQgbm90IHdyYXBwZWQgaW5zaWRlIGEgRGF0YUJhc2UgaW5zdGFuY2VcclxuICAgICAqXHJcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIHJlc29sdmVzIHJlZmVyZW5jZXMgdmlhIHRoZSBcInJlY3Vyc2l2ZWx5IGFuY2hvcmVkIERhdGFcIiAocmFkKSBwcm9jZWR1cmUuIEZvciBmdXJ0aGVyXHJcbiAgICAgKiBpbnNpZ2h0cyB3aGF0IHRoaXMgbWVhbnMgcGxlYXNlIGNvbnN1bHQgdGhlIGRvY3VtZW50YXRpb24gb2YgdGhlIGZ1bmN0aW9uIHJhZFxyXG4gICAgICovXHJcbiAgICBnZXQoa2V5LCBjYikge1xyXG4gICAgICAgIGlmICh0eXBlb2Yga2V5ID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiBrZXkgPT09IFwibnVtYmVyXCIgfHwga2V5IGluc3RhbmNlb2YgRGF0YSkge1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IChrZXkgaW5zdGFuY2VvZiBEYXRhKSA/IGtleSA6IHRoaXMucmFkKGtleSk7XHJcbiAgICAgICAgICAgIGlmIChjYiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhLnN1YnNjcmliZShjYik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IG1hcCA9IFtdO1xyXG4gICAgICAgICAgICBpZiAoY2IgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IChrZXlbaV0gaW5zdGFuY2VvZiBEYXRhKSA/IGtleVtpXSA6IHRoaXMucmFkKGtleVtpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3Vic2NyaWJ0aW9uID0gKHYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFwW2ldID0gdjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleS5sZW5ndGggPT09IG1hcC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2IoLi4ubWFwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLnN1YnNjcmliZShzdWJzY3JpYnRpb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgICAgICBtYXBbaV0gPSAoa2V5W2ldIGluc3RhbmNlb2YgRGF0YSkgPyBrZXlbaV0gOiB0aGlzLnJhZChrZXlbaV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNldChrZXksIHRvKSB7XHJcbiAgICAgICAgbGV0IGZkcyA9IHRoaXMuZmRzKGtleSk7XHJcbiAgICAgICAgZm9ybWF0RGF0YSh0bywgZmRzLCB0cnVlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyByZWN1cnNpdmVseSBhbmNob3JlZCBEYXRhIChyYWQpXHJcbiAgICAgKiBNZWFuaW5nIGZvciBlYWNoIG5lc3Rpbmcgc3RlcCB0aGVyZSB3aWxsIGJlIG9uZSBsaXN0ZW5lciBhdHRhdGNoZWQgdG8gZW5hYmxlIG9iamVjdHMgdG8gYmUgb2JzZXJ2ZWRcclxuICAgICAqIFRoaXMgaXMgdmVyeSByZXNvdXJjZSAobWVtKSBleHBlbnNpdmUuIFVzZSBvbmx5IHdoZW4gbmVjZXNzYXJ5XHJcbiAgICAgKi9cclxuICAgIHJhZCguLi5rZXlzKSB7XHJcbiAgICAgICAgbGV0IGxhc3QgPSB0aGlzLmRhdGE7XHJcbiAgICAgICAgbGV0IG9yZ2FuaXplZEtleXMgPSBrZXlzLmpvaW4oXCIuXCIpLnNwbGl0KFwiLlwiKTtcclxuICAgICAgICBvcmdhbml6ZWRLZXlzLmVhKChrKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChrICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV4dCA9IGxhc3QudmFsW2tdO1xyXG4gICAgICAgICAgICAgICAgaWYgKG5leHQgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgSW52YWxpZEtleShrLCBsYXN0KTtcclxuICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgbGFzdC5zdWJzY3JpYmVJbnRlcm5hbGx5KChhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYSA9IGFueVtrXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZHQgPSBhIGluc3RhbmNlb2YgRGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0eXBlb2YgYSA9PT0gXCJvYmplY3RcIiAmJiAhZHQpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0LnZhbCA9IChkdCkgPyBhLnZhbCA6IGE7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGxhc3QgPSBuZXh0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGxhc3Q7XHJcbiAgICB9XHJcbiAgICBmZHMoLi4ua2V5cykge1xyXG4gICAgICAgIGxldCBsYXN0ID0gdGhpcy5kYXRhO1xyXG4gICAgICAgIGxldCBvcmdhbml6ZWRLZXlzID0ga2V5cy5qb2luKFwiLlwiKS5zcGxpdChcIi5cIik7XHJcbiAgICAgICAgb3JnYW5pemVkS2V5cy5lYSgoaykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoayAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5leHQgPSBsYXN0LnZhbFtrXTtcclxuICAgICAgICAgICAgICAgIGlmIChuZXh0ID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEludmFsaWRLZXkoaywgbGFzdCk7XHJcbiAgICAgICAgICAgICAgICBsYXN0ID0gbmV4dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBsYXN0O1xyXG4gICAgfVxyXG4gICAgLy9UT0RPOiBtYWtlIHRoaXMgYXZhaWxhYmxlIGZvciBEQiBhcyBhIHdob2xlIGFuZCBsaW1pdCBhY2NlcyB2aWEgaW50ZXJmYWNlcyAoY29uZGl0aW5hbCB0eXBlcylcclxuICAgIGdldCBhc0FycmF5KCkge1xyXG4gICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgIGlmICh0aGlzLmRhdGEudmFsIGluc3RhbmNlb2YgQXJyYXkpXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0YUFycmF5KHRoaXMuZGF0YSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgSW52YWxpZENhc3QoQXJyYXkpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGFzTnVtYmVyKCkge1xyXG4gICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5kYXRhLnZhbCA9PT0gXCJudW1iZXJcIilcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRhTnVtYmVyKHRoaXMuZGF0YSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgSW52YWxpZENhc3QoTnVtYmVyKTtcclxuICAgIH1cclxuICAgIGVxdWFscyh0aGF0KSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGF0ID09PSB1bmRlZmluZWQpID8gZmFsc2UgOiB0aGlzLmRhdGEuZXF1YWxzKHRoYXQuZGF0YSwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBzYW1lKHRoYXQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLnZhbCA9PT0gdGhhdC5kYXRhLnZhbDtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkRhdGFCYXNlID0gRGF0YUJhc2U7XHJcbmNsYXNzIERhdGFOdW1iZXIgZXh0ZW5kcyBEYXRhQmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XHJcbiAgICAgICAgc3VwZXIoZGF0YSk7XHJcbiAgICB9XHJcbiAgICBpbmMoYnkgPSAxKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhLnZhbCArPSBieTtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLnZhbDtcclxuICAgIH1cclxuICAgIGRlYyhieSA9IDEpIHtcclxuICAgICAgICB0aGlzLmRhdGEudmFsIC09IGJ5O1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEudmFsO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuRGF0YU51bWJlciA9IERhdGFOdW1iZXI7XHJcbmNsYXNzIERhdGFBcnJheSBleHRlbmRzIERhdGFCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcclxuICAgICAgICBzdXBlcihkYXRhKTtcclxuICAgIH1cclxuICAgIGxpc3QobG9vcCwgc3RlcEludG9QYXRoQWZ0ZXJ3YXJkcyA9IFwiXCIpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoKCk7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgZW5kID0gbG9vcChuZXcgRGF0YUJhc2UodGhpcy5mZHMoaSwgc3RlcEludG9QYXRoQWZ0ZXJ3YXJkcykpLCBpKTtcclxuICAgICAgICAgICAgaWYgKGVuZCAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVuZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3JFYWNoKGxvb3AsIGJlZm9yZUxvb3AsIGFmdGVyTG9vcCwgc3RlcEludG9QYXRoQWZ0ZXJ3YXJkcyA9IFwiXCIpIHtcclxuICAgICAgICBsZXQgcHJvbXMgPSBbXTtcclxuICAgICAgICB0aGlzLmdldChcIlwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChiZWZvcmVMb29wICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICBwcm9tcy5hZGQoYmVmb3JlTG9vcCgpKTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLnZhbC5lYSgoZSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcHJvbXMuYWRkKGxvb3AobmV3IERhdGFCYXNlKHRoaXMuZmRzKGksIHN0ZXBJbnRvUGF0aEFmdGVyd2FyZHMpKSwgaSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcHJvbXMgPSBwcm9tcy5maWx0ZXIoKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlIGluc3RhbmNlb2YgUHJvbWlzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChhZnRlckxvb3AgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb21zLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChwcm9tcykudGhlbihhZnRlckxvb3ApO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIGFmdGVyTG9vcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHByb21zLmxlbmd0aCAhPT0gMClcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21zKTtcclxuICAgIH1cclxuICAgIGxlbmd0aChjYikge1xyXG4gICAgICAgIGlmIChjYiA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhLnZhbC5sZW5ndGg7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0KFwiXCIsIChhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYihhLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlYWxMZW5ndGgoY2IpIHtcclxuICAgICAgICBpZiAoY2IgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS52YWwucmVhbExlbmd0aDtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5nZXQoXCJcIiwgKGEpID0+IHtcclxuICAgICAgICAgICAgICAgIGNiKGEucmVhbExlbmd0aCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFsdGVyKGNiLCBpbml0YWxpemVMb29wID0gZmFsc2UpIHtcclxuICAgICAgICB0aGlzLmJlZm9yZUxhc3RDaGFuZ2UgPSB0aGlzLmRhdGEuY2xvbmUoKTtcclxuICAgICAgICBpZiAoaW5pdGFsaXplTG9vcCkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEudmFsLmVhKChlLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYihuZXcgRGF0YUJhc2UoZSksIGkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nZXQoXCJcIiwgKGEpID0+IHtcclxuICAgICAgICAgICAgbGV0IGluZGV4ZXNUb0JlQ2FsbGVkID0gW107XHJcbiAgICAgICAgICAgIGEuZWEoKGUsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbmRleGVzVG9CZUNhbGxlZC5hZGQoaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlLmVxdWFscyh0aGlzLmJlZm9yZUxhc3RDaGFuZ2UudmFsW2ldLCB0cnVlKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2IobmV3IERhdGFCYXNlKGUpLCBpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuYmVmb3JlTGFzdENoYW5nZS52YWwuZWEoKGUsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghaW5kZXhlc1RvQmVDYWxsZWQuaW5jbHVkZXMoaSkpXHJcbiAgICAgICAgICAgICAgICAgICAgY2IobnVsbCwgaSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmJlZm9yZUxhc3RDaGFuZ2UgPSB0aGlzLmRhdGEuY2xvbmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIG1vcnBoKGNiLCBpbml0YWxpemVMb29wID0gZmFsc2UpIHtcclxuICAgICAgICB0aGlzLmJlZm9yZUxhc3RDaGFuZ2UgPSB0aGlzLmRhdGEuY2xvbmUoKTtcclxuICAgICAgICBpZiAoaW5pdGFsaXplTG9vcCkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEudmFsLmVhKChlLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYihuZXcgRGF0YUJhc2UoZSksIGkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNiYSA9IERhdGFBcnJheS5tb3JwaE1hcC5nZXQodGhpcy5kYXRhKTtcclxuICAgICAgICBpZiAoY2JhID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIERhdGFBcnJheS5tb3JwaE1hcC5zZXQodGhpcy5kYXRhLCBbY2JdKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIGNiYS5hZGQoY2IpO1xyXG4gICAgfVxyXG4gICAgYWRkKHZhbCwgYXRJbmRleCkge1xyXG4gICAgICAgIGxldCBsZW5ndGggPSB0aGlzLmxlbmd0aCgpO1xyXG4gICAgICAgIGxldCBtYXhJbmRleCA9IGxlbmd0aCAtIDE7XHJcbiAgICAgICAgaWYgKGF0SW5kZXggPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgYXRJbmRleCA9IGxlbmd0aDtcclxuICAgICAgICB0aGlzLmRhdGEudmFsLlJldmVyc2UoKS5lYSgoZSwgaSkgPT4ge1xyXG4gICAgICAgICAgICBpID0gbWF4SW5kZXggLSBpO1xyXG4gICAgICAgICAgICBpZiAoaSA8IGF0SW5kZXgpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIC8vVEhJUyBJRiBJUyBORUNFU1NBUlkgQkVDQVVTRSBXSEVOIFNFVFRJTkcgRU1QVFkgQVJSQVkgU09MT1RTIFRPIFVOREVGSU5FRCBUSEVZIEdFVCBQSUNLRUQgVVAgQlkgSVRFUkFUT1JTXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEudmFsW2ldID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5kYXRhLnZhbFtpICsgMV07XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS52YWxbaSArIDFdID0gdGhpcy5kYXRhLnZhbFtpXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkZWxldGUgdGhpcy5kYXRhLnZhbFthdEluZGV4XTtcclxuICAgICAgICBsZXQgb2IgPSB7fTtcclxuICAgICAgICBvYlthdEluZGV4XSA9IHZhbDtcclxuICAgICAgICBmb3JtYXREYXRhKG9iLCB0aGlzLmRhdGEpO1xyXG4gICAgICAgIGxldCBjYmEgPSBEYXRhQXJyYXkubW9ycGhNYXAuZ2V0KHRoaXMuZGF0YSk7XHJcbiAgICAgICAgaWYgKGNiYSAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBjYmEuZWEoKGYpID0+IHtcclxuICAgICAgICAgICAgICAgIGYobmV3IERhdGFCYXNlKHRoaXMuZGF0YS52YWxbYXRJbmRleF0pLCBhdEluZGV4KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZW1vdmVJKGluZGV4LCBjbG9zZUdhcCA9IHRydWUpIHtcclxuICAgICAgICBpZiAoY2xvc2VHYXApXHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS52YWwucmVtb3ZlSShpbmRleCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5kYXRhLnZhbFtpbmRleF07XHJcbiAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgdGhpcy5kYXRhLm5vdGlmeSh0cnVlKTtcclxuICAgICAgICBsZXQgY2JhID0gRGF0YUFycmF5Lm1vcnBoTWFwLmdldCh0aGlzLmRhdGEpO1xyXG4gICAgICAgIGlmIChjYmEgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgY2JhLmVhKChmKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmKG51bGwsIGluZGV4KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZW1vdmVWKHZhbCwgY2xvc2VHYXAgPSB0cnVlKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBmb3JtYXREYXRhKHZhbCk7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5kYXRhLnZhbC5lYSgoZSwgaSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS5lcXVhbHMoZGF0YSkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoaW5kZXggPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEludmFsaWRWYWx1ZUV4Y2VwdGlvbih2YWwsIHRoaXMuZGF0YS50b1N0cmluZygpKTtcclxuICAgICAgICBpZiAoY2xvc2VHYXApXHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS52YWwucmVtb3ZlSShpbmRleCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5kYXRhLnZhbFtpbmRleF07XHJcbiAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgdGhpcy5kYXRhLm5vdGlmeSh0cnVlKTtcclxuICAgICAgICBsZXQgY2JhID0gRGF0YUFycmF5Lm1vcnBoTWFwLmdldCh0aGlzLmRhdGEpO1xyXG4gICAgICAgIGlmIChjYmEgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgY2JhLmVhKChmKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmKG51bGwsIGluZGV4KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuRGF0YUFycmF5Lm1vcnBoTWFwID0gbmV3IE1hcCgpO1xyXG5leHBvcnRzLkRhdGFBcnJheSA9IERhdGFBcnJheTtcclxuY2xhc3MgRGF0YSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih2YWwpIHtcclxuICAgICAgICB0aGlzLmNicyA9IFtdO1xyXG4gICAgICAgIHRoaXMuaW50ZXJuYWxDQnMgPSBbXTtcclxuICAgICAgICB0aGlzLnZhbCA9IHZhbDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU2V0IHRoZSB2YWxcclxuICAgICAqL1xyXG4gICAgc2V0IHZhbCh0bykge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbCA9PT0gdG8pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB0aGlzLl92YWwgPSB0bztcclxuICAgICAgICB0aGlzLm5vdGlmeShmYWxzZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGN1cnJlbnQgdmFsXHJcbiAgICAgKi9cclxuICAgIGdldCB2YWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU3Vic2NyaWJlIHRvIHZhbFxyXG4gICAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHdoaWNoIGdldHMgY2FsbGVkIHdoZW5ldmVyIHRoZSB2YWwgY2hhbmdlc1xyXG4gICAgICovXHJcbiAgICBzdWJzY3JpYmUoY2IsIGluaXQgPSB0cnVlKSB7XHJcbiAgICAgICAgdGhpcy5jYnMuYWRkKGNiKTtcclxuICAgICAgICBpZiAoaW5pdClcclxuICAgICAgICAgICAgY2IodGhpcy52YWwpO1xyXG4gICAgfVxyXG4gICAgc3Vic2NyaWJlSW50ZXJuYWxseShjYikge1xyXG4gICAgICAgIHRoaXMuaW50ZXJuYWxDQnMuYWRkKGNiKTtcclxuICAgICAgICBjYih0aGlzLnZhbCk7XHJcbiAgICB9XHJcbiAgICB1bnN1YnNjcmliZShjYikge1xyXG4gICAgICAgIGlmIChjYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhpcy5jYnMucmVtb3ZlKGNiKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuY2JzLmNsZWFyKCk7XHJcbiAgICB9XHJcbiAgICB0b1N0cmluZyh0YWJJbiA9IDAsIGluc2lkZU9iamVjdCA9IGZhbHNlKSB7XHJcbiAgICAgICAgdGFiSW4rKztcclxuICAgICAgICBsZXQgcyA9IFwiXCI7XHJcbiAgICAgICAgbGV0IHYgPSB0aGlzLnZhbDtcclxuICAgICAgICBpZiAodHlwZW9mIHYgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgbGV0IGhhc1Byb3BzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxldCBhciA9IHYgaW5zdGFuY2VvZiBBcnJheTtcclxuICAgICAgICAgICAgaWYgKGFyKVxyXG4gICAgICAgICAgICAgICAgcyArPSBcIltcIjtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcyArPSBcIntcIjtcclxuICAgICAgICAgICAgcyArPSBcIlxcblwiO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBrIGluIHYpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdi5oYXNPd25Qcm9wZXJ0eShrKSlcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGhhc1Byb3BzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgcyArPSBcIlxcdFwiLnJlcGVhdCh0YWJJbikgKyBrICsgXCI6IFwiICsgdltrXS50b1N0cmluZyh0YWJJbiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFoYXNQcm9wcylcclxuICAgICAgICAgICAgICAgIHMgPSBzLnN1YnN0cmluZygwLCBzLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHMgPSBzLnN1YnN0cmluZygwLCBzLmxlbmd0aCAtIDIpICsgXCJcXG5cIjtcclxuICAgICAgICAgICAgICAgIHMgKz0gXCJcXHRcIi5yZXBlYXQodGFiSW4gLSAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYXIpXHJcbiAgICAgICAgICAgICAgICBzICs9IFwiXVwiO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBzICs9IFwifVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IHN0ID0gdHlwZW9mIHYgPT09IFwic3RyaW5nXCI7XHJcbiAgICAgICAgICAgIGlmIChzdClcclxuICAgICAgICAgICAgICAgIHMgKz0gXCJcXFwiXCI7XHJcbiAgICAgICAgICAgIHMgKz0gdjtcclxuICAgICAgICAgICAgaWYgKHN0KVxyXG4gICAgICAgICAgICAgICAgcyArPSBcIlxcXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcyArPSBpbnNpZGVPYmplY3QgPyBcIixcIiA6IFwiXCI7XHJcbiAgICAgICAgcmV0dXJuIHMgKyBcIlxcblwiO1xyXG4gICAgfVxyXG4gICAgbm90aWZ5KHdpbGQgPSBmYWxzZSkge1xyXG4gICAgICAgIGxldCB2YWwgPSB0aGlzLnZhbDtcclxuICAgICAgICB0aGlzLmNicy5lYSgoZikgPT4ge1xyXG4gICAgICAgICAgICBmKHZhbCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKCF3aWxkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxDQnMuZWEoKGYpID0+IHtcclxuICAgICAgICAgICAgICAgIGYodmFsKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDb21wYXJlcyBpZiBhbGwga2V5cyBpbiB0aGlzIGFyZSBlcXVhbCB0byB0aGUgZXF1aXZlbGVudCBvbmVzIG9uIGRhdGFcclxuICAgICAqIERpZmZlcmVudCBEYXRhIEluc3RhbmNlcyBob2xkaW5nIHRoZSBzYW1lIHZhbHVlIGFyZSB0aGUgZXF1YWxcclxuICAgICAqIERhdGEgY2FuIGhhdmUgbW9yZSBrZXlzIHRoYW4gdGhpcyBhbmQgc3RpbGwgYmUgZXF1YWwuXHJcbiAgICAgKiBJZiB5b3UgZG9udCB3YW50IHRoaXMgcGFzcyBpbiB0cnVlIHRvIHRoZSBzdHJpY3QgcGFyYW0uIFRoaXMgd2lsbCBiZSBtb3JlIHJlY291cmNlIGludGVuc2l2ZVxyXG4gICAgICovXHJcbiAgICBlcXVhbHMoZGF0YSwgc3RyaWN0ID0gZmFsc2UpIHtcclxuICAgICAgICBsZXQgdiA9IHRoaXMudmFsO1xyXG4gICAgICAgIGlmIChkYXRhID09PSB1bmRlZmluZWQgfHwgZGF0YSA9PT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGxldCBkID0gZGF0YS52YWw7XHJcbiAgICAgICAgaWYgKHYgPT0gZClcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgbGV0IGxzO1xyXG4gICAgICAgIGlmIChzdHJpY3QpXHJcbiAgICAgICAgICAgIGxzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgayBpbiB2KSB7XHJcbiAgICAgICAgICAgIGlmICghdi5oYXNPd25Qcm9wZXJ0eShrKSlcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZiAoc3RyaWN0KVxyXG4gICAgICAgICAgICAgICAgbHMuYWRkKGspO1xyXG4gICAgICAgICAgICBpZiAodltrXSAhPT0gZFtrXSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZba10gaW5zdGFuY2VvZiBEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRba10gaW5zdGFuY2VvZiBEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXZba10uZXF1YWxzKGRba10sIHN0cmljdCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3RyaWN0KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGsgaW4gZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF2Lmhhc093blByb3BlcnR5KGspKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFscy5pbmNsdWRlcyhrKSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBjbG9uZSgpIHtcclxuICAgICAgICBsZXQgZDtcclxuICAgICAgICBsZXQgdiA9IHRoaXMudmFsO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdiA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBuZXcgdi5jb25zdHJ1Y3RvcigpO1xyXG4gICAgICAgICAgICBkID0gbmV3IERhdGEoZGF0YSk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGsgaW4gdikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF2Lmhhc093blByb3BlcnR5KGspKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICBkLnZhbFtrXSA9IHZba10uY2xvbmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIGQgPSBuZXcgRGF0YSh2KTtcclxuICAgICAgICBkLmludGVybmFsQ0JzLmFkZCguLi50aGlzLmludGVybmFsQ0JzKTtcclxuICAgICAgICBkLmNicy5hZGQoLi4udGhpcy5jYnMpO1xyXG4gICAgICAgIHJldHVybiBkO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuRGF0YSA9IERhdGE7XHJcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCc7XG4gIGNsYXNzIEV4Y2VwdGlvbiBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3Rvcihtc2cpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICB0aGlzLm1lc3NhZ2UgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICBpZiAobXNnICE9PSB1bmRlZmluZWQpIHRoaXMubWVzc2FnZSArPSBcIjogXCIgKyBtc2c7XG4gICAgfVxuICB9XG4gIGNsYXNzIEluZGV4T3V0T2ZCb3VuZHNFeGNlcHRpb24gZXh0ZW5kcyBFeGNlcHRpb24ge1xuICAgIGNvbnN0cnVjdG9yKGluZGV4LCBhcnJheSkge1xuICAgICAgc3VwZXIoXCJHaXZlbiB2YWx1ZSBcXFwiXCIgKyBpbmRleCArIFwiXFxcIiBtdXN0IGJlIGluIHJhbmdlIDAtXCIgKyAoYXJyYXkubGVuZ3RoLTEpICsgXCIuXCIpO1xuICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICAgIH1cbiAgfVxuICBjbGFzcyBJbnZhbGlkSW5wdXRFeGNlcHRpb24gZXh0ZW5kcyBFeGNlcHRpb24ge1xuICAgIGNvbnN0cnVjdG9yKG1zZykge1xuICAgICAgc3VwZXIoXCJHaXZlbiBpbnB1dCBpcyBpbnZhbGlkLlxcblwiICsgbXNnKTtcbiAgICB9XG4gIH1cbiAgY2xhc3MgSW52YWxpZENvbnN0cnVjdG9yRXhjZXB0aW9uIGV4dGVuZHMgRXhjZXB0aW9ue1xuICAgIGNvbnN0cnVjdG9yKG1zZyA9IFwiXCIpIHtcbiAgICAgIHN1cGVyKFwiR2l2ZW4gY29uc3RydWN0b3IgbXVzdCBpbmhlcml0IGZvcm0gQXJyYXkuXFxuXCIgKyBtc2cpO1xuICAgIH1cbiAgfVxuICBjbGFzcyBJbnZhbGlkVmFsdWVFeGNlcHRpb24gZXh0ZW5kcyBFeGNlcHRpb24ge1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlLCBhcnJheSkge1xuICAgICAgc3VwZXIoXCJVbmFibGUgdG8gZmluZCBnaXZlbiB2YWx1ZTogXCIgKyB2YWx1ZS5jb25zdHJ1Y3Rvci5uYW1lICsgXCIgXCIgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgKyBcIjsgd2l0aGluIGZvbGxvd2luZyBhcnJheTogXCIgKyBhcnJheS50b1N0cmluZygpKTtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgICB9XG4gIH1cblxuICAvL1Rocm93cyBJbmRleE91dE9mQm91bmRzRXhjZXB0aW9uIHdoZW4gZ2l2ZW4gaW5kZXggaXMgb3V0IG9mIGJvdW5kcyBvZiBhXG4gIGZ1bmN0aW9uIGlzSW5kZXgoaSwgYSkge1xuICAgIGlmKCFhLmhhc093blByb3BlcnR5KGkpKSB0aHJvdyBuZXcgSW5kZXhPdXRPZkJvdW5kc0V4Y2VwdGlvbihpLGEpO1xuICB9XG5cbiAgY29uc3QgYXIgPSBcInhycmF5XCI7XG5cbiAgZnVuY3Rpb24gaW5pdChBckNvbnN0ciA9IEFycmF5KSB7XG4gICAgaWYoIShuZXcgQXJDb25zdHIoKSBpbnN0YW5jZW9mIEFycmF5KSkgdGhyb3cgbmV3IEludmFsaWRDb25zdHJ1Y3RvckV4Y2VwdGlvbigpO1xuICAgIGlmIChBckNvbnN0ci54cnJheSA9PT0gYXIpIHJldHVybiBBckNvbnN0cjtcblxuICAgIEFyQ29uc3RyLnhycmF5ID0gYXI7XG5cbiAgICBsZXQgcCA9IEFyQ29uc3RyLnByb3RvdHlwZTtcblxuICAgIHAuZWFjaCA9IHAuZWEgPSBmdW5jdGlvbihmLCB0ID0gdGhpcykge1xuICAgICAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgZTtcbiAgICAgICAgbGV0IHN0YXJ0STtcbiAgICAgICAgZm9yIChzdGFydEkgPSAwOyBzdGFydEkgPCB0Lmxlbmd0aDsgc3RhcnRJKyspIHtcbiAgICAgICAgICBpZiAodC5oYXNPd25Qcm9wZXJ0eShzdGFydEkpKSB7XG4gICAgICAgICAgICBlID0gZi5jYWxsKHQsIHRbc3RhcnRJXSwgc3RhcnRJLCB0aGlzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzdGFydEkrKztcbiAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgcmV0dXJuIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgciA9IGF3YWl0IGU7XG4gICAgICAgICAgICBpZiAociAhPT0gdW5kZWZpbmVkKSByZXR1cm4gcjtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0STsgaSA8IHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgaWYgKCF0Lmhhc093blByb3BlcnR5KGkpKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgbGV0IGUgPSBhd2FpdCBmLmNhbGwodCwgdFtpXSwgaSwgdGhpcyk7XG4gICAgICAgICAgICAgIGlmIChlICE9PSB1bmRlZmluZWQpIHJldHVybiBlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgaWYgKGUgIT09IHVuZGVmaW5lZCkgcmV0dXJuIGU7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0STsgaSA8IHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghdC5oYXNPd25Qcm9wZXJ0eShpKSkgY29udGludWU7XG4gICAgICAgICAgICBsZXQgZSA9IGYuY2FsbCh0LCB0W2ldLCBpLCB0aGlzKTtcbiAgICAgICAgICAgIGlmIChlICE9PSB1bmRlZmluZWQpIHJldHVybiBlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwLCBcImVtcHR5XCIsIHtnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5sZW5ndGggPT09IDA7XG4gICAgfX0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHAsIFwibGFzdFwiLCB7Z2V0KCkge1xuICAgICAgaWYodGhpcy5sZW5ndGggPT09IDApIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICByZXR1cm4gdGhpc1t0aGlzLmxlbmd0aC0xXTtcbiAgICB9fSk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocCwgXCJyZWFsTGVuZ3RoXCIsIHtnZXQoKSB7XG4gICAgICBsZXQgbCA9IDA7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoaSkpIGwrKztcbiAgICAgIH1cbiAgICAgIHJldHVybiBsO1xuICAgIH19KTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwLCBcImZpcnN0XCIsIHtnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpc1swXTtcbiAgICB9fSk7XG5cbiAgICBwLmNsZWFyID0gZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmxlbmd0aCA9IDA7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcC5DbGVhciA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG5ldyBBckNvbnN0cigpO1xuICAgIH1cblxuICAgIHAuYWRkID0gZnVuY3Rpb24oLi4udmFsdWVzKSB7XG4gICAgICB0aGlzLnB1c2goLi4udmFsdWVzKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBwLkFkZCA9IGZ1bmN0aW9uKC4uLnZhbHVlcykge1xuICAgICAgcmV0dXJuIG5ldyBBckNvbnN0cigpLmFkZCguLi50aGlzKS5hZGQoLi4udmFsdWVzKTtcbiAgICB9XG5cbiAgICBwLnNldCA9IGZ1bmN0aW9uKGEgPSBbXSkge1xuICAgICAgaWYodGhpcyA9PT0gYSkgcmV0dXJuIHRoaXM7XG4gICAgICBpZihhIGluc3RhbmNlb2YgQXJyYXkpIHJldHVybiB0aGlzLmNsZWFyKCkuYWRkKC4uLmEpO1xuICAgICAgcmV0dXJuIHRoaXMuY2xlYXIoKS5hZGQoYSk7XG4gICAgfVxuICAgIHAuU2V0ID0gZnVuY3Rpb24oYSA9IFtdKSB7XG4gICAgICByZXR1cm4gbmV3IEFyQ29uc3RyKCkuYWRkKC4uLmEpO1xuICAgIH1cblxuICAgIHAuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLlNldCh0aGlzKTtcbiAgICB9XG5cbiAgICBwLlJldmVyc2UgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLlNldCh0aGlzKS5yZXZlcnNlKCk7XG4gICAgfVxuXG4gICAgcC5nYXRoZXIgPSBmdW5jdGlvbiguLi5hKSB7XG4gICAgICBhLmVhKChlKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5pbmNsdWRlcyhlKSkgdGhpcy5hZGQoZSk7XG4gICAgICB9KVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcC5HYXRoZXIgPSBmdW5jdGlvbiguLi5hKSB7XG4gICAgICBsZXQgdCA9IHRoaXMuY2xvbmUoKTtcbiAgICAgIGEuZWEoKGUpID0+IHtcbiAgICAgICAgaWYgKCF0LmluY2x1ZGVzKGUpKSB0LmFkZChlKTtcbiAgICAgIH0pXG4gICAgICByZXR1cm4gdDtcbiAgICB9XG5cbiAgICBsZXQgbWFyayA9IHt9O1xuXG4gICAgLy9UaHJvd3MgSW52YWxpZFZhbHVlRXhjZXB0aW9uIHdoZW4gdGhlIGdpdmVuIHZhbHVlIGNhbm5vdCBiZSBmb3VuZCB3aXRoaW5nIHRoaXNcbiAgICAvLyBUT0RPOiBkaWZmZXJlbnRhdGUgaW5kZXhhbGwgYW5kIGluZGV4Zmlyc3RcbiAgICBwLmluZGV4ID0gZnVuY3Rpb24oLi4udmFsdWVzKSB7XG4gICAgICBsZXQgdGhhdCA9IHRoaXMuU2V0KHRoaXMpO1xuICAgICAgbGV0IGluZGV4ZXMgPSBuZXcgQXJDb25zdHIoKTtcbiAgICAgIHZhbHVlcy5lYSgodikgPT4ge1xuICAgICAgICBpZighdGhpcy5pbmNsdWRlcyh2KSkgdGhyb3cgbmV3IEludmFsaWRWYWx1ZUV4Y2VwdGlvbih2LHRoaXMpO1xuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgIGxldCBpbmRleCA9IHRoYXQuaW5kZXhPZih2KTtcbiAgICAgICAgICBpZiAoaW5kZXhlcy5sYXN0ICE9PSBpbmRleCAmJiBpbmRleCAhPT0gLTEpe1xuICAgICAgICAgICAgaW5kZXhlcy5hZGQoaW5kZXgpO1xuICAgICAgICAgICAgdGhhdFtpbmRleF0gPSBtYXJrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBpbmRleGVzO1xuICAgIH1cbiAgICAvL1Rocm93cyBJbmRleE91dE9mQm91bmRzRXhjZXB0aW9uIHdoZW4gZ2l2ZW4gaW5kZXggaXMgb3V0IG9mIGJvdW5kcyBvZiB0aGlzXG4gICAgcC5yZW1vdmVJID0gZnVuY3Rpb24oLi4uaW5kaWNlcykge1xuICAgICAgbGV0IHJvbGxiYWNrID0gdGhpcy5TZXQodGhpcyk7XG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluZGljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpc0luZGV4KGluZGljZXNbaV0sIHRoaXMpXG4gICAgICAgICAgdGhpc1tpbmRpY2VzW2ldXSA9IG1hcms7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHRoaXNbaV0gPT09IG1hcmspIHtcbiAgICAgICAgICAgIHRoaXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgaS0tO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIEluZGV4T3V0T2ZCb3VuZHNFeGNlcHRpb24pIHRoaXMuc2V0KHJvbGxiYWNrKTtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBwLnJtSSA9IHAucmVtb3ZlSTtcbiAgICAvL1Rocm93cyBJbmRleE91dE9mQm91bmRzRXhjZXB0aW9uIHdoZW4gZ2l2ZW4gaW5kZXggaXMgb3V0IG9mIGJvdW5kcyBvZiB0aGlzXG4gICAgcC5SZW1vdmVJID0gZnVuY3Rpb24oLi4uaW5kaWNlcykge1xuICAgICAgcmV0dXJuIHRoaXMuU2V0KHRoaXMpLnJlbW92ZUkoLi4uaW5kaWNlcyk7XG4gICAgfVxuICAgIHAuUm1JID0gcC5SZW1vdmVJO1xuXG4gICAgLy9UaHJvd3MgSW52YWxpZFZhbHVlRXhjZXB0aW9uIHdoZW4gdGhlIGdpdmVuIHZhbHVlIGNhbm5vdCBiZSBmb3VuZCB3aXRoaW5nIHRoaXNcbiAgICBwLnJlbW92ZVYgPSBmdW5jdGlvbiguLi52YWx1ZXMpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbW92ZUkoLi4udGhpcy5pbmRleCguLi52YWx1ZXMpKTtcbiAgICB9XG4gICAgcC5ybVYgPSBwLnJlbW92ZVY7XG5cbiAgICAvL1Rocm93cyBJbnZhbGlkVmFsdWVFeGNlcHRpb24gd2hlbiB0aGUgZ2l2ZW4gdmFsdWUgY2Fubm90IGJlIGZvdW5kIHdpdGhpbmcgdGhpc1xuICAgIHAuUmVtb3ZlViA9IGZ1bmN0aW9uKC4uLnZhbHVlcykge1xuICAgICAgcmV0dXJuIHRoaXMuU2V0KHRoaXMpLnJlbW92ZVYoLi4udmFsdWVzKTtcbiAgICB9XG4gICAgcC5SbVYgPSBwLlJlbW92ZVY7XG5cbiAgICAvL1Rocm93cyBJbnZhbGlkVmFsdWVFeGNlcHRpb24gd2hlbiB0aGUgZ2l2ZW4gcGFyYW0gaXMgZGV0ZWN0ZWQgYXMgdmFsdWUgYnV0IGNhbm5vdCBiZSBmb3VuZCB3aXRoaW5nIHRoaXNcbiAgICBwLnJlbW92ZSA9IGZ1bmN0aW9uKC4uLnZhbHVlT3JJbmRleCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5yZW1vdmVJKC4uLnZhbHVlT3JJbmRleCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChlIGluc3RhbmNlb2YgSW5kZXhPdXRPZkJvdW5kc0V4Y2VwdGlvbikgdGhpcy5yZW1vdmVWKC4uLnZhbHVlT3JJbmRleCk7XG4gICAgICAgIGVsc2UgdGhyb3cgZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBwLnJtID0gcC5yZW1vdmU7XG5cbiAgICAvL1Rocm93cyBJbmRleE91dE9mQm91bmRzRXhjZXB0aW9uIHdoZW4gZ2l2ZW4gcGFyYW0gaXMgZGV0ZWN0ZWQgYXMgaW5kZXggYnV0IG91dCBvZiBib3VuZHMgb2YgdGhpc1xuICAgIC8vVGhyb3dzIEludmFsaWRWYWx1ZUV4Y2VwdGlvbiB3aGVuIHRoZSBnaXZlbiBwYXJhbSBpcyBkZXRlY3RlZCBhcyB2YWx1ZSBidXQgY2Fubm90IGJlIGZvdW5kIHdpdGhpbmcgdGhpc1xuICAgIHAuUmVtb3ZlID0gZnVuY3Rpb24oLi4udmFsdWVPckluZGV4KSB7XG4gICAgICByZXR1cm4gdGhpcy5TZXQodGhpcykucmVtb3ZlKC4uLnZhbHVlT3JJbmRleCk7XG4gICAgfVxuICAgIHAuUm0gPSBwLlJlbW92ZTtcblxuICAgIHAuR2V0ID0gZnVuY3Rpb24oLi4uaW5kZXhlcykge1xuICAgICAgbGV0IG4gPSBbXTtcbiAgICAgIGluZGV4ZXMuZmxhdChJbmZpbml0eSkuZm9yRWFjaCgoaSkgPT4ge1xuICAgICAgICBuLmFkZCh0aGlzW2ldKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG47XG4gICAgfVxuICAgIHAuZ2V0ID0gZnVuY3Rpb24oLi4uaW5kZXhlcykge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0KHRoaXMuR2V0KC4uLmluZGV4ZXMpKVxuICAgIH1cblxuICAgIHAuZGRhID0gZnVuY3Rpb24oLi4udmFsdWVzKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXZlcnNlKCkuYWRkKC4uLnZhbHVlcykucmV2ZXJzZSgpO1xuICAgIH1cbiAgICBwLkRkYSA9IGZ1bmN0aW9uKC4uLnZhbHVlcykge1xuICAgICAgcmV0dXJuIHRoaXMuUmV2ZXJzZSgpLmFkZCguLi52YWx1ZXMpLnJldmVyc2UoKTtcbiAgICB9XG5cbiAgICAvL1Rocm93cyBJbmRleE91dE9mQm91bmRzRXhjZXB0aW9uIHdoZW4gZ2l2ZW4gaW5kZXggaXMgb3V0IG9mIGJvdW5kcyBvZiBhXG4gICAgcC5yZW0gPSBmdW5jdGlvbihhbW91bnQpIHtcbiAgICAgIGlzSW5kZXgoYW1vdW50LHRoaXMpO1xuICAgICAgdGhpcy5sZW5ndGggLT0gYW1vdW50O1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8vVGhyb3dzIEluZGV4T3V0T2ZCb3VuZHNFeGNlcHRpb24gd2hlbiBnaXZlbiBpbmRleCBpcyBvdXQgb2YgYm91bmRzIG9mIGFcbiAgICBwLlJlbSA9IGZ1bmN0aW9uKGFtb3VudCkge1xuICAgICAgcmV0dXJuIHRoaXMuU2V0KHRoaXMpLnJlbShhbW91bnQpO1xuICAgIH1cblxuICAgIC8vVGhyb3dzIEluZGV4T3V0T2ZCb3VuZHNFeGNlcHRpb24gd2hlbiBnaXZlbiBpbmRleCBpcyBvdXQgb2YgYm91bmRzIG9mIGFcbiAgICBwLm1lciA9IGZ1bmN0aW9uKGFtb3VudCkge1xuICAgICAgcmV0dXJuIHRoaXMucmV2ZXJzZSgpLnJlbShhbW91bnQpLnJldmVyc2UoKTtcbiAgICB9XG4gICAgLy9UaHJvd3MgSW5kZXhPdXRPZkJvdW5kc0V4Y2VwdGlvbiB3aGVuIGdpdmVuIGluZGV4IGlzIG91dCBvZiBib3VuZHMgb2YgYVxuICAgIHAuTWVyID0gZnVuY3Rpb24oYW1vdW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5SZXZlcnNlKCkucmVtKGFtb3VudCkucmV2ZXJlc2UoKTtcbiAgICB9XG5cbiAgICAvL1Rocm93cyBJbmRleE91dE9mQm91bmRzRXhjZXB0aW9uIHdoZW4gZ2l2ZW4gaW5kZXgoZXMpIGFyZSBvdXQgb2YgYm91bmRzIG9mIHRoaXNcbiAgICAvL1Rocm93cyBJbnZhbGlkSW5wdXRFeGNlcHRpb24gd2hlbiBnaXZlbiBwYXJhbWV0ZXJzIGFyZSBub3QgZXF1YWwgaW4gbGVuZ3RoXG4gICAgcC5zd2FwSSA9IGZ1bmN0aW9uKGkxLCBpMikge1xuICAgICAgaTEgPSBbaTFdLmZsYXQoSW5maW5pdHkpO1xuICAgICAgaTIgPSBbaTJdLmZsYXQoSW5maW5pdHkpO1xuICAgICAgaWYoaTEubGVuZ3RoID09PSBpMi5sZW5ndGgpIHtcbiAgICAgICAgbGV0IHJvbGxiYWNrID0gdGhpcy5TZXQodGhpcyk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpMS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaXNJbmRleChpMVtpXSx0aGlzKTtcbiAgICAgICAgICAgIGlzSW5kZXgoaTJbaV0sdGhpcyk7XG4gICAgICAgICAgICBbdGhpc1tpMVtpXV0sdGhpc1tpMltpXV1dID0gW3RoaXNbaTJbaV1dLHRoaXNbaTFbaV1dXTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBpZihlIGluc3RhbmNlb2YgSW5kZXhPdXRPZkJvdW5kc0V4Y2VwdGlvbikgdGhpcy5zZXQocm9sbGJhY2spO1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZElucHV0RXhjZXB0aW9uKFwiUGFyYW1ldGVyIGkxIGFuZCBpMiBtdXN0IGV0aGVyIGJlIHR3byBpbmRleGVzLCBvciB0d28gaW5kZXgtQXJyYXlzIG9mIHRoZSBzYW1lIGxlbmd0aC5cIik7XG4gICAgfVxuICAgIC8vVGhyb3dzIEluZGV4T3V0T2ZCb3VuZHNFeGNlcHRpb24gd2hlbiBnaXZlbiBpbmRleChlcykgYXJlIG91dCBvZiBib3VuZHMgb2YgdGhpc1xuICAgIC8vVGhyb3dzIEludmFsaWRJbnB1dEV4Y2VwdGlvbiB3aGVuIGdpdmVuIHBhcmFtZXRlcnMgYXJlIG5vdCBlcXVhbCBpbiBsZW5ndGhcbiAgICBwLlN3YXBJID0gZnVuY3Rpb24oaTEsIGkyKSB7XG4gICAgICByZXR1cm4gdGhpcy5TZXQodGhpcykuc3dhcEkoaTEsIGkyKTtcbiAgICB9XG5cbiAgICAvL1Rocm93cyBJbnZhbGlkVmFsdWVFeGNlcHRpb24gd2hlbiB0aGUgZ2l2ZW4gdmFsdWUgY2Fubm90IGJlIGZvdW5kIHdpdGhpbmcgdGhpc1xuICAgIC8vVGhyb3dzIEludmFsaWRJbnB1dEV4Y2VwdGlvbiB3aGVuIGdpdmVuIHBhcmFtZXRlcnMgYXJlIG5vdCBlcXVhbCBpbiBsZW5ndGhcbiAgICBwLnN3YXBWID0gZnVuY3Rpb24odjEsIHYyKSB7XG4gICAgICB2MSA9IHRoaXMuU2V0KHYxKS5mbGF0KDIpO1xuICAgICAgdjIgPSB0aGlzLlNldCh2MikuZmxhdCgyKTtcbiAgICAgIGlmICh2MS5sZW5ndGggPT09IHYyLmxlbmd0aCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHYxLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdGhpcy5zd2FwSSh0aGlzLmluZGV4KHYxW2ldKSx0aGlzLmluZGV4KHYyW2ldKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZElucHV0RXhjZXB0aW9uKFwiUGFyYW1ldGVyIHYxIGFuZCB2MiBtdXN0IGV0aGVyIGJlIHR3byB2YWx1ZXMsIG9yIHR3byB2YWx1ZS1BcnJheXMgb2YgdGhlIHNhbWUgbGVuZ3RoLlwiKTtcbiAgICB9XG4gICAgLy9UaHJvd3MgSW52YWxpZFZhbHVlRXhjZXB0aW9uIHdoZW4gdGhlIGdpdmVuIHZhbHVlIGNhbm5vdCBiZSBmb3VuZCB3aXRoaW5nIHRoaXNcbiAgICAvL1Rocm93cyBJbnZhbGlkSW5wdXRFeGNlcHRpb24gd2hlbiBnaXZlbiBwYXJhbWV0ZXJzIGFyZSBub3QgZXF1YWwgaW4gbGVuZ3RoXG4gICAgcC5Td2FwViA9IGZ1bmN0aW9uKHYxLCB2Mikge1xuICAgICAgcmV0dXJuIHRoaXMuU2V0KHRoaXMpLnN3YXBWKHYxLCB2Mik7XG4gICAgfVxuXG4gICAgLy9UaHJvd3MgSW5kZXhPdXRPZkJvdW5kc0V4Y2VwdGlvbiB3aGVuIGdpdmVuIHBhcmFtIGlzIGRldGVjdGVkIGFzIGluZGV4IGJ1dCBvdXQgb2YgYm91bmRzIG9mIHRoaXNcbiAgICAvL1Rocm93cyBJbnZhbGlkVmFsdWVFeGNlcHRpb24gd2hlbiB0aGUgZ2l2ZW4gcGFyYW0gaXMgZGV0ZWN0ZWQgYXMgdmFsdWUgYnV0IGNhbm5vdCBiZSBmb3VuZCB3aXRoaW5nIHRoaXNcbiAgICBwLnN3YXAgPSBmdW5jdGlvbih2aTEsIHZpMikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5zd2FwSSh2aTEsIHZpMik7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChlIGluc3RhbmNlb2YgSW5kZXhPdXRPZkJvdW5kc0V4Y2VwdGlvbikgdGhpcy5zd2FwVih2aTEsIHZpMik7XG4gICAgICAgIGVsc2UgdGhyb3cgZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvL1Rocm93cyBJbmRleE91dE9mQm91bmRzRXhjZXB0aW9uIHdoZW4gZ2l2ZW4gcGFyYW0gaXMgZGV0ZWN0ZWQgYXMgaW5kZXggYnV0IG91dCBvZiBib3VuZHMgb2YgdGhpc1xuICAgIC8vVGhyb3dzIEludmFsaWRWYWx1ZUV4Y2VwdGlvbiB3aGVuIHRoZSBnaXZlbiBwYXJhbSBpcyBkZXRlY3RlZCBhcyB2YWx1ZSBidXQgY2Fubm90IGJlIGZvdW5kIHdpdGhpbmcgdGhpc1xuICAgIHAuU3dhcCA9IGZ1bmN0aW9uKHZpMSwgdmkyKSB7XG4gICAgICByZXR1cm4gdGhpcy5TZXQodGhpcykuc3dhcCh2aTEsIHZpMilcbiAgICB9XG5cbiAgICBwLnByaW9yID0gZnVuY3Rpb24oaSwgYnkgPSAxKSB7XG4gICAgICBsZXQgciA9IGkgLSBieTtcbiAgICAgIGlmIChyID49IDApIHJldHVybiB0aGlzW3JdO1xuICAgICAgcmV0dXJuIHRoaXNbdGhpcy5sZW5ndGgtKGJ5LWkpXVxuICAgIH1cbiAgICBwLm5leHQgPSBmdW5jdGlvbihpLCBieSA9IDEpIHtcbiAgICAgIGxldCByID0gaSArIGJ5O1xuICAgICAgaWYgKHIgPD0gdGhpcy5sZW5ndGgtMSkgcmV0dXJuIHRoaXNbcl07XG4gICAgICByZXR1cm4gdGhpc1tieS0oaS10aGlzLmxlbmd0aC0xKV1cbiAgICB9XG5cbiAgICBwLmluamVjdCA9IGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICB0aGlzLnNwbGljZShpbmRleCwgMCwgaXRlbSk7XG4gICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIHAuY29udGFpbnMgPSBmdW5jdGlvbiguLi52YWxzKSB7XG4gICAgICBmb3IgKGxldCB2IG9mIHZhbHMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmluY2x1ZGVzKHYpKSByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHAuZXhjbHVkZXMgPSBmdW5jdGlvbiguLi52YWxzKSB7XG4gICAgICBmb3IgKGxldCB2IG9mIHZhbHMpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5jbHVkZXModikpIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICByZXR1cm4gQXJDb25zdHJcbiAgfVxuICBpbml0LkV4Y2VwdGlvbiA9IEV4Y2VwdGlvbjtcbiAgaW5pdC5JbmRleE91dE9mQm91bmRzRXhjZXB0aW9uID0gSW5kZXhPdXRPZkJvdW5kc0V4Y2VwdGlvbjtcbiAgaW5pdC5JbnZhbGlkSW5wdXRFeGNlcHRpb24gPSBJbnZhbGlkSW5wdXRFeGNlcHRpb247XG4gIGluaXQuSW52YWxpZENvbnN0cnVjdG9yRXhjZXB0aW9uID0gSW52YWxpZENvbnN0cnVjdG9yRXhjZXB0aW9uO1xuICBpbml0LkludmFsaWRWYWx1ZUV4Y2VwdGlvbiA9IEludmFsaWRWYWx1ZUV4Y2VwdGlvbjtcbiAgLy9pbml0LnZlcnNpb24gPSBcInVua25vd25cIjtcbiAgcmV0dXJuIGluaXQ7XG59KCkpO1xuIiwiaW1wb3J0IGluaXQgZnJvbSBcIi4vLi4vZWRvbVwiO1xyXG5jb25zdCBjID0gZnVuY3Rpb24gKHF1ZXJ5KSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQuY2hpbGRzKHF1ZXJ5KTtcclxufTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcclxuICAgIGluaXQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICBsZXQgZWxlbSA9IGMoXCIjdGVzdFwiKVswXTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJkeVwiKTtcclxuICAgICAgICBlbGVtLmFuaW0oe1xyXG4gICAgICAgICAgICB0cmFuc2xhdGVYOiBbMjAwLCA2MDBdLFxyXG4gICAgICAgIH0sIHsgZHVyYXRpb246IDQwMDAgfSk7XHJcbiAgICB9KTtcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=