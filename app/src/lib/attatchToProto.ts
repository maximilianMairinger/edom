import { constructApplyToPrototype } from "attatch-to-prototype"

// apply (to) Target
export const at = constructApplyToPrototype(EventTarget.prototype)
// apply (to) Element
export const ae = constructApplyToPrototype(Element.prototype)
