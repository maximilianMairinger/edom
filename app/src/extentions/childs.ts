import { at } from "../lib/attatchToProto"
import { ElementList } from "../components/elementList"


at("apd", function(...elems: Array<string | Element>) {
  this.append(...elems)
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
