import { el, et, ew } from "../lib/attatchToProto";
import { polyfills } from "../lib/polyfill"
import { EventListener, dataSubscriptionCbBridge as eventListenerCbBridge, EventListenerBridge } from "../components/eventListener";
import animFrame, { CancelAbleSubscriptionPromise, nextFrame, stats } from "animation-frame-delta"
import constructIndex from "key-index";
import { Data, DataCollection, DataSubscription } from "josm";
import { GuidedScrollAnimationOptions, ScrollAnimationOptions, SpeedyScrollAnimationOptions } from "../types";
import Easing from "waapi-easing";
import { CancelAblePromise } from "more-proms"

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




export const internalOn = Symbol("on")
export const internalOff = Symbol("off")

//TODO: document / window.on("ready")
//TODO: return data / or promise when no cb is given
//TODO: check if options are taken into account (resize??)

// if I bind here do I have issues with debinding? (off)



const isScrollActive = (q: string) => q === "auto" || q === "scroll"
const hasScrollActive = (elem: Element, coord: "X" | "Y") => isScrollActive(elem.css("overflow" + coord as any))

export const coordsToDirIndex = {
  x: "scrollLeft",
  y: "scrollTop"
} as const

const docElem = document.documentElement
export function getAvailableLocalScrollDirections(elem: Element) {
  let hasDir: ("x" | "y")[] = []
  if (elem === docElem) {
    if (docElem.css("overflowY") !== "hidden") hasDir.add("y")
    if (docElem.css("overflowX") !== "hidden") hasDir.add("x")
  }
  else {
    if (hasScrollActive(elem, "Y")) hasDir.add("y")
    if (hasScrollActive(elem, "X")) hasDir.add("x")
  }
  return hasDir
}


const scrollString = "scroll" as const
const initScrollFunc = (e) => {
  e.progress = {}
  e.velocity = {}
}

const scrollIndex = constructIndex((elem: Element) => constructIndex((passive: boolean) => constructIndex((capture: boolean) => {
  const callbacks = {
    x: [],
    y: [],
    xy: []
  }
  let velocity: {
    x: Data<boolean>,
    y: Data<boolean>,
    xy: Data<boolean>
  } = {
    x: new Data,
    y: new Data,
    xy: new Data
  }


  const progX = (e: any) => {
    e.progress.x = elem[coordsToDirIndex.x]
  }

  const progY = (e: any) => {
    e.progress.y = elem[coordsToDirIndex.y]
  }

  const sym = Symbol()
  let fLs: Function[] = []
  const updateXY = (x: boolean, y: boolean, xy: boolean) => {
    const hasXY = xy !== undefined
    if (hasXY) {
      if (xy) {
        x = true
        y = true
      }
      else {
        if (x === undefined) x = false
        if (y === undefined) y = false
      }
    }
    const hasX = x !== undefined
    const hasY = y !== undefined
    


    fLs = []
    if (hasX) {
      fLs.push(progX)
      if (x) {
        let lastX = elem[coordsToDirIndex.x]
        const velX = (e) => {
          e.velocity.x = e.progress.x - lastX
          lastX = e.progress.x
        }
        fLs.push(velX)
      }
    }
    if (hasY) {
      fLs.push(progY)
      if (y) {
        let lastY = elem[coordsToDirIndex.y]
        const velY = (e) => {
          e.velocity.y = e.progress.y - lastY
          lastY = e.progress.y
        }
        fLs.push(velY)
      }
    }
  }

  // Dont ask why, but it must be. Most stupidest thing in the whole dom
  const attachElem = elem === docElem ? window : elem
  let velocityCollection = new DataCollection(velocity.x, velocity.y, velocity.xy)

  
  
  const initSub = velocityCollection.get((x, y, xy) => {
    attachElem.addEventListener(scrollString, (e) => {
      initScrollFunc(e)
      for (const f of fLs) f(e)
      callbacks.y.Call(e)
      callbacks.x.Call(e)
      callbacks.xy.Call(e)
    }, {passive, capture})
    updateXY(x, y, xy)
    initSub.deactivate()
    velocityCollection.get((x, y, xy) => {
      updateXY(x, y, xy)
    }, false)
  }, false)

  let end = {
    addToLastProgress: (e: {x: number, y: number}) => {

    },
    removeCallback: (cb: Function) => {
      let removeFunc = cb[sym] as () => void
      if (!removeFunc) return
      removeFunc()
     
    },
    addCallback: (dir: "x" | "y" | "xy", vel: boolean = false, cb: Function) => {
      let cancel = false
      cb[sym] = () => {
        cancel = true
      }
      cb[sym].vel = vel
      nextFrame(() => {
        if (cancel) return

        cb[sym] = () => {
          callbacks[dir].rmV(cb)
          let v = undefined
          for (let cb of callbacks[dir]) {
            if (cb[sym] === undefined) continue
            if (cb[sym].vel === true) {
              v = true
              break
            }
            else v = false
          }
          velocity[dir].set(v)
        }
        cb[sym].vel = vel

        callbacks[dir].add(cb)
        velocity[dir].set(velocity[dir].get() || vel)
      })
    }
  }
  return end
})))


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
  else if (givenEvent === "scroll") {
    
    if (!givenOptions) givenOptions = {}
    if (givenOptions.passive === undefined) givenOptions.passive = true
    if (givenOptions.capture === undefined) givenOptions.capture = false

    const t = !isWindow ? this : docElem
    let q = preventScrollEventPropagationIndex(t)

    let hasDir = getAvailableLocalScrollDirections(t)
    const ind = scrollIndex(t)(givenOptions.passive)(givenOptions.capture)

    let coord = givenOptions.direction as "x" | "y" | "xy"
    
    if (givenOptions.direction === "x" || givenOptions.direction === "y") {
      if (!hasDir.includes(givenOptions.direction)) console.warn(t, "Does not seem to have scroll enabled on the " + givenOptions.direction + "-axis. Continuing anyway")
    }
    else {
      if (givenOptions.direction === "one") {
        coord = (hasDir.length === 1 ? hasDir.first : "y") as "x" | "y" | "xy"
      }
      else {
        coord = (hasDir.length === 1 ? hasDir.first : "xy") as "x" | "y" | "xy"
      }
    }

    const endCoord = coord
    const vel = givenOptions.velocity


    let unsubscribe: Function
    if (givenOptions.notifyOnAllChanges) {
      unsubscribe = () => {
        ind.removeCallback(useListener)
        q.subscriptionIndex.delete(givenListener)
      }
    }
    else {
      unsubscribe = () => {
        subs.destroy()
        ind.removeCallback(useListener)
        q.subscriptionIndex.delete(givenListener)
      }
    }
    
    q.subscriptionIndex.set(givenListener, unsubscribe)
    
    const useListener = !givenOptions.once ? boundGivenListener : (e) => {
      unsubscribe()
      boundGivenListener(e)
    }

    let subs: any
    if (givenOptions.notifyOnAllChanges) {
      ind.addCallback(endCoord, vel, useListener)
    }
    else {
      subs = q.active.get((g) => {
        if (g) ind.addCallback(endCoord, vel, useListener)
        else ind.removeCallback(useListener)
      })
      
    }
    return {direction: endCoord}
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
    let unsubscribe = preventScrollEventPropagationIndex(this).subscriptionIndex.get(a[1])
    if (unsubscribe) unsubscribe()
  }
  else {
    let toBeRm: any[] = [];
    let that = eventListenerIndex(this)
  
    that.ea((e) => {
      if (e.event === a[0] && e.userListener === a[1]) toBeRm.add(e)
    })
  

    toBeRm.ea((e) => {
      this.removeEventListener(e.event, e.actualListener, e.options)
      that.rmV(e)
    })
    
  }
})





