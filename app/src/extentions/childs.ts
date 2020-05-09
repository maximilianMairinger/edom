import { at } from "../lib/attatchToProto"
import { ElementList } from "../components/elementList"


const beforeend: "beforeend" = "beforeend"
at("apd", function(...elems: Array<string | Element>) {
  elems.ea((e) => {
    if (e instanceof Element) this.append(e)
    else this.insertAdjacentHTML(beforeend, e)
  })
  
  return this
})

at("emptyNodes", function() {
  this.innerHTML = "";
  return this;
})

at("childs", function(selector_depth: string | number = 1, alwaysReturnElementList = false) {
  let ls: ElementList
  if (typeof selector_depth === "string") ls = new ElementList(...this.querySelectorAll(selector_depth));
  else if (selector_depth > 0) {
    ls = new ElementList(...this.children, ...new ElementList(...this.children).childs(selector_depth-1));
  }
  else return new ElementList

  return ls.length === 1 && !alwaysReturnElementList ? ls.first : ls
})
