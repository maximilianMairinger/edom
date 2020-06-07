import { et } from "../lib/attatchToProto";
import { constructIndexStore } from "../lib/indexing";
import { Data } from "josm";

const getScrollData = constructIndexStore((elem: HTMLElement | Window) => {
  let data: Data<number>
  if (elem instanceof Window) {
    data = new Data(elem.scrollY)
    elem.on("scroll", () => {
      data.set(elem.scrollY)
    })
  }
  else {
    data = new Data(elem.scrollTop)
    elem.on("scroll", () => {
      data.set(elem.scrollTop)
    })
  }
  
  return data
})

et("scrollData", function() {
  return getScrollData(this)
})

et("scrollEvent", function(at: number, listenerForward: () => void, listenerBack: () => void, margin = 0) {
  const data = getScrollData(this)
  margin = margin / 2
  const atForward = at + margin
  let atBack = at - margin
  if (atBack < 0) atBack = 0
  let lastProg = 0
  let sub = data.get((prog) => {
    if (prog >= atForward && lastProg < atForward) listenerForward()
    else if (prog < atBack && lastProg >= atBack) listenerBack()
    lastProg = prog
  })
  return sub
})

