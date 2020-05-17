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
import { AnimationKeyframes, UnguidedAnimationOptions, GuidedAnimationKeyframes, GuidedAnimationOptions, AllProperties } from "./types"


type Data<T = any> = import("josm").Data<T>
type EasingCls = import("waapi-easing").Easing




declare global {
  interface EventTarget {
    listener<K extends keyof HTMLElementEventMap>(event: K, listener?: (this: Element, ev: HTMLElementEventMap[K]) => any, patch?: boolean): any;
    listen<K extends keyof HTMLElementEventMap>(event: K, listener?: (this: Element, ev: HTMLElementEventMap[K]) => any, patch?: boolean): any;
    ls<K extends keyof HTMLElementEventMap>(event: K, listener?: (this: Element, ev: HTMLElementEventMap[K]) => any, patch?: boolean): any;
  
    insertAfter(newNode: Element, referenceNode: Element): this;
  

    //TODO
    /**
     * addEventListener alias
     */
    on: <K extends keyof EdomElementEventMap>(type: K, listener: (ev: EdomElementEventMap[K]) => void, options?: boolean | AddEventListenerOptions) => this
    

    off: <K extends keyof EdomElementEventMap>(type: K, listener: (ev: EdomElementEventMap[K]) => void, options?: boolean | AddEventListenerOptions) => this
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
     * Empties the node so that no elements are inside
     */
    removeChilds(): this;
    /**
     * Hides elem
     */
    hide(): this;
    /**
     * Shows elem
     */
    show(): this;

    /**
     * Gets children matching given css-selector
     * @param selector css-selector filter childs similar to document.querySelector
     * @param alwaysReturnElementList when true, always return a ELementList instead of defaulting to a single instance when the query does only math once (defaults to false)
     */
    childs(selector: string, alwaysReturnElementList: true): ElementList<Element>
    /**
     * Gets children matching given css-selector
     * @param selector css-selector filter childs similar to document.querySelector
     * @param alwaysReturnElementList when true, always return a ELementList instead of defaulting to a single instance when the query does only math once (defaults to false)
     */
    childs(selector: string, alwaysReturnElementList?: boolean): ElementList<Element> | Element


    /**
     * Gets all chilren up to the given depth
     * @param selector depth How deep children shall be gathered (defaults to 1)
     * @param alwaysReturnElementList when true, always return a ELementList instead of defaulting to a single instance when the query does only math once (defaults to false)
     */
    childs(depth: number, alwaysReturnElementList: true): ElementList<Element>
    /**
     * Gets all chilren up to the given depth
     * @param selector depth How deep children shall be gathered (defaults to 1)
     * @param alwaysReturnElementList when true, always return a ELementList instead of defaulting to a single instance when the query does only math once (defaults to false)
     */
    childs(depth?: number, alwaysReturnElementList?: boolean): ElementList<Element> | Element
    
    
    /**
     * Gets children matching given css-selector or all up to given depth
     * @param selector_depth css-selector filter childs similar to document.querySelector or the depth
     * @param alwaysReturnElementList when true, always return a ELementList instead of defaulting to a single instance when the query does only math once (defaults to false)
     */
    childs(selector_depth: string | number, alwaysReturnElementList: true): ElementList<Element>
    /**
     * Gets children matching given css-selector or all up to given depth
     * @param selector_depth css-selector filter childs similar to document.querySelector or the depth
     * @param alwaysReturnElementList when true, always return a ELementList instead of defaulting to a single instance when the query does only math once (defaults to false)
     */
    childs(selector_depth?: string | number, alwaysReturnElementList?: boolean): ElementList<Element> | Element
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
    text(to: string | number | boolean | Data): this;
    txt(): string;
    txt(to: string | number | boolean | Data): this;
    

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

    /**
     * JQuery like implementation
     */
    css<cssKey extends keyof AllProperties>(cssKey: cssKey, preventAutoParsing: false): string;
    css<cssKey extends keyof AllProperties>(cssKey: cssKey, preventAutoParsing: true): number;
    css<cssKey extends keyof AllProperties>(cssKey: cssKey, preventAutoParsing?: boolean): any;
    css<cssKey extends keyof AllProperties>(cssKey: cssKey, value: AllProperties[cssKey]): this;
    css(css: AllProperties): this;
  }

  interface DragEvent {
    getData(): any;
    setData(data: any): void;
  }
}


type EdomElementEventMap = Omit<HTMLElementEventMap, "resize"> & {resize: DOMRectReadOnly}