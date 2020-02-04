type Index = {[prop: string]: string | ((style: string | number) => any)}
import { parse as parseSvgPath } from "tween-svg-path"
import clone from "tiny-clone"

const styleIn: Index = {}
const attrIn: Index = {}
const propIn: Index = {}
export const parseIn: {style: Index, prop: Index, attr: Index} = {style: styleIn, prop: propIn, attr: attrIn}

const attrOut: Index = {}
const propOut: Index = {}
export const parseOut: {style: Index, prop: Index, attr: Index} = {style: {}, prop: attrOut, attr: propOut}



let hasPx = ["x", "y", "z", "translateX", "translateY", "translateZ", "rotate", "rotate3d", "translate", "translate3d", "backgroundSize", "border", "borderBottom", "borderBottomLeftRadius", "borderBottomRightRadius", "borderBottomWidth", "borderLeft", "borderLeftWidth", "borderRadius", "borderRight", "borderRightWidth", "borderTop", "borderTopLeftRadius", "borderTopRightRadius", "borderTopWidth", "borderWidth", "bottom", "columnGap", "columnRuleWidth", "columnWidth", "columns", "flexBasis", "font", "fontSize", "gridColumnGap", "gridGap", "gridRowGap", "height", "left", "letterSpacing", "lineHeight", "margin", "marginBottom", "marginLeft", "marginRight", "marginTop", "maskSize", "maxHeight", "maxWidth", "minHeight", "minWidth", "outline", "outlineOffset", "outlineWidth", "padding", "paddingBottom", "paddingLeft", "paddingRight", "paddingTop", "perspective", "right", "shapeMargin", "tabSize", "top", "width", "wordSpacing"]
let hasDeg = ["rotateX", "rotateY", "rotateZ", "rotate", "skewX", "skewY", "skew"]

let px = "px"
let deg = "deg"


hasPx.ea((e) => {
  styleIn[e] = px
})

hasDeg.ea((e) => {
  styleIn[e] = deg
})


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

function deleteIfFound(...query: string[]) {
  return function(style: string) {
    query.ea((e) => {
      style = style.split(e).join("")
    })
    return style
  }
}


styleIn.backgroundImage = optionalPrePostFix("url(", ")")

// const startsWithPath = startsWith("path(")
// const endsWithBracket = endsWith(")")
const deletePathPrefixes = deleteIfFound("path(\"", "\")", "path('", "')", "path(`", "`)")


styleIn.d = (style: string) => {
  style = deletePathPrefixes(style)
  style = parseSvgPath.toPath(parseSvgPath.toObject(style)) as any
  style = "path(\"" + style + "\")"
  return style
}

propIn.d = attrIn.d = (style: string) => {
  return parseSvgPath.toObject(deletePathPrefixes(style))
}
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

