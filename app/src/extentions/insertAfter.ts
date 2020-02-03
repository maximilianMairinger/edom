import ae from "../lib/attatchToProto";

ae("insertAfter", function(newNode: Element, referenceNode: Element) {
  if (referenceNode.parent !== this)
    throw new Error("This is not the parent of referenceNode.");
  let sib = referenceNode.nextSibling;
  if (sib !== null) this.insertBefore(newNode, sib);
  else this.apd(newNode);
  return this;
})
