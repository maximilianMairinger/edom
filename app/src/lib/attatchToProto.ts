import { constructApplyToPrototype } from "attatch-to-prototype"


const defaultOptions = { enumerable: true }


export const et = constructApplyToPrototype(EventTarget.prototype, defaultOptions)

export const ew = constructApplyToPrototype(window, defaultOptions)

export const el = constructApplyToPrototype(Element.prototype, defaultOptions)

export const df = constructApplyToPrototype(DocumentFragment.prototype, defaultOptions)

export const no = constructApplyToPrototype(Node.prototype, defaultOptions)
