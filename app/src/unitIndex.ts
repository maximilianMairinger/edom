type Index = {[prop: string]: string | ((style: string | number) => string)}

// TODO default export string sepeartion.

let style: Index = {}
let attr: Index, prop: Index
attr = prop = {}
let unitIndex: {style: Index, prop: Index, attr: Index} = {style, prop, attr}




let hasPx = ["x", "y", "z", "translateX", "translateY", "translateZ", "rotate", "rotate3d", "translate", "translate3d", "backgroundSize", "border", "borderBottom", "borderBottomLeftRadius", "borderBottomRightRadius", "borderBottomWidth", "borderLeft", "borderLeftWidth", "borderRadius", "borderRight", "borderRightWidth", "borderTop", "borderTopLeftRadius", "borderTopRightRadius", "borderTopWidth", "borderWidth", "bottom", "columnGap", "columnRuleWidth", "columnWidth", "columns", "flexBasis", "font", "fontSize", "gridColumnGap", "gridGap", "gridRowGap", "height", "left", "letterSpacing", "lineHeight", "margin", "marginBottom", "marginLeft", "marginRight", "marginTop", "maskSize", "maxHeight", "maxWidth", "minHeight", "minWidth", "outline", "outlineOffset", "outlineWidth", "padding", "paddingBottom", "paddingLeft", "paddingRight", "paddingTop", "perspective", "right", "shapeMargin", "tabSize", "top", "width", "wordSpacing"]
let hasDeg = ["rotateX", "rotateY", "rotateZ", "rotate", "skewX", "skewY", "skew"]

let px = "px"
let deg = "deg"


hasPx.ea((e) => {
  style[e] = px
})

hasDeg.ea((e) => {
  style[e] = deg
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

// function deleteIfFound(query: string[]) {
//   return function(style: string) {
//     query.ea((e) => {
//       style = style.replace(e, "")
//     })
//     return style
//   }
// }



style.backgroundImage = optionalPrePostFix("url(", ")")


const startsWithPath = startsWith("path(")
const endsWithBracket = endsWith(")")

style.d = (style: string) => {
  if (!startsWithPath(style)) style = "path(" + style
  else if (!endsWithBracket(style)) style += ")"
  return style
}


export default unitIndex
