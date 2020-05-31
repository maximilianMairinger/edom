import { at } from "../lib/attatchToProto";
import { polyfills } from "../lib/polyfill"

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
let eventListenerIndex = new Map<Element, {event: string, actualListener: Function, userListener: Function, options: any}[]>();

const key = "advancedDataTransfere";

//TODO: document / window.on("ready")
//TODO: return data / or promise when no cb is given
//TODO: check if options are taken into account (resize??)

// if I bind here do I have issues with debinding? (off)
at("on", function(givenEvent: string, givenListener: Function, givenOptions: any) {
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
          dataTransfers[dataTransferID] = data;
          e.dataTransfer.setData(key, dataTransferID);
        }
        boundGivenListener(e);
      }

    }
    else if (givenEvent === "drop") {
      actualListener = (e) => {
        e.getData = () => {
          let id = e.dataTransfer.getData(key);
          let found = id !== "" ? dataTransfers[id] : null;
          delete dataTransfers[id];

          return found;

        }
        boundGivenListener(e);
      }

    }
    else {
      actualListener = boundGivenListener;
    }
    let that = eventListenerIndex.get(this)
    let o = {event: givenEvent, actualListener, userListener: givenListener, options: givenOptions}
    if (that === undefined) eventListenerIndex.set(this, [o])
    else that.add(o);
    this.addEventListener(givenEvent, actualListener, givenOptions);
  }
  return this
})


at("off", function(...a) {
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
  else {
    let toBeRm: any[] = [];
    let that = eventListenerIndex.get(this)
    if (that !== undefined) {
      if (a[0] !== undefined && a[1] !== undefined) {
        that.ea((e) => {
          if (e.event === a[0] && e.userListener === a[1]) toBeRm.add(e);
        })
      }
      else {
        that.ea((e) => {
          if (e.event === a[0] || e.userListener === a[1]) toBeRm.add(e);
        })
      }

      toBeRm.ea((e) => {
        this.removeEventListener(e.event, e.actualListener);
        that.rm(e);
      })
      if (that.empty) eventListenerIndex.delete(this)
    }
  }

  return this
})
