import { et } from "../lib/attatchToProto";
import { polyfills } from "../lib/polyfill"
import { EventListener, dataSubscriptionCbBridge as eventListenerCbBridge, EventListenerBridge } from "../components/eventListener";
import animFrame, { CancelAbleSubscriptionPromise } from "animation-frame-delta"
import constructIndex from "key-index";
import { Data } from "josm";

const dataTransfers: any = {};
let dataTransferID = 0;
let resizeListener: Map<Element, Map<Function, Function>> = new Map();
//only init when needed since this heavily consumes resources (cpu).
let obs: any;
let obsUndefined = true
function initResObs() {
  obsUndefined = false
  obs = new polyfills.ResizeObserver((elements, ...a) => {
    elements.ea((elem) => {
      resizeListener.get(elem.target).forEach((actualFunc) => {
        actualFunc(elem.contentRect)
      })
    })
  });
}

//TODO: make getfunction
let eventListenerIndex = constructIndex((el: Element) => [] as {event: string, actualListener: Function, userListener: Function, options: any}[])

const key = "advancedDataTransfer";




export const internalOn = Symbol()
export const internalOff = Symbol()

//TODO: document / window.on("ready")
//TODO: return data / or promise when no cb is given
//TODO: check if options are taken into account (resize??)

// if I bind here do I have issues with debinding? (off)


const scrollEventFunctionIndex = constructIndex((e: HTMLElement) => new Map)

const isScrollActive = (q: string) => q === "auto" || q === "scroll"
const hasScrollActive = (elem: Element, coord: "X" | "Y") => isScrollActive(elem.css("overflow" + coord as any))

export const coordsToDirIndex: {
  window: {
    x: "scrollX",
    y: "scrollY"
  },
  element: {
    x: "scrollLeft",
    y: "scrollTop"
  }
} = {
  window: {
    x: "scrollX",
    y: "scrollY"
  },
  element: {
    x: "scrollLeft",
    y: "scrollTop"
  }
}

export function getAvailableLocalScrollDirections(elem: Element | Window) {
  let hasDir: ("scrollX" | "scrollY" | "scrollLeft" | "scrollTop")[] = []
  if (elem instanceof Window) {
    let w = coordsToDirIndex.window
    hasDir.add(w.x, w.y)
  }
  else {
    let e = coordsToDirIndex.element
    if (hasScrollActive(elem, "Y")) hasDir.add(e.y)
    if (hasScrollActive(elem, "X")) hasDir.add(e.x)
  }
  return hasDir
}

export function localCoordsToDir(elem: EventTarget, dir: "x" | "y") {
  return coordsToDirIndex[elem instanceof Window ? "window" : "element"][dir]
}



et(internalOn as any, function(givenEvent: string, givenListener: Function, givenOptions: any) {
  const isResize = givenEvent === "resize"
  const boundGivenListener = givenListener.bind(this)
  const isWindow = this === window
  if (isResize && !isWindow) {
    if (obsUndefined) initResObs()
    let map = resizeListener.get(this)
    if (map === undefined) {
      obs.observe(this)
      map = new Map()
      resizeListener.set(this, map)
    }
    map.set(givenListener, boundGivenListener)
  }
  else if (givenEvent.startsWith("scroll")) {
    let q = preventScrollEventPropagationIndex(this)
    const endsWith = givenEvent.substr(givenEvent.length - 1) as "l" | "x" | "y"
    let func: Function

    let hasDir = getAvailableLocalScrollDirections(this)
    
    if (endsWith === "l") {
      // both scroll x and y
    }
    else {
      // just x or just y scroll events please
      const dir = localCoordsToDir(this, endsWith)
      if (!hasDir.includes(dir)) console.warn(this, "Does not seem to have scroll enabled on the " + endsWith + "axis. Continuing anyway")

      // TODO: dont calculate this when using multiple scrolls
      // TODO: update last when setting via js without eventlistener notification
      if (givenOptions.velocity) {
        let last = this[dir]
        if (hasDir.length === 2) {
          
          func = (e: any) => {
            let vel = {}
            if (this[dir] !== last) {
              e.velocity = vel
              vel[endsWith] = last - (last = this[dir])
              
              boundGivenListener(e)
            }
          }
        }
        else {
          
        }
      }
      else{
        if (hasDir.length === 2) {
          let last = this[dir]
          
          func = (e: any) => {
            if (this[dir] !== last) {
              last = this[dir]
              boundGivenListener(e)
            }
          }
        }
        else {
          func = boundGivenListener
        }
      }
      
      
      
      func = givenOptions.velocity ? (e: any) => {
        // e.velocity = 
        boundGivenListener(e)
      } : boundGivenListener
    }
   
  
    
    
    scrollEventFunctionIndex(this).set(givenListener, func)
    q.subscriptionIndex.set(givenListener, q.active.get((g) => {
      if (g) this.addEventListener(givenEvent, func, givenOptions)
      else this.removeEventListener(givenEvent, func)
    }))
  }
  else {
    let actualListener: Function;
    if (isResize) {
      setTimeout(() => {
        boundGivenListener({width: this.innerWidth, height: this.innerHeight})
      }, 0)
      actualListener = (e) => {
        boundGivenListener({width: this.innerWidth, height: this.innerHeight})
      }
    }
    else if (givenEvent === "dragstart") {
      dataTransferID++;
      actualListener = (e) => {
        e.setData = (data: any) => {
          dataTransfers[dataTransferID] = data
          e.dataTransfer.setData(key, dataTransferID)
        }
        boundGivenListener(e)
      }

    }
    else if (givenEvent === "drop") {
      actualListener = (e) => {
        e.getData = () => {
          let id = e.dataTransfer.getData(key)
          let found = id !== "" ? dataTransfers[id] : null
          delete dataTransfers[id]

          return found

        }
        boundGivenListener(e)
      }

    }
    else {
      actualListener = boundGivenListener
    }
    eventListenerIndex(this).add({event: givenEvent, actualListener, userListener: givenListener, options: givenOptions})
    this.addEventListener(givenEvent, actualListener, givenOptions)
  }
  return this
})


