import { et } from "../lib/attatchToProto"
import { constructIndex } from "key-index"
import { ElementScrollData } from "../components/scrollData"
import { Data } from "josm"


const passiveArg = {passive: true}

const getScrollData = constructIndex((elem: HTMLElement | Window) => constructIndex((usePageEnd: boolean) => 
  new ElementScrollData(elem, usePageEnd)
))

et("scrollData", function(usePageEnd: boolean) {
  return getScrollData(this)(usePageEnd)
})

et(["scrollEvent", "scrollTrigger"], function(at: number, listenerForward: () => void, listenerBack: () => void, margin = 0) {
  return (this.scrollData() as ElementScrollData).scrollTrigger(at, margin).on("forward", listenerForward).on("backward", listenerBack)
})

et("resizeData", function() {
  let d = new Data((this as HTMLElement).getBoundingClientRect());
  (this as HTMLElement).on("resize", (e) => {
    d.set(e)
  }, passiveArg)
  return d
})

