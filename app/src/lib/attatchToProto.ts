import { constructApplyToPrototype } from "attatch-to-prototype"


const defaultOptions = { enumerable: true }

// apply (to) Target
export const at = constructApplyToPrototype(EventTarget.prototype, defaultOptions)
// apply (to) Element
export const ae = constructApplyToPrototype(Element.prototype, defaultOptions)
