import { et } from "../lib/attatchToProto"
import { constructIndex } from "key-index"
import { ElemScrollData } from "../components/scrollData"
import { Data, DataBase } from "josm"



const getScrollData = constructIndex((elem: HTMLElement | Window) => constructIndex((dir: "x" | "y" | "one" = "one") => constructIndex((usePageEnd: boolean) => 
  new ElemScrollData(elem, usePageEnd, dir)
)), WeakMap)

et("scrollData", function(usePageEnd: boolean = false, dir?: "x" | "y" | "one") {
  return getScrollData(this)(dir)(usePageEnd)
})

et(["scrollEvent", "scrollTrigger"], function(at: number, listenerForward: () => void, listenerBack: () => void, margin = 0) {
  return (this.scrollData() as ElemScrollData).scrollTrigger(at, margin).on("forward", listenerForward).on("backward", listenerBack)
})


const getResizeData = constructIndex((elem: HTMLElement) => constructIndex((passive: boolean = true) => {
  const d = new Data((elem).getBoundingClientRect());
  elem.on("resize", (e) => {
    d.set(e)
  }, { passive })
  return d
}), WeakMap)

et("resizeData", function(passive?: boolean) {
  console.warn("Obsolete: Please use Element#resizeDataBase instead of Element#resizeData, it may be removed in the next major release.")
  return getResizeData(this)(passive)
})


function partialClone<Ob extends object>(ob: Ob, keys: (keyof Ob)[]) {
  const cloned = {} as Partial<Ob>
  for (const key of keys) {
    if (key === "__proto__") continue
    cloned[key] = ob[key]
  }
  return cloned as {[K in typeof keys[number]]: Ob[K]}
}


const resizeDataBaseKeys = ["top", "left", "bottom", "right", "width", "height"] as const
const getResizeDataBase = constructIndex((elem: HTMLElement) => constructIndex((passive: boolean = true) => {
  const d = new DataBase(partialClone((elem).getBoundingClientRect(), resizeDataBaseKeys as any));
  elem.on("resize", (e) => {
    d(partialClone(e, resizeDataBaseKeys as any))
  }, { passive })
  return d
}), WeakMap)


et("resizeDataBase", function(passive?: boolean) {
  return getResizeDataBase(this)(passive)
})
