import baz from "bezier-easing";
import { camelCaseToDash, dashToCamelCase } from "dash-camelcase"
import { Data } from "front-db";
import decomposeMatrix from "decompose-dommatrix"
import delay from "delay"
import str_shorten from "str_shorten"

// let nativeAnimate = Element.prototype.animate;
// let hasNative = nativeAnimate !== undefined
// Element.prototype.animate = undefined

// require("web-animations-js");

// let polyfilledAnimate = Element.prototype.animate;
// if (hasNative) Element.prototype.animate = nativeAnimate
// Element.prototype.polyAnimate = polyfilledAnimate



// TODO: make anim only available on HTMLElement since animate is not supported on EventTraget
// IDEA modify promise returned by anim so that you can give a string as then arg which gets exectuted with this context

// TODO: anim prefix svg path anim with path('') similar to img & use normalize-svg to warn user to replace the path for better performance

//@ts-ignore
let ResObs: typeof ResizeObserver;
export default async function init () {
  let proms = []
  if (Element.prototype.animate === undefined) proms.add(import(/* webpackChunkName: "webAnimationsApiPolyfill" */"web-animations-js"))
  //@ts-ignore
  if (window.ResizeObserver === undefined) proms.add(import(/* webpackChunkName: "resizeObserverPolyfill" */"resize-observer-polyfill").then(({default: r}) => {ResObs = r}))
  //@ts-ignore
  else ResObs = window.ResizeObserver;

  await Promise.all(proms)





  let p: any = EventTarget.prototype;







  p.insertAfter = function(newNode: Element, referenceNode: Element) {
    if (referenceNode.parent !== this)
      throw new Error("This is not the parent of referenceNode.");
    let sib = referenceNode.nextSibling;
    if (sib !== null) this.insertBefore(newNode, sib);
    else this.apd(newNode);
    return this;
  };



  (() => {
    const dataTransfers: any = {};
    let dataTransferID = 0;
    let resizeListener: Map<Element, Map<Function, Function>> = new Map();
    //only init when needed since this heavily consumes resources (cpu).
    let obs: any;
    let obsUndefined = true
    function initResObs() {
      obsUndefined = false
      obs = new ResObs((elements) => {
        elements.ea((elem) => {
          resizeListener.get(elem.target).forEach((actualFunc) => {
            actualFunc()
          })
        })
      });
    }

    //TODO: make getfunction
    let eventListenerIndex = new Map<Element, {event: string, actualListener: Function, userListener: Function, options: any}[]>();
    

    const key = "advancedDataTransfere";

    //TODO: document / window.on("ready")
    //TODO: return data / or promise when no cb is given
    //TODO: check if options are taken into account (resize??)
    p.on = function(...a) {
      let isResize = a[0] === "resize"
      if (isResize && this !== window) {
        if (obsUndefined) initResObs()
        let map = resizeListener.get(this)
        if (map === undefined) {
          obs.observe(this)
          map = new Map()
          resizeListener.set(this, map)
        }
        map.set(a[1], a[1].bind(this))
      }
      else {
        let actualListener: Function;
        if (isResize) {
          a[1].bind(this)(false)
          actualListener = a[1];
        }
        else if (a[0] === "dragstart") {
          dataTransferID++;
          actualListener = (e) => {
            e.setData = (data: any) => {
              dataTransfers[dataTransferID] = data;
              e.dataTransfer.setData(key, dataTransferID);
            }
            a[1](e);
          }

        }
        else if (a[0] === "drop") {
          actualListener = (e) => {
            e.getData = () => {
              let id = e.dataTransfer.getData(key);
              let found = id !== "" ? dataTransfers[id] : null;
              delete dataTransfers[id];

              return found;

            }
            a[1](e);
          }

        }
        else {
          actualListener = a[1];
        }
        actualListener = actualListener.bind(this)
        let that = eventListenerIndex.get(this)
        let o = {event: a[0], actualListener, userListener: a[1], options: a[2]}
        if (that === undefined) eventListenerIndex.set(this, [o])
        else that.add(o);
        this.addEventListener(a[0], actualListener, a[2]);
      }
      return this
    }


    p.off = function(...a) {
      if (a[0] === "resize" && this !== window) {
        if (obsUndefined) initResObs()
        let map = resizeListener.get(this)
        if (map !== undefined) {
          map.delete(a[1])
          if (map.size === 0) {
            obs.unobserve(this)
            resizeListener.delete(this)
          }
        }
      }
      else {
        let toBeRm: any[] = [];
        let that = eventListenerIndex.get(this)
        if (that !== undefined) {
          if (a[0] !== undefined && a[1] !== undefined) {
            that.ea((e) => {
              if (e.event === a[0] && e.userListener === a[1]) toBeRm.add(e);
            })
          }
          else {
            that.ea((e) => {
              if (e.event === a[0] || e.userListener === a[1]) toBeRm.add(e);
            })
          }
    
          toBeRm.ea((e) => {
            this.removeEventListener(e.event, e.actualListener);
            that.rm(e);
          })
          if (that.empty) eventListenerIndex.delete(this)
        }
      }

      return this
    }

  })();

  p.listener = p.listen = p.ls = function(event?: any, listener?: any, patch?: boolean) {
    return new Tel(this, event, listener, patch)
  }

  Object.defineProperty(p, "html", {
    get() {
      return this.innerHTML;
    },
    set(to: string) {
      this.innerHTML = to;
    }
  });

  Object.defineProperty(p, "inner", {
  set(to: string | Element | number | boolean | Array<string | number | string | boolean>) {
    if (to instanceof Array) {
      this.html = "";
      this.apd(...to);
    }
    else if (to instanceof Element) {
      this.html = "";
      this.append(to);
    }
    else this.innerHTML = to;
  }});

  p.addClass = function(...className: string[]) {
    this.classList.add(...className);
    return this;
  }

  p.removeClass = function(...className: string[]) {
    this.classList.remove(...className);
    return this;
  }

  p.hasClass = function(...className: string[]) {
    let has = true;
    className.ea((cls) => {
      if (!this.classList.contains(cls)) has = false;
    });
    return has
  }

  p.toggleClass = function(...className: string[]) {
    className.ea((cls) => {
      if (this.hasClass(cls)) this.removeClass(cls);
      else this.addClass(cls);
    });
    return this
  }

  p.apd = function(...elems: Array<string | Element>) {
    this.append(...elems)
    return this
  }

  p.emptyNodes = function() {
    this.html = "";
    return this;
  }

  p.hide = function() {
    this.css("display", "none");
    return this;
  }

  p.show = function() {
    this.css("display", "block");
    return this;
  }

  p.childs = function(selector_depth: string | number = 1) {
    if (typeof selector_depth === "string") return new NodeLs(...this.querySelectorAll(selector_depth));
    else if (selector_depth > 0) {
      return new NodeLs(...this.children, ...new NodeLs(...this.children).childs(selector_depth-1));
    }
    return new NodeLs();
  }

  Object.defineProperty(p, "height", {
    get() {
      return this.css("height")
    },
    set(to) {
      this.css("height", to)
    }
  });

  Object.defineProperty(p, "width", {
    get() {
      return this.css("width")
    },
    set(to) {
      this.css("width", to)
    }
  });

  Object.defineProperty(p, "offsetRight", {get() {
    return this.offsetLeft + this.offsetWidth
  }});

  Object.defineProperty(p, "offsetBottom", {get() {
    return this.offsetTop + this.offsetHeight
  }});

  Object.defineProperty(p, "absoluteOffset", {get() {
    return this.getBoundingClientRect()
  }});



  Object.defineProperty(p, "outerWidth", {get() {
    return this.offsetWidth
  }});

  Object.defineProperty(p, "outerHeight", {get() {
    return this.offsetHeight
  }});

  Object.defineProperty(p, "innerWidth", {get() {
    return this.clientWidth
  }});

  Object.defineProperty(p, "innerHeight", {get() {
    return this.clientHeight
  }});

  Object.defineProperty(p, "parent", {get() {
    return this.parentElement
  }});



  let hasPx = ["x", "y", "z", "translateX", "translateY", "translateZ", "rotate", "rotate3d", "translate", "translate3d", "backgroundSize", "border", "borderBottom", "borderBottomLeftRadius", "borderBottomRightRadius", "borderBottomWidth", "borderLeft", "borderLeftWidth", "borderRadius", "borderRight", "borderRightWidth", "borderTop", "borderTopLeftRadius", "borderTopRightRadius", "borderTopWidth", "borderWidth", "bottom", "columnGap", "columnRuleWidth", "columnWidth", "columns", "flexBasis", "font", "fontSize", "gridColumnGap", "gridGap", "gridRowGap", "height", "left", "letterSpacing", "lineHeight", "margin", "marginBottom", "marginLeft", "marginRight", "marginTop", "maskSize", "maxHeight", "maxWidth", "minHeight", "minWidth", "outline", "outlineOffset", "outlineWidth", "padding", "paddingBottom", "paddingLeft", "paddingRight", "paddingTop", "perspective", "right", "shapeMargin", "tabSize", "top", "width", "wordSpacing"]
  let hasDeg = ["rotateX", "rotateY", "rotateZ", "rotate", "skewX", "skewY", "skew"]

  let px = "px"
  let deg = "deg"


  let unitIndex: {[prop: string]: string | ((style: string | number) => string)} = {};

  (() => {
    function startsWith(pre: string) {
      return function(style: string) {
        return style.substr(0, pre.length) === pre
      }
    }
    function endsWith(post: string) {
      return function(style: string) {
        return style.substr(style.length - post.length) === post
      }
    }
    function optionalPrePostFix(pre: string, post: string) {
      const start = startsWith(pre)
      const end = endsWith(post)
      return function(style: string) {
        if (start(style)) style = pre + style
        if (end(style)) style += post
        return style
      }
    }

    function deleteIfFound(query: string[]) {
      return function(style: string) {
        query.ea((e) => {
          style = style.replace(e, "")
        })
        return style
      }
    }
    


    unitIndex.backgroundImage = optionalPrePostFix("url(", ")")
    const pathString = "path("
    const parse = require('parse-svg-path')
    const abs = require('abs-svg-path')
    const normalize = require('normalize-svg-path')
    const startsWithPath = startsWith(pathString)
    const endsWithBracket = endsWith(")")


    unitIndex.d = (style: string) => {
      if (startsWithPath(style) && endsWithBracket(style)) return style
      else {
        let normalized = "";
        let segments = normalize(abs(parse(style)))
        // TODO: maybe format with spaces
        segments.forEach((e) => {
          normalized += e.join(" ") + " "
        })

        normalized = normalized.substr(0, normalized.length-1)
        console.log(segments);


        let msg = "Given path \"" + str_shorten(style, 30, {wordBoundary: false}) + "\" is "
        const endPath = "path('" + normalized + "')"
        if (normalized.replace(" ", "").replace(",", "") !== style.replace(" ", "").replace(",", "")) msg += "not normalized, thus had to be parsed while runtime. For performance reasons, please manualy replace it with the following:\n\n" + endPath + "\n\n"
        else msg += "already normalized, please prefix it with \"path(...)\" to disable this check (for performance reasons). Replace with:\n\n-------------\n\n" + endPath + "\n\n-------------\n\n"
        console.warn(msg)
        return endPath
      }
    }

  })()


  hasPx.ea((e) => {
    unitIndex[e] = px
  })
  
  hasDeg.ea((e) => {
    unitIndex[e] = deg
  })


  let functionString = "function"
  let numberString = "number"


  function postFixStyle(prop: string, style: string | number) {
    let fix = unitIndex[prop]
    if (fix !== undefined) {
      //@ts-ignore
      if (typeof fix === functionString) return fix(style)
      //@ts-ignore
      else if (typeof style === numberString) return style + fix
      else {
        //@ts-ignore
        let e = splitValueFromUnit(style)
        //@ts-ignore
        if (e.unit === "") return style + fix
        else return style
      }
    }
    else return style.toString()
  }






  type cssProp = number | string
  type cssProps = cssProp[];
  
  let formatStyle = (() => {
    let joinComma = ","
    let joinSpace = " "
    
    function formatStyle<I extends keyof FullCSSStyleMap>(prop: I, style: FullCSSStyleMap[I], that: Element | TransformProp | any): string | TransformProp
    function formatStyle<I extends keyof FullCSSStyleMap>(prop: I, style: FullCSSStyleMap[I], that: false): string
    function formatStyle<I extends keyof FullCSSStyleMap>(prop: I, style: FullCSSStyleMap[I], that: Element | TransformProp | false): string | TransformProp {
      let end: string
      let transformApplies = TransformProp.applies(prop)
      //@ts-ignore
      let isAr = style instanceof Array
      
      if (isAr) {
        let ar = []
        //@ts-ignore
        for (let stl of style) {
          ar.add(postFixStyle(prop, stl))
        }
        end = ar.join(transformApplies ? joinComma : joinSpace)
      }
      else end = postFixStyle(prop, style)
  
      if (that instanceof TransformProp) {
        if (transformApplies) {
            //@ts-ignore
            that[prop] = end
            return that
        }
        else return end
      }
      else if (that instanceof Element) {
        if (transformApplies) {
          let me = getTransformProps(that)
          //@ts-ignore
          me[prop] = end
          return me
        }
        else return end
      }
      else return end
    }
  
    return formatStyle
    
  })();
  
  type TransformProps = Map<Element, TransformProp>
  
  let transfromPropsIndex: TransformProps = new Map<Element, TransformProp>()

  function buildGetIndex<Index, Value>(map: Map<Index, Value>, init: (index: Index) => Value) {
    return function (index: Index) {
      let me = map.get(index)
      if (me === undefined) {
        me = init(index)
        map.set(index, me)
      }
      return me
    }
  }
  
  const getTransformProps = buildGetIndex(transfromPropsIndex, index => new TransformProp(index.css("transform")))
  
  function formatCss(css: FullCSSStyleMap, that: Element | true | TransformProp): object {
    let transformProp: any
    if (that === true) that = new TransformProp()
    for (let key in css) {
      //@ts-ignore
      let s = formatStyle(key, css[key], that);
      if (!(s instanceof TransformProp)) css[key] = s
      else {
        delete css[key]
        transformProp = s
      }
    }
    if (transformProp) css.transform = transformProp.toString()
    return transformProp;
  }
  
  function formatAnimationCss(css: AnimationCSSStyleMap, that: Element | true | TransformProp) {
    if ("offset" in css) {
      let { offset } = css
      delete css.offset
      //@ts-ignore
      let end = formatCss(css, that);
      css.offset = offset
      return end
    }
    //@ts-ignore
    else return formatCss(css, that);
  }

  function splitTransformPropsIntoKeyVal(val: string) {
    val = val.replace(/( |\t)/g, "")
    let ar = val.split(")")
    //@ts-ignore
    ar.rmI(ar.length-1);
    let end: {val: string, key: string}[] = []
    ar.forEach((e) => {
  
      let l = e.split("(");
      end.push({key: l[0], val: l[1]})
    })
    return end
  }
  
  const splitValueFromUnit = (() => {
    let val: string;
    return function splitValueFromUnit(value: string) {
      val = value;
      let max = val.length - 1;
      let edge: number = max - 2;
      if (!isEdge(edge)) {
        edge = max - 3;
        if (!isEdge(edge)) {
          edge = max - 1;
          if (!isEdge(edge)) {
            edge = max;
            if (!isEdge(edge)) {
              edge = max - 4;
              while (edge >= 0) {
                if (isEdge(edge)) break;
                edge--;
              }
              if (edge === -1) return { val: NaN, unit: value };
            }
          }
        }
      }
  
      edge++;
  
      return { val: +val.substr(0, edge), unit: val.substr(edge) };
    };
  
    function isEdge(at: number) {
      return !isNaN(+val[at]) && isNaN(+val[at + 1]);
    }
  })();
  
  console.log(splitValueFromUnit(""));  
  type transformProps = transformPrimitives & transformUmbrellas
  
  class TransformProp {
  
    //prototyped
    public rotateX: string;
    public rotateY: string;
    public rotateZ: string;
    public scaleX: string;
    public scaleY: string;
    public scaleZ: string;
    public translateX: string;
    public translateY: string;
    public translateZ: string;
    public skewX: string;
    public skewY: string;
    public perspective: string;
  
  
    public static readonly primitiveDefaults = {
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
    }
    //@ts-ignore
    public static readonly primitiveDefaultsWithUnits: {
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
      scaleZ: "1"
    } = {}
  
    public static primitiveTransformProps = Object.keys(TransformProp.primitiveDefaults)
    public static umbrellaTransformProps = [
      "rotate", "rotate3d", "scale", "scale3d", "translate", "translate3d", "skew", "matrix", "matrix3d"
    ]
    public static transformProps = [...TransformProp.primitiveTransformProps, ... TransformProp.umbrellaTransformProps]
    public static applies = (...prop: string[]) => {
      return TransformProp.transformProps.contains(...prop)
    }



    public readonly primitives: {
      readonly translateX?: string
      readonly translateY?: string
      readonly translateZ?: string
  
      readonly rotateX?: string
      readonly rotateY?: string
      readonly rotateZ?: string
  
      readonly skewX?: string
      readonly skewY?: string
  
      readonly scaleX?: string
      readonly scaleY?: string
      readonly scaleZ?: string
  
      perspective?: string
    } = {}
  
    private changed: boolean = false;
    private store: string = "none";

    constructor(transform_clone?: string | TransformProp) {
      if (transform_clone) {
        if (transform_clone instanceof TransformProp) {
          for (let k in transform_clone.primitives) {
            this.primitives[k] = transform_clone.primitives[k]
          }
          this.changed = transform_clone.changed
          this.store = transform_clone.store
        }
        else this.transform = transform_clone
      }
    }
  
    
  
    
  
    public set translate(to: string[] | string) {
      if (!(to instanceof Array)) to = to.split(",")
      this.allocate(to, ["translateX", "translateY", "translateZ"])
    }
  
    // TODO maybe split this up and return a number[] of the translates; this would have to be consitently implemented through all css (like margin or padding)
    public get translate(): string | string[] {
      return this.combineVals("translateX", "translateY", "translateZ")
    }
  
    public set scale(to: string[] | string) {
      if (!(to instanceof Array)) to = to.split(",")
      if (to[0] !== undefined) {
        if (to[1] !== undefined) {
          if (to[2] !== undefined) {
            this.scaleX = to[0]
            this.scaleY = to[1]
            this.scaleZ = to[2]
          }
          else {
            this.scaleX = to[0]
            this.scaleY = to[1]
          }
        }
        else {
          this.scaleX = to[0]
          this.scaleY = to[0]
          this.scaleZ = to[0]
        }
      }
    }
  
    public get scale(): string[] | string {
      let scaleX = this.scaleX
      let scaleY = this.scaleY
      let scaleZ = this.scaleZ
  
      if (scaleX === scaleY && scaleY === scaleZ) return scaleX

      return [scaleX, scaleY, scaleZ]
    }
  
    public set skew(to: string[] | string) {
      if (!(to instanceof Array)) to = to.split(",")
      this.allocate(to, ["skewX", "skewY"])
    }
  
    public get skew(): string[] | string {
      return this.combineVals("skewX", "skewY")
    }
  
    public set matrix(to: string[] | string) {
      if (to instanceof Array) to = to.join(",")
      this.decomposeMatrix("matrix(" + to + ")")
    }

    public set matrix3d(to: string[] | string) {
      if (to instanceof Array) to = to.join(",")
      this.decomposeMatrix("matrix3d(" + to + ")")
    }
    
    public set transform(to: string) {
      if (to === undefined || to === "none" || to === "") return
      let ar = splitTransformPropsIntoKeyVal(to)
      let ordered = {}
      ar.ea((e) => {
        let t = ordered[e.key] === undefined ? ordered[e.key] = [] : ordered[e.key]
        t.add(e.val)
      })

      for (let k in ordered) {
        if (TransformProp.umbrellaTransformProps.includes(k)) {
          this.decomposeMatrix(to)
          return 
        }
      }

      for (let k in ordered) {
        let t = ordered[k]
        if (t.length === 1) {
          this[k] = t.first
          return
        }
        else if (!(t instanceof Array)) {
          let split: {val: number, unit: string}[] = []
          t.ea((e) => {
            split.add(splitValueFromUnit(e.val))
          })

          let unit = split.first.unit
          let canCompose = true
          for (let i = 0; i < split.length; i++) {
            if (split[i].unit !== unit) canCompose = false
          }

          if (canCompose) {
            let val = 0;
            split.ea((e) => {
              val += e.val
            })
            this[k] = val + unit
            delete ordered[k]
          }
        }
      }

      let rest = ""

      for (let k in ordered) {
        rest += k + "(" + ordered[k] + ") "
      }

      this.decomposeMatrix(rest)
    }

    public get transform() {
      return this.toString()
    }

    private decomposeMatrix(to: string) {
      let dec = decomposeMatrix(new DOMMatrix(to))
      let skew = dec.skewXY
      delete dec.skewXY
      delete dec.skewXZ
      delete dec.skewYZ
      for (let d in dec) {
        //@ts-ignore
        if (dec[d] !== TransformProp.primitiveDefaults[d]) this[d] = formatStyle(d, dec[d], false)
      }
      if (skew !== TransformProp.primitiveDefaults.skewX) this.skewX = formatStyle("skewX", skew, false)
    }
  
    private combineVals(...vals: string[]) {
      let s = ""
      vals.ea((val) => {
        let e = this[val]
        if (e !== TransformProp.primitiveDefaultsWithUnits[val]) s += e + ","
      })
      // TODO: not all vals; why just the first
      return s.length === 0 ? TransformProp.primitiveDefaultsWithUnits[vals.first] : s.substr(0, s.length-1)
    }
  
    private allocate(input: string[], funcs: (keyof transformProps)[]) {
      funcs.ea((func, i) => {
        //@ts-ignore
        if (input[i] !== undefined) this[func] = input[i]
      })
    }
  
    private static clampOpen = "("
    private static clampClose = ") "
    public toString() {
      if (this.changed) {
        this.changed = false
        this.store = ""
  
  
        for (let prop of TransformProp.primitiveTransformProps) {
          // This MUST formated in the following order to achive consitent results [translate rotate skew scale]
          if (prop in this.primitives) if (this.primitives[prop] !== TransformProp.primitiveDefaultsWithUnits[prop])
            this.store += prop + TransformProp.clampOpen + this.primitives[prop] + TransformProp.clampClose
        }

        this.store = this.store || "none"
      }
  
      return this.store
    }
  }

  for (let k in TransformProp.primitiveDefaults) {
    //@ts-ignore
    TransformProp.primitiveDefaultsWithUnits[k] = postFixStyle(k, TransformProp.primitiveDefaults[k])
  }
  
  
  TransformProp.primitiveTransformProps.ea((prop) => {
    Object.defineProperty(TransformProp.prototype, prop, {
      get() {
        return this.primitives[prop] || TransformProp.primitiveDefaults[prop] + unitIndex[prop]
      },
      set(style: string) {
        this.changed = true
        this.primitives[prop] = style
      }
    });
  })
  
  
  p.css = function(key_css: any, val?: any): any {
    if (typeof key_css === "object") {
      let css = cloneData(key_css);
      formatCss(css, this);
  
      for(let prop in css) {
        this.style[prop] = css[prop];
      }
    }
    else if (val !== undefined && typeof val !== "boolean") {
      let s = formatStyle(key_css, val, this);
      if (!(s instanceof TransformProp)) this.style[key_css] = s
      else this.style.transform = s.toString()
    }
    else {
      let s: string;
      if (TransformProp.applies(key_css)) {
        if (elemsWithoutConsitentTransformProps.includes({elem: this})) {
          let t = new TransformProp()
          t.transform = getComputedStyle(this).transform
          s = t[key_css]
        }
        else s = getTransformProps(this)[key_css]
      }
      else {
        s = window.getComputedStyle(this)[key_css]
      }
  
      if (s === undefined) throw "Unknown key \"" + key_css + "\"."
  
      if (val || s.split(" ").length > 1) return s
      let n = parseFloat(s);
      if (isNaN(n)) return s;
      return n;
    }
    return this;
  };
  
  function currentFrame(keys: any[], that: any): AnimationCSSStyleMap {
    let ret: AnimationCSSStyleMap = {};
    let cs = getComputedStyle(that)
    let transProps = []
    for (let key of keys) {
      if (TransformProp.applies(key)) transProps.add(key)
      else ret[key] = cs[key] || "0";
    }
    if (!transProps.empty) {
      let props = transfromPropsIndex.get(that)
      props.transform = cs.transform
      ret.transform = props.transform
    }
    ret.offset = 0
    return ret;
  }
  
  let detectIfInTransitionProperty = (() => {
    function woan(key: string | string[], that: any) {
      let s = "The transition propert";
      if (key instanceof Array) s += "ies \""
      else s += "y \""
      s += key.toString() + "\" is not empty for the following element. It is recommended to not use css aniamtions and this framework for the same properties.\n\nIn order to prevent an aniamtion from triggering twice in a row the result of this one will not display its result in the dom explorer.\n\n"
      console.warn(s, that);
    }
    return function (cssKeys: string[], transitionPropertys: string, transitionDuration: number, that: any) {
      let warn: string[] = []
      for (let key of cssKeys) {
        if (transitionDuration !== 0 && (transitionPropertys.includes(key) || transitionPropertys === "all")) {
          warn.add(key)
        }
      }
  
      let length = warn.length
      if (length !== 0) if (length === 1) woan(warn[0], that)
      else woan(warn, that)
      
      return warn;
    }
  })()
  
  
  function evaluateAllKeys(frames: any[]) {
    let allKeys = Object.keys(frames.first)
    for (let i = 1; i < frames.length; i++) {
      let keys = Object.keys(frames[i])
      for (let e of keys) {
        if (!allKeys.includes(e)) allKeys.add(e)
      }
    }
    if (allKeys.includes("offset")) allKeys.rm("offset")
    return allKeys
  }
  
  type idElem = {elem: Element, identifier?: any}
  type idElems = idElem[]
  
  class ElemsWithoutConsitentTransformProps {
    private store: idElems = []
    constructor(...elems: idElems) {
      this.add(...elems)
    }
    public add(...elems: idElems) {
      elems.ea((e) => {
        if (!this.includes(e)) this.store.add(e)
      })
    }
    public rm(...elems: idElems) {
      let indices = []
      elems.ea((e) => {
        let hasNoIdentifier = e.identifier === undefined
        this.store.ea((s, i) => {
          if (e === s || (s.elem === e.elem && (hasNoIdentifier || s.identifier === e.identifier))) indices.add(i)
        })
      })
      this.store.rmI(...indices)
    }
    public includes(...elems: idElems) {
      if (elems.ea((e) => {
        let hasNoIdentifier = e.identifier === undefined
        if (this.store.ea((s) => {
          if (e === s || (s.elem === e.elem && (hasNoIdentifier || s.identifier === e.identifier))) return true
        })) return true
      })) return true
      return false
    }
  }
  
  
  
  
  let easeInOut = new Easing("easeInOut")
  // let ease = new Easing("ease")
  
  let easeInOutFunc = easeInOut.function
  // let easeInOutString = easeInOut.string
  
  // let easeFunc = ease.function
  // let easeString = ease.string
  
  let maxAnimationProgress = .9999999
  let minAnimationProgress =  0.0000001
  
  let nameSpaceIndex = new Map<EventTarget, string[]>();
  
  let elemsWithoutConsitentTransformProps = new ElemsWithoutConsitentTransformProps()
  
  
  let maxProgressInOneStep = .1
  // .1 / 16.6666666666666667
  let maxProgressInOneStepWithoutDelta = .006
  
  let frameDelta: number = 16.6666666666666667;
  let lastFrameTimeStamp = 0
  let loop = (frameTimeStamp: number) => {
    frameDelta = frameTimeStamp - lastFrameTimeStamp
    lastFrameTimeStamp = frameTimeStamp
    requestAnimationFrame(loop)
    // log(frameDelta)
  }
  requestAnimationFrame(loop)


  // TODO: Do I really have to always calculate initalframe immediatly or can I check if the anim is 
  // guided & starts if the current progress in the middle of the animation. Otherways on start or end
  // it will be calculated anyway
  
  // TODO: maybe HTML attrbs anim
  // So that you could animate innerHTML e.g.
  // maybe fade aout font-color and then back... or just set it


  // TODO: add x as shorthand for translate X usw.

  // TODO: instead of options just the duration can be given as well. so elem.anim({...}, 300)

  // TODO: make warning if animation to or from auto. Based on https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions#Which_CSS_properties_can_be_transitioned

  let transformString = "transform"

  class AnimPropAssoziation {
    private ls: {props: string[], onCancel: () => void}[] = []
    public check(props: string[]) {
      let hasTransform = TransformProp.applies(...props)
      let toBeRm = []

      this.ls.ea((e, i) => {
        if (!e.props.excludes(...props) || (hasTransform && e.props.includes(transformString))) {
          e.onCancel()    
          toBeRm.add(i)
        }
      })
      
      this.ls.rmI(...toBeRm)
    }
    public add(assoziation: {props: string[], onCancel: () => void}) {
      this.ls.add(assoziation)
    }
  }


  const currentAnimationPropsIndex = new Map<Element, AnimPropAssoziation>()
  const getAnimProps = buildGetIndex(currentAnimationPropsIndex, () => new AnimPropAssoziation())

  
  // TODO: multiple configs for example for anim at NodeLs


  p.anim = async function(frame_frames: AnimationCSSStyleMap | AnimationCSSStyleMap[], options: GuidedAnimationOptions | UnguidedAnimationOptions = {}, guidance?: Data<number>) {
    let thisTransProps = getTransformProps(this)
    let animationIsGuided = guidance !== undefined
    //@ts-ignore
    if (frame_frames[Object.keys(frame_frames)[0]] instanceof Array) frame_frames = convertFrameStructure(frame_frames)
    else frame_frames = cloneData(frame_frames);
  
    let endFrames: any[];
    let transitionProperty: string = this.css("transition-property");
    let transitionDuration = this.css("transition-duration");
  
    let needToCalculateInitalFrame = false;

    let areFrames = frame_frames instanceof Array
  

    let allKeys: string[]

    let initFrame;

    if (areFrames) {
      //@ts-ignore
      frame_frames = frame_frames as any[]
      allKeys = evaluateAllKeys(frame_frames)
      needToCalculateInitalFrame = frame_frames.first.offset !== 0
      if (needToCalculateInitalFrame) {
        initFrame = currentFrame(allKeys, this);
      }

    }
    else {
      allKeys = Object.keys(frame_frames);
      initFrame = currentFrame(allKeys, this)
    }

    
    let thisAnimProps = getAnimProps(this) 
    thisAnimProps.check(allKeys)

    let thisTransPropsCopy = new TransformProp(thisTransProps)
    

    if (nameSpaceIndex.get(this) === undefined) nameSpaceIndex.set(this, [])
  
    let ns = nameSpaceIndex.get(this)
    if (options.name === undefined) {
      let inc = 1
      while (ns.includes(inc.toString())) {
        inc++;
      }
      let s = inc.toString()
      //@ts-ignore
      options.name = s;
      ns.add(s)
    }
    else {
      let inc = 2
      let name: string;
      if (!ns.includes(options.name)) name = options.name
      else {
        while (ns.includes(options.name + inc)) {
          inc++;
        }
        name = options.name + inc
      }
      //@ts-ignore
      options.name = name;
      ns.add(name)
    }
  
    let progressNameString = "animation-" + options.name + "-progress"

    if (areFrames) {
      //@ts-ignore
      let frames: any[] = frame_frames
      
  
      if (needToCalculateInitalFrame) {
        let placeholder: any = {}
        allKeys.ea((k) => {
          placeholder[k] = "PLACEHOLDER"
        })
        placeholder.offset = 0
        
        frames.dda(placeholder)
      }
      spreadOffset(frames)
  
      type frames = any
      type thisFrame = AnimationCSSStyleMap
  
      let needed: Map<thisFrame, {keys: string[], at: number, frames: frames, identify: {nextOffset: number, prevOffset: number}}[]> = new Map()
  
      for (let i = 0; i < frames.length; i++) {
        let frame = frames[i]
        let thiskeys = Object.keys(frame)
        if (thiskeys.includes("offset")) thiskeys.rmV("offset")
        for (let key of allKeys) {
          if (!thiskeys.includes(key)) {
            let prevStyle: any;
            let nextStyle: any;
            let prevOffset: any;
            let nextOffset: any;
            let wantedOffset = frame.offset
            for (let j = 0; j < frames.length; j++) {
              let framej = frames[j]
              if (framej[key] !== undefined) {
                if (j < i) {
                  prevStyle = framej[key]
                  prevOffset = framej.offset
                }
                else {
                  nextStyle = framej[key];
                  nextOffset = framej.offset
                  break
                }
              }
            }
  
  
            if (prevStyle === undefined) {
              frame[key] = nextStyle
            }
            else if (nextStyle  === undefined) {
              frame[key] = prevStyle
            }
            else if (nextStyle === prevStyle) {
              frame[key] = prevStyle
            }
            else {
              let at = ((wantedOffset - prevOffset) / (nextOffset - prevOffset))
              let me = needed.get(frame)
              if (me !== undefined) {
                
                let f = me.ea((e) => {
                  if (e.identify.prevOffset === prevOffset && e.identify.nextOffset === nextOffset) {
                    e.frames[0][key] = prevStyle
                    e.frames[1][key] = nextStyle
                    e.keys.add(key)
                    return true
                  }
                })
  
                if (!f) {
                  me.add({
                    keys: [key], 
                    at, 
                    frames: [
                      {[key]: prevStyle}, 
                      {[key]: nextStyle}
                    ], 
                    identify: {
                      prevOffset, 
                      nextOffset
                    }
                  })
                }
              }
              else {
                needed.set(frame, [
                  {
                    keys: [key], 
                    at, 
                    frames: [
                      {[key]: prevStyle}, 
                      {[key]: nextStyle}
                    ], 
                    identify: {
                      prevOffset, 
                      nextOffset
                    }
                  }
                ])
              }
            }
          }
        }
      }

      // placeholder should not be formatted
      if (needToCalculateInitalFrame) frames.rmI(0)
      console.log("ok1");
      
      let notAlreadyFormattedFrames = []
      for (let frame of frames) {
        if (needed.get(frame) === undefined) formatAnimationCss(frame, thisTransPropsCopy)
        else notAlreadyFormattedFrames.add(frame)
      }
      console.log("ok2");
      
  
      let proms = []
      needed.forEach((ne, frame) => {
        ne.ea((e) => {
          proms.add(getStyleAtProgress([e.frames, e], 1).then((style) => {
            for (let key in style) {
              frame[key] = style[key]
            }
          }))
        })
        
      })
  
      if (!proms.empty) await Promise.all(proms)

      
      notAlreadyFormattedFrames.ea((frame) => {
        formatAnimationCss(frame, thisTransPropsCopy)
      })
  
      allKeys = evaluateAllKeys(frames)
      
      if (needToCalculateInitalFrame) frames.dda(initFrame);
  
      endFrames = frames;
      
    }
    else {
      //@ts-ignore
      formatAnimationCss(frame_frames, thisTransPropsCopy);
      //@ts-ignore
      allKeys = Object.keys(frame_frames)
      if (allKeys.includes("offset")) allKeys.rmV("offset")
  
      needToCalculateInitalFrame = true
      endFrames = [initFrame, frame_frames];
    }


  
  
  
  
    let detectedProperties = detectIfInTransitionProperty(allKeys, transitionProperty, transitionDuration, this);
  
  
    let cssCanBeUsedToFill = allKeys.excludes(...detectedProperties)
  
    let elemsWithoutConsitentTransformPropsKey = {elem: this, identifier: options.name}
  
    if (!animationIsGuided) {
      let o: UnguidedAnimationOptions = options;
  
      elemsWithoutConsitentTransformProps.add(elemsWithoutConsitentTransformPropsKey)
  
      //Defaults
      //@ts-ignore
      if (o.duration === undefined) o.duration = 200;
      else if (o.duration <= 0) throw "Given option duration " + o.duration + " cannot be negative."
      //@ts-ignore
      if (o.iterations === undefined) o.iterations = 1;
      else if (o.iterations <= 0) throw "Given option iterations " + o.iterations + " cannot be negative."
      //@ts-ignore
      if (o.easing === undefined) {
        //@ts-ignore
        o.easing = "ease"
      }
      else {
        //@ts-ignore
        if (o.easing instanceof Easing) o.easing = o.easing.string
      }
      let fill = o.fill;
      if (fill === undefined) fill = true;
      //@ts-ignore
      o.fill = "both"
  
  
  
      
  
  
  
      return await new Promise(async (res, rej) => {
        let animation: Animation
        let cancelAnimation = false
        let rmFromNameSpace = () => {
          this.removeAttribute(progressNameString);
          ns.rmV(options.name)
        }
        try {
          animation = this.polyAnimate(endFrames, o);
        }
        catch(e) {
          this.css(endFrames.last);
  
          thisTransProps.transform = getComputedStyle(this).transform
          elemsWithoutConsitentTransformProps.rm(elemsWithoutConsitentTransformPropsKey)
  
rej(`Encountered following error while attempting to animate.

--------

` + e.message + `

--------


Falling back on ` + this.tagName + `.css(...) to prevent logic failures.`)
          cancelAnimation = true
          this.setAttribute(progressNameString, "Failed");
          setTimeout(rmFromNameSpace, 1000)
          return
        }

        let finished = false
        thisAnimProps.add({props: allKeys, onCancel: () => {
          if (finished) return
          cancelAnimation = true
          thisTransProps.transform = getComputedStyle(this).transform
          animation.cancel()
          
          rmFromNameSpace()
          res()
        }})
  
        let iterations = o.iterations
        if (iterations !== Infinity) animation.onfinish = () => {
          if (cancelAnimation) return
          finished = true
          let lastFrame = endFrames.last
          thisTransProps.transform = lastFrame.transform
          elemsWithoutConsitentTransformProps.rm(elemsWithoutConsitentTransformPropsKey)
          if (fill && cssCanBeUsedToFill) {
            this.css(lastFrame)
            animation.cancel()
          }
          res();
        };
  
        let displayProgress = () => {
          let freq = o.duration / 100
          let min = 16
          if (freq < min) freq = min
          let cur = 0
          let progress = 0
          let int = setInterval(() => {
            if (cancelAnimation) return clearInterval(int)
            cur += freq
            progress = Math.round((cur / o.duration) * 100)
            if (progress >= 100) {
              clearInterval(int)
              iterations--
              if (iterations <= 0) {
                setTimeout(rmFromNameSpace, 1000)
              }
              else displayProgress()
              
              progress = 100
            }
            this.setAttribute(progressNameString, progress + "%");
          }, freq)
        }
        displayProgress()
      });
    }
    else {
      //@ts-ignore
      let o: GuidedAnimationOptions = options;
  
      let easingFunc: Function
  
      // Defaults
      //@ts-ignore
      if (o.start === undefined) o.start = 0;
      //@ts-ignore
      if (o.end === undefined) o.end = o.start + 100;
      //@ts-ignore
      if (o.smooth === undefined) o.smooth = true;
      //@ts-ignore
      if (o.active === undefined) o.active = new Data(true);
      if (o.easing === undefined) {
        easingFunc = easeInOutFunc
      }
      else {
        //@ts-ignore
        if (typeof o.easing === "string") o.easing = new Easing(o.easing)
        easingFunc = o.easing.function
      }
  
  
      if (o.start >= o.end) throw "Given option start " + o.start + " and end " + o.end + " are not consistent. End must be greater than start."
  
      o.active.subscribe((active) => {
        notActive = !active
        if (active) {
          elemsWithoutConsitentTransformProps.add(elemsWithoutConsitentTransformPropsKey)
          subscription()
        }
        else {
          if (elemsWithoutConsitentTransformProps.includes(elemsWithoutConsitentTransformPropsKey)) {
            thisTransProps.transform = getComputedStyle(this).transform
            elemsWithoutConsitentTransformProps.rm(elemsWithoutConsitentTransformPropsKey)
          }
          this.setAttribute(progressNameString, "Inactive");
        }
      }, false)
  
      //move constants
      let inSmoothing: boolean;
      let cancelSmoothing: Function;
  
      let lastAnimation: any;
      let lastProgress = minAnimationProgress;
      let progress = minAnimationProgress
  
      let progressAbsorption = 0
      let nextProgress = 1
      let prevProgress = 0
      let slide = 0
  
      let lastProgressAbsorption = progressAbsorption
      let rawProgress = minAnimationProgress
      let rawLastProgress = minAnimationProgress
  
      let notActive = !o.active.val
  
      let notInLimitCorrection = true
      let absuluteProgress: number
  
      let subscription = () => {
        if (notActive) return
  
        lastProgress = progress
        rawLastProgress = rawProgress
        progress = progressToSaveProgress(((absuluteProgress - o.start) / (o.end - o.start)));
  
        rawProgress = progress
        
        if (progress === lastProgress) return
        
        
        if (inSmoothing) {
          cancelSmoothing();
          if (rawLastProgress === rawProgress) return
        }
        
  
        if (o.smooth) {
          if (rawLastProgress < rawProgress) {
            progressAbsorption = progressAbsorption * (rawProgress - nextProgress) / (rawLastProgress - nextProgress)
          }
          else {
            progressAbsorption = progressAbsorption * (rawProgress - prevProgress) / (rawLastProgress - prevProgress)
          }
  
  
          if ((lastProgressAbsorption < 0 && progressAbsorption >= 0) || (progressAbsorption <= 0 && lastProgressAbsorption > 0)) {
            progressAbsorption = 0
          }
  
          progress += progressAbsorption
          lastProgressAbsorption = progressAbsorption
          slide = (slide / 1.7) + ((progress - lastProgress) / frameDelta)
        }
  
        let diff = progress - lastProgress
        let overlimit = Math.abs(diff) > maxProgressInOneStep && !veryFirst
        if (overlimit) {
          progress = progressToSaveProgress(lastProgress + (((diff > 0) ? maxProgressInOneStepWithoutDelta : -maxProgressInOneStepWithoutDelta) * frameDelta))
        }
        
        
  
        
  
        if (lastProgress === minAnimationProgress || lastProgress === maxAnimationProgress) {
  
  
          if (needToCalculateInitalFrame) {
            endFrames[0] = currentFrame(allKeys, this);
            needToCalculateInitalFrame = false
          }
  
          if (o.inCb !== undefined) {
            if (typeof o.inCb === "string") this[o.inCb]();
            else o.inCb.call(this);
          }
        }
  
  
        
  
        //animation
  
        setTimeout(() => {
          this.setAttribute(progressNameString, Math.round(progress * 100) + "%");
        }, 0)
  
        if (lastAnimation !== undefined) lastAnimation.cancel()
  
        let thisAnimation: Animation
        let op: KeyframeAnimationOptions = {duration: 100, fill: "both", easing: "linear", iterations: 1, iterationStart: progressToSaveProgress(easingFunc(progress))}
        try {
          
          thisAnimation = this.animate(endFrames, op);
          thisAnimation.pause()
  
          lastAnimation = thisAnimation;
        }
        catch (e) {
          errorAnimation("main", endFrames, op, this, e)
          progressAbsorption = 0
          progress = 0
        }
  
        
        requestAnimationFrame(() => {
          if (overlimit && !(progress <= minAnimationProgress || progress >= maxAnimationProgress)) {
            notInLimitCorrection = false
            subscription()
            return
          }
          else notInLimitCorrection = true
          requestAnimationFrame(() => {
            if (thisAnimation === lastAnimation) {
              let rdyToSetEndVals: SyncProm;
              if (o.smooth) {
                let resRdyToSetEndVals: Function;
                rdyToSetEndVals = new SyncProm((res) => {
                  resRdyToSetEndVals = res;
                });
  
  
  
                inSmoothing = true;
                let cancelAnimationSmoothing: boolean;
                cancelSmoothing = () => {
                  cancelAnimationSmoothing = true
                  cleanUpSmoothening(true)
                  
                }
                
  
  
                let smoothProgress = progress;
                let localCopyOfProgress = progress
                let that: Element = this;
                smooth()
                function smooth() {
                  if (cancelAnimationSmoothing) {
                    cancelAnimationSmoothing = false
                    return
                  }
                  smoothProgress += slide * frameDelta
                  slide = slide * .5
  
                  // To be honest I dont know why this cant be just done once at to start of cleanUpSmoothening but wired things happen if it doesnt go here
                  // this keyframes show the problem {translateX: 500}, {translateY: 500, backgroundColor: "red"},
                  smoothProgress = progressToSaveProgress(smoothProgress)
  
                  let easedSmoothProgress = easingFunc(smoothProgress)
                  let minBorderReached = easedSmoothProgress <= minAnimationProgress
                  let maxBorderReached = easedSmoothProgress >= maxAnimationProgress
                  if (minBorderReached) easedSmoothProgress = minAnimationProgress
                  else if (maxBorderReached) easedSmoothProgress = maxAnimationProgress
  
                  if (lastAnimation !== undefined) lastAnimation.cancel()
                  let op: KeyframeAnimationOptions = {duration: 100, fill: "both", easing: "linear", iterations: 1, iterationStart: easedSmoothProgress};
                  try {
                    lastAnimation = that.animate(endFrames, op);
                    lastAnimation.pause();
                  }
                  catch (e) {
                    errorAnimation("smooth", endFrames, op, that, e)
                    progressAbsorption = 0
                    progress = 0
                    return
                  }
                  if (Math.abs(slide) >= .000001 && !(minBorderReached || maxBorderReached)) requestAnimationFrame(smooth)
                  else cleanUpSmoothening(false)
                }
                function cleanUpSmoothening(hurry: boolean) {
                  slide = 0
                  
  
                  let smallerProgress: number
                  let biggerProgress: number
                  if (localCopyOfProgress < smoothProgress) {
                    smallerProgress = localCopyOfProgress
                    biggerProgress = smoothProgress
                  }
                  else {
                    smallerProgress = smoothProgress
                    biggerProgress = localCopyOfProgress
                  }
                  
  
                  for (let {offset} of endFrames) {
                    if (offset <= smallerProgress) {
                      prevProgress = offset
                    }
                    else if (offset >= biggerProgress) {
                      nextProgress = offset
                      break
                    }
                  }
  
                  
                  progressAbsorption = progressAbsorption + ((smoothProgress - localCopyOfProgress))
                  lastProgressAbsorption = progressAbsorption
                  
                  if (hurry) lastProgress = smoothProgress
                  else progress = smoothProgress
  
                  inSmoothing = false
                  resRdyToSetEndVals(hurry)
                }
              }
              else rdyToSetEndVals = SyncProm.resolve(false);
  
              rdyToSetEndVals.then((hurry) => {
                if (!hurry) {
                  let currentFrame = {}
                  let cs = getComputedStyle(this)
                  allKeys.ea((key) => {
                    currentFrame[key] = cs[key]
                  })
                  //@ts-ignore
                  if (currentFrame.transform !== undefined && elemsWithoutConsitentTransformProps.includes(elemsWithoutConsitentTransformPropsKey)) {
                    //@ts-ignore
                    thisTransProps.transform = currentFrame.transform
                    elemsWithoutConsitentTransformProps.rm(elemsWithoutConsitentTransformPropsKey)
                    first = true
                    let transform = thisTransProps.toString()
                    //@ts-ignore
                    if (transform !== "none") currentFrame.transform = transform
                    //@ts-ignore
                    else delete currentFrame.transform
                  }
                  
                  this.css(currentFrame);
                }
  
                if (cssCanBeUsedToFill) lastAnimation.cancel()
                lastAnimation = undefined
  
                if (progress === minAnimationProgress || progress === maxAnimationProgress) {
                  if (o.outCb !== undefined) {
                    if (typeof o.outCb === "string") this[o.outCb]();
                    else o.outCb.call(this);
                  }
                }
              })
            }
          })
        })
      }
  
      let first = true
      let veryFirst = true
      guidance.subscribe((progress) => {
        absuluteProgress = progress
        if (notInLimitCorrection) {
          subscription()
        }
        if (veryFirst) veryFirst = false
        if (first) {
          elemsWithoutConsitentTransformProps.add(elemsWithoutConsitentTransformPropsKey)
          first = false
        }
      })
  
  
      
    }
  }
  
  
  function errorAnimation(thread, workingFrames, options, that, error) {
    console.error("Unexpected error while animating (Thread: " + thread + ") using the following parameters\n\nFrames: ", workingFrames , "\nOptions: ", options, "\n\nSetting progressAbsorption to 0 to prevent further failures.\nthis: ", that, "\nException: \n", error)
  }
  
  
  class SyncProm<T = any> {
    private _then: ((res: T) => void)[] = []
    private hasBeenResed = false
    private resVal: any
    public res: Function;
    public rej: Function
  
    public static resolve<T>(res?: T) {
      return new SyncProm<T>((r) => {r(res)})
    }
    public static reject() {
      return new SyncProm((r, n) => {n()})
    }
    private _res(val: T) {
      let then = this._then
      for (let i = 0; i < then.length; i++) {
        then[i](val);
        delete then[i]
      }
      this.hasBeenResed = true
      this.resVal = val;
    }
    private _rej() {
      delete this._then;
      this.hasBeenResed = null
    }
    constructor(cb?: (res: (res?: T) => void, rej: () => void) => void) {
      if (cb !== undefined) {
        cb(this._res.bind(this), this._rej.bind(this))
      }
      else {
        this.res = this._res
        this.rej = this._rej
      }
    }
    then(to: (res: T) => void) {
      if (this.hasBeenResed) {
        to(this.resVal)
      }
      else if (this.hasBeenResed !== null) {
        this._then.add(to)
      }
    }
  }
  
  //Hardcode the spread of offset here similiar to how it is calculated intern, in order to later inject smoothended frame.
  function spreadOffset(frames: any[]) {
    frames.first.offset = 0;
    frames.last.offset = 1;
    if (frames.length === 2) return
    let last = 1
    let lastOffset = -1;
    for (let i = last; i < frames.length; i++) {
      let l = i + 1
      let o = frames[i].offset
      if (o !== undefined && o !== null) {
        if (o >= lastOffset && o >= 0 && o <= 1) {
          lastOffset = o
          frames.slice(last, l);
          let start = frames[last - 1].offset
          let end = frames[i].offset;
          let space = (end - start) / (l - last)
          let offset = start
          for (let j = last; j < i; j++) {
            offset += space
            frames[j].offset = offset;
          }
          last = l
        }
        else throw "Offsets must be given in incrementing sequence, spanning between 0 - 1"
      }
    }
  }
  
  // transform props distinguish
  
  function convertFrameStructure(ob: {[key: string]: (string | number)[]}) {
    let max = 0
    for (let key in ob) {
      let x = ob[key].length
      if (max < x) max = x
    }
  
    let o = []
    for (let i = 0; i < max; i++) {
      o[i] = {};
      
    }
    for (let key in ob) {
      ob[key].forEach((val, i) => {
        o[i][key] = val
      });
    }
  
    return o
  }
  
  
  function setupBackgroundTask<Params extends Array<T>, Return, T>(task: (...params: Params) => Return, constraint: {readonly iterations: number, readonly timeout?: number} | {readonly time: number, readonly timeout?: number} = {time: 16, timeout: 16}) {
    //@ts-ignore
    if (constraint.timeout === undefined) constraint.timeout = 16
    const requestQueue: {importance: {val: number}, params: Params, res: (ret: Return) => void}[] = []
  
    let importanceStructureHasChanged = false
    let recursionOngoing = false
    let start: number | Date
  
    let iterationsAsConstraint = "iterations" in constraint
  
    let initRecursion = iterationsAsConstraint ? () => {
      start = 0;
    } : () => {
      start = new Date()
    }
    
    let compairConstraint = iterationsAsConstraint ? () => {
      //@ts-ignore
      start++
      //@ts-ignore
      return start > constraint.iterations
    } : () => {
      //@ts-ignore
      return new Date() - start > constraint.time
    }
  
    function changeImportanceStructure() {
      importanceStructureHasChanged = true
    }
  
  
    return function execute(params: Params, importance: number | Data<number> = 0): Promise<Return> {
      return new Promise<Return>((res) => {
        if (importance instanceof Data) {
          requestQueue.add({importance, params, res})
          importance.subscribe(changeImportanceStructure)
        }
        else requestQueue.add({importance: {val: importance}, params, res})
        
        
        if (!recursionOngoing) {
          recursionOngoing = true
    
          setTimeout(() => {
            initRecursion()
            recursivelyCallElems()
          }, 0)
        }
      })
  
    }
  
    async function recursivelyCallElems() {
      if (importanceStructureHasChanged) {
        sortRequestQueue()
        importanceStructureHasChanged = false
      }
  
      if (!requestQueue.empty) {
        let elem = requestQueue.first
        elem.res(task(...elem.params))
        requestQueue.rmI(0)
  
        if (compairConstraint()) {
          setTimeout(() => {
            initRecursion()
            recursivelyCallElems()
          }, constraint.timeout)
        }
        else recursivelyCallElems()
      }
      else {
        recursionOngoing = false
      }
    }
  
    function sortRequestQueue() {
      requestQueue.sort(({importance: a}, {importance: b}) => {
        return a.val - b.val
      })
    }
    
  }
  
  function progressToSaveProgress(progress: number) {
    if (progress < minAnimationProgress) progress = minAnimationProgress;
    else if (progress > maxAnimationProgress) progress = maxAnimationProgress;
    return progress
  }
  
  let getStyleAtProgress = (() => {
    // TODO: maybe dont make wrapper, but use current element to determin style 
    // (the idea is that when the animation is canceled imediatly it shouldnt 
    // have any impact on drawn frames)
    let wrapper = document.createElement("get-style-at-progress-element-wrapper");
    wrapper.css({display: "block", position: "absolute", width: "100%", height: "100vh", translateY: "-999999999vh"})
    let elem: Element = document.createElement("get-style-at-progress-element");
    document.body.apd(wrapper.apd(elem));

    let linear: "linear" = "linear"
    let both: "both" = "both"
  
    return setupBackgroundTask(getStyleAtProgress)

    
    
    function getStyleAtProgress(frames: any, intrest: {at: number, keys: string[]}): {[key: string]: string} {
      let { keys } = intrest
  
      let transformKeys = []
      keys.ea((e, i) => {
        if (TransformProp.applies(e)) transformKeys.add(i)
      })
      keys.rmI(...transformKeys)
  
  
      frames.ea((frame) => {
        formatCss(frame, true)
      })
  
      let animation = elem.animate(frames, {
        duration: 100,
        fill: both,
        easing: linear,
        iterations: 1,
        iterationStart: progressToSaveProgress(intrest.at)
      });
  
  
      let res: {[key: string]: string} = {};
      let cs = getComputedStyle(elem)
      
      if (!transformKeys.empty) {
        let t = new TransformProp()
        //@ts-ignore
        t.transform = cs.transform
        
        transformKeys.ea((key) => {
          res[key] = t.primitives[key]
        })
      }
  
      for (let k of keys) {
        res[k] = cs[k]
      }
  
  
      animation.cancel()
      return res
    }
  })()



  // type alreadyDefinedProps = "toggleClass" | "addClass" | "hide" | "emptyNodes" | "apd" | "removeClass" | "show" | "off" | "on"
  // type excludeProps = "querySelector" | "querySelectorAll"

  //has setterGetter -> make em
        //has "has" in name -> make has, contains and have method
        //any other function, call it with params and return array of results

  interface ElementWithSomePropsThatDontMakeSenseRemoved extends Element {}

  (() => {
    let elemProto = Element.prototype
    let lsProto = NodeLs.prototype
    let NodeProto = Node.prototype
    let EvTarProto = EventTarget.prototype
    
    let has = "has"
    let includesString = "includes"
    let containsString = "contains"
    let excludesString = "excludes"
    let execString = "exec"
    let execChainString = "execChain"

    let chainAbleFunctions = ["insertAfter", "on", "off", "css", "addClass", "removeClass", "hasClass", "toggleClass", "apd", "emptyNodes", "hide", "show"]

    for (let k in elemProto) {
      if (lsProto[k] !== undefined) {
        console.log("Skiping " + k);
        continue
      }


      let d = Object.getOwnPropertyDescriptor(elemProto, k);
      if (d === undefined) {
        d = Object.getOwnPropertyDescriptor(NodeProto, k);
        if (d === undefined) {
          d = Object.getOwnPropertyDescriptor(EvTarProto, k);
        }
      }


      if (d === undefined) {
        console.warn("Edom: Unexpected change in dom api. The property \"" + k + "\" will not available in " + NodeLs.name)
      }
      else {
        //console.log(k, d.writable);

        
        
        if (d.get !== undefined) {
          defineGetterSetter(k, d.set !== undefined)
        }
        else {
          let val = d.value
          if (typeof val === functionString) {
            if (k.substr(0, 3) === has) {
              let kName = k.substr(3)

              // Since this k starts with "has" it cant be chainable
              
              lsProto[excludesString + kName] = function(...args: any[]) {
                let end = true
                for (let e of this) {
                  if (!e[k](...args)) {
                    end = false
                    break
                  }
                }
                return end;
              }

              lsProto[containsString + kName] = lsProto[includesString + kName] = function(...args: any[]) {
                let end = false
                for (let e of this) {
                  if (e[k](...args)) {
                    end = true
                    break
                  }
                }
                return end;
              }
            }        

            let isChainAbleFunction = chainAbleFunctions.includes(k)
            lsProto[k] = function(...args: any[]) {
              return this[isChainAbleFunction ? execChainString : execString](k, args)
            }
          }
          else {
            defineGetterSetter(k, !d.writable || !d.configurable)
          }
        }
      } 
    }

    function defineGetterSetter(key: string, writeAble: boolean) {
      
      let o: any = {
        get() {
          let end = []
          for (let e of this) {
            end.add(e[key])
          }
          return end;
        }
      }
      if (writeAble) o.set = function(to: any) {
        for (let e of this) {
          e[key] = to
        }
      }

      Object.defineProperty(lsProto, key, o)
    }
  })();
  
}

