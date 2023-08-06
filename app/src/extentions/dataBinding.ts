import { et } from "../lib/attatchToProto"
import { constructIndex } from "key-index"
import { ElemScrollData } from "../components/scrollData"
import { Data } from "josm"


const passiveArg = {passive: true}

const getScrollData = constructIndex((elem: HTMLElement | Window) => constructIndex((dir: "x" | "y" | "one" = "one") => constructIndex((usePageEnd: boolean) => 
  new ElemScrollData(elem, usePageEnd, dir)
)))

et("scrollData", function(usePageEnd: boolean = false, dir?: "x" | "y" | "one") {
  return getScrollData(this)(dir)(usePageEnd)
})

et(["scrollEvent", "scrollTrigger"], function(at: number, listenerForward: () => void, listenerBack: () => void, margin = 0) {
  return (this.scrollData() as ElemScrollData).scrollTrigger(at, margin).on("forward", listenerForward).on("backward", listenerBack)
})

et("resizeData", function() {
  let d = new Data((this as HTMLElement).getBoundingClientRect());
  (this as HTMLElement).on("resize", (e) => {
    d.set(e)
  }, passiveArg)
  return d
})

