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
        //TODO: check if options are taken into account (resize??)
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
// TODO: maybe rename to ElementList
//@ts-ignore
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
    on(type, listener, options) {
        return this.exec("on", arguments);
    }
    off(type, listener, options) {
        return this.exec("off", arguments);
    }
    show() {
        return this.exec("show", arguments);
    }
    removeClass(className) {
        return this.exec("removeClass", arguments);
    }
    apd(...elems) {
        return this.exec("apd", arguments);
    }
    emptyNodes() {
        return this.exec("empty", arguments);
    }
    //TODO maybe param if fade
    hide() {
        return this.exec("hide", arguments);
    }
    childs(selector = 1) {
        let ls = new NodeLs();
        this.ea((e) => {
            ls.add(...e.childs(selector));
        });
        return ls;
    }
    addClass(...classNames) {
        return this.exec("addClass", arguments);
    }
    /**
     * Returns set of results
     * @param classNames classNames to be queried with
     */
    haveClass(...classNames) {
        let end = [];
        this.ea((e) => {
            end.add(e.hasClass(...classNames));
        });
        return end;
    }
    /**
     * True if **any** class has classNames
     * @param classNames classNames to be queried with
     */
    containsClass(...classNames) {
        let has = false;
        this.ea((e) => {
            if (e.hasClass(...classNames))
                return has = true;
        });
        return has;
    }
    /**
     * True if **every** class has classNames
     * @param classNames classNames to be queried with
     */
    hasClass(...classNames) {
        let has = true;
        this.ea((e) => {
            if (!e.hasClass(...classNames))
                return has = false;
        });
        return has;
    }
    toggleClass(...classNames) {
        return this.exec("toggleClass", arguments);
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
(() => {
    let elemProto = Element.prototype;
    let lsProto = NodeLs.prototype;
    let NodeProto = Node.prototype;
    let EvTarProto = EventTarget.prototype;
    for (let k in elemProto) {
        //console.log(k);
        let d = Object.getOwnPropertyDescriptor(elemProto, k);
        if (d === undefined) {
            d = Object.getOwnPropertyDescriptor(NodeProto, k);
            if (d === undefined) {
                d = Object.getOwnPropertyDescriptor(EvTarProto, k);
            }
        }
        if (d === undefined) {
            console.warn("Unexpected change in dom api. The property \"" + k + "\" will not available in " + NodeLs.name);
        }
        else {
            //has setterGetter -> make em
            //has "has" in name -> make has, contains and have method
            //any other function, call it with params and return array of results
            console.log(k, d);
        }
    }
})();
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
    get nodes() {
        return this.p.nodes;
    }
    get listener() {
        return this.p.listener;
    }
    set nodes(node) {
        this.disable();
        //@ts-ignore
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZWRvbS50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmV6aWVyLWVhc2luZy9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Rhc2gtY2FtZWxjYXNlL2Rpc3QvZGFzaC1jYW1lbGNhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RlY29tcG9zZS1kb21tYXRyaXgvZGlzdC9kZWNvbXBvc2VET01NYXRyaXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RlbGF5L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mcm9udC1kYi9kaXN0L2RhdGFCYXNlLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3hycmF5L3hycmF5LmpzIiwid2VicGFjazovLy8uL3Rlc3QvdGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOzs7O1FBSUE7UUFDQTtRQUNBLG1EQUFtRCx3SUFBd0k7UUFDM0w7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBOzs7UUFHQTs7UUFFQTtRQUNBLGlDQUFpQzs7UUFFakM7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHdCQUF3QixrQ0FBa0M7UUFDMUQsTUFBTTtRQUNOO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBLDBDQUEwQyxvQkFBb0IsV0FBVzs7UUFFekU7UUFDQTtRQUNBO1FBQ0E7UUFDQSxnQkFBZ0IsdUJBQXVCO1FBQ3ZDOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDck1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFnQztBQUNrQztBQUNsQztBQUNrQjtBQUN4QjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBLGtCQUFrQixpT0FBOEU7QUFDaEc7QUFDQTtBQUNBLGtCQUFrQiwwT0FBbUYsUUFBUSxhQUFhLE1BQU0sWUFBWSxFQUFFO0FBQzlJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsNkNBQTZDO0FBQzdDO0FBQ0EsU0FBUyxFQUFFO0FBQ1gsOENBQThDO0FBQzlDO0FBQ0EsU0FBUyxFQUFFO0FBQ1gsZ0RBQWdEO0FBQ2hEO0FBQ0EsU0FBUyxFQUFFO0FBQ1gsNENBQTRDO0FBQzVDO0FBQ0EsU0FBUyxFQUFFO0FBQ1gsNkNBQTZDO0FBQzdDO0FBQ0EsU0FBUyxFQUFFO0FBQ1gsNENBQTRDO0FBQzVDO0FBQ0EsU0FBUyxFQUFFO0FBQ1gsNkNBQTZDO0FBQzdDO0FBQ0EsU0FBUyxFQUFFO0FBQ1gsd0NBQXdDO0FBQ3hDO0FBQ0EsU0FBUyxFQUFFO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHVCQUF1QjtBQUM3QyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxPQUFPO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRFQUE0RTtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxtQ0FBbUMsa0JBQWtCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwwREFBZTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFh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Q0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDZDQUFJO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsNENBQUs7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNNO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixtQkFBbUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGVBQWU7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDalhEO0FBQUE7QUFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFEQUFJO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQsYUFBYSxrQkFBa0I7QUFDL0IsYUFBYTtBQUNiLFlBQVksaUJBQWlCO0FBQzdCLEtBQUs7QUFDTCxDQUFDIiwiZmlsZSI6InRlc3QvZGlzdC9tYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdH07XG5cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG5cblxuIFx0Ly8gc2NyaXB0IHBhdGggZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIGpzb25wU2NyaXB0U3JjKGNodW5rSWQpIHtcbiBcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ucCArIFwidGVzdC9kaXN0L1wiICsgKHtcInZlbmRvcnN+cmVzaXplT2JzZXJ2ZXJQb2x5ZmlsbFwiOlwidmVuZG9yc35yZXNpemVPYnNlcnZlclBvbHlmaWxsXCIsXCJ2ZW5kb3JzfndlYkFuaW1hdGlvbnNBcGlQb2x5ZmlsbFwiOlwidmVuZG9yc353ZWJBbmltYXRpb25zQXBpUG9seWZpbGxcIn1bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuanNcIlxuIFx0fVxuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBwcm9taXNlcyA9IFtdO1xuXG5cbiBcdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXG4gXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgeyAvLyAwIG1lYW5zIFwiYWxyZWFkeSBpbnN0YWxsZWRcIi5cblxuIFx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG4gXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSk7XG4gXHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcbiBcdFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdO1xuIFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG4gXHRcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG4gXHRcdFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gXHRcdFx0XHR2YXIgb25TY3JpcHRDb21wbGV0ZTtcblxuIFx0XHRcdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuIFx0XHRcdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG4gXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuIFx0XHRcdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRzY3JpcHQuc3JjID0ganNvbnBTY3JpcHRTcmMoY2h1bmtJZCk7XG5cbiBcdFx0XHRcdC8vIGNyZWF0ZSBlcnJvciBiZWZvcmUgc3RhY2sgdW53b3VuZCB0byBnZXQgdXNlZnVsIHN0YWNrdHJhY2UgbGF0ZXJcbiBcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuIFx0XHRcdFx0b25TY3JpcHRDb21wbGV0ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuIFx0XHRcdFx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG4gXHRcdFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG4gXHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiBcdFx0XHRcdFx0dmFyIGNodW5rID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRcdFx0XHRpZihjaHVuayAhPT0gMCkge1xuIFx0XHRcdFx0XHRcdGlmKGNodW5rKSB7XG4gXHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuIFx0XHRcdFx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcbiBcdFx0XHRcdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcbiBcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcbiBcdFx0XHRcdFx0XHRcdGNodW5rWzFdKGVycm9yKTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9O1xuIFx0XHRcdFx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gXHRcdFx0XHRcdG9uU2NyaXB0Q29tcGxldGUoeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pO1xuIFx0XHRcdFx0fSwgMTIwMDAwKTtcbiBcdFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGU7XG4gXHRcdFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBvbiBlcnJvciBmdW5jdGlvbiBmb3IgYXN5bmMgbG9hZGluZ1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHRocm93IGVycjsgfTtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3Rlc3QvdGVzdC50c1wiKTtcbiIsImltcG9ydCBiYXogZnJvbSBcImJlemllci1lYXNpbmdcIjtcclxuaW1wb3J0IHsgY2FtZWxDYXNlVG9EYXNoLCBkYXNoVG9DYW1lbENhc2UgfSBmcm9tIFwiZGFzaC1jYW1lbGNhc2VcIjtcclxuaW1wb3J0IHsgRGF0YSB9IGZyb20gXCJmcm9udC1kYlwiO1xyXG5pbXBvcnQgZGVjb21wb3NlTWF0cml4IGZyb20gXCJkZWNvbXBvc2UtZG9tbWF0cml4XCI7XHJcbmltcG9ydCBkZWxheSBmcm9tIFwiZGVsYXlcIjtcclxuLy8gVE9ETzogbWFrZSBhbmltIG9ubHkgYXZhaWxhYmxlIG9uIEhUTUxFbGVtZW50IHNpbmNlIGFuaW1hdGUgaXMgbm90IHN1cHBvcnRlZCBvbiBFdmVudFRyYWdldFxyXG4vLyBJREVBIG1vZGlmeSBwcm9taXNlIHJldHVybmVkIGJ5IGFuaW0gc28gdGhhdCB5b3UgY2FuIGdpdmUgYSBzdHJpbmcgYXMgdGhlbiBhcmcgd2hpY2ggZ2V0cyBleGVjdHV0ZWQgd2l0aCB0aGlzIGNvbnRleHRcclxuLy9AdHMtaWdub3JlXHJcbmxldCBSZXNPYnM7XHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBsZXQgcHJvbXMgPSBbXTtcclxuICAgIGlmIChFbGVtZW50LnByb3RvdHlwZS5hbmltYXRlID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgcHJvbXMuYWRkKGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIndlYkFuaW1hdGlvbnNBcGlQb2x5ZmlsbFwiICovIFwid2ViLWFuaW1hdGlvbnMtanNcIikpO1xyXG4gICAgLy9AdHMtaWdub3JlXHJcbiAgICBpZiAod2luZG93LlJlc2l6ZU9ic2VydmVyID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgcHJvbXMuYWRkKGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInJlc2l6ZU9ic2VydmVyUG9seWZpbGxcIiAqLyBcInJlc2l6ZS1vYnNlcnZlci1wb2x5ZmlsbFwiKS50aGVuKCh7IGRlZmF1bHQ6IHIgfSkgPT4geyBSZXNPYnMgPSByOyB9KSk7XHJcbiAgICAvL0B0cy1pZ25vcmVcclxuICAgIGVsc2VcclxuICAgICAgICBSZXNPYnMgPSB3aW5kb3cuUmVzaXplT2JzZXJ2ZXI7XHJcbiAgICBhd2FpdCBQcm9taXNlLmFsbChwcm9tcyk7XHJcbiAgICBsZXQgcCA9IEV2ZW50VGFyZ2V0LnByb3RvdHlwZTtcclxuICAgIHAuaW5zZXJ0QWZ0ZXIgPSBmdW5jdGlvbiAobmV3Tm9kZSwgcmVmZXJlbmNlTm9kZSkge1xyXG4gICAgICAgIGlmIChyZWZlcmVuY2VOb2RlLnBhcmVudCAhPT0gdGhpcylcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBpcyBub3QgdGhlIHBhcmVudCBvZiByZWZlcmVuY2VOb2RlLlwiKTtcclxuICAgICAgICBsZXQgc2liID0gcmVmZXJlbmNlTm9kZS5uZXh0U2libGluZztcclxuICAgICAgICBpZiAoc2liICE9PSBudWxsKVxyXG4gICAgICAgICAgICB0aGlzLmluc2VydEJlZm9yZShuZXdOb2RlLCBzaWIpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5hcGQobmV3Tm9kZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgKCgpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhVHJhbnNmZXJzID0ge307XHJcbiAgICAgICAgbGV0IGRhdGFUcmFuc2ZlcklEID0gMDtcclxuICAgICAgICBsZXQgcmVzaXplTGlzdGVuZXIgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgLy9vbmx5IGluaXQgd2hlbiBuZWVkZWQgc2luY2UgdGhpcyBoZWF2aWx5IGNvbnN1bWVzIHJlc291cmNlcyAoY3B1KS5cclxuICAgICAgICBsZXQgb2JzO1xyXG4gICAgICAgIGxldCBvYnNVbmRlZmluZWQgPSB0cnVlO1xyXG4gICAgICAgIGZ1bmN0aW9uIGluaXRSZXNPYnMoKSB7XHJcbiAgICAgICAgICAgIG9ic1VuZGVmaW5lZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBvYnMgPSBuZXcgUmVzT2JzKChlbGVtZW50cykgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudHMuZWEoKGVsZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNpemVMaXN0ZW5lci5nZXQoZWxlbS50YXJnZXQpLmZvckVhY2goKGFjdHVhbEZ1bmMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsRnVuYygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZXZlbnRMaXN0ZW5lckluZGV4ID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIGNvbnN0IGtleSA9IFwiYWR2YW5jZWREYXRhVHJhbnNmZXJlXCI7XHJcbiAgICAgICAgLy9UT0RPOiBkb2N1bWVudCAvIHdpbmRvdy5vbihcInJlYWR5XCIpXHJcbiAgICAgICAgLy9UT0RPOiByZXR1cm4gZGF0YSAvIG9yIHByb21pc2Ugd2hlbiBubyBjYiBpcyBnaXZlblxyXG4gICAgICAgIC8vVE9ETzogY2hlY2sgaWYgb3B0aW9ucyBhcmUgdGFrZW4gaW50byBhY2NvdW50IChyZXNpemU/PylcclxuICAgICAgICBwLm9uID0gZnVuY3Rpb24gKC4uLmEpIHtcclxuICAgICAgICAgICAgbGV0IGlzUmVzaXplID0gYVswXSA9PT0gXCJyZXNpemVcIjtcclxuICAgICAgICAgICAgaWYgKGlzUmVzaXplICYmIHRoaXMgIT09IHdpbmRvdykge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9ic1VuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgICAgICBpbml0UmVzT2JzKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWFwID0gcmVzaXplTGlzdGVuZXIuZ2V0KHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1hcCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JzLm9ic2VydmUodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFwID0gbmV3IE1hcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc2l6ZUxpc3RlbmVyLnNldCh0aGlzLCBtYXApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbWFwLnNldChhWzFdLCBhWzFdLmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IGFjdHVhbExpc3RlbmVyO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzUmVzaXplKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYVsxXS5iaW5kKHRoaXMpKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBhY3R1YWxMaXN0ZW5lciA9IGFbMV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChhWzBdID09PSBcImRyYWdzdGFydFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVRyYW5zZmVySUQrKztcclxuICAgICAgICAgICAgICAgICAgICBhY3R1YWxMaXN0ZW5lciA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc2V0RGF0YSA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhVHJhbnNmZXJzW2RhdGFUcmFuc2ZlcklEXSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKGtleSwgZGF0YVRyYW5zZmVySUQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhWzFdKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChhWzBdID09PSBcImRyb3BcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdHVhbExpc3RlbmVyID0gKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5nZXREYXRhID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlkID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShrZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZvdW5kID0gaWQgIT09IFwiXCIgPyBkYXRhVHJhbnNmZXJzW2lkXSA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgZGF0YVRyYW5zZmVyc1tpZF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZm91bmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFbMV0oZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdHVhbExpc3RlbmVyID0gYVsxXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGFjdHVhbExpc3RlbmVyID0gYWN0dWFsTGlzdGVuZXIuYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIGxldCB0aGF0ID0gZXZlbnRMaXN0ZW5lckluZGV4LmdldCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIGxldCBvID0geyBldmVudDogYVswXSwgYWN0dWFsTGlzdGVuZXIsIHVzZXJMaXN0ZW5lcjogYVsxXSwgb3B0aW9uczogYVsyXSB9O1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgICAgICBldmVudExpc3RlbmVySW5kZXguc2V0KHRoaXMsIFtvXSk7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5hZGQobyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoYVswXSwgYWN0dWFsTGlzdGVuZXIsIGFbMl0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcC5vZmYgPSBmdW5jdGlvbiAoLi4uYSkge1xyXG4gICAgICAgICAgICBpZiAoYVswXSA9PT0gXCJyZXNpemVcIiAmJiB0aGlzICE9PSB3aW5kb3cpIHtcclxuICAgICAgICAgICAgICAgIGlmIChvYnNVbmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdFJlc09icygpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG1hcCA9IHJlc2l6ZUxpc3RlbmVyLmdldCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIGlmIChtYXAgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcC5kZWxldGUoYVsxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hcC5zaXplID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9icy51bm9ic2VydmUodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc2l6ZUxpc3RlbmVyLmRlbGV0ZSh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdG9CZVJtID0gW107XHJcbiAgICAgICAgICAgICAgICBsZXQgdGhhdCA9IGV2ZW50TGlzdGVuZXJJbmRleC5nZXQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhhdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFbMF0gIT09IHVuZGVmaW5lZCAmJiBhWzFdICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5lYSgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUuZXZlbnQgPT09IGFbMF0gJiYgZS51c2VyTGlzdGVuZXIgPT09IGFbMV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9CZVJtLmFkZChlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmVhKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5ldmVudCA9PT0gYVswXSB8fCBlLnVzZXJMaXN0ZW5lciA9PT0gYVsxXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b0JlUm0uYWRkKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdG9CZVJtLmVhKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihlLmV2ZW50LCBlLmFjdHVhbExpc3RlbmVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5ybShlKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhhdC5lbXB0eSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRMaXN0ZW5lckluZGV4LmRlbGV0ZSh0aGlzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9O1xyXG4gICAgfSkoKTtcclxuICAgIHAubGlzdGVuZXIgPSBwLmxpc3RlbiA9IHAubHMgPSBmdW5jdGlvbiAoZXZlbnQsIGxpc3RlbmVyLCBwYXRjaCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVGVsKHRoaXMsIGV2ZW50LCBsaXN0ZW5lciwgcGF0Y2gpO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwLCBcImh0bWxcIiwge1xyXG4gICAgICAgIGdldCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5uZXJIVE1MO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0KHRvKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5uZXJIVE1MID0gdG87XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocCwgXCJpbm5lclwiLCB7XHJcbiAgICAgICAgc2V0KHRvKSB7XHJcbiAgICAgICAgICAgIGlmICh0byBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmh0bWwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcGQoLi4udG8pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRvIGluc3RhbmNlb2YgRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5odG1sID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kKHRvKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlubmVySFRNTCA9IHRvO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcC5hZGRDbGFzcyA9IGZ1bmN0aW9uICguLi5jbGFzc05hbWUpIHtcclxuICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBwLnJlbW92ZUNsYXNzID0gZnVuY3Rpb24gKC4uLmNsYXNzTmFtZSkge1xyXG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSguLi5jbGFzc05hbWUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIHAuaGFzQ2xhc3MgPSBmdW5jdGlvbiAoLi4uY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgbGV0IGhhcyA9IHRydWU7XHJcbiAgICAgICAgY2xhc3NOYW1lLmVhKChjbHMpID0+IHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmNsYXNzTGlzdC5jb250YWlucyhjbHMpKVxyXG4gICAgICAgICAgICAgICAgaGFzID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGhhcztcclxuICAgIH07XHJcbiAgICBwLnRvZ2dsZUNsYXNzID0gZnVuY3Rpb24gKC4uLmNsYXNzTmFtZSkge1xyXG4gICAgICAgIGNsYXNzTmFtZS5lYSgoY2xzKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc0NsYXNzKGNscykpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUNsYXNzKGNscyk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ2xhc3MoY2xzKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBwLmFwZCA9IGZ1bmN0aW9uICguLi5lbGVtcykge1xyXG4gICAgICAgIHRoaXMuYXBwZW5kKC4uLmVsZW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBwLmVtcHR5Tm9kZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5odG1sID0gXCJcIjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBwLmhpZGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBwLnNob3cgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgcC5jaGlsZHMgPSBmdW5jdGlvbiAoc2VsZWN0b3JfZGVwdGggPSAxKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBzZWxlY3Rvcl9kZXB0aCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBOb2RlTHMoLi4udGhpcy5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yX2RlcHRoKSk7XHJcbiAgICAgICAgZWxzZSBpZiAoc2VsZWN0b3JfZGVwdGggPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTm9kZUxzKC4uLnRoaXMuY2hpbGRyZW4sIC4uLm5ldyBOb2RlTHMoLi4udGhpcy5jaGlsZHJlbikuY2hpbGRzKHNlbGVjdG9yX2RlcHRoIC0gMSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IE5vZGVMcygpO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwLCBcImhlaWdodFwiLCB7XHJcbiAgICAgICAgZ2V0KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jc3MoXCJoZWlnaHRcIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQodG8pIHtcclxuICAgICAgICAgICAgdGhpcy5jc3MoXCJoZWlnaHRcIiwgdG8pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHAsIFwid2lkdGhcIiwge1xyXG4gICAgICAgIGdldCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3NzKFwid2lkdGhcIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQodG8pIHtcclxuICAgICAgICAgICAgdGhpcy5jc3MoXCJ3aWR0aFwiLCB0byk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocCwgXCJvZmZzZXRSaWdodFwiLCB7IGdldCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub2Zmc2V0TGVmdCArIHRoaXMub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgfSB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwLCBcIm9mZnNldEJvdHRvbVwiLCB7IGdldCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub2Zmc2V0VG9wICsgdGhpcy5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgfSB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwLCBcImFic29sdXRlT2Zmc2V0XCIsIHsgZ2V0KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICB9IH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHAsIFwib3V0ZXJXaWR0aFwiLCB7IGdldCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgfSB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwLCBcIm91dGVySGVpZ2h0XCIsIHsgZ2V0KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgfSB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwLCBcImlubmVyV2lkdGhcIiwgeyBnZXQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNsaWVudFdpZHRoO1xyXG4gICAgICAgIH0gfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocCwgXCJpbm5lckhlaWdodFwiLCB7IGdldCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIH0gfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocCwgXCJwYXJlbnRcIiwgeyBnZXQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgfSB9KTtcclxuICAgIGxldCBmb3JtYXRTdHlsZSA9ICgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGpvaW5Db21tYSA9IFwiLFwiO1xyXG4gICAgICAgIGxldCBqb2luU3BhY2UgPSBcIiBcIjtcclxuICAgICAgICBmdW5jdGlvbiBmb3JtYXRTdHlsZShwcm9wLCBzdHlsZSwgdGhhdCkge1xyXG4gICAgICAgICAgICBsZXQgZW5kO1xyXG4gICAgICAgICAgICBsZXQgdHJhbnNmb3JtQXBwbGllcyA9IFRyYW5zZm9ybVByb3AuYXBwbGllcyhwcm9wKTtcclxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgIGxldCBpc0FyID0gc3R5bGUgaW5zdGFuY2VvZiBBcnJheTtcclxuICAgICAgICAgICAgaWYgKGlzQXIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBhciA9IFtdO1xyXG4gICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBzdGwgb2Ygc3R5bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBhci5hZGQoZm9ybWF0U3RsKHByb3AsIHN0bCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZW5kID0gYXIuam9pbih0cmFuc2Zvcm1BcHBsaWVzID8gam9pbkNvbW1hIDogam9pblNwYWNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBlbmQgPSBmb3JtYXRTdGwocHJvcCwgc3R5bGUpO1xyXG4gICAgICAgICAgICBpZiAodGhhdCBpbnN0YW5jZW9mIFRyYW5zZm9ybVByb3ApIHtcclxuICAgICAgICAgICAgICAgIGlmICh0cmFuc2Zvcm1BcHBsaWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdFtwcm9wXSA9IGVuZDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhhdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZW5kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoYXQgaW5zdGFuY2VvZiBFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHJhbnNmb3JtQXBwbGllcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBtZSA9IGdldFRyYW5zZm9ybVByb3BzKHRoYXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgICAgIG1lW3Byb3BdID0gZW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZW5kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzcGVjaWFsRml4ID0ge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiBcIlwiLFxyXG4gICAgICAgICAgICBvZmZzZXQ6IFwiXCIsXHJcbiAgICAgICAgICAgIGdyaWRBcmVhOiBcIlwiLFxyXG4gICAgICAgICAgICBmbGV4R3JvdzogXCJcIixcclxuICAgICAgICAgICAgekluZGV4OiBcIlwiLFxyXG4gICAgICAgICAgICBza2V3OiBcImRlZ1wiLFxyXG4gICAgICAgICAgICBza2V3WDogXCJkZWdcIixcclxuICAgICAgICAgICAgc2tld1k6IFwiZGVnXCIsXHJcbiAgICAgICAgICAgIHJvdGF0ZTogXCJkZWdcIixcclxuICAgICAgICAgICAgcm90YXRlM2Q6IFwiZGVnXCIsXHJcbiAgICAgICAgICAgIHJvdGF0ZVg6IFwiZGVnXCIsXHJcbiAgICAgICAgICAgIHJvdGF0ZVk6IFwiZGVnXCIsXHJcbiAgICAgICAgICAgIHJvdGF0ZVo6IFwiZGVnXCIsXHJcbiAgICAgICAgICAgIHNjYWxlOiBcIlwiLFxyXG4gICAgICAgICAgICBzY2FsZTNkOiBcIlwiLFxyXG4gICAgICAgICAgICBzY2FsZVg6IFwiXCIsXHJcbiAgICAgICAgICAgIHNjYWxlWTogXCJcIixcclxuICAgICAgICAgICAgc2NhbGVaOiBcIlwiLFxyXG4gICAgICAgICAgICBtYXRyaXg6IFwiXCIsXHJcbiAgICAgICAgICAgIG1hdHJpeDNkOiBcIlwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IChzdHlsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzdHlsZSA9PT0gXCJudW1iZXJcIilcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBcIlVuZXhwZWN0ZWQgc3R5bGVcIjtcclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZS5zdWJzdHJpbmcoMCwgNCkgIT09IFwidXJsKFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSA9IFwidXJsKFwiICsgc3R5bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxjID0gc3R5bGUuY2hhckF0KHN0eWxlLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsYyAhPT0gXCIpXCIgJiYgbGMgIT09IFwiO1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSArPSBcIilcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBzdHlsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbGV0IGFibm9ybWFsS2V5ID0gT2JqZWN0LmtleXMoc3BlY2lhbEZpeCk7XHJcbiAgICAgICAgZnVuY3Rpb24gZm9ybWF0U3RsKHByb3AsIHN0eWxlKSB7XHJcbiAgICAgICAgICAgIGxldCBzcGVjaWFsTWV0aWFsID0gIXByb3AgfHwgYWJub3JtYWxLZXkuaW5jbHVkZXMocHJvcCk7XHJcbiAgICAgICAgICAgIGlmIChzcGVjaWFsTWV0aWFsKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZml4ID0gc3BlY2lhbEZpeFtwcm9wXTtcclxuICAgICAgICAgICAgICAgIGlmICghZml4KVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdHlsZS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGZpeCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc3R5bGUgPT09IFwibnVtYmVyXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdHlsZSArIGZpeDtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdHlsZS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmaXgoc3R5bGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzdHlsZSA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3R5bGU7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0eWxlICsgXCJweFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmb3JtYXRTdHlsZTtcclxuICAgIH0pKCk7XHJcbiAgICBsZXQgdHJhbnNmcm9tUHJvcHMgPSBuZXcgTWFwKCk7XHJcbiAgICAvL0B0cy1pZ25vcmVcclxuICAgIGdsb2JhbC50cmFuc2Zyb21Qcm9wcyA9IHRyYW5zZnJvbVByb3BzO1xyXG4gICAgZnVuY3Rpb24gZ2V0VHJhbnNmb3JtUHJvcHModGhhdCkge1xyXG4gICAgICAgIGxldCBtZSA9IHRyYW5zZnJvbVByb3BzLmdldCh0aGF0KTtcclxuICAgICAgICBpZiAobWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBtZSA9IG5ldyBUcmFuc2Zvcm1Qcm9wKHRoYXQuY3NzKFwidHJhbnNmb3JtXCIpKTtcclxuICAgICAgICAgICAgdHJhbnNmcm9tUHJvcHMuc2V0KHRoYXQsIG1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1lO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZm9ybWF0Q3NzKGNzcywgdGhhdCkge1xyXG4gICAgICAgIGxldCB0cmFuc2Zvcm1Qcm9wO1xyXG4gICAgICAgIGlmICh0aGF0ID09PSB0cnVlKVxyXG4gICAgICAgICAgICB0aGF0ID0gbmV3IFRyYW5zZm9ybVByb3AoKTtcclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gY3NzKSB7XHJcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBsZXQgcyA9IGZvcm1hdFN0eWxlKGtleSwgY3NzW2tleV0sIHRoYXQpO1xyXG4gICAgICAgICAgICBpZiAoIShzIGluc3RhbmNlb2YgVHJhbnNmb3JtUHJvcCkpXHJcbiAgICAgICAgICAgICAgICBjc3Nba2V5XSA9IHM7XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIGNzc1trZXldO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtUHJvcCA9IHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRyYW5zZm9ybVByb3ApXHJcbiAgICAgICAgICAgIGNzcy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1Qcm9wLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgcmV0dXJuIHRyYW5zZm9ybVByb3A7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBmb3JtYXRBbmltYXRpb25Dc3MoY3NzLCB0aGF0KSB7XHJcbiAgICAgICAgaWYgKFwib2Zmc2V0XCIgaW4gY3NzKSB7XHJcbiAgICAgICAgICAgIGxldCB7IG9mZnNldCB9ID0gY3NzO1xyXG4gICAgICAgICAgICBkZWxldGUgY3NzLm9mZnNldDtcclxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgIGxldCBlbmQgPSBmb3JtYXRDc3MoY3NzLCB0aGF0KTtcclxuICAgICAgICAgICAgY3NzLm9mZnNldCA9IG9mZnNldDtcclxuICAgICAgICAgICAgcmV0dXJuIGVuZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0Q3NzKGNzcywgdGhhdCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzcGxpdFRyYW5zZm9ybVByb3BzSW50b0tleVZhbCh2YWwpIHtcclxuICAgICAgICB2YWwgPSB2YWwucmVwbGFjZSgvKCB8XFx0KS9nLCBcIlwiKTtcclxuICAgICAgICBsZXQgYXIgPSB2YWwuc3BsaXQoXCIpXCIpO1xyXG4gICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgIGFyLnJtSShhci5sZW5ndGggLSAxKTtcclxuICAgICAgICBsZXQgZW5kID0gW107XHJcbiAgICAgICAgYXIuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbCA9IGUuc3BsaXQoXCIoXCIpO1xyXG4gICAgICAgICAgICBlbmQucHVzaCh7IGtleTogbFswXSwgdmFsOiBsWzFdIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBlbmQ7XHJcbiAgICB9XHJcbiAgICBsZXQgc3BsaXRWYWx1ZUZyb21Vbml0ID0gKCgpID0+IHtcclxuICAgICAgICBsZXQgdmFsO1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBzcGxpdFZhbHVlRnJvbVVuaXQodmFsdWUpIHtcclxuICAgICAgICAgICAgdmFsID0gdmFsdWU7XHJcbiAgICAgICAgICAgIGxldCBtYXggPSB2YWwubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobWF4KTtcclxuICAgICAgICAgICAgbGV0IGVkZ2UgPSBtYXggLSAyO1xyXG4gICAgICAgICAgICBpZiAoIWlzRWRnZShlZGdlKSkge1xyXG4gICAgICAgICAgICAgICAgZWRnZSA9IG1heCAtIDM7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzRWRnZShlZGdlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVkZ2UgPSBtYXggLSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNFZGdlKGVkZ2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2UgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNFZGdlKGVkZ2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZ290SXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBtYXggLSA0OyBpIDwgMDsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzRWRnZShpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnb3RJdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnb3RJdCA9PT0gZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgXCJJbnZhbGlkVW5hYmxlIHRvIGZpbmQgVW5pdCAtIFZhbHVlIFNlcGVyYXRpb24gaW4gXFxcIlwiICsgdmFsdWUgKyBcIlxcXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlZGdlKys7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbDogK3ZhbC5zdWJzdHIoMCwgZWRnZSksIHVuaXQ6IHZhbC5zdWJzdHIoZWRnZSkgfTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZ1bmN0aW9uIGlzRWRnZShhdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gIWlzTmFOKCt2YWxbYXRdKSAmJiBpc05hTigrdmFsW2F0ICsgMV0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pKCk7XHJcbiAgICBjbGFzcyBUcmFuc2Zvcm1Qcm9wIHtcclxuICAgICAgICBjb25zdHJ1Y3Rvcih0cmFuc2Zvcm1fY2xvbmUpIHtcclxuICAgICAgICAgICAgdGhpcy5wcmltaXRpdmVzID0ge307XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JlID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIGlmICh0cmFuc2Zvcm1fY2xvbmUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0cmFuc2Zvcm1fY2xvbmUgaW5zdGFuY2VvZiBUcmFuc2Zvcm1Qcm9wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgayBpbiB0cmFuc2Zvcm1fY2xvbmUucHJpbWl0aXZlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByaW1pdGl2ZXNba10gPSB0cmFuc2Zvcm1fY2xvbmUucHJpbWl0aXZlc1trXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VkID0gdHJhbnNmb3JtX2Nsb25lLmNoYW5nZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZSA9IHRyYW5zZm9ybV9jbG9uZS5zdG9yZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYW5zZm9ybSA9IHRyYW5zZm9ybV9jbG9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXQgdHJhbnNsYXRlKHRvKSB7XHJcbiAgICAgICAgICAgIGlmICghKHRvIGluc3RhbmNlb2YgQXJyYXkpKVxyXG4gICAgICAgICAgICAgICAgdG8gPSB0by5zcGxpdChcIixcIik7XHJcbiAgICAgICAgICAgIHRoaXMuYWxsb2NhdGUodG8sIFtcInRyYW5zbGF0ZVhcIiwgXCJ0cmFuc2xhdGVZXCIsIFwidHJhbnNsYXRlWlwiXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFRPRE8gbWF5YmUgc3BsaXQgdGhpcyB1cCBhbmQgcmV0dXJuIGEgbnVtYmVyW10gb2YgdGhlIHRyYW5zbGF0ZXM7IHRoaXMgd291bGQgaGF2ZSB0byBiZSBjb25zaXRlbnRseSBpbXBsZW1lbnRlZCB0aHJvdWdoIGFsbCBjc3MgKGxpa2UgbWFyZ2luIG9yIHBhZGRpbmcpXHJcbiAgICAgICAgZ2V0IHRyYW5zbGF0ZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tYmluZVZhbHMoXCJ0cmFuc2xhdGVYXCIsIFwidHJhbnNsYXRlWVwiLCBcInRyYW5zbGF0ZVpcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldCBzY2FsZSh0bykge1xyXG4gICAgICAgICAgICBpZiAoISh0byBpbnN0YW5jZW9mIEFycmF5KSlcclxuICAgICAgICAgICAgICAgIHRvID0gdG8uc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgICAgICBpZiAodG9bMF0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRvWzFdICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodG9bMl0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjYWxlWCA9IHRvWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjYWxlWSA9IHRvWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjYWxlWiA9IHRvWzJdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2FsZVggPSB0b1swXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2FsZVkgPSB0b1sxXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjYWxlWCA9IHRvWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NhbGVZID0gdG9bMF07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2FsZVogPSB0b1swXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBnZXQgc2NhbGUoKSB7XHJcbiAgICAgICAgICAgIGxldCBzY2FsZVggPSB0aGlzLnNjYWxlWDtcclxuICAgICAgICAgICAgbGV0IHNjYWxlWSA9IHRoaXMuc2NhbGVZO1xyXG4gICAgICAgICAgICBsZXQgc2NhbGVaID0gdGhpcy5zY2FsZVo7XHJcbiAgICAgICAgICAgIGlmIChzY2FsZVggPT09IHNjYWxlWSAmJiBzY2FsZVkgPT09IHNjYWxlWilcclxuICAgICAgICAgICAgICAgIHJldHVybiBzY2FsZVg7XHJcbiAgICAgICAgICAgIHJldHVybiBbc2NhbGVYLCBzY2FsZVksIHNjYWxlWl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldCBza2V3KHRvKSB7XHJcbiAgICAgICAgICAgIGlmICghKHRvIGluc3RhbmNlb2YgQXJyYXkpKVxyXG4gICAgICAgICAgICAgICAgdG8gPSB0by5zcGxpdChcIixcIik7XHJcbiAgICAgICAgICAgIHRoaXMuYWxsb2NhdGUodG8sIFtcInNrZXdYXCIsIFwic2tld1lcIl0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnZXQgc2tldygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tYmluZVZhbHMoXCJza2V3WFwiLCBcInNrZXdZXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXQgbWF0cml4KHRvKSB7XHJcbiAgICAgICAgICAgIGlmICh0byBpbnN0YW5jZW9mIEFycmF5KVxyXG4gICAgICAgICAgICAgICAgdG8gPSB0by5qb2luKFwiLFwiKTtcclxuICAgICAgICAgICAgdGhpcy5kZWNvbXBvc2VNYXRyaXgoXCJtYXRyaXgoXCIgKyB0byArIFwiKVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0IG1hdHJpeDNkKHRvKSB7XHJcbiAgICAgICAgICAgIGlmICh0byBpbnN0YW5jZW9mIEFycmF5KVxyXG4gICAgICAgICAgICAgICAgdG8gPSB0by5qb2luKFwiLFwiKTtcclxuICAgICAgICAgICAgdGhpcy5kZWNvbXBvc2VNYXRyaXgoXCJtYXRyaXgzZChcIiArIHRvICsgXCIpXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXQgdHJhbnNmb3JtKHRvKSB7XHJcbiAgICAgICAgICAgIGlmICh0byA9PT0gXCJub25lXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGxldCBhciA9IHNwbGl0VHJhbnNmb3JtUHJvcHNJbnRvS2V5VmFsKHRvKTtcclxuICAgICAgICAgICAgbGV0IG9yZGVyZWQgPSB7fTtcclxuICAgICAgICAgICAgYXIuZWEoKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB0ID0gb3JkZXJlZFtlLmtleV0gPT09IHVuZGVmaW5lZCA/IG9yZGVyZWRbZS5rZXldID0gW10gOiBvcmRlcmVkW2Uua2V5XTtcclxuICAgICAgICAgICAgICAgIHQuYWRkKGUudmFsKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGsgaW4gb3JkZXJlZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKFRyYW5zZm9ybVByb3AudW1icmVsbGFUcmFuc2Zvcm1Qcm9wcy5pbmNsdWRlcyhrKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVjb21wb3NlTWF0cml4KHRvKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgayBpbiBvcmRlcmVkKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdCA9IG9yZGVyZWRba107XHJcbiAgICAgICAgICAgICAgICBpZiAodC5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzW2tdID0gdC5maXJzdDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICghKHQgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3BsaXQgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB0LmVhKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwbGl0LmFkZChzcGxpdFZhbHVlRnJvbVVuaXQoZS52YWwpKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdW5pdCA9IHNwbGl0LmZpcnN0LnVuaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNhbkNvbXBvc2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3BsaXQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNwbGl0W2ldLnVuaXQgIT09IHVuaXQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5Db21wb3NlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYW5Db21wb3NlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWwgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGxpdC5lYSgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsICs9IGUudmFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1trXSA9IHZhbCArIHVuaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBvcmRlcmVkW2tdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgcmVzdCA9IFwiXCI7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGsgaW4gb3JkZXJlZCkge1xyXG4gICAgICAgICAgICAgICAgcmVzdCArPSBrICsgXCIoXCIgKyBvcmRlcmVkW2tdICsgXCIpIFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZGVjb21wb3NlTWF0cml4KHJlc3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWNvbXBvc2VNYXRyaXgodG8pIHtcclxuICAgICAgICAgICAgbGV0IGRlYyA9IGRlY29tcG9zZU1hdHJpeChuZXcgRE9NTWF0cml4KHRvKSk7XHJcbiAgICAgICAgICAgIGxldCBza2V3ID0gZGVjLnNrZXdYWTtcclxuICAgICAgICAgICAgZGVsZXRlIGRlYy5za2V3WFk7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBkZWMuc2tld1haO1xyXG4gICAgICAgICAgICBkZWxldGUgZGVjLnNrZXdZWjtcclxuICAgICAgICAgICAgZm9yIChsZXQgZCBpbiBkZWMpIHtcclxuICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgaWYgKGRlY1tkXSAhPT0gVHJhbnNmb3JtUHJvcC5wcmltaXRpdmVEZWZhdWx0c1tkXSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzW2RdID0gZm9ybWF0U3R5bGUoZCwgZGVjW2RdLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNrZXcgIT09IFRyYW5zZm9ybVByb3AucHJpbWl0aXZlRGVmYXVsdHMuc2tld1gpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNrZXdYID0gZm9ybWF0U3R5bGUoXCJza2V3WFwiLCBza2V3LCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbWJpbmVWYWxzKC4uLnZhbHMpIHtcclxuICAgICAgICAgICAgbGV0IHMgPSBcIlwiO1xyXG4gICAgICAgICAgICB2YWxzLmVhKCh2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBlID0gdGhpc1t2YWxdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGUgIT09IFRyYW5zZm9ybVByb3AucHJpbWl0aXZlRGVmYXVsdHNbdmFsXSArIHVuaXRJbmRleFt2YWxdKVxyXG4gICAgICAgICAgICAgICAgICAgIHMgKz0gZSArIFwiLFwiO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHMubGVuZ3RoID09PSAwID8gVHJhbnNmb3JtUHJvcC5wcmltaXRpdmVEZWZhdWx0c1t2YWxzLmZpcnN0XSArIHVuaXRJbmRleFt2YWxzLmZpcnN0XSA6IHMuc3Vic3RyKDAsIHMubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFsbG9jYXRlKGlucHV0LCBmdW5jcykge1xyXG4gICAgICAgICAgICBmdW5jcy5lYSgoZnVuYywgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXRbaV0gIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzW2Z1bmNdID0gaW5wdXRbaV07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0b1N0cmluZygpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2hhbmdlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHByb3Agb2YgVHJhbnNmb3JtUHJvcC5wcmltaXRpdmVUcmFuc2Zvcm1Qcm9wcykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgTVVTVCBmb3JtYXRlZCBpbiB0aGUgZm9sbG93aW5nIG9yZGVyIHRvIGFjaGl2ZSBjb25zaXRlbnQgcmVzdWx0cyBbdHJhbnNsYXRlIHJvdGF0ZSBza2V3IHNjYWxlXVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9wIGluIHRoaXMucHJpbWl0aXZlcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJpbWl0aXZlc1twcm9wXSAhPT0gVHJhbnNmb3JtUHJvcC5wcmltaXRpdmVEZWZhdWx0c1twcm9wXSArIHVuaXRJbmRleFtwcm9wXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUgKz0gcHJvcCArIFRyYW5zZm9ybVByb3AuY2xhbXBPcGVuICsgdGhpcy5wcmltaXRpdmVzW3Byb3BdICsgVHJhbnNmb3JtUHJvcC5jbGFtcENsb3NlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0b3JlIHx8IFwibm9uZVwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFRyYW5zZm9ybVByb3AucHJpbWl0aXZlRGVmYXVsdHMgPSB7XHJcbiAgICAgICAgdHJhbnNsYXRlWDogMCxcclxuICAgICAgICB0cmFuc2xhdGVZOiAwLFxyXG4gICAgICAgIHRyYW5zbGF0ZVo6IDAsXHJcbiAgICAgICAgcm90YXRlWDogMCxcclxuICAgICAgICByb3RhdGVZOiAwLFxyXG4gICAgICAgIHJvdGF0ZVo6IDAsXHJcbiAgICAgICAgc2tld1g6IDAsXHJcbiAgICAgICAgc2tld1k6IDAsXHJcbiAgICAgICAgc2NhbGVYOiAxLFxyXG4gICAgICAgIHNjYWxlWTogMSxcclxuICAgICAgICBzY2FsZVo6IDFcclxuICAgIH07XHJcbiAgICBUcmFuc2Zvcm1Qcm9wLnByaW1pdGl2ZVRyYW5zZm9ybVByb3BzID0gT2JqZWN0LmtleXMoVHJhbnNmb3JtUHJvcC5wcmltaXRpdmVEZWZhdWx0cyk7XHJcbiAgICBUcmFuc2Zvcm1Qcm9wLnVtYnJlbGxhVHJhbnNmb3JtUHJvcHMgPSBbXHJcbiAgICAgICAgXCJyb3RhdGVcIiwgXCJyb3RhdGUzZFwiLCBcInNjYWxlXCIsIFwic2NhbGUzZFwiLCBcInRyYW5zbGF0ZVwiLCBcInRyYW5zbGF0ZTNkXCIsIFwic2tld1wiLCBcIm1hdHJpeFwiLCBcIm1hdHJpeDNkXCJcclxuICAgIF07XHJcbiAgICBUcmFuc2Zvcm1Qcm9wLnRyYW5zZm9ybVByb3BzID0gWy4uLlRyYW5zZm9ybVByb3AucHJpbWl0aXZlVHJhbnNmb3JtUHJvcHMsIC4uLlRyYW5zZm9ybVByb3AudW1icmVsbGFUcmFuc2Zvcm1Qcm9wc107XHJcbiAgICBUcmFuc2Zvcm1Qcm9wLmFwcGxpZXMgPSAoLi4ucHJvcCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBUcmFuc2Zvcm1Qcm9wLnRyYW5zZm9ybVByb3BzLmNvbnRhaW5zKC4uLnByb3ApO1xyXG4gICAgfTtcclxuICAgIFRyYW5zZm9ybVByb3AuY2xhbXBPcGVuID0gXCIoXCI7XHJcbiAgICBUcmFuc2Zvcm1Qcm9wLmNsYW1wQ2xvc2UgPSBcIikgXCI7XHJcbiAgICBsZXQgaGFzUHggPSBbXCJ4XCIsIFwieVwiLCBcInpcIiwgXCJ0cmFuc2xhdGVYXCIsIFwidHJhbnNsYXRlWVwiLCBcInRyYW5zbGF0ZVpcIiwgXCJza2V3WFwiLCBcInNrZXdZXCIsIFwicm90YXRlXCIsIFwicm90YXRlM2RcIiwgXCJ0cmFuc2xhdGVcIiwgXCJ0cmFuc2xhdGUzZFwiLCBcInNrZXdcIiwgXCJiYWNrZ3JvdW5kU2l6ZVwiLCBcImJvcmRlclwiLCBcImJvcmRlckJvdHRvbVwiLCBcImJvcmRlckJvdHRvbUxlZnRSYWRpdXNcIiwgXCJib3JkZXJCb3R0b21SaWdodFJhZGl1c1wiLCBcImJvcmRlckJvdHRvbVdpZHRoXCIsIFwiYm9yZGVyTGVmdFwiLCBcImJvcmRlckxlZnRXaWR0aFwiLCBcImJvcmRlclJhZGl1c1wiLCBcImJvcmRlclJpZ2h0XCIsIFwiYm9yZGVyUmlnaHRXaWR0aFwiLCBcImJvcmRlclRvcFwiLCBcImJvcmRlclRvcExlZnRSYWRpdXNcIiwgXCJib3JkZXJUb3BSaWdodFJhZGl1c1wiLCBcImJvcmRlclRvcFdpZHRoXCIsIFwiYm9yZGVyV2lkdGhcIiwgXCJib3R0b21cIiwgXCJjb2x1bW5HYXBcIiwgXCJjb2x1bW5SdWxlV2lkdGhcIiwgXCJjb2x1bW5XaWR0aFwiLCBcImNvbHVtbnNcIiwgXCJmbGV4QmFzaXNcIiwgXCJmb250XCIsIFwiZm9udFNpemVcIiwgXCJncmlkQ29sdW1uR2FwXCIsIFwiZ3JpZEdhcFwiLCBcImdyaWRSb3dHYXBcIiwgXCJoZWlnaHRcIiwgXCJsZWZ0XCIsIFwibGV0dGVyU3BhY2luZ1wiLCBcImxpbmVIZWlnaHRcIiwgXCJtYXJnaW5cIiwgXCJtYXJnaW5Cb3R0b21cIiwgXCJtYXJnaW5MZWZ0XCIsIFwibWFyZ2luUmlnaHRcIiwgXCJtYXJnaW5Ub3BcIiwgXCJtYXNrU2l6ZVwiLCBcIm1heEhlaWdodFwiLCBcIm1heFdpZHRoXCIsIFwibWluSGVpZ2h0XCIsIFwibWluV2lkdGhcIiwgXCJvdXRsaW5lXCIsIFwib3V0bGluZU9mZnNldFwiLCBcIm91dGxpbmVXaWR0aFwiLCBcInBhZGRpbmdcIiwgXCJwYWRkaW5nQm90dG9tXCIsIFwicGFkZGluZ0xlZnRcIiwgXCJwYWRkaW5nUmlnaHRcIiwgXCJwYWRkaW5nVG9wXCIsIFwicGVyc3BlY3RpdmVcIiwgXCJyaWdodFwiLCBcInNoYXBlTWFyZ2luXCIsIFwidGFiU2l6ZVwiLCBcInRvcFwiLCBcIndpZHRoXCIsIFwid29yZFNwYWNpbmdcIl07XHJcbiAgICBsZXQgaGFzRGVnID0gW1wicm90YXRlWFwiLCBcInJvdGF0ZVlcIiwgXCJyb3RhdGVaXCIsIFwicm90YXRlXCJdO1xyXG4gICAgbGV0IHB4ID0gXCJweFwiO1xyXG4gICAgbGV0IHVuaXRJbmRleCA9IHt9O1xyXG4gICAgaGFzUHguZWEoKGUpID0+IHtcclxuICAgICAgICB1bml0SW5kZXhbZV0gPSBweDtcclxuICAgIH0pO1xyXG4gICAgbGV0IGRlZyA9IFwiZGVnXCI7XHJcbiAgICBoYXNEZWcuZWEoKGUpID0+IHtcclxuICAgICAgICB1bml0SW5kZXhbZV0gPSBkZWc7XHJcbiAgICB9KTtcclxuICAgIFRyYW5zZm9ybVByb3AucHJpbWl0aXZlVHJhbnNmb3JtUHJvcHMuZWEoKHByb3ApID0+IHtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJhbnNmb3JtUHJvcC5wcm90b3R5cGUsIHByb3AsIHtcclxuICAgICAgICAgICAgZ2V0KCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJpbWl0aXZlc1twcm9wXSB8fCBUcmFuc2Zvcm1Qcm9wLnByaW1pdGl2ZURlZmF1bHRzW3Byb3BdICsgdW5pdEluZGV4W3Byb3BdO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXQoc3R5bGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByaW1pdGl2ZXNbcHJvcF0gPSBzdHlsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBwLmNzcyA9IGZ1bmN0aW9uIChrZXlfY3NzLCB2YWwpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGtleV9jc3MgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgbGV0IGNzcyA9IGNsb25lRGF0YShrZXlfY3NzKTtcclxuICAgICAgICAgICAgZm9ybWF0Q3NzKGNzcywgdGhpcyk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHByb3AgaW4gY3NzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0eWxlW3Byb3BdID0gY3NzW3Byb3BdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHZhbCAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB2YWwgIT09IFwiYm9vbGVhblwiKSB7XHJcbiAgICAgICAgICAgIGxldCBzID0gZm9ybWF0U3R5bGUoa2V5X2NzcywgdmFsLCB0aGlzKTtcclxuICAgICAgICAgICAgaWYgKCEocyBpbnN0YW5jZW9mIFRyYW5zZm9ybVByb3ApKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdHlsZVtrZXlfY3NzXSA9IHM7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuc3R5bGUudHJhbnNmb3JtID0gcy50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IHM7XHJcbiAgICAgICAgICAgIGlmIChUcmFuc2Zvcm1Qcm9wLmFwcGxpZXMoa2V5X2NzcykpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtc1dpdGhvdXRDb25zaXRlbnRUcmFuc2Zvcm1Qcm9wcy5pbmNsdWRlcyh7IGVsZW06IHRoaXMgfSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdCA9IG5ldyBUcmFuc2Zvcm1Qcm9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdC50cmFuc2Zvcm0gPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMpLnRyYW5zZm9ybTtcclxuICAgICAgICAgICAgICAgICAgICBzID0gdFtrZXlfY3NzXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICBzID0gZ2V0VHJhbnNmb3JtUHJvcHModGhpcylba2V5X2Nzc107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcylba2V5X2Nzc107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHMgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgIHRocm93IFwiVW5rbm93biBrZXkgXFxcIlwiICsga2V5X2NzcyArIFwiXFxcIi5cIjtcclxuICAgICAgICAgICAgaWYgKHZhbCB8fCBzLnNwbGl0KFwiIFwiKS5sZW5ndGggPiAxKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHM7XHJcbiAgICAgICAgICAgIGxldCBuID0gcGFyc2VGbG9hdChzKTtcclxuICAgICAgICAgICAgaWYgKGlzTmFOKG4pKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHM7XHJcbiAgICAgICAgICAgIHJldHVybiBuO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBmdW5jdGlvbiBjdXJyZW50RnJhbWUoa2V5cywgdGhhdCkge1xyXG4gICAgICAgIGxldCByZXQgPSB7fTtcclxuICAgICAgICBsZXQgY3MgPSBnZXRDb21wdXRlZFN0eWxlKHRoYXQpO1xyXG4gICAgICAgIGxldCBoYXNUcmFuc2Zvcm1Qcm9wID0gW107XHJcbiAgICAgICAgZm9yIChsZXQga2V5IG9mIGtleXMpIHtcclxuICAgICAgICAgICAgaWYgKFRyYW5zZm9ybVByb3AuYXBwbGllcyhrZXkpKVxyXG4gICAgICAgICAgICAgICAgaGFzVHJhbnNmb3JtUHJvcC5hZGQoa2V5KTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcmV0W2tleV0gPSBjc1trZXldIHx8IFwiMFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaGFzVHJhbnNmb3JtUHJvcCkge1xyXG4gICAgICAgICAgICBsZXQgcHJvcHMgPSB0cmFuc2Zyb21Qcm9wcy5nZXQodGhhdCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHByb3Agb2YgaGFzVHJhbnNmb3JtUHJvcCkge1xyXG4gICAgICAgICAgICAgICAgcmV0W3Byb3BdID0gcHJvcHNbcHJvcF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0Lm9mZnNldCA9IDA7XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuICAgIGxldCBkZXRlY3RJZkluVHJhbnNpdGlvblByb3BlcnR5ID0gKCgpID0+IHtcclxuICAgICAgICBmdW5jdGlvbiB3b2FuKGtleSwgdGhhdCkge1xyXG4gICAgICAgICAgICBsZXQgcyA9IFwiVGhlIHRyYW5zaXRpb24gcHJvcGVydFwiO1xyXG4gICAgICAgICAgICBpZiAoa2V5IGluc3RhbmNlb2YgQXJyYXkpXHJcbiAgICAgICAgICAgICAgICBzICs9IFwiaWVzIFxcXCJcIjtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcyArPSBcInkgXFxcIlwiO1xyXG4gICAgICAgICAgICBzICs9IGtleS50b1N0cmluZygpICsgXCJcXFwiIGlzIG5vdCBlbXB0eSBmb3IgdGhlIGZvbGxvd2luZyBlbGVtZW50LiBJdCBpcyByZWNvbW1lbmRlZCB0byBub3QgdXNlIGNzcyBhbmlhbXRpb25zIGFuZCB0aGlzIGZyYW1ld29yayBmb3IgdGhlIHNhbWUgcHJvcGVydGllcy5cXG5cXG5JbiBvcmRlciB0byBwcmV2ZW50IGFuIGFuaWFtdGlvbiBmcm9tIHRyaWdnZXJpbmcgdHdpY2UgaW4gYSByb3cgdGhlIHJlc3VsdCBvZiB0aGlzIG9uZSB3aWxsIG5vdCBkaXNwbGF5IGl0cyByZXN1bHQgaW4gdGhlIGRvbSBleHBsb3Jlci5cXG5cXG5cIjtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKHMsIHRoYXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGNzc0tleXMsIHRyYW5zaXRpb25Qcm9wZXJ0eXMsIHRyYW5zaXRpb25EdXJhdGlvbiwgdGhhdCkge1xyXG4gICAgICAgICAgICBsZXQgd2FybiA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgb2YgY3NzS2V5cykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRyYW5zaXRpb25EdXJhdGlvbiAhPT0gMCAmJiAodHJhbnNpdGlvblByb3BlcnR5cy5pbmNsdWRlcyhrZXkpIHx8IHRyYW5zaXRpb25Qcm9wZXJ0eXMgPT09IFwiYWxsXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2Fybi5hZGQoa2V5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgbGVuZ3RoID0gd2Fybi5sZW5ndGg7XHJcbiAgICAgICAgICAgIGlmIChsZW5ndGggIT09IDApXHJcbiAgICAgICAgICAgICAgICBpZiAobGVuZ3RoID09PSAxKVxyXG4gICAgICAgICAgICAgICAgICAgIHdvYW4od2FyblswXSwgdGhhdCk7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgd29hbih3YXJuLCB0aGF0KTtcclxuICAgICAgICAgICAgcmV0dXJuIHdhcm47XHJcbiAgICAgICAgfTtcclxuICAgIH0pKCk7XHJcbiAgICBmdW5jdGlvbiBldmFsdWF0ZUFsbEtleXMoZnJhbWVzKSB7XHJcbiAgICAgICAgbGV0IGFsbEtleXMgPSBPYmplY3Qua2V5cyhmcmFtZXMuZmlyc3QpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgZnJhbWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMoZnJhbWVzW2ldKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgZSBvZiBrZXlzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWFsbEtleXMuaW5jbHVkZXMoZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgYWxsS2V5cy5hZGQoZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFsbEtleXMuaW5jbHVkZXMoXCJvZmZzZXRcIikpXHJcbiAgICAgICAgICAgIGFsbEtleXMucm0oXCJvZmZzZXRcIik7XHJcbiAgICAgICAgcmV0dXJuIGFsbEtleXM7XHJcbiAgICB9XHJcbiAgICBjbGFzcyBFbGVtc1dpdGhvdXRDb25zaXRlbnRUcmFuc2Zvcm1Qcm9wcyB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoLi4uZWxlbXMpIHtcclxuICAgICAgICAgICAgdGhpcy5zdG9yZSA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLmFkZCguLi5lbGVtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFkZCguLi5lbGVtcykge1xyXG4gICAgICAgICAgICBlbGVtcy5lYSgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmluY2x1ZGVzKGUpKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUuYWRkKGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcm0oLi4uZWxlbXMpIHtcclxuICAgICAgICAgICAgbGV0IGluZGljZXMgPSBbXTtcclxuICAgICAgICAgICAgZWxlbXMuZWEoKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBoYXNOb0lkZW50aWZpZXIgPSBlLmlkZW50aWZpZXIgPT09IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUuZWEoKHMsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZSA9PT0gcyB8fCAocy5lbGVtID09PSBlLmVsZW0gJiYgKGhhc05vSWRlbnRpZmllciB8fCBzLmlkZW50aWZpZXIgPT09IGUuaWRlbnRpZmllcikpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRpY2VzLmFkZChpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5zdG9yZS5ybUkoLi4uaW5kaWNlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGluY2x1ZGVzKC4uLmVsZW1zKSB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtcy5lYSgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGhhc05vSWRlbnRpZmllciA9IGUuaWRlbnRpZmllciA9PT0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RvcmUuZWEoKHMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZSA9PT0gcyB8fCAocy5lbGVtID09PSBlLmVsZW0gJiYgKGhhc05vSWRlbnRpZmllciB8fCBzLmlkZW50aWZpZXIgPT09IGUuaWRlbnRpZmllcikpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IGVhc2VJbk91dCA9IG5ldyBFYXNpbmcoXCJlYXNlSW5PdXRcIik7XHJcbiAgICAvLyBsZXQgZWFzZSA9IG5ldyBFYXNpbmcoXCJlYXNlXCIpXHJcbiAgICBsZXQgZWFzZUluT3V0RnVuYyA9IGVhc2VJbk91dC5mdW5jdGlvbjtcclxuICAgIC8vIGxldCBlYXNlSW5PdXRTdHJpbmcgPSBlYXNlSW5PdXQuc3RyaW5nXHJcbiAgICAvLyBsZXQgZWFzZUZ1bmMgPSBlYXNlLmZ1bmN0aW9uXHJcbiAgICAvLyBsZXQgZWFzZVN0cmluZyA9IGVhc2Uuc3RyaW5nXHJcbiAgICBsZXQgbWF4QW5pbWF0aW9uUHJvZ3Jlc3MgPSAuOTk5OTk5OTtcclxuICAgIGxldCBtaW5BbmltYXRpb25Qcm9ncmVzcyA9IDAuMDAwMDAwMTtcclxuICAgIGxldCBuYW1lU3BhY2VJbmRleCA9IG5ldyBNYXAoKTtcclxuICAgIGxldCBlbGVtc1dpdGhvdXRDb25zaXRlbnRUcmFuc2Zvcm1Qcm9wcyA9IG5ldyBFbGVtc1dpdGhvdXRDb25zaXRlbnRUcmFuc2Zvcm1Qcm9wcygpO1xyXG4gICAgbGV0IG1heFByb2dyZXNzSW5PbmVTdGVwID0gLjE7XHJcbiAgICAvLyAuMSAvIDE2LjY2NjY2NjY2NjY2NjY2NjdcclxuICAgIGxldCBtYXhQcm9ncmVzc0luT25lU3RlcFdpdGhvdXREZWx0YSA9IC4wMDY7XHJcbiAgICBsZXQgZnJhbWVEZWx0YSA9IDE2LjY2NjY2NjY2NjY2NjY2Njc7XHJcbiAgICBsZXQgbGFzdEZyYW1lVGltZVN0YW1wID0gMDtcclxuICAgIGxldCBsb29wID0gKGZyYW1lVGltZVN0YW1wKSA9PiB7XHJcbiAgICAgICAgZnJhbWVEZWx0YSA9IGZyYW1lVGltZVN0YW1wIC0gbGFzdEZyYW1lVGltZVN0YW1wO1xyXG4gICAgICAgIGxhc3RGcmFtZVRpbWVTdGFtcCA9IGZyYW1lVGltZVN0YW1wO1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcclxuICAgICAgICAvLyBsb2coZnJhbWVEZWx0YSlcclxuICAgIH07XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XHJcbiAgICAvLyBUT0RPOiBtYXliZSBIVE1MIGF0dHJicyBhbmltXHJcbiAgICAvLyBTbyB0aGF0IHlvdSBjb3VsZCBhbmltYXRlIGlubmVySFRNTCBlLmcuXHJcbiAgICAvLyBtYXliZSBmYWRlIGFvdXQgZm9udC1jb2xvciBhbmQgdGhlbiBiYWNrLi4uIG9yIGp1c3Qgc2V0IGl0XHJcbiAgICAvLyBUT0RPOiBhZGQgeCBhcyBzaG9ydGhhbmQgZm9yIHRyYW5zbGF0ZSBYIHVzdy5cclxuICAgIC8vIFRPRE86IGluc3RlYWQgb2Ygb3B0aW9ucyBqdXN0IHRoZSBkdXJhdGlvbiBjYW4gYmUgZ2l2ZW4gYXMgd2VsbC4gc28gZWxlbS5hbmltKHsuLi59LCAzMDApXHJcbiAgICAvLyBUT0RPOiBtYWtlIHdhcm5pbmcgaWYgYW5pbWF0aW9uIHRvIG9yIGZyb20gYXV0by4gQmFzZWQgb24gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL0NTU19UcmFuc2l0aW9ucy9Vc2luZ19DU1NfdHJhbnNpdGlvbnMjV2hpY2hfQ1NTX3Byb3BlcnRpZXNfY2FuX2JlX3RyYW5zaXRpb25lZFxyXG4gICAgcC5hbmltID0gYXN5bmMgZnVuY3Rpb24gKGZyYW1lX2ZyYW1lcywgb3B0aW9ucyA9IHt9LCBndWlkYW5jZSkge1xyXG4gICAgICAgIGxldCB0aGlzVHJhbnNQcm9wcyA9IGdldFRyYW5zZm9ybVByb3BzKHRoaXMpO1xyXG4gICAgICAgIGxldCBhbmltYXRpb25Jc0d1aWRlZCA9IGd1aWRhbmNlICE9PSB1bmRlZmluZWQ7XHJcbiAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgaWYgKGZyYW1lX2ZyYW1lc1tPYmplY3Qua2V5cyhmcmFtZV9mcmFtZXMpWzBdXSBpbnN0YW5jZW9mIEFycmF5KVxyXG4gICAgICAgICAgICBmcmFtZV9mcmFtZXMgPSBjb252ZXJ0RnJhbWVTdHJ1Y3R1cmUoZnJhbWVfZnJhbWVzKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIGZyYW1lX2ZyYW1lcyA9IGNsb25lRGF0YShmcmFtZV9mcmFtZXMpO1xyXG4gICAgICAgIGlmIChuYW1lU3BhY2VJbmRleC5nZXQodGhpcykgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgbmFtZVNwYWNlSW5kZXguc2V0KHRoaXMsIFtdKTtcclxuICAgICAgICBsZXQgbnMgPSBuYW1lU3BhY2VJbmRleC5nZXQodGhpcyk7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMubmFtZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGxldCBpbmMgPSAxO1xyXG4gICAgICAgICAgICB3aGlsZSAobnMuaW5jbHVkZXMoaW5jLnRvU3RyaW5nKCkpKSB7XHJcbiAgICAgICAgICAgICAgICBpbmMrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgcyA9IGluYy50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgb3B0aW9ucy5uYW1lID0gcztcclxuICAgICAgICAgICAgbnMuYWRkKHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGluYyA9IDI7XHJcbiAgICAgICAgICAgIGxldCBuYW1lO1xyXG4gICAgICAgICAgICBpZiAoIW5zLmluY2x1ZGVzKG9wdGlvbnMubmFtZSkpXHJcbiAgICAgICAgICAgICAgICBuYW1lID0gb3B0aW9ucy5uYW1lO1xyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChucy5pbmNsdWRlcyhvcHRpb25zLm5hbWUgKyBpbmMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5jKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBuYW1lID0gb3B0aW9ucy5uYW1lICsgaW5jO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBvcHRpb25zLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgICAgICBucy5hZGQobmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBwcm9ncmVzc05hbWVTdHJpbmcgPSBcImFuaW1hdGlvbi1cIiArIG9wdGlvbnMubmFtZSArIFwiLXByb2dyZXNzXCI7XHJcbiAgICAgICAgbGV0IGVuZEZyYW1lcztcclxuICAgICAgICBsZXQgdHJhbnNpdGlvblByb3BlcnR5ID0gdGhpcy5jc3MoXCJ0cmFuc2l0aW9uLXByb3BlcnR5XCIpO1xyXG4gICAgICAgIGxldCB0cmFuc2l0aW9uRHVyYXRpb24gPSB0aGlzLmNzcyhcInRyYW5zaXRpb24tZHVyYXRpb25cIik7XHJcbiAgICAgICAgbGV0IG5lZWRUb0NhbGN1bGF0ZUluaXRhbEZyYW1lID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGFsbEtleXM7XHJcbiAgICAgICAgbGV0IHRoaXNUcmFuc1Byb3BzQ29weSA9IG5ldyBUcmFuc2Zvcm1Qcm9wKHRoaXNUcmFuc1Byb3BzKTtcclxuICAgICAgICBpZiAoZnJhbWVfZnJhbWVzIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICAgICAgbGV0IGZyYW1lcyA9IGZyYW1lX2ZyYW1lcztcclxuICAgICAgICAgICAgYWxsS2V5cyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBmcmFtZSBvZiBmcmFtZXMpIHtcclxuICAgICAgICAgICAgICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMoZnJhbWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGtleXMuaW5jbHVkZXMoXCJvZmZzZXRcIikpXHJcbiAgICAgICAgICAgICAgICAgICAga2V5cy5ybVYoXCJvZmZzZXRcIik7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgb2Yga2V5cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghYWxsS2V5cy5pbmNsdWRlcyhrZXkpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxLZXlzLmFkZChrZXkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChmcmFtZXNbMF0ub2Zmc2V0ICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBuZWVkVG9DYWxjdWxhdGVJbml0YWxGcmFtZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5pdEZyYW1lID0gY3VycmVudEZyYW1lKGFsbEtleXMsIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgZnJhbWVzLmRkYShpbml0RnJhbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNwcmVhZE9mZnNldChmcmFtZXMpO1xyXG4gICAgICAgICAgICBsZXQgbmVlZGVkID0gbmV3IE1hcCgpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZyYW1lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGZyYW1lID0gZnJhbWVzW2ldO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRoaXNrZXlzID0gT2JqZWN0LmtleXMoZnJhbWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXNrZXlzLmluY2x1ZGVzKFwib2Zmc2V0XCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXNrZXlzLnJtVihcIm9mZnNldFwiKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGtleSBvZiBhbGxLZXlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlza2V5cy5pbmNsdWRlcyhrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcmV2U3R5bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXh0U3R5bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcmV2T2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV4dE9mZnNldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHdhbnRlZE9mZnNldCA9IGZyYW1lLm9mZnNldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBmcmFtZXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmcmFtZWogPSBmcmFtZXNbal07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZnJhbWVqW2tleV0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqIDwgaSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2U3R5bGUgPSBmcmFtZWpba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldk9mZnNldCA9IGZyYW1lai5vZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0U3R5bGUgPSBmcmFtZWpba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dE9mZnNldCA9IGZyYW1lai5vZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJldlN0eWxlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lW2tleV0gPSBuZXh0U3R5bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobmV4dFN0eWxlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lW2tleV0gPSBwcmV2U3R5bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobmV4dFN0eWxlID09PSBwcmV2U3R5bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lW2tleV0gPSBwcmV2U3R5bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYXQgPSAoKHdhbnRlZE9mZnNldCAtIHByZXZPZmZzZXQpIC8gKG5leHRPZmZzZXQgLSBwcmV2T2Zmc2V0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWUgPSBuZWVkZWQuZ2V0KGZyYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGYgPSBtZS5lYSgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5pZGVudGlmeS5wcmV2T2Zmc2V0ID09PSBwcmV2T2Zmc2V0ICYmIGUuaWRlbnRpZnkubmV4dE9mZnNldCA9PT0gbmV4dE9mZnNldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5mcmFtZXNbMF1ba2V5XSA9IHByZXZTdHlsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuZnJhbWVzWzFdW2tleV0gPSBuZXh0U3R5bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmtleXMuYWRkKGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZS5hZGQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5czogW2tleV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgW2tleV06IHByZXZTdHlsZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgW2tleV06IG5leHRTdHlsZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRlbnRpZnk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2T2Zmc2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRPZmZzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmVlZGVkLnNldChmcmFtZSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzOiBba2V5XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWVzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBba2V5XTogcHJldlN0eWxlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBba2V5XTogbmV4dFN0eWxlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZGVudGlmeToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZPZmZzZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dE9mZnNldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IG5vdEFscmVhZHlGb3JtYXR0ZWRGcmFtZXMgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgZnJhbWUgb2YgZnJhbWVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobmVlZGVkLmdldChmcmFtZSkgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXRBbmltYXRpb25Dc3MoZnJhbWUsIHRoaXNUcmFuc1Byb3BzQ29weSk7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgbm90QWxyZWFkeUZvcm1hdHRlZEZyYW1lcy5hZGQoZnJhbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBwcm9tcyA9IFtdO1xyXG4gICAgICAgICAgICBuZWVkZWQuZm9yRWFjaCgobmUsIGZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBuZS5lYSgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21zLmFkZChnZXRTdHlsZUF0UHJvZ3Jlc3MoW2UuZnJhbWVzLCBlXSwgMSkudGhlbigoc3R5bGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHN0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFtZVtrZXldID0gc3R5bGVba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwocHJvbXMpO1xyXG4gICAgICAgICAgICBub3RBbHJlYWR5Rm9ybWF0dGVkRnJhbWVzLmVhKChmcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZm9ybWF0QW5pbWF0aW9uQ3NzKGZyYW1lLCB0aGlzVHJhbnNQcm9wc0NvcHkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYWxsS2V5cyA9IGV2YWx1YXRlQWxsS2V5cyhmcmFtZXMpO1xyXG4gICAgICAgICAgICBlbmRGcmFtZXMgPSBmcmFtZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBmb3JtYXRBbmltYXRpb25Dc3MoZnJhbWVfZnJhbWVzLCB0aGlzVHJhbnNQcm9wc0NvcHkpO1xyXG4gICAgICAgICAgICBhbGxLZXlzID0gT2JqZWN0LmtleXMoZnJhbWVfZnJhbWVzKTtcclxuICAgICAgICAgICAgaWYgKGFsbEtleXMuaW5jbHVkZXMoXCJvZmZzZXRcIikpXHJcbiAgICAgICAgICAgICAgICBhbGxLZXlzLnJtVihcIm9mZnNldFwiKTtcclxuICAgICAgICAgICAgbmVlZFRvQ2FsY3VsYXRlSW5pdGFsRnJhbWUgPSB0cnVlO1xyXG4gICAgICAgICAgICBsZXQgaW5pdEZyYW1lID0gY3VycmVudEZyYW1lKGFsbEtleXMsIHRoaXMpO1xyXG4gICAgICAgICAgICBlbmRGcmFtZXMgPSBbaW5pdEZyYW1lLCBmcmFtZV9mcmFtZXNdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZGV0ZWN0ZWRQcm9wZXJ0aWVzID0gZGV0ZWN0SWZJblRyYW5zaXRpb25Qcm9wZXJ0eShhbGxLZXlzLCB0cmFuc2l0aW9uUHJvcGVydHksIHRyYW5zaXRpb25EdXJhdGlvbiwgdGhpcyk7XHJcbiAgICAgICAgbGV0IGNzc0NhbkJlVXNlZFRvRmlsbCA9IGFsbEtleXMuZXhjbHVkZXMoLi4uZGV0ZWN0ZWRQcm9wZXJ0aWVzKTtcclxuICAgICAgICBsZXQgZWxlbXNXaXRob3V0Q29uc2l0ZW50VHJhbnNmb3JtUHJvcHNLZXkgPSB7IGVsZW06IHRoaXMsIGlkZW50aWZpZXI6IG9wdGlvbnMubmFtZSB9O1xyXG4gICAgICAgIGlmICghYW5pbWF0aW9uSXNHdWlkZWQpIHtcclxuICAgICAgICAgICAgbGV0IG8gPSBvcHRpb25zO1xyXG4gICAgICAgICAgICBlbGVtc1dpdGhvdXRDb25zaXRlbnRUcmFuc2Zvcm1Qcm9wcy5hZGQoZWxlbXNXaXRob3V0Q29uc2l0ZW50VHJhbnNmb3JtUHJvcHNLZXkpO1xyXG4gICAgICAgICAgICAvL0RlZmF1bHRzXHJcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBpZiAoby5kdXJhdGlvbiA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgby5kdXJhdGlvbiA9IDIwMDtcclxuICAgICAgICAgICAgZWxzZSBpZiAoby5kdXJhdGlvbiA8PSAwKVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgXCJHaXZlbiBvcHRpb24gZHVyYXRpb24gXCIgKyBvLmR1cmF0aW9uICsgXCIgY2Fubm90IGJlIG5lZ2F0aXZlLlwiO1xyXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgaWYgKG8uaXRlcmF0aW9ucyA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgby5pdGVyYXRpb25zID0gMTtcclxuICAgICAgICAgICAgZWxzZSBpZiAoby5pdGVyYXRpb25zIDw9IDApXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBcIkdpdmVuIG9wdGlvbiBpdGVyYXRpb25zIFwiICsgby5pdGVyYXRpb25zICsgXCIgY2Fubm90IGJlIG5lZ2F0aXZlLlwiO1xyXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgaWYgKG8uZWFzaW5nID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgby5lYXNpbmcgPSBcImVhc2VcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgaWYgKG8uZWFzaW5nIGluc3RhbmNlb2YgRWFzaW5nKVxyXG4gICAgICAgICAgICAgICAgICAgIG8uZWFzaW5nID0gby5lYXNpbmcuc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBmaWxsID0gby5maWxsO1xyXG4gICAgICAgICAgICBpZiAoZmlsbCA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgZmlsbCA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBvLmZpbGwgPSBcImJvdGhcIjtcclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlKGFzeW5jIChyZXMsIHJlaikgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGFuaW1hdGlvbjtcclxuICAgICAgICAgICAgICAgIGxldCBlcnJvckluQW5pbWF0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbiA9IHRoaXMuYW5pbWF0ZShlbmRGcmFtZXMsIG8pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBcbiAgRW5jb3VudGVyZWQgZm9sbG93aW5nIGVycm9yIHdoaWxlIGF0dGVtcHRpbmcgdG8gYW5pbWF0ZS5cbiAgXG4gIC0tLS0tLS0tXG4gIFxuICBgICsgZS5tZXNzYWdlICsgYFxuICBcbiAgLS0tLS0tLS1cbiAgXG4gIFxuICBGYWxsaW5nIGJhY2sgb24gY3NzIHRvIHByZXZlbnQgbG9naWMgZmFpbHVyZXMuYCwgZnJhbWVfZnJhbWVzKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNzcyhlbmRGcmFtZXMubGFzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpc1RyYW5zUHJvcHMudHJhbnNmb3JtID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzKS50cmFuc2Zvcm07XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbXNXaXRob3V0Q29uc2l0ZW50VHJhbnNmb3JtUHJvcHMucm0oZWxlbXNXaXRob3V0Q29uc2l0ZW50VHJhbnNmb3JtUHJvcHNLZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlaihlKTtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvckluQW5pbWF0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShwcm9ncmVzc05hbWVTdHJpbmcsIFwiRmFpbGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShwcm9ncmVzc05hbWVTdHJpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBucy5ybVYob3B0aW9ucy5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCBpdGVyYXRpb25zID0gby5pdGVyYXRpb25zO1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZXJhdGlvbnMgIT09IEluZmluaXR5KVxyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5vbmZpbmlzaCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxhc3RGcmFtZSA9IGVuZEZyYW1lcy5sYXN0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzVHJhbnNQcm9wcy50cmFuc2Zvcm0gPSBsYXN0RnJhbWUudHJhbnNmb3JtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtc1dpdGhvdXRDb25zaXRlbnRUcmFuc2Zvcm1Qcm9wcy5ybShlbGVtc1dpdGhvdXRDb25zaXRlbnRUcmFuc2Zvcm1Qcm9wc0tleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWxsICYmIGNzc0NhbkJlVXNlZFRvRmlsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jc3MobGFzdEZyYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5jYW5jZWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpc3BsYXlQcm9ncmVzcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3JJbkFuaW1hdGlvbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmcmVxID0gby5kdXJhdGlvbiAvIDEwMDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbWluID0gMTY7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZyZXEgPCBtaW4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyZXEgPSBtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1ciA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByb2dyZXNzID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW50ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXIgKz0gZnJlcTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSBNYXRoLnJvdW5kKChjdXIgLyBvLmR1cmF0aW9uKSAqIDEwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9ncmVzcyA+PSAxMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZXJhdGlvbnMtLTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVyYXRpb25zIDw9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUocHJvZ3Jlc3NOYW1lU3RyaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnMucm1WKG9wdGlvbnMubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVByb2dyZXNzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzcyA9IDEwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShwcm9ncmVzc05hbWVTdHJpbmcsIHByb2dyZXNzICsgXCIlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIGZyZXEpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlQcm9ncmVzcygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBsZXQgbyA9IG9wdGlvbnM7XHJcbiAgICAgICAgICAgIGxldCBlYXNpbmdGdW5jO1xyXG4gICAgICAgICAgICAvLyBEZWZhdWx0c1xyXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgaWYgKG8uc3RhcnQgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgIG8uc3RhcnQgPSAwO1xyXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgaWYgKG8uZW5kID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICBvLmVuZCA9IG8uc3RhcnQgKyAxMDA7XHJcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBpZiAoby5zbW9vdGggPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgIG8uc21vb3RoID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgIGlmIChvLmFjdGl2ZSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgby5hY3RpdmUgPSBuZXcgRGF0YSh0cnVlKTtcclxuICAgICAgICAgICAgaWYgKG8uZWFzaW5nID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGVhc2luZ0Z1bmMgPSBlYXNlSW5PdXRGdW5jO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG8uZWFzaW5nID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgICAgICAgICAgICAgIG8uZWFzaW5nID0gbmV3IEVhc2luZyhvLmVhc2luZyk7XHJcbiAgICAgICAgICAgICAgICBlYXNpbmdGdW5jID0gby5lYXNpbmcuZnVuY3Rpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG8uc3RhcnQgPj0gby5lbmQpXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBcIkdpdmVuIG9wdGlvbiBzdGFydCBcIiArIG8uc3RhcnQgKyBcIiBhbmQgZW5kIFwiICsgby5lbmQgKyBcIiBhcmUgbm90IGNvbnNpc3RlbnQuIEVuZCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiBzdGFydC5cIjtcclxuICAgICAgICAgICAgby5hY3RpdmUuc3Vic2NyaWJlKChhY3RpdmUpID0+IHtcclxuICAgICAgICAgICAgICAgIG5vdEFjdGl2ZSA9ICFhY3RpdmU7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbXNXaXRob3V0Q29uc2l0ZW50VHJhbnNmb3JtUHJvcHMuYWRkKGVsZW1zV2l0aG91dENvbnNpdGVudFRyYW5zZm9ybVByb3BzS2V5KTtcclxuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtc1dpdGhvdXRDb25zaXRlbnRUcmFuc2Zvcm1Qcm9wcy5pbmNsdWRlcyhlbGVtc1dpdGhvdXRDb25zaXRlbnRUcmFuc2Zvcm1Qcm9wc0tleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1RyYW5zUHJvcHMudHJhbnNmb3JtID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzKS50cmFuc2Zvcm07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1zV2l0aG91dENvbnNpdGVudFRyYW5zZm9ybVByb3BzLnJtKGVsZW1zV2l0aG91dENvbnNpdGVudFRyYW5zZm9ybVByb3BzS2V5KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUocHJvZ3Jlc3NOYW1lU3RyaW5nLCBcIkluYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICAgICAgICAgIC8vbW92ZSBjb25zdGFudHNcclxuICAgICAgICAgICAgbGV0IGluU21vb3RoaW5nO1xyXG4gICAgICAgICAgICBsZXQgY2FuY2VsU21vb3RoaW5nO1xyXG4gICAgICAgICAgICBsZXQgbGFzdEFuaW1hdGlvbjtcclxuICAgICAgICAgICAgbGV0IGxhc3RQcm9ncmVzcyA9IG1pbkFuaW1hdGlvblByb2dyZXNzO1xyXG4gICAgICAgICAgICBsZXQgcHJvZ3Jlc3MgPSBtaW5BbmltYXRpb25Qcm9ncmVzcztcclxuICAgICAgICAgICAgbGV0IHByb2dyZXNzQWJzb3JwdGlvbiA9IDA7XHJcbiAgICAgICAgICAgIGxldCBuZXh0UHJvZ3Jlc3MgPSAxO1xyXG4gICAgICAgICAgICBsZXQgcHJldlByb2dyZXNzID0gMDtcclxuICAgICAgICAgICAgbGV0IHNsaWRlID0gMDtcclxuICAgICAgICAgICAgbGV0IGxhc3RQcm9ncmVzc0Fic29ycHRpb24gPSBwcm9ncmVzc0Fic29ycHRpb247XHJcbiAgICAgICAgICAgIGxldCByYXdQcm9ncmVzcyA9IG1pbkFuaW1hdGlvblByb2dyZXNzO1xyXG4gICAgICAgICAgICBsZXQgcmF3TGFzdFByb2dyZXNzID0gbWluQW5pbWF0aW9uUHJvZ3Jlc3M7XHJcbiAgICAgICAgICAgIGxldCBub3RBY3RpdmUgPSAhby5hY3RpdmUudmFsO1xyXG4gICAgICAgICAgICBsZXQgbm90SW5MaW1pdENvcnJlY3Rpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICBsZXQgYWJzdWx1dGVQcm9ncmVzcztcclxuICAgICAgICAgICAgbGV0IHN1YnNjcmlwdGlvbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChub3RBY3RpdmUpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgbGFzdFByb2dyZXNzID0gcHJvZ3Jlc3M7XHJcbiAgICAgICAgICAgICAgICByYXdMYXN0UHJvZ3Jlc3MgPSByYXdQcm9ncmVzcztcclxuICAgICAgICAgICAgICAgIHByb2dyZXNzID0gcHJvZ3Jlc3NUb1NhdmVQcm9ncmVzcygoKGFic3VsdXRlUHJvZ3Jlc3MgLSBvLnN0YXJ0KSAvIChvLmVuZCAtIG8uc3RhcnQpKSk7XHJcbiAgICAgICAgICAgICAgICByYXdQcm9ncmVzcyA9IHByb2dyZXNzO1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb2dyZXNzID09PSBsYXN0UHJvZ3Jlc3MpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgaWYgKGluU21vb3RoaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsU21vb3RoaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJhd0xhc3RQcm9ncmVzcyA9PT0gcmF3UHJvZ3Jlc3MpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChvLnNtb290aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyYXdMYXN0UHJvZ3Jlc3MgPCByYXdQcm9ncmVzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc0Fic29ycHRpb24gPSBwcm9ncmVzc0Fic29ycHRpb24gKiAocmF3UHJvZ3Jlc3MgLSBuZXh0UHJvZ3Jlc3MpIC8gKHJhd0xhc3RQcm9ncmVzcyAtIG5leHRQcm9ncmVzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc0Fic29ycHRpb24gPSBwcm9ncmVzc0Fic29ycHRpb24gKiAocmF3UHJvZ3Jlc3MgLSBwcmV2UHJvZ3Jlc3MpIC8gKHJhd0xhc3RQcm9ncmVzcyAtIHByZXZQcm9ncmVzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgobGFzdFByb2dyZXNzQWJzb3JwdGlvbiA8IDAgJiYgcHJvZ3Jlc3NBYnNvcnB0aW9uID49IDApIHx8IChwcm9ncmVzc0Fic29ycHRpb24gPD0gMCAmJiBsYXN0UHJvZ3Jlc3NBYnNvcnB0aW9uID4gMCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NBYnNvcnB0aW9uID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3MgKz0gcHJvZ3Jlc3NBYnNvcnB0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RQcm9ncmVzc0Fic29ycHRpb24gPSBwcm9ncmVzc0Fic29ycHRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGUgPSAoc2xpZGUgLyAxLjcpICsgKChwcm9ncmVzcyAtIGxhc3RQcm9ncmVzcykgLyBmcmFtZURlbHRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCBkaWZmID0gcHJvZ3Jlc3MgLSBsYXN0UHJvZ3Jlc3M7XHJcbiAgICAgICAgICAgICAgICBsZXQgb3ZlcmxpbWl0ID0gTWF0aC5hYnMoZGlmZikgPiBtYXhQcm9ncmVzc0luT25lU3RlcDtcclxuICAgICAgICAgICAgICAgIGlmIChvdmVybGltaXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzcyA9IHByb2dyZXNzVG9TYXZlUHJvZ3Jlc3MobGFzdFByb2dyZXNzICsgKCgoZGlmZiA+IDApID8gbWF4UHJvZ3Jlc3NJbk9uZVN0ZXBXaXRob3V0RGVsdGEgOiAtbWF4UHJvZ3Jlc3NJbk9uZVN0ZXBXaXRob3V0RGVsdGEpICogZnJhbWVEZWx0YSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGxhc3RQcm9ncmVzcyA9PT0gbWluQW5pbWF0aW9uUHJvZ3Jlc3MgfHwgbGFzdFByb2dyZXNzID09PSBtYXhBbmltYXRpb25Qcm9ncmVzcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZWVkVG9DYWxjdWxhdGVJbml0YWxGcmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRGcmFtZXNbMF0gPSBjdXJyZW50RnJhbWUoYWxsS2V5cywgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5lZWRUb0NhbGN1bGF0ZUluaXRhbEZyYW1lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvLmluQ2IgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG8uaW5DYiA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbby5pbkNiXSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvLmluQ2IuY2FsbCh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL2FuaW1hdGlvblxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUocHJvZ3Jlc3NOYW1lU3RyaW5nLCBNYXRoLnJvdW5kKHByb2dyZXNzICogMTAwKSArIFwiJVwiKTtcclxuICAgICAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxhc3RBbmltYXRpb24gIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgICAgICBsYXN0QW5pbWF0aW9uLmNhbmNlbCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRoaXNBbmltYXRpb247XHJcbiAgICAgICAgICAgICAgICBsZXQgb3AgPSB7IGR1cmF0aW9uOiAxMDAsIGZpbGw6IFwiYm90aFwiLCBlYXNpbmc6IFwibGluZWFyXCIsIGl0ZXJhdGlvbnM6IDEsIGl0ZXJhdGlvblN0YXJ0OiBwcm9ncmVzc1RvU2F2ZVByb2dyZXNzKGVhc2luZ0Z1bmMocHJvZ3Jlc3MpKSB9O1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzQW5pbWF0aW9uID0gdGhpcy5hbmltYXRlKGVuZEZyYW1lcywgb3ApO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXNBbmltYXRpb24ucGF1c2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBsYXN0QW5pbWF0aW9uID0gdGhpc0FuaW1hdGlvbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JBbmltYXRpb24oXCJtYWluXCIsIGVuZEZyYW1lcywgb3AsIHRoaXMsIGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzQWJzb3JwdGlvbiA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob3ZlcmxpbWl0ICYmICEocHJvZ3Jlc3MgPD0gbWluQW5pbWF0aW9uUHJvZ3Jlc3MgfHwgcHJvZ3Jlc3MgPj0gbWF4QW5pbWF0aW9uUHJvZ3Jlc3MpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdEluTGltaXRDb3JyZWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm90SW5MaW1pdENvcnJlY3Rpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzQW5pbWF0aW9uID09PSBsYXN0QW5pbWF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmR5VG9TZXRFbmRWYWxzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG8uc21vb3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlc1JkeVRvU2V0RW5kVmFscztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZHlUb1NldEVuZFZhbHMgPSBuZXcgU3luY1Byb20oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNSZHlUb1NldEVuZFZhbHMgPSByZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5TbW9vdGhpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjYW5jZWxBbmltYXRpb25TbW9vdGhpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsU21vb3RoaW5nID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25TbW9vdGhpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhblVwU21vb3RoZW5pbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc21vb3RoUHJvZ3Jlc3MgPSBwcm9ncmVzcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbG9jYWxDb3B5T2ZQcm9ncmVzcyA9IHByb2dyZXNzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbW9vdGgoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBzbW9vdGgoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYW5jZWxBbmltYXRpb25TbW9vdGhpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvblNtb290aGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtb290aFByb2dyZXNzICs9IHNsaWRlICogZnJhbWVEZWx0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGUgPSBzbGlkZSAqIC41O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUbyBiZSBob25lc3QgSSBkb250IGtub3cgd2h5IHRoaXMgY2FudCBiZSBqdXN0IGRvbmUgb25jZSBhdCB0byBzdGFydCBvZiBjbGVhblVwU21vb3RoZW5pbmcgYnV0IHdpcmVkIHRoaW5ncyBoYXBwZW4gaWYgaXQgZG9lc250IGdvIGhlcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBrZXlmcmFtZXMgc2hvdyB0aGUgcHJvYmxlbSB7dHJhbnNsYXRlWDogNTAwfSwge3RyYW5zbGF0ZVk6IDUwMCwgYmFja2dyb3VuZENvbG9yOiBcInJlZFwifSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21vb3RoUHJvZ3Jlc3MgPSBwcm9ncmVzc1RvU2F2ZVByb2dyZXNzKHNtb290aFByb2dyZXNzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVhc2VkU21vb3RoUHJvZ3Jlc3MgPSBlYXNpbmdGdW5jKHNtb290aFByb2dyZXNzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1pbkJvcmRlclJlYWNoZWQgPSBlYXNlZFNtb290aFByb2dyZXNzIDw9IG1pbkFuaW1hdGlvblByb2dyZXNzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWF4Qm9yZGVyUmVhY2hlZCA9IGVhc2VkU21vb3RoUHJvZ3Jlc3MgPj0gbWF4QW5pbWF0aW9uUHJvZ3Jlc3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtaW5Cb3JkZXJSZWFjaGVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWFzZWRTbW9vdGhQcm9ncmVzcyA9IG1pbkFuaW1hdGlvblByb2dyZXNzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChtYXhCb3JkZXJSZWFjaGVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWFzZWRTbW9vdGhQcm9ncmVzcyA9IG1heEFuaW1hdGlvblByb2dyZXNzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFzdEFuaW1hdGlvbiAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdEFuaW1hdGlvbi5jYW5jZWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9wID0geyBkdXJhdGlvbjogMTAwLCBmaWxsOiBcImJvdGhcIiwgZWFzaW5nOiBcImxpbmVhclwiLCBpdGVyYXRpb25zOiAxLCBpdGVyYXRpb25TdGFydDogZWFzZWRTbW9vdGhQcm9ncmVzcyB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdEFuaW1hdGlvbiA9IHRoYXQuYW5pbWF0ZShlbmRGcmFtZXMsIG9wKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RBbmltYXRpb24ucGF1c2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JBbmltYXRpb24oXCJzbW9vdGhcIiwgZW5kRnJhbWVzLCBvcCwgdGhhdCwgZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc0Fic29ycHRpb24gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhzbGlkZSkgPj0gLjAwMDAwMSAmJiAhKG1pbkJvcmRlclJlYWNoZWQgfHwgbWF4Qm9yZGVyUmVhY2hlZCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc21vb3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYW5VcFNtb290aGVuaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gY2xlYW5VcFNtb290aGVuaW5nKGh1cnJ5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNtYWxsZXJQcm9ncmVzcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJpZ2dlclByb2dyZXNzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9jYWxDb3B5T2ZQcm9ncmVzcyA8IHNtb290aFByb2dyZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbGVyUHJvZ3Jlc3MgPSBsb2NhbENvcHlPZlByb2dyZXNzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmlnZ2VyUHJvZ3Jlc3MgPSBzbW9vdGhQcm9ncmVzcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsZXJQcm9ncmVzcyA9IHNtb290aFByb2dyZXNzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmlnZ2VyUHJvZ3Jlc3MgPSBsb2NhbENvcHlPZlByb2dyZXNzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHsgb2Zmc2V0IH0gb2YgZW5kRnJhbWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob2Zmc2V0IDw9IHNtYWxsZXJQcm9ncmVzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZQcm9ncmVzcyA9IG9mZnNldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG9mZnNldCA+PSBiaWdnZXJQcm9ncmVzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRQcm9ncmVzcyA9IG9mZnNldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc0Fic29ycHRpb24gPSBwcm9ncmVzc0Fic29ycHRpb24gKyAoKHNtb290aFByb2dyZXNzIC0gbG9jYWxDb3B5T2ZQcm9ncmVzcykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0UHJvZ3Jlc3NBYnNvcnB0aW9uID0gcHJvZ3Jlc3NBYnNvcnB0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaHVycnkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0UHJvZ3Jlc3MgPSBzbW9vdGhQcm9ncmVzcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSBzbW9vdGhQcm9ncmVzcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5TbW9vdGhpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzUmR5VG9TZXRFbmRWYWxzKGh1cnJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmR5VG9TZXRFbmRWYWxzID0gU3luY1Byb20ucmVzb2x2ZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZHlUb1NldEVuZFZhbHMudGhlbigoaHVycnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWh1cnJ5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50RnJhbWUgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNzID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsS2V5cy5lYSgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RnJhbWVba2V5XSA9IGNzW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRGcmFtZS50cmFuc2Zvcm0gIT09IHVuZGVmaW5lZCAmJiBlbGVtc1dpdGhvdXRDb25zaXRlbnRUcmFuc2Zvcm1Qcm9wcy5pbmNsdWRlcyhlbGVtc1dpdGhvdXRDb25zaXRlbnRUcmFuc2Zvcm1Qcm9wc0tleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1RyYW5zUHJvcHMudHJhbnNmb3JtID0gY3VycmVudEZyYW1lLnRyYW5zZm9ybTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1zV2l0aG91dENvbnNpdGVudFRyYW5zZm9ybVByb3BzLnJtKGVsZW1zV2l0aG91dENvbnNpdGVudFRyYW5zZm9ybVByb3BzS2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0cmFuc2Zvcm0gPSB0aGlzVHJhbnNQcm9wcy50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHJhbnNmb3JtICE9PSBcIm5vbmVcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RnJhbWUudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGN1cnJlbnRGcmFtZS50cmFuc2Zvcm07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jc3MoY3VycmVudEZyYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNzc0NhbkJlVXNlZFRvRmlsbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdEFuaW1hdGlvbi5jYW5jZWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0QW5pbWF0aW9uID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9ncmVzcyA9PT0gbWluQW5pbWF0aW9uUHJvZ3Jlc3MgfHwgcHJvZ3Jlc3MgPT09IG1heEFuaW1hdGlvblByb2dyZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvLm91dENiICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygby5vdXRDYiA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW28ub3V0Q2JdKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgby5vdXRDYi5jYWxsKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBsZXQgZmlyc3QgPSB0cnVlO1xyXG4gICAgICAgICAgICBndWlkYW5jZS5zdWJzY3JpYmUoKHByb2dyZXNzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmlyc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtc1dpdGhvdXRDb25zaXRlbnRUcmFuc2Zvcm1Qcm9wcy5hZGQoZWxlbXNXaXRob3V0Q29uc2l0ZW50VHJhbnNmb3JtUHJvcHNLZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhYnN1bHV0ZVByb2dyZXNzID0gcHJvZ3Jlc3M7XHJcbiAgICAgICAgICAgICAgICBpZiAobm90SW5MaW1pdENvcnJlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBmdW5jdGlvbiBlcnJvckFuaW1hdGlvbih0aHJlYWQsIHdvcmtpbmdGcmFtZXMsIG9wdGlvbnMsIHRoYXQsIGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlVuZXhwZWN0ZWQgZXJyb3Igd2hpbGUgYW5pbWF0aW5nIChUaHJlYWQ6IFwiICsgdGhyZWFkICsgXCIpIHVzaW5nIHRoZSBmb2xsb3dpbmcgcGFyYW1ldGVyc1xcblxcbkZyYW1lczogXCIsIHdvcmtpbmdGcmFtZXMsIFwiXFxuT3B0aW9uczogXCIsIG9wdGlvbnMsIFwiXFxuXFxuU2V0dGluZyBwcm9ncmVzc0Fic29ycHRpb24gdG8gMCB0byBwcmV2ZW50IGZ1cnRoZXIgZmFpbHVyZXMuXFxudGhpczogXCIsIHRoYXQsIFwiXFxuRXhjZXB0aW9uOiBcXG5cIiwgZXJyb3IpO1xyXG4gICAgfVxyXG4gICAgY2xhc3MgU3luY1Byb20ge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RoZW4gPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5oYXNCZWVuUmVzZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKGNiICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGNiKHRoaXMuX3Jlcy5iaW5kKHRoaXMpLCB0aGlzLl9yZWouYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlcyA9IHRoaXMuX3JlcztcclxuICAgICAgICAgICAgICAgIHRoaXMucmVqID0gdGhpcy5fcmVqO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0YXRpYyByZXNvbHZlKHJlcykge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFN5bmNQcm9tKChyKSA9PiB7IHIocmVzKTsgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0YXRpYyByZWplY3QoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgU3luY1Byb20oKHIsIG4pID0+IHsgbigpOyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgX3Jlcyh2YWwpIHtcclxuICAgICAgICAgICAgbGV0IHRoZW4gPSB0aGlzLl90aGVuO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoZW5baV0odmFsKTtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGVuW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaGFzQmVlblJlc2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5yZXNWYWwgPSB2YWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF9yZWooKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl90aGVuO1xyXG4gICAgICAgICAgICB0aGlzLmhhc0JlZW5SZXNlZCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoZW4odG8pIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaGFzQmVlblJlc2VkKSB7XHJcbiAgICAgICAgICAgICAgICB0byh0aGlzLnJlc1ZhbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5oYXNCZWVuUmVzZWQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3RoZW4uYWRkKHRvKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vSGFyZGNvZGUgdGhlIHNwcmVhZCBvZiBvZmZzZXQgaGVyZSBzaW1pbGlhciB0byBob3cgaXQgaXMgY2FsY3VsYXRlZCBpbnRlcm4sIGluIG9yZGVyIHRvIGxhdGVyIGluamVjdCBzbW9vdGhlbmRlZCBmcmFtZS5cclxuICAgIGZ1bmN0aW9uIHNwcmVhZE9mZnNldChmcmFtZXMpIHtcclxuICAgICAgICBmcmFtZXMuZmlyc3Qub2Zmc2V0ID0gMDtcclxuICAgICAgICBmcmFtZXMubGFzdC5vZmZzZXQgPSAxO1xyXG4gICAgICAgIGlmIChmcmFtZXMubGVuZ3RoID09PSAyKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgbGV0IGxhc3QgPSAxO1xyXG4gICAgICAgIGxldCBsYXN0T2Zmc2V0ID0gLTE7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IGxhc3Q7IGkgPCBmcmFtZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGwgPSBpICsgMTtcclxuICAgICAgICAgICAgbGV0IG8gPSBmcmFtZXNbaV0ub2Zmc2V0O1xyXG4gICAgICAgICAgICBpZiAobyAhPT0gdW5kZWZpbmVkICYmIG8gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGlmIChvID49IGxhc3RPZmZzZXQgJiYgbyA+PSAwICYmIG8gPD0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RPZmZzZXQgPSBvO1xyXG4gICAgICAgICAgICAgICAgICAgIGZyYW1lcy5zbGljZShsYXN0LCBsKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3RhcnQgPSBmcmFtZXNbbGFzdCAtIDFdLm9mZnNldDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZW5kID0gZnJhbWVzW2ldLm9mZnNldDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3BhY2UgPSAoZW5kIC0gc3RhcnQpIC8gKGwgLSBsYXN0KTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgb2Zmc2V0ID0gc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IGxhc3Q7IGogPCBpOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ICs9IHNwYWNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmFtZXNbal0ub2Zmc2V0ID0gb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBsYXN0ID0gbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBcIk9mZnNldHMgbXVzdCBiZSBnaXZlbiBpbiBpbmNyZW1lbnRpbmcgc2VxdWVuY2UsIHNwYW5uaW5nIGJldHdlZW4gMCAtIDFcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHRyYW5zZm9ybSBwcm9wcyBkaXN0aW5ndWlzaFxyXG4gICAgZnVuY3Rpb24gY29udmVydEZyYW1lU3RydWN0dXJlKG9iKSB7XHJcbiAgICAgICAgbGV0IG1heCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIG9iKSB7XHJcbiAgICAgICAgICAgIGxldCB4ID0gb2Jba2V5XS5sZW5ndGg7XHJcbiAgICAgICAgICAgIGlmIChtYXggPCB4KVxyXG4gICAgICAgICAgICAgICAgbWF4ID0geDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG8gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1heDsgaSsrKSB7XHJcbiAgICAgICAgICAgIG9baV0gPSB7fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIG9iKSB7XHJcbiAgICAgICAgICAgIG9iW2tleV0uZm9yRWFjaCgodmFsLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvW2ldW2tleV0gPSB2YWw7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbztcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNldHVwQmFja2dyb3VuZFRhc2sodGFzaywgY29uc3RyYWludCA9IHsgdGltZTogMTYsIHRpbWVvdXQ6IDE2IH0pIHtcclxuICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICBpZiAoY29uc3RyYWludC50aW1lb3V0ID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIGNvbnN0cmFpbnQudGltZW91dCA9IDE2O1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3RRdWV1ZSA9IFtdO1xyXG4gICAgICAgIGxldCBpbXBvcnRhbmNlU3RydWN0dXJlSGFzQ2hhbmdlZCA9IGZhbHNlO1xyXG4gICAgICAgIGxldCByZWN1cnNpb25PbmdvaW5nID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IHN0YXJ0O1xyXG4gICAgICAgIGxldCBpdGVyYXRpb25zQXNDb25zdHJhaW50ID0gXCJpdGVyYXRpb25zXCIgaW4gY29uc3RyYWludDtcclxuICAgICAgICBsZXQgaW5pdFJlY3Vyc2lvbiA9IGl0ZXJhdGlvbnNBc0NvbnN0cmFpbnQgPyAoKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXJ0ID0gMDtcclxuICAgICAgICB9IDogKCkgPT4ge1xyXG4gICAgICAgICAgICBzdGFydCA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBsZXQgY29tcGFpckNvbnN0cmFpbnQgPSBpdGVyYXRpb25zQXNDb25zdHJhaW50ID8gKCkgPT4ge1xyXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgc3RhcnQrKztcclxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgIHJldHVybiBzdGFydCA+IGNvbnN0cmFpbnQuaXRlcmF0aW9ucztcclxuICAgICAgICB9IDogKCkgPT4ge1xyXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCkgLSBzdGFydCA+IGNvbnN0cmFpbnQudGltZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZ1bmN0aW9uIGNoYW5nZUltcG9ydGFuY2VTdHJ1Y3R1cmUoKSB7XHJcbiAgICAgICAgICAgIGltcG9ydGFuY2VTdHJ1Y3R1cmVIYXNDaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGV4ZWN1dGUocGFyYW1zLCBpbXBvcnRhbmNlID0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGltcG9ydGFuY2UgaW5zdGFuY2VvZiBEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdFF1ZXVlLmFkZCh7IGltcG9ydGFuY2UsIHBhcmFtcywgcmVzIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGltcG9ydGFuY2Uuc3Vic2NyaWJlKGNoYW5nZUltcG9ydGFuY2VTdHJ1Y3R1cmUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RRdWV1ZS5hZGQoeyBpbXBvcnRhbmNlOiB7IHZhbDogaW1wb3J0YW5jZSB9LCBwYXJhbXMsIHJlcyB9KTtcclxuICAgICAgICAgICAgICAgIGlmICghcmVjdXJzaW9uT25nb2luZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlY3Vyc2lvbk9uZ29pbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0UmVjdXJzaW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZWx5Q2FsbEVsZW1zKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gcmVjdXJzaXZlbHlDYWxsRWxlbXMoKSB7XHJcbiAgICAgICAgICAgIGlmIChpbXBvcnRhbmNlU3RydWN0dXJlSGFzQ2hhbmdlZCkge1xyXG4gICAgICAgICAgICAgICAgc29ydFJlcXVlc3RRdWV1ZSgpO1xyXG4gICAgICAgICAgICAgICAgaW1wb3J0YW5jZVN0cnVjdHVyZUhhc0NoYW5nZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXJlcXVlc3RRdWV1ZS5lbXB0eSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGVsZW0gPSByZXF1ZXN0UXVldWUuZmlyc3Q7XHJcbiAgICAgICAgICAgICAgICBlbGVtLnJlcyh0YXNrKC4uLmVsZW0ucGFyYW1zKSk7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0UXVldWUucm1JKDApO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbXBhaXJDb25zdHJhaW50KCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdFJlY3Vyc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWN1cnNpdmVseUNhbGxFbGVtcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIGNvbnN0cmFpbnQudGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgcmVjdXJzaXZlbHlDYWxsRWxlbXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlY3Vyc2lvbk9uZ29pbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBzb3J0UmVxdWVzdFF1ZXVlKCkge1xyXG4gICAgICAgICAgICByZXF1ZXN0UXVldWUuc29ydCgoeyBpbXBvcnRhbmNlOiBhIH0sIHsgaW1wb3J0YW5jZTogYiB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYS52YWwgLSBiLnZhbDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcHJvZ3Jlc3NUb1NhdmVQcm9ncmVzcyhwcm9ncmVzcykge1xyXG4gICAgICAgIGlmIChwcm9ncmVzcyA8IG1pbkFuaW1hdGlvblByb2dyZXNzKVxyXG4gICAgICAgICAgICBwcm9ncmVzcyA9IG1pbkFuaW1hdGlvblByb2dyZXNzO1xyXG4gICAgICAgIGVsc2UgaWYgKHByb2dyZXNzID4gbWF4QW5pbWF0aW9uUHJvZ3Jlc3MpXHJcbiAgICAgICAgICAgIHByb2dyZXNzID0gbWF4QW5pbWF0aW9uUHJvZ3Jlc3M7XHJcbiAgICAgICAgcmV0dXJuIHByb2dyZXNzO1xyXG4gICAgfVxyXG4gICAgbGV0IGdldFN0eWxlQXRQcm9ncmVzcyA9ICgoKSA9PiB7XHJcbiAgICAgICAgLy8gVE9ETzogbWF5YmUgZG9udCBtYWtlIHdyYXBwZXIsIGJ1dCB1c2UgY3VycmVudCBlbGVtZW50IHRvIGRldGVybWluIHN0eWxlIFxyXG4gICAgICAgIC8vICh0aGUgaWRlYSBpcyB0aGF0IHdoZW4gdGhlIGFuaW1hdGlvbiBpcyBjYW5jZWxlZCBpbWVkaWF0bHkgaXQgc2hvdWxkbnQgXHJcbiAgICAgICAgLy8gaGF2ZSBhbnkgaW1wYWN0IG9uIGRyYXduIGZyYW1lcylcclxuICAgICAgICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJnZXQtc3R5bGUtYXQtcHJvZ3Jlc3MtZWxlbWVudC13cmFwcGVyXCIpO1xyXG4gICAgICAgIHdyYXBwZXIuY3NzKHsgZGlzcGxheTogXCJibG9ja1wiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDB2aFwiLCB0cmFuc2xhdGVZOiBcIi05OTk5OTk5OTl2aFwiIH0pO1xyXG4gICAgICAgIGxldCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImdldC1zdHlsZS1hdC1wcm9ncmVzcy1lbGVtZW50XCIpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBkKHdyYXBwZXIuYXBkKGVsZW0pKTtcclxuICAgICAgICByZXR1cm4gc2V0dXBCYWNrZ3JvdW5kVGFzayhnZXRTdHlsZUF0UHJvZ3Jlc3MpO1xyXG4gICAgICAgIGZ1bmN0aW9uIGdldFN0eWxlQXRQcm9ncmVzcyhmcmFtZXMsIGludHJlc3QpIHtcclxuICAgICAgICAgICAgbGV0IHsga2V5cyB9ID0gaW50cmVzdDtcclxuICAgICAgICAgICAgbGV0IHRyYW5zZm9ybUtleXMgPSBbXTtcclxuICAgICAgICAgICAga2V5cy5lYSgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKFRyYW5zZm9ybVByb3AuYXBwbGllcyhlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybUtleXMuYWRkKGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAga2V5cy5ybVYoLi4udHJhbnNmb3JtS2V5cyk7XHJcbiAgICAgICAgICAgIGZyYW1lcy5lYSgoZnJhbWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGZvcm1hdENzcyhmcmFtZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBsZXQgYW5pbWF0aW9uID0gZWxlbS5hbmltYXRlKGZyYW1lcywge1xyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMCxcclxuICAgICAgICAgICAgICAgIGZpbGw6IFwiYm90aFwiLFxyXG4gICAgICAgICAgICAgICAgZWFzaW5nOiBcImxpbmVhclwiLFxyXG4gICAgICAgICAgICAgICAgaXRlcmF0aW9uczogMSxcclxuICAgICAgICAgICAgICAgIGl0ZXJhdGlvblN0YXJ0OiBwcm9ncmVzc1RvU2F2ZVByb2dyZXNzKGludHJlc3QuYXQpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBsZXQgcmVzID0ge307XHJcbiAgICAgICAgICAgIGxldCBjcyA9IGdldENvbXB1dGVkU3R5bGUoZWxlbSk7XHJcbiAgICAgICAgICAgIGlmICghdHJhbnNmb3JtS2V5cy5lbXB0eSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHQgPSBuZXcgVHJhbnNmb3JtUHJvcCgpO1xyXG4gICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICB0LnRyYW5zZm9ybSA9IGNzLnRyYW5zZm9ybTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybUtleXMuZWEoKGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc1trZXldID0gdC5wcmltaXRpdmVzW2tleV07XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBrIG9mIGtleXMpIHtcclxuICAgICAgICAgICAgICAgIHJlc1trXSA9IGNzW2tdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi5jYW5jZWwoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICB9XHJcbiAgICB9KSgpO1xyXG59XHJcbi8vZXh0ZW5kIE5vZGVMcyBhcGkgd2l0aCBuYXRpdmUgRWxlbWVudCBmdW5jdGlvbnMgbGlrZSByZW1vdmUoKVxyXG4vLyBUT0RPOiBtYXliZSByZW5hbWUgdG8gRWxlbWVudExpc3RcclxuLy9AdHMtaWdub3JlXHJcbmV4cG9ydCBjbGFzcyBOb2RlTHMgZXh0ZW5kcyBBcnJheSB7XHJcbiAgICBjb25zdHJ1Y3RvciguLi5hKSB7XHJcbiAgICAgICAgc3VwZXIoLi4uYSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZnJhbWVfZnJhbWVzIGZyYW1lIC8gZnJhbWVzIHRvIGJlIGFuaW1hdGVkIHRvXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBhZGRpdGlvbmFsIG9wdGlvbnMgLyBkdXJhdGlvblxyXG4gICAgICogQHBhcmFtIGd1aWRlZCBXaGVuIG9tbWl0ZWQsIGFuaW1hdGlvbiBwbGF5cyBpbnN0YW50bHkgdGhyb3VnaCBhIGxpbmVhciByZWFsVGltZSBUaW1lbGluZSAobm9ybWFsbHkpLiBXaGVuIGdpdmVuLCBhbmltYXRpb24gY2FuIGJlIGJlIGNvbnRyb2xsZWQgYnkgc2V0dGluZyBndWlkYW5jZSB0byB2YWx1ZXMgYmV0d2VlbiAoaW4gb3B0aW9ucykgZ2l2ZW4gc3RhcnQgKGRlZmF1bHQ6IDApIGFuZCBlbmQgKGRlZmF1bHQ6IDEwMClcclxuICAgICAqIEBwYXJhbSBzdGFnZ2VyIERlbGF5IGJldHdlZW4gYW5pbWF0aW9uIGV4ZWN1dGlvbnMgb24gdGhpcyBlbGVtZW50cy4gV2hlbiB0cnVlIGRlbGF5IGlzIG9uZSBhbmltYXRpb24gZHVyYXRpb24uIFdoZW4gZmFsc2Ugb3Igb21taXRlZCBubyBkZWxheSBhdCBhbGxcclxuICAgICAqL1xyXG4gICAgYXN5bmMgYW5pbShmcmFtZV9mcmFtZXMsIG9wdGlvbnMgPSB7fSwgZ3VpZGFuY2UsIHN0YWdnZXIpIHtcclxuICAgICAgICB0aGlzLndhcm4oXCJhbmltXCIpO1xyXG4gICAgICAgIGlmIChzdGFnZ2VyKSB7XHJcbiAgICAgICAgICAgIGxldCBhd2FpdEZvckFuaW1hdGlvbkR1cmF0aW9uID0gc3RhZ2dlciA9PT0gdHJ1ZTtcclxuICAgICAgICAgICAgZm9yIChsZXQgZSBvZiB0aGlzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYW5pbSA9IGUuYW5pbShmcmFtZV9mcmFtZXMsIG9wdGlvbnMsIGd1aWRhbmNlKTtcclxuICAgICAgICAgICAgICAgIGlmIChhd2FpdEZvckFuaW1hdGlvbkR1cmF0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGFuaW07XHJcbiAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBkZWxheShzdGFnZ2VyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGxzID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGUgb2YgdGhpcykge1xyXG4gICAgICAgICAgICAgICAgbHMuYWRkKGUuYW5pbShmcmFtZV9mcmFtZXMsIG9wdGlvbnMsIGd1aWRhbmNlKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwobHMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhlYyhcIm9uXCIsIGFyZ3VtZW50cyk7XHJcbiAgICB9XHJcbiAgICBvZmYodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5leGVjKFwib2ZmXCIsIGFyZ3VtZW50cyk7XHJcbiAgICB9XHJcbiAgICBzaG93KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmV4ZWMoXCJzaG93XCIsIGFyZ3VtZW50cyk7XHJcbiAgICB9XHJcbiAgICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5leGVjKFwicmVtb3ZlQ2xhc3NcIiwgYXJndW1lbnRzKTtcclxuICAgIH1cclxuICAgIGFwZCguLi5lbGVtcykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmV4ZWMoXCJhcGRcIiwgYXJndW1lbnRzKTtcclxuICAgIH1cclxuICAgIGVtcHR5Tm9kZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhlYyhcImVtcHR5XCIsIGFyZ3VtZW50cyk7XHJcbiAgICB9XHJcbiAgICAvL1RPRE8gbWF5YmUgcGFyYW0gaWYgZmFkZVxyXG4gICAgaGlkZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5leGVjKFwiaGlkZVwiLCBhcmd1bWVudHMpO1xyXG4gICAgfVxyXG4gICAgY2hpbGRzKHNlbGVjdG9yID0gMSkge1xyXG4gICAgICAgIGxldCBscyA9IG5ldyBOb2RlTHMoKTtcclxuICAgICAgICB0aGlzLmVhKChlKSA9PiB7XHJcbiAgICAgICAgICAgIGxzLmFkZCguLi5lLmNoaWxkcyhzZWxlY3RvcikpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBscztcclxuICAgIH1cclxuICAgIGFkZENsYXNzKC4uLmNsYXNzTmFtZXMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5leGVjKFwiYWRkQ2xhc3NcIiwgYXJndW1lbnRzKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBzZXQgb2YgcmVzdWx0c1xyXG4gICAgICogQHBhcmFtIGNsYXNzTmFtZXMgY2xhc3NOYW1lcyB0byBiZSBxdWVyaWVkIHdpdGhcclxuICAgICAqL1xyXG4gICAgaGF2ZUNsYXNzKC4uLmNsYXNzTmFtZXMpIHtcclxuICAgICAgICBsZXQgZW5kID0gW107XHJcbiAgICAgICAgdGhpcy5lYSgoZSkgPT4ge1xyXG4gICAgICAgICAgICBlbmQuYWRkKGUuaGFzQ2xhc3MoLi4uY2xhc3NOYW1lcykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBlbmQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFRydWUgaWYgKiphbnkqKiBjbGFzcyBoYXMgY2xhc3NOYW1lc1xyXG4gICAgICogQHBhcmFtIGNsYXNzTmFtZXMgY2xhc3NOYW1lcyB0byBiZSBxdWVyaWVkIHdpdGhcclxuICAgICAqL1xyXG4gICAgY29udGFpbnNDbGFzcyguLi5jbGFzc05hbWVzKSB7XHJcbiAgICAgICAgbGV0IGhhcyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZWEoKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUuaGFzQ2xhc3MoLi4uY2xhc3NOYW1lcykpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaGFzID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gaGFzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBUcnVlIGlmICoqZXZlcnkqKiBjbGFzcyBoYXMgY2xhc3NOYW1lc1xyXG4gICAgICogQHBhcmFtIGNsYXNzTmFtZXMgY2xhc3NOYW1lcyB0byBiZSBxdWVyaWVkIHdpdGhcclxuICAgICAqL1xyXG4gICAgaGFzQ2xhc3MoLi4uY2xhc3NOYW1lcykge1xyXG4gICAgICAgIGxldCBoYXMgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZWEoKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFlLmhhc0NsYXNzKC4uLmNsYXNzTmFtZXMpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGhhcyA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBoYXM7XHJcbiAgICB9XHJcbiAgICB0b2dnbGVDbGFzcyguLi5jbGFzc05hbWVzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhlYyhcInRvZ2dsZUNsYXNzXCIsIGFyZ3VtZW50cyk7XHJcbiAgICB9XHJcbiAgICBzZXQgaHRtbCh0bykge1xyXG4gICAgICAgIHRoaXMuZWEoKGUpID0+IHtcclxuICAgICAgICAgICAgZS5odG1sID0gdG87XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBnZXQgaHRtbCgpIHtcclxuICAgICAgICBsZXQgcyA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5lYSgoZSkgPT4ge1xyXG4gICAgICAgICAgICBzICs9IGUuaHRtbDtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcztcclxuICAgIH1cclxuICAgIHNldCBpbm5lcih0bykge1xyXG4gICAgICAgIHRoaXMuZWEoKGUpID0+IHtcclxuICAgICAgICAgICAgZS5pbm5lciA9IHRvO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgd2FybihjbWQpIHtcclxuICAgICAgICBpZiAodGhpcy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlRyeWluZyB0byBleGVjdXRlIGNvbW1hbmQgXFxcIlwiICsgY21kICsgXCJcXFwiIG9uIGVtcHR5IE5vZGVMcy5cIik7XHJcbiAgICB9XHJcbiAgICBleGVjKGZ1bmN0aW9uTmFtZSwgYXJncykge1xyXG4gICAgICAgIHRoaXMud2FybihmdW5jdGlvbk5hbWUpO1xyXG4gICAgICAgIHRoaXMuZWEoKGUpID0+IHtcclxuICAgICAgICAgICAgZVtmdW5jdGlvbk5hbWVdKC4uLmFyZ3MpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59XHJcbigoKSA9PiB7XHJcbiAgICBsZXQgZWxlbVByb3RvID0gRWxlbWVudC5wcm90b3R5cGU7XHJcbiAgICBsZXQgbHNQcm90byA9IE5vZGVMcy5wcm90b3R5cGU7XHJcbiAgICBsZXQgTm9kZVByb3RvID0gTm9kZS5wcm90b3R5cGU7XHJcbiAgICBsZXQgRXZUYXJQcm90byA9IEV2ZW50VGFyZ2V0LnByb3RvdHlwZTtcclxuICAgIGZvciAobGV0IGsgaW4gZWxlbVByb3RvKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhrKTtcclxuICAgICAgICBsZXQgZCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZWxlbVByb3RvLCBrKTtcclxuICAgICAgICBpZiAoZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE5vZGVQcm90bywgayk7XHJcbiAgICAgICAgICAgIGlmIChkID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEV2VGFyUHJvdG8sIGspO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiVW5leHBlY3RlZCBjaGFuZ2UgaW4gZG9tIGFwaS4gVGhlIHByb3BlcnR5IFxcXCJcIiArIGsgKyBcIlxcXCIgd2lsbCBub3QgYXZhaWxhYmxlIGluIFwiICsgTm9kZUxzLm5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy9oYXMgc2V0dGVyR2V0dGVyIC0+IG1ha2UgZW1cclxuICAgICAgICAgICAgLy9oYXMgXCJoYXNcIiBpbiBuYW1lIC0+IG1ha2UgaGFzLCBjb250YWlucyBhbmQgaGF2ZSBtZXRob2RcclxuICAgICAgICAgICAgLy9hbnkgb3RoZXIgZnVuY3Rpb24sIGNhbGwgaXQgd2l0aCBwYXJhbXMgYW5kIHJldHVybiBhcnJheSBvZiByZXN1bHRzXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGssIGQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSkoKTtcclxuZXhwb3J0IGNsYXNzIFRlbCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihub2RlcywgZXZlbnQsIGxpc3RlbmVyLCBlbmFibGUgPSB0cnVlKSB7XHJcbiAgICAgICAgdGhpcy5fZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucCA9IG5ldyBOZWwodW5kZWZpbmVkLCBldmVudCwgbGlzdGVuZXIpO1xyXG4gICAgICAgIC8vIFdlIGxsIG9ubHkgdXNlIG1ldGhvZHMgaGVyZSB0aGF0IGFyZSBhdmFsYWJsZSB0byBFdmVudFRhcmdldHMgaGVyZSAob24sIG9mZilcclxuICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICBpZiAobm9kZXMgaW5zdGFuY2VvZiBBcnJheSlcclxuICAgICAgICAgICAgdGhpcy5wLm5vZGVzID0gbmV3IE5vZGVMcyguLi5ub2Rlcyk7XHJcbiAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLnAubm9kZXMgPSBuZXcgTm9kZUxzKG5vZGVzKTtcclxuICAgICAgICBpZiAoZW5hYmxlKVxyXG4gICAgICAgICAgICB0aGlzLmVuYWJsZSgpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGV2ZW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnAuZXZlbnQ7XHJcbiAgICB9XHJcbiAgICBnZXQgbm9kZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucC5ub2RlcztcclxuICAgIH1cclxuICAgIGdldCBsaXN0ZW5lcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wLmxpc3RlbmVyO1xyXG4gICAgfVxyXG4gICAgc2V0IG5vZGVzKG5vZGUpIHtcclxuICAgICAgICB0aGlzLmRpc2FibGUoKTtcclxuICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICB0aGlzLnAubm9kZXMgPSBuZXcgTm9kZUxzKC4uLm5vZGUpO1xyXG4gICAgICAgIHRoaXMuZW5hYmxlKCk7XHJcbiAgICB9XHJcbiAgICBzZXQgZXZlbnQoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLmRpc2FibGUoKTtcclxuICAgICAgICB0aGlzLnAuZXZlbnQgPSBldmVudDtcclxuICAgICAgICB0aGlzLmVuYWJsZSgpO1xyXG4gICAgfVxyXG4gICAgc2V0IGxpc3RlbmVyKGxpc3RlbmVyKSB7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlKCk7XHJcbiAgICAgICAgdGhpcy5wLmxpc3RlbmVyID0gbGlzdGVuZXI7XHJcbiAgICAgICAgdGhpcy5lbmFibGUoKTtcclxuICAgIH1cclxuICAgIHNldCBlbmFibGVkKHRvKSB7XHJcbiAgICAgICAgaWYgKHRvKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9lbmFibGVkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB0aGlzLnAubm9kZXMub24odGhpcy5ldmVudCwgdGhpcy5saXN0ZW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2VuYWJsZWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIHRoaXMucC5ub2Rlcy5vZmYodGhpcy5ldmVudCwgdGhpcy5saXN0ZW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2VuYWJsZWQgPSB0bztcclxuICAgIH1cclxuICAgIGdldCBlbmFibGVkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbmFibGVkO1xyXG4gICAgfVxyXG4gICAgZW5hYmxlKCkge1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBkaXNhYmxlKCkge1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmVwYXRjaCgpIHtcclxuICAgICAgICB0aGlzLmRpc2FibGUoKTtcclxuICAgICAgICB0aGlzLmVuYWJsZSgpO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIE5lbCB7XHJcbiAgICAvL0B0cy1pZ25vcmVcclxuICAgIGNvbnN0cnVjdG9yKG5vZGVzLCBldmVudCwgbGlzdGVuZXIpIHtcclxuICAgICAgICB0aGlzLm5vZGVzID0gbm9kZXM7XHJcbiAgICAgICAgdGhpcy5ldmVudCA9IGV2ZW50O1xyXG4gICAgICAgIHRoaXMubGlzdGVuZXIgPSBsaXN0ZW5lcjtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBjbG9uZURhdGEoYSkge1xyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYSkpO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBFYXNpbmcge1xyXG4gICAgY29uc3RydWN0b3IoeDFfa2V5d29yZCwgeTEsIHgyLCB5Mikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgeDFfa2V5d29yZCAhPT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICB0aGlzLmtleXdvcmQgPSB4MV9rZXl3b3JkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy54MSA9IHgxX2tleXdvcmQ7XHJcbiAgICAgICAgICAgIHRoaXMueTEgPSB5MTtcclxuICAgICAgICAgICAgdGhpcy54MiA9IHgyO1xyXG4gICAgICAgICAgICB0aGlzLnkyID0geTI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0IHN0cmluZygpIHtcclxuICAgICAgICBpZiAodGhpcy5rZXl3b3JkID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybiBcImN1YmljLWJlemllcihcIiArIHRoaXMueDEgKyBcIixcIiArIHRoaXMueTEgKyBcIixcIiArIHRoaXMueDIgKyBcIixcIiArIHRoaXMueTIgKyBcIilcIjtcclxuICAgICAgICByZXR1cm4gY2FtZWxDYXNlVG9EYXNoKHRoaXMua2V5d29yZCk7XHJcbiAgICB9XHJcbiAgICBnZXQgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMua2V5d29yZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGxldCBmID0gRWFzaW5nLmtleXdvcmRzW2Rhc2hUb0NhbWVsQ2FzZSh0aGlzLmtleXdvcmQpXTtcclxuICAgICAgICAgICAgdGhpcy54MSA9IGZbMF07XHJcbiAgICAgICAgICAgIHRoaXMueTEgPSBmWzFdO1xyXG4gICAgICAgICAgICB0aGlzLngyID0gZlsyXTtcclxuICAgICAgICAgICAgdGhpcy55MiA9IGZbM107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBiYXoodGhpcy54MSwgdGhpcy55MSwgdGhpcy54MiwgdGhpcy55Mik7XHJcbiAgICB9XHJcbn1cclxuRWFzaW5nLmtleXdvcmRzID0ge1xyXG4gICAgbGluZWFyOiBbLjI1LCAuMjUsIC43NSwgLjc1XSxcclxuICAgIGVhc2U6IFsuMjUsIC4xLCAuMjUsIDFdLFxyXG4gICAgZWFzZUluOiBbLjQyLCAwLCAxLCAxXSxcclxuICAgIGVhc2VPdXQ6IFswLCAwLCAuNTgsIDFdLFxyXG4gICAgZWFzZUluT3V0OiBbLjQyLCAwLCAuNTgsIDFdXHJcbn07XHJcbiIsIi8qKlxuICogaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nXG4gKiBCZXppZXJFYXNpbmcgLSB1c2UgYmV6aWVyIGN1cnZlIGZvciB0cmFuc2l0aW9uIGVhc2luZyBmdW5jdGlvblxuICogYnkgR2HDq3RhbiBSZW5hdWRlYXUgMjAxNCAtIDIwMTUg4oCTIE1JVCBMaWNlbnNlXG4gKi9cblxuLy8gVGhlc2UgdmFsdWVzIGFyZSBlc3RhYmxpc2hlZCBieSBlbXBpcmljaXNtIHdpdGggdGVzdHMgKHRyYWRlb2ZmOiBwZXJmb3JtYW5jZSBWUyBwcmVjaXNpb24pXG52YXIgTkVXVE9OX0lURVJBVElPTlMgPSA0O1xudmFyIE5FV1RPTl9NSU5fU0xPUEUgPSAwLjAwMTtcbnZhciBTVUJESVZJU0lPTl9QUkVDSVNJT04gPSAwLjAwMDAwMDE7XG52YXIgU1VCRElWSVNJT05fTUFYX0lURVJBVElPTlMgPSAxMDtcblxudmFyIGtTcGxpbmVUYWJsZVNpemUgPSAxMTtcbnZhciBrU2FtcGxlU3RlcFNpemUgPSAxLjAgLyAoa1NwbGluZVRhYmxlU2l6ZSAtIDEuMCk7XG5cbnZhciBmbG9hdDMyQXJyYXlTdXBwb3J0ZWQgPSB0eXBlb2YgRmxvYXQzMkFycmF5ID09PSAnZnVuY3Rpb24nO1xuXG5mdW5jdGlvbiBBIChhQTEsIGFBMikgeyByZXR1cm4gMS4wIC0gMy4wICogYUEyICsgMy4wICogYUExOyB9XG5mdW5jdGlvbiBCIChhQTEsIGFBMikgeyByZXR1cm4gMy4wICogYUEyIC0gNi4wICogYUExOyB9XG5mdW5jdGlvbiBDIChhQTEpICAgICAgeyByZXR1cm4gMy4wICogYUExOyB9XG5cbi8vIFJldHVybnMgeCh0KSBnaXZlbiB0LCB4MSwgYW5kIHgyLCBvciB5KHQpIGdpdmVuIHQsIHkxLCBhbmQgeTIuXG5mdW5jdGlvbiBjYWxjQmV6aWVyIChhVCwgYUExLCBhQTIpIHsgcmV0dXJuICgoQShhQTEsIGFBMikgKiBhVCArIEIoYUExLCBhQTIpKSAqIGFUICsgQyhhQTEpKSAqIGFUOyB9XG5cbi8vIFJldHVybnMgZHgvZHQgZ2l2ZW4gdCwgeDEsIGFuZCB4Miwgb3IgZHkvZHQgZ2l2ZW4gdCwgeTEsIGFuZCB5Mi5cbmZ1bmN0aW9uIGdldFNsb3BlIChhVCwgYUExLCBhQTIpIHsgcmV0dXJuIDMuMCAqIEEoYUExLCBhQTIpICogYVQgKiBhVCArIDIuMCAqIEIoYUExLCBhQTIpICogYVQgKyBDKGFBMSk7IH1cblxuZnVuY3Rpb24gYmluYXJ5U3ViZGl2aWRlIChhWCwgYUEsIGFCLCBtWDEsIG1YMikge1xuICB2YXIgY3VycmVudFgsIGN1cnJlbnRULCBpID0gMDtcbiAgZG8ge1xuICAgIGN1cnJlbnRUID0gYUEgKyAoYUIgLSBhQSkgLyAyLjA7XG4gICAgY3VycmVudFggPSBjYWxjQmV6aWVyKGN1cnJlbnRULCBtWDEsIG1YMikgLSBhWDtcbiAgICBpZiAoY3VycmVudFggPiAwLjApIHtcbiAgICAgIGFCID0gY3VycmVudFQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFBID0gY3VycmVudFQ7XG4gICAgfVxuICB9IHdoaWxlIChNYXRoLmFicyhjdXJyZW50WCkgPiBTVUJESVZJU0lPTl9QUkVDSVNJT04gJiYgKytpIDwgU1VCRElWSVNJT05fTUFYX0lURVJBVElPTlMpO1xuICByZXR1cm4gY3VycmVudFQ7XG59XG5cbmZ1bmN0aW9uIG5ld3RvblJhcGhzb25JdGVyYXRlIChhWCwgYUd1ZXNzVCwgbVgxLCBtWDIpIHtcbiBmb3IgKHZhciBpID0gMDsgaSA8IE5FV1RPTl9JVEVSQVRJT05TOyArK2kpIHtcbiAgIHZhciBjdXJyZW50U2xvcGUgPSBnZXRTbG9wZShhR3Vlc3NULCBtWDEsIG1YMik7XG4gICBpZiAoY3VycmVudFNsb3BlID09PSAwLjApIHtcbiAgICAgcmV0dXJuIGFHdWVzc1Q7XG4gICB9XG4gICB2YXIgY3VycmVudFggPSBjYWxjQmV6aWVyKGFHdWVzc1QsIG1YMSwgbVgyKSAtIGFYO1xuICAgYUd1ZXNzVCAtPSBjdXJyZW50WCAvIGN1cnJlbnRTbG9wZTtcbiB9XG4gcmV0dXJuIGFHdWVzc1Q7XG59XG5cbmZ1bmN0aW9uIExpbmVhckVhc2luZyAoeCkge1xuICByZXR1cm4geDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiZXppZXIgKG1YMSwgbVkxLCBtWDIsIG1ZMikge1xuICBpZiAoISgwIDw9IG1YMSAmJiBtWDEgPD0gMSAmJiAwIDw9IG1YMiAmJiBtWDIgPD0gMSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2JlemllciB4IHZhbHVlcyBtdXN0IGJlIGluIFswLCAxXSByYW5nZScpO1xuICB9XG5cbiAgaWYgKG1YMSA9PT0gbVkxICYmIG1YMiA9PT0gbVkyKSB7XG4gICAgcmV0dXJuIExpbmVhckVhc2luZztcbiAgfVxuXG4gIC8vIFByZWNvbXB1dGUgc2FtcGxlcyB0YWJsZVxuICB2YXIgc2FtcGxlVmFsdWVzID0gZmxvYXQzMkFycmF5U3VwcG9ydGVkID8gbmV3IEZsb2F0MzJBcnJheShrU3BsaW5lVGFibGVTaXplKSA6IG5ldyBBcnJheShrU3BsaW5lVGFibGVTaXplKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrU3BsaW5lVGFibGVTaXplOyArK2kpIHtcbiAgICBzYW1wbGVWYWx1ZXNbaV0gPSBjYWxjQmV6aWVyKGkgKiBrU2FtcGxlU3RlcFNpemUsIG1YMSwgbVgyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFRGb3JYIChhWCkge1xuICAgIHZhciBpbnRlcnZhbFN0YXJ0ID0gMC4wO1xuICAgIHZhciBjdXJyZW50U2FtcGxlID0gMTtcbiAgICB2YXIgbGFzdFNhbXBsZSA9IGtTcGxpbmVUYWJsZVNpemUgLSAxO1xuXG4gICAgZm9yICg7IGN1cnJlbnRTYW1wbGUgIT09IGxhc3RTYW1wbGUgJiYgc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdIDw9IGFYOyArK2N1cnJlbnRTYW1wbGUpIHtcbiAgICAgIGludGVydmFsU3RhcnQgKz0ga1NhbXBsZVN0ZXBTaXplO1xuICAgIH1cbiAgICAtLWN1cnJlbnRTYW1wbGU7XG5cbiAgICAvLyBJbnRlcnBvbGF0ZSB0byBwcm92aWRlIGFuIGluaXRpYWwgZ3Vlc3MgZm9yIHRcbiAgICB2YXIgZGlzdCA9IChhWCAtIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSkgLyAoc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGUgKyAxXSAtIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSk7XG4gICAgdmFyIGd1ZXNzRm9yVCA9IGludGVydmFsU3RhcnQgKyBkaXN0ICoga1NhbXBsZVN0ZXBTaXplO1xuXG4gICAgdmFyIGluaXRpYWxTbG9wZSA9IGdldFNsb3BlKGd1ZXNzRm9yVCwgbVgxLCBtWDIpO1xuICAgIGlmIChpbml0aWFsU2xvcGUgPj0gTkVXVE9OX01JTl9TTE9QRSkge1xuICAgICAgcmV0dXJuIG5ld3RvblJhcGhzb25JdGVyYXRlKGFYLCBndWVzc0ZvclQsIG1YMSwgbVgyKTtcbiAgICB9IGVsc2UgaWYgKGluaXRpYWxTbG9wZSA9PT0gMC4wKSB7XG4gICAgICByZXR1cm4gZ3Vlc3NGb3JUO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYmluYXJ5U3ViZGl2aWRlKGFYLCBpbnRlcnZhbFN0YXJ0LCBpbnRlcnZhbFN0YXJ0ICsga1NhbXBsZVN0ZXBTaXplLCBtWDEsIG1YMik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIEJlemllckVhc2luZyAoeCkge1xuICAgIC8vIEJlY2F1c2UgSmF2YVNjcmlwdCBudW1iZXIgYXJlIGltcHJlY2lzZSwgd2Ugc2hvdWxkIGd1YXJhbnRlZSB0aGUgZXh0cmVtZXMgYXJlIHJpZ2h0LlxuICAgIGlmICh4ID09PSAwKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgaWYgKHggPT09IDEpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICByZXR1cm4gY2FsY0JlemllcihnZXRURm9yWCh4KSwgbVkxLCBtWTIpO1xuICB9O1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmZ1bmN0aW9uIGNhbWVsQ2FzZVRvRGFzaChjYW1lbENhc2VTdHJpbmcsIGpvaW5XaXRoID0gXCItXCIpIHtcclxuICAgIHJldHVybiBjYW1lbENhc2VTdHJpbmcucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgXCIkMVwiICsgam9pbldpdGggKyBcIiQyXCIpLnRvTG93ZXJDYXNlKCk7XHJcbn1cclxuZXhwb3J0cy5jYW1lbENhc2VUb0Rhc2ggPSBjYW1lbENhc2VUb0Rhc2g7XHJcbmZ1bmN0aW9uIHRvVXBwZXIobWF0Y2gsIGdyb3VwMSkge1xyXG4gICAgcmV0dXJuIGdyb3VwMSA/IGdyb3VwMS50b1VwcGVyQ2FzZSgpIDogJyc7XHJcbn1cclxudmFyIERFRkFVTFRfUkVHRVggPSAvWy1fXSsoLik/L2c7XHJcbmZ1bmN0aW9uIGRhc2hUb0NhbWVsQ2FzZShkYXNoU3RyaW5nLCBzcGxpdEF0KSB7XHJcbiAgICByZXR1cm4gZGFzaFN0cmluZy5yZXBsYWNlKHNwbGl0QXQgPyBuZXcgUmVnRXhwKCdbJyArIHNwbGl0QXQgKyAnXSsoLiknLCAnZycpIDogREVGQVVMVF9SRUdFWCwgdG9VcHBlcik7XHJcbn1cclxuZXhwb3J0cy5kYXNoVG9DYW1lbENhc2UgPSBkYXNoVG9DYW1lbENhc2U7XHJcbiIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImRlY29tcG9zZURPTU1hdHJpeFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJkZWNvbXBvc2VET01NYXRyaXhcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4vKioqKioqLyBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vKioqKioqLyBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuLyoqKioqKi8gXHRcdHJldHVybiBucztcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2RlY29tcG9zZURvbW1hdHJpeC5tanNcIik7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovICh7XG5cbi8qKiovIFwiLi9kZWNvbXBvc2VEb21tYXRyaXgubWpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL2RlY29tcG9zZURvbW1hdHJpeC5tanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihfX3dlYnBhY2tfbW9kdWxlX18sIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5ldmFsKFwiX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXFxcImRlZmF1bHRcXFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIGRlY29tcG9zZURPTU1hdHJpeDsgfSk7XFxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9kZWNvbXBvc2VNYXRyaXhfbWpzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2RlY29tcG9zZU1hdHJpeC5tanMgKi8gXFxcIi4vZGVjb21wb3NlTWF0cml4Lm1qc1xcXCIpO1xcbi8qXFxuXFxuRE9NTWF0cml4IGlzIGNvbHVtbiBtYWpvciwgbWVhbmluZzpcXG4gXyAgICAgICAgICAgICAgIF9cXG58IG0xMSBtMjEgbTMxIG00MSB8ICBcXG4gIG0xMiBtMjIgbTMyIG00MlxcbiAgbTEzIG0yMyBtMzMgbTQzXFxuICBtMTQgbTI0IG0zNCBtNDRcXG58XyAgICAgICAgICAgICAgIF98XFxuXFxuKi9cXG5cXG5cXG5cXG5mdW5jdGlvbiBkZWNvbXBvc2VET01NYXRyaXgoZG9tTWF0cml4KSB7XFxuXFx0Y29uc3QgaW5kZXhhYmxlVmVyc2lvbk9mTWF0cml4ID0gbmV3IEFycmF5KDQpO1xcblxcdGZvciAobGV0IGNvbHVtbkluZGV4ID0gMTsgY29sdW1uSW5kZXggPCA1OyBjb2x1bW5JbmRleCsrKSB7XFxuXFx0XFx0Y29uc3QgY29sdW1uQXJyYXkgPSBpbmRleGFibGVWZXJzaW9uT2ZNYXRyaXhbY29sdW1uSW5kZXggLSAxXSA9IG5ldyBBcnJheSg0KTtcXG5cXHRcXHRmb3IgKGxldCByb3dJbmRleCA9IDE7IHJvd0luZGV4IDwgNTsgcm93SW5kZXgrKykge1xcblxcdFxcdFxcdGNvbHVtbkFycmF5W3Jvd0luZGV4IC0gMV0gPSBkb21NYXRyaXhbYG0ke2NvbHVtbkluZGV4fSR7cm93SW5kZXh9YF07XFxuXFx0XFx0fVxcblxcdH1cXG5cXG5cXHRyZXR1cm4gT2JqZWN0KF9kZWNvbXBvc2VNYXRyaXhfbWpzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXFxcImRlZmF1bHRcXFwiXSkoaW5kZXhhYmxlVmVyc2lvbk9mTWF0cml4KTtcXG59XFxuXFxuLy8jIHNvdXJjZVVSTD13ZWJwYWNrOi8vZGVjb21wb3NlRE9NTWF0cml4Ly4vZGVjb21wb3NlRG9tbWF0cml4Lm1qcz9cIik7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vZGVjb21wb3NlTWF0cml4Lm1qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9kZWNvbXBvc2VNYXRyaXgubWpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24oX193ZWJwYWNrX21vZHVsZV9fLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuZXZhbChcIl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcXG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFxcXCJkZWZhdWx0XFxcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBkZWNvbXBvc2VNYXRyaXg7IH0pO1xcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfdmVjdG9yRnVuY3Rpb25zX21qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi92ZWN0b3JGdW5jdGlvbnMubWpzICovIFxcXCIuL3ZlY3RvckZ1bmN0aW9ucy5tanNcXFwiKTtcXG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3JvdW5kVG9UaHJlZVBsYWNlc19tanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vcm91bmRUb1RocmVlUGxhY2VzLm1qcyAqLyBcXFwiLi9yb3VuZFRvVGhyZWVQbGFjZXMubWpzXFxcIik7XFxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9xdWF0ZXJuaW9uVG9EZWdyZWVzWFlaX21qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9xdWF0ZXJuaW9uVG9EZWdyZWVzWFlaLm1qcyAqLyBcXFwiLi9xdWF0ZXJuaW9uVG9EZWdyZWVzWFlaLm1qc1xcXCIpO1xcbi8qXFxuXFxudGhpcyBjb2RlIGlzIGNvcGllZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC1uYXRpdmUvYmxvYi9tYXN0ZXIvTGlicmFyaWVzL1V0aWxpdGllcy9NYXRyaXhNYXRoLmpzI0w1NzIgYW5kIG1vZGlmaWVkXFxuZm9yIHNvbWUgY2xhcml0eSBhbmQgYmVpbmcgYWJsZSB0byB3b3JrIHN0YW5kYWxvbmUuIEV4cGVjdHMgdGhlIG1hdHJpeCB0byBiZSBhIDQtZWxlbWVudCBhcnJheSBvZiA0LWVsZW1lbnQgYXJyYXlzIG9mIG51bWJlcnMuXFxuXFxuW1xcbiAgICBbY29sdW1uMSByb3cxIHZhbHVlLCBjb2x1bW4xIHJvdzIgdmFsdWUsIGNvbHVtbjEgcm93MyB2YWx1ZV0sXFxuICAgIFtjb2x1bW4yIHJvdzEgdmFsdWUsIGNvbHVtbjIgcm93MiB2YWx1ZSwgY29sdW1uMiByb3czIHZhbHVlXSxcXG4gICAgW2NvbHVtbjMgcm93MSB2YWx1ZSwgY29sdW1uMyByb3cyIHZhbHVlLCBjb2x1bW4zIHJvdzMgdmFsdWVdLFxcbiAgICBbY29sdW1uNCByb3cxIHZhbHVlLCBjb2x1bW40IHJvdzIgdmFsdWUsIGNvbHVtbjQgcm93MyB2YWx1ZV1cXG5dXFxuXFxuKi9cXG5cXG5cXG5cXG5cXG5cXG5jb25zdCBSQURfVE9fREVHID0gMTgwIC8gTWF0aC5QSTtcXG5cXG5mdW5jdGlvbiBkZWNvbXBvc2VNYXRyaXgobWF0cml4KSB7XFxuXFx0Y29uc3QgcXVhdGVybmlvbiA9IG5ldyBBcnJheSg0KTtcXG5cXHRjb25zdCBzY2FsZSA9IG5ldyBBcnJheSgzKTtcXG5cXHRjb25zdCBza2V3ID0gbmV3IEFycmF5KDMpO1xcblxcdGNvbnN0IHRyYW5zbGF0aW9uID0gbmV3IEFycmF5KDMpO1xcblxcblxcdC8vIHRyYW5zbGF0aW9uIGlzIHNpbXBsZVxcblxcdC8vIGl0J3MgdGhlIGZpcnN0IDMgdmFsdWVzIGluIHRoZSBsYXN0IGNvbHVtblxcblxcdC8vIGkuZS4gbTQxIGlzIFggdHJhbnNsYXRpb24sIG00MiBpcyBZIGFuZCBtNDMgaXMgWlxcblxcdGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XFxuXFx0XFx0dHJhbnNsYXRpb25baV0gPSBtYXRyaXhbM11baV07XFxuXFx0fVxcblxcblxcdC8vIE5vdyBnZXQgc2NhbGUgYW5kIHNoZWFyLlxcblxcdGNvbnN0IG5vcm1hbGl6ZWRDb2x1bW5zID0gbmV3IEFycmF5KDMpO1xcblxcdGZvciAobGV0IGNvbHVtbkluZGV4ID0gMDsgY29sdW1uSW5kZXggPCAzOyBjb2x1bW5JbmRleCsrKSB7XFxuXFx0XFx0bm9ybWFsaXplZENvbHVtbnNbY29sdW1uSW5kZXhdID0gbWF0cml4W2NvbHVtbkluZGV4XS5zbGljZSgwLCAzKTtcXG5cXHR9XFxuXFxuXFx0Ly8gQ29tcHV0ZSBYIHNjYWxlIGZhY3RvciBhbmQgbm9ybWFsaXplIGZpcnN0IHJvdy5cXG5cXHRzY2FsZVswXSA9IF92ZWN0b3JGdW5jdGlvbnNfbWpzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXFxcImxlbmd0aFxcXCJdKG5vcm1hbGl6ZWRDb2x1bW5zWzBdKTtcXG5cXHRub3JtYWxpemVkQ29sdW1uc1swXSA9IF92ZWN0b3JGdW5jdGlvbnNfbWpzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXFxcIm5vcm1hbGl6ZVxcXCJdKG5vcm1hbGl6ZWRDb2x1bW5zWzBdLCBzY2FsZVswXSk7XFxuXFxuXFx0Ly8gQ29tcHV0ZSBYWSBzaGVhciBmYWN0b3IgYW5kIG1ha2UgMm5kIHJvdyBvcnRob2dvbmFsIHRvIDFzdC5cXG5cXHRza2V3WzBdID0gX3ZlY3RvckZ1bmN0aW9uc19tanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcXFwiZG90UHJvZHVjdFxcXCJdKG5vcm1hbGl6ZWRDb2x1bW5zWzBdLCBub3JtYWxpemVkQ29sdW1uc1sxXSk7XFxuXFx0bm9ybWFsaXplZENvbHVtbnNbMV0gPSBfdmVjdG9yRnVuY3Rpb25zX21qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1xcXCJsaW5lYXJDb21iaW5hdGlvblxcXCJdKG5vcm1hbGl6ZWRDb2x1bW5zWzFdLCBub3JtYWxpemVkQ29sdW1uc1swXSwgMS4wLCAtc2tld1swXSk7XFxuXFxuXFx0Ly8gTm93LCBjb21wdXRlIFkgc2NhbGUgYW5kIG5vcm1hbGl6ZSAybmQgcm93LlxcblxcdHNjYWxlWzFdID0gX3ZlY3RvckZ1bmN0aW9uc19tanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcXFwibGVuZ3RoXFxcIl0obm9ybWFsaXplZENvbHVtbnNbMV0pO1xcblxcdG5vcm1hbGl6ZWRDb2x1bW5zWzFdID0gX3ZlY3RvckZ1bmN0aW9uc19tanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcXFwibm9ybWFsaXplXFxcIl0obm9ybWFsaXplZENvbHVtbnNbMV0sIHNjYWxlWzFdKTtcXG5cXHRza2V3WzBdIC89IHNjYWxlWzFdO1xcblxcblxcdC8vIENvbXB1dGUgWFogYW5kIFlaIHNoZWFycywgb3J0aG9nb25hbGl6ZSAzcmQgcm93XFxuXFx0c2tld1sxXSA9IF92ZWN0b3JGdW5jdGlvbnNfbWpzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXFxcImRvdFByb2R1Y3RcXFwiXShub3JtYWxpemVkQ29sdW1uc1swXSwgbm9ybWFsaXplZENvbHVtbnNbMl0pO1xcblxcdG5vcm1hbGl6ZWRDb2x1bW5zWzJdID0gX3ZlY3RvckZ1bmN0aW9uc19tanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcXFwibGluZWFyQ29tYmluYXRpb25cXFwiXShub3JtYWxpemVkQ29sdW1uc1syXSwgbm9ybWFsaXplZENvbHVtbnNbMF0sIDEuMCwgLXNrZXdbMV0pO1xcblxcdHNrZXdbMl0gPSBfdmVjdG9yRnVuY3Rpb25zX21qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1xcXCJkb3RQcm9kdWN0XFxcIl0obm9ybWFsaXplZENvbHVtbnNbMV0sIG5vcm1hbGl6ZWRDb2x1bW5zWzJdKTtcXG5cXHRub3JtYWxpemVkQ29sdW1uc1syXSA9IF92ZWN0b3JGdW5jdGlvbnNfbWpzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXFxcImxpbmVhckNvbWJpbmF0aW9uXFxcIl0obm9ybWFsaXplZENvbHVtbnNbMl0sIG5vcm1hbGl6ZWRDb2x1bW5zWzFdLCAxLjAsIC1za2V3WzJdKTtcXG5cXG5cXHQvLyBOZXh0LCBnZXQgWiBzY2FsZSBhbmQgbm9ybWFsaXplIDNyZCByb3cuXFxuXFx0c2NhbGVbMl0gPSBfdmVjdG9yRnVuY3Rpb25zX21qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1xcXCJsZW5ndGhcXFwiXShub3JtYWxpemVkQ29sdW1uc1syXSk7XFxuXFx0bm9ybWFsaXplZENvbHVtbnNbMl0gPSBfdmVjdG9yRnVuY3Rpb25zX21qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1xcXCJub3JtYWxpemVcXFwiXShub3JtYWxpemVkQ29sdW1uc1syXSwgc2NhbGVbMl0pO1xcblxcdHNrZXdbMV0gLz0gc2NhbGVbMl07XFxuXFx0c2tld1syXSAvPSBzY2FsZVsyXTtcXG5cXG5cXHQvLyBBdCB0aGlzIHBvaW50LCB0aGUgbWF0cml4IGRlZmluZWQgaW4gbm9ybWFsaXplZENvbHVtbnMgaXMgb3J0aG9ub3JtYWwuXFxuXFx0Ly8gQ2hlY2sgZm9yIGEgY29vcmRpbmF0ZSBzeXN0ZW0gZmxpcC4gIElmIHRoZSBkZXRlcm1pbmFudFxcblxcdC8vIGlzIC0xLCB0aGVuIG5lZ2F0ZSB0aGUgbWF0cml4IGFuZCB0aGUgc2NhbGluZyBmYWN0b3JzLlxcblxcdGNvbnN0IHBkdW0zID0gX3ZlY3RvckZ1bmN0aW9uc19tanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcXFwiY3Jvc3NQcm9kdWN0XFxcIl0obm9ybWFsaXplZENvbHVtbnNbMV0sIG5vcm1hbGl6ZWRDb2x1bW5zWzJdKTtcXG5cXHRpZiAoX3ZlY3RvckZ1bmN0aW9uc19tanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcXFwiZG90UHJvZHVjdFxcXCJdKG5vcm1hbGl6ZWRDb2x1bW5zWzBdLCBwZHVtMykgPCAwKSB7XFxuXFx0XFx0Zm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcXG5cXHRcXHRcXHRzY2FsZVtpXSAqPSAtMTtcXG5cXHRcXHRcXHRub3JtYWxpemVkQ29sdW1uc1tpXVswXSAqPSAtMTtcXG5cXHRcXHRcXHRub3JtYWxpemVkQ29sdW1uc1tpXVsxXSAqPSAtMTtcXG5cXHRcXHRcXHRub3JtYWxpemVkQ29sdW1uc1tpXVsyXSAqPSAtMTtcXG5cXHRcXHR9XFxuXFx0fVxcblxcblxcdC8vIE5vdywgZ2V0IHRoZSByb3RhdGlvbnMgb3V0XFxuXFx0cXVhdGVybmlvblswXSA9XFxuXFx0XFx0MC41ICogTWF0aC5zcXJ0KE1hdGgubWF4KDEgKyBub3JtYWxpemVkQ29sdW1uc1swXVswXSAtIG5vcm1hbGl6ZWRDb2x1bW5zWzFdWzFdIC0gbm9ybWFsaXplZENvbHVtbnNbMl1bMl0sIDApKTtcXG5cXHRxdWF0ZXJuaW9uWzFdID1cXG5cXHRcXHQwLjUgKiBNYXRoLnNxcnQoTWF0aC5tYXgoMSAtIG5vcm1hbGl6ZWRDb2x1bW5zWzBdWzBdICsgbm9ybWFsaXplZENvbHVtbnNbMV1bMV0gLSBub3JtYWxpemVkQ29sdW1uc1syXVsyXSwgMCkpO1xcblxcdHF1YXRlcm5pb25bMl0gPVxcblxcdFxcdDAuNSAqIE1hdGguc3FydChNYXRoLm1heCgxIC0gbm9ybWFsaXplZENvbHVtbnNbMF1bMF0gLSBub3JtYWxpemVkQ29sdW1uc1sxXVsxXSArIG5vcm1hbGl6ZWRDb2x1bW5zWzJdWzJdLCAwKSk7XFxuXFx0cXVhdGVybmlvblszXSA9XFxuXFx0XFx0MC41ICogTWF0aC5zcXJ0KE1hdGgubWF4KDEgKyBub3JtYWxpemVkQ29sdW1uc1swXVswXSArIG5vcm1hbGl6ZWRDb2x1bW5zWzFdWzFdICsgbm9ybWFsaXplZENvbHVtbnNbMl1bMl0sIDApKTtcXG5cXG5cXHRpZiAobm9ybWFsaXplZENvbHVtbnNbMl1bMV0gPiBub3JtYWxpemVkQ29sdW1uc1sxXVsyXSkge1xcblxcdFxcdHF1YXRlcm5pb25bMF0gPSAtcXVhdGVybmlvblswXTtcXG5cXHR9XFxuXFx0aWYgKG5vcm1hbGl6ZWRDb2x1bW5zWzBdWzJdID4gbm9ybWFsaXplZENvbHVtbnNbMl1bMF0pIHtcXG5cXHRcXHRxdWF0ZXJuaW9uWzFdID0gLXF1YXRlcm5pb25bMV07XFxuXFx0fVxcblxcdGlmIChub3JtYWxpemVkQ29sdW1uc1sxXVswXSA+IG5vcm1hbGl6ZWRDb2x1bW5zWzBdWzFdKSB7XFxuXFx0XFx0cXVhdGVybmlvblsyXSA9IC1xdWF0ZXJuaW9uWzJdO1xcblxcdH1cXG5cXG5cXHQvLyBjb3JyZWN0IGZvciBvY2Nhc2lvbmFsLCB3ZWlyZCBFdWxlciBzeW5vbnltcyBmb3IgMmQgcm90YXRpb25cXG5cXHRsZXQgcm90YXRpb25EZWdyZWVzO1xcblxcdGlmIChcXG5cXHRcXHRxdWF0ZXJuaW9uWzBdIDwgMC4wMDEgJiZcXG5cXHRcXHRxdWF0ZXJuaW9uWzBdID49IDAgJiZcXG5cXHRcXHRxdWF0ZXJuaW9uWzFdIDwgMC4wMDEgJiZcXG5cXHRcXHRxdWF0ZXJuaW9uWzFdID49IDBcXG5cXHQpIHtcXG5cXHRcXHQvLyB0aGlzIGlzIGEgMmQgcm90YXRpb24gb24gdGhlIHotYXhpc1xcblxcdFxcdHJvdGF0aW9uRGVncmVlcyA9IFtcXG5cXHRcXHRcXHQwLFxcblxcdFxcdFxcdDAsXFxuXFx0XFx0XFx0T2JqZWN0KF9yb3VuZFRvVGhyZWVQbGFjZXNfbWpzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXFxcImRlZmF1bHRcXFwiXSkoXFxuXFx0XFx0XFx0XFx0KE1hdGguYXRhbjIobm9ybWFsaXplZENvbHVtbnNbMF1bMV0sIG5vcm1hbGl6ZWRDb2x1bW5zWzBdWzBdKSAqIDE4MCkgLyBNYXRoLlBJXFxuXFx0XFx0XFx0KVxcblxcdFxcdF07XFxuXFx0fSBlbHNlIHtcXG5cXHRcXHRyb3RhdGlvbkRlZ3JlZXMgPSBPYmplY3QoX3F1YXRlcm5pb25Ub0RlZ3JlZXNYWVpfbWpzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19bXFxcImRlZmF1bHRcXFwiXSkocXVhdGVybmlvbik7XFxuXFx0fVxcblxcblxcdC8vIGV4cG9zZSBib3RoIGJhc2UgZGF0YSBhbmQgY29udmVuaWVuY2UgbmFtZXNcXG5cXHRyZXR1cm4ge1xcblxcdFxcdHJvdGF0ZVg6IHJvdGF0aW9uRGVncmVlc1swXSxcXG5cXHRcXHRyb3RhdGVZOiByb3RhdGlvbkRlZ3JlZXNbMV0sXFxuXFx0XFx0cm90YXRlWjogcm90YXRpb25EZWdyZWVzWzJdLFxcblxcdFxcdHNjYWxlWDogT2JqZWN0KF9yb3VuZFRvVGhyZWVQbGFjZXNfbWpzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXFxcImRlZmF1bHRcXFwiXSkoc2NhbGVbMF0pLFxcblxcdFxcdHNjYWxlWTogT2JqZWN0KF9yb3VuZFRvVGhyZWVQbGFjZXNfbWpzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXFxcImRlZmF1bHRcXFwiXSkoc2NhbGVbMV0pLFxcblxcdFxcdHNjYWxlWjogT2JqZWN0KF9yb3VuZFRvVGhyZWVQbGFjZXNfbWpzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXFxcImRlZmF1bHRcXFwiXSkoc2NhbGVbMl0pLFxcblxcdFxcdHRyYW5zbGF0ZVg6IHRyYW5zbGF0aW9uWzBdLFxcblxcdFxcdHRyYW5zbGF0ZVk6IHRyYW5zbGF0aW9uWzFdLFxcblxcdFxcdHRyYW5zbGF0ZVo6IHRyYW5zbGF0aW9uWzJdLFxcblxcdFxcdHNrZXdYWTogT2JqZWN0KF9yb3VuZFRvVGhyZWVQbGFjZXNfbWpzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXFxcImRlZmF1bHRcXFwiXSkoc2tld1swXSkgKiBSQURfVE9fREVHLFxcblxcdFxcdHNrZXdYWjogT2JqZWN0KF9yb3VuZFRvVGhyZWVQbGFjZXNfbWpzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXFxcImRlZmF1bHRcXFwiXSkoc2tld1sxXSkgKiBSQURfVE9fREVHLFxcblxcdFxcdHNrZXdZWjogT2JqZWN0KF9yb3VuZFRvVGhyZWVQbGFjZXNfbWpzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXFxcImRlZmF1bHRcXFwiXSkoc2tld1syXSAqIFJBRF9UT19ERUcpXFxuXFx0fTtcXG59XFxuXFxuLy8jIHNvdXJjZVVSTD13ZWJwYWNrOi8vZGVjb21wb3NlRE9NTWF0cml4Ly4vZGVjb21wb3NlTWF0cml4Lm1qcz9cIik7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vcXVhdGVybmlvblRvRGVncmVlc1hZWi5tanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3F1YXRlcm5pb25Ub0RlZ3JlZXNYWVoubWpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogZGVmYXVsdCAqL1xuLyoqKi8gKGZ1bmN0aW9uKF9fd2VicGFja19tb2R1bGVfXywgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbmV2YWwoXCJfX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XFxuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcXFwiZGVmYXVsdFxcXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gcXVhdGVybmlvblRvRGVncmVlc1hZWjsgfSk7XFxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9yb3VuZFRvVGhyZWVQbGFjZXNfbWpzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3JvdW5kVG9UaHJlZVBsYWNlcy5tanMgKi8gXFxcIi4vcm91bmRUb1RocmVlUGxhY2VzLm1qc1xcXCIpO1xcbi8qXFxuXFxuIGNvcGllZCBmcm9tOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QtbmF0aXZlL2Jsb2IvbWFzdGVyL0xpYnJhcmllcy9VdGlsaXRpZXMvTWF0cml4TWF0aC5qc1xcblxcbiovXFxuXFxuXFxuXFxuXFxuY29uc3QgUkFEX1RPX0RFRyA9IDE4MCAvIE1hdGguUEk7XFxuXFxuZnVuY3Rpb24gcXVhdGVybmlvblRvRGVncmVlc1hZWihxdWF0ZXJuaW9uKSB7XFxuXFxuXFx0Y29uc3QgW3F4LCBxeSwgcXosIHF3XSA9IHF1YXRlcm5pb247XFxuXFx0Y29uc3QgcXcyID0gcXcgKiBxdztcXG5cXHRjb25zdCBxeDIgPSBxeCAqIHF4O1xcblxcdGNvbnN0IHF5MiA9IHF5ICogcXk7XFxuXFx0Y29uc3QgcXoyID0gcXogKiBxejtcXG5cXHRjb25zdCB0ZXN0ID0gcXggKiBxeSArIHF6ICogcXc7XFxuXFx0Y29uc3QgdW5pdCA9IHF3MiArIHF4MiArIHF5MiArIHF6MjtcXG5cXG5cXHRpZiAodGVzdCA+IDAuNDk5OTkgKiB1bml0KSB7XFxuXFx0ICByZXR1cm4gWzAsIDIgKiBNYXRoLmF0YW4yKHF4LCBxdykgKiBSQURfVE9fREVHLCA5MF07XFxuXFx0fVxcblxcdGlmICh0ZXN0IDwgLTAuNDk5OTkgKiB1bml0KSB7XFxuXFx0ICByZXR1cm4gWzAsIC0yICogTWF0aC5hdGFuMihxeCwgcXcpICogUkFEX1RPX0RFRywgLTkwXTtcXG5cXHR9XFxuXFxuXFx0cmV0dXJuIFtcXG5cXHQgIE9iamVjdChfcm91bmRUb1RocmVlUGxhY2VzX21qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1xcXCJkZWZhdWx0XFxcIl0pKFxcblxcdFxcdE1hdGguYXRhbjIoMiAqIHF4ICogcXcgLSAyICogcXkgKiBxeiwgMSAtIDIgKiBxeDIgLSAyICogcXoyKSAqIFJBRF9UT19ERUcsXFxuXFx0ICApLFxcblxcdCAgT2JqZWN0KF9yb3VuZFRvVGhyZWVQbGFjZXNfbWpzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXFxcImRlZmF1bHRcXFwiXSkoXFxuXFx0XFx0TWF0aC5hdGFuMigyICogcXkgKiBxdyAtIDIgKiBxeCAqIHF6LCAxIC0gMiAqIHF5MiAtIDIgKiBxejIpICogUkFEX1RPX0RFRyxcXG5cXHQgICksXFxuXFx0ICBPYmplY3QoX3JvdW5kVG9UaHJlZVBsYWNlc19tanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcXFwiZGVmYXVsdFxcXCJdKShNYXRoLmFzaW4oMiAqIHF4ICogcXkgKyAyICogcXogKiBxdykgKiBSQURfVE9fREVHKSxcXG5cXHRdO1xcblxcbn1cXG5cXG4vLyMgc291cmNlVVJMPXdlYnBhY2s6Ly9kZWNvbXBvc2VET01NYXRyaXgvLi9xdWF0ZXJuaW9uVG9EZWdyZWVzWFlaLm1qcz9cIik7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vcm91bmRUb1RocmVlUGxhY2VzLm1qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9yb3VuZFRvVGhyZWVQbGFjZXMubWpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24oX193ZWJwYWNrX21vZHVsZV9fLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuZXZhbChcIl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcXG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFxcXCJkZWZhdWx0XFxcIiwgZnVuY3Rpb24oKSB7IHJldHVybiByb3VuZFRvVGhyZWVQbGFjZXM7IH0pO1xcbi8qXFxuXFxuZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QtbmF0aXZlL2Jsb2IvbWFzdGVyL0xpYnJhcmllcy9VdGlsaXRpZXMvTWF0cml4TWF0aC5qc1xcblxcbiovIFxcblxcbmZ1bmN0aW9uIHJvdW5kVG9UaHJlZVBsYWNlcyhudW1iZXIpe1xcbiAgICBjb25zdCBhcnIgPSBudW1iZXIudG9TdHJpbmcoKS5zcGxpdCgnZScpO1xcbiAgICByZXR1cm4gTWF0aC5yb3VuZChhcnJbMF0gKyAnZScgKyAoYXJyWzFdID8gK2FyclsxXSAtIDMgOiAzKSkgKiAwLjAwMTtcXG59XFxuXFxuLy8jIHNvdXJjZVVSTD13ZWJwYWNrOi8vZGVjb21wb3NlRE9NTWF0cml4Ly4vcm91bmRUb1RocmVlUGxhY2VzLm1qcz9cIik7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vdmVjdG9yRnVuY3Rpb25zLm1qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi92ZWN0b3JGdW5jdGlvbnMubWpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBsZW5ndGgsIG5vcm1hbGl6ZSwgZG90UHJvZHVjdCwgY3Jvc3NQcm9kdWN0LCBsaW5lYXJDb21iaW5hdGlvbiAqL1xuLyoqKi8gKGZ1bmN0aW9uKF9fd2VicGFja19tb2R1bGVfXywgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbmV2YWwoXCJfX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XFxuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcXFwibGVuZ3RoXFxcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBsZW5ndGg7IH0pO1xcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXFxcIm5vcm1hbGl6ZVxcXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gbm9ybWFsaXplOyB9KTtcXG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFxcXCJkb3RQcm9kdWN0XFxcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBkb3RQcm9kdWN0OyB9KTtcXG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFxcXCJjcm9zc1Byb2R1Y3RcXFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIGNyb3NzUHJvZHVjdDsgfSk7XFxuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcXFwibGluZWFyQ29tYmluYXRpb25cXFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIGxpbmVhckNvbWJpbmF0aW9uOyB9KTtcXG4vKlxcblxcbiBjb3BpZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QtbmF0aXZlL2Jsb2IvbWFzdGVyL0xpYnJhcmllcy9VdGlsaXRpZXMvTWF0cml4TWF0aC5qcyNMNTcyXFxuXFxuIHZlY3RvcnMgYXJlIGp1c3QgYXJyYXlzIG9mIG51bWJlcnNcXG5cXG4qL1xcblxcbmZ1bmN0aW9uIGxlbmd0aCh2ZWN0b3IpIHtcXG4gICAgcmV0dXJuIE1hdGguc3FydChcXG4gICAgICAgIHZlY3RvclswXSAqIHZlY3RvclswXSArIFxcbiAgICAgICAgdmVjdG9yWzFdICogdmVjdG9yWzFdICsgXFxuICAgICAgICB2ZWN0b3JbMl0gKiB2ZWN0b3JbMl1cXG4gICAgKTtcXG59XFxuXFxuZnVuY3Rpb24gbm9ybWFsaXplKHZlY3RvciwgcHJlQ29tcHV0ZWRWZWN0b3JMZW5ndGgpIHtcXG4gICAgcmV0dXJuIFtcXG4gICAgICAgIHZlY3RvclswXS9wcmVDb21wdXRlZFZlY3Rvckxlbmd0aCwgXFxuICAgICAgICB2ZWN0b3JbMV0vcHJlQ29tcHV0ZWRWZWN0b3JMZW5ndGgsXFxuICAgICAgICB2ZWN0b3JbMl0vcHJlQ29tcHV0ZWRWZWN0b3JMZW5ndGhcXG4gICAgXTtcXG59XFxuXFxuZnVuY3Rpb24gZG90UHJvZHVjdCh2ZWN0b3JBLCB2ZWN0b3JCKSB7XFxuICAgIHJldHVybiAoXFxuICAgICAgICB2ZWN0b3JBWzBdICogdmVjdG9yQlswXSArXFxuICAgICAgICB2ZWN0b3JBWzFdICogdmVjdG9yQlsxXSArXFxuICAgICAgICB2ZWN0b3JBWzJdICogdmVjdG9yQlsyXVxcbiAgICApO1xcbn1cXG5cXG5mdW5jdGlvbiBjcm9zc1Byb2R1Y3QodmVjdG9yQSwgdmVjdG9yQikge1xcbiAgICByZXR1cm4gW1xcbiAgICAgICAgdmVjdG9yQVsxXSAqIHZlY3RvckJbMl0gLSB2ZWN0b3JBWzJdICogdmVjdG9yQlsxXSxcXG4gICAgICAgIHZlY3RvckFbMl0gKiB2ZWN0b3JCWzBdIC0gdmVjdG9yQVswXSAqIHZlY3RvckJbMl0sXFxuICAgICAgICB2ZWN0b3JBWzBdICogdmVjdG9yQlsxXSAtIHZlY3RvckFbMV0gKiB2ZWN0b3JCWzBdXFxuICAgIF07XFxufVxcblxcbmZ1bmN0aW9uIGxpbmVhckNvbWJpbmF0aW9uKHZlY3RvckEsIHZlY3RvckIsIGFTY2FsZUZhY3RvciwgYlNjYWxlRmFjdG9yKSB7XFxuICAgIHJldHVybiBbXFxuICAgICAgICB2ZWN0b3JBWzBdICogYVNjYWxlRmFjdG9yICsgdmVjdG9yQlswXSAqIGJTY2FsZUZhY3RvcixcXG4gICAgICAgIHZlY3RvckFbMV0gKiBhU2NhbGVGYWN0b3IgKyB2ZWN0b3JCWzFdICogYlNjYWxlRmFjdG9yLFxcbiAgICAgICAgdmVjdG9yQVsyXSAqIGFTY2FsZUZhY3RvciArIHZlY3RvckJbMl0gKiBiU2NhbGVGYWN0b3JcXG4gICAgXTtcXG59XFxuXFxuLy8jIHNvdXJjZVVSTD13ZWJwYWNrOi8vZGVjb21wb3NlRE9NTWF0cml4Ly4vdmVjdG9yRnVuY3Rpb25zLm1qcz9cIik7XG5cbi8qKiovIH0pXG5cbi8qKioqKiovIH0pO1xufSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjcmVhdGVBYm9ydEVycm9yID0gKCkgPT4ge1xuXHRjb25zdCBlcnJvciA9IG5ldyBFcnJvcignRGVsYXkgYWJvcnRlZCcpO1xuXHRlcnJvci5uYW1lID0gJ0Fib3J0RXJyb3InO1xuXHRyZXR1cm4gZXJyb3I7XG59O1xuXG5jb25zdCBjcmVhdGVEZWxheSA9ICh7Y2xlYXJUaW1lb3V0OiBkZWZhdWx0Q2xlYXIsIHNldFRpbWVvdXQ6IHNldCwgd2lsbFJlc29sdmV9KSA9PiAobXMsIHt2YWx1ZSwgc2lnbmFsfSA9IHt9KSA9PiB7XG5cdGlmIChzaWduYWwgJiYgc2lnbmFsLmFib3J0ZWQpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoY3JlYXRlQWJvcnRFcnJvcigpKTtcblx0fVxuXG5cdGxldCB0aW1lb3V0SWQ7XG5cdGxldCBzZXR0bGU7XG5cdGxldCByZWplY3RGbjtcblx0Y29uc3QgY2xlYXIgPSBkZWZhdWx0Q2xlYXIgfHwgY2xlYXJUaW1lb3V0O1xuXG5cdGNvbnN0IHNpZ25hbExpc3RlbmVyID0gKCkgPT4ge1xuXHRcdGNsZWFyKHRpbWVvdXRJZCk7XG5cdFx0cmVqZWN0Rm4oY3JlYXRlQWJvcnRFcnJvcigpKTtcblx0fTtcblxuXHRjb25zdCBjbGVhbnVwID0gKCkgPT4ge1xuXHRcdGlmIChzaWduYWwpIHtcblx0XHRcdHNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKCdhYm9ydCcsIHNpZ25hbExpc3RlbmVyKTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgZGVsYXlQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdHNldHRsZSA9ICgpID0+IHtcblx0XHRcdGNsZWFudXAoKTtcblx0XHRcdGlmICh3aWxsUmVzb2x2ZSkge1xuXHRcdFx0XHRyZXNvbHZlKHZhbHVlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlamVjdCh2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHJlamVjdEZuID0gcmVqZWN0O1xuXHRcdHRpbWVvdXRJZCA9IChzZXQgfHwgc2V0VGltZW91dCkoc2V0dGxlLCBtcyk7XG5cdH0pO1xuXG5cdGlmIChzaWduYWwpIHtcblx0XHRzaWduYWwuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBzaWduYWxMaXN0ZW5lciwge29uY2U6IHRydWV9KTtcblx0fVxuXG5cdGRlbGF5UHJvbWlzZS5jbGVhciA9ICgpID0+IHtcblx0XHRjbGVhcih0aW1lb3V0SWQpO1xuXHRcdHRpbWVvdXRJZCA9IG51bGw7XG5cdFx0Y2xlYW51cCgpO1xuXHRcdHNldHRsZSgpO1xuXHR9O1xuXG5cdHJldHVybiBkZWxheVByb21pc2U7XG59O1xuXG5jb25zdCBkZWxheSA9IGNyZWF0ZURlbGF5KHt3aWxsUmVzb2x2ZTogdHJ1ZX0pO1xuZGVsYXkucmVqZWN0ID0gY3JlYXRlRGVsYXkoe3dpbGxSZXNvbHZlOiBmYWxzZX0pO1xuZGVsYXkuY3JlYXRlV2l0aFRpbWVycyA9ICh7Y2xlYXJUaW1lb3V0LCBzZXRUaW1lb3V0fSkgPT4ge1xuXHRjb25zdCBkZWxheSA9IGNyZWF0ZURlbGF5KHtjbGVhclRpbWVvdXQsIHNldFRpbWVvdXQsIHdpbGxSZXNvbHZlOiB0cnVlfSk7XG5cdGRlbGF5LnJlamVjdCA9IGNyZWF0ZURlbGF5KHtjbGVhclRpbWVvdXQsIHNldFRpbWVvdXQsIHdpbGxSZXNvbHZlOiBmYWxzZX0pO1xuXHRyZXR1cm4gZGVsYXk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlbGF5O1xuLy8gVE9ETzogUmVtb3ZlIHRoaXMgZm9yIHRoZSBuZXh0IG1ham9yIHJlbGVhc2Vcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBkZWxheTtcbiIsIlwidXNlIHN0cmljdFwiO1xyXG4vLyBUaGlzIGZpbGUgYmFzaWNhbGx5IGNvbnRhaW5zIGEgb2JzZXJ2YWJsZSBDbGFzcyAoY2FsbGVkIERhdGEpIGFuZCBhXHJcbi8vIERhdGFCYXNlIHdoaWNoIGNvbnRhaW5zIGEga29tcGxleCAobm90IHByaW1pdGl2IHR5cGVzID0gb2JqZWN0cylcclxuLy8gbWFwIG9mZiBPYnNlcnZhYmxlcyBhcyBpcyBvZnRlbiBnaXZlbiB3aGVuIHJlcXVlc3RpbmcgZGF0YSAoZS5nLiBKU09OKS5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5sZXQgeHJyYXkgPSByZXF1aXJlKFwieHJyYXlcIik7XHJcbnhycmF5KCk7XHJcbmNvbnN0IHsgSW52YWxpZFZhbHVlRXhjZXB0aW9uIH0gPSB4cnJheTtcclxuY2xhc3MgSW52YWxpZEtleSBleHRlbmRzIEVycm9yIHtcclxuICAgIGNvbnN0cnVjdG9yKGtleSwgZGF0YSkge1xyXG4gICAgICAgIHN1cGVyKFwiSW52YWxpZCBrZXkgXFxcIlwiICsga2V5ICsgXCJcXFwiIGZvciB0aGUgZm9sbG93aW5nIGRhdGEgc3RydWN0dXJlOlxcblwiICsgZGF0YS50b1N0cmluZygpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkludmFsaWRLZXkgPSBJbnZhbGlkS2V5O1xyXG5jbGFzcyBJbnZhbGlkQ2FzdCBleHRlbmRzIEVycm9yIHtcclxuICAgIGNvbnN0cnVjdG9yKGNhc3RBdHRlbXB0KSB7XHJcbiAgICAgICAgc3VwZXIoXCJDYW5ub3QgY2FzdCB0byBcIiArIGNhc3RBdHRlbXB0Lm5hbWUpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuSW52YWxpZENhc3QgPSBJbnZhbGlkQ2FzdDtcclxuLy8gRm9ybWF0cyBmZXRjaGVkICggPSByYXcpIGRhdGEgaW50byBhbiBuZXN0ZWQgRGF0YSBjb25zdHJ1Y3QuXHJcbmZ1bmN0aW9uIGZvcm1hdERhdGEoZmV0Y2hlZCwgZm9ybWF0TG9jYXRpb24sIGRlbGV0ZVVuc2VlblZhbHMgPSBmYWxzZSkge1xyXG4gICAgaWYgKGZvcm1hdExvY2F0aW9uID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgZm9ybWF0TG9jYXRpb24gPSBuZXcgRGF0YShuZXcgZmV0Y2hlZC5jb25zdHJ1Y3RvcigpKTtcclxuICAgIGxldCBscztcclxuICAgIGxldCB1cGRhdGVkRm9ybWF0TG9jYXRpb24gPSBmYWxzZTtcclxuICAgIGlmIChkZWxldGVVbnNlZW5WYWxzKVxyXG4gICAgICAgIGxzID0gW107XHJcbiAgICBpZiAodHlwZW9mIGZldGNoZWQgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICBmb3IgKGxldCBkIGluIGZldGNoZWQpIHtcclxuICAgICAgICAgICAgaWYgKCFmZXRjaGVkLmhhc093blByb3BlcnR5KGQpKVxyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmIChkZWxldGVVbnNlZW5WYWxzKVxyXG4gICAgICAgICAgICAgICAgbHMuYWRkKGQpO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGZldGNoZWRbZF0gPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChmb3JtYXRMb2NhdGlvbi52YWxbZF0gPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXRMb2NhdGlvbi52YWxbZF0gPSBuZXcgRGF0YShuZXcgZmV0Y2hlZFtkXS5jb25zdHJ1Y3RvcigpKTtcclxuICAgICAgICAgICAgICAgIGZvcm1hdERhdGEoZmV0Y2hlZFtkXSwgZm9ybWF0TG9jYXRpb24udmFsW2RdLCBkZWxldGVVbnNlZW5WYWxzKTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZWRGb3JtYXRMb2NhdGlvbiA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoZm9ybWF0TG9jYXRpb24udmFsW2RdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGZvcm1hdExvY2F0aW9uLnZhbFtkXSA9IG5ldyBEYXRhKGZldGNoZWRbZF0pO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlZEZvcm1hdExvY2F0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChmb3JtYXRMb2NhdGlvbi52YWxbZF0gaW5zdGFuY2VvZiBEYXRhKVxyXG4gICAgICAgICAgICAgICAgZm9ybWF0TG9jYXRpb24udmFsW2RdLnZhbCA9IGZldGNoZWRbZF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkZWxldGVVbnNlZW5WYWxzKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGQgaW4gZm9ybWF0TG9jYXRpb24udmFsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWZvcm1hdExvY2F0aW9uLnZhbC5oYXNPd25Qcm9wZXJ0eShkKSlcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGlmICghbHMuaW5jbHVkZXMoZCkpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm1hdExvY2F0aW9uLnZhbCBpbnN0YW5jZW9mIEFycmF5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXRMb2NhdGlvbi52YWwucmVtb3ZlSShwYXJzZUludChkKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgZm9ybWF0TG9jYXRpb24udmFsW2RdO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlZEZvcm1hdExvY2F0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL0B0cy1pZ25vcmUgd2hlbiBzb21ldGhpbmcgaXMgYWRkZWQgbm90aWZ5IGxpc3RlbmVyc1xyXG4gICAgICAgIGlmICh1cGRhdGVkRm9ybWF0TG9jYXRpb24pXHJcbiAgICAgICAgICAgIGZvcm1hdExvY2F0aW9uLm5vdGlmeSh0cnVlKTtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgICAgICBmb3JtYXRMb2NhdGlvbi52YWwgPSBmZXRjaGVkO1xyXG4gICAgcmV0dXJuIGZvcm1hdExvY2F0aW9uO1xyXG59XHJcbmZ1bmN0aW9uIHNldERhdGEoZGF0YSwgbG9jYXRpb24sIGNvbXBsZXRlKSB7XHJcbiAgICBpZiAoIShsb2NhdGlvbiBpbnN0YW5jZW9mIERhdGEpICYmIGxvY2F0aW9uICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgbG9jYXRpb24gPSBuZXcgRGF0YShsb2NhdGlvbik7XHJcbiAgICBsZXQgZGF0YUxvY2F0aW9uID0gZm9ybWF0RGF0YShkYXRhLCBsb2NhdGlvbik7XHJcbiAgICBpZiAoY29tcGxldGUgIT09IHVuZGVmaW5lZClcclxuICAgICAgICBjb21wbGV0ZSgpO1xyXG4gICAgcmV0dXJuIG5ldyBEYXRhQmFzZShkYXRhTG9jYXRpb24pO1xyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHNldERhdGE7XHJcbi8qXHJcbiAqIEhvbGRzIGFuZCBoYW5kbGVzIGFjY2VzcyB0byBhbiBjb21wbGV4IG1hcCBvZiBkYXRhLiBUaGlzIGRhdGEgQ29uc2lzaXRzIG9mIGluIGVhY2ggb3RoZXIgbmV4dGVkIERhdGEgaW50c2FuY2VzXHJcbiAqICh0byBpbml0IHN1Y2ggYW4gbWFwLCBjb25zdWx0IGZvcm1hdERhdGEuKVxyXG4gKi9cclxuY2xhc3MgRGF0YUJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICB9XHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gXCJEYXRhQmFzZTogXCIgKyB0aGlzLmRhdGEudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBhIHJlZmVyZW5jZSB0byBzdWJEYXRhIGZvdW5kIHVuZGVyIGdpdmVuIGtleShzKSAvIHBhdGhcclxuICAgICAqIEEgcmVmZXJlbmNlIGlzIGEgbmV3IERhdGFCYXNlIGluc3RhbmNlIGp1c3QgY29udGFpbmluZyB0aGUgcmVmZXJlbmNlZCBEYXRhXHJcbiAgICAgKlxyXG4gICAgICogVGhpcyBmdW5jdGlvbiByZXNvbHZlcyByZWZlcmVuY2VzIHZpYSB0aGUgXCJyZWN1cnNpdmVseSBhbmNob3JlZCBEYXRhXCIgKHJhZCkgcHJvY2VkdXJlLiBGb3IgZnVydGhlclxyXG4gICAgICogaW5zaWdodHMgd2hhdCB0aGlzIG1lYW5zIHBsZWFzZSBjb25zdWx0IHRoZSBkb2N1bWVudGF0aW9uIG9mIHRoZSBmdW5jdGlvbiByYWRcclxuICAgICAqL1xyXG4gICAgcmVmKC4uLmtleXMpIHtcclxuICAgICAgICByZXR1cm4gbmV3IERhdGFCYXNlKHRoaXMucmFkKC4uLmtleXMpKTtcclxuICAgIH1cclxuICAgIHBlZWsoLi4ua2V5cykge1xyXG4gICAgICAgIHJldHVybiBuZXcgRGF0YUJhc2UodGhpcy5mZHMoLi4ua2V5cykpO1xyXG4gICAgfVxyXG4gICAgY3VycmVudCguLi5rZXlzKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLmZkcyguLi5rZXlzKSkudmFsO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSB1bmRlcmx5aW5nIERhdGEgZm91bmQgdW5kZXIgZ2l2ZW4ga2V5KHMpIC8gcGF0aFxyXG4gICAgICogU2ltaWxhciB0byByZWYgYnV0IG5vdCB3cmFwcGVkIGluc2lkZSBhIERhdGFCYXNlIGluc3RhbmNlXHJcbiAgICAgKlxyXG4gICAgICogVGhpcyBmdW5jdGlvbiByZXNvbHZlcyByZWZlcmVuY2VzIHZpYSB0aGUgXCJyZWN1cnNpdmVseSBhbmNob3JlZCBEYXRhXCIgKHJhZCkgcHJvY2VkdXJlLiBGb3IgZnVydGhlclxyXG4gICAgICogaW5zaWdodHMgd2hhdCB0aGlzIG1lYW5zIHBsZWFzZSBjb25zdWx0IHRoZSBkb2N1bWVudGF0aW9uIG9mIHRoZSBmdW5jdGlvbiByYWRcclxuICAgICAqL1xyXG4gICAgZ2V0KGtleSwgY2IpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGtleSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2Yga2V5ID09PSBcIm51bWJlclwiIHx8IGtleSBpbnN0YW5jZW9mIERhdGEpIHtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSAoa2V5IGluc3RhbmNlb2YgRGF0YSkgPyBrZXkgOiB0aGlzLnJhZChrZXkpO1xyXG4gICAgICAgICAgICBpZiAoY2IgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgZGF0YS5zdWJzY3JpYmUoY2IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBtYXAgPSBbXTtcclxuICAgICAgICAgICAgaWYgKGNiICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSAoa2V5W2ldIGluc3RhbmNlb2YgRGF0YSkgPyBrZXlbaV0gOiB0aGlzLnJhZChrZXlbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1YnNjcmlidGlvbiA9ICh2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcFtpXSA9IHY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXkubGVuZ3RoID09PSBtYXAubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2IgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNiKC4uLm1hcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5zdWJzY3JpYmUoc3Vic2NyaWJ0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICAgICAgbWFwW2ldID0gKGtleVtpXSBpbnN0YW5jZW9mIERhdGEpID8ga2V5W2ldIDogdGhpcy5yYWQoa2V5W2ldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBtYXA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXQoa2V5LCB0bykge1xyXG4gICAgICAgIGxldCBmZHMgPSB0aGlzLmZkcyhrZXkpO1xyXG4gICAgICAgIGZvcm1hdERhdGEodG8sIGZkcywgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldHMgcmVjdXJzaXZlbHkgYW5jaG9yZWQgRGF0YSAocmFkKVxyXG4gICAgICogTWVhbmluZyBmb3IgZWFjaCBuZXN0aW5nIHN0ZXAgdGhlcmUgd2lsbCBiZSBvbmUgbGlzdGVuZXIgYXR0YXRjaGVkIHRvIGVuYWJsZSBvYmplY3RzIHRvIGJlIG9ic2VydmVkXHJcbiAgICAgKiBUaGlzIGlzIHZlcnkgcmVzb3VyY2UgKG1lbSkgZXhwZW5zaXZlLiBVc2Ugb25seSB3aGVuIG5lY2Vzc2FyeVxyXG4gICAgICovXHJcbiAgICByYWQoLi4ua2V5cykge1xyXG4gICAgICAgIGxldCBsYXN0ID0gdGhpcy5kYXRhO1xyXG4gICAgICAgIGxldCBvcmdhbml6ZWRLZXlzID0ga2V5cy5qb2luKFwiLlwiKS5zcGxpdChcIi5cIik7XHJcbiAgICAgICAgb3JnYW5pemVkS2V5cy5lYSgoaykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoayAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5leHQgPSBsYXN0LnZhbFtrXTtcclxuICAgICAgICAgICAgICAgIGlmIChuZXh0ID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEludmFsaWRLZXkoaywgbGFzdCk7XHJcbiAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgIGxhc3Quc3Vic2NyaWJlSW50ZXJuYWxseSgoYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGEgPSBhbnlba107XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGR0ID0gYSBpbnN0YW5jZW9mIERhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodHlwZW9mIGEgPT09IFwib2JqZWN0XCIgJiYgIWR0KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dC52YWwgPSAoZHQpID8gYS52YWwgOiBhO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBsYXN0ID0gbmV4dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBsYXN0O1xyXG4gICAgfVxyXG4gICAgZmRzKC4uLmtleXMpIHtcclxuICAgICAgICBsZXQgbGFzdCA9IHRoaXMuZGF0YTtcclxuICAgICAgICBsZXQgb3JnYW5pemVkS2V5cyA9IGtleXMuam9pbihcIi5cIikuc3BsaXQoXCIuXCIpO1xyXG4gICAgICAgIG9yZ2FuaXplZEtleXMuZWEoKGspID0+IHtcclxuICAgICAgICAgICAgaWYgKGsgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBuZXh0ID0gbGFzdC52YWxba107XHJcbiAgICAgICAgICAgICAgICBpZiAobmV4dCA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBJbnZhbGlkS2V5KGssIGxhc3QpO1xyXG4gICAgICAgICAgICAgICAgbGFzdCA9IG5leHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbGFzdDtcclxuICAgIH1cclxuICAgIC8vVE9ETzogbWFrZSB0aGlzIGF2YWlsYWJsZSBmb3IgREIgYXMgYSB3aG9sZSBhbmQgbGltaXQgYWNjZXMgdmlhIGludGVyZmFjZXMgKGNvbmRpdGluYWwgdHlwZXMpXHJcbiAgICBnZXQgYXNBcnJheSgpIHtcclxuICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICBpZiAodGhpcy5kYXRhLnZhbCBpbnN0YW5jZW9mIEFycmF5KVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGFBcnJheSh0aGlzLmRhdGEpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEludmFsaWRDYXN0KEFycmF5KTtcclxuICAgIH1cclxuICAgIGdldCBhc051bWJlcigpIHtcclxuICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuZGF0YS52YWwgPT09IFwibnVtYmVyXCIpXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0YU51bWJlcih0aGlzLmRhdGEpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEludmFsaWRDYXN0KE51bWJlcik7XHJcbiAgICB9XHJcbiAgICBlcXVhbHModGhhdCkge1xyXG4gICAgICAgIHJldHVybiAodGhhdCA9PT0gdW5kZWZpbmVkKSA/IGZhbHNlIDogdGhpcy5kYXRhLmVxdWFscyh0aGF0LmRhdGEsIHRydWUpO1xyXG4gICAgfVxyXG4gICAgc2FtZSh0aGF0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS52YWwgPT09IHRoYXQuZGF0YS52YWw7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5EYXRhQmFzZSA9IERhdGFCYXNlO1xyXG5jbGFzcyBEYXRhTnVtYmVyIGV4dGVuZHMgRGF0YUJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xyXG4gICAgICAgIHN1cGVyKGRhdGEpO1xyXG4gICAgfVxyXG4gICAgaW5jKGJ5ID0gMSkge1xyXG4gICAgICAgIHRoaXMuZGF0YS52YWwgKz0gYnk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS52YWw7XHJcbiAgICB9XHJcbiAgICBkZWMoYnkgPSAxKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhLnZhbCAtPSBieTtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLnZhbDtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkRhdGFOdW1iZXIgPSBEYXRhTnVtYmVyO1xyXG5jbGFzcyBEYXRhQXJyYXkgZXh0ZW5kcyBEYXRhQmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XHJcbiAgICAgICAgc3VwZXIoZGF0YSk7XHJcbiAgICB9XHJcbiAgICBsaXN0KGxvb3AsIHN0ZXBJbnRvUGF0aEFmdGVyd2FyZHMgPSBcIlwiKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aCgpOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGVuZCA9IGxvb3AobmV3IERhdGFCYXNlKHRoaXMuZmRzKGksIHN0ZXBJbnRvUGF0aEFmdGVyd2FyZHMpKSwgaSk7XHJcbiAgICAgICAgICAgIGlmIChlbmQgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbmQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yRWFjaChsb29wLCBiZWZvcmVMb29wLCBhZnRlckxvb3AsIHN0ZXBJbnRvUGF0aEFmdGVyd2FyZHMgPSBcIlwiKSB7XHJcbiAgICAgICAgbGV0IHByb21zID0gW107XHJcbiAgICAgICAgdGhpcy5nZXQoXCJcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYmVmb3JlTG9vcCAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgcHJvbXMuYWRkKGJlZm9yZUxvb3AoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS52YWwuZWEoKGUsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIHByb21zLmFkZChsb29wKG5ldyBEYXRhQmFzZSh0aGlzLmZkcyhpLCBzdGVwSW50b1BhdGhBZnRlcndhcmRzKSksIGkpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHByb21zID0gcHJvbXMuZmlsdGVyKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZSBpbnN0YW5jZW9mIFByb21pc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoYWZ0ZXJMb29wICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9tcy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwocHJvbXMpLnRoZW4oYWZ0ZXJMb29wKTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICBhZnRlckxvb3AoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChwcm9tcy5sZW5ndGggIT09IDApXHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9tcyk7XHJcbiAgICB9XHJcbiAgICBsZW5ndGgoY2IpIHtcclxuICAgICAgICBpZiAoY2IgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS52YWwubGVuZ3RoO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmdldChcIlwiLCAoYSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2IoYS5sZW5ndGgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZWFsTGVuZ3RoKGNiKSB7XHJcbiAgICAgICAgaWYgKGNiID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGEudmFsLnJlYWxMZW5ndGg7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0KFwiXCIsIChhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYihhLnJlYWxMZW5ndGgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhbHRlcihjYiwgaW5pdGFsaXplTG9vcCA9IGZhbHNlKSB7XHJcbiAgICAgICAgdGhpcy5iZWZvcmVMYXN0Q2hhbmdlID0gdGhpcy5kYXRhLmNsb25lKCk7XHJcbiAgICAgICAgaWYgKGluaXRhbGl6ZUxvb3ApIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLnZhbC5lYSgoZSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2IobmV3IERhdGFCYXNlKGUpLCBpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2V0KFwiXCIsIChhKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBpbmRleGVzVG9CZUNhbGxlZCA9IFtdO1xyXG4gICAgICAgICAgICBhLmVhKChlLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhlc1RvQmVDYWxsZWQuYWRkKGkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZS5lcXVhbHModGhpcy5iZWZvcmVMYXN0Q2hhbmdlLnZhbFtpXSwgdHJ1ZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNiKG5ldyBEYXRhQmFzZShlKSwgaSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmJlZm9yZUxhc3RDaGFuZ2UudmFsLmVhKChlLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWluZGV4ZXNUb0JlQ2FsbGVkLmluY2x1ZGVzKGkpKVxyXG4gICAgICAgICAgICAgICAgICAgIGNiKG51bGwsIGkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5iZWZvcmVMYXN0Q2hhbmdlID0gdGhpcy5kYXRhLmNsb25lKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBtb3JwaChjYiwgaW5pdGFsaXplTG9vcCA9IGZhbHNlKSB7XHJcbiAgICAgICAgdGhpcy5iZWZvcmVMYXN0Q2hhbmdlID0gdGhpcy5kYXRhLmNsb25lKCk7XHJcbiAgICAgICAgaWYgKGluaXRhbGl6ZUxvb3ApIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLnZhbC5lYSgoZSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2IobmV3IERhdGFCYXNlKGUpLCBpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjYmEgPSBEYXRhQXJyYXkubW9ycGhNYXAuZ2V0KHRoaXMuZGF0YSk7XHJcbiAgICAgICAgaWYgKGNiYSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBEYXRhQXJyYXkubW9ycGhNYXAuc2V0KHRoaXMuZGF0YSwgW2NiXSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBjYmEuYWRkKGNiKTtcclxuICAgIH1cclxuICAgIGFkZCh2YWwsIGF0SW5kZXgpIHtcclxuICAgICAgICBsZXQgbGVuZ3RoID0gdGhpcy5sZW5ndGgoKTtcclxuICAgICAgICBsZXQgbWF4SW5kZXggPSBsZW5ndGggLSAxO1xyXG4gICAgICAgIGlmIChhdEluZGV4ID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIGF0SW5kZXggPSBsZW5ndGg7XHJcbiAgICAgICAgdGhpcy5kYXRhLnZhbC5SZXZlcnNlKCkuZWEoKGUsIGkpID0+IHtcclxuICAgICAgICAgICAgaSA9IG1heEluZGV4IC0gaTtcclxuICAgICAgICAgICAgaWYgKGkgPCBhdEluZGV4KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAvL1RISVMgSUYgSVMgTkVDRVNTQVJZIEJFQ0FVU0UgV0hFTiBTRVRUSU5HIEVNUFRZIEFSUkFZIFNPTE9UUyBUTyBVTkRFRklORUQgVEhFWSBHRVQgUElDS0VEIFVQIEJZIElURVJBVE9SU1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLnZhbFtpXSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuZGF0YS52YWxbaSArIDFdO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEudmFsW2kgKyAxXSA9IHRoaXMuZGF0YS52YWxbaV07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuZGF0YS52YWxbYXRJbmRleF07XHJcbiAgICAgICAgbGV0IG9iID0ge307XHJcbiAgICAgICAgb2JbYXRJbmRleF0gPSB2YWw7XHJcbiAgICAgICAgZm9ybWF0RGF0YShvYiwgdGhpcy5kYXRhKTtcclxuICAgICAgICBsZXQgY2JhID0gRGF0YUFycmF5Lm1vcnBoTWFwLmdldCh0aGlzLmRhdGEpO1xyXG4gICAgICAgIGlmIChjYmEgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgY2JhLmVhKChmKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmKG5ldyBEYXRhQmFzZSh0aGlzLmRhdGEudmFsW2F0SW5kZXhdKSwgYXRJbmRleCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlSShpbmRleCwgY2xvc2VHYXAgPSB0cnVlKSB7XHJcbiAgICAgICAgaWYgKGNsb3NlR2FwKVxyXG4gICAgICAgICAgICB0aGlzLmRhdGEudmFsLnJlbW92ZUkoaW5kZXgpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuZGF0YS52YWxbaW5kZXhdO1xyXG4gICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgIHRoaXMuZGF0YS5ub3RpZnkodHJ1ZSk7XHJcbiAgICAgICAgbGV0IGNiYSA9IERhdGFBcnJheS5tb3JwaE1hcC5nZXQodGhpcy5kYXRhKTtcclxuICAgICAgICBpZiAoY2JhICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIGNiYS5lYSgoZikgPT4ge1xyXG4gICAgICAgICAgICAgICAgZihudWxsLCBpbmRleCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlVih2YWwsIGNsb3NlR2FwID0gdHJ1ZSkge1xyXG4gICAgICAgIGxldCBkYXRhID0gZm9ybWF0RGF0YSh2YWwpO1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuZGF0YS52YWwuZWEoKGUsIGkpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUuZXF1YWxzKGRhdGEpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKGluZGV4ID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBJbnZhbGlkVmFsdWVFeGNlcHRpb24odmFsLCB0aGlzLmRhdGEudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgaWYgKGNsb3NlR2FwKVxyXG4gICAgICAgICAgICB0aGlzLmRhdGEudmFsLnJlbW92ZUkoaW5kZXgpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuZGF0YS52YWxbaW5kZXhdO1xyXG4gICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgIHRoaXMuZGF0YS5ub3RpZnkodHJ1ZSk7XHJcbiAgICAgICAgbGV0IGNiYSA9IERhdGFBcnJheS5tb3JwaE1hcC5nZXQodGhpcy5kYXRhKTtcclxuICAgICAgICBpZiAoY2JhICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIGNiYS5lYSgoZikgPT4ge1xyXG4gICAgICAgICAgICAgICAgZihudWxsLCBpbmRleCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbkRhdGFBcnJheS5tb3JwaE1hcCA9IG5ldyBNYXAoKTtcclxuZXhwb3J0cy5EYXRhQXJyYXkgPSBEYXRhQXJyYXk7XHJcbmNsYXNzIERhdGEge1xyXG4gICAgY29uc3RydWN0b3IodmFsKSB7XHJcbiAgICAgICAgdGhpcy5jYnMgPSBbXTtcclxuICAgICAgICB0aGlzLmludGVybmFsQ0JzID0gW107XHJcbiAgICAgICAgdGhpcy52YWwgPSB2YWw7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFNldCB0aGUgdmFsXHJcbiAgICAgKi9cclxuICAgIHNldCB2YWwodG8pIHtcclxuICAgICAgICBpZiAodGhpcy52YWwgPT09IHRvKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgdGhpcy5fdmFsID0gdG87XHJcbiAgICAgICAgdGhpcy5ub3RpZnkoZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBjdXJyZW50IHZhbFxyXG4gICAgICovXHJcbiAgICBnZXQgdmFsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92YWw7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFN1YnNjcmliZSB0byB2YWxcclxuICAgICAqIEBwYXJhbSBjYiBjYWxsYmFjayB3aGljaCBnZXRzIGNhbGxlZCB3aGVuZXZlciB0aGUgdmFsIGNoYW5nZXNcclxuICAgICAqL1xyXG4gICAgc3Vic2NyaWJlKGNiLCBpbml0ID0gdHJ1ZSkge1xyXG4gICAgICAgIHRoaXMuY2JzLmFkZChjYik7XHJcbiAgICAgICAgaWYgKGluaXQpXHJcbiAgICAgICAgICAgIGNiKHRoaXMudmFsKTtcclxuICAgIH1cclxuICAgIHN1YnNjcmliZUludGVybmFsbHkoY2IpIHtcclxuICAgICAgICB0aGlzLmludGVybmFsQ0JzLmFkZChjYik7XHJcbiAgICAgICAgY2IodGhpcy52YWwpO1xyXG4gICAgfVxyXG4gICAgdW5zdWJzY3JpYmUoY2IpIHtcclxuICAgICAgICBpZiAoY2IgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRoaXMuY2JzLnJlbW92ZShjYik7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLmNicy5jbGVhcigpO1xyXG4gICAgfVxyXG4gICAgdG9TdHJpbmcodGFiSW4gPSAwLCBpbnNpZGVPYmplY3QgPSBmYWxzZSkge1xyXG4gICAgICAgIHRhYkluKys7XHJcbiAgICAgICAgbGV0IHMgPSBcIlwiO1xyXG4gICAgICAgIGxldCB2ID0gdGhpcy52YWw7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2ID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIGxldCBoYXNQcm9wcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsZXQgYXIgPSB2IGluc3RhbmNlb2YgQXJyYXk7XHJcbiAgICAgICAgICAgIGlmIChhcilcclxuICAgICAgICAgICAgICAgIHMgKz0gXCJbXCI7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHMgKz0gXCJ7XCI7XHJcbiAgICAgICAgICAgIHMgKz0gXCJcXG5cIjtcclxuICAgICAgICAgICAgZm9yIChsZXQgayBpbiB2KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXYuaGFzT3duUHJvcGVydHkoaykpXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBoYXNQcm9wcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgIHMgKz0gXCJcXHRcIi5yZXBlYXQodGFiSW4pICsgayArIFwiOiBcIiArIHZba10udG9TdHJpbmcodGFiSW4sIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghaGFzUHJvcHMpXHJcbiAgICAgICAgICAgICAgICBzID0gcy5zdWJzdHJpbmcoMCwgcy5sZW5ndGggLSAxKTtcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzID0gcy5zdWJzdHJpbmcoMCwgcy5sZW5ndGggLSAyKSArIFwiXFxuXCI7XHJcbiAgICAgICAgICAgICAgICBzICs9IFwiXFx0XCIucmVwZWF0KHRhYkluIC0gMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGFyKVxyXG4gICAgICAgICAgICAgICAgcyArPSBcIl1cIjtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcyArPSBcIn1cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBzdCA9IHR5cGVvZiB2ID09PSBcInN0cmluZ1wiO1xyXG4gICAgICAgICAgICBpZiAoc3QpXHJcbiAgICAgICAgICAgICAgICBzICs9IFwiXFxcIlwiO1xyXG4gICAgICAgICAgICBzICs9IHY7XHJcbiAgICAgICAgICAgIGlmIChzdClcclxuICAgICAgICAgICAgICAgIHMgKz0gXCJcXFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHMgKz0gaW5zaWRlT2JqZWN0ID8gXCIsXCIgOiBcIlwiO1xyXG4gICAgICAgIHJldHVybiBzICsgXCJcXG5cIjtcclxuICAgIH1cclxuICAgIG5vdGlmeSh3aWxkID0gZmFsc2UpIHtcclxuICAgICAgICBsZXQgdmFsID0gdGhpcy52YWw7XHJcbiAgICAgICAgdGhpcy5jYnMuZWEoKGYpID0+IHtcclxuICAgICAgICAgICAgZih2YWwpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICghd2lsZCkge1xyXG4gICAgICAgICAgICB0aGlzLmludGVybmFsQ0JzLmVhKChmKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmKHZhbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ29tcGFyZXMgaWYgYWxsIGtleXMgaW4gdGhpcyBhcmUgZXF1YWwgdG8gdGhlIGVxdWl2ZWxlbnQgb25lcyBvbiBkYXRhXHJcbiAgICAgKiBEaWZmZXJlbnQgRGF0YSBJbnN0YW5jZXMgaG9sZGluZyB0aGUgc2FtZSB2YWx1ZSBhcmUgdGhlIGVxdWFsXHJcbiAgICAgKiBEYXRhIGNhbiBoYXZlIG1vcmUga2V5cyB0aGFuIHRoaXMgYW5kIHN0aWxsIGJlIGVxdWFsLlxyXG4gICAgICogSWYgeW91IGRvbnQgd2FudCB0aGlzIHBhc3MgaW4gdHJ1ZSB0byB0aGUgc3RyaWN0IHBhcmFtLiBUaGlzIHdpbGwgYmUgbW9yZSByZWNvdXJjZSBpbnRlbnNpdmVcclxuICAgICAqL1xyXG4gICAgZXF1YWxzKGRhdGEsIHN0cmljdCA9IGZhbHNlKSB7XHJcbiAgICAgICAgbGV0IHYgPSB0aGlzLnZhbDtcclxuICAgICAgICBpZiAoZGF0YSA9PT0gdW5kZWZpbmVkIHx8IGRhdGEgPT09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICBsZXQgZCA9IGRhdGEudmFsO1xyXG4gICAgICAgIGlmICh2ID09IGQpXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIGxldCBscztcclxuICAgICAgICBpZiAoc3RyaWN0KVxyXG4gICAgICAgICAgICBscyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGsgaW4gdikge1xyXG4gICAgICAgICAgICBpZiAoIXYuaGFzT3duUHJvcGVydHkoaykpXHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgaWYgKHN0cmljdClcclxuICAgICAgICAgICAgICAgIGxzLmFkZChrKTtcclxuICAgICAgICAgICAgaWYgKHZba10gIT09IGRba10pIHtcclxuICAgICAgICAgICAgICAgIGlmICh2W2tdIGluc3RhbmNlb2YgRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkW2tdIGluc3RhbmNlb2YgRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF2W2tdLmVxdWFscyhkW2tdLCBzdHJpY3QpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN0cmljdCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBrIGluIGQpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdi5oYXNPd25Qcm9wZXJ0eShrKSlcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGlmICghbHMuaW5jbHVkZXMoaykpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgY2xvbmUoKSB7XHJcbiAgICAgICAgbGV0IGQ7XHJcbiAgICAgICAgbGV0IHYgPSB0aGlzLnZhbDtcclxuICAgICAgICBpZiAodHlwZW9mIHYgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gbmV3IHYuY29uc3RydWN0b3IoKTtcclxuICAgICAgICAgICAgZCA9IG5ldyBEYXRhKGRhdGEpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBrIGluIHYpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdi5oYXNPd25Qcm9wZXJ0eShrKSlcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgZC52YWxba10gPSB2W2tdLmNsb25lKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBkID0gbmV3IERhdGEodik7XHJcbiAgICAgICAgZC5pbnRlcm5hbENCcy5hZGQoLi4udGhpcy5pbnRlcm5hbENCcyk7XHJcbiAgICAgICAgZC5jYnMuYWRkKC4uLnRoaXMuY2JzKTtcclxuICAgICAgICByZXR1cm4gZDtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkRhdGEgPSBEYXRhO1xyXG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICBjbGFzcyBFeGNlcHRpb24gZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3IobXNnKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgdGhpcy5tZXNzYWdlID0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgICAgaWYgKG1zZyAhPT0gdW5kZWZpbmVkKSB0aGlzLm1lc3NhZ2UgKz0gXCI6IFwiICsgbXNnO1xuICAgIH1cbiAgfVxuICBjbGFzcyBJbmRleE91dE9mQm91bmRzRXhjZXB0aW9uIGV4dGVuZHMgRXhjZXB0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcihpbmRleCwgYXJyYXkpIHtcbiAgICAgIHN1cGVyKFwiR2l2ZW4gdmFsdWUgXFxcIlwiICsgaW5kZXggKyBcIlxcXCIgbXVzdCBiZSBpbiByYW5nZSAwLVwiICsgKGFycmF5Lmxlbmd0aC0xKSArIFwiLlwiKTtcbiAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgICB9XG4gIH1cbiAgY2xhc3MgSW52YWxpZElucHV0RXhjZXB0aW9uIGV4dGVuZHMgRXhjZXB0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcihtc2cpIHtcbiAgICAgIHN1cGVyKFwiR2l2ZW4gaW5wdXQgaXMgaW52YWxpZC5cXG5cIiArIG1zZyk7XG4gICAgfVxuICB9XG4gIGNsYXNzIEludmFsaWRDb25zdHJ1Y3RvckV4Y2VwdGlvbiBleHRlbmRzIEV4Y2VwdGlvbntcbiAgICBjb25zdHJ1Y3Rvcihtc2cgPSBcIlwiKSB7XG4gICAgICBzdXBlcihcIkdpdmVuIGNvbnN0cnVjdG9yIG11c3QgaW5oZXJpdCBmb3JtIEFycmF5LlxcblwiICsgbXNnKTtcbiAgICB9XG4gIH1cbiAgY2xhc3MgSW52YWxpZFZhbHVlRXhjZXB0aW9uIGV4dGVuZHMgRXhjZXB0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgYXJyYXkpIHtcbiAgICAgIHN1cGVyKFwiVW5hYmxlIHRvIGZpbmQgZ2l2ZW4gdmFsdWU6IFwiICsgdmFsdWUuY29uc3RydWN0b3IubmFtZSArIFwiIFwiICsgSlNPTi5zdHJpbmdpZnkodmFsdWUpICsgXCI7IHdpdGhpbiBmb2xsb3dpbmcgYXJyYXk6IFwiICsgYXJyYXkudG9TdHJpbmcoKSk7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gICAgfVxuICB9XG5cbiAgLy9UaHJvd3MgSW5kZXhPdXRPZkJvdW5kc0V4Y2VwdGlvbiB3aGVuIGdpdmVuIGluZGV4IGlzIG91dCBvZiBib3VuZHMgb2YgYVxuICBmdW5jdGlvbiBpc0luZGV4KGksIGEpIHtcbiAgICBpZighYS5oYXNPd25Qcm9wZXJ0eShpKSkgdGhyb3cgbmV3IEluZGV4T3V0T2ZCb3VuZHNFeGNlcHRpb24oaSxhKTtcbiAgfVxuXG4gIGNvbnN0IGFyID0gXCJ4cnJheVwiO1xuXG4gIGZ1bmN0aW9uIGluaXQoQXJDb25zdHIgPSBBcnJheSkge1xuICAgIGlmKCEobmV3IEFyQ29uc3RyKCkgaW5zdGFuY2VvZiBBcnJheSkpIHRocm93IG5ldyBJbnZhbGlkQ29uc3RydWN0b3JFeGNlcHRpb24oKTtcbiAgICBpZiAoQXJDb25zdHIueHJyYXkgPT09IGFyKSByZXR1cm4gQXJDb25zdHI7XG5cbiAgICBBckNvbnN0ci54cnJheSA9IGFyO1xuXG4gICAgbGV0IHAgPSBBckNvbnN0ci5wcm90b3R5cGU7XG5cbiAgICBwLmVhY2ggPSBwLmVhID0gZnVuY3Rpb24oZiwgdCA9IHRoaXMpIHtcbiAgICAgIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGV0IGU7XG4gICAgICAgIGxldCBzdGFydEk7XG4gICAgICAgIGZvciAoc3RhcnRJID0gMDsgc3RhcnRJIDwgdC5sZW5ndGg7IHN0YXJ0SSsrKSB7XG4gICAgICAgICAgaWYgKHQuaGFzT3duUHJvcGVydHkoc3RhcnRJKSkge1xuICAgICAgICAgICAgZSA9IGYuY2FsbCh0LCB0W3N0YXJ0SV0sIHN0YXJ0SSwgdGhpcyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3RhcnRJKys7XG4gICAgICAgIGlmIChlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgIHJldHVybiAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHIgPSBhd2FpdCBlO1xuICAgICAgICAgICAgaWYgKHIgIT09IHVuZGVmaW5lZCkgcmV0dXJuIHI7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBzdGFydEk7IGkgPCB0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIGlmICghdC5oYXNPd25Qcm9wZXJ0eShpKSkgY29udGludWU7XG4gICAgICAgICAgICAgIGxldCBlID0gYXdhaXQgZi5jYWxsKHQsIHRbaV0sIGksIHRoaXMpO1xuICAgICAgICAgICAgICBpZiAoZSAhPT0gdW5kZWZpbmVkKSByZXR1cm4gZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGlmIChlICE9PSB1bmRlZmluZWQpIHJldHVybiBlO1xuICAgICAgICAgIGZvciAobGV0IGkgPSBzdGFydEk7IGkgPCB0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIXQuaGFzT3duUHJvcGVydHkoaSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgbGV0IGUgPSBmLmNhbGwodCwgdFtpXSwgaSwgdGhpcyk7XG4gICAgICAgICAgICBpZiAoZSAhPT0gdW5kZWZpbmVkKSByZXR1cm4gZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocCwgXCJlbXB0eVwiLCB7Z2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMubGVuZ3RoID09PSAwO1xuICAgIH19KTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwLCBcImxhc3RcIiwge2dldCgpIHtcbiAgICAgIGlmKHRoaXMubGVuZ3RoID09PSAwKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgcmV0dXJuIHRoaXNbdGhpcy5sZW5ndGgtMV07XG4gICAgfX0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHAsIFwicmVhbExlbmd0aFwiLCB7Z2V0KCkge1xuICAgICAgbGV0IGwgPSAwO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KGkpKSBsKys7XG4gICAgICB9XG4gICAgICByZXR1cm4gbDtcbiAgICB9fSk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocCwgXCJmaXJzdFwiLCB7Z2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXNbMF07XG4gICAgfX0pO1xuXG4gICAgcC5jbGVhciA9IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5sZW5ndGggPSAwO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHAuQ2xlYXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBuZXcgQXJDb25zdHIoKTtcbiAgICB9XG5cbiAgICBwLmFkZCA9IGZ1bmN0aW9uKC4uLnZhbHVlcykge1xuICAgICAgdGhpcy5wdXNoKC4uLnZhbHVlcyk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcC5BZGQgPSBmdW5jdGlvbiguLi52YWx1ZXMpIHtcbiAgICAgIHJldHVybiBuZXcgQXJDb25zdHIoKS5hZGQoLi4udGhpcykuYWRkKC4uLnZhbHVlcyk7XG4gICAgfVxuXG4gICAgcC5zZXQgPSBmdW5jdGlvbihhID0gW10pIHtcbiAgICAgIGlmKHRoaXMgPT09IGEpIHJldHVybiB0aGlzO1xuICAgICAgaWYoYSBpbnN0YW5jZW9mIEFycmF5KSByZXR1cm4gdGhpcy5jbGVhcigpLmFkZCguLi5hKTtcbiAgICAgIHJldHVybiB0aGlzLmNsZWFyKCkuYWRkKGEpO1xuICAgIH1cbiAgICBwLlNldCA9IGZ1bmN0aW9uKGEgPSBbXSkge1xuICAgICAgcmV0dXJuIG5ldyBBckNvbnN0cigpLmFkZCguLi5hKTtcbiAgICB9XG5cbiAgICBwLmNsb25lID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5TZXQodGhpcyk7XG4gICAgfVxuXG4gICAgcC5SZXZlcnNlID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5TZXQodGhpcykucmV2ZXJzZSgpO1xuICAgIH1cblxuICAgIHAuZ2F0aGVyID0gZnVuY3Rpb24oLi4uYSkge1xuICAgICAgYS5lYSgoZSkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuaW5jbHVkZXMoZSkpIHRoaXMuYWRkKGUpO1xuICAgICAgfSlcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHAuR2F0aGVyID0gZnVuY3Rpb24oLi4uYSkge1xuICAgICAgbGV0IHQgPSB0aGlzLmNsb25lKCk7XG4gICAgICBhLmVhKChlKSA9PiB7XG4gICAgICAgIGlmICghdC5pbmNsdWRlcyhlKSkgdC5hZGQoZSk7XG4gICAgICB9KVxuICAgICAgcmV0dXJuIHQ7XG4gICAgfVxuXG4gICAgbGV0IG1hcmsgPSB7fTtcblxuICAgIC8vVGhyb3dzIEludmFsaWRWYWx1ZUV4Y2VwdGlvbiB3aGVuIHRoZSBnaXZlbiB2YWx1ZSBjYW5ub3QgYmUgZm91bmQgd2l0aGluZyB0aGlzXG4gICAgLy8gVE9ETzogZGlmZmVyZW50YXRlIGluZGV4YWxsIGFuZCBpbmRleGZpcnN0XG4gICAgcC5pbmRleCA9IGZ1bmN0aW9uKC4uLnZhbHVlcykge1xuICAgICAgbGV0IHRoYXQgPSB0aGlzLlNldCh0aGlzKTtcbiAgICAgIGxldCBpbmRleGVzID0gbmV3IEFyQ29uc3RyKCk7XG4gICAgICB2YWx1ZXMuZWEoKHYpID0+IHtcbiAgICAgICAgaWYoIXRoaXMuaW5jbHVkZXModikpIHRocm93IG5ldyBJbnZhbGlkVmFsdWVFeGNlcHRpb24odix0aGlzKTtcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICBsZXQgaW5kZXggPSB0aGF0LmluZGV4T2Yodik7XG4gICAgICAgICAgaWYgKGluZGV4ZXMubGFzdCAhPT0gaW5kZXggJiYgaW5kZXggIT09IC0xKXtcbiAgICAgICAgICAgIGluZGV4ZXMuYWRkKGluZGV4KTtcbiAgICAgICAgICAgIHRoYXRbaW5kZXhdID0gbWFyaztcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gaW5kZXhlcztcbiAgICB9XG4gICAgLy9UaHJvd3MgSW5kZXhPdXRPZkJvdW5kc0V4Y2VwdGlvbiB3aGVuIGdpdmVuIGluZGV4IGlzIG91dCBvZiBib3VuZHMgb2YgdGhpc1xuICAgIHAucmVtb3ZlSSA9IGZ1bmN0aW9uKC4uLmluZGljZXMpIHtcbiAgICAgIGxldCByb2xsYmFjayA9IHRoaXMuU2V0KHRoaXMpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmRpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaXNJbmRleChpbmRpY2VzW2ldLCB0aGlzKVxuICAgICAgICAgIHRoaXNbaW5kaWNlc1tpXV0gPSBtYXJrO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICh0aGlzW2ldID09PSBtYXJrKSB7XG4gICAgICAgICAgICB0aGlzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIGktLTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBJbmRleE91dE9mQm91bmRzRXhjZXB0aW9uKSB0aGlzLnNldChyb2xsYmFjayk7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcC5ybUkgPSBwLnJlbW92ZUk7XG4gICAgLy9UaHJvd3MgSW5kZXhPdXRPZkJvdW5kc0V4Y2VwdGlvbiB3aGVuIGdpdmVuIGluZGV4IGlzIG91dCBvZiBib3VuZHMgb2YgdGhpc1xuICAgIHAuUmVtb3ZlSSA9IGZ1bmN0aW9uKC4uLmluZGljZXMpIHtcbiAgICAgIHJldHVybiB0aGlzLlNldCh0aGlzKS5yZW1vdmVJKC4uLmluZGljZXMpO1xuICAgIH1cbiAgICBwLlJtSSA9IHAuUmVtb3ZlSTtcblxuICAgIC8vVGhyb3dzIEludmFsaWRWYWx1ZUV4Y2VwdGlvbiB3aGVuIHRoZSBnaXZlbiB2YWx1ZSBjYW5ub3QgYmUgZm91bmQgd2l0aGluZyB0aGlzXG4gICAgcC5yZW1vdmVWID0gZnVuY3Rpb24oLi4udmFsdWVzKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW1vdmVJKC4uLnRoaXMuaW5kZXgoLi4udmFsdWVzKSk7XG4gICAgfVxuICAgIHAucm1WID0gcC5yZW1vdmVWO1xuXG4gICAgLy9UaHJvd3MgSW52YWxpZFZhbHVlRXhjZXB0aW9uIHdoZW4gdGhlIGdpdmVuIHZhbHVlIGNhbm5vdCBiZSBmb3VuZCB3aXRoaW5nIHRoaXNcbiAgICBwLlJlbW92ZVYgPSBmdW5jdGlvbiguLi52YWx1ZXMpIHtcbiAgICAgIHJldHVybiB0aGlzLlNldCh0aGlzKS5yZW1vdmVWKC4uLnZhbHVlcyk7XG4gICAgfVxuICAgIHAuUm1WID0gcC5SZW1vdmVWO1xuXG4gICAgLy9UaHJvd3MgSW52YWxpZFZhbHVlRXhjZXB0aW9uIHdoZW4gdGhlIGdpdmVuIHBhcmFtIGlzIGRldGVjdGVkIGFzIHZhbHVlIGJ1dCBjYW5ub3QgYmUgZm91bmQgd2l0aGluZyB0aGlzXG4gICAgcC5yZW1vdmUgPSBmdW5jdGlvbiguLi52YWx1ZU9ySW5kZXgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMucmVtb3ZlSSguLi52YWx1ZU9ySW5kZXgpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIEluZGV4T3V0T2ZCb3VuZHNFeGNlcHRpb24pIHRoaXMucmVtb3ZlViguLi52YWx1ZU9ySW5kZXgpO1xuICAgICAgICBlbHNlIHRocm93IGU7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcC5ybSA9IHAucmVtb3ZlO1xuXG4gICAgLy9UaHJvd3MgSW5kZXhPdXRPZkJvdW5kc0V4Y2VwdGlvbiB3aGVuIGdpdmVuIHBhcmFtIGlzIGRldGVjdGVkIGFzIGluZGV4IGJ1dCBvdXQgb2YgYm91bmRzIG9mIHRoaXNcbiAgICAvL1Rocm93cyBJbnZhbGlkVmFsdWVFeGNlcHRpb24gd2hlbiB0aGUgZ2l2ZW4gcGFyYW0gaXMgZGV0ZWN0ZWQgYXMgdmFsdWUgYnV0IGNhbm5vdCBiZSBmb3VuZCB3aXRoaW5nIHRoaXNcbiAgICBwLlJlbW92ZSA9IGZ1bmN0aW9uKC4uLnZhbHVlT3JJbmRleCkge1xuICAgICAgcmV0dXJuIHRoaXMuU2V0KHRoaXMpLnJlbW92ZSguLi52YWx1ZU9ySW5kZXgpO1xuICAgIH1cbiAgICBwLlJtID0gcC5SZW1vdmU7XG5cbiAgICBwLkdldCA9IGZ1bmN0aW9uKC4uLmluZGV4ZXMpIHtcbiAgICAgIGxldCBuID0gW107XG4gICAgICBpbmRleGVzLmZsYXQoSW5maW5pdHkpLmZvckVhY2goKGkpID0+IHtcbiAgICAgICAgbi5hZGQodGhpc1tpXSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBuO1xuICAgIH1cbiAgICBwLmdldCA9IGZ1bmN0aW9uKC4uLmluZGV4ZXMpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldCh0aGlzLkdldCguLi5pbmRleGVzKSlcbiAgICB9XG5cbiAgICBwLmRkYSA9IGZ1bmN0aW9uKC4uLnZhbHVlcykge1xuICAgICAgcmV0dXJuIHRoaXMucmV2ZXJzZSgpLmFkZCguLi52YWx1ZXMpLnJldmVyc2UoKTtcbiAgICB9XG4gICAgcC5EZGEgPSBmdW5jdGlvbiguLi52YWx1ZXMpIHtcbiAgICAgIHJldHVybiB0aGlzLlJldmVyc2UoKS5hZGQoLi4udmFsdWVzKS5yZXZlcnNlKCk7XG4gICAgfVxuXG4gICAgLy9UaHJvd3MgSW5kZXhPdXRPZkJvdW5kc0V4Y2VwdGlvbiB3aGVuIGdpdmVuIGluZGV4IGlzIG91dCBvZiBib3VuZHMgb2YgYVxuICAgIHAucmVtID0gZnVuY3Rpb24oYW1vdW50KSB7XG4gICAgICBpc0luZGV4KGFtb3VudCx0aGlzKTtcbiAgICAgIHRoaXMubGVuZ3RoIC09IGFtb3VudDtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvL1Rocm93cyBJbmRleE91dE9mQm91bmRzRXhjZXB0aW9uIHdoZW4gZ2l2ZW4gaW5kZXggaXMgb3V0IG9mIGJvdW5kcyBvZiBhXG4gICAgcC5SZW0gPSBmdW5jdGlvbihhbW91bnQpIHtcbiAgICAgIHJldHVybiB0aGlzLlNldCh0aGlzKS5yZW0oYW1vdW50KTtcbiAgICB9XG5cbiAgICAvL1Rocm93cyBJbmRleE91dE9mQm91bmRzRXhjZXB0aW9uIHdoZW4gZ2l2ZW4gaW5kZXggaXMgb3V0IG9mIGJvdW5kcyBvZiBhXG4gICAgcC5tZXIgPSBmdW5jdGlvbihhbW91bnQpIHtcbiAgICAgIHJldHVybiB0aGlzLnJldmVyc2UoKS5yZW0oYW1vdW50KS5yZXZlcnNlKCk7XG4gICAgfVxuICAgIC8vVGhyb3dzIEluZGV4T3V0T2ZCb3VuZHNFeGNlcHRpb24gd2hlbiBnaXZlbiBpbmRleCBpcyBvdXQgb2YgYm91bmRzIG9mIGFcbiAgICBwLk1lciA9IGZ1bmN0aW9uKGFtb3VudCkge1xuICAgICAgcmV0dXJuIHRoaXMuUmV2ZXJzZSgpLnJlbShhbW91bnQpLnJldmVyZXNlKCk7XG4gICAgfVxuXG4gICAgLy9UaHJvd3MgSW5kZXhPdXRPZkJvdW5kc0V4Y2VwdGlvbiB3aGVuIGdpdmVuIGluZGV4KGVzKSBhcmUgb3V0IG9mIGJvdW5kcyBvZiB0aGlzXG4gICAgLy9UaHJvd3MgSW52YWxpZElucHV0RXhjZXB0aW9uIHdoZW4gZ2l2ZW4gcGFyYW1ldGVycyBhcmUgbm90IGVxdWFsIGluIGxlbmd0aFxuICAgIHAuc3dhcEkgPSBmdW5jdGlvbihpMSwgaTIpIHtcbiAgICAgIGkxID0gW2kxXS5mbGF0KEluZmluaXR5KTtcbiAgICAgIGkyID0gW2kyXS5mbGF0KEluZmluaXR5KTtcbiAgICAgIGlmKGkxLmxlbmd0aCA9PT0gaTIubGVuZ3RoKSB7XG4gICAgICAgIGxldCByb2xsYmFjayA9IHRoaXMuU2V0KHRoaXMpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaTEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlzSW5kZXgoaTFbaV0sdGhpcyk7XG4gICAgICAgICAgICBpc0luZGV4KGkyW2ldLHRoaXMpO1xuICAgICAgICAgICAgW3RoaXNbaTFbaV1dLHRoaXNbaTJbaV1dXSA9IFt0aGlzW2kyW2ldXSx0aGlzW2kxW2ldXV07XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgaWYoZSBpbnN0YW5jZW9mIEluZGV4T3V0T2ZCb3VuZHNFeGNlcHRpb24pIHRoaXMuc2V0KHJvbGxiYWNrKTtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEludmFsaWRJbnB1dEV4Y2VwdGlvbihcIlBhcmFtZXRlciBpMSBhbmQgaTIgbXVzdCBldGhlciBiZSB0d28gaW5kZXhlcywgb3IgdHdvIGluZGV4LUFycmF5cyBvZiB0aGUgc2FtZSBsZW5ndGguXCIpO1xuICAgIH1cbiAgICAvL1Rocm93cyBJbmRleE91dE9mQm91bmRzRXhjZXB0aW9uIHdoZW4gZ2l2ZW4gaW5kZXgoZXMpIGFyZSBvdXQgb2YgYm91bmRzIG9mIHRoaXNcbiAgICAvL1Rocm93cyBJbnZhbGlkSW5wdXRFeGNlcHRpb24gd2hlbiBnaXZlbiBwYXJhbWV0ZXJzIGFyZSBub3QgZXF1YWwgaW4gbGVuZ3RoXG4gICAgcC5Td2FwSSA9IGZ1bmN0aW9uKGkxLCBpMikge1xuICAgICAgcmV0dXJuIHRoaXMuU2V0KHRoaXMpLnN3YXBJKGkxLCBpMik7XG4gICAgfVxuXG4gICAgLy9UaHJvd3MgSW52YWxpZFZhbHVlRXhjZXB0aW9uIHdoZW4gdGhlIGdpdmVuIHZhbHVlIGNhbm5vdCBiZSBmb3VuZCB3aXRoaW5nIHRoaXNcbiAgICAvL1Rocm93cyBJbnZhbGlkSW5wdXRFeGNlcHRpb24gd2hlbiBnaXZlbiBwYXJhbWV0ZXJzIGFyZSBub3QgZXF1YWwgaW4gbGVuZ3RoXG4gICAgcC5zd2FwViA9IGZ1bmN0aW9uKHYxLCB2Mikge1xuICAgICAgdjEgPSB0aGlzLlNldCh2MSkuZmxhdCgyKTtcbiAgICAgIHYyID0gdGhpcy5TZXQodjIpLmZsYXQoMik7XG4gICAgICBpZiAodjEubGVuZ3RoID09PSB2Mi5sZW5ndGgpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2MS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHRoaXMuc3dhcEkodGhpcy5pbmRleCh2MVtpXSksdGhpcy5pbmRleCh2MltpXSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEludmFsaWRJbnB1dEV4Y2VwdGlvbihcIlBhcmFtZXRlciB2MSBhbmQgdjIgbXVzdCBldGhlciBiZSB0d28gdmFsdWVzLCBvciB0d28gdmFsdWUtQXJyYXlzIG9mIHRoZSBzYW1lIGxlbmd0aC5cIik7XG4gICAgfVxuICAgIC8vVGhyb3dzIEludmFsaWRWYWx1ZUV4Y2VwdGlvbiB3aGVuIHRoZSBnaXZlbiB2YWx1ZSBjYW5ub3QgYmUgZm91bmQgd2l0aGluZyB0aGlzXG4gICAgLy9UaHJvd3MgSW52YWxpZElucHV0RXhjZXB0aW9uIHdoZW4gZ2l2ZW4gcGFyYW1ldGVycyBhcmUgbm90IGVxdWFsIGluIGxlbmd0aFxuICAgIHAuU3dhcFYgPSBmdW5jdGlvbih2MSwgdjIpIHtcbiAgICAgIHJldHVybiB0aGlzLlNldCh0aGlzKS5zd2FwVih2MSwgdjIpO1xuICAgIH1cblxuICAgIC8vVGhyb3dzIEluZGV4T3V0T2ZCb3VuZHNFeGNlcHRpb24gd2hlbiBnaXZlbiBwYXJhbSBpcyBkZXRlY3RlZCBhcyBpbmRleCBidXQgb3V0IG9mIGJvdW5kcyBvZiB0aGlzXG4gICAgLy9UaHJvd3MgSW52YWxpZFZhbHVlRXhjZXB0aW9uIHdoZW4gdGhlIGdpdmVuIHBhcmFtIGlzIGRldGVjdGVkIGFzIHZhbHVlIGJ1dCBjYW5ub3QgYmUgZm91bmQgd2l0aGluZyB0aGlzXG4gICAgcC5zd2FwID0gZnVuY3Rpb24odmkxLCB2aTIpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuc3dhcEkodmkxLCB2aTIpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIEluZGV4T3V0T2ZCb3VuZHNFeGNlcHRpb24pIHRoaXMuc3dhcFYodmkxLCB2aTIpO1xuICAgICAgICBlbHNlIHRocm93IGU7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLy9UaHJvd3MgSW5kZXhPdXRPZkJvdW5kc0V4Y2VwdGlvbiB3aGVuIGdpdmVuIHBhcmFtIGlzIGRldGVjdGVkIGFzIGluZGV4IGJ1dCBvdXQgb2YgYm91bmRzIG9mIHRoaXNcbiAgICAvL1Rocm93cyBJbnZhbGlkVmFsdWVFeGNlcHRpb24gd2hlbiB0aGUgZ2l2ZW4gcGFyYW0gaXMgZGV0ZWN0ZWQgYXMgdmFsdWUgYnV0IGNhbm5vdCBiZSBmb3VuZCB3aXRoaW5nIHRoaXNcbiAgICBwLlN3YXAgPSBmdW5jdGlvbih2aTEsIHZpMikge1xuICAgICAgcmV0dXJuIHRoaXMuU2V0KHRoaXMpLnN3YXAodmkxLCB2aTIpXG4gICAgfVxuXG4gICAgcC5wcmlvciA9IGZ1bmN0aW9uKGksIGJ5ID0gMSkge1xuICAgICAgbGV0IHIgPSBpIC0gYnk7XG4gICAgICBpZiAociA+PSAwKSByZXR1cm4gdGhpc1tyXTtcbiAgICAgIHJldHVybiB0aGlzW3RoaXMubGVuZ3RoLShieS1pKV1cbiAgICB9XG4gICAgcC5uZXh0ID0gZnVuY3Rpb24oaSwgYnkgPSAxKSB7XG4gICAgICBsZXQgciA9IGkgKyBieTtcbiAgICAgIGlmIChyIDw9IHRoaXMubGVuZ3RoLTEpIHJldHVybiB0aGlzW3JdO1xuICAgICAgcmV0dXJuIHRoaXNbYnktKGktdGhpcy5sZW5ndGgtMSldXG4gICAgfVxuXG4gICAgcC5pbmplY3QgPSBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgICAgdGhpcy5zcGxpY2UoaW5kZXgsIDAsIGl0ZW0pO1xuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBwLmNvbnRhaW5zID0gZnVuY3Rpb24oLi4udmFscykge1xuICAgICAgZm9yIChsZXQgdiBvZiB2YWxzKSB7XG4gICAgICAgIGlmICghdGhpcy5pbmNsdWRlcyh2KSkgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICBwLmV4Y2x1ZGVzID0gZnVuY3Rpb24oLi4udmFscykge1xuICAgICAgZm9yIChsZXQgdiBvZiB2YWxzKSB7XG4gICAgICAgIGlmICh0aGlzLmluY2x1ZGVzKHYpKSByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgcmV0dXJuIEFyQ29uc3RyXG4gIH1cbiAgaW5pdC5FeGNlcHRpb24gPSBFeGNlcHRpb247XG4gIGluaXQuSW5kZXhPdXRPZkJvdW5kc0V4Y2VwdGlvbiA9IEluZGV4T3V0T2ZCb3VuZHNFeGNlcHRpb247XG4gIGluaXQuSW52YWxpZElucHV0RXhjZXB0aW9uID0gSW52YWxpZElucHV0RXhjZXB0aW9uO1xuICBpbml0LkludmFsaWRDb25zdHJ1Y3RvckV4Y2VwdGlvbiA9IEludmFsaWRDb25zdHJ1Y3RvckV4Y2VwdGlvbjtcbiAgaW5pdC5JbnZhbGlkVmFsdWVFeGNlcHRpb24gPSBJbnZhbGlkVmFsdWVFeGNlcHRpb247XG4gIC8vaW5pdC52ZXJzaW9uID0gXCJ1bmtub3duXCI7XG4gIHJldHVybiBpbml0O1xufSgpKTtcbiIsImltcG9ydCBpbml0IGZyb20gXCIuLy4uL2Vkb21cIjtcclxuY29uc3QgYyA9IGZ1bmN0aW9uIChxdWVyeSkge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LmNoaWxkcyhxdWVyeSk7XHJcbn07XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XHJcbiAgICBpbml0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgbGV0IGVsZW0gPSBjKFwiI3Rlc3RcIilbMF07XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZHlcIik7XHJcbiAgICAgICAgZWxlbS5hbmltKFtcclxuICAgICAgICAgICAgeyB0cmFuc2xhdGVYOiAyMDAsIHRyYW5zbGF0ZVk6IDIwMCB9LFxyXG4gICAgICAgICAgICB7IHRyYW5zbGF0ZVg6IDYwMCB9LFxyXG4gICAgICAgICAgICB7IHRyYW5zbGF0ZVg6IDMwMCwgdHJhbnNsYXRlWTogMCB9XHJcbiAgICAgICAgXSwgeyBkdXJhdGlvbjogNDAwMCB9KTtcclxuICAgIH0pO1xyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==