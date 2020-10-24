import { el, et, ew } from "../lib/attatchToProto";
import { polyfills } from "../lib/polyfill"
import { EventListener, dataSubscriptionCbBridge as eventListenerCbBridge, EventListenerBridge } from "../components/eventListener";
import animFrame, { CancelAbleSubscriptionPromise, nextFrame } from "animation-frame-delta"
import constructIndex from "key-index";
import { Data, DataCollection, DataSubscription } from "josm";

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
  const sym = Symbol()
  let listener: (e: any) => void
  const subscribe = (x: boolean, y: boolean, xy: boolean) => {
    const hasX = x !== undefined
    const hasY = y !== undefined
    const hasXY = xy !== undefined
    
    if (hasX) {
      const scrollXProp = coordsToDirIndex.x
      let lastX = elem[scrollXProp]
      const velX = (e) => {
        return e.velocityX = lastX - elem[scrollXProp]
      }
      const callX = (e) => {
        if (elem[scrollXProp] !== lastX) {
          e.progress = {x: lastX = elem[scrollXProp]}
          callbacks.x.Call(e)
        }
      }
      end.setLastProgress = (e) => {
        lastX = e.x
      }
      

      if (hasY) {
        const scrollYProp = coordsToDirIndex.y
        let lastY = elem[scrollYProp]
        const velY = (e) => {
          return e.velocityY = lastY - elem[scrollYProp]
        }
        const callXY = (e) => {
          callX(e)
          if (elem[scrollYProp] !== lastY) {
            e.progress.y = lastY = elem[scrollYProp]
            callbacks.y.Call(e)
          }
        }
        end.setLastProgress = (e) => {
          lastX = e.x
          lastY = e.y
        }
        

        if (hasXY) {
          const call = (e) => {
            callXY(e)
            callbacks.xy.Call(e)
          }

          if (xy) {
            listener = (e) => {
              velY(e)
              velX(e)
              call(e)
            }
          }
          else if (x) {
            listener = (e) => {
              velX(e)
              call(e)
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
            listener = (e) => {
              velX(e)
              callXY(e)
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
            const velY = (e) => {
              return e.velocityY = lastY - elem[scrollYProp]
            }
            end.setLastProgress = (e) => {
              lastX = e.x
              lastY = e.y
            }

            listener = (e) => {
              velX(e)
              velY(e)
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
          return e.velocityY = lastY - elem[scrollYProp]
        }
        const callY = (e) => {
          if (elem[scrollYProp] !== lastY) {
            e.progress = {y: lastY = elem[scrollYProp]}
            callbacks.y.Call(e)
          }
        }
        end.setLastProgress = (e) => {
          lastY = e.y
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
            const velX = (e) => {
              return e.velocityX = lastX - elem[scrollXProp]
            }
            const call = (e) => {
              lastX = elem[scrollXProp]
              callX_Y(e)
            }
            end.setLastProgress = (e) => {
              lastX = e.x
              lastY = e.y
            }
            listener = (e) => {
              velX(e)
              velY(e)
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
            end.setLastProgress = (e) => {
              lastX = e.x
              lastY = e.y
            }
            
            let lastX = elem[scrollXProp]
            const velX = (e) => {
              return e.velocityX = lastX - elem[scrollXProp]
            }
            
            let lastY = elem[scrollYProp]
            const velY = (e) => {
              return e.velocityY = lastY - elem[scrollYProp]
            }

            const call = (e) => {
              lastX = elem[scrollXProp]
              lastY = elem[scrollYProp]
              callX_Y(e)
            }

            listener = (e) => {
              velX(e)
              velY(e)
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

    attachElem.addEventListener(scrollString, listener, {passive: true})
  }
  const unsubscribe = () => {
    attachElem.removeEventListener(scrollString, listener)
  }
  // Dont ask why, but it must be. Must stupidest thing in the whole dom
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
    setLastProgress: (e: {x?: number, y?: number}) => {

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
      nextFrame(() => {
        if (cancel) return

        cb[sym] = () => {
          callbacks[dir].rmV(cb)
          let v = undefined
          for (let cb of callbacks[dir]) {
            v = v || cb[sym].vel
            if (v) break
          }
          velocity[dir].set(v)
        }

        callbacks[dir].add(cb)
        velocity[dir].set(velocity[dir].get() || vel)
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
  else if (givenEvent.startsWith("scroll")) {
    const t = !isWindow ? this : docElem
    let q = preventScrollEventPropagationIndex(t)
    let endsWith = givenEvent.substr(givenEvent.length - 1) as "l" | "x" | "y" | "xy"

    let hasDir = getAvailableLocalScrollDirections(t)
    const ind = scrollIndex(t)
    
    if (endsWith === "l" || endsWith === "xy") {
      // both scroll x and y
      endsWith = (hasDir.length === 1 ? hasDir.first : "xy") as "x" | "y" | "xy"
    }
    else {
      // just x or just y scroll events please
      if (!hasDir.includes(endsWith)) console.warn(t, "Does not seem to have scroll enabled on the " + endsWith + "axis. Continuing anyway")
    }

    const coord = endsWith
    if (!givenOptions) givenOptions = {}
    const vel = givenOptions.velocity

    const unsubscribe = () => {
      //@ts-ignore
      subs.destroy()
      ind.removeCallback(useListener)
      q.subscriptionIndex.delete(givenListener)
    }
    q.subscriptionIndex.set(givenListener, unsubscribe)
    
    const useListener = !givenOptions.once ? boundGivenListener : (e) => {
      unsubscribe()
      boundGivenListener(e)
    }
    const subs = q.active.get((g) => {
      if (g) ind.addCallback(coord, vel, useListener)
      else ind.removeCallback(useListener)
    })
    
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




type UnsubscribeFunction = Function
// TODO: catch ons scroll
let preventScrollEventPropagationIndex = constructIndex((el: HTMLElement) => {return {active: new Data(true), subscriptionIndex: new Map} as {active: Data<boolean>, subscriptionIndex: Map<Function, UnsubscribeFunction>}})

function animateScroll(coords: {x?: number, y?: number}, x: "x" | "y", options: {speed: number, easing: (n: number) => number, cancelOnUserInput: boolean}, container: HTMLElement) {
  // debugger
  const scrollDir = coordsToDirIndex[x]
  const px = coords[x] - container[scrollDir]
  const dur = (Math.abs(px) / options.speed) * 1000
  
  let lastRelProg = 0
  let lastRoundingError = 0

  return animFrame((absProg) => {
    const relProg = options.easing(absProg / dur)
    const del = relProg - lastRelProg
    const before = container[scrollDir]
    const addAbs = px * del + lastRoundingError
    container[scrollDir] += addAbs
    lastRoundingError = (before + addAbs) - container[scrollDir]

    lastRelProg = relProg
  }, dur)
}


function setScroll(coords: {x?: number, y?: number}, x: "x" | "y", container: Element) {
  const scrollDir = coordsToDirIndex[x]
  const px = coords[x]
  container[scrollDir] = px
}

type ScrollAnimationOptions = {speed: number, easing: (n: number) => number, cancelOnUserInput: boolean}
let instancesRunningCountIndex = constructIndex((e: HTMLElement) => {return {count: 0}})
function scroll(to: number | {x?: number, y?: number} | ScrollToOptions, animateOptions_y?: number | ScrollAnimationOptions, dontTriggerScrollEvent: boolean = true) {  
  const instances = instancesRunningCountIndex(this)
  instances.count++
  const t = this !== window ? this : docElem
  if (typeof animateOptions_y === "number" || ((to as any).left !== undefined || (to as any).right !== undefined)) {
    t.scrollTo(to, animateOptions_y)
    return
  }
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
  if (dontTriggerScrollEvent) {
    active = preventScrollEventPropagationIndex(t).active
    active.set(false)
  }
  
  let cancelOnUserInput: boolean
  let cancFunc: any
  let done: Promise<any>
  if (animateOptions_y) {
    let anims: CancelAbleSubscriptionPromise[] = []
    for (let x in coords) {
      anims.add(animateScroll(coords, x as any, animateOptions_y, t))
    }
    done = Promise.all(anims)
    if (dontTriggerScrollEvent) {
      done.then(() => {
        console.log("then")
        instances.count--
        if (instances.count === 0) active.set(true)
      })
      cancFunc = () => {
        console.log("canc")
        anims.Inner("cancel", [])
        instances.count--
        if (instances.count === 0) active.set(true)
      }
    }
    else {
      instances.count--
      cancFunc = () => {
        anims.Inner("cancel", [])
      }
    }
    cancelOnUserInput = animateOptions_y.cancelOnUserInput
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
        instances.count--
        if (instances.count === 0) active.set(true)
      }
    }
    else instances.count--
    cancelOnUserInput = true
  }
  const attachElem = t === docElem ? window : t
  let listener: EventListener
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

const cancScrollEvents: ["wheel", "keydown", "mousedown", "touchmove"] = ["wheel", "keydown", "mousedown", "touchmove"]

el("scroll", scroll)
ew("scroll", scroll)
