import { et } from "../lib/attatchToProto"
import { constructIndex } from "key-index"
import { ScrollData } from "../components/scrollData"



const getScrollData = constructIndex((elem: HTMLElement | Window) => {
  let data: ScrollData
  if (elem instanceof Window) {
    data = new ScrollData(elem.scrollY)
    elem.on("scroll", () => {
      data.set(elem.scrollY)
    })
  }
  else {
    data = new ScrollData(elem.scrollTop)
    elem.on("scroll", () => {
      data.set(elem.scrollTop)
    })
  }
  
  return data
})

et("scrollData", function() {
  return getScrollData(this)
})

et(["scrollEvent", "scrollTrigger"], function(at: number, listenerForward: () => void, listenerBack: () => void, margin = 0) {
  (this.scrollData() as ScrollData).scrollTrigger(at, margin).on("forward", listenerForward).on("backward", listenerBack)
})

