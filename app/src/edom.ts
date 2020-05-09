import Xrray from "xrray"



export { init, polyfills } from "./lib/polyfill"
import { init } from "./lib/polyfill"
export default init


import "./extentions/childs"
import "./extentions/class"
import "./extentions/cssShorthands"
import "./extentions/htmlText"
import "./extentions/insertAfter"
import "./extentions/listener"
import "./extentions/onOff"
import "./extentions/styleManipulation"


export { ElementList } from "./components/elementList"
import { initPrototype, ElementList } from "./components/elementList"
export * from "./components/tel"


initPrototype()





// ----------------------------------- \\
// ----------------------------------- \\
// ----------------------------------- \\
// -------------- Types -------------- \\
// ----------------------------------- \\
// ----------------------------------- \\
// ----------------------------------- \\


export * from "./types"
import { CssFunction, AnimationKeyframes, UnguidedAnimationOptions, GuidedAnimationKeyframes, GuidedAnimationOptions } from "./types"


type Data<T = any> = import("josm").Data<T>
type EasingCls = import("waapi-easing").Easing




declare global {
  interface EventTarget {
    listener<K extends keyof HTMLElementEventMap>(event: K, listener?: (this: Element, ev: HTMLElementEventMap[K]) => any, patch?: boolean): any;
    listen<K extends keyof HTMLElementEventMap>(event: K, listener?: (this: Element, ev: HTMLElementEventMap[K]) => any, patch?: boolean): any;
    ls<K extends keyof HTMLElementEventMap>(event: K, listener?: (this: Element, ev: HTMLElementEventMap[K]) => any, patch?: boolean): any;
  
    insertAfter(newNode: Element, referenceNode: Element): this;
  
    /**
     * addEventListener alias
      */
    on<K extends keyof HTMLElementEventMap>(type: K, listener: (this: Element, ev: HTMLElementEventMap[K]) => void, options?: boolean | AddEventListenerOptions): this;
    /**
     * removeEventListener alias
     * TODO: corect types
      */
    off<K extends keyof HTMLElementEventMap>(type: K, listener: (this: Element, ev: HTMLElementEventMap[K]) => void, options?: boolean | AddEventListenerOptions): this;
    /**
     * JQuery like implementation
      */
    css: CssFunction;
    /**
     * Adds cssClass
      */
    addClass(...className: string[]): this;
    /**
     * Removes cssClass
      */
    removeClass(...className: string[]): this;
    //JQuerylike
    hasClass(...classNames: string[]): boolean;
    //JQuerylike
    toggleClass(...classNames: string[]): this;
  
    /**
     * Appends given elems
      */
    apd(...elems: (Element | string)[]): this;
    /**
     * Empties the node so that no elements are inside
      */
    emptyNodes(): this;
    /**
     * Hides elem
      */
    hide(): this;
    /**
     * Shows elem
      */
    show(): this;
    /**
     * Gets children matching given css-selector or all as deep as depth is
     * @param selector css-selector filter of depth how far down all children shall be collected as number (defaults to 1)
      */
    childs(selector?: string | number): ElementList<Element>;
    /**
     * Computed height of elem
      */
    height(to: number): this
    height(): number
    /**
     * Computed width of elem
     */
    width(to: number): this
    width(): number


    /**
     * alias for innerHTML
     */
    html(): string;
    html(to: string | number | boolean): this;
    text(): string;
    text(to: string | number | boolean): this;
    

    /**
     * offset of elem (relative to the parent)
      */
    offset(): {width: number, height: number, top: number, left: number};
    /**
     * absulute offset of elem (relative to the chrome)
     * wont work with floating elements
     */
    absoluteOffset(): {width: number, height: number, top: number, left: number};
    /**
     * Width including padding and border
      */
    outerWidth(): number
    /**
     * Height including padding and border
     */
    outerHeight(): number
    /**
     * Width including padding
     */
    innerWidth(): number
    /**
     * Height including padding
     */
    innerHeight(): number
    /**
     * ParentNode Element
     */
    parent(): Element
  }


  interface Element {
    anim(frames: AnimationKeyframes, duration?: number): Promise<void>;
    anim(frames: AnimationKeyframes, options?: UnguidedAnimationOptions): Promise<void>;
    anim(frames: GuidedAnimationKeyframes, options: GuidedAnimationOptions, guidance: Data<number>): void
  }

  interface DragEvent {
    getData(): any;
    setData(data: any): void;
  }
}
