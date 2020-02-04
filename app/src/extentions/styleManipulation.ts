import { ae } from "../lib/attatchToProto"

import { Data } from "front-db";
import decomposeMatrix from "decompose-dommatrix"
import spreadOffset from "spread-offset"
import { parseIn, parseOut } from "./../lib/parse"
import TweenObject from "tween-object"
import animationFrameDelta from "animation-frame-delta"
import Easing from "waapi-easing"
import clone from "clone"




type ParseIndex = keyof typeof parseIn | keyof typeof parseOut
type ParseIndexMap = Partial<{[prop in ParseIndex]: ParseIndex}>
type GenericObject = {[prop: string]: any}



function postFixStyle(prop: string, style: cssProp, parseIndex: ParseIndex, parseDirectionIn: boolean = true) {
  let fix = parseDirectionIn ? parseIn[parseIndex][prop] : parseOut[parseIndex][prop]
  if (fix !== undefined) {
    if (typeof fix === "function") return fix(style)
    else if (typeof style === "number") return style + fix
    else {
      //@ts-ignore
      let e = splitValueFromUnit(style)
      if (e.unit === "") return style + fix
      else return style
    }
  }
  else return style.toString()
}


function stylePropertyAttribute(elem: Element, stylePropertyAttribute: string): ParseIndex {
  return (TransformProp.applies(stylePropertyAttribute) || getComputedStyle(elem)[stylePropertyAttribute] !== undefined) ? "style" : 
  stylePropertyAttribute in elem ? "prop" : 
  "attr"
}

function stylePropertyAttributeOfKeyframe(elem: Element, keys: string[]): ParseIndexMap {
  let o: ParseIndexMap = {}

  keys.ea((e) => {
    o[e] = stylePropertyAttribute(elem, e)
  })

  return o
}


type Keyframe = GenericObject
// Optimize maybe
const styleString: "style" = "style"
function seperateKeyframeStylesFromProps(keyframes: Keyframe[], parseIndexMap: ParseIndexMap) {
  const style: Keyframe[] = []
  const prop: Keyframe[] = []


  keyframes.ea((keyframe) => {
    let s: Keyframe = {}
    let p: Keyframe = {}

    for (const key in parseIndexMap) {
      if (parseIndexMap[key] === styleString) s[key] = keyframe[key]
      else p[key] = keyframe[key]
    }

    
    if (!Object.keys(p).empty) {
      p.offset = keyframe.offset
      prop.add(p)
    }
    if (!Object.keys(s).empty) {
      s.offset = keyframe.offset
      style.add(s)
    }
  })

  return {style, prop}
}



let formatStyle = (() => {
  const joinComma = ","
  const joinSpace = " "
  
  function formatStyle<I extends keyof AnimatableAllProperties>(prop: I, style: AnimatableAllProperties[I], that: Element | TransformProp | any, parseIndex: ParseIndex, parseIn?: boolean): string | TransformProp
  function formatStyle<I extends keyof AnimatableAllProperties>(prop: I, style: AnimatableAllProperties[I], that: false, parseIndex: ParseIndex, parseDirectionIn?: boolean): string
  function formatStyle<I extends keyof AnimatableAllProperties>(prop: I, style: AnimatableAllProperties[I], that: Element | TransformProp | false, parseIndex: ParseIndex, parseDirectionIn: boolean = true): string | TransformProp {
    let end: string
    let transformApplies = TransformProp.applies(prop)
    //@ts-ignore
    let isAr = style instanceof Array
    

    // TODO: Why is parseIn required to be true?
    if (isAr && parseDirectionIn) {
      
      let ar = []
      //@ts-ignore
      for (let stl of style) {
        ar.add(postFixStyle(prop, stl, parseIndex, parseDirectionIn))
      }
      end = ar.join(transformApplies ? joinComma : joinSpace)
    }
    else end = postFixStyle(prop, style as cssProp, parseIndex, parseDirectionIn)

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

function formatCss(css: AnimatableAllProperties, that: Element | true | TransformProp, parseIndexMap: ParseIndexMap, In?: boolean): object {
  let transformProp: any
  if (that === true) that = new TransformProp()
  for (let key in css) {
    let s = formatStyle(key as any, css[key], that, parseIndexMap[key], In);
    if (!(s instanceof TransformProp)) css[key] = s
    else {
      delete css[key]
      transformProp = s
    }
  }
  if (transformProp) css.transform = transformProp.toString()
  return transformProp;
}

function formatAnimationCss(css: AnimatableAllProperties, that: Element | true | TransformProp, parseIndexMap: ParseIndexMap) {
  if ("offset" in css) {
    let { offset } = css
    delete css.offset
    let end = formatCss(css as any, that, parseIndexMap);
    css.offset = offset
    return end
  }

  else return formatCss(css as any, that, parseIndexMap);
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
      if (dec[d] !== TransformProp.primitiveDefaults[d]) this[d] = formatStyle(d, dec[d], false, "style")
    }
    if (skew !== TransformProp.primitiveDefaults.skewX) this.skewX = formatStyle("skewX", skew, false, "style")
  }

  private combineVals(...vals: string[]) {
    let s = ""
    vals.ea((val) => {
      let e = this[val]
      s += e + ", "
    })
    return s.substr(0, s.length-2)
  }

  private allocate(input: string[], funcs: (keyof TransfromProperties)[]) {
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

      this.store = this.store || "none "
      this.store = this.store.substr(0, this.store.length-1)
    }

    return this.store
  }
}

