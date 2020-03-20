// This is just for the typing. Minifyer (e.g. terser) should detect this as dead code and remove it.
import ResizeObserver from "resize-observer-polyfill";


export function init() {
  let proms = []

  // -------------------------------------------- \\
  // -------------------------------------------- \\


  // --------------
  // ResizeObserver
  // --------------

  //@ts-ignore
  if (window.ResizeObserver === undefined) {
    proms.add(import(/* webpackChunkName: "resizeObserverPolyfill" */"resize-observer-polyfill").then(({default: r}) => {polyfills.ResizeObserver = r}))
  }
  //@ts-ignore
  else polyfills.ResizeObserver = window.ResizeObserver;


  // ----------------
  // webAnimationsApi
  // ----------------

  if (Element.prototype.animate === undefined) proms.add(import(/* webpackChunkName: "webAnimationsApiPolyfill" */"web-animations-js"))


  // -------------------------------------------- \\
  // -------------------------------------------- \\


  return Promise.all(proms)
}


export const polyfills: {
  ResizeObserver?: typeof ResizeObserver
} = {
  
}

