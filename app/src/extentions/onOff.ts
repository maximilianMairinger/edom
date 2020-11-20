import { el, et, ew } from "../lib/attatchToProto";
import { polyfills } from "../lib/polyfill"
import { EventListener, dataSubscriptionCbBridge as eventListenerCbBridge, EventListenerBridge } from "../components/eventListener";
import animFrame, { CancelAbleNextFramePromise, CancelAblePromise, CancelAbleSubscriptionPromise, nextFrame, stats } from "animation-frame-delta"
import constructIndex from "key-index";
import { Data, DataCollection, DataSubscription } from "josm";
import { AbsoluteProgress, GuidedScrollAnimationOptions, RelativeProgress, ScrollAnimationOptions, SpeedyScrollAnimationOptions } from "../types";
import Easing from "waapi-easing";
import { NumericScrollData } from "../components/scrollData";
import { runInThisContext } from "vm";
import Xrray from "xrray";

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

export const coordsToDirIndex: {
  x: "scrollLeft",
  y: "scrollTop"
} = {
  x: "scrollLeft",
  y: "scrollTop"
}

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


const scrollString: "scroll" = "scroll"

const scrollIndex = constructIndex((elem: Element) => {
  const distributedCallbacks = {
    _passive: {
      x: [],
      y: [],
      xy: []
    },
    _capture: {
      x: [],
      y: [],
      xy: []
    },
    _passivecapture: {
      x: [],
      y: [],
      xy: []
    },
    _: {
      x: [],
      y: [],
      xy: []
    }
  }
  let callbacks: {
    x?: ((e: any) => void)[],
    y?: ((e: any) => void)[],
  } = {}

  const wantVelocityCount = {
    x: 0,
    y: 0,
    xy: 0
  }
  // Remove xy option, xy = x and y.
  // Make phases 1: position; 2: vel; 3: call
  const velocity: {
    x: Data<boolean>,
    y: Data<boolean>,
  } = {
    x: new Data,
    y: new Data,
  }
  const removeSym = Symbol()
  let listener: (e: any) => void
  const subscribe = (x: boolean, y: boolean) => {
    const hasX = x !== undefined
    const hasY = y !== undefined



    if (hasX) {

    }

    if (hasY) {

    }
    
    if (hasX) {
      const scrollXProp = coordsToDirIndex.x
      let lastX = elem[scrollXProp]
      const velX = (e) => {
        e.velocity = {x: elem[scrollXProp] - lastX}
      }
      const callX = (e) => {
        if (elem[scrollXProp] !== lastX) {
          e.progress = {x: lastX = elem[scrollXProp]}
          callbacks.x.Call(e)
        }
      }
      end.addToLastProgress = (e) => {
        if (e.x) lastX += e.x
      }
      

      if (hasY) {
        const scrollYProp = coordsToDirIndex.y
        let lastY = elem[scrollYProp]
        const velYSec = (e) => {
          e.velocity.y = elem[scrollYProp] - lastY
        }
        const velY = (e) => {
          e.velocity = {y: elem[scrollYProp] - lastY}
        }
        const callXY = (e) => {
          callX(e)
          if (elem[scrollYProp] !== lastY) {
            e.progress.y = lastY = elem[scrollYProp]
            callbacks.y.Call(e)
          }
        }
        end.addToLastProgress = (e) => {
          if (e.x) lastX += e.x
          if (e.y) lastY += e.y
        }
        

        if (hasXY) {
          const call = (e) => {
            callXY(e)
            callbacks.xy.Call(e)
          }

          if (xy) {
            listener = (e) => {
              velX(e)
              velYSec(e)
              call(e)
            }
          }
          else if (x) {
            if (y) {
              listener = (e) => {
                velX(e)
                velYSec(e)
                call(e)
              }
            }
            else {
              listener = (e) => {
                velX(e)
                call(e)
              }
            }
          }
          else if (y) {
            listener = (e) => {
              velY(e)
              call(e)
            }
          }
          else {
            listener = call
          }
        }
        else {
          if (x) {
            if (y) {
              listener = (e) => {
                velX(e)
                velYSec(e)
                callXY(e)
              }
            }
            else {
              listener = (e) => {
                velX(e)
                callXY(e)
              }
            }
          }
          else if (y) {
            listener = (e) => {
              velY(e)
              callXY(e)
            }
          }
          else {
            listener = callXY
          }
        }
      }
      else {
        if (hasXY) {
          const scrollYProp = coordsToDirIndex.y
          const call = (e) => {
            callX(e)
            e.progress.y = elem[scrollYProp]
            callbacks.xy.Call(e)
          }
          if (xy) {
            
            let lastY = elem[scrollYProp]
            const velYSec = (e) => {
              e.velocity.y = elem[scrollYProp] - lastY
            }
            end.addToLastProgress = (e) => {
              if (e.x) lastX += e.x
              if (e.y) lastY += e.y
            }

            listener = (e) => {
              velX(e)
              velYSec(e)
              call(e)
            }
          }
          else if (x) {
            listener = (e) => {
              velX(e)
              call(e)
            }
          }
          else {
            listener = call
          }
        }
        else {
          if (x) {
            listener = (e) => {
              velX(e)
              callX(e)
            }
          }
          else {
            listener = callX
          }
        }
      }
    }
    else {
      if (hasY) {
        const scrollYProp = coordsToDirIndex.y
        let lastY = elem[scrollYProp]
        const velY = (e) => {
          e.velocity = {y: elem[scrollYProp] - lastY}
        }
        const callY = (e) => {
          if (elem[scrollYProp] !== lastY) {
            e.progress = {y: lastY = elem[scrollYProp]}
            callbacks.y.Call(e)
          }
        }
        end.addToLastProgress = (e) => {
          if (e.y) lastY += e.y
        }
        

        if (hasXY) {
          const scrollXProp = coordsToDirIndex.x
          const callX_Y = (e) => {
            callY(e)
            e.progress.x = elem[scrollXProp]
            callbacks.xy.Call(e)
          }

          if (xy) {
            let lastX = elem[scrollXProp]
            const velXSec = (e) => {
              e.velocity.x = elem[scrollXProp] - lastX
            }
            const call = (e) => {
              lastX = elem[scrollXProp]
              callX_Y(e)
            }
            end.addToLastProgress = (e) => {
              if (e.x) lastX += e.x
              if (e.y) lastY += e.y
            }
            listener = (e) => {
              velY(e)
              velXSec(e)
              call(e)
            }
          }
          else if (y) {
            listener = (e) => {
              velY(e)
              callX_Y(e)
            }
          }
          else {
            listener = callX_Y
          }
        }
        else {
          if (y) {
            listener = (e) => {
              velY(e)
              callY(e)
            }
          }
          else {
            listener = callY
          }
        }
      }
      else {
        if (hasXY) {
          const scrollXProp = coordsToDirIndex.x
          const scrollYProp = coordsToDirIndex.y
          const callX_Y = (e) => {
            e.progress = {x: elem[scrollXProp], y: elem[scrollYProp]}
            callbacks.xy.Call(e)
          }

          if (xy) {
            end.addToLastProgress = (e) => {
              if (e.x) lastX += e.x
              if (e.y) lastY += e.y
            }
            
            let lastX = elem[scrollXProp]
            const velX = (e) => {
              e.velocity = {x: elem[scrollXProp] - lastX}
            }
            
            let lastY = elem[scrollYProp]
            const velYSec = (e) => {
              e.velocity.y = elem[scrollYProp] - lastY
            }

            const call = (e) => {
              lastX = elem[scrollXProp]
              lastY = elem[scrollYProp]
              callX_Y(e)
            }

            listener = (e) => {
              velX(e)
              velYSec(e)
              call(e)
            }
          }
          else {
            listener = callX_Y
          }
        }
        else {
          return
        }
      }
    }

    attachElem.addEventListener(scrollString, listener, {passive, capture})
    if (distributedCallbacks.capture)
    unsubscribe = () => {

    }
  }
  let unsubscribe: () => void
  // Dont ask why, but it must be. Most stupidest thing in the whole dom
  const attachElem = elem === docElem ? window : elem
  let velocityCollection = new DataCollection(velocity.x, velocity.y, velocity.xy)
  const initSub = velocityCollection.get((x, y, xy) => {
    subscribe(x, y, xy)
    initSub.deactivate()
    velocityCollection.get((x, y, xy) => {
      unsubscribe()
      subscribe(x, y, xy)
    }, false)
  }, false)

  
  let end = {
    addToLastProgress: (e: {x: number, y: number}) => {

    },
    removeCallback: (cb: Function) => {
      let removeFunc = cb[removeSym] as () => void
      if (!removeFunc) return
      removeFunc()
     
    },
    addCallback: (dir: "x" | "y" | "xy", wantVelocity: boolean = false, passive: boolean = true, capture = false, cb: Function) => {
      let cancel = false
      cb[removeSym] = () => {
        cancel = true
      }
      nextFrame(() => {
        if (cancel) return
        const optionsString = "_" + (passive ? "passive" : "") + (capture ? "capture" : "")

        cb[removeSym] = () => {
          distributedCallbacks[optionsString][dir].rmV(cb)
          let v = undefined
          for (let cb of callbacks[dir]) {
            v = v || cb[removeSym].vel
            if (v) break
          }
          velocity[dir].set(v)
        }

        distributedCallbacks[optionsString][dir].add(cb)
        velocity[dir].set(velocity[dir].get() || wantVelocity)
      })
    }
  }
  return end
})


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
    let q = scrollElementIndex(t)

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

    debugger
    let unsubscribe = scrollElementIndex(this !== window ? this : docElem).subscriptionIndex.get(a[1])
    if (unsubscribe) unsubscribe()
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