//extend NodeLs api with native Element functions like remove()

// TODO: maybe rename to ElementList

//@ts-ignore
export class NodeLs<T extends Element = Element> extends Array<T> implements Element {
  constructor(...a: Array<T>) {
    super(...a);
  }
  /**
   * 
   * @param frame_frames frame / frames to be animated to
   * @param options additional options / duration
   * @param guided When ommited, animation plays instantly through a linear realTime Timeline (normally). When given, animation can be be controlled by setting guidance to values between (in options) given start (default: 0) and end (default: 100)
   * @param stagger Delay between animation executions on this elements. When true delay is one animation duration. When false or ommited no delay at all
   */
  async anim(frame_frames: CSSStyleMap | CSSStyleMap[], options: GuidedAnimationOptions | UnguidedAnimationOptions = {}, guidance?: Data<number>, stagger?: number | boolean): Promise<void> {
    this.warn("anim")
    if (stagger) {
      let awaitForAnimationDuration = stagger === true
      for (let e of this) {
        let anim = e.anim(frame_frames, options, guidance);
        if (awaitForAnimationDuration) await anim;
        //@ts-ignore
        else await delay(stagger)
      }
    }
    else {
      let ls = [];
      for(let e of this) {
        ls.add(e.anim(frame_frames, options, guidance));
      }
      await Promise.all(ls)
    }
  }
  childs(selector: string | number = 1): NodeLs<Element> {
    let ls = new NodeLs();
    this.ea((e) => {
      ls.add(...e.childs(selector));
    });
    return ls;
  }

