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
/* harmony import */ var delay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! delay */ "./node_modules/delay/index.js");
/* harmony import */ var delay__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(delay__WEBPACK_IMPORTED_MODULE_4__);





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
        let thisTransPropsCopy = new TransformProp(thisTransProps);
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
                    formatAnimationCss(frame, thisTransPropsCopy);
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
                formatAnimationCss(frame, thisTransPropsCopy);
            });
            allKeys = evaluateAllKeys(frames);
            endFrames = frames;
        }
        else {
            formatAnimationCss(frame_frames, thisTransPropsCopy);
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
//extend NodeLs api with native Element functions like remove()
class NodeLs extends Array {
    constructor(...a) {
        super(...a);
    }
    /**
     *
     * @param frame_frames frame / frames to be animated to
     * @param options additional options / duration
     * @param guided When ommited, animation plays instantly through a linear realTime Timeline (normally). When given, animation can be be controlled by setting guidance to values between (in options) given start (default: 0) and end (default: 100)
     * @param stagger Delay between animation executions on this elements. When true delay is one animation duration. When false or ommited no delay at all
     */
    async anim(frame_frames, options = {}, guidance, stagger) {
        this.warn("anim");
        if (stagger) {
            let awaitForAnimationDuration = stagger === true;
            for (let e of this) {
                let anim = e.anim(frame_frames, options, guidance);
                if (awaitForAnimationDuration)
                    await anim;
                //@ts-ignore
                else
                    await delay__WEBPACK_IMPORTED_MODULE_4___default()(stagger);
            }
        }
        else {
            let ls = [];
            for (let e of this) {
                ls.add(e.anim(frame_frames, options, guidance));
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
        return this.exec("off", arguments);
    }
    // Native methods
    scroll(xCoord_options, yCoord) {
        return this.exec("off", arguments);
    }
    scrollBy(xCoord_options, yCoord) {
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
        return this;
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

/***/ "./node_modules/delay/index.js":
/*!*************************************!*\
  !*** ./node_modules/delay/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const createAbortError = () => {
	const error = new Error('Delay aborted');
	error.name = 'AbortError';
	return error;
};

const createDelay = ({clearTimeout: defaultClear, setTimeout: set, willResolve}) => (ms, {value, signal} = {}) => {
	if (signal && signal.aborted) {
		return Promise.reject(createAbortError());
	}

	let timeoutId;
	let settle;
	let rejectFn;
	const clear = defaultClear || clearTimeout;

	const signalListener = () => {
		clear(timeoutId);
		rejectFn(createAbortError());
	};

	const cleanup = () => {
		if (signal) {
			signal.removeEventListener('abort', signalListener);
		}
	};

	const delayPromise = new Promise((resolve, reject) => {
		settle = () => {
			cleanup();
			if (willResolve) {
				resolve(value);
			} else {
				reject(value);
			}
		};

		rejectFn = reject;
		timeoutId = (set || setTimeout)(settle, ms);
	});

	if (signal) {
		signal.addEventListener('abort', signalListener, {once: true});
	}

	delayPromise.clear = () => {
		clear(timeoutId);
		timeoutId = null;
		cleanup();
		settle();
	};

	return delayPromise;
};

const delay = createDelay({willResolve: true});
delay.reject = createDelay({willResolve: false});
delay.createWithTimers = ({clearTimeout, setTimeout}) => {
	const delay = createDelay({clearTimeout, setTimeout, willResolve: true});
	delay.reject = createDelay({clearTimeout, setTimeout, willResolve: false});
	return delay;
};

module.exports = delay;
// TODO: Remove this for the next major release
module.exports.default = delay;


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
        elem.anim([
            { translateX: 200, translateY: 200 },
            { translateX: 600 },
            { translateX: 300, translateY: 0 }
        ], { duration: 4000 });
    });
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZWRvbS50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmV6aWVyLWVhc2luZy9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Rhc2gtY2FtZWxjYXNlL2Rpc3QvZGFzaC1jYW1lbGNhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RlY29tcG9zZS1kb21tYXRyaXgvZGlzdC9kZWNvbXBvc2VET01NYXRyaXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RlbGF5L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mcm9udC1kYi9kaXN0L2RhdGFCYXNlLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3hycmF5L3hycmF5LmpzIiwid2VicGFjazovLy8uL3Rlc3QvdGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOzs7O1FBSUE7UUFDQTtRQUNBLG1EQUFtRCx3SUFBd0k7UUFDM0w7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBOzs7UUFHQTs7UUFFQTtRQUNBLGlDQUFpQzs7UUFFakM7UUFDQTtRQUNBO1FBQ0EsS0FBSztR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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLDZDQUE2QztBQUM3QztBQUNBLFNBQVMsRUFBRTtBQUNYLDhDQUE4QztBQUM5QztBQUNBLFNBQVMsRUFBRTtBQUNYLGdEQUFnRDtBQUNoRDtBQUNBLFNBQVMsRUFBRTtBQUNYLDRDQUE0QztBQUM1QztBQUNBLFNBQVMsRUFBRTtBQUNYLDZDQUE2QztBQUM3QztBQUNBLFNBQVMsRUFBRTtBQUNYLDRDQUE0QztBQUM1QztBQUNBLFNBQVMsRUFBRTtBQUNYLDZDQUE2QztBQUM3QztBQUNBLFNBQVMsRUFBRTtBQUNYLHdDQUF3QztBQUN4QztBQUNBLFNBQVMsRUFBRTtBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix1QkFBdUI7QUFDN0MsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsT0FBTztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RUFBNEU7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsbUNBQW1DLGtCQUFrQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsMERBQWU7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBa0UsYUFBYTtBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSx1QkFBdUIsbUJBQW1CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0ZBQXNGLElBQUk7QUFDMUY7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsbUJBQW1CO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsbUJBQW1CO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLG1CQUFtQjtBQUNoRSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLG1CQUFtQjtBQUNoRSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiw2Q0FBSTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdFQUF3RSxnQkFBZ0IsR0FBRyx3Q0FBd0M7QUFDbkk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLFNBQVM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFFBQVEsRUFBRTtBQUNsRDtBQUNBO0FBQ0EsMkNBQTJDLEtBQUssRUFBRTtBQUNsRDtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsaUJBQWlCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQkFBbUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsT0FBTztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixTQUFTO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscURBQXFELHdCQUF3QjtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLDZDQUFJO0FBQzlDLHNDQUFzQywwQkFBMEI7QUFDaEU7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLGNBQWMsa0JBQWtCLGVBQWU7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxnQkFBZ0IsR0FBRyxnQkFBZ0I7QUFDbkU7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxR0FBcUc7QUFDMUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsNENBQUs7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsZ0JBQWdCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGdCQUFnQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixtQkFBbUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3BoQkE7O0FBRUE7QUFDQTtB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDalhEO0FBQUE7QUFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFEQUFJO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQsYUFBYSxrQkFBa0I7QUFDL0IsYUFBYTtBQUNiLFlBQVksaUJBQWlCO0FBQzdCLEtBQUs7QUFDTCxDQUFDIiwiZmlsZSI6InRlc3QvZGlzdC9tYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdH07XG5cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG5cblxuIFx0Ly8gc2NyaXB0IHBhdGggZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIGpzb25wU2NyaXB0U3JjKGNodW5rSWQpIHtcbiBcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ucCArIFwidGVzdC9kaXN0L1wiICsgKHtcInZlbmRvcnN+cmVzaXplT2JzZXJ2ZXJQb2x5ZmlsbFwiOlwidmVuZG9yc35yZXNpemVPYnNlcnZlclBvbHlmaWxsXCIsXCJ2ZW5kb3JzfndlYkFuaW1hdGlvbnNBcGlQb2x5ZmlsbFwiOlwidmVuZG9yc353ZWJBbmltYXRpb25zQXBpUG9seWZpbGxcIn1bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuanNcIlxuIFx0fVxuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBwcm9taXNlcyA9IFtdO1xuXG5cbiBcdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXG4gXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgeyAvLyAwIG1lYW5zIFwiYWxyZWFkeSBpbnN0YWxsZWRcIi5cblxuIFx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG4gXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSk7XG4gXHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcbiBcdFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdO1xuIFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG4gXHRcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG4gXHRcdFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gXHRcdFx0XHR2YXIgb25TY3JpcHRDb21wbGV0ZTtcblxuIFx0XHRcdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuIFx0XHRcdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG4gXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuIFx0XHRcdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRzY3JpcHQuc3JjID0ganNvbnBTY3JpcHRTcmMoY2h1bmtJZCk7XG5cbiBcdFx0XHRcdC8vIGNyZWF0ZSBlcnJvciBiZWZvcmUgc3RhY2sgdW53b3VuZCB0byBnZXQgdXNlZnVsIHN0YWNrdHJhY2UgbGF0ZXJcbiBcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuIFx0XHRcdFx0b25TY3JpcHRDb21wbGV0ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuIFx0XHRcdFx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG4gXHRcdFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG4gXHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiBcdFx0XHRcdFx0dmFyIGNodW5rID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRcdFx0XHRpZihjaHVuayAhPT0gMCkge1xuIFx0XHRcdFx0XHRcdGlmKGNodW5rKSB7XG4gXHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuIFx0XHRcdFx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcbiBcdFx0XHRcdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcbiBcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcbiBcdFx0XHRcdFx0XHRcdGNodW5rWzFdKGVycm9yKTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9O1xuIFx0XHRcdFx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gXHRcdFx0XHRcdG9uU2NyaXB0Q29tcGxldGUoeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pO1xuIFx0XHRcdFx0fSwgMTIwMDAwKTtcbiBcdFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGU7XG4gXHRcdFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBvbiBlcnJvciBmdW5jdGlvbiBmb3IgYXN5bmMgbG9hZGluZ1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHRocm93IGVycjsgfTtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3Rlc3QvdGVzdC50c1wiKTtcbiIsImltcG9ydCBiYXogZnJvbSBcImJlemllci1lYXNpbmdcIjtcclxuaW1wb3J0IHsgY2FtZWxDYXNlVG9EYXNoLCBkYXNoVG9DYW1lbENhc2UgfSBmcm9tIFwiZGFzaC1jYW1lbGNhc2VcIjtcclxuaW1wb3J0IHsgRGF0YSB9IGZyb20gXCJmcm9udC1kYlwiO1xyXG5pbXBvcnQgZGVjb21wb3NlTWF0cml4IGZyb20gXCJkZWNvbXBvc2UtZG9tbWF0cml4XCI7XHJcbmltcG9ydCBkZWxheSBmcm9tIFwiZGVsYXlcIjtcclxuLy8gVE9ETzogbWFrZSBhbmltIG9ubHkgYXZhaWxhYmxlIG9uIEhUTUxFbGVtZW50IHNpbmNlIGFuaW1hdGUgaXMgbm90IHN1cHBvcnRlZCBvbiBFdmVudFRyYWdldFxyXG4vLyBJREVBIG1vZGlmeSBwcm9taXNlIHJldHVybmVkIGJ5IGFuaW0gc28gdGhhdCB5b3UgY2FuIGdpdmUgYSBzdHJpbmcgYXMgdGhlbiBhcmcgd2hpY2ggZ2V0cyBleGVjdHV0ZWQgd2l0aCB0aGlzIGNvbnRleHRcclxuLy9AdHMtaWdub3JlXHJcbmxldCBSZXNPYnM7XHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBsZXQgcHJvbXMgPSBbXTtcclxuICAgIGlmIChFbGVtZW50LnByb3RvdHlwZS5hbmltYXRlID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgcHJvbXMuYWRkKGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIndlYkFuaW1hdGlvbnNBcGlQb2x5ZmlsbFwiICovIFwid2ViLWFuaW1hdGlvbnMtanNcIikpO1xyXG4gICAgLy9AdHMtaWdub3JlXHJcbiAgICBpZiAod2luZG93LlJlc2l6ZU9ic2VydmVyID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgcHJvbXMuYWRkKGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInJlc2l6ZU9ic2VydmVyUG9seWZpbGxcIiAqLyBcInJlc2l6ZS1vYnNlcnZlci1wb2x5ZmlsbFwiKS50aGVuKCh7IGRlZmF1bHQ6IHIgfSkgPT4geyBSZXNPYnMgPSByOyB9KSk7XHJcbiAgICAvL0B0cy1pZ25vcmVcclxuICAgIGVsc2VcclxuICAgICAgICBSZXNPYnMgPSB3aW5kb3cuUmVzaXplT2JzZXJ2ZXI7XHJcbiAgICBhd2FpdCBQcm9taXNlLmFsbChwcm9tcyk7XHJcbiAgICBsZXQgcCA9IEV2ZW50VGFyZ2V0LnByb3RvdHlwZTtcclxuICAgIHAuaW5zZXJ0QWZ0ZXIgPSBmdW5jdGlvbiAobmV3Tm9kZSwgcmVmZXJlbmNlTm9kZSkge1xyXG4gICAgICAgIGlmIChyZWZlcmVuY2VOb2RlLnBhcmVudCAhPT0gdGhpcylcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBpcyBub3QgdGhlIHBhcmVudCBvZiByZWZlcmVuY2VOb2RlLlwiKTtcclxuICAgICAgICBsZXQgc2liID0gcmVmZXJlbmNlTm9kZS5uZXh0U2libGluZztcclxuICAgICAgICBpZiAoc2liICE9PSBudWxsKVxyXG4gICAgICAgICAgICB0aGlzLmluc2VydEJlZm9yZShuZXdOb2RlLCBzaWIpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5hcGQobmV3Tm9kZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgKCgpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhVHJhbnNmZXJzID0ge307XHJcbiAgICAgICAgbGV0IGRhdGFUcmFuc2ZlcklEID0gMDtcclxuICAgICAgICBsZXQgcmVzaXplTGlzdGVuZXIgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgLy9vbmx5IGluaXQgd2hlbiBuZWVkZWQgc2luY2UgdGhpcyBoZWF2aWx5IGNvbnN1bWVzIHJlc291cmNlcyAoY3B1KS5cclxuICAgICAgICBsZXQgb2JzO1xyXG4gICAgICAgIGxldCBvYnNVbmRlZmluZWQgPSB0cnVlO1xyXG4gICAgICAgIGZ1bmN0aW9uIGluaXRSZXNPYnMoKSB7XHJcbiAgICAgICAgICAgIG9ic1VuZGVmaW5lZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBvYnMgPSBuZXcgUmVzT2JzKChlbGVtZW50cykgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudHMuZWEoKGVsZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNpemVMaXN0ZW5lci5nZXQoZWxlbS50YXJnZXQpLmZvckVhY2goKGFjdHVhbEZ1bmMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsRnVuYygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZXZlbnRMaXN0ZW5lckluZGV4ID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIGNvbnN0IGtleSA9IFwiYWR2YW5jZWREYXRhVHJhbnNmZXJlXCI7XHJcbiAgICAgICAgLy9UT0RPOiBkb2N1bWVudCAvIHdpbmRvdy5vbihcInJlYWR5XCIpXHJcbiAgICAgICAgLy9UT0RPOiByZXR1cm4gZGF0YSAvIG9yIHByb21pc2Ugd2hlbiBubyBjYiBpcyBnaXZlblxyXG4gICAgICAgIHAub24gPSBmdW5jdGlvbiAoLi4uYSkge1xyXG4gICAgICAgICAgICBsZXQgaXNSZXNpemUgPSBhWzBdID09PSBcInJlc2l6ZVwiO1xyXG4gICAgICAgICAgICBpZiAoaXNSZXNpemUgJiYgdGhpcyAhPT0gd2luZG93KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob2JzVW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgICAgIGluaXRSZXNPYnMoKTtcclxuICAgICAgICAgICAgICAgIGxldCBtYXAgPSByZXNpemVMaXN0ZW5lci5nZXQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAobWFwID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYnMub2JzZXJ2ZSh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICBtYXAgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzaXplTGlzdGVuZXIuc2V0KHRoaXMsIG1hcCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBtYXAuc2V0KGFbMV0sIGFbMV0uYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYWN0dWFsTGlzdGVuZXI7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNSZXNpemUpIHtcclxuICAgICAgICAgICAgICAgICAgICBhWzFdLmJpbmQodGhpcykoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdHVhbExpc3RlbmVyID0gYVsxXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGFbMF0gPT09IFwiZHJhZ3N0YXJ0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhVHJhbnNmZXJJRCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdHVhbExpc3RlbmVyID0gKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5zZXREYXRhID0gKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUcmFuc2ZlcnNbZGF0YVRyYW5zZmVySURdID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoa2V5LCBkYXRhVHJhbnNmZXJJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFbMV0oZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGFbMF0gPT09IFwiZHJvcFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0dWFsTGlzdGVuZXIgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLmdldERhdGEgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaWQgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZm91bmQgPSBpZCAhPT0gXCJcIiA/IGRhdGFUcmFuc2ZlcnNbaWRdIDogbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBkYXRhVHJhbnNmZXJzW2lkXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmb3VuZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYVsxXShlKTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0dWFsTGlzdGVuZXIgPSBhWzFdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYWN0dWFsTGlzdGVuZXIgPSBhY3R1YWxMaXN0ZW5lci5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRoYXQgPSBldmVudExpc3RlbmVySW5kZXguZ2V0KHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG8gPSB7IGV2ZW50OiBhWzBdLCBhY3R1YWxMaXN0ZW5lciwgdXNlckxpc3RlbmVyOiBhWzFdLCBvcHRpb25zOiBhWzJdIH07XHJcbiAgICAgICAgICAgICAgICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50TGlzdGVuZXJJbmRleC5zZXQodGhpcywgW29dKTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LmFkZChvKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihhWzBdLCBhY3R1YWxMaXN0ZW5lciwgYVsyXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBwLm9mZiA9IGZ1bmN0aW9uICguLi5hKSB7XHJcbiAgICAgICAgICAgIGlmIChhWzBdID09PSBcInJlc2l6ZVwiICYmIHRoaXMgIT09IHdpbmRvdykge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9ic1VuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgICAgICBpbml0UmVzT2JzKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWFwID0gcmVzaXplTGlzdGVuZXIuZ2V0KHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1hcCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFwLmRlbGV0ZShhWzFdKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobWFwLnNpemUgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JzLnVub2JzZXJ2ZSh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplTGlzdGVuZXIuZGVsZXRlKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCB0b0JlUm0gPSBbXTtcclxuICAgICAgICAgICAgICAgIGxldCB0aGF0ID0gZXZlbnRMaXN0ZW5lckluZGV4LmdldCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGF0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYVswXSAhPT0gdW5kZWZpbmVkICYmIGFbMV0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmVhKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5ldmVudCA9PT0gYVswXSAmJiBlLnVzZXJMaXN0ZW5lciA9PT0gYVsxXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b0JlUm0uYWRkKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuZWEoKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmV2ZW50ID09PSBhWzBdIHx8IGUudXNlckxpc3RlbmVyID09PSBhWzFdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvQmVSbS5hZGQoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0b0JlUm0uZWEoKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGUuZXZlbnQsIGUuYWN0dWFsTGlzdGVuZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnJtKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGF0LmVtcHR5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudExpc3RlbmVySW5kZXguZGVsZXRlKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH07XHJcbiAgICB9KSgpO1xyXG4gICAgcC5saXN0ZW5lciA9IHAubGlzdGVuID0gcC5scyA9IGZ1bmN0aW9uIChldmVudCwgbGlzdGVuZXIsIHBhdGNoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUZWwodGhpcywgZXZlbnQsIGxpc3RlbmVyLCBwYXRjaCk7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHAsIFwiaHRtbFwiLCB7XHJcbiAgICAgICAgZ2V0KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbm5lckhUTUw7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQodG8pIHtcclxuICAgICAgICAgICAgdGhpcy5pbm5lckhUTUwgPSB0bztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwLCBcImlubmVyXCIsIHtcclxuICAgICAgICBzZXQodG8pIHtcclxuICAgICAgICAgICAgaWYgKHRvIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaHRtbCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwZCguLi50byk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodG8gaW5zdGFuY2VvZiBFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmh0bWwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBlbmQodG8pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5uZXJIVE1MID0gdG87XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBwLmFkZENsYXNzID0gZnVuY3Rpb24gKC4uLmNsYXNzTmFtZSkge1xyXG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCguLi5jbGFzc05hbWUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIHAucmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbiAoLi4uY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKC4uLmNsYXNzTmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgcC5oYXNDbGFzcyA9IGZ1bmN0aW9uICguLi5jbGFzc05hbWUpIHtcclxuICAgICAgICBsZXQgaGFzID0gdHJ1ZTtcclxuICAgICAgICBjbGFzc05hbWUuZWEoKGNscykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKGNscykpXHJcbiAgICAgICAgICAgICAgICBoYXMgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gaGFzO1xyXG4gICAgfTtcclxuICAgIHAudG9nZ2xlQ2xhc3MgPSBmdW5jdGlvbiAoLi4uY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgY2xhc3NOYW1lLmVhKChjbHMpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaGFzQ2xhc3MoY2xzKSlcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2xhc3MoY2xzKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDbGFzcyhjbHMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIHAuYXBkID0gZnVuY3Rpb24gKC4uLmVsZW1zKSB7XHJcbiAgICAgICAgdGhpcy5hcHBlbmQoLi4uZWxlbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIHAuZW1wdHlOb2RlcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmh0bWwgPSBcIlwiO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIHAuaGlkZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIHAuc2hvdyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBwLmNoaWxkcyA9IGZ1bmN0aW9uIChzZWxlY3Rvcl9kZXB0aCA9IDEpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHNlbGVjdG9yX2RlcHRoID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE5vZGVMcyguLi50aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3JfZGVwdGgpKTtcclxuICAgICAgICBlbHNlIGlmIChzZWxlY3Rvcl9kZXB0aCA+IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBOb2RlTHMoLi4udGhpcy5jaGlsZHJlbiwgLi4ubmV3IE5vZGVMcyguLi50aGlzLmNoaWxkcmVuKS5jaGlsZHMoc2VsZWN0b3JfZGVwdGggLSAxKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgTm9kZUxzKCk7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHAsIFwiaGVpZ2h0XCIsIHtcclxuICAgICAgICBnZXQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNzcyhcImhlaWdodFwiKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldCh0bykge1xyXG4gICAgICAgICAgICB0aGlzLmNzcyhcImhlaWdodFwiLCB0byk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocCwgXCJ3aWR0aFwiLCB7XHJcbiAgICAgICAgZ2V0KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jc3MoXCJ3aWR0aFwiKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldCh0bykge1xyXG4gICAgICAgICAgICB0aGlzLmNzcyhcIndpZHRoXCIsIHRvKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwLCBcIm9mZnNldFJpZ2h0XCIsIHsgZ2V0KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vZmZzZXRMZWZ0ICsgdGhpcy5vZmZzZXRXaWR0aDtcclxuICAgICAgICB9IH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHAsIFwib2Zmc2V0Qm90dG9tXCIsIHsgZ2V0KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vZmZzZXRUb3AgKyB0aGlzLm9mZnNldEhlaWdodDtcclxuICAgICAgICB9IH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHAsIFwiYWJzb2x1dGVPZmZzZXRcIiwgeyBnZXQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIH0gfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocCwgXCJvdXRlcldpZHRoXCIsIHsgZ2V0KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vZmZzZXRXaWR0aDtcclxuICAgICAgICB9IH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHAsIFwib3V0ZXJIZWlnaHRcIiwgeyBnZXQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9mZnNldEhlaWdodDtcclxuICAgICAgICB9IH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHAsIFwiaW5uZXJXaWR0aFwiLCB7IGdldCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xpZW50V2lkdGg7XHJcbiAgICAgICAgfSB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwLCBcImlubmVySGVpZ2h0XCIsIHsgZ2V0KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgfSB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwLCBcInBhcmVudFwiLCB7IGdldCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50RWxlbWVudDtcclxuICAgICAgICB9IH0pO1xyXG4gICAgbGV0IGZvcm1hdFN0eWxlID0gKCgpID0+IHtcclxuICAgICAgICBsZXQgam9pbkNvbW1hID0gXCIsXCI7XHJcbiAgICAgICAgbGV0IGpvaW5TcGFjZSA9IFwiIFwiO1xyXG4gICAgICAgIGZ1bmN0aW9uIGZvcm1hdFN0eWxlKHByb3AsIHN0eWxlLCB0aGF0KSB7XHJcbiAgICAgICAgICAgIGxldCBlbmQ7XHJcbiAgICAgICAgICAgIGxldCB0cmFuc2Zvcm1BcHBsaWVzID0gVHJhbnNmb3JtUHJvcC5hcHBsaWVzKHByb3ApO1xyXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgbGV0IGlzQXIgPSBzdHlsZSBpbnN0YW5jZW9mIEFycmF5O1xyXG4gICAgICAgICAgICBpZiAoaXNBcikge1xyXG4gICAgICAgICAgICAgICAgbGV0IGFyID0gW107XHJcbiAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHN0bCBvZiBzdHlsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFyLmFkZChmb3JtYXRTdGwocHJvcCwgc3RsKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbmQgPSBhci5qb2luKHRyYW5zZm9ybUFwcGxpZXMgPyBqb2luQ29tbWEgOiBqb2luU3BhY2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGVuZCA9IGZvcm1hdFN0bChwcm9wLCBzdHlsZSk7XHJcbiAgICAgICAgICAgIGlmICh0aGF0IGluc3RhbmNlb2YgVHJhbnNmb3JtUHJvcCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRyYW5zZm9ybUFwcGxpZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgICAgICB0aGF0W3Byb3BdID0gZW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGF0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbmQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhhdCBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0cmFuc2Zvcm1BcHBsaWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1lID0gZ2V0VHJhbnNmb3JtUHJvcHModGhhdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICAgICAgbWVbcHJvcF0gPSBlbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbmQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVuZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHNwZWNpYWxGaXggPSB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IFwiXCIsXHJcbiAgICAgICAgICAgIG9mZnNldDogXCJcIixcclxuICAgICAgICAgICAgZ3JpZEFyZWE6IFwiXCIsXHJcbiAgICAgICAgICAgIGZsZXhHcm93OiBcIlwiLFxyXG4gICAgICAgICAgICB6SW5kZXg6IFwiXCIsXHJcbiAgICAgICAgICAgIHNrZXc6IFwiZGVnXCIsXHJcbiAgICAgICAgICAgIHNrZXdYOiBcImRlZ1wiLFxyXG4gICAgICAgICAgICBza2V3WTogXCJkZWdcIixcclxuICAgICAgICAgICAgcm90YXRlOiBcImRlZ1wiLFxyXG4gICAgICAgICAgICByb3RhdGUzZDogXCJkZWdcIixcclxuICAgICAgICAgICAgcm90YXRlWDogXCJkZWdcIixcclxuICAgICAgICAgICAgcm90YXRlWTogXCJkZWdcIixcclxuICAgICAgICAgICAgcm90YXRlWjogXCJkZWdcIixcclxuICAgICAgICAgICAgc2NhbGU6IFwiXCIsXHJcbiAgICAgICAgICAgIHNjYWxlM2Q6IFwiXCIsXHJcbiAgICAgICAgICAgIHNjYWxlWDogXCJcIixcclxuICAgICAgICAgICAgc2NhbGVZOiBcIlwiLFxyXG4gICAgICAgICAgICBzY2FsZVo6IFwiXCIsXHJcbiAgICAgICAgICAgIG1hdHJpeDogXCJcIixcclxuICAgICAgICAgICAgbWF0cml4M2Q6IFwiXCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogKHN0eWxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHN0eWxlID09PSBcIm51bWJlclwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IFwiVW5leHBlY3RlZCBzdHlsZVwiO1xyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlLnN1YnN0cmluZygwLCA0KSAhPT0gXCJ1cmwoXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlID0gXCJ1cmwoXCIgKyBzdHlsZTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbGMgPSBzdHlsZS5jaGFyQXQoc3R5bGUubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxjICE9PSBcIilcIiAmJiBsYyAhPT0gXCI7XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlICs9IFwiKVwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0eWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBsZXQgYWJub3JtYWxLZXkgPSBPYmplY3Qua2V5cyhzcGVjaWFsRml4KTtcclxuICAgICAgICBmdW5jdGlvbiBmb3JtYXRTdGwocHJvcCwgc3R5bGUpIHtcclxuICAgICAgICAgICAgbGV0IHNwZWNpYWxNZXRpYWwgPSAhcHJvcCB8fCBhYm5vcm1hbEtleS5pbmNsdWRlcyhwcm9wKTtcclxuICAgICAgICAgICAgaWYgKHNwZWNpYWxNZXRpYWwpIHtcclxuICAgICAgICAgICAgICAgIGxldCBmaXggPSBzcGVjaWFsRml4W3Byb3BdO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFmaXgpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0eWxlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgZml4ID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzdHlsZSA9PT0gXCJudW1iZXJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0eWxlICsgZml4O1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0eWxlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpeChzdHlsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHN0eWxlID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdHlsZTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3R5bGUgKyBcInB4XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFN0eWxlO1xyXG4gICAgfSkoKTtcclxuICAgIGxldCB0cmFuc2Zyb21Qcm9wcyA9IG5ldyBNYXAoKTtcclxuICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgZ2xvYmFsLnRyYW5zZnJvbVByb3BzID0gdHJhbnNmcm9tUHJvcHM7XHJcbiAgICBmdW5jdGlvbiBnZXRUcmFuc2Zvcm1Qcm9wcyh0aGF0KSB7XHJcbiAgICAgICAgbGV0IG1lID0gdHJhbnNmcm9tUHJvcHMuZ2V0KHRoYXQpO1xyXG4gICAgICAgIGlmIChtZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIG1lID0gbmV3IFRyYW5zZm9ybVByb3AodGhhdC5jc3MoXCJ0cmFuc2Zvcm1cIikpO1xyXG4gICAgICAgICAgICB0cmFuc2Zyb21Qcm9wcy5zZXQodGhhdCwgbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWU7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBmb3JtYXRDc3MoY3NzLCB0aGF0KSB7XHJcbiAgICAgICAgbGV0IHRyYW5zZm9ybVByb3A7XHJcbiAgICAgICAgaWYgKHRoYXQgPT09IHRydWUpXHJcbiAgICAgICAgICAgIHRoYXQgPSBuZXcgVHJhbnNmb3JtUHJvcCgpO1xyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBjc3MpIHtcclxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgIGxldCBzID0gZm9ybWF0U3R5bGUoa2V5LCBjc3Nba2V5XSwgdGhhdCk7XHJcbiAgICAgICAgICAgIGlmICghKHMgaW5zdGFuY2VvZiBUcmFuc2Zvcm1Qcm9wKSlcclxuICAgICAgICAgICAgICAgIGNzc1trZXldID0gcztcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgY3NzW2tleV07XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1Qcm9wID0gcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHJhbnNmb3JtUHJvcClcclxuICAgICAgICAgICAgY3NzLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVByb3AudG9TdHJpbmcoKTtcclxuICAgICAgICByZXR1cm4gdHJhbnNmb3JtUHJvcDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGZvcm1hdEFuaW1hdGlvbkNzcyhjc3MsIHRoYXQpIHtcclxuICAgICAgICBpZiAoXCJvZmZzZXRcIiBpbiBjc3MpIHtcclxuICAgICAgICAgICAgbGV0IHsgb2Zmc2V0IH0gPSBjc3M7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBjc3Mub2Zmc2V0O1xyXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgbGV0IGVuZCA9IGZvcm1hdENzcyhjc3MsIHRoYXQpO1xyXG4gICAgICAgICAgICBjc3Mub2Zmc2V0ID0gb2Zmc2V0O1xyXG4gICAgICAgICAgICByZXR1cm4gZW5kO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBmb3JtYXRDc3MoY3NzLCB0aGF0KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNwbGl0VHJhbnNmb3JtUHJvcHNJbnRvS2V5VmFsKHZhbCkge1xyXG4gICAgICAgIHZhbCA9IHZhbC5yZXBsYWNlKC8oIHxcXHQpL2csIFwiXCIpO1xyXG4gICAgICAgIGxldCBhciA9IHZhbC5zcGxpdChcIilcIik7XHJcbiAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgYXIucm1JKGFyLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgIGxldCBlbmQgPSBbXTtcclxuICAgICAgICBhci5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBsID0gZS5zcGxpdChcIihcIik7XHJcbiAgICAgICAgICAgIGVuZC5wdXNoKHsga2V5OiBsWzBdLCB2YWw6IGxbMV0gfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGVuZDtcclxuICAgIH1cclxuICAgIGxldCBzcGxpdFZhbHVlRnJvbVVuaXQgPSAoKCkgPT4ge1xyXG4gICAgICAgIGxldCB2YWw7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHNwbGl0VmFsdWVGcm9tVW5pdCh2YWx1ZSkge1xyXG4gICAgICAgICAgICB2YWwgPSB2YWx1ZTtcclxuICAgICAgICAgICAgbGV0IG1heCA9IHZhbC5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtYXgpO1xyXG4gICAgICAgICAgICBsZXQgZWRnZSA9IG1heCAtIDI7XHJcbiAgICAgICAgICAgIGlmICghaXNFZGdlKGVkZ2UpKSB7XHJcbiAgICAgICAgICAgICAgICBlZGdlID0gbWF4IC0gMztcclxuICAgICAgICAgICAgICAgIGlmICghaXNFZGdlKGVkZ2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWRnZSA9IG1heCAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0VkZ2UoZWRnZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWRnZSA9IG1heDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0VkZ2UoZWRnZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBnb3RJdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IG1heCAtIDQ7IGkgPCAwOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNFZGdlKGkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdvdEl0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdvdEl0ID09PSBmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBcIkludmFsaWRVbmFibGUgdG8gZmluZCBVbml0IC0gVmFsdWUgU2VwZXJhdGlvbiBpbiBcXFwiXCIgKyB2YWx1ZSArIFwiXFxcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVkZ2UrKztcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsOiArdmFsLnN1YnN0cigwLCBlZGdlKSwgdW5pdDogdmFsLnN1YnN0cihlZGdlKSB9O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZnVuY3Rpb24gaXNFZGdlKGF0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAhaXNOYU4oK3ZhbFthdF0pICYmIGlzTmFOKCt2YWxbYXQgKyAxXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSkoKTtcclxuICAgIGNsYXNzIFRyYW5zZm9ybVByb3Age1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHRyYW5zZm9ybV9jbG9uZSkge1xyXG4gICAgICAgICAgICB0aGlzLnByaW1pdGl2ZXMgPSB7fTtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmUgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgaWYgKHRyYW5zZm9ybV9jbG9uZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRyYW5zZm9ybV9jbG9uZSBpbnN0YW5jZW9mIFRyYW5zZm9ybVByb3ApIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrIGluIHRyYW5zZm9ybV9jbG9uZS5wcmltaXRpdmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJpbWl0aXZlc1trXSA9IHRyYW5zZm9ybV9jbG9uZS5wcmltaXRpdmVzW2tdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZWQgPSB0cmFuc2Zvcm1fY2xvbmUuY2hhbmdlZDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JlID0gdHJhbnNmb3JtX2Nsb25lLnN0b3JlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtID0gdHJhbnNmb3JtX2Nsb25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldCB0cmFuc2xhdGUodG8pIHtcclxuICAgICAgICAgICAgaWYgKCEodG8gaW5zdGFuY2VvZiBBcnJheSkpXHJcbiAgICAgICAgICAgICAgICB0byA9IHRvLnNwbGl0KFwiLFwiKTtcclxuICAgICAgICAgICAgdGhpcy5hbGxvY2F0ZSh0bywgW1widHJhbnNsYXRlWFwiLCBcInRyYW5zbGF0ZVlcIiwgXCJ0cmFuc2xhdGVaXCJdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gVE9ETyBtYXliZSBzcGxpdCB0aGlzIHVwIGFuZCByZXR1cm4gYSBudW1iZXJbXSBvZiB0aGUgdHJhbnNsYXRlczsgdGhpcyB3b3VsZCBoYXZlIHRvIGJlIGNvbnNpdGVudGx5IGltcGxlbWVudGVkIHRocm91Z2ggYWxsIGNzcyAobGlrZSBtYXJnaW4gb3IgcGFkZGluZylcclxuICAgICAgICBnZXQgdHJhbnNsYXRlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb21iaW5lVmFscyhcInRyYW5zbGF0ZVhcIiwgXCJ0cmFuc2xhdGVZXCIsIFwidHJhbnNsYXRlWlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0IHNjYWxlKHRvKSB7XHJcbiAgICAgICAgICAgIGlmICghKHRvIGluc3RhbmNlb2YgQXJyYXkpKVxyXG4gICAgICAgICAgICAgICAgdG8gPSB0by5zcGxpdChcIixcIik7XHJcbiAgICAgICAgICAgIGlmICh0b1swXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodG9bMV0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0b1syXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NhbGVYID0gdG9bMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NhbGVZID0gdG9bMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NhbGVaID0gdG9bMl07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjYWxlWCA9IHRvWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjYWxlWSA9IHRvWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NhbGVYID0gdG9bMF07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2FsZVkgPSB0b1swXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjYWxlWiA9IHRvWzBdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdldCBzY2FsZSgpIHtcclxuICAgICAgICAgICAgbGV0IHNjYWxlWCA9IHRoaXMuc2NhbGVYO1xyXG4gICAgICAgICAgICBsZXQgc2NhbGVZID0gdGhpcy5zY2FsZVk7XHJcbiAgICAgICAgICAgIGxldCBzY2FsZVogPSB0aGlzLnNjYWxlWjtcclxuICAgICAgICAgICAgaWYgKHNjYWxlWCA9PT0gc2NhbGVZICYmIHNjYWxlWSA9PT0gc2NhbGVaKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjYWxlWDtcclxuICAgICAgICAgICAgcmV0dXJuIFtzY2FsZVgsIHNjYWxlWSwgc2NhbGVaXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0IHNrZXcodG8pIHtcclxuICAgICAgICAgICAgaWYgKCEodG8gaW5zdGFuY2VvZiBBcnJheSkpXHJcbiAgICAgICAgICAgICAgICB0byA9IHRvLnNwbGl0KFwiLFwiKTtcclxuICAgICAgICAgICAgdGhpcy5hbGxvY2F0ZSh0bywgW1wic2tld1hcIiwgXCJza2V3WVwiXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdldCBza2V3KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb21iaW5lVmFscyhcInNrZXdYXCIsIFwic2tld1lcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldCBtYXRyaXgodG8pIHtcclxuICAgICAgICAgICAgaWYgKHRvIGluc3RhbmNlb2YgQXJyYXkpXHJcbiAgICAgICAgICAgICAgICB0byA9IHRvLmpvaW4oXCIsXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmRlY29tcG9zZU1hdHJpeChcIm1hdHJpeChcIiArIHRvICsgXCIpXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXQgbWF0cml4M2QodG8pIHtcclxuICAgICAgICAgICAgaWYgKHRvIGluc3RhbmNlb2YgQXJyYXkpXHJcbiAgICAgICAgICAgICAgICB0byA9IHRvLmpvaW4oXCIsXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmRlY29tcG9zZU1hdHJpeChcIm1hdHJpeDNkKFwiICsgdG8gKyBcIilcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldCB0cmFuc2Zvcm0odG8pIHtcclxuICAgICAgICAgICAgaWYgKHRvID09PSBcIm5vbmVcIilcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgbGV0IGFyID0gc3BsaXRUcmFuc2Zvcm1Qcm9wc0ludG9LZXlWYWwodG8pO1xyXG4gICAgICAgICAgICBsZXQgb3JkZXJlZCA9IHt9O1xyXG4gICAgICAgICAgICBhci5lYSgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHQgPSBvcmRlcmVkW2Uua2V5XSA9PT0gdW5kZWZpbmVkID8gb3JkZXJlZFtlLmtleV0gPSBbXSA6IG9yZGVyZWRbZS5rZXldO1xyXG4gICAgICAgICAgICAgICAgdC5hZGQoZS52YWwpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZm9yIChsZXQgayBpbiBvcmRlcmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoVHJhbnNmb3JtUHJvcC51bWJyZWxsYVRyYW5zZm9ybVByb3BzLmluY2x1ZGVzKGspKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWNvbXBvc2VNYXRyaXgodG8pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBrIGluIG9yZGVyZWQpIHtcclxuICAgICAgICAgICAgICAgIGxldCB0ID0gb3JkZXJlZFtrXTtcclxuICAgICAgICAgICAgICAgIGlmICh0Lmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXNba10gPSB0LmZpcnN0O1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCEodCBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzcGxpdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHQuZWEoKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BsaXQuYWRkKHNwbGl0VmFsdWVGcm9tVW5pdChlLnZhbCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB1bml0ID0gc3BsaXQuZmlyc3QudW5pdDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2FuQ29tcG9zZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcGxpdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3BsaXRbaV0udW5pdCAhPT0gdW5pdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbkNvbXBvc2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbkNvbXBvc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwbGl0LmVhKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWwgKz0gZS52YWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2tdID0gdmFsICsgdW5pdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG9yZGVyZWRba107XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCByZXN0ID0gXCJcIjtcclxuICAgICAgICAgICAgZm9yIChsZXQgayBpbiBvcmRlcmVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXN0ICs9IGsgKyBcIihcIiArIG9yZGVyZWRba10gKyBcIikgXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5kZWNvbXBvc2VNYXRyaXgocmVzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlY29tcG9zZU1hdHJpeCh0bykge1xyXG4gICAgICAgICAgICBsZXQgZGVjID0gZGVjb21wb3NlTWF0cml4KG5ldyBET01NYXRyaXgodG8pKTtcclxuICAgICAgICAgICAgbGV0IHNrZXcgPSBkZWMuc2tld1hZO1xyXG4gICAgICAgICAgICBkZWxldGUgZGVjLnNrZXdYWTtcclxuICAgICAgICAgICAgZGVsZXRlIGRlYy5za2V3WFo7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBkZWMuc2tld1laO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBkIGluIGRlYykge1xyXG4gICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICBpZiAoZGVjW2RdICE9PSBUcmFuc2Zvcm1Qcm9wLnByaW1pdGl2ZURlZmF1bHRzW2RdKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXNbZF0gPSBmb3JtYXRTdHlsZShkLCBkZWNbZF0sIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc2tldyAhPT0gVHJhbnNmb3JtUHJvcC5wcmltaXRpdmVEZWZhdWx0cy5za2V3WClcclxuICAgICAgICAgICAgICAgIHRoaXMuc2tld1ggPSBmb3JtYXRTdHlsZShcInNrZXdYXCIsIHNrZXcsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29tYmluZVZhbHMoLi4udmFscykge1xyXG4gICAgICAgICAgICBsZXQgcyA9IFwiXCI7XHJcbiAgICAgICAgICAgIHZhbHMuZWEoKHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGUgPSB0aGlzW3ZhbF07XHJcbiAgICAgICAgICAgICAgICBpZiAoZSAhPT0gVHJhbnNmb3JtUHJvcC5wcmltaXRpdmVEZWZhdWx0c1t2YWxdICsgdW5pdEluZGV4W3ZhbF0pXHJcbiAgICAgICAgICAgICAgICAgICAgcyArPSBlICsgXCIsXCI7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcy5sZW5ndGggPT09IDAgPyBUcmFuc2Zvcm1Qcm9wLnByaW1pdGl2ZURlZmF1bHRzW3ZhbHMuZmlyc3RdICsgdW5pdEluZGV4W3ZhbHMuZmlyc3RdIDogcy5zdWJzdHIoMCwgcy5sZW5ndGggLSAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYWxsb2NhdGUoaW5wdXQsIGZ1bmNzKSB7XHJcbiAgICAgICAgICAgIGZ1bmNzLmVhKChmdW5jLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgIGlmIChpbnB1dFtpXSAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXNbZnVuY10gPSBpbnB1dFtpXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jaGFuZ2VkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcHJvcCBvZiBUcmFuc2Zvcm1Qcm9wLnByaW1pdGl2ZVRyYW5zZm9ybVByb3BzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBNVVNUIGZvcm1hdGVkIGluIHRoZSBmb2xsb3dpbmcgb3JkZXIgdG8gYWNoaXZlIGNvbnNpdGVudCByZXN1bHRzIFt0cmFuc2xhdGUgcm90YXRlIHNrZXcgc2NhbGVdXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3AgaW4gdGhpcy5wcmltaXRpdmVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcmltaXRpdmVzW3Byb3BdICE9PSBUcmFuc2Zvcm1Qcm9wLnByaW1pdGl2ZURlZmF1bHRzW3Byb3BdICsgdW5pdEluZGV4W3Byb3BdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZSArPSBwcm9wICsgVHJhbnNmb3JtUHJvcC5jbGFtcE9wZW4gKyB0aGlzLnByaW1pdGl2ZXNbcHJvcF0gKyBUcmFuc2Zvcm1Qcm9wLmNsYW1wQ2xvc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmUgfHwgXCJub25lXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgVHJhbnNmb3JtUHJvcC5wcmltaXRpdmVEZWZhdWx0cyA9IHtcclxuICAgICAgICB0cmFuc2xhdGVYOiAwLFxyXG4gICAgICAgIHRyYW5zbGF0ZVk6IDAsXHJcbiAgICAgICAgdHJhbnNsYXRlWjogMCxcclxuICAgICAgICByb3RhdGVYOiAwLFxyXG4gICAgICAgIHJvdGF0ZVk6IDAsXHJcbiAgICAgICAgcm90YXRlWjogMCxcclxuICAgICAgICBza2V3WDogMCxcclxuICAgICAgICBza2V3WTogMCxcclxuICAgICAgICBzY2FsZVg6IDEsXHJcbiAgICAgICAgc2NhbGVZOiAxLFxyXG4gICAgICAgIHNjYWxlWjogMVxyXG4gICAgfTtcclxuICAgIFRyYW5zZm9ybVByb3AucHJpbWl0aXZlVHJhbnNmb3JtUHJvcHMgPSBPYmplY3Qua2V5cyhUcmFuc2Zvcm1Qcm9wLnByaW1pdGl2ZURlZmF1bHRzKTtcclxuICAgIFRyYW5zZm9ybVByb3AudW1icmVsbGFUcmFuc2Zvcm1Qcm9wcyA9IFtcclxuICAgICAgICBcInJvdGF0ZVwiLCBcInJvdGF0ZTNkXCIsIFwic2NhbGVcIiwgXCJzY2FsZTNkXCIsIFwidHJhbnNsYXRlXCIsIFwidHJhbnNsYXRlM2RcIiwgXCJza2V3XCIsIFwibWF0cml4XCIsIFwibWF0cml4M2RcIlxyXG4gICAgXTtcclxuICAgIFRyYW5zZm9ybVByb3AudHJhbnNmb3JtUHJvcHMgPSBbLi4uVHJhbnNmb3JtUHJvcC5wcmltaXRpdmVUcmFuc2Zvcm1Qcm9wcywgLi4uVHJhbnNmb3JtUHJvcC51bWJyZWxsYVRyYW5zZm9ybVByb3BzXTtcclxuICAgIFRyYW5zZm9ybVByb3AuYXBwbGllcyA9ICguLi5wcm9wKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIFRyYW5zZm9ybVByb3AudHJhbnNmb3JtUHJvcHMuY29udGFpbnMoLi4ucHJvcCk7XHJcbiAgICB9O1xyXG4gICAgVHJhbnNmb3JtUHJvcC5jbGFtcE9wZW4gPSBcIihcIjtcclxuICAgIFRyYW5zZm9ybVByb3AuY2xhbXBDbG9zZSA9IFwiKSBcIjtcclxuICAgIGxldCBoYXNQeCA9IFtcInhcIiwgXCJ5XCIsIFwielwiLCBcInRyYW5zbGF0ZVhcIiwgXCJ0cmFuc2xhdGVZXCIsIFwidHJhbnNsYXRlWlwiLCBcInNrZXdYXCIsIFwic2tld1lcIiwgXCJyb3RhdGVcIiwgXCJyb3RhdGUzZFwiLCBcInRyYW5zbGF0ZVwiLCBcInRyYW5zbGF0ZTNkXCIsIFwic2tld1wiLCBcImJhY2tncm91bmRTaXplXCIsIFwiYm9yZGVyXCIsIFwiYm9yZGVyQm90dG9tXCIsIFwiYm9yZGVyQm90dG9tTGVmdFJhZGl1c1wiLCBcImJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzXCIsIFwiYm9yZGVyQm90dG9tV2lkdGhcIiwgXCJib3JkZXJMZWZ0XCIsIFwiYm9yZGVyTGVmdFdpZHRoXCIsIFwiYm9yZGVyUmFkaXVzXCIsIFwiYm9yZGVyUmlnaHRcIiwgXCJib3JkZXJSaWdodFdpZHRoXCIsIFwiYm9yZGVyVG9wXCIsIFwiYm9yZGVyVG9wTGVmdFJhZGl1c1wiLCBcImJvcmRlclRvcFJpZ2h0UmFkaXVzXCIsIFwiYm9yZGVyVG9wV2lkdGhcIiwgXCJib3JkZXJXaWR0aFwiLCBcImJvdHRvbVwiLCBcImNvbHVtbkdhcFwiLCBcImNvbHVtblJ1bGVXaWR0aFwiLCBcImNvbHVtbldpZHRoXCIsIFwiY29sdW1uc1wiLCBcImZsZXhCYXNpc1wiLCBcImZvbnRcIiwgXCJmb250U2l6ZVwiLCBcImdyaWRDb2x1bW5HYXBcIiwgXCJncmlkR2FwXCIsIFwiZ3JpZFJvd0dhcFwiLCBcImhlaWdodFwiLCBcImxlZnRcIiwgXCJsZXR0ZXJTcGFjaW5nXCIsIFwibGluZUhlaWdodFwiLCBcIm1hcmdpblwiLCBcIm1hcmdpbkJvdHRvbVwiLCBcIm1hcmdpbkxlZnRcIiwgXCJtYXJnaW5SaWdodFwiLCBcIm1hcmdpblRvcFwiLCBcIm1hc2tTaXplXCIsIFwibWF4SGVpZ2h0XCIsIFwibWF4V2lkdGhcIiwgXCJtaW5IZWlnaHRcIiwgXCJtaW5XaWR0aFwiLCBcIm91dGxpbmVcIiwgXCJvdXRsaW5lT2Zmc2V0XCIsIFwib3V0bGluZVdpZHRoXCIsIFwicGFkZGluZ1wiLCBcInBhZGRpbmdCb3R0b21cIiwgXCJwYWRkaW5nTGVmdFwiLCBcInBhZGRpbmdSaWdodFwiLCBcInBhZGRpbmdUb3BcIiwgXCJwZXJzcGVjdGl2ZVwiLCBcInJpZ2h0XCIsIFwic2hhcGVNYXJnaW5cIiwgXCJ0YWJTaXplXCIsIFwidG9wXCIsIFwid2lkdGhcIiwgXCJ3b3JkU3BhY2luZ1wiXTtcclxuICAgIGxldCBoYXNEZWcgPSBbXCJyb3RhdGVYXCIsIFwicm90YXRlWVwiLCBcInJvdGF0ZVpcIiwgXCJyb3RhdGVcIl07XHJcbiAgICBsZXQgcHggPSBcInB4XCI7XHJcbiAgICBsZXQgdW5pdEluZGV4ID0ge307XHJcbiAgICBoYXNQeC5lYSgoZSkgPT4ge1xyXG4gICAgICAgIHVuaXRJbmRleFtlXSA9IHB4O1xyXG4gICAgfSk7XHJcbiAgICBsZXQgZGVnID0gXCJkZWdcIjtcclxuICAgIGhhc0RlZy5lYSgoZSkgPT4ge1xyXG4gICAgICAgIHVuaXRJbmRleFtlXSA9IGRlZztcclxuICAgIH0pO1xyXG4gICAgVHJhbnNmb3JtUHJvcC5wcmltaXRpdmVUcmFuc2Zvcm1Qcm9wcy5lYSgocHJvcCkgPT4ge1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmFuc2Zvcm1Qcm9wLnByb3RvdHlwZSwgcHJvcCwge1xyXG4gICAgICAgICAgICBnZXQoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcmltaXRpdmVzW3Byb3BdIHx8IFRyYW5zZm9ybVByb3AucHJpbWl0aXZlRGVmYXVsdHNbcHJvcF0gKyB1bml0SW5kZXhbcHJvcF07XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNldChzdHlsZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJpbWl0aXZlc1twcm9wXSA9IHN0eWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHAuY3NzID0gZnVuY3Rpb24gKGtleV9jc3MsIHZhbCkge1xyXG4gICAgICAgIGlmICh0eXBlb2Yga2V5X2NzcyA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICBsZXQgY3NzID0gY2xvbmVEYXRhKGtleV9jc3MpO1xyXG4gICAgICAgICAgICBmb3JtYXRDc3MoY3NzLCB0aGlzKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgcHJvcCBpbiBjc3MpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3R5bGVbcHJvcF0gPSBjc3NbcHJvcF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodmFsICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHZhbCAhPT0gXCJib29sZWFuXCIpIHtcclxuICAgICAgICAgICAgbGV0IHMgPSBmb3JtYXRTdHlsZShrZXlfY3NzLCB2YWwsIHRoaXMpO1xyXG4gICAgICAgICAgICBpZiAoIShzIGluc3RhbmNlb2YgVHJhbnNmb3JtUHJvcCkpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0eWxlW2tleV9jc3NdID0gcztcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdHlsZS50cmFuc2Zvcm0gPSBzLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgcztcclxuICAgICAgICAgICAgaWYgKFRyYW5zZm9ybVByb3AuYXBwbGllcyhrZXlfY3NzKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1zV2l0aG91dENvbnNpdGVudFRyYW5zZm9ybVByb3BzLmluY2x1ZGVzKHsgZWxlbTogdGhpcyB9KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0ID0gbmV3IFRyYW5zZm9ybVByb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICB0LnRyYW5zZm9ybSA9IGdldENvbXB1dGVkU3R5bGUodGhpcykudHJhbnNmb3JtO1xyXG4gICAgICAgICAgICAgICAgICAgIHMgPSB0W2tleV9jc3NdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHMgPSBnZXRUcmFuc2Zvcm1Qcm9wcyh0aGlzKVtrZXlfY3NzXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzKVtrZXlfY3NzXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocyA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgXCJVbmtub3duIGtleSBcXFwiXCIgKyBrZXlfY3NzICsgXCJcXFwiLlwiO1xyXG4gICAgICAgICAgICBpZiAodmFsIHx8IHMuc3BsaXQoXCIgXCIpLmxlbmd0aCA+IDEpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcztcclxuICAgICAgICAgICAgbGV0IG4gPSBwYXJzZUZsb2F0KHMpO1xyXG4gICAgICAgICAgICBpZiAoaXNOYU4obikpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcztcclxuICAgICAgICAgICAgcmV0dXJuIG47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIGZ1bmN0aW9uIGN1cnJlbnRGcmFtZShrZXlzLCB0aGF0KSB7XHJcbiAgICAgICAgbGV0IHJldCA9IHt9O1xyXG4gICAgICAgIGxldCBjcyA9IGdldENvbXB1dGVkU3R5bGUodGhhdCk7XHJcbiAgICAgICAgbGV0IGhhc1RyYW5zZm9ybVByb3AgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBrZXkgb2Yga2V5cykge1xyXG4gICAgICAgICAgICBpZiAoVHJhbnNmb3JtUHJvcC5hcHBsaWVzKGtleSkpXHJcbiAgICAgICAgICAgICAgICBoYXNUcmFuc2Zvcm1Qcm9wLmFkZChrZXkpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXRba2V5XSA9IGNzW2tleV0gfHwgXCIwXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChoYXNUcmFuc2Zvcm1Qcm9wKSB7XHJcbiAgICAgICAgICAgIGxldCBwcm9wcyA9IHRyYW5zZnJvbVByb3BzLmdldCh0aGF0KTtcclxuICAgICAgICAgICAgZm9yIChsZXQgcHJvcCBvZiBoYXNUcmFuc2Zvcm1Qcm9wKSB7XHJcbiAgICAgICAgICAgICAgICByZXRbcHJvcF0gPSBwcm9wc1twcm9wXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXQub2Zmc2V0ID0gMDtcclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG4gICAgbGV0IGRldGVjdElmSW5UcmFuc2l0aW9uUHJvcGVydHkgPSAoKCkgPT4ge1xyXG4gICAgICAgIGZ1bmN0aW9uIHdvYW4oa2V5LCB0aGF0KSB7XHJcbiAgICAgICAgICAgIGxldCBzID0gXCJUaGUgdHJhbnNpdGlvbiBwcm9wZXJ0XCI7XHJcbiAgICAgICAgICAgIGlmIChrZXkgaW5zdGFuY2VvZiBBcnJheSlcclxuICAgICAgICAgICAgICAgIHMgKz0gXCJpZXMgXFxcIlwiO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBzICs9IFwieSBcXFwiXCI7XHJcbiAgICAgICAgICAgIHMgKz0ga2V5LnRvU3RyaW5nKCkgKyBcIlxcXCIgaXMgbm90IGVtcHR5IGZvciB0aGUgZm9sbG93aW5nIGVsZW1lbnQuIEl0IGlzIHJlY29tbWVuZGVkIHRvIG5vdCB1c2UgY3NzIGFuaWFtdGlvbnMgYW5kIHRoaXMgZnJhbWV3b3JrIGZvciB0aGUgc2FtZSBwcm9wZXJ0aWVzLlxcblxcbkluIG9yZGVyIHRvIHByZXZlbnQgYW4gYW5pYW10aW9uIGZyb20gdHJpZ2dlcmluZyB0d2ljZSBpbiBhIHJvdyB0aGUgcmVzdWx0IG9mIHRoaXMgb25lIHdpbGwgbm90IGRpc3BsYXkgaXRzIHJlc3VsdCBpbiB0aGUgZG9tIGV4cGxvcmVyLlxcblxcblwiO1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4ocywgdGhhdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoY3NzS2V5cywgdHJhbnNpdGlvblByb3BlcnR5cywgdHJhbnNpdGlvbkR1cmF0aW9uLCB0aGF0KSB7XHJcbiAgICAgICAgICAgIGxldCB3YXJuID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBvZiBjc3NLZXlzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHJhbnNpdGlvbkR1cmF0aW9uICE9PSAwICYmICh0cmFuc2l0aW9uUHJvcGVydHlzLmluY2x1ZGVzKGtleSkgfHwgdHJhbnNpdGlvblByb3BlcnR5cyA9PT0gXCJhbGxcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB3YXJuLmFkZChrZXkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBsZW5ndGggPSB3YXJuLmxlbmd0aDtcclxuICAgICAgICAgICAgaWYgKGxlbmd0aCAhPT0gMClcclxuICAgICAgICAgICAgICAgIGlmIChsZW5ndGggPT09IDEpXHJcbiAgICAgICAgICAgICAgICAgICAgd29hbih3YXJuWzBdLCB0aGF0KTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB3b2FuKHdhcm4sIHRoYXQpO1xyXG4gICAgICAgICAgICByZXR1cm4gd2FybjtcclxuICAgICAgICB9O1xyXG4gICAgfSkoKTtcclxuICAgIGZ1bmN0aW9uIGV2YWx1YXRlQWxsS2V5cyhmcmFtZXMpIHtcclxuICAgICAgICBsZXQgYWxsS2V5cyA9IE9iamVjdC5rZXlzKGZyYW1lcy5maXJzdCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBmcmFtZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhmcmFtZXNbaV0pO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBlIG9mIGtleXMpIHtcclxuICAgICAgICAgICAgICAgIGlmICghYWxsS2V5cy5pbmNsdWRlcyhlKSlcclxuICAgICAgICAgICAgICAgICAgICBhbGxLZXlzLmFkZChlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYWxsS2V5cy5pbmNsdWRlcyhcIm9mZnNldFwiKSlcclxuICAgICAgICAgICAgYWxsS2V5cy5ybShcIm9mZnNldFwiKTtcclxuICAgICAgICByZXR1cm4gYWxsS2V5cztcclxuICAgIH1cclxuICAgIGNsYXNzIEVsZW1zV2l0aG91dENvbnNpdGVudFRyYW5zZm9ybVByb3BzIHtcclxuICAgICAgICBjb25zdHJ1Y3RvciguLi5lbGVtcykge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JlID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuYWRkKC4uLmVsZW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYWRkKC4uLmVsZW1zKSB7XHJcbiAgICAgICAgICAgIGVsZW1zLmVhKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaW5jbHVkZXMoZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5hZGQoZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBybSguLi5lbGVtcykge1xyXG4gICAgICAgICAgICBsZXQgaW5kaWNlcyA9IFtdO1xyXG4gICAgICAgICAgICBlbGVtcy5lYSgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGhhc05vSWRlbnRpZmllciA9IGUuaWRlbnRpZmllciA9PT0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5lYSgocywgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlID09PSBzIHx8IChzLmVsZW0gPT09IGUuZWxlbSAmJiAoaGFzTm9JZGVudGlmaWVyIHx8IHMuaWRlbnRpZmllciA9PT0gZS5pZGVudGlmaWVyKSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGljZXMuYWRkKGkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JlLnJtSSguLi5pbmRpY2VzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5jbHVkZXMoLi4uZWxlbXMpIHtcclxuICAgICAgICAgICAgaWYgKGVsZW1zLmVhKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaGFzTm9JZGVudGlmaWVyID0gZS5pZGVudGlmaWVyID09PSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdG9yZS5lYSgocykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlID09PSBzIHx8IChzLmVsZW0gPT09IGUuZWxlbSAmJiAoaGFzTm9JZGVudGlmaWVyIHx8IHMuaWRlbnRpZmllciA9PT0gZS5pZGVudGlmaWVyKSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgZWFzZUluT3V0ID0gbmV3IEVhc2luZyhcImVhc2VJbk91dFwiKTtcclxuICAgIC8vIGxldCBlYXNlID0gbmV3IEVhc2luZyhcImVhc2VcIilcclxuICAgIGxldCBlYXNlSW5PdXRGdW5jID0gZWFzZUluT3V0LmZ1bmN0aW9uO1xyXG4gICAgLy8gbGV0IGVhc2VJbk91dFN0cmluZyA9IGVhc2VJbk91dC5zdHJpbmdcclxuICAgIC8vIGxldCBlYXNlRnVuYyA9IGVhc2UuZnVuY3Rpb25cclxuICAgIC8vIGxldCBlYXNlU3RyaW5nID0gZWFzZS5zdHJpbmdcclxuICAgIGxldCBtYXhBbmltYXRpb25Qcm9ncmVzcyA9IC45OTk5OTk5O1xyXG4gICAgbGV0IG1pbkFuaW1hdGlvblByb2dyZXNzID0gMC4wMDAwMDAxO1xyXG4gICAgbGV0IG5hbWVTcGFjZUluZGV4ID0gbmV3IE1hcCgpO1xyXG4gICAgbGV0IGVsZW1zV2l0aG91dENvbnNpdGVudFRyYW5zZm9ybVByb3BzID0gbmV3IEVsZW1zV2l0aG91dENvbnNpdGVudFRyYW5zZm9ybVByb3BzKCk7XHJcbiAgICBsZXQgbWF4UHJvZ3Jlc3NJbk9uZVN0ZXAgPSAuMTtcclxuICAgIC8vIC4xIC8gMTYuNjY2NjY2NjY2NjY2NjY2N1xyXG4gICAgbGV0IG1heFByb2dyZXNzSW5PbmVTdGVwV2l0aG91dERlbHRhID0gLjAwNjtcclxuICAgIGxldCBmcmFtZURlbHRhID0gMTYuNjY2NjY2NjY2NjY2NjY2NztcclxuICAgIGxldCBsYXN0RnJhbWVUaW1lU3RhbXAgPSAwO1xyXG4gICAgbGV0IGxvb3AgPSAoZnJhbWVUaW1lU3RhbXApID0+IHtcclxuICAgICAgICBmcmFtZURlbHRhID0gZnJhbWVUaW1lU3RhbXAgLSBsYXN0RnJhbWVUaW1lU3RhbXA7XHJcbiAgICAgICAgbGFzdEZyYW1lVGltZVN0YW1wID0gZnJhbWVUaW1lU3RhbXA7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xyXG4gICAgICAgIC8vIGxvZyhmcmFtZURlbHRhKVxyXG4gICAgfTtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcclxuICAgIC8vIFRPRE86IG1heWJlIEhUTUwgYXR0cmJzIGFuaW1cclxuICAgIC8vIFNvIHRoYXQgeW91IGNvdWxkIGFuaW1hdGUgaW5uZXJIVE1MIGUuZy5cclxuICAgIC8vIG1heWJlIGZhZGUgYW91dCBmb250LWNvbG9yIGFuZCB0aGVuIGJhY2suLi4gb3IganVzdCBzZXQgaXRcclxuICAgIC8vIFRPRE86IGFkZCB4IGFzIHNob3J0aGFuZCBmb3IgdHJhbnNsYXRlIFggdXN3LlxyXG4gICAgLy8gVE9ETzogaW5zdGVhZCBvZiBvcHRpb25zIGp1c3QgdGhlIGR1cmF0aW9uIGNhbiBiZSBnaXZlbiBhcyB3ZWxsLiBzbyBlbGVtLmFuaW0oey4uLn0sIDMwMClcclxuICAgIC8vIFRPRE86IG1ha2Ugd2FybmluZyBpZiBhbmltYXRpb24gdG8gb3IgZnJvbSBhdXRvLiBCYXNlZCBvbiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvQ1NTX1RyYW5zaXRpb25zL1VzaW5nX0NTU190cmFuc2l0aW9ucyNXaGljaF9DU1NfcHJvcGVydGllc19jYW5fYmVfdHJhbnNpdGlvbmVkXHJcbiAgICBwLmFuaW0gPSBhc3luYyBmdW5jdGlvbiAoZnJhbWVfZnJhbWVzLCBvcHRpb25zID0ge30sIGd1aWRhbmNlKSB7XHJcbiAgICAgICAgbGV0IHRoaXNUcmFuc1Byb3BzID0gZ2V0VHJhbnNmb3JtUHJvcHModGhpcyk7XHJcbiAgICAgICAgbGV0IGFuaW1hdGlvbklzR3VpZGVkID0gZ3VpZGFuY2UgIT09IHVuZGVmaW5lZDtcclxuICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICBpZiAoZnJhbWVfZnJhbWVzW09iamVjdC5rZXlzKGZyYW1lX2ZyYW1lcylbMF1dIGluc3RhbmNlb2YgQXJyYXkpXHJcbiAgICAgICAgICAgIGZyYW1lX2ZyYW1lcyA9IGNvbnZlcnRGcmFtZVN0cnVjdHVyZShmcmFtZV9mcmFtZXMpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgZnJhbWVfZnJhbWVzID0gY2xvbmVEYXRhKGZyYW1lX2ZyYW1lcyk7XHJcbiAgICAgICAgaWYgKG5hbWVTcGFjZUluZGV4LmdldCh0aGlzKSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBuYW1lU3BhY2VJbmRleC5zZXQodGhpcywgW10pO1xyXG4gICAgICAgIGxldCBucyA9IG5hbWVTcGFjZUluZGV4LmdldCh0aGlzKTtcclxuICAgICAgICBpZiAob3B0aW9ucy5uYW1lID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbGV0IGluYyA9IDE7XHJcbiAgICAgICAgICAgIHdoaWxlIChucy5pbmNsdWRlcyhpbmMudG9TdHJpbmcoKSkpIHtcclxuICAgICAgICAgICAgICAgIGluYysrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBzID0gaW5jLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBvcHRpb25zLm5hbWUgPSBzO1xyXG4gICAgICAgICAgICBucy5hZGQocyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgaW5jID0gMjtcclxuICAgICAgICAgICAgbGV0IG5hbWU7XHJcbiAgICAgICAgICAgIGlmICghbnMuaW5jbHVkZXMob3B0aW9ucy5uYW1lKSlcclxuICAgICAgICAgICAgICAgIG5hbWUgPSBvcHRpb25zLm5hbWU7XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKG5zLmluY2x1ZGVzKG9wdGlvbnMubmFtZSArIGluYykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbmMrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG5hbWUgPSBvcHRpb25zLm5hbWUgKyBpbmM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgIG9wdGlvbnMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgICAgIG5zLmFkZChuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHByb2dyZXNzTmFtZVN0cmluZyA9IFwiYW5pbWF0aW9uLVwiICsgb3B0aW9ucy5uYW1lICsgXCItcHJvZ3Jlc3NcIjtcclxuICAgICAgICBsZXQgZW5kRnJhbWVzO1xyXG4gICAgICAgIGxldCB0cmFuc2l0aW9uUHJvcGVydHkgPSB0aGlzLmNzcyhcInRyYW5zaXRpb24tcHJvcGVydHlcIik7XHJcbiAgICAgICAgbGV0IHRyYW5zaXRpb25EdXJhdGlvbiA9IHRoaXMuY3NzKFwidHJhbnNpdGlvbi1kdXJhdGlvblwiKTtcclxuICAgICAgICBsZXQgbmVlZFRvQ2FsY3VsYXRlSW5pdGFsRnJhbWUgPSBmYWxzZTtcclxuICAgICAgICBsZXQgYWxsS2V5cztcclxuICAgICAgICBsZXQgdGhpc1RyYW5zUHJvcHNDb3B5ID0gbmV3IFRyYW5zZm9ybVByb3AodGhpc1RyYW5zUHJvcHMpO1xyXG4gICAgICAgIGlmIChmcmFtZV9mcmFtZXMgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICBsZXQgZnJhbWVzID0gZnJhbWVfZnJhbWVzO1xyXG4gICAgICAgICAgICBhbGxLZXlzID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGZyYW1lIG9mIGZyYW1lcykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhmcmFtZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5cy5pbmNsdWRlcyhcIm9mZnNldFwiKSlcclxuICAgICAgICAgICAgICAgICAgICBrZXlzLnJtVihcIm9mZnNldFwiKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGtleSBvZiBrZXlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhbGxLZXlzLmluY2x1ZGVzKGtleSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbEtleXMuYWRkKGtleSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGZyYW1lc1swXS5vZmZzZXQgIT09IDApIHtcclxuICAgICAgICAgICAgICAgIG5lZWRUb0NhbGN1bGF0ZUluaXRhbEZyYW1lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGxldCBpbml0RnJhbWUgPSBjdXJyZW50RnJhbWUoYWxsS2V5cywgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICBmcmFtZXMuZGRhKGluaXRGcmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3ByZWFkT2Zmc2V0KGZyYW1lcyk7XHJcbiAgICAgICAgICAgIGxldCBuZWVkZWQgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZnJhbWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZnJhbWUgPSBmcmFtZXNbaV07XHJcbiAgICAgICAgICAgICAgICBsZXQgdGhpc2tleXMgPSBPYmplY3Qua2V5cyhmcmFtZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpc2tleXMuaW5jbHVkZXMoXCJvZmZzZXRcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpc2tleXMucm1WKFwib2Zmc2V0XCIpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQga2V5IG9mIGFsbEtleXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXNrZXlzLmluY2x1ZGVzKGtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByZXZTdHlsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5leHRTdHlsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByZXZPZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXh0T2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgd2FudGVkT2Zmc2V0ID0gZnJhbWUub2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGZyYW1lcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZyYW1laiA9IGZyYW1lc1tqXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmcmFtZWpba2V5XSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGogPCBpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZTdHlsZSA9IGZyYW1laltrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2T2Zmc2V0ID0gZnJhbWVqLm9mZnNldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRTdHlsZSA9IGZyYW1laltrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0T2Zmc2V0ID0gZnJhbWVqLm9mZnNldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcmV2U3R5bGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWVba2V5XSA9IG5leHRTdHlsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChuZXh0U3R5bGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWVba2V5XSA9IHByZXZTdHlsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChuZXh0U3R5bGUgPT09IHByZXZTdHlsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWVba2V5XSA9IHByZXZTdHlsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhdCA9ICgod2FudGVkT2Zmc2V0IC0gcHJldk9mZnNldCkgLyAobmV4dE9mZnNldCAtIHByZXZPZmZzZXQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtZSA9IG5lZWRlZC5nZXQoZnJhbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1lICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZiA9IG1lLmVhKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmlkZW50aWZ5LnByZXZPZmZzZXQgPT09IHByZXZPZmZzZXQgJiYgZS5pZGVudGlmeS5uZXh0T2Zmc2V0ID09PSBuZXh0T2Zmc2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmZyYW1lc1swXVtrZXldID0gcHJldlN0eWxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5mcmFtZXNbMV1ba2V5XSA9IG5leHRTdHlsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUua2V5cy5hZGQoa2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFmKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lLmFkZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzOiBba2V5XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWVzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBba2V5XTogcHJldlN0eWxlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBba2V5XTogbmV4dFN0eWxlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZGVudGlmeToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZPZmZzZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dE9mZnNldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZWVkZWQuc2V0KGZyYW1lLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXM6IFtrZXldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFtZXM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFtrZXldOiBwcmV2U3R5bGUgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFtrZXldOiBuZXh0U3R5bGUgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkZW50aWZ5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldk9mZnNldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0T2Zmc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgbm90QWxyZWFkeUZvcm1hdHRlZEZyYW1lcyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBmcmFtZSBvZiBmcmFtZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChuZWVkZWQuZ2V0KGZyYW1lKSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdEFuaW1hdGlvbkNzcyhmcmFtZSwgdGhpc1RyYW5zUHJvcHNDb3B5KTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICBub3RBbHJlYWR5Rm9ybWF0dGVkRnJhbWVzLmFkZChmcmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHByb21zID0gW107XHJcbiAgICAgICAgICAgIG5lZWRlZC5mb3JFYWNoKChuZSwgZnJhbWUpID0+IHtcclxuICAgICAgICAgICAgICAgIG5lLmVhKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbXMuYWRkKGdldFN0eWxlQXRQcm9ncmVzcyhbZS5mcmFtZXMsIGVdLCAxKS50aGVuKChzdHlsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gc3R5bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lW2tleV0gPSBzdHlsZVtrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChwcm9tcyk7XHJcbiAgICAgICAgICAgIG5vdEFscmVhZHlGb3JtYXR0ZWRGcmFtZXMuZWEoKGZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmb3JtYXRBbmltYXRpb25Dc3MoZnJhbWUsIHRoaXNUcmFuc1Byb3BzQ29weSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBhbGxLZXlzID0gZXZhbHVhdGVBbGxLZXlzKGZyYW1lcyk7XHJcbiAgICAgICAgICAgIGVuZEZyYW1lcyA9IGZyYW1lcztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGZvcm1hdEFuaW1hdGlvbkNzcyhmcmFtZV9mcmFtZXMsIHRoaXNUcmFuc1Byb3BzQ29weSk7XHJcbiAgICAgICAgICAgIGFsbEtleXMgPSBPYmplY3Qua2V5cyhmcmFtZV9mcmFtZXMpO1xyXG4gICAgICAgICAgICBpZiAoYWxsS2V5cy5pbmNsdWRlcyhcIm9mZnNldFwiKSlcclxuICAgICAgICAgICAgICAgIGFsbEtleXMucm1WKFwib2Zmc2V0XCIpO1xyXG4gICAgICAgICAgICBuZWVkVG9DYWxjdWxhdGVJbml0YWxGcmFtZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGxldCBpbml0RnJhbWUgPSBjdXJyZW50RnJhbWUoYWxsS2V5cywgdGhpcyk7XHJcbiAgICAgICAgICAgIGVuZEZyYW1lcyA9IFtpbml0RnJhbWUsIGZyYW1lX2ZyYW1lc107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBkZXRlY3RlZFByb3BlcnRpZXMgPSBkZXRlY3RJZkluVHJhbnNpdGlvblByb3BlcnR5KGFsbEtleXMsIHRyYW5zaXRpb25Qcm9wZXJ0eSwgdHJhbnNpdGlvbkR1cmF0aW9uLCB0aGlzKTtcclxuICAgICAgICBsZXQgY3NzQ2FuQmVVc2VkVG9GaWxsID0gYWxsS2V5cy5leGNsdWRlcyguLi5kZXRlY3RlZFByb3BlcnRpZXMpO1xyXG4gICAgICAgIGxldCBlbGVtc1dpdGhvdXRDb25zaXRlbnRUcmFuc2Zvcm1Qcm9wc0tleSA9IHsgZWxlbTogdGhpcywgaWRlbnRpZmllcjogb3B0aW9ucy5uYW1lIH07XHJcbiAgICAgICAgaWYgKCFhbmltYXRpb25Jc0d1aWRlZCkge1xyXG4gICAgICAgICAgICBsZXQgbyA9IG9wdGlvbnM7XHJcbiAgICAgICAgICAgIGVsZW1zV2l0aG91dENvbnNpdGVudFRyYW5zZm9ybVByb3BzLmFkZChlbGVtc1dpdGhvdXRDb25zaXRlbnRUcmFuc2Zvcm1Qcm9wc0tleSk7XHJcbiAgICAgICAgICAgIC8vRGVmYXVsdHNcclxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgIGlmIChvLmR1cmF0aW9uID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICBvLmR1cmF0aW9uID0gMjAwO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChvLmR1cmF0aW9uIDw9IDApXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBcIkdpdmVuIG9wdGlvbiBkdXJhdGlvbiBcIiArIG8uZHVyYXRpb24gKyBcIiBjYW5ub3QgYmUgbmVnYXRpdmUuXCI7XHJcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBpZiAoby5pdGVyYXRpb25zID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICBvLml0ZXJhdGlvbnMgPSAxO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChvLml0ZXJhdGlvbnMgPD0gMClcclxuICAgICAgICAgICAgICAgIHRocm93IFwiR2l2ZW4gb3B0aW9uIGl0ZXJhdGlvbnMgXCIgKyBvLml0ZXJhdGlvbnMgKyBcIiBjYW5ub3QgYmUgbmVnYXRpdmUuXCI7XHJcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBpZiAoby5lYXNpbmcgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICBvLmVhc2luZyA9IFwiZWFzZVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICBpZiAoby5lYXNpbmcgaW5zdGFuY2VvZiBFYXNpbmcpXHJcbiAgICAgICAgICAgICAgICAgICAgby5lYXNpbmcgPSBvLmVhc2luZy5zdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGZpbGwgPSBvLmZpbGw7XHJcbiAgICAgICAgICAgIGlmIChmaWxsID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICBmaWxsID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgIG8uZmlsbCA9IFwiYm90aFwiO1xyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgbmV3IFByb21pc2UoYXN5bmMgKHJlcywgcmVqKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYW5pbWF0aW9uO1xyXG4gICAgICAgICAgICAgICAgbGV0IGVycm9ySW5BbmltYXRpb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uID0gdGhpcy5hbmltYXRlKGVuZEZyYW1lcywgbyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFxyXG4gIEVuY291bnRlcmVkIGZvbGxvd2luZyBlcnJvciB3aGlsZSBhdHRlbXB0aW5nIHRvIGFuaW1hdGUuXHJcbiAgXHJcbiAgLS0tLS0tLS1cclxuICBcclxuICBgICsgZS5tZXNzYWdlICsgYFxyXG4gIFxyXG4gIC0tLS0tLS0tXHJcbiAgXHJcbiAgXHJcbiAgRmFsbGluZyBiYWNrIG9uIGNzcyB0byBwcmV2ZW50IGxvZ2ljIGZhaWx1cmVzLmAsIGZyYW1lX2ZyYW1lcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jc3MoZW5kRnJhbWVzLmxhc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXNUcmFuc1Byb3BzLnRyYW5zZm9ybSA9IGdldENvbXB1dGVkU3R5bGUodGhpcykudHJhbnNmb3JtO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1zV2l0aG91dENvbnNpdGVudFRyYW5zZm9ybVByb3BzLnJtKGVsZW1zV2l0aG91dENvbnNpdGVudFRyYW5zZm9ybVByb3BzS2V5KTtcclxuICAgICAgICAgICAgICAgICAgICByZWooZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JJbkFuaW1hdGlvbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUocHJvZ3Jlc3NOYW1lU3RyaW5nLCBcIkZhaWxlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUocHJvZ3Jlc3NOYW1lU3RyaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnMucm1WKG9wdGlvbnMubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgaXRlcmF0aW9ucyA9IG8uaXRlcmF0aW9ucztcclxuICAgICAgICAgICAgICAgIGlmIChpdGVyYXRpb25zICE9PSBJbmZpbml0eSlcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24ub25maW5pc2ggPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsYXN0RnJhbWUgPSBlbmRGcmFtZXMubGFzdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1RyYW5zUHJvcHMudHJhbnNmb3JtID0gbGFzdEZyYW1lLnRyYW5zZm9ybTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbXNXaXRob3V0Q29uc2l0ZW50VHJhbnNmb3JtUHJvcHMucm0oZWxlbXNXaXRob3V0Q29uc2l0ZW50VHJhbnNmb3JtUHJvcHNLZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlsbCAmJiBjc3NDYW5CZVVzZWRUb0ZpbGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3NzKGxhc3RGcmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24uY2FuY2VsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGxldCBkaXNwbGF5UHJvZ3Jlc3MgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9ySW5BbmltYXRpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZnJlcSA9IG8uZHVyYXRpb24gLyAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1pbiA9IDE2O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmcmVxIDwgbWluKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmVxID0gbWluO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwcm9ncmVzcyA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGludCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VyICs9IGZyZXE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzID0gTWF0aC5yb3VuZCgoY3VyIC8gby5kdXJhdGlvbikgKiAxMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvZ3Jlc3MgPj0gMTAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVyYXRpb25zLS07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlcmF0aW9ucyA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKHByb2dyZXNzTmFtZVN0cmluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5zLnJtVihvcHRpb25zLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlQcm9ncmVzcygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUocHJvZ3Jlc3NOYW1lU3RyaW5nLCBwcm9ncmVzcyArIFwiJVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCBmcmVxKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5UHJvZ3Jlc3MoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgbGV0IG8gPSBvcHRpb25zO1xyXG4gICAgICAgICAgICBsZXQgZWFzaW5nRnVuYztcclxuICAgICAgICAgICAgLy8gRGVmYXVsdHNcclxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgIGlmIChvLnN0YXJ0ID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICBvLnN0YXJ0ID0gMDtcclxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgIGlmIChvLmVuZCA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgby5lbmQgPSBvLnN0YXJ0ICsgMTAwO1xyXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgaWYgKG8uc21vb3RoID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICBvLnNtb290aCA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBpZiAoby5hY3RpdmUgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgIG8uYWN0aXZlID0gbmV3IERhdGEodHJ1ZSk7XHJcbiAgICAgICAgICAgIGlmIChvLmVhc2luZyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBlYXNpbmdGdW5jID0gZWFzZUluT3V0RnVuYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvLmVhc2luZyA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICAgICAgICAgICAgICBvLmVhc2luZyA9IG5ldyBFYXNpbmcoby5lYXNpbmcpO1xyXG4gICAgICAgICAgICAgICAgZWFzaW5nRnVuYyA9IG8uZWFzaW5nLmZ1bmN0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChvLnN0YXJ0ID49IG8uZW5kKVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgXCJHaXZlbiBvcHRpb24gc3RhcnQgXCIgKyBvLnN0YXJ0ICsgXCIgYW5kIGVuZCBcIiArIG8uZW5kICsgXCIgYXJlIG5vdCBjb25zaXN0ZW50LiBFbmQgbXVzdCBiZSBncmVhdGVyIHRoYW4gc3RhcnQuXCI7XHJcbiAgICAgICAgICAgIG8uYWN0aXZlLnN1YnNjcmliZSgoYWN0aXZlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBub3RBY3RpdmUgPSAhYWN0aXZlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1zV2l0aG91dENvbnNpdGVudFRyYW5zZm9ybVByb3BzLmFkZChlbGVtc1dpdGhvdXRDb25zaXRlbnRUcmFuc2Zvcm1Qcm9wc0tleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbXNXaXRob3V0Q29uc2l0ZW50VHJhbnNmb3JtUHJvcHMuaW5jbHVkZXMoZWxlbXNXaXRob3V0Q29uc2l0ZW50VHJhbnNmb3JtUHJvcHNLZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNUcmFuc1Byb3BzLnRyYW5zZm9ybSA9IGdldENvbXB1dGVkU3R5bGUodGhpcykudHJhbnNmb3JtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtc1dpdGhvdXRDb25zaXRlbnRUcmFuc2Zvcm1Qcm9wcy5ybShlbGVtc1dpdGhvdXRDb25zaXRlbnRUcmFuc2Zvcm1Qcm9wc0tleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKHByb2dyZXNzTmFtZVN0cmluZywgXCJJbmFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAvL21vdmUgY29uc3RhbnRzXHJcbiAgICAgICAgICAgIGxldCBpblNtb290aGluZztcclxuICAgICAgICAgICAgbGV0IGNhbmNlbFNtb290aGluZztcclxuICAgICAgICAgICAgbGV0IGxhc3RBbmltYXRpb247XHJcbiAgICAgICAgICAgIGxldCBsYXN0UHJvZ3Jlc3MgPSBtaW5BbmltYXRpb25Qcm9ncmVzcztcclxuICAgICAgICAgICAgbGV0IHByb2dyZXNzID0gbWluQW5pbWF0aW9uUHJvZ3Jlc3M7XHJcbiAgICAgICAgICAgIGxldCBwcm9ncmVzc0Fic29ycHRpb24gPSAwO1xyXG4gICAgICAgICAgICBsZXQgbmV4dFByb2dyZXNzID0gMTtcclxuICAgICAgICAgICAgbGV0IHByZXZQcm9ncmVzcyA9IDA7XHJcbiAgICAgICAgICAgIGxldCBzbGlkZSA9IDA7XHJcbiAgICAgICAgICAgIGxldCBsYXN0UHJvZ3Jlc3NBYnNvcnB0aW9uID0gcHJvZ3Jlc3NBYnNvcnB0aW9uO1xyXG4gICAgICAgICAgICBsZXQgcmF3UHJvZ3Jlc3MgPSBtaW5BbmltYXRpb25Qcm9ncmVzcztcclxuICAgICAgICAgICAgbGV0IHJhd0xhc3RQcm9ncmVzcyA9IG1pbkFuaW1hdGlvblByb2dyZXNzO1xyXG4gICAgICAgICAgICBsZXQgbm90QWN0aXZlID0gIW8uYWN0aXZlLnZhbDtcclxuICAgICAgICAgICAgbGV0IG5vdEluTGltaXRDb3JyZWN0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgbGV0IGFic3VsdXRlUHJvZ3Jlc3M7XHJcbiAgICAgICAgICAgIGxldCBzdWJzY3JpcHRpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobm90QWN0aXZlKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGxhc3RQcm9ncmVzcyA9IHByb2dyZXNzO1xyXG4gICAgICAgICAgICAgICAgcmF3TGFzdFByb2dyZXNzID0gcmF3UHJvZ3Jlc3M7XHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzcyA9IHByb2dyZXNzVG9TYXZlUHJvZ3Jlc3MoKChhYnN1bHV0ZVByb2dyZXNzIC0gby5zdGFydCkgLyAoby5lbmQgLSBvLnN0YXJ0KSkpO1xyXG4gICAgICAgICAgICAgICAgcmF3UHJvZ3Jlc3MgPSBwcm9ncmVzcztcclxuICAgICAgICAgICAgICAgIGlmIChwcm9ncmVzcyA9PT0gbGFzdFByb2dyZXNzKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGlmIChpblNtb290aGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbFNtb290aGluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyYXdMYXN0UHJvZ3Jlc3MgPT09IHJhd1Byb2dyZXNzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoby5zbW9vdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmF3TGFzdFByb2dyZXNzIDwgcmF3UHJvZ3Jlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NBYnNvcnB0aW9uID0gcHJvZ3Jlc3NBYnNvcnB0aW9uICogKHJhd1Byb2dyZXNzIC0gbmV4dFByb2dyZXNzKSAvIChyYXdMYXN0UHJvZ3Jlc3MgLSBuZXh0UHJvZ3Jlc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NBYnNvcnB0aW9uID0gcHJvZ3Jlc3NBYnNvcnB0aW9uICogKHJhd1Byb2dyZXNzIC0gcHJldlByb2dyZXNzKSAvIChyYXdMYXN0UHJvZ3Jlc3MgLSBwcmV2UHJvZ3Jlc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoKGxhc3RQcm9ncmVzc0Fic29ycHRpb24gPCAwICYmIHByb2dyZXNzQWJzb3JwdGlvbiA+PSAwKSB8fCAocHJvZ3Jlc3NBYnNvcnB0aW9uIDw9IDAgJiYgbGFzdFByb2dyZXNzQWJzb3JwdGlvbiA+IDApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzQWJzb3JwdGlvbiA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzICs9IHByb2dyZXNzQWJzb3JwdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICBsYXN0UHJvZ3Jlc3NBYnNvcnB0aW9uID0gcHJvZ3Jlc3NBYnNvcnB0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlID0gKHNsaWRlIC8gMS43KSArICgocHJvZ3Jlc3MgLSBsYXN0UHJvZ3Jlc3MpIC8gZnJhbWVEZWx0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgZGlmZiA9IHByb2dyZXNzIC0gbGFzdFByb2dyZXNzO1xyXG4gICAgICAgICAgICAgICAgbGV0IG92ZXJsaW1pdCA9IE1hdGguYWJzKGRpZmYpID4gbWF4UHJvZ3Jlc3NJbk9uZVN0ZXA7XHJcbiAgICAgICAgICAgICAgICBpZiAob3ZlcmxpbWl0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSBwcm9ncmVzc1RvU2F2ZVByb2dyZXNzKGxhc3RQcm9ncmVzcyArICgoKGRpZmYgPiAwKSA/IG1heFByb2dyZXNzSW5PbmVTdGVwV2l0aG91dERlbHRhIDogLW1heFByb2dyZXNzSW5PbmVTdGVwV2l0aG91dERlbHRhKSAqIGZyYW1lRGVsdGEpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChsYXN0UHJvZ3Jlc3MgPT09IG1pbkFuaW1hdGlvblByb2dyZXNzIHx8IGxhc3RQcm9ncmVzcyA9PT0gbWF4QW5pbWF0aW9uUHJvZ3Jlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobmVlZFRvQ2FsY3VsYXRlSW5pdGFsRnJhbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kRnJhbWVzWzBdID0gY3VycmVudEZyYW1lKGFsbEtleXMsIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZWVkVG9DYWxjdWxhdGVJbml0YWxGcmFtZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoby5pbkNiICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvLmluQ2IgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW28uaW5DYl0oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgby5pbkNiLmNhbGwodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9hbmltYXRpb25cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKHByb2dyZXNzTmFtZVN0cmluZywgTWF0aC5yb3VuZChwcm9ncmVzcyAqIDEwMCkgKyBcIiVcIik7XHJcbiAgICAgICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICAgICAgICAgIGlmIChsYXN0QW5pbWF0aW9uICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdEFuaW1hdGlvbi5jYW5jZWwoKTtcclxuICAgICAgICAgICAgICAgIGxldCB0aGlzQW5pbWF0aW9uO1xyXG4gICAgICAgICAgICAgICAgbGV0IG9wID0geyBkdXJhdGlvbjogMTAwLCBmaWxsOiBcImJvdGhcIiwgZWFzaW5nOiBcImxpbmVhclwiLCBpdGVyYXRpb25zOiAxLCBpdGVyYXRpb25TdGFydDogcHJvZ3Jlc3NUb1NhdmVQcm9ncmVzcyhlYXNpbmdGdW5jKHByb2dyZXNzKSkgfTtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpc0FuaW1hdGlvbiA9IHRoaXMuYW5pbWF0ZShlbmRGcmFtZXMsIG9wKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzQW5pbWF0aW9uLnBhdXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdEFuaW1hdGlvbiA9IHRoaXNBbmltYXRpb247XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yQW5pbWF0aW9uKFwibWFpblwiLCBlbmRGcmFtZXMsIG9wLCB0aGlzLCBlKTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc0Fic29ycHRpb24gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG92ZXJsaW1pdCAmJiAhKHByb2dyZXNzIDw9IG1pbkFuaW1hdGlvblByb2dyZXNzIHx8IHByb2dyZXNzID49IG1heEFuaW1hdGlvblByb2dyZXNzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub3RJbkxpbWl0Q29ycmVjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdEluTGltaXRDb3JyZWN0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpc0FuaW1hdGlvbiA9PT0gbGFzdEFuaW1hdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJkeVRvU2V0RW5kVmFscztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvLnNtb290aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXNSZHlUb1NldEVuZFZhbHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmR5VG9TZXRFbmRWYWxzID0gbmV3IFN5bmNQcm9tKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzUmR5VG9TZXRFbmRWYWxzID0gcmVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluU21vb3RoaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2FuY2VsQW5pbWF0aW9uU21vb3RoaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbFNtb290aGluZyA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uU21vb3RoaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYW5VcFNtb290aGVuaW5nKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNtb290aFByb2dyZXNzID0gcHJvZ3Jlc3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxvY2FsQ29weU9mUHJvZ3Jlc3MgPSBwcm9ncmVzcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21vb3RoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gc21vb3RoKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FuY2VsQW5pbWF0aW9uU21vb3RoaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25TbW9vdGhpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbW9vdGhQcm9ncmVzcyArPSBzbGlkZSAqIGZyYW1lRGVsdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlID0gc2xpZGUgKiAuNTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVG8gYmUgaG9uZXN0IEkgZG9udCBrbm93IHdoeSB0aGlzIGNhbnQgYmUganVzdCBkb25lIG9uY2UgYXQgdG8gc3RhcnQgb2YgY2xlYW5VcFNtb290aGVuaW5nIGJ1dCB3aXJlZCB0aGluZ3MgaGFwcGVuIGlmIGl0IGRvZXNudCBnbyBoZXJlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMga2V5ZnJhbWVzIHNob3cgdGhlIHByb2JsZW0ge3RyYW5zbGF0ZVg6IDUwMH0sIHt0cmFuc2xhdGVZOiA1MDAsIGJhY2tncm91bmRDb2xvcjogXCJyZWRcIn0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtb290aFByb2dyZXNzID0gcHJvZ3Jlc3NUb1NhdmVQcm9ncmVzcyhzbW9vdGhQcm9ncmVzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlYXNlZFNtb290aFByb2dyZXNzID0gZWFzaW5nRnVuYyhzbW9vdGhQcm9ncmVzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtaW5Cb3JkZXJSZWFjaGVkID0gZWFzZWRTbW9vdGhQcm9ncmVzcyA8PSBtaW5BbmltYXRpb25Qcm9ncmVzcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1heEJvcmRlclJlYWNoZWQgPSBlYXNlZFNtb290aFByb2dyZXNzID49IG1heEFuaW1hdGlvblByb2dyZXNzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWluQm9yZGVyUmVhY2hlZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVhc2VkU21vb3RoUHJvZ3Jlc3MgPSBtaW5BbmltYXRpb25Qcm9ncmVzcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobWF4Qm9yZGVyUmVhY2hlZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVhc2VkU21vb3RoUHJvZ3Jlc3MgPSBtYXhBbmltYXRpb25Qcm9ncmVzcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RBbmltYXRpb24gIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RBbmltYXRpb24uY2FuY2VsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvcCA9IHsgZHVyYXRpb246IDEwMCwgZmlsbDogXCJib3RoXCIsIGVhc2luZzogXCJsaW5lYXJcIiwgaXRlcmF0aW9uczogMSwgaXRlcmF0aW9uU3RhcnQ6IGVhc2VkU21vb3RoUHJvZ3Jlc3MgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RBbmltYXRpb24gPSB0aGF0LmFuaW1hdGUoZW5kRnJhbWVzLCBvcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0QW5pbWF0aW9uLnBhdXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yQW5pbWF0aW9uKFwic21vb3RoXCIsIGVuZEZyYW1lcywgb3AsIHRoYXQsIGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NBYnNvcnB0aW9uID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoc2xpZGUpID49IC4wMDAwMDEgJiYgIShtaW5Cb3JkZXJSZWFjaGVkIHx8IG1heEJvcmRlclJlYWNoZWQpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHNtb290aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFuVXBTbW9vdGhlbmluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNsZWFuVXBTbW9vdGhlbmluZyhodXJyeSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzbWFsbGVyUHJvZ3Jlc3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBiaWdnZXJQcm9ncmVzcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxvY2FsQ29weU9mUHJvZ3Jlc3MgPCBzbW9vdGhQcm9ncmVzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGxlclByb2dyZXNzID0gbG9jYWxDb3B5T2ZQcm9ncmVzcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpZ2dlclByb2dyZXNzID0gc21vb3RoUHJvZ3Jlc3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbGVyUHJvZ3Jlc3MgPSBzbW9vdGhQcm9ncmVzcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpZ2dlclByb2dyZXNzID0gbG9jYWxDb3B5T2ZQcm9ncmVzcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB7IG9mZnNldCB9IG9mIGVuZEZyYW1lcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9mZnNldCA8PSBzbWFsbGVyUHJvZ3Jlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2UHJvZ3Jlc3MgPSBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChvZmZzZXQgPj0gYmlnZ2VyUHJvZ3Jlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0UHJvZ3Jlc3MgPSBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NBYnNvcnB0aW9uID0gcHJvZ3Jlc3NBYnNvcnB0aW9uICsgKChzbW9vdGhQcm9ncmVzcyAtIGxvY2FsQ29weU9mUHJvZ3Jlc3MpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFByb2dyZXNzQWJzb3JwdGlvbiA9IHByb2dyZXNzQWJzb3JwdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGh1cnJ5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFByb2dyZXNzID0gc21vb3RoUHJvZ3Jlc3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzID0gc21vb3RoUHJvZ3Jlc3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluU21vb3RoaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc1JkeVRvU2V0RW5kVmFscyhodXJyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJkeVRvU2V0RW5kVmFscyA9IFN5bmNQcm9tLnJlc29sdmUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmR5VG9TZXRFbmRWYWxzLnRoZW4oKGh1cnJ5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFodXJyeSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudEZyYW1lID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjcyA9IGdldENvbXB1dGVkU3R5bGUodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbEtleXMuZWEoKGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEZyYW1lW2tleV0gPSBjc1trZXldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50RnJhbWUudHJhbnNmb3JtICE9PSB1bmRlZmluZWQgJiYgZWxlbXNXaXRob3V0Q29uc2l0ZW50VHJhbnNmb3JtUHJvcHMuaW5jbHVkZXMoZWxlbXNXaXRob3V0Q29uc2l0ZW50VHJhbnNmb3JtUHJvcHNLZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNUcmFuc1Byb3BzLnRyYW5zZm9ybSA9IGN1cnJlbnRGcmFtZS50cmFuc2Zvcm07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtc1dpdGhvdXRDb25zaXRlbnRUcmFuc2Zvcm1Qcm9wcy5ybShlbGVtc1dpdGhvdXRDb25zaXRlbnRUcmFuc2Zvcm1Qcm9wc0tleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdHJhbnNmb3JtID0gdGhpc1RyYW5zUHJvcHMudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRyYW5zZm9ybSAhPT0gXCJub25lXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEZyYW1lLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjdXJyZW50RnJhbWUudHJhbnNmb3JtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3NzKGN1cnJlbnRGcmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjc3NDYW5CZVVzZWRUb0ZpbGwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RBbmltYXRpb24uY2FuY2VsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdEFuaW1hdGlvbiA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvZ3Jlc3MgPT09IG1pbkFuaW1hdGlvblByb2dyZXNzIHx8IHByb2dyZXNzID09PSBtYXhBbmltYXRpb25Qcm9ncmVzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoby5vdXRDYiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG8ub3V0Q2IgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tvLm91dENiXSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8ub3V0Q2IuY2FsbCh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgbGV0IGZpcnN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgZ3VpZGFuY2Uuc3Vic2NyaWJlKChwcm9ncmVzcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpcnN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbXNXaXRob3V0Q29uc2l0ZW50VHJhbnNmb3JtUHJvcHMuYWRkKGVsZW1zV2l0aG91dENvbnNpdGVudFRyYW5zZm9ybVByb3BzS2V5KTtcclxuICAgICAgICAgICAgICAgICAgICBmaXJzdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYWJzdWx1dGVQcm9ncmVzcyA9IHByb2dyZXNzO1xyXG4gICAgICAgICAgICAgICAgaWYgKG5vdEluTGltaXRDb3JyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgZnVuY3Rpb24gZXJyb3JBbmltYXRpb24odGhyZWFkLCB3b3JraW5nRnJhbWVzLCBvcHRpb25zLCB0aGF0LCBlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJVbmV4cGVjdGVkIGVycm9yIHdoaWxlIGFuaW1hdGluZyAoVGhyZWFkOiBcIiArIHRocmVhZCArIFwiKSB1c2luZyB0aGUgZm9sbG93aW5nIHBhcmFtZXRlcnNcXG5cXG5GcmFtZXM6IFwiLCB3b3JraW5nRnJhbWVzLCBcIlxcbk9wdGlvbnM6IFwiLCBvcHRpb25zLCBcIlxcblxcblNldHRpbmcgcHJvZ3Jlc3NBYnNvcnB0aW9uIHRvIDAgdG8gcHJldmVudCBmdXJ0aGVyIGZhaWx1cmVzLlxcbnRoaXM6IFwiLCB0aGF0LCBcIlxcbkV4Y2VwdGlvbjogXFxuXCIsIGVycm9yKTtcclxuICAgIH1cclxuICAgIGNsYXNzIFN5bmNQcm9tIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihjYikge1xyXG4gICAgICAgICAgICB0aGlzLl90aGVuID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuaGFzQmVlblJlc2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChjYiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjYih0aGlzLl9yZXMuYmluZCh0aGlzKSwgdGhpcy5fcmVqLmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXMgPSB0aGlzLl9yZXM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlaiA9IHRoaXMuX3JlajtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzdGF0aWMgcmVzb2x2ZShyZXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTeW5jUHJvbSgocikgPT4geyByKHJlcyk7IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdGF0aWMgcmVqZWN0KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFN5bmNQcm9tKChyLCBuKSA9PiB7IG4oKTsgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF9yZXModmFsKSB7XHJcbiAgICAgICAgICAgIGxldCB0aGVuID0gdGhpcy5fdGhlbjtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGVuW2ldKHZhbCk7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhlbltpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmhhc0JlZW5SZXNlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMucmVzVmFsID0gdmFsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfcmVqKCkge1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fdGhlbjtcclxuICAgICAgICAgICAgdGhpcy5oYXNCZWVuUmVzZWQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGVuKHRvKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc0JlZW5SZXNlZCkge1xyXG4gICAgICAgICAgICAgICAgdG8odGhpcy5yZXNWYWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuaGFzQmVlblJlc2VkICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl90aGVuLmFkZCh0byk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL0hhcmRjb2RlIHRoZSBzcHJlYWQgb2Ygb2Zmc2V0IGhlcmUgc2ltaWxpYXIgdG8gaG93IGl0IGlzIGNhbGN1bGF0ZWQgaW50ZXJuLCBpbiBvcmRlciB0byBsYXRlciBpbmplY3Qgc21vb3RoZW5kZWQgZnJhbWUuXHJcbiAgICBmdW5jdGlvbiBzcHJlYWRPZmZzZXQoZnJhbWVzKSB7XHJcbiAgICAgICAgZnJhbWVzLmZpcnN0Lm9mZnNldCA9IDA7XHJcbiAgICAgICAgZnJhbWVzLmxhc3Qub2Zmc2V0ID0gMTtcclxuICAgICAgICBpZiAoZnJhbWVzLmxlbmd0aCA9PT0gMilcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGxldCBsYXN0ID0gMTtcclxuICAgICAgICBsZXQgbGFzdE9mZnNldCA9IC0xO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBsYXN0OyBpIDwgZnJhbWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBsID0gaSArIDE7XHJcbiAgICAgICAgICAgIGxldCBvID0gZnJhbWVzW2ldLm9mZnNldDtcclxuICAgICAgICAgICAgaWYgKG8gIT09IHVuZGVmaW5lZCAmJiBvICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobyA+PSBsYXN0T2Zmc2V0ICYmIG8gPj0gMCAmJiBvIDw9IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBsYXN0T2Zmc2V0ID0gbztcclxuICAgICAgICAgICAgICAgICAgICBmcmFtZXMuc2xpY2UobGFzdCwgbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXJ0ID0gZnJhbWVzW2xhc3QgLSAxXS5vZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVuZCA9IGZyYW1lc1tpXS5vZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNwYWNlID0gKGVuZCAtIHN0YXJ0KSAvIChsIC0gbGFzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG9mZnNldCA9IHN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSBsYXN0OyBqIDwgaTsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldCArPSBzcGFjZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWVzW2pdLm9mZnNldCA9IG9mZnNldDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdCA9IGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgXCJPZmZzZXRzIG11c3QgYmUgZ2l2ZW4gaW4gaW5jcmVtZW50aW5nIHNlcXVlbmNlLCBzcGFubmluZyBiZXR3ZWVuIDAgLSAxXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyB0cmFuc2Zvcm0gcHJvcHMgZGlzdGluZ3Vpc2hcclxuICAgIGZ1bmN0aW9uIGNvbnZlcnRGcmFtZVN0cnVjdHVyZShvYikge1xyXG4gICAgICAgIGxldCBtYXggPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBvYikge1xyXG4gICAgICAgICAgICBsZXQgeCA9IG9iW2tleV0ubGVuZ3RoO1xyXG4gICAgICAgICAgICBpZiAobWF4IDwgeClcclxuICAgICAgICAgICAgICAgIG1heCA9IHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBvID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXg7IGkrKykge1xyXG4gICAgICAgICAgICBvW2ldID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBvYikge1xyXG4gICAgICAgICAgICBvYltrZXldLmZvckVhY2goKHZhbCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgb1tpXVtrZXldID0gdmFsO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG87XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZXR1cEJhY2tncm91bmRUYXNrKHRhc2ssIGNvbnN0cmFpbnQgPSB7IHRpbWU6IDE2LCB0aW1lb3V0OiAxNiB9KSB7XHJcbiAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgaWYgKGNvbnN0cmFpbnQudGltZW91dCA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBjb25zdHJhaW50LnRpbWVvdXQgPSAxNjtcclxuICAgICAgICBjb25zdCByZXF1ZXN0UXVldWUgPSBbXTtcclxuICAgICAgICBsZXQgaW1wb3J0YW5jZVN0cnVjdHVyZUhhc0NoYW5nZWQgPSBmYWxzZTtcclxuICAgICAgICBsZXQgcmVjdXJzaW9uT25nb2luZyA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBzdGFydDtcclxuICAgICAgICBsZXQgaXRlcmF0aW9uc0FzQ29uc3RyYWludCA9IFwiaXRlcmF0aW9uc1wiIGluIGNvbnN0cmFpbnQ7XHJcbiAgICAgICAgbGV0IGluaXRSZWN1cnNpb24gPSBpdGVyYXRpb25zQXNDb25zdHJhaW50ID8gKCkgPT4ge1xyXG4gICAgICAgICAgICBzdGFydCA9IDA7XHJcbiAgICAgICAgfSA6ICgpID0+IHtcclxuICAgICAgICAgICAgc3RhcnQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgbGV0IGNvbXBhaXJDb25zdHJhaW50ID0gaXRlcmF0aW9uc0FzQ29uc3RyYWludCA/ICgpID0+IHtcclxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgIHN0YXJ0Kys7XHJcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICByZXR1cm4gc3RhcnQgPiBjb25zdHJhaW50Lml0ZXJhdGlvbnM7XHJcbiAgICAgICAgfSA6ICgpID0+IHtcclxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZSgpIC0gc3RhcnQgPiBjb25zdHJhaW50LnRpbWU7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBmdW5jdGlvbiBjaGFuZ2VJbXBvcnRhbmNlU3RydWN0dXJlKCkge1xyXG4gICAgICAgICAgICBpbXBvcnRhbmNlU3RydWN0dXJlSGFzQ2hhbmdlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBleGVjdXRlKHBhcmFtcywgaW1wb3J0YW5jZSA9IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpbXBvcnRhbmNlIGluc3RhbmNlb2YgRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RRdWV1ZS5hZGQoeyBpbXBvcnRhbmNlLCBwYXJhbXMsIHJlcyB9KTtcclxuICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbmNlLnN1YnNjcmliZShjaGFuZ2VJbXBvcnRhbmNlU3RydWN0dXJlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0UXVldWUuYWRkKHsgaW1wb3J0YW5jZTogeyB2YWw6IGltcG9ydGFuY2UgfSwgcGFyYW1zLCByZXMgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlY3Vyc2lvbk9uZ29pbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWN1cnNpb25PbmdvaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdFJlY3Vyc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWN1cnNpdmVseUNhbGxFbGVtcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIHJlY3Vyc2l2ZWx5Q2FsbEVsZW1zKCkge1xyXG4gICAgICAgICAgICBpZiAoaW1wb3J0YW5jZVN0cnVjdHVyZUhhc0NoYW5nZWQpIHtcclxuICAgICAgICAgICAgICAgIHNvcnRSZXF1ZXN0UXVldWUoKTtcclxuICAgICAgICAgICAgICAgIGltcG9ydGFuY2VTdHJ1Y3R1cmVIYXNDaGFuZ2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFyZXF1ZXN0UXVldWUuZW1wdHkpIHtcclxuICAgICAgICAgICAgICAgIGxldCBlbGVtID0gcmVxdWVzdFF1ZXVlLmZpcnN0O1xyXG4gICAgICAgICAgICAgICAgZWxlbS5yZXModGFzayguLi5lbGVtLnBhcmFtcykpO1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdFF1ZXVlLnJtSSgwKTtcclxuICAgICAgICAgICAgICAgIGlmIChjb21wYWlyQ29uc3RyYWludCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRSZWN1cnNpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjdXJzaXZlbHlDYWxsRWxlbXMoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCBjb25zdHJhaW50LnRpbWVvdXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZWx5Q2FsbEVsZW1zKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZWN1cnNpb25PbmdvaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gc29ydFJlcXVlc3RRdWV1ZSgpIHtcclxuICAgICAgICAgICAgcmVxdWVzdFF1ZXVlLnNvcnQoKHsgaW1wb3J0YW5jZTogYSB9LCB7IGltcG9ydGFuY2U6IGIgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGEudmFsIC0gYi52YWw7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHByb2dyZXNzVG9TYXZlUHJvZ3Jlc3MocHJvZ3Jlc3MpIHtcclxuICAgICAgICBpZiAocHJvZ3Jlc3MgPCBtaW5BbmltYXRpb25Qcm9ncmVzcylcclxuICAgICAgICAgICAgcHJvZ3Jlc3MgPSBtaW5BbmltYXRpb25Qcm9ncmVzcztcclxuICAgICAgICBlbHNlIGlmIChwcm9ncmVzcyA+IG1heEFuaW1hdGlvblByb2dyZXNzKVxyXG4gICAgICAgICAgICBwcm9ncmVzcyA9IG1heEFuaW1hdGlvblByb2dyZXNzO1xyXG4gICAgICAgIHJldHVybiBwcm9ncmVzcztcclxuICAgIH1cclxuICAgIGxldCBnZXRTdHlsZUF0UHJvZ3Jlc3MgPSAoKCkgPT4ge1xyXG4gICAgICAgIC8vIFRPRE86IG1heWJlIGRvbnQgbWFrZSB3cmFwcGVyLCBidXQgdXNlIGN1cnJlbnQgZWxlbWVudCB0byBkZXRlcm1pbiBzdHlsZSBcclxuICAgICAgICAvLyAodGhlIGlkZWEgaXMgdGhhdCB3aGVuIHRoZSBhbmltYXRpb24gaXMgY2FuY2VsZWQgaW1lZGlhdGx5IGl0IHNob3VsZG50IFxyXG4gICAgICAgIC8vIGhhdmUgYW55IGltcGFjdCBvbiBkcmF3biBmcmFtZXMpXHJcbiAgICAgICAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZ2V0LXN0eWxlLWF0LXByb2dyZXNzLWVsZW1lbnQtd3JhcHBlclwiKTtcclxuICAgICAgICB3cmFwcGVyLmNzcyh7IGRpc3BsYXk6IFwiYmxvY2tcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwdmhcIiwgdHJhbnNsYXRlWTogXCItOTk5OTk5OTk5dmhcIiB9KTtcclxuICAgICAgICBsZXQgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJnZXQtc3R5bGUtYXQtcHJvZ3Jlc3MtZWxlbWVudFwiKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwZCh3cmFwcGVyLmFwZChlbGVtKSk7XHJcbiAgICAgICAgcmV0dXJuIHNldHVwQmFja2dyb3VuZFRhc2soZ2V0U3R5bGVBdFByb2dyZXNzKTtcclxuICAgICAgICBmdW5jdGlvbiBnZXRTdHlsZUF0UHJvZ3Jlc3MoZnJhbWVzLCBpbnRyZXN0KSB7XHJcbiAgICAgICAgICAgIGxldCB7IGtleXMgfSA9IGludHJlc3Q7XHJcbiAgICAgICAgICAgIGxldCB0cmFuc2Zvcm1LZXlzID0gW107XHJcbiAgICAgICAgICAgIGtleXMuZWEoKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChUcmFuc2Zvcm1Qcm9wLmFwcGxpZXMoZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1LZXlzLmFkZChlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGtleXMucm1WKC4uLnRyYW5zZm9ybUtleXMpO1xyXG4gICAgICAgICAgICBmcmFtZXMuZWEoKGZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmb3JtYXRDc3MoZnJhbWUsIHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbGV0IGFuaW1hdGlvbiA9IGVsZW0uYW5pbWF0ZShmcmFtZXMsIHtcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAsXHJcbiAgICAgICAgICAgICAgICBmaWxsOiBcImJvdGhcIixcclxuICAgICAgICAgICAgICAgIGVhc2luZzogXCJsaW5lYXJcIixcclxuICAgICAgICAgICAgICAgIGl0ZXJhdGlvbnM6IDEsXHJcbiAgICAgICAgICAgICAgICBpdGVyYXRpb25TdGFydDogcHJvZ3Jlc3NUb1NhdmVQcm9ncmVzcyhpbnRyZXN0LmF0KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbGV0IHJlcyA9IHt9O1xyXG4gICAgICAgICAgICBsZXQgY3MgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW0pO1xyXG4gICAgICAgICAgICBpZiAoIXRyYW5zZm9ybUtleXMuZW1wdHkpIHtcclxuICAgICAgICAgICAgICAgIGxldCB0ID0gbmV3IFRyYW5zZm9ybVByb3AoKTtcclxuICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgdC50cmFuc2Zvcm0gPSBjcy50cmFuc2Zvcm07XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1LZXlzLmVhKChrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNba2V5XSA9IHQucHJpbWl0aXZlc1trZXldO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgayBvZiBrZXlzKSB7XHJcbiAgICAgICAgICAgICAgICByZXNba10gPSBjc1trXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhbmltYXRpb24uY2FuY2VsKCk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgfVxyXG4gICAgfSkoKTtcclxufVxyXG4vL2V4dGVuZCBOb2RlTHMgYXBpIHdpdGggbmF0aXZlIEVsZW1lbnQgZnVuY3Rpb25zIGxpa2UgcmVtb3ZlKClcclxuZXhwb3J0IGNsYXNzIE5vZGVMcyBleHRlbmRzIEFycmF5IHtcclxuICAgIGNvbnN0cnVjdG9yKC4uLmEpIHtcclxuICAgICAgICBzdXBlciguLi5hKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBmcmFtZV9mcmFtZXMgZnJhbWUgLyBmcmFtZXMgdG8gYmUgYW5pbWF0ZWQgdG9cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIGFkZGl0aW9uYWwgb3B0aW9ucyAvIGR1cmF0aW9uXHJcbiAgICAgKiBAcGFyYW0gZ3VpZGVkIFdoZW4gb21taXRlZCwgYW5pbWF0aW9uIHBsYXlzIGluc3RhbnRseSB0aHJvdWdoIGEgbGluZWFyIHJlYWxUaW1lIFRpbWVsaW5lIChub3JtYWxseSkuIFdoZW4gZ2l2ZW4sIGFuaW1hdGlvbiBjYW4gYmUgYmUgY29udHJvbGxlZCBieSBzZXR0aW5nIGd1aWRhbmNlIHRvIHZhbHVlcyBiZXR3ZWVuIChpbiBvcHRpb25zKSBnaXZlbiBzdGFydCAoZGVmYXVsdDogMCkgYW5kIGVuZCAoZGVmYXVsdDogMTAwKVxyXG4gICAgICogQHBhcmFtIHN0YWdnZXIgRGVsYXkgYmV0d2VlbiBhbmltYXRpb24gZXhlY3V0aW9ucyBvbiB0aGlzIGVsZW1lbnRzLiBXaGVuIHRydWUgZGVsYXkgaXMgb25lIGFuaW1hdGlvbiBkdXJhdGlvbi4gV2hlbiBmYWxzZSBvciBvbW1pdGVkIG5vIGRlbGF5IGF0IGFsbFxyXG4gICAgICovXHJcbiAgICBhc3luYyBhbmltKGZyYW1lX2ZyYW1lcywgb3B0aW9ucyA9IHt9LCBndWlkYW5jZSwgc3RhZ2dlcikge1xyXG4gICAgICAgIHRoaXMud2FybihcImFuaW1cIik7XHJcbiAgICAgICAgaWYgKHN0YWdnZXIpIHtcclxuICAgICAgICAgICAgbGV0IGF3YWl0Rm9yQW5pbWF0aW9uRHVyYXRpb24gPSBzdGFnZ2VyID09PSB0cnVlO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBlIG9mIHRoaXMpIHtcclxuICAgICAgICAgICAgICAgIGxldCBhbmltID0gZS5hbmltKGZyYW1lX2ZyYW1lcywgb3B0aW9ucywgZ3VpZGFuY2UpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGF3YWl0Rm9yQW5pbWF0aW9uRHVyYXRpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgYW5pbTtcclxuICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGRlbGF5KHN0YWdnZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgbHMgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgZSBvZiB0aGlzKSB7XHJcbiAgICAgICAgICAgICAgICBscy5hZGQoZS5hbmltKGZyYW1lX2ZyYW1lcywgb3B0aW9ucywgZ3VpZGFuY2UpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChscyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb24odHlwZSwgbGlzdGVuZXIpIHtcclxuICAgICAgICB0aGlzLmV4ZWMoXCJvblwiLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgc2hvdygpIHtcclxuICAgICAgICB0aGlzLmV4ZWMoXCJzaG93XCIsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHtcclxuICAgICAgICB0aGlzLmV4ZWMoXCJyZW1vdmVDbGFzc1wiLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgYXBkKC4uLmVsZW1zKSB7XHJcbiAgICAgICAgdGhpcy5leGVjKFwiYXBkXCIsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBlbXB0eU5vZGVzKCkge1xyXG4gICAgICAgIHRoaXMuZXhlYyhcImVtcHR5XCIsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBoaWRlKCkge1xyXG4gICAgICAgIHRoaXMuZXhlYyhcImhpZGVcIiwgYXJndW1lbnRzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGNzcyhrZXlfY3NzLCB2YWwpIHtcclxuICAgICAgICB0aGlzLmV4ZWMoXCJjc3NcIiwgYXJndW1lbnRzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGNoaWxkcyhzZWxlY3RvciA9IDEpIHtcclxuICAgICAgICBsZXQgbHMgPSBuZXcgTm9kZUxzKCk7XHJcbiAgICAgICAgdGhpcy5lYSgoZSkgPT4ge1xyXG4gICAgICAgICAgICBscy5hZGQoLi4uZS5jaGlsZHMoc2VsZWN0b3IpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbHM7XHJcbiAgICB9XHJcbiAgICBhZGRDbGFzcyguLi5jbGFzc05hbWVzKSB7XHJcbiAgICAgICAgdGhpcy5leGVjKFwiYWRkQ2xhc3NcIiwgYXJndW1lbnRzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGhhc0NsYXNzKC4uLmNsYXNzTmFtZXMpIHtcclxuICAgICAgICBsZXQgaGFzID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmVhKChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghZS5oYXNDbGFzcyguLi5jbGFzc05hbWVzKSlcclxuICAgICAgICAgICAgICAgIGhhcyA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBoYXM7XHJcbiAgICB9XHJcbiAgICB0b2dnbGVDbGFzcyguLi5jbGFzc05hbWVzKSB7XHJcbiAgICAgICAgdGhpcy5leGVjKFwidG9nZ2xlQ2xhc3NcIiwgYXJndW1lbnRzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIG9mZih0eXBlLCBsaXN0ZW5lcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmV4ZWMoXCJvZmZcIiwgYXJndW1lbnRzKTtcclxuICAgIH1cclxuICAgIC8vIE5hdGl2ZSBtZXRob2RzXHJcbiAgICBzY3JvbGwoeENvb3JkX29wdGlvbnMsIHlDb29yZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmV4ZWMoXCJvZmZcIiwgYXJndW1lbnRzKTtcclxuICAgIH1cclxuICAgIHNjcm9sbEJ5KHhDb29yZF9vcHRpb25zLCB5Q29vcmQpIHtcclxuICAgIH1cclxuICAgIHNldCBodG1sKHRvKSB7XHJcbiAgICAgICAgdGhpcy5lYSgoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLmh0bWwgPSB0bztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGdldCBodG1sKCkge1xyXG4gICAgICAgIGxldCBzID0gXCJcIjtcclxuICAgICAgICB0aGlzLmVhKChlKSA9PiB7XHJcbiAgICAgICAgICAgIHMgKz0gZS5odG1sO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBzO1xyXG4gICAgfVxyXG4gICAgc2V0IGlubmVyKHRvKSB7XHJcbiAgICAgICAgdGhpcy5lYSgoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLmlubmVyID0gdG87XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB3YXJuKGNtZCkge1xyXG4gICAgICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiVHJ5aW5nIHRvIGV4ZWN1dGUgY29tbWFuZCBcXFwiXCIgKyBjbWQgKyBcIlxcXCIgb24gZW1wdHkgTm9kZUxzLlwiKTtcclxuICAgIH1cclxuICAgIGV4ZWMoZnVuY3Rpb25OYW1lLCBhcmdzKSB7XHJcbiAgICAgICAgdGhpcy53YXJuKGZ1bmN0aW9uTmFtZSk7XHJcbiAgICAgICAgdGhpcy5lYSgoZSkgPT4ge1xyXG4gICAgICAgICAgICBlW2Z1bmN0aW9uTmFtZV0oLi4uYXJncyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFRlbCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihub2RlcywgZXZlbnQsIGxpc3RlbmVyLCBlbmFibGUgPSB0cnVlKSB7XHJcbiAgICAgICAgdGhpcy5fZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucCA9IG5ldyBOZWwodW5kZWZpbmVkLCBldmVudCwgbGlzdGVuZXIpO1xyXG4gICAgICAgIC8vIFdlIGxsIG9ubHkgdXNlIG1ldGhvZHMgaGVyZSB0aGF0IGFyZSBhdmFsYWJsZSB0byBFdmVudFRhcmdldHMgaGVyZSAob24sIG9mZilcclxuICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICBpZiAobm9kZXMgaW5zdGFuY2VvZiBBcnJheSlcclxuICAgICAgICAgICAgdGhpcy5wLm5vZGVzID0gbmV3IE5vZGVMcyguLi5ub2Rlcyk7XHJcbiAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLnAubm9kZXMgPSBuZXcgTm9kZUxzKG5vZGVzKTtcclxuICAgICAgICBpZiAoZW5hYmxlKVxyXG4gICAgICAgICAgICB0aGlzLmVuYWJsZSgpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGV2ZW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnAuZXZlbnQ7XHJcbiAgICB9XHJcbiAgICBnZXQgbGlzdGVuZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucC5saXN0ZW5lcjtcclxuICAgIH1cclxuICAgIHNldE5vZGUoLi4ubm9kZSkge1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZSgpO1xyXG4gICAgICAgIHRoaXMucC5ub2RlcyA9IG5ldyBOb2RlTHMoLi4ubm9kZSk7XHJcbiAgICAgICAgdGhpcy5lbmFibGUoKTtcclxuICAgIH1cclxuICAgIHNldCBldmVudChldmVudCkge1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZSgpO1xyXG4gICAgICAgIHRoaXMucC5ldmVudCA9IGV2ZW50O1xyXG4gICAgICAgIHRoaXMuZW5hYmxlKCk7XHJcbiAgICB9XHJcbiAgICBzZXQgbGlzdGVuZXIobGlzdGVuZXIpIHtcclxuICAgICAgICB0aGlzLmRpc2FibGUoKTtcclxuICAgICAgICB0aGlzLnAubGlzdGVuZXIgPSBsaXN0ZW5lcjtcclxuICAgICAgICB0aGlzLmVuYWJsZSgpO1xyXG4gICAgfVxyXG4gICAgc2V0IGVuYWJsZWQodG8pIHtcclxuICAgICAgICBpZiAodG8pIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2VuYWJsZWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIHRoaXMucC5ub2Rlcy5vbih0aGlzLmV2ZW50LCB0aGlzLmxpc3RlbmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fZW5hYmxlZClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgdGhpcy5wLm5vZGVzLm9mZih0aGlzLmV2ZW50LCB0aGlzLmxpc3RlbmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZW5hYmxlZCA9IHRvO1xyXG4gICAgfVxyXG4gICAgZ2V0IGVuYWJsZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VuYWJsZWQ7XHJcbiAgICB9XHJcbiAgICBlbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGRpc2FibGUoKSB7XHJcbiAgICAgICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXBhdGNoKCkge1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZSgpO1xyXG4gICAgICAgIHRoaXMuZW5hYmxlKCk7XHJcbiAgICB9XHJcbn1cclxuY2xhc3MgTmVsIHtcclxuICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgY29uc3RydWN0b3Iobm9kZXMsIGV2ZW50LCBsaXN0ZW5lcikge1xyXG4gICAgICAgIHRoaXMubm9kZXMgPSBub2RlcztcclxuICAgICAgICB0aGlzLmV2ZW50ID0gZXZlbnQ7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5lciA9IGxpc3RlbmVyO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGNsb25lRGF0YShhKSB7XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShhKSk7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEVhc2luZyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih4MV9rZXl3b3JkLCB5MSwgeDIsIHkyKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB4MV9rZXl3b3JkICE9PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMua2V5d29yZCA9IHgxX2tleXdvcmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLngxID0geDFfa2V5d29yZDtcclxuICAgICAgICAgICAgdGhpcy55MSA9IHkxO1xyXG4gICAgICAgICAgICB0aGlzLngyID0geDI7XHJcbiAgICAgICAgICAgIHRoaXMueTIgPSB5MjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQgc3RyaW5nKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmtleXdvcmQgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuIFwiY3ViaWMtYmV6aWVyKFwiICsgdGhpcy54MSArIFwiLFwiICsgdGhpcy55MSArIFwiLFwiICsgdGhpcy54MiArIFwiLFwiICsgdGhpcy55MiArIFwiKVwiO1xyXG4gICAgICAgIHJldHVybiBjYW1lbENhc2VUb0Rhc2godGhpcy5rZXl3b3JkKTtcclxuICAgIH1cclxuICAgIGdldCBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAodGhpcy5rZXl3b3JkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbGV0IGYgPSBFYXNpbmcua2V5d29yZHNbZGFzaFRvQ2FtZWxDYXNlKHRoaXMua2V5d29yZCldO1xyXG4gICAgICAgICAgICB0aGlzLngxID0gZlswXTtcclxuICAgICAgICAgICAgdGhpcy55MSA9IGZbMV07XHJcbiAgICAgICAgICAgIHRoaXMueDIgPSBmWzJdO1xyXG4gICAgICAgICAgICB0aGlzLnkyID0gZlszXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJheih0aGlzLngxLCB0aGlzLnkxLCB0aGlzLngyLCB0aGlzLnkyKTtcclxuICAgIH1cclxufVxyXG5FYXNpbmcua2V5d29yZHMgPSB7XHJcbiAgICBsaW5lYXI6IFsuMjUsIC4yNSwgLjc1LCAuNzVdLFxyXG4gICAgZWFzZTogWy4yNSwgLjEsIC4yNSwgMV0sXHJcbiAgICBlYXNlSW46IFsuNDIsIDAsIDEsIDFdLFxyXG4gICAgZWFzZU91dDogWzAsIDAsIC41OCwgMV0sXHJcbiAgICBlYXNlSW5PdXQ6IFsuNDIsIDAsIC41OCwgMV1cclxufTtcclxuIiwiLyoqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmdcbiAqIEJlemllckVhc2luZyAtIHVzZSBiZXppZXIgY3VydmUgZm9yIHRyYW5zaXRpb24gZWFzaW5nIGZ1bmN0aW9uXG4gKiBieSBHYcOrdGFuIFJlbmF1ZGVhdSAyMDE0IC0gMjAxNSDigJMgTUlUIExpY2Vuc2VcbiAqL1xuXG4vLyBUaGVzZSB2YWx1ZXMgYXJlIGVzdGFibGlzaGVkIGJ5IGVtcGlyaWNpc20gd2l0aCB0ZXN0cyAodHJhZGVvZmY6IHBlcmZvcm1hbmNlIFZTIHByZWNpc2lvbilcbnZhciBORVdUT05fSVRFUkFUSU9OUyA9IDQ7XG52YXIgTkVXVE9OX01JTl9TTE9QRSA9IDAuMDAxO1xudmFyIFNVQkRJVklTSU9OX1BSRUNJU0lPTiA9IDAuMDAwMDAwMTtcbnZhciBTVUJESVZJU0lPTl9NQVhfSVRFUkFUSU9OUyA9IDEwO1xuXG52YXIga1NwbGluZVRhYmxlU2l6ZSA9IDExO1xudmFyIGtTYW1wbGVTdGVwU2l6ZSA9IDEuMCAvIChrU3BsaW5lVGFibGVTaXplIC0gMS4wKTtcblxudmFyIGZsb2F0MzJBcnJheVN1cHBvcnRlZCA9IHR5cGVvZiBGbG9hdDMyQXJyYXkgPT09ICdmdW5jdGlvbic7XG5cbmZ1bmN0aW9uIEEgKGFBMSwgYUEyKSB7IHJldHVybiAxLjAgLSAzLjAgKiBhQTIgKyAzLjAgKiBhQTE7IH1cbmZ1bmN0aW9uIEIgKGFBMSwgYUEyKSB7IHJldHVybiAzLjAgKiBhQTIgLSA2LjAgKiBhQTE7IH1cbmZ1bmN0aW9uIEMgKGFBMSkgICAgICB7IHJldHVybiAzLjAgKiBhQTE7IH1cblxuLy8gUmV0dXJucyB4KHQpIGdpdmVuIHQsIHgxLCBhbmQgeDIsIG9yIHkodCkgZ2l2ZW4gdCwgeTEsIGFuZCB5Mi5cbmZ1bmN0aW9uIGNhbGNCZXppZXIgKGFULCBhQTEsIGFBMikgeyByZXR1cm4gKChBKGFBMSwgYUEyKSAqIGFUICsgQihhQTEsIGFBMikpICogYVQgKyBDKGFBMSkpICogYVQ7IH1cblxuLy8gUmV0dXJucyBkeC9kdCBnaXZlbiB0LCB4MSwgYW5kIHgyLCBvciBkeS9kdCBnaXZlbiB0LCB5MSwgYW5kIHkyLlxuZnVuY3Rpb24gZ2V0U2xvcGUgKGFULCBhQTEsIGFBMikgeyByZXR1cm4gMy4wICogQShhQTEsIGFBMikgKiBhVCAqIGFUICsgMi4wICogQihhQTEsIGFBMikgKiBhVCArIEMoYUExKTsgfVxuXG5mdW5jdGlvbiBiaW5hcnlTdWJkaXZpZGUgKGFYLCBhQSwgYUIsIG1YMSwgbVgyKSB7XG4gIHZhciBjdXJyZW50WCwgY3VycmVudFQsIGkgPSAwO1xuICBkbyB7XG4gICAgY3VycmVudFQgPSBhQSArIChhQiAtIGFBKSAvIDIuMDtcbiAgICBjdXJyZW50WCA9IGNhbGNCZXppZXIoY3VycmVudFQsIG1YMSwgbVgyKSAtIGFYO1xuICAgIGlmIChjdXJyZW50WCA+IDAuMCkge1xuICAgICAgYUIgPSBjdXJyZW50VDtcbiAgICB9IGVsc2Uge1xuICAgICAgYUEgPSBjdXJyZW50VDtcbiAgICB9XG4gIH0gd2hpbGUgKE1hdGguYWJzKGN1cnJlbnRYKSA+IFNVQkRJVklTSU9OX1BSRUNJU0lPTiAmJiArK2kgPCBTVUJESVZJU0lPTl9NQVhfSVRFUkFUSU9OUyk7XG4gIHJldHVybiBjdXJyZW50VDtcbn1cblxuZnVuY3Rpb24gbmV3dG9uUmFwaHNvbkl0ZXJhdGUgKGFYLCBhR3Vlc3NULCBtWDEsIG1YMikge1xuIGZvciAodmFyIGkgPSAwOyBpIDwgTkVXVE9OX0lURVJBVElPTlM7ICsraSkge1xuICAgdmFyIGN1cnJlbnRTbG9wZSA9IGdldFNsb3BlKGFHdWVzc1QsIG1YMSwgbVgyKTtcbiAgIGlmIChjdXJyZW50U2xvcGUgPT09IDAuMCkge1xuICAgICByZXR1cm4gYUd1ZXNzVDtcbiAgIH1cbiAgIHZhciBjdXJyZW50WCA9IGNhbGNCZXppZXIoYUd1ZXNzVCwgbVgxLCBtWDIpIC0gYVg7XG4gICBhR3Vlc3NUIC09IGN1cnJlbnRYIC8gY3VycmVudFNsb3BlO1xuIH1cbiByZXR1cm4gYUd1ZXNzVDtcbn1cblxuZnVuY3Rpb24gTGluZWFyRWFzaW5nICh4KSB7XG4gIHJldHVybiB4O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJlemllciAobVgxLCBtWTEsIG1YMiwgbVkyKSB7XG4gIGlmICghKDAgPD0gbVgxICYmIG1YMSA8PSAxICYmIDAgPD0gbVgyICYmIG1YMiA8PSAxKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignYmV6aWVyIHggdmFsdWVzIG11c3QgYmUgaW4gWzAsIDFdIHJhbmdlJyk7XG4gIH1cblxuICBpZiAobVgxID09PSBtWTEgJiYgbVgyID09PSBtWTIpIHtcbiAgICByZXR1cm4gTGluZWFyRWFzaW5nO1xuICB9XG5cbiAgLy8gUHJlY29tcHV0ZSBzYW1wbGVzIHRhYmxlXG4gIHZhciBzYW1wbGVWYWx1ZXMgPSBmbG9hdDMyQXJyYXlTdXBwb3J0ZWQgPyBuZXcgRmxvYXQzMkFycmF5KGtTcGxpbmVUYWJsZVNpemUpIDogbmV3IEFycmF5KGtTcGxpbmVUYWJsZVNpemUpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtTcGxpbmVUYWJsZVNpemU7ICsraSkge1xuICAgIHNhbXBsZVZhbHVlc1tpXSA9IGNhbGNCZXppZXIoaSAqIGtTYW1wbGVTdGVwU2l6ZSwgbVgxLCBtWDIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0VEZvclggKGFYKSB7XG4gICAgdmFyIGludGVydmFsU3RhcnQgPSAwLjA7XG4gICAgdmFyIGN1cnJlbnRTYW1wbGUgPSAxO1xuICAgIHZhciBsYXN0U2FtcGxlID0ga1NwbGluZVRhYmxlU2l6ZSAtIDE7XG5cbiAgICBmb3IgKDsgY3VycmVudFNhbXBsZSAhPT0gbGFzdFNhbXBsZSAmJiBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0gPD0gYVg7ICsrY3VycmVudFNhbXBsZSkge1xuICAgICAgaW50ZXJ2YWxTdGFydCArPSBrU2FtcGxlU3RlcFNpemU7XG4gICAgfVxuICAgIC0tY3VycmVudFNhbXBsZTtcblxuICAgIC8vIEludGVycG9sYXRlIHRvIHByb3ZpZGUgYW4gaW5pdGlhbCBndWVzcyBmb3IgdFxuICAgIHZhciBkaXN0ID0gKGFYIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKSAvIChzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZSArIDFdIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKTtcbiAgICB2YXIgZ3Vlc3NGb3JUID0gaW50ZXJ2YWxTdGFydCArIGRpc3QgKiBrU2FtcGxlU3RlcFNpemU7XG5cbiAgICB2YXIgaW5pdGlhbFNsb3BlID0gZ2V0U2xvcGUoZ3Vlc3NGb3JULCBtWDEsIG1YMik7XG4gICAgaWYgKGluaXRpYWxTbG9wZSA+PSBORVdUT05fTUlOX1NMT1BFKSB7XG4gICAgICByZXR1cm4gbmV3dG9uUmFwaHNvbkl0ZXJhdGUoYVgsIGd1ZXNzRm9yVCwgbVgxLCBtWDIpO1xuICAgIH0gZWxzZSBpZiAoaW5pdGlhbFNsb3BlID09PSAwLjApIHtcbiAgICAgIHJldHVybiBndWVzc0ZvclQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBiaW5hcnlTdWJkaXZpZGUoYVgsIGludGVydmFsU3RhcnQsIGludGVydmFsU3RhcnQgKyBrU2FtcGxlU3RlcFNpemUsIG1YMSwgbVgyKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gQmV6aWVyRWFzaW5nICh4KSB7XG4gICAgLy8gQmVjYXVzZSBKYXZhU2NyaXB0IG51bWJlciBhcmUgaW1wcmVjaXNlLCB3ZSBzaG91bGQgZ3VhcmFudGVlIHRoZSBleHRyZW1lcyBhcmUgcmlnaHQuXG4gICAgaWYgKHggPT09IDApIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBpZiAoeCA9PT0gMSkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIHJldHVybiBjYWxjQmV6aWVyKGdldFRGb3JYKHgpLCBtWTEsIG1ZMik7XG4gIH07XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZnVuY3Rpb24gY2FtZWxDYXNlVG9EYXNoKGNhbWVsQ2FzZVN0cmluZywgam9pbldpdGggPSBcIi1cIikge1xyXG4gICAgcmV0dXJuIGNhbWVsQ2FzZVN0cmluZy5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLCBcIiQxXCIgKyBqb2luV2l0aCArIFwiJDJcIikudG9Mb3dlckNhc2UoKTtcclxufVxyXG5leHBvcnRzLmNhbWVsQ2FzZVRvRGFzaCA9IGNhbWVsQ2FzZVRvRGFzaDtcclxuZnVuY3Rpb24gdG9VcHBlcihtYXRjaCwgZ3JvdXAxKSB7XHJcbiAgICByZXR1cm4gZ3JvdXAxID8gZ3JvdXAxLnRvVXBwZXJDYXNlKCkgOiAnJztcclxufVxyXG52YXIgREVGQVVMVF9SRUdFWCA9IC9bLV9dKyguKT8vZztcclxuZnVuY3Rpb24gZGFzaFRvQ2FtZWxDYXNlKGRhc2hTdHJpbmcsIHNwbGl0QXQpIHtcclxuICAgIHJldHVybiBkYXNoU3RyaW5nLnJlcGxhY2Uoc3BsaXRBdCA/IG5ldyBSZWdFeHAoJ1snICsgc3BsaXRBdCArICddKyguKScsICdnJykgOiBERUZBVUxUX1JFR0VYLCB0b1VwcGVyKTtcclxufVxyXG5leHBvcnRzLmRhc2hUb0NhbWVsQ2FzZSA9IGRhc2hUb0NhbWVsQ2FzZTtcclxuIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZGVjb21wb3NlRE9NTWF0cml4XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImRlY29tcG9zZURPTU1hdHJpeFwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbi8qKioqKiovIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4vKioqKioqLyBcdFx0cmV0dXJuIG5zO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZGVjb21wb3NlRG9tbWF0cml4Lm1qc1wiKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKHtcblxuLyoqKi8gXCIuL2RlY29tcG9zZURvbW1hdHJpeC5tanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vZGVjb21wb3NlRG9tbWF0cml4Lm1qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogZGVmYXVsdCAqL1xuLyoqKi8gKGZ1bmN0aW9uKF9fd2VicGFja19tb2R1bGVfXywgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbmV2YWwoXCJfX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XFxuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcXFwiZGVmYXVsdFxcXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gZGVjb21wb3NlRE9NTWF0cml4OyB9KTtcXG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2RlY29tcG9zZU1hdHJpeF9tanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vZGVjb21wb3NlTWF0cml4Lm1qcyAqLyBcXFwiLi9kZWNvbXBvc2VNYXRyaXgubWpzXFxcIik7XFxuLypcXG5cXG5ET01NYXRyaXggaXMgY29sdW1uIG1ham9yLCBtZWFuaW5nOlxcbiBfICAgICAgICAgICAgICAgX1xcbnwgbTExIG0yMSBtMzEgbTQxIHwgIFxcbiAgbTEyIG0yMiBtMzIgbTQyXFxuICBtMTMgbTIzIG0zMyBtNDNcXG4gIG0xNCBtMjQgbTM0IG00NFxcbnxfICAgICAgICAgICAgICAgX3xcXG5cXG4qL1xcblxcblxcblxcbmZ1bmN0aW9uIGRlY29tcG9zZURPTU1hdHJpeChkb21NYXRyaXgpIHtcXG5cXHRjb25zdCBpbmRleGFibGVWZXJzaW9uT2ZNYXRyaXggPSBuZXcgQXJyYXkoNCk7XFxuXFx0Zm9yIChsZXQgY29sdW1uSW5kZXggPSAxOyBjb2x1bW5JbmRleCA8IDU7IGNvbHVtbkluZGV4KyspIHtcXG5cXHRcXHRjb25zdCBjb2x1bW5BcnJheSA9IGluZGV4YWJsZVZlcnNpb25PZk1hdHJpeFtjb2x1bW5JbmRleCAtIDFdID0gbmV3IEFycmF5KDQpO1xcblxcdFxcdGZvciAobGV0IHJvd0luZGV4ID0gMTsgcm93SW5kZXggPCA1OyByb3dJbmRleCsrKSB7XFxuXFx0XFx0XFx0Y29sdW1uQXJyYXlbcm93SW5kZXggLSAxXSA9IGRvbU1hdHJpeFtgbSR7Y29sdW1uSW5kZXh9JHtyb3dJbmRleH1gXTtcXG5cXHRcXHR9XFxuXFx0fVxcblxcblxcdHJldHVybiBPYmplY3QoX2RlY29tcG9zZU1hdHJpeF9tanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcXFwiZGVmYXVsdFxcXCJdKShpbmRleGFibGVWZXJzaW9uT2ZNYXRyaXgpO1xcbn1cXG5cXG4vLyMgc291cmNlVVJMPXdlYnBhY2s6Ly9kZWNvbXBvc2VET01NYXRyaXgvLi9kZWNvbXBvc2VEb21tYXRyaXgubWpzP1wiKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9kZWNvbXBvc2VNYXRyaXgubWpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL2RlY29tcG9zZU1hdHJpeC5tanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihfX3dlYnBhY2tfbW9kdWxlX18sIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5ldmFsKFwiX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXFxcImRlZmF1bHRcXFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIGRlY29tcG9zZU1hdHJpeDsgfSk7XFxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF92ZWN0b3JGdW5jdGlvbnNfbWpzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3ZlY3RvckZ1bmN0aW9ucy5tanMgKi8gXFxcIi4vdmVjdG9yRnVuY3Rpb25zLm1qc1xcXCIpO1xcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfcm91bmRUb1RocmVlUGxhY2VzX21qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9yb3VuZFRvVGhyZWVQbGFjZXMubWpzICovIFxcXCIuL3JvdW5kVG9UaHJlZVBsYWNlcy5tanNcXFwiKTtcXG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3F1YXRlcm5pb25Ub0RlZ3JlZXNYWVpfbWpzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3F1YXRlcm5pb25Ub0RlZ3JlZXNYWVoubWpzICovIFxcXCIuL3F1YXRlcm5pb25Ub0RlZ3JlZXNYWVoubWpzXFxcIik7XFxuLypcXG5cXG50aGlzIGNvZGUgaXMgY29waWVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0LW5hdGl2ZS9ibG9iL21hc3Rlci9MaWJyYXJpZXMvVXRpbGl0aWVzL01hdHJpeE1hdGguanMjTDU3MiBhbmQgbW9kaWZpZWRcXG5mb3Igc29tZSBjbGFyaXR5IGFuZCBiZWluZyBhYmxlIHRvIHdvcmsgc3RhbmRhbG9uZS4gRXhwZWN0cyB0aGUgbWF0cml4IHRvIGJlIGEgNC1lbGVtZW50IGFycmF5IG9mIDQtZWxlbWVudCBhcnJheXMgb2YgbnVtYmVycy5cXG5cXG5bXFxuICAgIFtjb2x1bW4xIHJvdzEgdmFsdWUsIGNvbHVtbjEgcm93MiB2YWx1ZSwgY29sdW1uMSByb3czIHZhbHVlXSxcXG4gICAgW2NvbHVtbjIgcm93MSB2YWx1ZSwgY29sdW1uMiByb3cyIHZhbHVlLCBjb2x1bW4yIHJvdzMgdmFsdWVdLFxcbiAgICBbY29sdW1uMyByb3cxIHZhbHVlLCBjb2x1bW4zIHJvdzIgdmFsdWUsIGNvbHVtbjMgcm93MyB2YWx1ZV0sXFxuICAgIFtjb2x1bW40IHJvdzEgdmFsdWUsIGNvbHVtbjQgcm93MiB2YWx1ZSwgY29sdW1uNCByb3czIHZhbHVlXVxcbl1cXG5cXG4qL1xcblxcblxcblxcblxcblxcbmNvbnN0IFJBRF9UT19ERUcgPSAxODAgLyBNYXRoLlBJO1xcblxcbmZ1bmN0aW9uIGRlY29tcG9zZU1hdHJpeChtYXRyaXgpIHtcXG5cXHRjb25zdCBxdWF0ZXJuaW9uID0gbmV3IEFycmF5KDQpO1xcblxcdGNvbnN0IHNjYWxlID0gbmV3IEFycmF5KDMpO1xcblxcdGNvbnN0IHNrZXcgPSBuZXcgQXJyYXkoMyk7XFxuXFx0Y29uc3QgdHJhbnNsYXRpb24gPSBuZXcgQXJyYXkoMyk7XFxuXFxuXFx0Ly8gdHJhbnNsYXRpb24gaXMgc2ltcGxlXFxuXFx0Ly8gaXQncyB0aGUgZmlyc3QgMyB2YWx1ZXMgaW4gdGhlIGxhc3QgY29sdW1uXFxuXFx0Ly8gaS5lLiBtNDEgaXMgWCB0cmFuc2xhdGlvbiwgbTQyIGlzIFkgYW5kIG00MyBpcyBaXFxuXFx0Zm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcXG5cXHRcXHR0cmFuc2xhdGlvbltpXSA9IG1hdHJpeFszXVtpXTtcXG5cXHR9XFxuXFxuXFx0Ly8gTm93IGdldCBzY2FsZSBhbmQgc2hlYXIuXFxuXFx0Y29uc3Qgbm9ybWFsaXplZENvbHVtbnMgPSBuZXcgQXJyYXkoMyk7XFxuXFx0Zm9yIChsZXQgY29sdW1uSW5kZXggPSAwOyBjb2x1bW5JbmRleCA8IDM7IGNvbHVtbkluZGV4KyspIHtcXG5cXHRcXHRub3JtYWxpemVkQ29sdW1uc1tjb2x1bW5JbmRleF0gPSBtYXRyaXhbY29sdW1uSW5kZXhdLnNsaWNlKDAsIDMpO1xcblxcdH1cXG5cXG5cXHQvLyBDb21wdXRlIFggc2NhbGUgZmFjdG9yIGFuZCBub3JtYWxpemUgZmlyc3Qgcm93LlxcblxcdHNjYWxlWzBdID0gX3ZlY3RvckZ1bmN0aW9uc19tanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcXFwibGVuZ3RoXFxcIl0obm9ybWFsaXplZENvbHVtbnNbMF0pO1xcblxcdG5vcm1hbGl6ZWRDb2x1bW5zWzBdID0gX3ZlY3RvckZ1bmN0aW9uc19tanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcXFwibm9ybWFsaXplXFxcIl0obm9ybWFsaXplZENvbHVtbnNbMF0sIHNjYWxlWzBdKTtcXG5cXG5cXHQvLyBDb21wdXRlIFhZIHNoZWFyIGZhY3RvciBhbmQgbWFrZSAybmQgcm93IG9ydGhvZ29uYWwgdG8gMXN0LlxcblxcdHNrZXdbMF0gPSBfdmVjdG9yRnVuY3Rpb25zX21qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1xcXCJkb3RQcm9kdWN0XFxcIl0obm9ybWFsaXplZENvbHVtbnNbMF0sIG5vcm1hbGl6ZWRDb2x1bW5zWzFdKTtcXG5cXHRub3JtYWxpemVkQ29sdW1uc1sxXSA9IF92ZWN0b3JGdW5jdGlvbnNfbWpzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXFxcImxpbmVhckNvbWJpbmF0aW9uXFxcIl0obm9ybWFsaXplZENvbHVtbnNbMV0sIG5vcm1hbGl6ZWRDb2x1bW5zWzBdLCAxLjAsIC1za2V3WzBdKTtcXG5cXG5cXHQvLyBOb3csIGNvbXB1dGUgWSBzY2FsZSBhbmQgbm9ybWFsaXplIDJuZCByb3cuXFxuXFx0c2NhbGVbMV0gPSBfdmVjdG9yRnVuY3Rpb25zX21qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1xcXCJsZW5ndGhcXFwiXShub3JtYWxpemVkQ29sdW1uc1sxXSk7XFxuXFx0bm9ybWFsaXplZENvbHVtbnNbMV0gPSBfdmVjdG9yRnVuY3Rpb25zX21qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1xcXCJub3JtYWxpemVcXFwiXShub3JtYWxpemVkQ29sdW1uc1sxXSwgc2NhbGVbMV0pO1xcblxcdHNrZXdbMF0gLz0gc2NhbGVbMV07XFxuXFxuXFx0Ly8gQ29tcHV0ZSBYWiBhbmQgWVogc2hlYXJzLCBvcnRob2dvbmFsaXplIDNyZCByb3dcXG5cXHRza2V3WzFdID0gX3ZlY3RvckZ1bmN0aW9uc19tanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcXFwiZG90UHJvZHVjdFxcXCJdKG5vcm1hbGl6ZWRDb2x1bW5zWzBdLCBub3JtYWxpemVkQ29sdW1uc1syXSk7XFxuXFx0bm9ybWFsaXplZENvbHVtbnNbMl0gPSBfdmVjdG9yRnVuY3Rpb25zX21qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1xcXCJsaW5lYXJDb21iaW5hdGlvblxcXCJdKG5vcm1hbGl6ZWRDb2x1bW5zWzJdLCBub3JtYWxpemVkQ29sdW1uc1swXSwgMS4wLCAtc2tld1sxXSk7XFxuXFx0c2tld1syXSA9IF92ZWN0b3JGdW5jdGlvbnNfbWpzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXFxcImRvdFByb2R1Y3RcXFwiXShub3JtYWxpemVkQ29sdW1uc1sxXSwgbm9ybWFsaXplZENvbHVtbnNbMl0pO1xcblxcdG5vcm1hbGl6ZWRDb2x1bW5zWzJdID0gX3ZlY3RvckZ1bmN0aW9uc19tanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcXFwibGluZWFyQ29tYmluYXRpb25cXFwiXShub3JtYWxpemVkQ29sdW1uc1syXSwgbm9ybWFsaXplZENvbHVtbnNbMV0sIDEuMCwgLXNrZXdbMl0pO1xcblxcblxcdC8vIE5leHQsIGdldCBaIHNjYWxlIGFuZCBub3JtYWxpemUgM3JkIHJvdy5cXG5cXHRzY2FsZVsyXSA9IF92ZWN0b3JGdW5jdGlvbnNfbWpzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXFxcImxlbmd0aFxcXCJdKG5vcm1hbGl6ZWRDb2x1bW5zWzJdKTtcXG5cXHRub3JtYWxpemVkQ29sdW1uc1syXSA9IF92ZWN0b3JGdW5jdGlvbnNfbWpzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXFxcIm5vcm1hbGl6ZVxcXCJdKG5vcm1hbGl6ZWRDb2x1bW5zWzJdLCBzY2FsZVsyXSk7XFxuXFx0c2tld1sxXSAvPSBzY2FsZVsyXTtcXG5cXHRza2V3WzJdIC89IHNjYWxlWzJdO1xcblxcblxcdC8vIEF0IHRoaXMgcG9pbnQsIHRoZSBtYXRyaXggZGVmaW5lZCBpbiBub3JtYWxpemVkQ29sdW1ucyBpcyBvcnRob25vcm1hbC5cXG5cXHQvLyBDaGVjayBmb3IgYSBjb29yZGluYXRlIHN5c3RlbSBmbGlwLiAgSWYgdGhlIGRldGVybWluYW50XFxuXFx0Ly8gaXMgLTEsIHRoZW4gbmVnYXRlIHRoZSBtYXRyaXggYW5kIHRoZSBzY2FsaW5nIGZhY3RvcnMuXFxuXFx0Y29uc3QgcGR1bTMgPSBfdmVjdG9yRnVuY3Rpb25zX21qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1xcXCJjcm9zc1Byb2R1Y3RcXFwiXShub3JtYWxpemVkQ29sdW1uc1sxXSwgbm9ybWFsaXplZENvbHVtbnNbMl0pO1xcblxcdGlmIChfdmVjdG9yRnVuY3Rpb25zX21qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1xcXCJkb3RQcm9kdWN0XFxcIl0obm9ybWFsaXplZENvbHVtbnNbMF0sIHBkdW0zKSA8IDApIHtcXG5cXHRcXHRmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xcblxcdFxcdFxcdHNjYWxlW2ldICo9IC0xO1xcblxcdFxcdFxcdG5vcm1hbGl6ZWRDb2x1bW5zW2ldWzBdICo9IC0xO1xcblxcdFxcdFxcdG5vcm1hbGl6ZWRDb2x1bW5zW2ldWzFdICo9IC0xO1xcblxcdFxcdFxcdG5vcm1hbGl6ZWRDb2x1bW5zW2ldWzJdICo9IC0xO1xcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0Ly8gTm93LCBnZXQgdGhlIHJvdGF0aW9ucyBvdXRcXG5cXHRxdWF0ZXJuaW9uWzBdID1cXG5cXHRcXHQwLjUgKiBNYXRoLnNxcnQoTWF0aC5tYXgoMSArIG5vcm1hbGl6ZWRDb2x1bW5zWzBdWzBdIC0gbm9ybWFsaXplZENvbHVtbnNbMV1bMV0gLSBub3JtYWxpemVkQ29sdW1uc1syXVsyXSwgMCkpO1xcblxcdHF1YXRlcm5pb25bMV0gPVxcblxcdFxcdDAuNSAqIE1hdGguc3FydChNYXRoLm1heCgxIC0gbm9ybWFsaXplZENvbHVtbnNbMF1bMF0gKyBub3JtYWxpemVkQ29sdW1uc1sxXVsxXSAtIG5vcm1hbGl6ZWRDb2x1bW5zWzJdWzJdLCAwKSk7XFxuXFx0cXVhdGVybmlvblsyXSA9XFxuXFx0XFx0MC41ICogTWF0aC5zcXJ0KE1hdGgubWF4KDEgLSBub3JtYWxpemVkQ29sdW1uc1swXVswXSAtIG5vcm1hbGl6ZWRDb2x1bW5zWzFdWzFdICsgbm9ybWFsaXplZENvbHVtbnNbMl1bMl0sIDApKTtcXG5cXHRxdWF0ZXJuaW9uWzNdID1cXG5cXHRcXHQwLjUgKiBNYXRoLnNxcnQoTWF0aC5tYXgoMSArIG5vcm1hbGl6ZWRDb2x1bW5zWzBdWzBdICsgbm9ybWFsaXplZENvbHVtbnNbMV1bMV0gKyBub3JtYWxpemVkQ29sdW1uc1syXVsyXSwgMCkpO1xcblxcblxcdGlmIChub3JtYWxpemVkQ29sdW1uc1syXVsxXSA+IG5vcm1hbGl6ZWRDb2x1bW5zWzFdWzJdKSB7XFxuXFx0XFx0cXVhdGVybmlvblswXSA9IC1xdWF0ZXJuaW9uWzBdO1xcblxcdH1cXG5cXHRpZiAobm9ybWFsaXplZENvbHVtbnNbMF1bMl0gPiBub3JtYWxpemVkQ29sdW1uc1syXVswXSkge1xcblxcdFxcdHF1YXRlcm5pb25bMV0gPSAtcXVhdGVybmlvblsxXTtcXG5cXHR9XFxuXFx0aWYgKG5vcm1hbGl6ZWRDb2x1bW5zWzFdWzBdID4gbm9ybWFsaXplZENvbHVtbnNbMF1bMV0pIHtcXG5cXHRcXHRxdWF0ZXJuaW9uWzJdID0gLXF1YXRlcm5pb25bMl07XFxuXFx0fVxcblxcblxcdC8vIGNvcnJlY3QgZm9yIG9jY2FzaW9uYWwsIHdlaXJkIEV1bGVyIHN5bm9ueW1zIGZvciAyZCByb3RhdGlvblxcblxcdGxldCByb3RhdGlvbkRlZ3JlZXM7XFxuXFx0aWYgKFxcblxcdFxcdHF1YXRlcm5pb25bMF0gPCAwLjAwMSAmJlxcblxcdFxcdHF1YXRlcm5pb25bMF0gPj0gMCAmJlxcblxcdFxcdHF1YXRlcm5pb25bMV0gPCAwLjAwMSAmJlxcblxcdFxcdHF1YXRlcm5pb25bMV0gPj0gMFxcblxcdCkge1xcblxcdFxcdC8vIHRoaXMgaXMgYSAyZCByb3RhdGlvbiBvbiB0aGUgei1heGlzXFxuXFx0XFx0cm90YXRpb25EZWdyZWVzID0gW1xcblxcdFxcdFxcdDAsXFxuXFx0XFx0XFx0MCxcXG5cXHRcXHRcXHRPYmplY3QoX3JvdW5kVG9UaHJlZVBsYWNlc19tanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcXFwiZGVmYXVsdFxcXCJdKShcXG5cXHRcXHRcXHRcXHQoTWF0aC5hdGFuMihub3JtYWxpemVkQ29sdW1uc1swXVsxXSwgbm9ybWFsaXplZENvbHVtbnNbMF1bMF0pICogMTgwKSAvIE1hdGguUElcXG5cXHRcXHRcXHQpXFxuXFx0XFx0XTtcXG5cXHR9IGVsc2Uge1xcblxcdFxcdHJvdGF0aW9uRGVncmVlcyA9IE9iamVjdChfcXVhdGVybmlvblRvRGVncmVlc1hZWl9tanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX1tcXFwiZGVmYXVsdFxcXCJdKShxdWF0ZXJuaW9uKTtcXG5cXHR9XFxuXFxuXFx0Ly8gZXhwb3NlIGJvdGggYmFzZSBkYXRhIGFuZCBjb252ZW5pZW5jZSBuYW1lc1xcblxcdHJldHVybiB7XFxuXFx0XFx0cm90YXRlWDogcm90YXRpb25EZWdyZWVzWzBdLFxcblxcdFxcdHJvdGF0ZVk6IHJvdGF0aW9uRGVncmVlc1sxXSxcXG5cXHRcXHRyb3RhdGVaOiByb3RhdGlvbkRlZ3JlZXNbMl0sXFxuXFx0XFx0c2NhbGVYOiBPYmplY3QoX3JvdW5kVG9UaHJlZVBsYWNlc19tanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcXFwiZGVmYXVsdFxcXCJdKShzY2FsZVswXSksXFxuXFx0XFx0c2NhbGVZOiBPYmplY3QoX3JvdW5kVG9UaHJlZVBsYWNlc19tanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcXFwiZGVmYXVsdFxcXCJdKShzY2FsZVsxXSksXFxuXFx0XFx0c2NhbGVaOiBPYmplY3QoX3JvdW5kVG9UaHJlZVBsYWNlc19tanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcXFwiZGVmYXVsdFxcXCJdKShzY2FsZVsyXSksXFxuXFx0XFx0dHJhbnNsYXRlWDogdHJhbnNsYXRpb25bMF0sXFxuXFx0XFx0dHJhbnNsYXRlWTogdHJhbnNsYXRpb25bMV0sXFxuXFx0XFx0dHJhbnNsYXRlWjogdHJhbnNsYXRpb25bMl0sXFxuXFx0XFx0c2tld1hZOiBPYmplY3QoX3JvdW5kVG9UaHJlZVBsYWNlc19tanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcXFwiZGVmYXVsdFxcXCJdKShza2V3WzBdKSAqIFJBRF9UT19ERUcsXFxuXFx0XFx0c2tld1haOiBPYmplY3QoX3JvdW5kVG9UaHJlZVBsYWNlc19tanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcXFwiZGVmYXVsdFxcXCJdKShza2V3WzFdKSAqIFJBRF9UT19ERUcsXFxuXFx0XFx0c2tld1laOiBPYmplY3QoX3JvdW5kVG9UaHJlZVBsYWNlc19tanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcXFwiZGVmYXVsdFxcXCJdKShza2V3WzJdICogUkFEX1RPX0RFRylcXG5cXHR9O1xcbn1cXG5cXG4vLyMgc291cmNlVVJMPXdlYnBhY2s6Ly9kZWNvbXBvc2VET01NYXRyaXgvLi9kZWNvbXBvc2VNYXRyaXgubWpzP1wiKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9xdWF0ZXJuaW9uVG9EZWdyZWVzWFlaLm1qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vcXVhdGVybmlvblRvRGVncmVlc1hZWi5tanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24oX193ZWJwYWNrX21vZHVsZV9fLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuZXZhbChcIl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcXG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFxcXCJkZWZhdWx0XFxcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBxdWF0ZXJuaW9uVG9EZWdyZWVzWFlaOyB9KTtcXG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3JvdW5kVG9UaHJlZVBsYWNlc19tanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vcm91bmRUb1RocmVlUGxhY2VzLm1qcyAqLyBcXFwiLi9yb3VuZFRvVGhyZWVQbGFjZXMubWpzXFxcIik7XFxuLypcXG5cXG4gY29waWVkIGZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC1uYXRpdmUvYmxvYi9tYXN0ZXIvTGlicmFyaWVzL1V0aWxpdGllcy9NYXRyaXhNYXRoLmpzXFxuXFxuKi9cXG5cXG5cXG5cXG5cXG5jb25zdCBSQURfVE9fREVHID0gMTgwIC8gTWF0aC5QSTtcXG5cXG5mdW5jdGlvbiBxdWF0ZXJuaW9uVG9EZWdyZWVzWFlaKHF1YXRlcm5pb24pIHtcXG5cXG5cXHRjb25zdCBbcXgsIHF5LCBxeiwgcXddID0gcXVhdGVybmlvbjtcXG5cXHRjb25zdCBxdzIgPSBxdyAqIHF3O1xcblxcdGNvbnN0IHF4MiA9IHF4ICogcXg7XFxuXFx0Y29uc3QgcXkyID0gcXkgKiBxeTtcXG5cXHRjb25zdCBxejIgPSBxeiAqIHF6O1xcblxcdGNvbnN0IHRlc3QgPSBxeCAqIHF5ICsgcXogKiBxdztcXG5cXHRjb25zdCB1bml0ID0gcXcyICsgcXgyICsgcXkyICsgcXoyO1xcblxcblxcdGlmICh0ZXN0ID4gMC40OTk5OSAqIHVuaXQpIHtcXG5cXHQgIHJldHVybiBbMCwgMiAqIE1hdGguYXRhbjIocXgsIHF3KSAqIFJBRF9UT19ERUcsIDkwXTtcXG5cXHR9XFxuXFx0aWYgKHRlc3QgPCAtMC40OTk5OSAqIHVuaXQpIHtcXG5cXHQgIHJldHVybiBbMCwgLTIgKiBNYXRoLmF0YW4yKHF4LCBxdykgKiBSQURfVE9fREVHLCAtOTBdO1xcblxcdH1cXG5cXG5cXHRyZXR1cm4gW1xcblxcdCAgT2JqZWN0KF9yb3VuZFRvVGhyZWVQbGFjZXNfbWpzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXFxcImRlZmF1bHRcXFwiXSkoXFxuXFx0XFx0TWF0aC5hdGFuMigyICogcXggKiBxdyAtIDIgKiBxeSAqIHF6LCAxIC0gMiAqIHF4MiAtIDIgKiBxejIpICogUkFEX1RPX0RFRyxcXG5cXHQgICksXFxuXFx0ICBPYmplY3QoX3JvdW5kVG9UaHJlZVBsYWNlc19tanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcXFwiZGVmYXVsdFxcXCJdKShcXG5cXHRcXHRNYXRoLmF0YW4yKDIgKiBxeSAqIHF3IC0gMiAqIHF4ICogcXosIDEgLSAyICogcXkyIC0gMiAqIHF6MikgKiBSQURfVE9fREVHLFxcblxcdCAgKSxcXG5cXHQgIE9iamVjdChfcm91bmRUb1RocmVlUGxhY2VzX21qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1xcXCJkZWZhdWx0XFxcIl0pKE1hdGguYXNpbigyICogcXggKiBxeSArIDIgKiBxeiAqIHF3KSAqIFJBRF9UT19ERUcpLFxcblxcdF07XFxuXFxufVxcblxcbi8vIyBzb3VyY2VVUkw9d2VicGFjazovL2RlY29tcG9zZURPTU1hdHJpeC8uL3F1YXRlcm5pb25Ub0RlZ3JlZXNYWVoubWpzP1wiKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9yb3VuZFRvVGhyZWVQbGFjZXMubWpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3JvdW5kVG9UaHJlZVBsYWNlcy5tanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihfX3dlYnBhY2tfbW9kdWxlX18sIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5ldmFsKFwiX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXFxcImRlZmF1bHRcXFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHJvdW5kVG9UaHJlZVBsYWNlczsgfSk7XFxuLypcXG5cXG5mcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC1uYXRpdmUvYmxvYi9tYXN0ZXIvTGlicmFyaWVzL1V0aWxpdGllcy9NYXRyaXhNYXRoLmpzXFxuXFxuKi8gXFxuXFxuZnVuY3Rpb24gcm91bmRUb1RocmVlUGxhY2VzKG51bWJlcil7XFxuICAgIGNvbnN0IGFyciA9IG51bWJlci50b1N0cmluZygpLnNwbGl0KCdlJyk7XFxuICAgIHJldHVybiBNYXRoLnJvdW5kKGFyclswXSArICdlJyArIChhcnJbMV0gPyArYXJyWzFdIC0gMyA6IDMpKSAqIDAuMDAxO1xcbn1cXG5cXG4vLyMgc291cmNlVVJMPXdlYnBhY2s6Ly9kZWNvbXBvc2VET01NYXRyaXgvLi9yb3VuZFRvVGhyZWVQbGFjZXMubWpzP1wiKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi92ZWN0b3JGdW5jdGlvbnMubWpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3ZlY3RvckZ1bmN0aW9ucy5tanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGxlbmd0aCwgbm9ybWFsaXplLCBkb3RQcm9kdWN0LCBjcm9zc1Byb2R1Y3QsIGxpbmVhckNvbWJpbmF0aW9uICovXG4vKioqLyAoZnVuY3Rpb24oX193ZWJwYWNrX21vZHVsZV9fLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuZXZhbChcIl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcXG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFxcXCJsZW5ndGhcXFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIGxlbmd0aDsgfSk7XFxuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcXFwibm9ybWFsaXplXFxcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBub3JtYWxpemU7IH0pO1xcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXFxcImRvdFByb2R1Y3RcXFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIGRvdFByb2R1Y3Q7IH0pO1xcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXFxcImNyb3NzUHJvZHVjdFxcXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gY3Jvc3NQcm9kdWN0OyB9KTtcXG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFxcXCJsaW5lYXJDb21iaW5hdGlvblxcXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gbGluZWFyQ29tYmluYXRpb247IH0pO1xcbi8qXFxuXFxuIGNvcGllZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC1uYXRpdmUvYmxvYi9tYXN0ZXIvTGlicmFyaWVzL1V0aWxpdGllcy9NYXRyaXhNYXRoLmpzI0w1NzJcXG5cXG4gdmVjdG9ycyBhcmUganVzdCBhcnJheXMgb2YgbnVtYmVyc1xcblxcbiovXFxuXFxuZnVuY3Rpb24gbGVuZ3RoKHZlY3Rvcikge1xcbiAgICByZXR1cm4gTWF0aC5zcXJ0KFxcbiAgICAgICAgdmVjdG9yWzBdICogdmVjdG9yWzBdICsgXFxuICAgICAgICB2ZWN0b3JbMV0gKiB2ZWN0b3JbMV0gKyBcXG4gICAgICAgIHZlY3RvclsyXSAqIHZlY3RvclsyXVxcbiAgICApO1xcbn1cXG5cXG5mdW5jdGlvbiBub3JtYWxpemUodmVjdG9yLCBwcmVDb21wdXRlZFZlY3Rvckxlbmd0aCkge1xcbiAgICByZXR1cm4gW1xcbiAgICAgICAgdmVjdG9yWzBdL3ByZUNvbXB1dGVkVmVjdG9yTGVuZ3RoLCBcXG4gICAgICAgIHZlY3RvclsxXS9wcmVDb21wdXRlZFZlY3Rvckxlbmd0aCxcXG4gICAgICAgIHZlY3RvclsyXS9wcmVDb21wdXRlZFZlY3Rvckxlbmd0aFxcbiAgICBdO1xcbn1cXG5cXG5mdW5jdGlvbiBkb3RQcm9kdWN0KHZlY3RvckEsIHZlY3RvckIpIHtcXG4gICAgcmV0dXJuIChcXG4gICAgICAgIHZlY3RvckFbMF0gKiB2ZWN0b3JCWzBdICtcXG4gICAgICAgIHZlY3RvckFbMV0gKiB2ZWN0b3JCWzFdICtcXG4gICAgICAgIHZlY3RvckFbMl0gKiB2ZWN0b3JCWzJdXFxuICAgICk7XFxufVxcblxcbmZ1bmN0aW9uIGNyb3NzUHJvZHVjdCh2ZWN0b3JBLCB2ZWN0b3JCKSB7XFxuICAgIHJldHVybiBbXFxuICAgICAgICB2ZWN0b3JBWzFdICogdmVjdG9yQlsyXSAtIHZlY3RvckFbMl0gKiB2ZWN0b3JCWzFdLFxcbiAgICAgICAgdmVjdG9yQVsyXSAqIHZlY3RvckJbMF0gLSB2ZWN0b3JBWzBdICogdmVjdG9yQlsyXSxcXG4gICAgICAgIHZlY3RvckFbMF0gKiB2ZWN0b3JCWzFdIC0gdmVjdG9yQVsxXSAqIHZlY3RvckJbMF1cXG4gICAgXTtcXG59XFxuXFxuZnVuY3Rpb24gbGluZWFyQ29tYmluYXRpb24odmVjdG9yQSwgdmVjdG9yQiwgYVNjYWxlRmFjdG9yLCBiU2NhbGVGYWN0b3IpIHtcXG4gICAgcmV0dXJuIFtcXG4gICAgICAgIHZlY3RvckFbMF0gKiBhU2NhbGVGYWN0b3IgKyB2ZWN0b3JCWzBdICogYlNjYWxlRmFjdG9yLFxcbiAgICAgICAgdmVjdG9yQVsxXSAqIGFTY2FsZUZhY3RvciArIHZlY3RvckJbMV0gKiBiU2NhbGVGYWN0b3IsXFxuICAgICAgICB2ZWN0b3JBWzJdICogYVNjYWxlRmFjdG9yICsgdmVjdG9yQlsyXSAqIGJTY2FsZUZhY3RvclxcbiAgICBdO1xcbn1cXG5cXG4vLyMgc291cmNlVVJMPXdlYnBhY2s6Ly9kZWNvbXBvc2VET01NYXRyaXgvLi92ZWN0b3JGdW5jdGlvbnMubWpzP1wiKTtcblxuLyoqKi8gfSlcblxuLyoqKioqKi8gfSk7XG59KTsiLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNyZWF0ZUFib3J0RXJyb3IgPSAoKSA9PiB7XG5cdGNvbnN0IGVycm9yID0gbmV3IEVycm9yKCdEZWxheSBhYm9ydGVkJyk7XG5cdGVycm9yLm5hbWUgPSAnQWJvcnRFcnJvcic7XG5cdHJldHVybiBlcnJvcjtcbn07XG5cbmNvbnN0IGNyZWF0ZURlbGF5ID0gKHtjbGVhclRpbWVvdXQ6IGRlZmF1bHRDbGVhciwgc2V0VGltZW91dDogc2V0LCB3aWxsUmVzb2x2ZX0pID0+IChtcywge3ZhbHVlLCBzaWduYWx9ID0ge30pID0+IHtcblx0aWYgKHNpZ25hbCAmJiBzaWduYWwuYWJvcnRlZCkge1xuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChjcmVhdGVBYm9ydEVycm9yKCkpO1xuXHR9XG5cblx0bGV0IHRpbWVvdXRJZDtcblx0bGV0IHNldHRsZTtcblx0bGV0IHJlamVjdEZuO1xuXHRjb25zdCBjbGVhciA9IGRlZmF1bHRDbGVhciB8fCBjbGVhclRpbWVvdXQ7XG5cblx0Y29uc3Qgc2lnbmFsTGlzdGVuZXIgPSAoKSA9PiB7XG5cdFx0Y2xlYXIodGltZW91dElkKTtcblx0XHRyZWplY3RGbihjcmVhdGVBYm9ydEVycm9yKCkpO1xuXHR9O1xuXG5cdGNvbnN0IGNsZWFudXAgPSAoKSA9PiB7XG5cdFx0aWYgKHNpZ25hbCkge1xuXHRcdFx0c2lnbmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Fib3J0Jywgc2lnbmFsTGlzdGVuZXIpO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCBkZWxheVByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0c2V0dGxlID0gKCkgPT4ge1xuXHRcdFx0Y2xlYW51cCgpO1xuXHRcdFx0aWYgKHdpbGxSZXNvbHZlKSB7XG5cdFx0XHRcdHJlc29sdmUodmFsdWUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVqZWN0KHZhbHVlKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0cmVqZWN0Rm4gPSByZWplY3Q7XG5cdFx0dGltZW91dElkID0gKHNldCB8fCBzZXRUaW1lb3V0KShzZXR0bGUsIG1zKTtcblx0fSk7XG5cblx0aWYgKHNpZ25hbCkge1xuXHRcdHNpZ25hbC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsIHNpZ25hbExpc3RlbmVyLCB7b25jZTogdHJ1ZX0pO1xuXHR9XG5cblx0ZGVsYXlQcm9taXNlLmNsZWFyID0gKCkgPT4ge1xuXHRcdGNsZWFyKHRpbWVvdXRJZCk7XG5cdFx0dGltZW91dElkID0gbnVsbDtcblx0XHRjbGVhbnVwKCk7XG5cdFx0c2V0dGxlKCk7XG5cdH07XG5cblx0cmV0dXJuIGRlbGF5UHJvbWlzZTtcbn07XG5cbmNvbnN0IGRlbGF5ID0gY3JlYXRlRGVsYXkoe3dpbGxSZXNvbHZlOiB0cnVlfSk7XG5kZWxheS5yZWplY3QgPSBjcmVhdGVEZWxheSh7d2lsbFJlc29sdmU6IGZhbHNlfSk7XG5kZWxheS5jcmVhdGVXaXRoVGltZXJzID0gKHtjbGVhclRpbWVvdXQsIHNldFRpbWVvdXR9KSA9PiB7XG5cdGNvbnN0IGRlbGF5ID0gY3JlYXRlRGVsYXkoe2NsZWFyVGltZW91dCwgc2V0VGltZW91dCwgd2lsbFJlc29sdmU6IHRydWV9KTtcblx0ZGVsYXkucmVqZWN0ID0gY3JlYXRlRGVsYXkoe2NsZWFyVGltZW91dCwgc2V0VGltZW91dCwgd2lsbFJlc29sdmU6IGZhbHNlfSk7XG5cdHJldHVybiBkZWxheTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZGVsYXk7XG4vLyBUT0RPOiBSZW1vdmUgdGhpcyBmb3IgdGhlIG5leHQgbWFqb3IgcmVsZWFzZVxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGRlbGF5O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbi8vIFRoaXMgZmlsZSBiYXNpY2FsbHkgY29udGFpbnMgYSBvYnNlcnZhYmxlIENsYXNzIChjYWxsZWQgRGF0YSkgYW5kIGFcclxuLy8gRGF0YUJhc2Ugd2hpY2ggY29udGFpbnMgYSBrb21wbGV4IChub3QgcHJpbWl0aXYgdHlwZXMgPSBvYmplY3RzKVxyXG4vLyBtYXAgb2ZmIE9ic2VydmFibGVzIGFzIGlzIG9mdGVuIGdpdmVuIHdoZW4gcmVxdWVzdGluZyBkYXRhIChlLmcuIEpTT04pLlxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmxldCB4cnJheSA9IHJlcXVpcmUoXCJ4cnJheVwiKTtcclxueHJyYXkoKTtcclxuY29uc3QgeyBJbnZhbGlkVmFsdWVFeGNlcHRpb24gfSA9IHhycmF5O1xyXG5jbGFzcyBJbnZhbGlkS2V5IGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgY29uc3RydWN0b3Ioa2V5LCBkYXRhKSB7XHJcbiAgICAgICAgc3VwZXIoXCJJbnZhbGlkIGtleSBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgZm9yIHRoZSBmb2xsb3dpbmcgZGF0YSBzdHJ1Y3R1cmU6XFxuXCIgKyBkYXRhLnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuSW52YWxpZEtleSA9IEludmFsaWRLZXk7XHJcbmNsYXNzIEludmFsaWRDYXN0IGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgY29uc3RydWN0b3IoY2FzdEF0dGVtcHQpIHtcclxuICAgICAgICBzdXBlcihcIkNhbm5vdCBjYXN0IHRvIFwiICsgY2FzdEF0dGVtcHQubmFtZSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5JbnZhbGlkQ2FzdCA9IEludmFsaWRDYXN0O1xyXG4vLyBGb3JtYXRzIGZldGNoZWQgKCA9IHJhdykgZGF0YSBpbnRvIGFuIG5lc3RlZCBEYXRhIGNvbnN0cnVjdC5cclxuZnVuY3Rpb24gZm9ybWF0RGF0YShmZXRjaGVkLCBmb3JtYXRMb2NhdGlvbiwgZGVsZXRlVW5zZWVuVmFscyA9IGZhbHNlKSB7XHJcbiAgICBpZiAoZm9ybWF0TG9jYXRpb24gPT09IHVuZGVmaW5lZClcclxuICAgICAgICBmb3JtYXRMb2NhdGlvbiA9IG5ldyBEYXRhKG5ldyBmZXRjaGVkLmNvbnN0cnVjdG9yKCkpO1xyXG4gICAgbGV0IGxzO1xyXG4gICAgbGV0IHVwZGF0ZWRGb3JtYXRMb2NhdGlvbiA9IGZhbHNlO1xyXG4gICAgaWYgKGRlbGV0ZVVuc2VlblZhbHMpXHJcbiAgICAgICAgbHMgPSBbXTtcclxuICAgIGlmICh0eXBlb2YgZmV0Y2hlZCA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgIGZvciAobGV0IGQgaW4gZmV0Y2hlZCkge1xyXG4gICAgICAgICAgICBpZiAoIWZldGNoZWQuaGFzT3duUHJvcGVydHkoZCkpXHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgaWYgKGRlbGV0ZVVuc2VlblZhbHMpXHJcbiAgICAgICAgICAgICAgICBscy5hZGQoZCk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZmV0Y2hlZFtkXSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZvcm1hdExvY2F0aW9uLnZhbFtkXSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdExvY2F0aW9uLnZhbFtkXSA9IG5ldyBEYXRhKG5ldyBmZXRjaGVkW2RdLmNvbnN0cnVjdG9yKCkpO1xyXG4gICAgICAgICAgICAgICAgZm9ybWF0RGF0YShmZXRjaGVkW2RdLCBmb3JtYXRMb2NhdGlvbi52YWxbZF0sIGRlbGV0ZVVuc2VlblZhbHMpO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlZEZvcm1hdExvY2F0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChmb3JtYXRMb2NhdGlvbi52YWxbZF0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgZm9ybWF0TG9jYXRpb24udmFsW2RdID0gbmV3IERhdGEoZmV0Y2hlZFtkXSk7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVkRm9ybWF0TG9jYXRpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGZvcm1hdExvY2F0aW9uLnZhbFtkXSBpbnN0YW5jZW9mIERhdGEpXHJcbiAgICAgICAgICAgICAgICBmb3JtYXRMb2NhdGlvbi52YWxbZF0udmFsID0gZmV0Y2hlZFtkXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRlbGV0ZVVuc2VlblZhbHMpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgZCBpbiBmb3JtYXRMb2NhdGlvbi52YWwpIHtcclxuICAgICAgICAgICAgICAgIGlmICghZm9ybWF0TG9jYXRpb24udmFsLmhhc093blByb3BlcnR5KGQpKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFscy5pbmNsdWRlcyhkKSlcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZm9ybWF0TG9jYXRpb24udmFsIGluc3RhbmNlb2YgQXJyYXkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdExvY2F0aW9uLnZhbC5yZW1vdmVJKHBhcnNlSW50KGQpKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBmb3JtYXRMb2NhdGlvbi52YWxbZF07XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVkRm9ybWF0TG9jYXRpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vQHRzLWlnbm9yZSB3aGVuIHNvbWV0aGluZyBpcyBhZGRlZCBub3RpZnkgbGlzdGVuZXJzXHJcbiAgICAgICAgaWYgKHVwZGF0ZWRGb3JtYXRMb2NhdGlvbilcclxuICAgICAgICAgICAgZm9ybWF0TG9jYXRpb24ubm90aWZ5KHRydWUpO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAgICAgIGZvcm1hdExvY2F0aW9uLnZhbCA9IGZldGNoZWQ7XHJcbiAgICByZXR1cm4gZm9ybWF0TG9jYXRpb247XHJcbn1cclxuZnVuY3Rpb24gc2V0RGF0YShkYXRhLCBsb2NhdGlvbiwgY29tcGxldGUpIHtcclxuICAgIGlmICghKGxvY2F0aW9uIGluc3RhbmNlb2YgRGF0YSkgJiYgbG9jYXRpb24gIT09IHVuZGVmaW5lZClcclxuICAgICAgICBsb2NhdGlvbiA9IG5ldyBEYXRhKGxvY2F0aW9uKTtcclxuICAgIGxldCBkYXRhTG9jYXRpb24gPSBmb3JtYXREYXRhKGRhdGEsIGxvY2F0aW9uKTtcclxuICAgIGlmIChjb21wbGV0ZSAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgIGNvbXBsZXRlKCk7XHJcbiAgICByZXR1cm4gbmV3IERhdGFCYXNlKGRhdGFMb2NhdGlvbik7XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gc2V0RGF0YTtcclxuLypcclxuICogSG9sZHMgYW5kIGhhbmRsZXMgYWNjZXNzIHRvIGFuIGNvbXBsZXggbWFwIG9mIGRhdGEuIFRoaXMgZGF0YSBDb25zaXNpdHMgb2YgaW4gZWFjaCBvdGhlciBuZXh0ZWQgRGF0YSBpbnRzYW5jZXNcclxuICogKHRvIGluaXQgc3VjaCBhbiBtYXAsIGNvbnN1bHQgZm9ybWF0RGF0YS4pXHJcbiAqL1xyXG5jbGFzcyBEYXRhQmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgIH1cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiBcIkRhdGFCYXNlOiBcIiArIHRoaXMuZGF0YS50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIGEgcmVmZXJlbmNlIHRvIHN1YkRhdGEgZm91bmQgdW5kZXIgZ2l2ZW4ga2V5KHMpIC8gcGF0aFxyXG4gICAgICogQSByZWZlcmVuY2UgaXMgYSBuZXcgRGF0YUJhc2UgaW5zdGFuY2UganVzdCBjb250YWluaW5nIHRoZSByZWZlcmVuY2VkIERhdGFcclxuICAgICAqXHJcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIHJlc29sdmVzIHJlZmVyZW5jZXMgdmlhIHRoZSBcInJlY3Vyc2l2ZWx5IGFuY2hvcmVkIERhdGFcIiAocmFkKSBwcm9jZWR1cmUuIEZvciBmdXJ0aGVyXHJcbiAgICAgKiBpbnNpZ2h0cyB3aGF0IHRoaXMgbWVhbnMgcGxlYXNlIGNvbnN1bHQgdGhlIGRvY3VtZW50YXRpb24gb2YgdGhlIGZ1bmN0aW9uIHJhZFxyXG4gICAgICovXHJcbiAgICByZWYoLi4ua2V5cykge1xyXG4gICAgICAgIHJldHVybiBuZXcgRGF0YUJhc2UodGhpcy5yYWQoLi4ua2V5cykpO1xyXG4gICAgfVxyXG4gICAgcGVlayguLi5rZXlzKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRhQmFzZSh0aGlzLmZkcyguLi5rZXlzKSk7XHJcbiAgICB9XHJcbiAgICBjdXJyZW50KC4uLmtleXMpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuZmRzKC4uLmtleXMpKS52YWw7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIHVuZGVybHlpbmcgRGF0YSBmb3VuZCB1bmRlciBnaXZlbiBrZXkocykgLyBwYXRoXHJcbiAgICAgKiBTaW1pbGFyIHRvIHJlZiBidXQgbm90IHdyYXBwZWQgaW5zaWRlIGEgRGF0YUJhc2UgaW5zdGFuY2VcclxuICAgICAqXHJcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIHJlc29sdmVzIHJlZmVyZW5jZXMgdmlhIHRoZSBcInJlY3Vyc2l2ZWx5IGFuY2hvcmVkIERhdGFcIiAocmFkKSBwcm9jZWR1cmUuIEZvciBmdXJ0aGVyXHJcbiAgICAgKiBpbnNpZ2h0cyB3aGF0IHRoaXMgbWVhbnMgcGxlYXNlIGNvbnN1bHQgdGhlIGRvY3VtZW50YXRpb24gb2YgdGhlIGZ1bmN0aW9uIHJhZFxyXG4gICAgICovXHJcbiAgICBnZXQoa2V5LCBjYikge1xyXG4gICAgICAgIGlmICh0eXBlb2Yga2V5ID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiBrZXkgPT09IFwibnVtYmVyXCIgfHwga2V5IGluc3RhbmNlb2YgRGF0YSkge1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IChrZXkgaW5zdGFuY2VvZiBEYXRhKSA/IGtleSA6IHRoaXMucmFkKGtleSk7XHJcbiAgICAgICAgICAgIGlmIChjYiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhLnN1YnNjcmliZShjYik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IG1hcCA9IFtdO1xyXG4gICAgICAgICAgICBpZiAoY2IgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IChrZXlbaV0gaW5zdGFuY2VvZiBEYXRhKSA/IGtleVtpXSA6IHRoaXMucmFkKGtleVtpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3Vic2NyaWJ0aW9uID0gKHYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFwW2ldID0gdjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleS5sZW5ndGggPT09IG1hcC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2IoLi4ubWFwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLnN1YnNjcmliZShzdWJzY3JpYnRpb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgICAgICBtYXBbaV0gPSAoa2V5W2ldIGluc3RhbmNlb2YgRGF0YSkgPyBrZXlbaV0gOiB0aGlzLnJhZChrZXlbaV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNldChrZXksIHRvKSB7XHJcbiAgICAgICAgbGV0IGZkcyA9IHRoaXMuZmRzKGtleSk7XHJcbiAgICAgICAgZm9ybWF0RGF0YSh0bywgZmRzLCB0cnVlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyByZWN1cnNpdmVseSBhbmNob3JlZCBEYXRhIChyYWQpXHJcbiAgICAgKiBNZWFuaW5nIGZvciBlYWNoIG5lc3Rpbmcgc3RlcCB0aGVyZSB3aWxsIGJlIG9uZSBsaXN0ZW5lciBhdHRhdGNoZWQgdG8gZW5hYmxlIG9iamVjdHMgdG8gYmUgb2JzZXJ2ZWRcclxuICAgICAqIFRoaXMgaXMgdmVyeSByZXNvdXJjZSAobWVtKSBleHBlbnNpdmUuIFVzZSBvbmx5IHdoZW4gbmVjZXNzYXJ5XHJcbiAgICAgKi9cclxuICAgIHJhZCguLi5rZXlzKSB7XHJcbiAgICAgICAgbGV0IGxhc3QgPSB0aGlzLmRhdGE7XHJcbiAgICAgICAgbGV0IG9yZ2FuaXplZEtleXMgPSBrZXlzLmpvaW4oXCIuXCIpLnNwbGl0KFwiLlwiKTtcclxuICAgICAgICBvcmdhbml6ZWRLZXlzLmVhKChrKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChrICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV4dCA9IGxhc3QudmFsW2tdO1xyXG4gICAgICAgICAgICAgICAgaWYgKG5leHQgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgSW52YWxpZEtleShrLCBsYXN0KTtcclxuICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgbGFzdC5zdWJzY3JpYmVJbnRlcm5hbGx5KChhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYSA9IGFueVtrXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZHQgPSBhIGluc3RhbmNlb2YgRGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0eXBlb2YgYSA9PT0gXCJvYmplY3RcIiAmJiAhZHQpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0LnZhbCA9IChkdCkgPyBhLnZhbCA6IGE7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGxhc3QgPSBuZXh0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGxhc3Q7XHJcbiAgICB9XHJcbiAgICBmZHMoLi4ua2V5cykge1xyXG4gICAgICAgIGxldCBsYXN0ID0gdGhpcy5kYXRhO1xyXG4gICAgICAgIGxldCBvcmdhbml6ZWRLZXlzID0ga2V5cy5qb2luKFwiLlwiKS5zcGxpdChcIi5cIik7XHJcbiAgICAgICAgb3JnYW5pemVkS2V5cy5lYSgoaykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoayAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5leHQgPSBsYXN0LnZhbFtrXTtcclxuICAgICAgICAgICAgICAgIGlmIChuZXh0ID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEludmFsaWRLZXkoaywgbGFzdCk7XHJcbiAgICAgICAgICAgICAgICBsYXN0ID0gbmV4dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBsYXN0O1xyXG4gICAgfVxyXG4gICAgLy9UT0RPOiBtYWtlIHRoaXMgYXZhaWxhYmxlIGZvciBEQiBhcyBhIHdob2xlIGFuZCBsaW1pdCBhY2NlcyB2aWEgaW50ZXJmYWNlcyAoY29uZGl0aW5hbCB0eXBlcylcclxuICAgIGdldCBhc0FycmF5KCkge1xyXG4gICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgIGlmICh0aGlzLmRhdGEudmFsIGluc3RhbmNlb2YgQXJyYXkpXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0YUFycmF5KHRoaXMuZGF0YSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgSW52YWxpZENhc3QoQXJyYXkpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGFzTnVtYmVyKCkge1xyXG4gICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5kYXRhLnZhbCA9PT0gXCJudW1iZXJcIilcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRhTnVtYmVyKHRoaXMuZGF0YSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgSW52YWxpZENhc3QoTnVtYmVyKTtcclxuICAgIH1cclxuICAgIGVxdWFscyh0aGF0KSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGF0ID09PSB1bmRlZmluZWQpID8gZmFsc2UgOiB0aGlzLmRhdGEuZXF1YWxzKHRoYXQuZGF0YSwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBzYW1lKHRoYXQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLnZhbCA9PT0gdGhhdC5kYXRhLnZhbDtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkRhdGFCYXNlID0gRGF0YUJhc2U7XHJcbmNsYXNzIERhdGFOdW1iZXIgZXh0ZW5kcyBEYXRhQmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XHJcbiAgICAgICAgc3VwZXIoZGF0YSk7XHJcbiAgICB9XHJcbiAgICBpbmMoYnkgPSAxKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhLnZhbCArPSBieTtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLnZhbDtcclxuICAgIH1cclxuICAgIGRlYyhieSA9IDEpIHtcclxuICAgICAgICB0aGlzLmRhdGEudmFsIC09IGJ5O1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEudmFsO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuRGF0YU51bWJlciA9IERhdGFOdW1iZXI7XHJcbmNsYXNzIERhdGFBcnJheSBleHRlbmRzIERhdGFCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcclxuICAgICAgICBzdXBlcihkYXRhKTtcclxuICAgIH1cclxuICAgIGxpc3QobG9vcCwgc3RlcEludG9QYXRoQWZ0ZXJ3YXJkcyA9IFwiXCIpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoKCk7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgZW5kID0gbG9vcChuZXcgRGF0YUJhc2UodGhpcy5mZHMoaSwgc3RlcEludG9QYXRoQWZ0ZXJ3YXJkcykpLCBpKTtcclxuICAgICAgICAgICAgaWYgKGVuZCAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVuZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3JFYWNoKGxvb3AsIGJlZm9yZUxvb3AsIGFmdGVyTG9vcCwgc3RlcEludG9QYXRoQWZ0ZXJ3YXJkcyA9IFwiXCIpIHtcclxuICAgICAgICBsZXQgcHJvbXMgPSBbXTtcclxuICAgICAgICB0aGlzLmdldChcIlwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChiZWZvcmVMb29wICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICBwcm9tcy5hZGQoYmVmb3JlTG9vcCgpKTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLnZhbC5lYSgoZSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcHJvbXMuYWRkKGxvb3AobmV3IERhdGFCYXNlKHRoaXMuZmRzKGksIHN0ZXBJbnRvUGF0aEFmdGVyd2FyZHMpKSwgaSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcHJvbXMgPSBwcm9tcy5maWx0ZXIoKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlIGluc3RhbmNlb2YgUHJvbWlzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChhZnRlckxvb3AgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb21zLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChwcm9tcykudGhlbihhZnRlckxvb3ApO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIGFmdGVyTG9vcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHByb21zLmxlbmd0aCAhPT0gMClcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21zKTtcclxuICAgIH1cclxuICAgIGxlbmd0aChjYikge1xyXG4gICAgICAgIGlmIChjYiA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhLnZhbC5sZW5ndGg7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0KFwiXCIsIChhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYihhLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlYWxMZW5ndGgoY2IpIHtcclxuICAgICAgICBpZiAoY2IgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS52YWwucmVhbExlbmd0aDtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5nZXQoXCJcIiwgKGEpID0+IHtcclxuICAgICAgICAgICAgICAgIGNiKGEucmVhbExlbmd0aCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFsdGVyKGNiLCBpbml0YWxpemVMb29wID0gZmFsc2UpIHtcclxuICAgICAgICB0aGlzLmJlZm9yZUxhc3RDaGFuZ2UgPSB0aGlzLmRhdGEuY2xvbmUoKTtcclxuICAgICAgICBpZiAoaW5pdGFsaXplTG9vcCkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEudmFsLmVhKChlLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYihuZXcgRGF0YUJhc2UoZSksIGkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nZXQoXCJcIiwgKGEpID0+IHtcclxuICAgICAgICAgICAgbGV0IGluZGV4ZXNUb0JlQ2FsbGVkID0gW107XHJcbiAgICAgICAgICAgIGEuZWEoKGUsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbmRleGVzVG9CZUNhbGxlZC5hZGQoaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlLmVxdWFscyh0aGlzLmJlZm9yZUxhc3RDaGFuZ2UudmFsW2ldLCB0cnVlKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2IobmV3IERhdGFCYXNlKGUpLCBpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuYmVmb3JlTGFzdENoYW5nZS52YWwuZWEoKGUsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghaW5kZXhlc1RvQmVDYWxsZWQuaW5jbHVkZXMoaSkpXHJcbiAgICAgICAgICAgICAgICAgICAgY2IobnVsbCwgaSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmJlZm9yZUxhc3RDaGFuZ2UgPSB0aGlzLmRhdGEuY2xvbmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIG1vcnBoKGNiLCBpbml0YWxpemVMb29wID0gZmFsc2UpIHtcclxuICAgICAgICB0aGlzLmJlZm9yZUxhc3RDaGFuZ2UgPSB0aGlzLmRhdGEuY2xvbmUoKTtcclxuICAgICAgICBpZiAoaW5pdGFsaXplTG9vcCkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEudmFsLmVhKChlLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYihuZXcgRGF0YUJhc2UoZSksIGkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNiYSA9IERhdGFBcnJheS5tb3JwaE1hcC5nZXQodGhpcy5kYXRhKTtcclxuICAgICAgICBpZiAoY2JhID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIERhdGFBcnJheS5tb3JwaE1hcC5zZXQodGhpcy5kYXRhLCBbY2JdKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIGNiYS5hZGQoY2IpO1xyXG4gICAgfVxyXG4gICAgYWRkKHZhbCwgYXRJbmRleCkge1xyXG4gICAgICAgIGxldCBsZW5ndGggPSB0aGlzLmxlbmd0aCgpO1xyXG4gICAgICAgIGxldCBtYXhJbmRleCA9IGxlbmd0aCAtIDE7XHJcbiAgICAgICAgaWYgKGF0SW5kZXggPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgYXRJbmRleCA9IGxlbmd0aDtcclxuICAgICAgICB0aGlzLmRhdGEudmFsLlJldmVyc2UoKS5lYSgoZSwgaSkgPT4ge1xyXG4gICAgICAgICAgICBpID0gbWF4SW5kZXggLSBpO1xyXG4gICAgICAgICAgICBpZiAoaSA8IGF0SW5kZXgpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIC8vVEhJUyBJRiBJUyBORUNFU1NBUlkgQkVDQVVTRSBXSEVOIFNFVFRJTkcgRU1QVFkgQVJSQVkgU09MT1RTIFRPIFVOREVGSU5FRCBUSEVZIEdFVCBQSUNLRUQgVVAgQlkgSVRFUkFUT1JTXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEudmFsW2ldID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5kYXRhLnZhbFtpICsgMV07XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS52YWxbaSArIDFdID0gdGhpcy5kYXRhLnZhbFtpXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkZWxldGUgdGhpcy5kYXRhLnZhbFthdEluZGV4XTtcclxuICAgICAgICBsZXQgb2IgPSB7fTtcclxuICAgICAgICBvYlthdEluZGV4XSA9IHZhbDtcclxuICAgICAgICBmb3JtYXREYXRhKG9iLCB0aGlzLmRhdGEpO1xyXG4gICAgICAgIGxldCBjYmEgPSBEYXRhQXJyYXkubW9ycGhNYXAuZ2V0KHRoaXMuZGF0YSk7XHJcbiAgICAgICAgaWYgKGNiYSAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBjYmEuZWEoKGYpID0+IHtcclxuICAgICAgICAgICAgICAgIGYobmV3IERhdGFCYXNlKHRoaXMuZGF0YS52YWxbYXRJbmRleF0pLCBhdEluZGV4KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZW1vdmVJKGluZGV4LCBjbG9zZUdhcCA9IHRydWUpIHtcclxuICAgICAgICBpZiAoY2xvc2VHYXApXHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS52YWwucmVtb3ZlSShpbmRleCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5kYXRhLnZhbFtpbmRleF07XHJcbiAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgdGhpcy5kYXRhLm5vdGlmeSh0cnVlKTtcclxuICAgICAgICBsZXQgY2JhID0gRGF0YUFycmF5Lm1vcnBoTWFwLmdldCh0aGlzLmRhdGEpO1xyXG4gICAgICAgIGlmIChjYmEgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgY2JhLmVhKChmKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmKG51bGwsIGluZGV4KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZW1vdmVWKHZhbCwgY2xvc2VHYXAgPSB0cnVlKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBmb3JtYXREYXRhKHZhbCk7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5kYXRhLnZhbC5lYSgoZSwgaSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS5lcXVhbHMoZGF0YSkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoaW5kZXggPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEludmFsaWRWYWx1ZUV4Y2VwdGlvbih2YWwsIHRoaXMuZGF0YS50b1N0cmluZygpKTtcclxuICAgICAgICBpZiAoY2xvc2VHYXApXHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS52YWwucmVtb3ZlSShpbmRleCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5kYXRhLnZhbFtpbmRleF07XHJcbiAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgdGhpcy5kYXRhLm5vdGlmeSh0cnVlKTtcclxuICAgICAgICBsZXQgY2JhID0gRGF0YUFycmF5Lm1vcnBoTWFwLmdldCh0aGlzLmRhdGEpO1xyXG4gICAgICAgIGlmIChjYmEgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgY2JhLmVhKChmKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmKG51bGwsIGluZGV4KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuRGF0YUFycmF5Lm1vcnBoTWFwID0gbmV3IE1hcCgpO1xyXG5leHBvcnRzLkRhdGFBcnJheSA9IERhdGFBcnJheTtcclxuY2xhc3MgRGF0YSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih2YWwpIHtcclxuICAgICAgICB0aGlzLmNicyA9IFtdO1xyXG4gICAgICAgIHRoaXMuaW50ZXJuYWxDQnMgPSBbXTtcclxuICAgICAgICB0aGlzLnZhbCA9IHZhbDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU2V0IHRoZSB2YWxcclxuICAgICAqL1xyXG4gICAgc2V0IHZhbCh0bykge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbCA9PT0gdG8pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB0aGlzLl92YWwgPSB0bztcclxuICAgICAgICB0aGlzLm5vdGlmeShmYWxzZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGN1cnJlbnQgdmFsXHJcbiAgICAgKi9cclxuICAgIGdldCB2YWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU3Vic2NyaWJlIHRvIHZhbFxyXG4gICAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHdoaWNoIGdldHMgY2FsbGVkIHdoZW5ldmVyIHRoZSB2YWwgY2hhbmdlc1xyXG4gICAgICovXHJcbiAgICBzdWJzY3JpYmUoY2IsIGluaXQgPSB0cnVlKSB7XHJcbiAgICAgICAgdGhpcy5jYnMuYWRkKGNiKTtcclxuICAgICAgICBpZiAoaW5pdClcclxuICAgICAgICAgICAgY2IodGhpcy52YWwpO1xyXG4gICAgfVxyXG4gICAgc3Vic2NyaWJlSW50ZXJuYWxseShjYikge1xyXG4gICAgICAgIHRoaXMuaW50ZXJuYWxDQnMuYWRkKGNiKTtcclxuICAgICAgICBjYih0aGlzLnZhbCk7XHJcbiAgICB9XHJcbiAgICB1bnN1YnNjcmliZShjYikge1xyXG4gICAgICAgIGlmIChjYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhpcy5jYnMucmVtb3ZlKGNiKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuY2JzLmNsZWFyKCk7XHJcbiAgICB9XHJcbiAgICB0b1N0cmluZyh0YWJJbiA9IDAsIGluc2lkZU9iamVjdCA9IGZhbHNlKSB7XHJcbiAgICAgICAgdGFiSW4rKztcclxuICAgICAgICBsZXQgcyA9IFwiXCI7XHJcbiAgICAgICAgbGV0IHYgPSB0aGlzLnZhbDtcclxuICAgICAgICBpZiAodHlwZW9mIHYgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgbGV0IGhhc1Byb3BzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxldCBhciA9IHYgaW5zdGFuY2VvZiBBcnJheTtcclxuICAgICAgICAgICAgaWYgKGFyKVxyXG4gICAgICAgICAgICAgICAgcyArPSBcIltcIjtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcyArPSBcIntcIjtcclxuICAgICAgICAgICAgcyArPSBcIlxcblwiO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBrIGluIHYpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdi5oYXNPd25Qcm9wZXJ0eShrKSlcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGhhc1Byb3BzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgcyArPSBcIlxcdFwiLnJlcGVhdCh0YWJJbikgKyBrICsgXCI6IFwiICsgdltrXS50b1N0cmluZyh0YWJJbiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFoYXNQcm9wcylcclxuICAgICAgICAgICAgICAgIHMgPSBzLnN1YnN0cmluZygwLCBzLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHMgPSBzLnN1YnN0cmluZygwLCBzLmxlbmd0aCAtIDIpICsgXCJcXG5cIjtcclxuICAgICAgICAgICAgICAgIHMgKz0gXCJcXHRcIi5yZXBlYXQodGFiSW4gLSAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYXIpXHJcbiAgICAgICAgICAgICAgICBzICs9IFwiXVwiO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBzICs9IFwifVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IHN0ID0gdHlwZW9mIHYgPT09IFwic3RyaW5nXCI7XHJcbiAgICAgICAgICAgIGlmIChzdClcclxuICAgICAgICAgICAgICAgIHMgKz0gXCJcXFwiXCI7XHJcbiAgICAgICAgICAgIHMgKz0gdjtcclxuICAgICAgICAgICAgaWYgKHN0KVxyXG4gICAgICAgICAgICAgICAgcyArPSBcIlxcXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcyArPSBpbnNpZGVPYmplY3QgPyBcIixcIiA6IFwiXCI7XHJcbiAgICAgICAgcmV0dXJuIHMgKyBcIlxcblwiO1xyXG4gICAgfVxyXG4gICAgbm90aWZ5KHdpbGQgPSBmYWxzZSkge1xyXG4gICAgICAgIGxldCB2YWwgPSB0aGlzLnZhbDtcclxuICAgICAgICB0aGlzLmNicy5lYSgoZikgPT4ge1xyXG4gICAgICAgICAgICBmKHZhbCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKCF3aWxkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxDQnMuZWEoKGYpID0+IHtcclxuICAgICAgICAgICAgICAgIGYodmFsKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDb21wYXJlcyBpZiBhbGwga2V5cyBpbiB0aGlzIGFyZSBlcXVhbCB0byB0aGUgZXF1aXZlbGVudCBvbmVzIG9uIGRhdGFcclxuICAgICAqIERpZmZlcmVudCBEYXRhIEluc3RhbmNlcyBob2xkaW5nIHRoZSBzYW1lIHZhbHVlIGFyZSB0aGUgZXF1YWxcclxuICAgICAqIERhdGEgY2FuIGhhdmUgbW9yZSBrZXlzIHRoYW4gdGhpcyBhbmQgc3RpbGwgYmUgZXF1YWwuXHJcbiAgICAgKiBJZiB5b3UgZG9udCB3YW50IHRoaXMgcGFzcyBpbiB0cnVlIHRvIHRoZSBzdHJpY3QgcGFyYW0uIFRoaXMgd2lsbCBiZSBtb3JlIHJlY291cmNlIGludGVuc2l2ZVxyXG4gICAgICovXHJcbiAgICBlcXVhbHMoZGF0YSwgc3RyaWN0ID0gZmFsc2UpIHtcclxuICAgICAgICBsZXQgdiA9IHRoaXMudmFsO1xyXG4gICAgICAgIGlmIChkYXRhID09PSB1bmRlZmluZWQgfHwgZGF0YSA9PT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGxldCBkID0gZGF0YS52YWw7XHJcbiAgICAgICAgaWYgKHYgPT0gZClcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgbGV0IGxzO1xyXG4gICAgICAgIGlmIChzdHJpY3QpXHJcbiAgICAgICAgICAgIGxzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgayBpbiB2KSB7XHJcbiAgICAgICAgICAgIGlmICghdi5oYXNPd25Qcm9wZXJ0eShrKSlcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZiAoc3RyaWN0KVxyXG4gICAgICAgICAgICAgICAgbHMuYWRkKGspO1xyXG4gICAgICAgICAgICBpZiAodltrXSAhPT0gZFtrXSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZba10gaW5zdGFuY2VvZiBEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRba10gaW5zdGFuY2VvZiBEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXZba10uZXF1YWxzKGRba10sIHN0cmljdCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3RyaWN0KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGsgaW4gZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF2Lmhhc093blByb3BlcnR5KGspKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFscy5pbmNsdWRlcyhrKSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBjbG9uZSgpIHtcclxuICAgICAgICBsZXQgZDtcclxuICAgICAgICBsZXQgdiA9IHRoaXMudmFsO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdiA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBuZXcgdi5jb25zdHJ1Y3RvcigpO1xyXG4gICAgICAgICAgICBkID0gbmV3IERhdGEoZGF0YSk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGsgaW4gdikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF2Lmhhc093blByb3BlcnR5KGspKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICBkLnZhbFtrXSA9IHZba10uY2xvbmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIGQgPSBuZXcgRGF0YSh2KTtcclxuICAgICAgICBkLmludGVybmFsQ0JzLmFkZCguLi50aGlzLmludGVybmFsQ0JzKTtcclxuICAgICAgICBkLmNicy5hZGQoLi4udGhpcy5jYnMpO1xyXG4gICAgICAgIHJldHVybiBkO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuRGF0YSA9IERhdGE7XHJcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCc7XG4gIGNsYXNzIEV4Y2VwdGlvbiBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3Rvcihtc2cpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICB0aGlzLm1lc3NhZ2UgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICBpZiAobXNnICE9PSB1bmRlZmluZWQpIHRoaXMubWVzc2FnZSArPSBcIjogXCIgKyBtc2c7XG4gICAgfVxuICB9XG4gIGNsYXNzIEluZGV4T3V0T2ZCb3VuZHNFeGNlcHRpb24gZXh0ZW5kcyBFeGNlcHRpb24ge1xuICAgIGNvbnN0cnVjdG9yKGluZGV4LCBhcnJheSkge1xuICAgICAgc3VwZXIoXCJHaXZlbiB2YWx1ZSBcXFwiXCIgKyBpbmRleCArIFwiXFxcIiBtdXN0IGJlIGluIHJhbmdlIDAtXCIgKyAoYXJyYXkubGVuZ3RoLTEpICsgXCIuXCIpO1xuICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICAgIH1cbiAgfVxuICBjbGFzcyBJbnZhbGlkSW5wdXRFeGNlcHRpb24gZXh0ZW5kcyBFeGNlcHRpb24ge1xuICAgIGNvbnN0cnVjdG9yKG1zZykge1xuICAgICAgc3VwZXIoXCJHaXZlbiBpbnB1dCBpcyBpbnZhbGlkLlxcblwiICsgbXNnKTtcbiAgICB9XG4gIH1cbiAgY2xhc3MgSW52YWxpZENvbnN0cnVjdG9yRXhjZXB0aW9uIGV4dGVuZHMgRXhjZXB0aW9ue1xuICAgIGNvbnN0cnVjdG9yKG1zZyA9IFwiXCIpIHtcbiAgICAgIHN1cGVyKFwiR2l2ZW4gY29uc3RydWN0b3IgbXVzdCBpbmhlcml0IGZvcm0gQXJyYXkuXFxuXCIgKyBtc2cpO1xuICAgIH1cbiAgfVxuICBjbGFzcyBJbnZhbGlkVmFsdWVFeGNlcHRpb24gZXh0ZW5kcyBFeGNlcHRpb24ge1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlLCBhcnJheSkge1xuICAgICAgc3VwZXIoXCJVbmFibGUgdG8gZmluZCBnaXZlbiB2YWx1ZTogXCIgKyB2YWx1ZS5jb25zdHJ1Y3Rvci5uYW1lICsgXCIgXCIgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgKyBcIjsgd2l0aGluIGZvbGxvd2luZyBhcnJheTogXCIgKyBhcnJheS50b1N0cmluZygpKTtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgICB9XG4gIH1cblxuICAvL1Rocm93cyBJbmRleE91dE9mQm91bmRzRXhjZXB0aW9uIHdoZW4gZ2l2ZW4gaW5kZXggaXMgb3V0IG9mIGJvdW5kcyBvZiBhXG4gIGZ1bmN0aW9uIGlzSW5kZXgoaSwgYSkge1xuICAgIGlmKCFhLmhhc093blByb3BlcnR5KGkpKSB0aHJvdyBuZXcgSW5kZXhPdXRPZkJvdW5kc0V4Y2VwdGlvbihpLGEpO1xuICB9XG5cbiAgY29uc3QgYXIgPSBcInhycmF5XCI7XG5cbiAgZnVuY3Rpb24gaW5pdChBckNvbnN0ciA9IEFycmF5KSB7XG4gICAgaWYoIShuZXcgQXJDb25zdHIoKSBpbnN0YW5jZW9mIEFycmF5KSkgdGhyb3cgbmV3IEludmFsaWRDb25zdHJ1Y3RvckV4Y2VwdGlvbigpO1xuICAgIGlmIChBckNvbnN0ci54cnJheSA9PT0gYXIpIHJldHVybiBBckNvbnN0cjtcblxuICAgIEFyQ29uc3RyLnhycmF5ID0gYXI7XG5cbiAgICBsZXQgcCA9IEFyQ29uc3RyLnByb3RvdHlwZTtcblxuICAgIHAuZWFjaCA9IHAuZWEgPSBmdW5jdGlvbihmLCB0ID0gdGhpcykge1xuICAgICAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgZTtcbiAgICAgICAgbGV0IHN0YXJ0STtcbiAgICAgICAgZm9yIChzdGFydEkgPSAwOyBzdGFydEkgPCB0Lmxlbmd0aDsgc3RhcnRJKyspIHtcbiAgICAgICAgICBpZiAodC5oYXNPd25Qcm9wZXJ0eShzdGFydEkpKSB7XG4gICAgICAgICAgICBlID0gZi5jYWxsKHQsIHRbc3RhcnRJXSwgc3RhcnRJLCB0aGlzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzdGFydEkrKztcbiAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgcmV0dXJuIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgciA9IGF3YWl0IGU7XG4gICAgICAgICAgICBpZiAociAhPT0gdW5kZWZpbmVkKSByZXR1cm4gcjtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0STsgaSA8IHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgaWYgKCF0Lmhhc093blByb3BlcnR5KGkpKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgbGV0IGUgPSBhd2FpdCBmLmNhbGwodCwgdFtpXSwgaSwgdGhpcyk7XG4gICAgICAgICAgICAgIGlmIChlICE9PSB1bmRlZmluZWQpIHJldHVybiBlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgaWYgKGUgIT09IHVuZGVmaW5lZCkgcmV0dXJuIGU7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0STsgaSA8IHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghdC5oYXNPd25Qcm9wZXJ0eShpKSkgY29udGludWU7XG4gICAgICAgICAgICBsZXQgZSA9IGYuY2FsbCh0LCB0W2ldLCBpLCB0aGlzKTtcbiAgICAgICAgICAgIGlmIChlICE9PSB1bmRlZmluZWQpIHJldHVybiBlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwLCBcImVtcHR5XCIsIHtnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5sZW5ndGggPT09IDA7XG4gICAgfX0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHAsIFwibGFzdFwiLCB7Z2V0KCkge1xuICAgICAgaWYodGhpcy5sZW5ndGggPT09IDApIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICByZXR1cm4gdGhpc1t0aGlzLmxlbmd0aC0xXTtcbiAgICB9fSk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocCwgXCJyZWFsTGVuZ3RoXCIsIHtnZXQoKSB7XG4gICAgICBsZXQgbCA9IDA7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoaSkpIGwrKztcbiAgICAgIH1cbiAgICAgIHJldHVybiBsO1xuICAgIH19KTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwLCBcImZpcnN0XCIsIHtnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpc1swXTtcbiAgICB9fSk7XG5cbiAgICBwLmNsZWFyID0gZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmxlbmd0aCA9IDA7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcC5DbGVhciA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG5ldyBBckNvbnN0cigpO1xuICAgIH1cblxuICAgIHAuYWRkID0gZnVuY3Rpb24oLi4udmFsdWVzKSB7XG4gICAgICB0aGlzLnB1c2goLi4udmFsdWVzKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBwLkFkZCA9IGZ1bmN0aW9uKC4uLnZhbHVlcykge1xuICAgICAgcmV0dXJuIG5ldyBBckNvbnN0cigpLmFkZCguLi50aGlzKS5hZGQoLi4udmFsdWVzKTtcbiAgICB9XG5cbiAgICBwLnNldCA9IGZ1bmN0aW9uKGEgPSBbXSkge1xuICAgICAgaWYodGhpcyA9PT0gYSkgcmV0dXJuIHRoaXM7XG4gICAgICBpZihhIGluc3RhbmNlb2YgQXJyYXkpIHJldHVybiB0aGlzLmNsZWFyKCkuYWRkKC4uLmEpO1xuICAgICAgcmV0dXJuIHRoaXMuY2xlYXIoKS5hZGQoYSk7XG4gICAgfVxuICAgIHAuU2V0ID0gZnVuY3Rpb24oYSA9IFtdKSB7XG4gICAgICByZXR1cm4gbmV3IEFyQ29uc3RyKCkuYWRkKC4uLmEpO1xuICAgIH1cblxuICAgIHAuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLlNldCh0aGlzKTtcbiAgICB9XG5cbiAgICBwLlJldmVyc2UgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLlNldCh0aGlzKS5yZXZlcnNlKCk7XG4gICAgfVxuXG4gICAgcC5nYXRoZXIgPSBmdW5jdGlvbiguLi5hKSB7XG4gICAgICBhLmVhKChlKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5pbmNsdWRlcyhlKSkgdGhpcy5hZGQoZSk7XG4gICAgICB9KVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcC5HYXRoZXIgPSBmdW5jdGlvbiguLi5hKSB7XG4gICAgICBsZXQgdCA9IHRoaXMuY2xvbmUoKTtcbiAgICAgIGEuZWEoKGUpID0+IHtcbiAgICAgICAgaWYgKCF0LmluY2x1ZGVzKGUpKSB0LmFkZChlKTtcbiAgICAgIH0pXG4gICAgICByZXR1cm4gdDtcbiAgICB9XG5cbiAgICBsZXQgbWFyayA9IHt9O1xuXG4gICAgLy9UaHJvd3MgSW52YWxpZFZhbHVlRXhjZXB0aW9uIHdoZW4gdGhlIGdpdmVuIHZhbHVlIGNhbm5vdCBiZSBmb3VuZCB3aXRoaW5nIHRoaXNcbiAgICAvLyBUT0RPOiBkaWZmZXJlbnRhdGUgaW5kZXhhbGwgYW5kIGluZGV4Zmlyc3RcbiAgICBwLmluZGV4ID0gZnVuY3Rpb24oLi4udmFsdWVzKSB7XG4gICAgICBsZXQgdGhhdCA9IHRoaXMuU2V0KHRoaXMpO1xuICAgICAgbGV0IGluZGV4ZXMgPSBuZXcgQXJDb25zdHIoKTtcbiAgICAgIHZhbHVlcy5lYSgodikgPT4ge1xuICAgICAgICBpZighdGhpcy5pbmNsdWRlcyh2KSkgdGhyb3cgbmV3IEludmFsaWRWYWx1ZUV4Y2VwdGlvbih2LHRoaXMpO1xuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgIGxldCBpbmRleCA9IHRoYXQuaW5kZXhPZih2KTtcbiAgICAgICAgICBpZiAoaW5kZXhlcy5sYXN0ICE9PSBpbmRleCAmJiBpbmRleCAhPT0gLTEpe1xuICAgICAgICAgICAgaW5kZXhlcy5hZGQoaW5kZXgpO1xuICAgICAgICAgICAgdGhhdFtpbmRleF0gPSBtYXJrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBpbmRleGVzO1xuICAgIH1cbiAgICAvL1Rocm93cyBJbmRleE91dE9mQm91bmRzRXhjZXB0aW9uIHdoZW4gZ2l2ZW4gaW5kZXggaXMgb3V0IG9mIGJvdW5kcyBvZiB0aGlzXG4gICAgcC5yZW1vdmVJID0gZnVuY3Rpb24oLi4uaW5kaWNlcykge1xuICAgICAgbGV0IHJvbGxiYWNrID0gdGhpcy5TZXQodGhpcyk7XG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluZGljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpc0luZGV4KGluZGljZXNbaV0sIHRoaXMpXG4gICAgICAgICAgdGhpc1tpbmRpY2VzW2ldXSA9IG1hcms7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHRoaXNbaV0gPT09IG1hcmspIHtcbiAgICAgICAgICAgIHRoaXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgaS0tO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIEluZGV4T3V0T2ZCb3VuZHNFeGNlcHRpb24pIHRoaXMuc2V0KHJvbGxiYWNrKTtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBwLnJtSSA9IHAucmVtb3ZlSTtcbiAgICAvL1Rocm93cyBJbmRleE91dE9mQm91bmRzRXhjZXB0aW9uIHdoZW4gZ2l2ZW4gaW5kZXggaXMgb3V0IG9mIGJvdW5kcyBvZiB0aGlzXG4gICAgcC5SZW1vdmVJID0gZnVuY3Rpb24oLi4uaW5kaWNlcykge1xuICAgICAgcmV0dXJuIHRoaXMuU2V0KHRoaXMpLnJlbW92ZUkoLi4uaW5kaWNlcyk7XG4gICAgfVxuICAgIHAuUm1JID0gcC5SZW1vdmVJO1xuXG4gICAgLy9UaHJvd3MgSW52YWxpZFZhbHVlRXhjZXB0aW9uIHdoZW4gdGhlIGdpdmVuIHZhbHVlIGNhbm5vdCBiZSBmb3VuZCB3aXRoaW5nIHRoaXNcbiAgICBwLnJlbW92ZVYgPSBmdW5jdGlvbiguLi52YWx1ZXMpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbW92ZUkoLi4udGhpcy5pbmRleCguLi52YWx1ZXMpKTtcbiAgICB9XG4gICAgcC5ybVYgPSBwLnJlbW92ZVY7XG5cbiAgICAvL1Rocm93cyBJbnZhbGlkVmFsdWVFeGNlcHRpb24gd2hlbiB0aGUgZ2l2ZW4gdmFsdWUgY2Fubm90IGJlIGZvdW5kIHdpdGhpbmcgdGhpc1xuICAgIHAuUmVtb3ZlViA9IGZ1bmN0aW9uKC4uLnZhbHVlcykge1xuICAgICAgcmV0dXJuIHRoaXMuU2V0KHRoaXMpLnJlbW92ZVYoLi4udmFsdWVzKTtcbiAgICB9XG4gICAgcC5SbVYgPSBwLlJlbW92ZVY7XG5cbiAgICAvL1Rocm93cyBJbnZhbGlkVmFsdWVFeGNlcHRpb24gd2hlbiB0aGUgZ2l2ZW4gcGFyYW0gaXMgZGV0ZWN0ZWQgYXMgdmFsdWUgYnV0IGNhbm5vdCBiZSBmb3VuZCB3aXRoaW5nIHRoaXNcbiAgICBwLnJlbW92ZSA9IGZ1bmN0aW9uKC4uLnZhbHVlT3JJbmRleCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5yZW1vdmVJKC4uLnZhbHVlT3JJbmRleCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChlIGluc3RhbmNlb2YgSW5kZXhPdXRPZkJvdW5kc0V4Y2VwdGlvbikgdGhpcy5yZW1vdmVWKC4uLnZhbHVlT3JJbmRleCk7XG4gICAgICAgIGVsc2UgdGhyb3cgZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBwLnJtID0gcC5yZW1vdmU7XG5cbiAgICAvL1Rocm93cyBJbmRleE91dE9mQm91bmRzRXhjZXB0aW9uIHdoZW4gZ2l2ZW4gcGFyYW0gaXMgZGV0ZWN0ZWQgYXMgaW5kZXggYnV0IG91dCBvZiBib3VuZHMgb2YgdGhpc1xuICAgIC8vVGhyb3dzIEludmFsaWRWYWx1ZUV4Y2VwdGlvbiB3aGVuIHRoZSBnaXZlbiBwYXJhbSBpcyBkZXRlY3RlZCBhcyB2YWx1ZSBidXQgY2Fubm90IGJlIGZvdW5kIHdpdGhpbmcgdGhpc1xuICAgIHAuUmVtb3ZlID0gZnVuY3Rpb24oLi4udmFsdWVPckluZGV4KSB7XG4gICAgICByZXR1cm4gdGhpcy5TZXQodGhpcykucmVtb3ZlKC4uLnZhbHVlT3JJbmRleCk7XG4gICAgfVxuICAgIHAuUm0gPSBwLlJlbW92ZTtcblxuICAgIHAuR2V0ID0gZnVuY3Rpb24oLi4uaW5kZXhlcykge1xuICAgICAgbGV0IG4gPSBbXTtcbiAgICAgIGluZGV4ZXMuZmxhdChJbmZpbml0eSkuZm9yRWFjaCgoaSkgPT4ge1xuICAgICAgICBuLmFkZCh0aGlzW2ldKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG47XG4gICAgfVxuICAgIHAuZ2V0ID0gZnVuY3Rpb24oLi4uaW5kZXhlcykge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0KHRoaXMuR2V0KC4uLmluZGV4ZXMpKVxuICAgIH1cblxuICAgIHAuZGRhID0gZnVuY3Rpb24oLi4udmFsdWVzKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXZlcnNlKCkuYWRkKC4uLnZhbHVlcykucmV2ZXJzZSgpO1xuICAgIH1cbiAgICBwLkRkYSA9IGZ1bmN0aW9uKC4uLnZhbHVlcykge1xuICAgICAgcmV0dXJuIHRoaXMuUmV2ZXJzZSgpLmFkZCguLi52YWx1ZXMpLnJldmVyc2UoKTtcbiAgICB9XG5cbiAgICAvL1Rocm93cyBJbmRleE91dE9mQm91bmRzRXhjZXB0aW9uIHdoZW4gZ2l2ZW4gaW5kZXggaXMgb3V0IG9mIGJvdW5kcyBvZiBhXG4gICAgcC5yZW0gPSBmdW5jdGlvbihhbW91bnQpIHtcbiAgICAgIGlzSW5kZXgoYW1vdW50LHRoaXMpO1xuICAgICAgdGhpcy5sZW5ndGggLT0gYW1vdW50O1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8vVGhyb3dzIEluZGV4T3V0T2ZCb3VuZHNFeGNlcHRpb24gd2hlbiBnaXZlbiBpbmRleCBpcyBvdXQgb2YgYm91bmRzIG9mIGFcbiAgICBwLlJlbSA9IGZ1bmN0aW9uKGFtb3VudCkge1xuICAgICAgcmV0dXJuIHRoaXMuU2V0KHRoaXMpLnJlbShhbW91bnQpO1xuICAgIH1cblxuICAgIC8vVGhyb3dzIEluZGV4T3V0T2ZCb3VuZHNFeGNlcHRpb24gd2hlbiBnaXZlbiBpbmRleCBpcyBvdXQgb2YgYm91bmRzIG9mIGFcbiAgICBwLm1lciA9IGZ1bmN0aW9uKGFtb3VudCkge1xuICAgICAgcmV0dXJuIHRoaXMucmV2ZXJzZSgpLnJlbShhbW91bnQpLnJldmVyc2UoKTtcbiAgICB9XG4gICAgLy9UaHJvd3MgSW5kZXhPdXRPZkJvdW5kc0V4Y2VwdGlvbiB3aGVuIGdpdmVuIGluZGV4IGlzIG91dCBvZiBib3VuZHMgb2YgYVxuICAgIHAuTWVyID0gZnVuY3Rpb24oYW1vdW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5SZXZlcnNlKCkucmVtKGFtb3VudCkucmV2ZXJlc2UoKTtcbiAgICB9XG5cbiAgICAvL1Rocm93cyBJbmRleE91dE9mQm91bmRzRXhjZXB0aW9uIHdoZW4gZ2l2ZW4gaW5kZXgoZXMpIGFyZSBvdXQgb2YgYm91bmRzIG9mIHRoaXNcbiAgICAvL1Rocm93cyBJbnZhbGlkSW5wdXRFeGNlcHRpb24gd2hlbiBnaXZlbiBwYXJhbWV0ZXJzIGFyZSBub3QgZXF1YWwgaW4gbGVuZ3RoXG4gICAgcC5zd2FwSSA9IGZ1bmN0aW9uKGkxLCBpMikge1xuICAgICAgaTEgPSBbaTFdLmZsYXQoSW5maW5pdHkpO1xuICAgICAgaTIgPSBbaTJdLmZsYXQoSW5maW5pdHkpO1xuICAgICAgaWYoaTEubGVuZ3RoID09PSBpMi5sZW5ndGgpIHtcbiAgICAgICAgbGV0IHJvbGxiYWNrID0gdGhpcy5TZXQodGhpcyk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpMS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaXNJbmRleChpMVtpXSx0aGlzKTtcbiAgICAgICAgICAgIGlzSW5kZXgoaTJbaV0sdGhpcyk7XG4gICAgICAgICAgICBbdGhpc1tpMVtpXV0sdGhpc1tpMltpXV1dID0gW3RoaXNbaTJbaV1dLHRoaXNbaTFbaV1dXTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBpZihlIGluc3RhbmNlb2YgSW5kZXhPdXRPZkJvdW5kc0V4Y2VwdGlvbikgdGhpcy5zZXQocm9sbGJhY2spO1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZElucHV0RXhjZXB0aW9uKFwiUGFyYW1ldGVyIGkxIGFuZCBpMiBtdXN0IGV0aGVyIGJlIHR3byBpbmRleGVzLCBvciB0d28gaW5kZXgtQXJyYXlzIG9mIHRoZSBzYW1lIGxlbmd0aC5cIik7XG4gICAgfVxuICAgIC8vVGhyb3dzIEluZGV4T3V0T2ZCb3VuZHNFeGNlcHRpb24gd2hlbiBnaXZlbiBpbmRleChlcykgYXJlIG91dCBvZiBib3VuZHMgb2YgdGhpc1xuICAgIC8vVGhyb3dzIEludmFsaWRJbnB1dEV4Y2VwdGlvbiB3aGVuIGdpdmVuIHBhcmFtZXRlcnMgYXJlIG5vdCBlcXVhbCBpbiBsZW5ndGhcbiAgICBwLlN3YXBJID0gZnVuY3Rpb24oaTEsIGkyKSB7XG4gICAgICByZXR1cm4gdGhpcy5TZXQodGhpcykuc3dhcEkoaTEsIGkyKTtcbiAgICB9XG5cbiAgICAvL1Rocm93cyBJbnZhbGlkVmFsdWVFeGNlcHRpb24gd2hlbiB0aGUgZ2l2ZW4gdmFsdWUgY2Fubm90IGJlIGZvdW5kIHdpdGhpbmcgdGhpc1xuICAgIC8vVGhyb3dzIEludmFsaWRJbnB1dEV4Y2VwdGlvbiB3aGVuIGdpdmVuIHBhcmFtZXRlcnMgYXJlIG5vdCBlcXVhbCBpbiBsZW5ndGhcbiAgICBwLnN3YXBWID0gZnVuY3Rpb24odjEsIHYyKSB7XG4gICAgICB2MSA9IHRoaXMuU2V0KHYxKS5mbGF0KDIpO1xuICAgICAgdjIgPSB0aGlzLlNldCh2MikuZmxhdCgyKTtcbiAgICAgIGlmICh2MS5sZW5ndGggPT09IHYyLmxlbmd0aCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHYxLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdGhpcy5zd2FwSSh0aGlzLmluZGV4KHYxW2ldKSx0aGlzLmluZGV4KHYyW2ldKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZElucHV0RXhjZXB0aW9uKFwiUGFyYW1ldGVyIHYxIGFuZCB2MiBtdXN0IGV0aGVyIGJlIHR3byB2YWx1ZXMsIG9yIHR3byB2YWx1ZS1BcnJheXMgb2YgdGhlIHNhbWUgbGVuZ3RoLlwiKTtcbiAgICB9XG4gICAgLy9UaHJvd3MgSW52YWxpZFZhbHVlRXhjZXB0aW9uIHdoZW4gdGhlIGdpdmVuIHZhbHVlIGNhbm5vdCBiZSBmb3VuZCB3aXRoaW5nIHRoaXNcbiAgICAvL1Rocm93cyBJbnZhbGlkSW5wdXRFeGNlcHRpb24gd2hlbiBnaXZlbiBwYXJhbWV0ZXJzIGFyZSBub3QgZXF1YWwgaW4gbGVuZ3RoXG4gICAgcC5Td2FwViA9IGZ1bmN0aW9uKHYxLCB2Mikge1xuICAgICAgcmV0dXJuIHRoaXMuU2V0KHRoaXMpLnN3YXBWKHYxLCB2Mik7XG4gICAgfVxuXG4gICAgLy9UaHJvd3MgSW5kZXhPdXRPZkJvdW5kc0V4Y2VwdGlvbiB3aGVuIGdpdmVuIHBhcmFtIGlzIGRldGVjdGVkIGFzIGluZGV4IGJ1dCBvdXQgb2YgYm91bmRzIG9mIHRoaXNcbiAgICAvL1Rocm93cyBJbnZhbGlkVmFsdWVFeGNlcHRpb24gd2hlbiB0aGUgZ2l2ZW4gcGFyYW0gaXMgZGV0ZWN0ZWQgYXMgdmFsdWUgYnV0IGNhbm5vdCBiZSBmb3VuZCB3aXRoaW5nIHRoaXNcbiAgICBwLnN3YXAgPSBmdW5jdGlvbih2aTEsIHZpMikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5zd2FwSSh2aTEsIHZpMik7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChlIGluc3RhbmNlb2YgSW5kZXhPdXRPZkJvdW5kc0V4Y2VwdGlvbikgdGhpcy5zd2FwVih2aTEsIHZpMik7XG4gICAgICAgIGVsc2UgdGhyb3cgZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvL1Rocm93cyBJbmRleE91dE9mQm91bmRzRXhjZXB0aW9uIHdoZW4gZ2l2ZW4gcGFyYW0gaXMgZGV0ZWN0ZWQgYXMgaW5kZXggYnV0IG91dCBvZiBib3VuZHMgb2YgdGhpc1xuICAgIC8vVGhyb3dzIEludmFsaWRWYWx1ZUV4Y2VwdGlvbiB3aGVuIHRoZSBnaXZlbiBwYXJhbSBpcyBkZXRlY3RlZCBhcyB2YWx1ZSBidXQgY2Fubm90IGJlIGZvdW5kIHdpdGhpbmcgdGhpc1xuICAgIHAuU3dhcCA9IGZ1bmN0aW9uKHZpMSwgdmkyKSB7XG4gICAgICByZXR1cm4gdGhpcy5TZXQodGhpcykuc3dhcCh2aTEsIHZpMilcbiAgICB9XG5cbiAgICBwLnByaW9yID0gZnVuY3Rpb24oaSwgYnkgPSAxKSB7XG4gICAgICBsZXQgciA9IGkgLSBieTtcbiAgICAgIGlmIChyID49IDApIHJldHVybiB0aGlzW3JdO1xuICAgICAgcmV0dXJuIHRoaXNbdGhpcy5sZW5ndGgtKGJ5LWkpXVxuICAgIH1cbiAgICBwLm5leHQgPSBmdW5jdGlvbihpLCBieSA9IDEpIHtcbiAgICAgIGxldCByID0gaSArIGJ5O1xuICAgICAgaWYgKHIgPD0gdGhpcy5sZW5ndGgtMSkgcmV0dXJuIHRoaXNbcl07XG4gICAgICByZXR1cm4gdGhpc1tieS0oaS10aGlzLmxlbmd0aC0xKV1cbiAgICB9XG5cbiAgICBwLmluamVjdCA9IGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICB0aGlzLnNwbGljZShpbmRleCwgMCwgaXRlbSk7XG4gICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIHAuY29udGFpbnMgPSBmdW5jdGlvbiguLi52YWxzKSB7XG4gICAgICBmb3IgKGxldCB2IG9mIHZhbHMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmluY2x1ZGVzKHYpKSByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHAuZXhjbHVkZXMgPSBmdW5jdGlvbiguLi52YWxzKSB7XG4gICAgICBmb3IgKGxldCB2IG9mIHZhbHMpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5jbHVkZXModikpIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICByZXR1cm4gQXJDb25zdHJcbiAgfVxuICBpbml0LkV4Y2VwdGlvbiA9IEV4Y2VwdGlvbjtcbiAgaW5pdC5JbmRleE91dE9mQm91bmRzRXhjZXB0aW9uID0gSW5kZXhPdXRPZkJvdW5kc0V4Y2VwdGlvbjtcbiAgaW5pdC5JbnZhbGlkSW5wdXRFeGNlcHRpb24gPSBJbnZhbGlkSW5wdXRFeGNlcHRpb247XG4gIGluaXQuSW52YWxpZENvbnN0cnVjdG9yRXhjZXB0aW9uID0gSW52YWxpZENvbnN0cnVjdG9yRXhjZXB0aW9uO1xuICBpbml0LkludmFsaWRWYWx1ZUV4Y2VwdGlvbiA9IEludmFsaWRWYWx1ZUV4Y2VwdGlvbjtcbiAgLy9pbml0LnZlcnNpb24gPSBcInVua25vd25cIjtcbiAgcmV0dXJuIGluaXQ7XG59KCkpO1xuIiwiaW1wb3J0IGluaXQgZnJvbSBcIi4vLi4vZWRvbVwiO1xyXG5jb25zdCBjID0gZnVuY3Rpb24gKHF1ZXJ5KSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQuY2hpbGRzKHF1ZXJ5KTtcclxufTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcclxuICAgIGluaXQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICBsZXQgZWxlbSA9IGMoXCIjdGVzdFwiKVswXTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJkeVwiKTtcclxuICAgICAgICBlbGVtLmFuaW0oW1xyXG4gICAgICAgICAgICB7IHRyYW5zbGF0ZVg6IDIwMCwgdHJhbnNsYXRlWTogMjAwIH0sXHJcbiAgICAgICAgICAgIHsgdHJhbnNsYXRlWDogNjAwIH0sXHJcbiAgICAgICAgICAgIHsgdHJhbnNsYXRlWDogMzAwLCB0cmFuc2xhdGVZOiAwIH1cclxuICAgICAgICBdLCB7IGR1cmF0aW9uOiA0MDAwIH0pO1xyXG4gICAgfSk7XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9