type UnsubscribeFunction = Function
const scrollElementIndex = constructIndex((el: HTMLElement) => {return {
  active: new Data(true), 
  subscriptionIndex: new Map, 
  position: {x: 0, y: 0}, 
  alreadyUpdated: false, 
  changed: {x: false, y: false}, 
  deactiveteCount: 0,
  lastPosition: {x: 0, y: 0},
  deActivate() {
    this.deactiveteCount++
    this.active.set(false)
    return () => {
      this.deactiveteCount--
      if (this.deactiveteCount === 0) this.active.set(true)
    }
  },
  deActivateOnce() {
    const l = this.deActivate()
    return nextFrame(() => {
      l.activateAgain()
    })
  },
  update(coords: {x?: number, y?: number}) {
    for (let x in coords) {
      this.position[x] += coords[x]
      this.changed[x] = true
    }

    if (!this.updated) {
      this.updated = true
      nextFrame(() => {
        this.updated = false
        for (let x in this.changed) {
          if (this.lastPosition[x] !== el[coordsToDirIndex[x]]) 

          if (this.changed[x]) {
            
            el[coordsToDirIndex[x]] = coords[x]
            this.changed[x] = false
          }

          this.lastPosition[x] = 
        }
      })
    }
  }
} as ScrollElement});