  private warn(cmd: string) {
    if (this.length === 0) console.warn("Trying to execute command \"" + cmd + "\" on empty NodeLs.")
  }

  private exec(functionName: string, args: IArguments): this | any[] {
    this.warn(functionName)
    let end = []
    for (let e of this) {
      end.add(e[functionName](...args))
    }
    return end;
  }
  private execChain(functionName: string, args: IArguments): this | any[] {
    this.warn(functionName)
    for (let e of this) {
      e[functionName](...args)
    }
    return this;
  }
}

//TODO: childs call can return NodeLs or just one Element because the structure is so similar (better performance). Maybe would also mean that you never know if getter give you array or not. They do have some differences.






export class Tel<K extends keyof HTMLElementEventMap = any> {
  private _enabled: boolean = false;
  private p: Nel<K>;
  constructor(nodes: Array<EventTarget> | EventTarget, event?: K, listener?: (this: EventTarget | Window, ev: HTMLElementEventMap[K]) => any, enable: boolean = true) {
    this.p = new Nel(undefined, event, listener);
    // We ll only use methods here that are avalable to EventTargets here (on, off)
    //@ts-ignore
    if (nodes instanceof Array) this.p.nodes = new NodeLs(...nodes);
    //@ts-ignore
    else this.p.nodes = new NodeLs(nodes)
    if (enable) this.enable();
  }
  public get event(): K {
    return this.p.event;
  }
  public get nodes(): EventTarget[] {
    return this.p.nodes;
  }
  public get listener(): (this: EventTarget, ev: HTMLElementEventMap[K]) => any {
    return this.p.listener;
  }
  public set nodes(node: EventTarget[]) {
    this.disable();
    //@ts-ignore
    this.p.nodes = new NodeLs(...node);
    this.enable();
  }
  public set event(event: K) {
    this.disable();
    this.p.event = event;
    this.enable();
  }
  public set listener(listener: (this: EventTarget, ev: HTMLElementEventMap[K]) => any) {
    this.disable();
    this.p.listener = listener;
    this.enable();
  }
  public set enabled(to: boolean) {
    if (to) {
      if(this._enabled) return;
      this.p.nodes.on(this.event, this.listener);
    }
    else {
      if(!this._enabled) return;
      this.p.nodes.off(this.event, this.listener);
    }
    this._enabled = to;
  }
  public get enabled() {
    return this._enabled;
  }
  public enable(): void {
    this.enabled = true;
  }
  public disable(): void {
    this.enabled = false;
  }
  public repatch(): void {
    this.disable();
    this.enable();
  }
}

