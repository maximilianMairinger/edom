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
  this.html = "";
  return this;
})

at("childs", function(selector_depth: string | number = 1) {
  if (typeof selector_depth === "string") return new ElementList(...this.querySelectorAll(selector_depth));
  else if (selector_depth > 0) {
    return new ElementList(...this.children, ...new ElementList(...this.children).childs(selector_depth-1));
  }
  return new ElementList();
})