type ScrollElement = {update(coords: {x?: number, y?: number}), deActivate: DeActivateEvents, deActivateOnce: DeActivateEventsOnce, active: Data<boolean>, subscriptionIndex: Map<Function, UnsubscribeFunction>}

type ReActivateEvents = () => void
type DeActivateEvents = () => ReActivateEvents
type DeActivateEventsOnce = () => CancelAbleNextFramePromise


type IsPrimitive<T> = T extends number ? true : T extends string ? true : T extends boolean ? true : T extends symbol ? true : T extends bigint ? true : T extends null ? true : T extends undefined ? true : false
type UnionToIntersection<U> = IsPrimitive<U> extends true ? U : (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;
type OnlyPrimitive<E> = E extends Function ? E : Exclude<E, object> extends never ? unknown : Exclude<E, object>
type OnlyObject<E> = Exclude<Extract<E, object>, Function> extends never ? unknown : Exclude<Extract<E, object>, Function>

type RecursiveUnionToIntersection<T> = UnionToIntersection<OnlyPrimitive<T>> & (OnlyObject<T> extends object ? {[key in keyof UnionToIntersection<OnlyObject<T>>]: RecursiveUnionToIntersection<UnionToIntersection<OnlyObject<T>>[key]>} : unknown)

const minExpectedMsPerFrame = 4
function animateScroll(coords: {x?: number, y?: number}, x: string, options: RecursiveUnionToIntersection<ScrollAnimationOptions | GuidedScrollAnimationOptions>, container: HTMLElement) {
  const scrollDir = coordsToDirIndex[x]
  const pxDelta = coords[x] - container[scrollDir]

  let dur: number
  if (options.speed !== undefined) {
    const speed = options.speed.avg || options.speed.begin || options.speed.end
    dur = (Math.abs(pxDelta) / speed) * 1000


    if (options.speed.begin) {
      let deltaX = minExpectedMsPerFrame / dur
      let deltaY = (options as any).easing(deltaX)
      let incline = deltaY / deltaX
      dur = dur / incline  
    }
    else if (options.speed.end) {
      // Untested
      let deltaX = minExpectedMsPerFrame / dur
      let deltaY = 1 - (options as any).easing(1 - deltaX)
      let incline = deltaY / deltaX
      dur = dur / incline
    }
  }
  else if (options.duration) {
    dur = options.duration
  }

  console.log("dur", dur)


  let lastRelProg = 0
  let lastRoundingError = 0
  let begin = container[scrollDir]

  const renderFromRelative = (relativeProgress: RelativeProgress) => {
    console.log("relativeProgress", relativeProgress)
    const relProg = (options as any).easing(relativeProgress)
    const del = relProg - lastRelProg
    const before = container[scrollDir]
    const addAbs = pxDelta * del + lastRoundingError
    console.log("addAbs", addAbs)
    container[scrollDir] = begin + relProg * pxDelta
    lastRoundingError = (before + addAbs) - container[scrollDir]

    lastRelProg = relProg
  }
  const duration = dur
  const renderFromAbsolute = (absoluteProgress: AbsoluteProgress) => {
    const q = absoluteProgress / duration
    renderFromRelative(q > 1 ? 1 : q)
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
    // We dont need to change lastProgress since we only work with deltas anyway
    const minus = typeof options.startAt === "number" ? options.startAt : options.startAt.abs !== undefined ? options.startAt.abs : options.startAt.rel !== undefined ? options.startAt.rel * dur : 0
    return animFrame(renderFromAbsolute, dur - minus)
  }
}



function setScroll(coords: {x?: number, y?: number}, x: "x" | "y", scrollElement: ScrollElement) {
  // todo: add to last progress
  // scrollIndex(this)(,)
  scrollElement.update
  container[coordsToDirIndex[x]] = coords[x]
}

const easeInOutFunction = new Easing(0.45, 0, 0.55, 1).function
const easeOutFunction = new Easing(0.5, 1, 0.89, 1).function
function scroll(to: number | {x?: number, y?: number} | ScrollToOptions, animateOptions_y?: number | RecursiveUnionToIntersection<ScrollAnimationOptions | GuidedScrollAnimationOptions>, triggerScrollEvent: boolean = false) {  
  if (typeof animateOptions_y === "number" || ((to as any).left !== undefined || (to as any).right !== undefined)) return this.scrollTo(to, animateOptions_y)

  const t = this !== window ? this : docElem
  const attachElem = this !== docElem ? this : window


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
  






  
  const scrollElement = scrollElementIndex(t)
  
  
  let done: Promise<any>
  if (animateOptions_y) {
    if (animateOptions_y.speed === undefined) {
      animateOptions_y.speed = {avg: 1000} as any
    }
    else if (typeof animateOptions_y.speed === "number") animateOptions_y.speed = {avg: animateOptions_y.speed} as any

    if (animateOptions_y.easing === undefined) {
      if (animateOptions_y.speed.avg) animateOptions_y.easing = easeInOutFunction
      else animateOptions_y.easing = easeOutFunction
    }
    else if (animateOptions_y.easing instanceof Easing) animateOptions_y.easing = animateOptions_y.easing.function
    if (animateOptions_y.cancelOnUserInput === undefined) animateOptions_y.cancelOnUserInput = true
    // if (animateOptions_y.startAt === undefined) (animateOptions_y.startAt as any) = 0

    let reActivateEvents: ReActivateEvents
    if (!triggerScrollEvent) {
      reActivateEvents = scrollElement.deActivate()
    }


    let ret: any[] = []
    for (let x in coords) {
      ret.add(animateScroll(coords, x, animateOptions_y as any, scrollElement))
    }

    let cancFunc: any

    if (!animateOptions_y.guide) {
      done = Promise.all(ret)
      if (!triggerScrollEvent) {
        done.then(() => {
          console.log("then")
          listener.deactivate()
          reActivateEvents()
        })
        cancFunc = () => {
          console.log("canc")
          ret.Inner("cancel", [])
          listener.deactivate()
          reActivateEvents()
        }
      }
      else {
        cancFunc = () => {
          console.log("canc")
          ret.Inner("cancel", [])
          listener.deactivate()
        }
      }

      let listener: EventListener
      if (animateOptions_y.cancelOnUserInput) {
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
    else {
      done = ret.Call.bind(ret) as any
    }
    
  }
  else {
    if (!triggerScrollEvent) {
      scrollElement.deActivateOnce()
    }
    for (let x in coords) {
      setScroll(coords, x as any, scrollElement)
    }
  }




  return done ? done : this
}


export const cancScrollEvents: ["wheel", "keydown", "mousedown", "touchmove"] = ["wheel", "keydown", "mousedown", "touchmove"]

el("scroll", scroll)
ew("scroll", scroll)
