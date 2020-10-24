import { et } from "../lib/attatchToProto"
import { constructIndex } from "key-index"
import { ScrollData } from "../components/scrollData"
import { Data } from "josm"


const passiveArg = {passive: true}

const getScrollData = constructIndex((elem: HTMLElement | Window) => {
  return new ScrollData(elem)
})

et("scrollData", function() {
  return getScrollData(this)
})

et(["scrollEvent", "scrollTrigger"], function(at: number, listenerForward: () => void, listenerBack: () => void, margin = 0) {
  return (this.scrollData() as ScrollData).scrollTrigger(at, margin).on("forward", listenerForward).on("backward", listenerBack)
})

et("resizeData", function() {
  let d = new Data((this as HTMLElement).getBoundingClientRect());
  (this as HTMLElement).on("resize", (e) => {
    d.set(e)
  }, passiveArg)
  return d
})