et("on", function (event: string, listener?: Function, options?: any) {
  if (listener instanceof EventListener) {
    listener.options(options)
    return listener.activate().target(this)
  }
  else {
    if (listener !== undefined) {
      let t = listener[EventListenerBridge]
      if (t) {
        t = t.get(this)
        if (t) t = t[event]
      }
      if (t) {
        t.options(options)
        return t.activate()
      }
    }
    return new EventListener(this, event as any, listener as any, true, options)
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




type UnsubscribeFunction = Function
let preventScrollEventPropagationIndex = constructIndex((el: HTMLElement) => {return {active: new Data(true), subscriptionIndex: new Map} as {active: Data<boolean>, subscriptionIndex: Map<Function, UnsubscribeFunction>}});



type AbsoluteProgress = number
type RelativeProgress = number
function animateScroll(coords: {x?: number, y?: number}, x: string, options: {guide: Data<AbsoluteProgress | RelativeProgress>, duration: number, speed: {avg: number} | {begin: number} | {end: number}, easing: (n: number) => number, cancelOnUserInput: boolean}, container: HTMLElement) {
  const scrollDir = coordsToDirIndex[x]
  const pxDelta = coords[x] - container[scrollDir]

  let dur: number
  if (options.speed !== undefined) {
    const speed = (options.speed as any).avg || (options.speed as any).begin || (options.speed as any).end
    dur = (Math.abs(pxDelta) / speed) * 1000


    if ((options.speed as any).begin) {
      let deltaX = stats.absoluteDelta / dur
      let deltaY = options.easing(deltaX)
      let incline = deltaY / deltaX
      dur = dur * incline  
    }
    else if ((options.speed as any).end) {
      // Untested
      let deltaX = stats.absoluteDelta / dur
      let deltaY = 1 - options.easing(1 - deltaX)
      let incline = deltaY / deltaX
      dur = dur * incline
    }
  }
  else if (options.duration) {
    dur = options.duration
  }

  


  let lastRelProg = 0
  let lastRoundingError = 0
  // TODO: Add to last Progress

  const renderFromRelative = (relativeProgress: RelativeProgress) => {
    const relProg = options.easing(relativeProgress)
    const del = relProg - lastRelProg
    const before = container[scrollDir]
    const addAbs = pxDelta * del + lastRoundingError
    container[scrollDir] += addAbs
    lastRoundingError = (before + addAbs) - container[scrollDir]

    lastRelProg = relProg
  }
  const duration = dur
  const renderFromAbsolute = (absoluteProgress: AbsoluteProgress) => {
    renderFromRelative(absoluteProgress / duration)
  }

  if (options.guide) {
    let subscription: DataSubscription<[number]>
    if (dur !== undefined) {
      subscription = options.guide.get(renderFromAbsolute)
    }
    else subscription = options.guide.get(renderFromRelative)
    
    return subscription.deactivate.bind(subscription)
  }
  else {
    return animFrame(renderFromAbsolute, dur)
  }
}




function setScroll(coords: {x?: number, y?: number}, x: "x" | "y", container: Element) {
  // todo: add to last progress
  // scrollIndex(this)(,)
  container[coordsToDirIndex[x]] = coords[x]
}

const defaultEasingFunction = new Easing("easeInOut").function
let instancesRunningCountIndex = constructIndex((e: HTMLElement) => {return {count: 0}})
function scroll(to: number | {x?: number, y?: number} | ScrollToOptions, animateOptions_y?: number | ScrollAnimationOptions | GuidedScrollAnimationOptions, dontTriggerScrollEvent: boolean = true) {  
  
  const attachElem = this
  const t = this !== window ? this : docElem
  
  if (typeof animateOptions_y === "number" || ((to as any).left !== undefined || (to as any).right !== undefined)) return t.scrollTo(to, animateOptions_y)


  let coords: {x?: number, y?: number}
  if (typeof to === "number") {
    let q = getAvailableLocalScrollDirections(t)
    if (q.length === 1) {
      coords = {}
      coords[q.first] = to
    }
    else coords = {y: to}
  }
  else coords = to as {x?: number, y?: number}
  






  
  let active: Data<boolean>
  let instances: {count: number}
  if (dontTriggerScrollEvent) {
    active = preventScrollEventPropagationIndex(t).active
    instances = instancesRunningCountIndex(this)
    instances.count++
    active.set(false)
  }
  
  let cancelOnUserInput: boolean
  let cancFunc: any
  let done: CancelAblePromise<any>
  if (animateOptions_y) {
    if ((animateOptions_y as SpeedyScrollAnimationOptions).speed === undefined) (animateOptions_y as SpeedyScrollAnimationOptions).speed = {avg: 1000}
    else if (typeof (animateOptions_y as SpeedyScrollAnimationOptions).speed === "number") (animateOptions_y as SpeedyScrollAnimationOptions).speed = {avg: (animateOptions_y as SpeedyScrollAnimationOptions).speed as number}

    if (animateOptions_y.easing === undefined) animateOptions_y.easing = defaultEasingFunction
    if (animateOptions_y.cancelOnUserInput === undefined) animateOptions_y.cancelOnUserInput = true




    let ret: any[] = []
    for (let x in coords) {
      ret.add(animateScroll(coords, x, animateOptions_y as any, t))
    }
    if (!(animateOptions_y as GuidedScrollAnimationOptions).guide) {
      done = CancelAblePromise.all(ret)
      if (dontTriggerScrollEvent) {
        done.then(() => {
          listener.deactivate()
          instances.count--
          if (instances.count === 0) active.set(true)
        })
        cancFunc = () => {
          ret.Inner("cancel", [])
          listener.deactivate()
          instances.count--
          if (instances.count === 0) active.set(true)
        }
      }
      else {
        cancFunc = () => {
          ret.Inner("cancel", [])
        }
      }
      cancelOnUserInput = animateOptions_y.cancelOnUserInput
    }
    else {
      done = ret.Call.bind(ret) as any
    }
    
  }
  else {
    for (let x in coords) {
      setScroll(coords, x as any, t)
    }
    if (dontTriggerScrollEvent) {
      let frame = nextFrame(() => {
        listener.deactivate()
        instances.count--
        if (instances.count === 0) active.set(true)
      })
      cancFunc = () => {
        console.log("canc")
        frame.cancel()
        listener.deactivate()
        instances.count--
        if (instances.count === 0) active.set(true)
      }
      cancelOnUserInput = true
    }
  }


  let listener: EventListener
  if (cancelOnUserInput !== undefined) {
    if (cancelOnUserInput) {
      listener = new EventListener(attachElem, cancScrollEvents, cancFunc, true, {passive: true, once: true})
    }
    else {
      listener = new EventListener(attachElem, cancScrollEvents, (e) => {
        console.log("prev", e.type)
        e.preventDefault()
      }, true, {passive: false})
      done.then(() => {
        console.log("done")
        listener.deactivate()
      })
    }
  }

  return done ? done : this
}


export const cancScrollEvents: ["wheel", "keydown", "mousedown", "touchmove"] = ["wheel", "keydown", "mousedown", "touchmove"]

el("scroll", scroll)
ew("scroll", scroll)