et(internalOff as any, function(...a) {
  if (a[0] === "resize" && this !== window) {
    if (obsUndefined) initResObs()
    let map = resizeListener.get(this)
    if (map !== undefined) {
      map.delete(a[1])
      if (map.size === 0) {
        obs.unobserve(this)
        resizeListener.delete(this)
      }
    }
  }
  else if (a[0] === "scroll") {
    
    let s = preventScrollEventPropagationIndex(this).subscriptionIndex.get(this)
    this.removeEventListener(a[0], a[1])

    //@ts-ignore
    s.destroy()
  }
  else {
    let toBeRm: any[] = [];
    let that = eventListenerIndex(this)
  
    that.ea((e) => {
      if (e.event === a[0] && e.userListener === a[1]) toBeRm.add(e)
    })
  

    toBeRm.ea((e) => {
      this.removeEventListener(e.event, e.actualListener)
      that.rmV(e)
    })
    
  }

  return this
})





et("on", function (event: string, listener: Function, options?: any) {
  if (listener instanceof EventListener) {
    listener.options(options)
    return listener.activate().target(this)
  }
  else {
    let t = listener[EventListenerBridge]
    if (t) {
      t = t.get(this)
      if (t) t = t[event]
    }
    if (t) {
      t.options(options)
      return t.activate()
    }
    else return new EventListener(this, event as any, listener as any, true, options)
  }
  
})

et("off", function (event_listener: string | Function, listener?: Function, options?: any) {
  let event: any
  if (event_listener instanceof Function) listener = event_listener
  else event = event_listener



  if (listener instanceof EventListener) {
    listener.options(options)
    return listener.deactivate().target(this)
  }
  else {
    let t = listener[EventListenerBridge]
    if (t) {
      t = t.get(this)
    }
    if (t) {
      if (t[event]) {
        t[event].options(options)
        return t[event].deactivate()
      }
      else {
        let ar = []
        for (let k in t) {
          t[k].options(options)
          ar.add(t[k].deactivate())
        }
        return ar
      }
    }
    else return new EventListener(this, event as any, listener as any, false, options)
  }
 
})





// TODO: catch ons scroll
let preventScrollEventPropagationIndex = constructIndex((el: HTMLElement) => {return {active: new Data(true), subscriptionIndex: new Map}})

function animateScroll(coords: {x?: number, y?: number}, x: "x" | "y", options: {speed: number, easing: (n: number) => number, cancelOnUserInput: boolean}, container: HTMLElement) {
  const scrollDir = coordsToDir[x]
  const px = coords[x] - container[scrollDir]
  const dur = (Math.abs(px) / options.speed) * 1000
    
    
  let lastRelProg = 0

  return animFrame((absProg) => {
    const relProg = options.easing(absProg / dur)
    const del = relProg - lastRelProg
    container[scrollDir] += px * del

    lastRelProg = relProg
  }, dur)
}


function setScroll(coords: {x?: number, y?: number}, x: "x" | "y", container: HTMLElement) {
  const scrollDir = coordsToDir[x]
  const px = coords[x]
  container[scrollDir] = px
}

et("scroll", function(to: number | {x?: number, y?: number}, animateOptions?: {speed: number, easing: (n: number) => number, cancelOnUserInput: boolean}, dontTriggerScrollEvent: boolean = true) {
  const coords = typeof to === "number" ? this.scrollWidth > this.width() ? {y: to} : {x: to} : to
  
  let d: Data<boolean>
  if (dontTriggerScrollEvent) {
    d = preventScrollEventPropagationIndex(this).active
    d.set(true)
  }
  
  let cancFunc: any
  if (animateOptions) {
    let anims: CancelAbleSubscriptionPromise[] = []
    for (let x in coords) {
      anims.add(animateScroll(coords, x as any, animateOptions, this))
    }
    if (dontTriggerScrollEvent) {
      Promise.all(anims).then(() => {
        d.set(false)
      })
      cancFunc = () => {
        anims.Inner("cancel", [])
        d.set(false)
      }
    }
    else {
      cancFunc = () => {
        anims.Inner("cancel", [])
      }
    }
  }
  else {
    for (let x in coords) {
      setScroll(coords, x as any, this)
    }
    if (dontTriggerScrollEvent) {
      cancFunc = () => {
        d.set(false)
      }
    }
  }

  if (animateOptions.cancelOnUserInput) new EventListener(this, ["wheel", "touchstart", "keydown", "mousedown"], cancFunc, true, {passive: true, once: true})
  

  
  
})
