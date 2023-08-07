import { et } from "../lib/attatchToProto"
import { constructIndex } from "key-index"
import { ElemScrollData } from "../components/scrollData"
import { Data, DataBase } from "josm"
import LinkedList, { Token } from "fast-linked-list"



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







const getScrollLengthData = constructIndex(function scrollLengthDataBase(elem: Element) {

  const lenDataBase = new DataBase({
    width: elem.scrollWidth,
    height: elem.scrollHeight
  })

  const funcs = (["width", "height"] as const).map((dir) => {
    const lenData = lenDataBase[dir]
    const lenArr = new LinkedList<number>()
    function updateData() {
      let len = 0
      lenArr.forEach((len2) => {
        len += len2
      })
      lenData.set(len)
    }


    const elementTokenIndex = new WeakMap<HTMLElement, Token>()

    changeCb([{addedNodes: elem.childNodes, removedNodes: []}])
    function changeCb(muts: {addedNodes: {forEach: (loop: (elem: Node) => void) => void}, removedNodes: {forEach: (loop: (elem: Node) => void) => void}}[]) {
      for (const mut of muts) {
        mut.addedNodes.forEach((elem) => {
          if (elem instanceof HTMLElement) {
            const token = lenArr.push(0)
            elementTokenIndex.set(elem, token)
            if (elem instanceof HTMLSlotElement) {
              const parElem = (elem.getRootNode() as ShadowRoot).host
              getScrollLengthData(parElem)[dir].get((len) => {
                token.value = len
                updateData()
              })
            }
            else {
              elem.resizeDataBase()[dir].get((len) => {
                token.value = len
                updateData()
              })
            }
          }
        })
        mut.removedNodes.forEach((elem) => {
          if (elem instanceof HTMLElement) {
            elementTokenIndex.get(elem).rm()
            elementTokenIndex.delete(elem)
          }
        })
      }
    }

    return changeCb
  })

  

  const mut = new MutationObserver((muts) => {
    for (const func of funcs) func(muts)
  })

  mut.observe(elem, {
    attributes: false,
    childList: true,
    subtree: false
  })


  return lenDataBase
}, WeakMap)

et("scrollLengthData", function(passive?: boolean) {
  return getScrollLengthData(this)(passive)
})