for (let k in TransformProp.primitiveDefaults) {
  TransformProp.primitiveDefaultsWithUnits[k] = postFixStyle(k, TransformProp.primitiveDefaults[k], "style")
}


TransformProp.primitiveTransformProps.ea((prop) => {
  Object.defineProperty(TransformProp.prototype, prop, {
    get() {
      return this.primitives[prop] || TransformProp.primitiveDefaults[prop] + parseIn.style[prop]
    },
    set(style: string) {
      this.changed = true
      this.primitives[prop] = style
    }
  });
})

ae("css", function(key_css: any, val?: any): any {
  if (typeof key_css === "object") {
    let css = clone(key_css);
    formatCss(css, this, stylePropertyAttributeOfKeyframe(this, Object.keys(css)));

    for(let prop in css) {
      this.style[prop] = css[prop];
    }
  }
  else if (val !== undefined && typeof val !== "boolean") {
    let s = formatStyle(key_css, val, this, stylePropertyAttribute(this, key_css));
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
});


function currentFrame(keys: any[], that: any, parseIndexMap: ParseIndexMap, transProp: TransformProp): AnimatableAllProperties {
  let ret: AnimatableAllProperties = {};
  for (let key of keys) {
    if (parseIndexMap[key] === "style") ret[key] = that.css(key)
    else if (parseIndexMap[key] === "attr") ret[key] = that.getAttribute(key)
    else ret[key] = this[key]
  }
  formatCss(ret as any, transProp, parseIndexMap)
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


const maxProgressInOneStep = 1/3
//                                      .1 / 16.6666666666666667
const maxProgressInOneStepWithoutDelta = .006

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


ae("anim", async function(frame_frames: AnimatableAllProperties | AnimatableAllProperties[], options: GuidedAnimationOptions | UnguidedAnimationOptions = {}, guidance?: Data<number>) {
  let thisTransProps = getTransformProps(this)
  let animationIsGuided = guidance !== undefined
  //@ts-ignore
  if (frame_frames[Object.keys(frame_frames)[0]] instanceof Array) frame_frames = convertFrameStructure(frame_frames)
  else frame_frames = clone(frame_frames);

  let endFrames: any[];
  let transitionProperty: string = this.css("transition-property");
  let transitionDuration = this.css("transition-duration");

  let needToCalculateInitalFrame = false;

  let areFrames = frame_frames instanceof Array


  let allKeys: string[]

  let initFrame: any;

  let parseIndexMap: ParseIndexMap

  let thisTransPropsCopy = new TransformProp(thisTransProps)

  if (areFrames) {
    //@ts-ignore
    frame_frames = frame_frames as any[]
    allKeys = evaluateAllKeys(frame_frames)
    parseIndexMap = stylePropertyAttributeOfKeyframe(this, allKeys)
    needToCalculateInitalFrame = frame_frames.first.offset !== 0
    if (needToCalculateInitalFrame) {
      initFrame = currentFrame(allKeys, this, parseIndexMap, thisTransProps);
    }

  }
  else {
    allKeys = Object.keys(frame_frames)
    parseIndexMap = stylePropertyAttributeOfKeyframe(this, allKeys)
    initFrame = currentFrame(allKeys, this, parseIndexMap, thisTransProps)
  }

  
  let thisAnimProps = getAnimProps(this) 
  thisAnimProps.check(allKeys)

  
  
  if (typeof options === "number") {
    options = {duration: options}
  }


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
  //@ts-ignore
  if (options.iterations === undefined) options.iterations = 1;
      else if (options.iterations <= 0) throw "Given option iterations " + options.iterations + " cannot be negative."

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
    type thisFrame = AnimatableAllProperties

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
    
    let notAlreadyFormattedFrames = []
    for (let frame of frames) {
      if (needed.get(frame) === undefined) formatAnimationCss(frame, thisTransPropsCopy, parseIndexMap)
      else notAlreadyFormattedFrames.add(frame)
    }
    

    let proms = []
    needed.forEach((ne, frame) => {
      ne.ea((e) => {
        proms.add(getStyleAtProgress([e.frames, e, this, parseIndexMap], 1).then((style) => {
          for (let key in style) {
            frame[key] = style[key]
          }
        }))
      })
      
    })

    if (!proms.empty) await Promise.all(proms)

    
    notAlreadyFormattedFrames.ea((frame) => {
      formatAnimationCss(frame, thisTransPropsCopy, parseIndexMap)
    })

    allKeys = evaluateAllKeys(frames)
    parseIndexMap = stylePropertyAttributeOfKeyframe(this, allKeys)
    
    if (needToCalculateInitalFrame) frames.dda(initFrame);

    endFrames = frames;
    
  }
  else {
    formatCss(frame_frames as any, thisTransPropsCopy, parseIndexMap);
    allKeys = Object.keys(frame_frames)
    if (allKeys.includes("offset")) allKeys.rmV("offset");
    (frame_frames as GenericObject).offset = 1
    parseIndexMap = stylePropertyAttributeOfKeyframe(this, allKeys)

    needToCalculateInitalFrame = true
    endFrames = [initFrame, frame_frames];
  }






  let detectedProperties = detectIfInTransitionProperty(allKeys, transitionProperty, transitionDuration, this);


  let cssCanBeUsedToFill = allKeys.excludes(...detectedProperties)

  let elemsWithoutConsitentTransformPropsKey = {elem: this, identifier: options.name}

  const seperatedKeyframes = seperateKeyframeStylesFromProps(endFrames, parseIndexMap) 
  const animateViaWaapi = !seperatedKeyframes.style.empty
  const animateViaProp = !seperatedKeyframes.prop.empty

  if (!animationIsGuided) {
    elemsWithoutConsitentTransformProps.add(elemsWithoutConsitentTransformPropsKey)

    type Mutable<T> = {
      -readonly [P in keyof T]: T[P];
    };

    let o = options as Mutable<UnguidedAnimationOptions>;

    //Defaults
    if (o.duration === undefined) o.duration = 200;
      else if (o.duration <= 0) throw "Given option duration " + o.duration + " cannot be negative."
    if (o.easing === undefined) o.easing = new Easing("ease")
    else {
      //@ts-ignore
      if (typeof o.easing === "string") o.easing = new Easing(o.easing)
    }
    if (o.fill === undefined) o.fill = true;

    let waapiOptions
    if (animateViaWaapi) {
      waapiOptions = clone(o)
      waapiOptions.fill = "both"
      waapiOptions.easing = o.easing.string
    }
    



    



    return await new Promise(async (res, rej) => {
      let animation: Animation
      let tweeny: TweenObject<any>
      let cancelAnimation = false
      let rmFromNameSpace = () => {
        this.removeAttribute(progressNameString);
        ns.rmV(options.name)
      }
      try {
        if (animateViaWaapi) animation = this.animate(seperatedKeyframes.style, waapiOptions);
        if (animateViaProp) {
          //@ts-ignore
          tweeny = new TweenObject(true, seperatedKeyframes.prop, o);
          // Format
          tweeny.onUpdate((keyframe) => {
            for (let prop in keyframe) {                
              keyframe[prop] = postFixStyle(prop, keyframe[prop], parseIndexMap[prop], false)
            }
          })
          
          const fill = {attr: [], prop: []}
          const firstProp = clone(seperatedKeyframes.prop.first)
          delete firstProp.offset
          for (let prop in firstProp) {
            fill[parseIndexMap[prop]].add(prop)
          }

          if (!fill.attr.empty) {
            tweeny.onUpdate((keyframe) => {
              fill.attr.ea((key) => {
                this.setAttribute(key, keyframe[key])
              })
            })
          }
          if (!fill.prop.empty) {
            tweeny.onUpdate((keyframe) => {
              fill.prop.ea((key) => {
                this[key] = keyframe[key]
              })
            })
          }
          // TODO: use animationFrameDelta for everything
          animationFrameDelta(tweeny.update.bind(tweeny), o.duration, o.iterations)

        }

      }
      catch(e) {
        setKeyframe(endFrames.last, this)

        thisTransProps.transform = getComputedStyle(this).transform
        elemsWithoutConsitentTransformProps.rm(elemsWithoutConsitentTransformPropsKey)

rej(`Encountered following error while attempting to animate.

--------

` + e.message + `

--------


Falling back on ` + this.tagName.toLowerCase() + `#css(...) to prevent logic failures.`)
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
      if (iterations !== Infinity) if (animation !== undefined) animation.onfinish = () => {
        if (cancelAnimation) return
        finished = true
        let lastFrame = endFrames.last
        thisTransProps.transform = lastFrame.transform
        elemsWithoutConsitentTransformProps.rm(elemsWithoutConsitentTransformPropsKey)
        if (o.fill && cssCanBeUsedToFill) {
          setKeyframe(lastFrame, this)
          animation.cancel()
        }
        res();
      }
      else setTimeout(() => {
        if (cancelAnimation) return
        finished = true
        elemsWithoutConsitentTransformProps.rm(elemsWithoutConsitentTransformPropsKey)
        res()
      }, o.duration * iterations)

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
    type Mutable<T> = {
      -readonly [P in keyof T]: T[P];
    };

    let o = options as Mutable<GuidedAnimationOptions>;

    let easingFunc: Function

    // Defaults
    if (o.start === undefined) o.start = 0;
    if (o.end === undefined) o.end = o.start + 100;
    if (o.smooth === undefined) o.smooth = true;
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

    let lastCycle: Symbol

    let tweeny: TweenObject<any>
    if (animateViaProp) {

      let tweenOptions = {
        easing: a => a,
        duration: 1,
        fill: true,
        iterations: o.iterations
      }
      
      // Format
      tweeny = new TweenObject(true, seperatedKeyframes.prop, tweenOptions)
      // TODO: Dont do this via onUpdate; Use parse functions instead
      tweeny.onUpdate((keyframe) => {
        for (let prop in keyframe) {                
          keyframe[prop] = postFixStyle(prop, keyframe[prop], parseIndexMap[prop], false)
        }
      })

      const fill = {attr: [], prop: []}
      const firstProp = clone(seperatedKeyframes.prop.first)
      delete firstProp.offset
      for (let prop in firstProp) {
        fill[parseIndexMap[prop]].add(prop)
      }

      if (!fill.attr.empty) {
        tweeny.onUpdate((keyframe) => {
          fill.attr.ea((key) => {
            this.setAttribute(key, keyframe[key])
          })
        })
      }
      if (!fill.prop.empty) {
        tweeny.onUpdate((keyframe) => {
          fill.prop.ea((key) => {
            this[key] = keyframe[key]
          })
        })
      }
    }
    



    // Since this gets called VERY often, keep variable declaration to a minimum. Every mem allocation needs to be garbage collected.

    const subscription = () => {
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
          endFrames[0] = currentFrame(allKeys, this, parseIndexMap, thisTransProps);
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

      if (animateViaWaapi) if (lastAnimation !== undefined) lastAnimation.cancel()

      
      let thisCycle = Symbol("Cycle")
      lastCycle = thisCycle
      try {
        if (animateViaWaapi) {
          lastAnimation = this.animate(endFrames, {duration: 1, fill: "both", easing: "linear", iterations: 1, iterationStart: progressToSaveProgress(easingFunc(progress))});
          lastAnimation.pause()
        }
        if (animateViaProp) {
          tweeny.update(easingFunc(progress))
        }
      }
      catch (e) {
        errorAnimation("main", endFrames, progressToSaveProgress(easingFunc(progress)), this, e)
        progressAbsorption = 0
        progress = 1
      }

      
      requestAnimationFrame(() => {
        if (overlimit && !(progress <= minAnimationProgress || progress >= maxAnimationProgress)) {
          notInLimitCorrection = false
          subscription()
          return
        }
        else notInLimitCorrection = true
        requestAnimationFrame(() => {
          if (thisCycle === lastCycle) {
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
                // this keyframes shows the problem {translateX: 500}, {translateY: 500, backgroundColor: "red"},
                smoothProgress = progressToSaveProgress(smoothProgress)

                // TODO: move variable declaration outside of loop
                let easedSmoothProgress = easingFunc(smoothProgress)
                let minBorderReached = easedSmoothProgress <= minAnimationProgress
                let maxBorderReached = easedSmoothProgress >= maxAnimationProgress
                if (minBorderReached) easedSmoothProgress = minAnimationProgress
                else if (maxBorderReached) easedSmoothProgress = maxAnimationProgress

                
                try {
                  if (animateViaWaapi) {
                    if (lastAnimation !== undefined) lastAnimation.cancel()
                    lastAnimation = that.animate(endFrames, {duration: 1, fill: "both", easing: "linear", iterations: 1, iterationStart: easedSmoothProgress});
                    lastAnimation.pause();
                  }
                  if (animateViaProp) {
                    tweeny.update(easedSmoothProgress)
                  }
                }
                catch (e) {
                  errorAnimation("smooth", endFrames, easedSmoothProgress, that, e)
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

              if (animateViaWaapi) {
                if (cssCanBeUsedToFill) lastAnimation.cancel()
                lastAnimation = undefined
              }

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
});

function setKeyframe(keyframe: any, that: HTMLElement) {
  delete keyframe.offset
  formatCss(keyframe, that, stylePropertyAttributeOfKeyframe(that, Object.keys(keyframe)), false);

  for(let prop in keyframe) {
    that.style[prop] = keyframe[prop];
  }
}


function errorAnimation(thread, workingFrames, progress, that, error) {
  console.error("Unexpected error while animating (Thread: " + thread + ") using the following parameters\n\nFrames: ", workingFrames , "\nProgress: ", progress, "\n\nSetting progressAbsorption to 0 to prevent further failures.\nthis: ", that, "\nException: \n", error)
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
  // TODO: Dont always use waapi to interpolate. For simple numeric values you could use TweenObject
  // TODO: Dont always create new Transfrom prop to calc it. Every elements at this point must have 
  // one. And it must be consistant, as far as I am concerned. But check if when the cleanup of the
  // last animation is called.


  const linear: "linear" = "linear"
  const both: "both" = "both"

  return setupBackgroundTask(getStyleAtProgress)

  
  
  function getStyleAtProgress(frames: any, intrest: {at: number, keys: string[]}, el: Element, parseIndexMap: ParseIndexMap): {[key: string]: string} {
    let { keys } = intrest

    let transformKeys = []
    keys.ea((e, i) => {
      if (TransformProp.applies(e)) transformKeys.add(i)
    })
    keys.rmI(...transformKeys)


    frames.ea((frame) => {
      formatCss(frame, true, parseIndexMap)
    })

    let animation = el.animate(frames, {
      duration: 100,
      fill: both,
      easing: linear,
      iterations: 1,
      iterationStart: progressToSaveProgress(intrest.at)
    });


    let res: {[key: string]: string} = {};
    let cs = getComputedStyle(el)
    
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