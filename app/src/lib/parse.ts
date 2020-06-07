type Index = {[prop: string]: string | ((style: string | number) => any)}
import { parse as parseSvgPath } from "tween-svg-path"
import clone from "fast-copy"
import { optionalPrePostFix } from "./util"

const styleIn: Index = {}
const attrIn: Index = {}
const propIn: Index = {}
export const parseIn: {style: Index, prop: Index, attr: Index} = {style: styleIn, prop: propIn, attr: attrIn}

const attrOut: Index = {}
const propOut: Index = {}
export const parseOut: {style: Index, prop: Index, attr: Index} = {style: {}, prop: attrOut, attr: propOut}



const hasPx = ["x", "y", "z", "translateX", "translateY", "translateZ", "rotate", "rotate3d", "translate", "translate3d", "backgroundSize", "border", "borderBottom", "borderBottomLeftRadius", "borderBottomRightRadius", "borderBottomWidth", "borderLeft", "borderLeftWidth", "borderRadius", "borderRight", "borderRightWidth", "borderTop", "borderTopLeftRadius", "borderTopRightRadius", "borderTopWidth", "borderWidth", "bottom", "columnGap", "columnRuleWidth", "columnWidth", "columns", "flexBasis", "font", "fontSize", "gridColumnGap", "gridGap", "gridRowGap", "height", "left", "letterSpacing", "lineHeight", "margin", "marginBottom", "marginLeft", "marginRight", "marginTop", "maskSize", "maxHeight", "maxWidth", "minHeight", "minWidth", "outline", "outlineOffset", "outlineWidth", "padding", "paddingBottom", "paddingLeft", "paddingRight", "paddingTop", "perspective", "right", "shapeMargin", "tabSize", "top", "width", "wordSpacing"]
const hasDeg = ["rotateX", "rotateY", "rotateZ", "rotate", "skewX", "skewY", "skew"]
const hasS = ["transitionDuration"]
const hasNoUnit = ["scale", "scaleX", "scaleY", "scaleZ"]

export const pxString = "px"
export const degString = "deg"
export const sString = "s"
export const noUnitString = ""


hasPx.ea((e) => {
  styleIn[e] = pxString
})

hasDeg.ea((e) => {
  styleIn[e] = degString
})

hasS.ea((e) => {
  styleIn[e] = sString
})

hasNoUnit.ea((e) => {
  styleIn[e] = noUnitString
})


styleIn.backgroundImage = optionalPrePostFix(
  ["url(", "url('", "url(`", "url(\""], 
  [    ")",    "')",    "`)",    "\")"]
)("inOut")


const fixPathAbs = optionalPrePostFix(
  ["path(", "path(`", "path('", "path(\""],
  [    ")",     "`)",     "')",      "\")"],
)

styleIn.d = fixPathAbs("inOut", (style) => {
  return parseSvgPath.toPath(parseSvgPath.toObject(style)) as string
})

propIn.d = attrIn.d = fixPathAbs("in", parseSvgPath.toObject)
type Segments = any;



propOut.d = attrOut.d = (style: Segments) => {

  // TODO: check if this even has any performace benefits
  style = clone(style)
  
  style.ea((s) => {
    for (let i = 1; i < s.length; i++) {
      s[i] = (Math.round(s[i] * 100) / 100)
    }
  })
  return parseSvgPath.toPath(style)
}

