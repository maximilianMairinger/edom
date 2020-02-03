import ae from "../lib/attatchToProto"
import { NodeLs } from "../components/nodeLs"


ae("apd", function(...elems: Array<string | Element>) {
  this.append(...elems)
  return this
})

ae("emptyNodes", function() {
  this.html = "";
  return this;
})

ae("childs", function(selector_depth: string | number = 1) {
  if (typeof selector_depth === "string") return new NodeLs(...this.querySelectorAll(selector_depth));
  else if (selector_depth > 0) {
    return new NodeLs(...this.children, ...new NodeLs(...this.children).childs(selector_depth-1));
  }
  return new NodeLs();
})