class Nel<K extends keyof HTMLElementEventMap = any> {
  //@ts-ignore
  constructor(public nodes: NodeLs, public event: K, public listener: (this: EventTarget, ev: HTMLElementEventMap[K]) => any) {

  }
}


function cloneData(a: any) {
  return JSON.parse(JSON.stringify(a))
}
  

type easingKeyWordCamelCase = "linear" | "ease" | "easeIn" | "easeOut" | "easeInOut"
type easingKeyWordDashCase  = "linear" | "ease" | "ease-in" | "ease-out" | "ease-in-out"
type easingKeyWord = easingKeyWordCamelCase | easingKeyWordDashCase

export class Easing {
  public static readonly keywords: {[qwe in easingKeyWordCamelCase]: number[]} = {
    linear:     [.25, .25, .75, .75],
    ease:       [.25, .1 , .25, 1  ],
    easeIn:     [.42, 0  , 1  , 1  ],
    easeOut:    [0  , 0  , .58, 1  ],
    easeInOut:  [.42, 0  , .58, 1  ]
  }
  private ax: number
  private ay: number
  private bx: number
  private by: number
  private keyword: string
  constructor(keyword: easingKeyWord)
  constructor(ax: number, ay: number, bx: number, by: number)
  constructor(ax_keyword: number | easingKeyWord, ay?: number, bx?: number, by?: number) {
    if (typeof ax_keyword !== "number") {
      this.keyword = ax_keyword
    }
    else {
      this.ax = ax_keyword
      this.ay = ay
      this.bx = bx
      this.by = by
    }
  }
  public get string() {
    if (this.keyword === undefined) return "cubic-bezier(" + this.ax + "," +  this.ay + "," +  this.bx + "," +  this.by + ")"
    return camelCaseToDash(this.keyword)
  }
  public get function() {
    if (this.ax === undefined) {
      let f = Easing.keywords[dashToCamelCase(this.keyword)]
      this.ax = f[0]
      this.ay = f[1]
      this.bx = f[2]
      this.by = f[3]
    }
    return baz(this.ax, this.ay, this.bx, this.by)
  }
}


// TODO: move all enhancements out of pollyfill (init) function
