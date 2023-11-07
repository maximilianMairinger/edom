import Xrray from "xrray"
import xtring from "xtring"
xtring()



export { init, polyfills } from "./lib/polyfill"
import { init } from "./lib/polyfill"
export default init


import "./extentions/childs"
import "./extentions/shortHands"
import "./extentions/listener"
import "./extentions/onOff"
import "./extentions/dataBinding"
import "./extentions/styleManipulation"

import { initPrototype, ElementList } from "./components/elementList"
import { EventListener } from "./components/eventListener"
import { ElemScrollData, ScrollData, ScrollTrigger } from "./components/scrollData"

export { ElementList } from "./components/elementList"
export * from "./components/scrollData"
export * from "./components/tel"
export * from "./components/eventListener"
export { textDataSymbol } from "./extentions/childs"



initPrototype()



// ----------------------------------- \\
// ----------------------------------- \\
// ----------------------------------- \\
// -------------- Types -------------- \\
// ----------------------------------- \\
// ----------------------------------- \\
// ----------------------------------- \\


export * from "./types"
import { AnimationKeyframes, UnguidedAnimationOptions, GuidedAnimationKeyframes, GuidedAnimationOptions, AllProperties, Token, EdomElementEventMap, ElementListOrElement, PrimElem, Activatable, EdomCustomElementEventMapOptions, ScrollAnimationOptions, GuidedScrollAnimationOptions, VariableLibrary, CancelFunction, Prim } from "./types"
import { Data, DataBase } from "josm" // just types




declare global {
  // temp
  interface String {
    splice(start: number, del: number, ...append: string[]): string
  }

  interface Node {
    /**
     * ParentNode Element
     */
    parent(justElements?: false): Node
    /**
     * ParentNode Element
     */
    parent(justElements: true): Element
  }

  

  interface ShadowRoot {
    insertAdjacentHTML(before: "beforebegin" | "afterbegin" | "beforeend" | "afterend", html: string): void
  }

  interface Window {
    scroll(X_or_Y: number | {x?: number, y: number} | {x: number, y?: number}, animOptions?: undefined, dontTriggerScrollEvent?: boolean): this
    scroll(X_or_Y: number | {x?: number, y: number} | {x: number, y?: number}, animOptions: ScrollAnimationOptions, dontTriggerScrollEvent?: boolean): Promise<void>
    scroll(X_or_Y: number | {x?: number, y: number} | {x: number, y?: number}, animOptions: GuidedScrollAnimationOptions, dontTriggerScrollEvent?: boolean): CancelFunction
  }

  interface Element {
    scroll(X_or_Y: number | {x?: number, y: number} | {x: number, y?: number}, animOptions?: undefined, dontTriggerScrollEvent?: boolean): this
    scroll(X_or_Y: number | {x?: number, y: number} | {x: number, y?: number}, animOptions: ScrollAnimationOptions, dontTriggerScrollEvent?: boolean): Promise<void>
    scroll(X_or_Y: number | {x?: number, y: number} | {x: number, y?: number}, animOptions: GuidedScrollAnimationOptions, dontTriggerScrollEvent?: boolean): CancelFunction
  }

  interface EventTarget {
    
    
    /**
     * Get updating scrollHeight and scrollWidth as DataBase
     * Warning: Margin is not included in the calculation, border and padding are. This is due to limitations in the DOM. Consider using a wrapper element.
     */
    scrollLengthData(): DataBase<{width: number, height: number}>

    /**
     * @deprecated Use Element#resizeDataBase instead
     * Get updating DomRect as Data
     */
    resizeData(): Omit<Data<DOMRectReadOnly>, "set">

    /**
     * Get updating DomRect as DataBase
     */
    resizeDataBase(): DataBase<{width: number, height: number, top: number, bottom: number, left: number, right: number}>

    /**
     * Get updating scrollposition as Data
     * Data#set can be used to change scroll position
     * Changes from set do not get reflected to get listeners immediately, rather when the are applied, thus rendered.
     * @param useEndOfPageAsReference Whether to refer to the browsers viewport end (bottom) as received and set scroll positions or not
     * @param dir Direction to get scroll data for
     */
    scrollData(useEndOfPageAsReference?: boolean, dir?: "x" | "y" | "one"): ElemScrollData
    
    /**
     * Get notified when transgressing a target scroll position
     * @param at Target scroll position
     * @param listenerForward called on target transgression in direction: forward
     * @param listenerBack called on target transgression in direction: back
     * @param margin marging in both directions of the target where no listener gets triggerd (defaults to 0)
     */
    scrollEvent(at: number, listenerForward: () => void, listenerBack: () => void, margin?: number): ScrollTrigger

    /**
     * Get notified when transgressing a target scroll position
     * @param at Target scroll position
     * @param listenerForward called on target transgression in direction: forward
     * @param listenerBack called on target transgression in direction: back
     * @param margin marging in both directions of the target where no listener gets triggerd (defaults to 0)
     */
    scrollTrigger(at: number, listenerForward: () => void, listenerBack: () => void, margin?: number): ScrollTrigger


    /**
     * Depricated; will be removed in edom@4
     */
    listener<K extends keyof HTMLElementEventMap>(event: K, listener?: (this: Element, ev: HTMLElementEventMap[K]) => any, patch?: boolean): any;
    /**
     * Depricated; will be removed in edom@4
     */
    listen<K extends keyof HTMLElementEventMap>(event: K, listener?: (this: Element, ev: HTMLElementEventMap[K]) => any, patch?: boolean): any;
    /**
     * Depricated; will be removed in edom@4
     */
    ls<K extends keyof HTMLElementEventMap>(event: K, listener?: (this: Element, ev: HTMLElementEventMap[K]) => any, patch?: boolean): any;
  
    insertAfter<T extends Node>(newNode: T, referenceNode: Node): T;
  

    /**
     * Add an eventListener shorthand
     * Has some custom features on specific event types. These include:
     * 
     * on(event: "resize", listener: (event: DOMRectReadOnly) => {}, options: N/A)
     *  Available on every element (will not just properly work on window). Gives DOMRectReadOnly instead of Event
     * 
     * on(event: "scroll", listener: (event: {velocity?: {x?: number, y?: number}, progress: {x: number, y: number}}) => {}, options: {direction?: "x" | "y" | "xy", velocity?: boolean, notifyOnAllChanges?: boolean})
     *  Can be scoped to specific direction "x" | "y" | "xy". If not provided, it is scoped to all directions that have overflow = "scroll" or "auto"
     *  Velocity for the specified direction can be calculated.
     *  By default scroll events will only be triggered when originating from the user
     *  
     */
    on:  <K extends keyof EdomElementEventMap, O extends boolean | AddEventListenerOptions>(type: K, listener?: (ev: EdomElementEventMap[K]) => void, options?: EdomCustomElementEventMapOptions[K]) => EventListener<K, O>
    

    off: <K extends keyof EdomElementEventMap, O extends boolean | AddEventListenerOptions>(type: K, listener: (ev: EdomElementEventMap[K]) => void) => EventListener<K, O>
    /**
     * Adds classNames to this classList
     * @param classNames classNames to be added to this
     */
    addClass(...classNames: string[]): this;
    /**
     * Removes classNames from this classList
     * @param classNames classNames to be removed from this
     */
    removeClass(...classNames: string[]): this;
    /**
     * True if this has classNames
     * @param classNames to check, every one of them must be found to return true
     */
    hasClass(...classNames: string[]): boolean;
    /**
     * Toggles classNames on / off depending of current state
     * @param classNames all of which will be toggled
     */
    toggleClass(...classNames: string[]): this;
  
    /**
     * Appends elements / html templates to this.
     * A library may be given to use template variables. Use a DataBase as library to add dynamic state.
     * A html template may look like:
     * ```ts
     * const template = 
     * `
     * <blockquote cite="$[ quote.0.from ]">
     *   $[ quote.0.text ]
     * </blockquote>
     * `
     * const library = new DataBase({
     *   quote: [
     *     { 
     *       from: "https://developer.mozilla.org/", 
     *       text: "cite: A URL that designates a source document or message for the information quoted." 
     *     },
     *     { 
     *       from: "https://tools.ietf.org/html/rfc1149/", 
     *       text: "Avian carriers can provide high delay, low throughput, and low altitude service." 
     *     }
     *   ]
     * })
     * 
     * document.body.apd(template, library)
     * 
     * setTimeout(() => {
     *   library.quote[0].from.set("https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote#Attributes")
     * }, 1000)
     * ```
     * @param element Elements or html templates as string to be appended to this
     * @param library Library of declarative template variables. Can be a plain object or a DataBase for dynamic state
     * @param customTokens Open / Close variable name brackets / tokens. Default is: {open: string, close: string, escape: string}
     */
    apd(element: PrimElem | PrimElem[], library?: VariableLibrary, customTokens?: {open?: Token, close?: Token, escape?: Token}): this;
    apd(...elements: PrimElem[]): this;
    
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
    childs(selector: string, alwaysReturnElementList?: boolean): ElementListOrElement


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
    childs(depth?: number, alwaysReturnElementList?: boolean): ElementListOrElement
    
    
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
    childs(selector_depth?: string | number, alwaysReturnElementList?: boolean): ElementListOrElement
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
    html(to: PrimElem | PrimElem[], library?: {[key in string]: string | Data<string>} | DataBase, customTokens?: {open?: Token, close?: Token, escape?: Token}): this;
    text(): string
    txt():  string
    text(to: Data<Prim>, animOnExplicitChange?: boolean, animOnDataChange?: boolean): this;
    text(to: Prim, animOnExplicitChange?: boolean): this;
    txt(to: Data<Prim>, animOnExplicitChange?: boolean, animOnDataChange?: boolean): this;
    txt(to: Prim, animOnExplicitChange?: boolean): this;
    
    ownText(): string
    ownTexts(): string[]
    ownTextNodes(): Text[]
    

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
  }

  


  interface Element {
    anim(frames: AnimationKeyframes, duration?: number): Promise<void>;
    anim(frames: AnimationKeyframes, options?: UnguidedAnimationOptions): Promise<void>;
    anim(frames: GuidedAnimationKeyframes, options: GuidedAnimationOptions, guidance: Data<number>): void

    /**
     * JQuery like implementation
     */
    css<cssKey extends keyof AllProperties>(cssKey: cssKey, preventAutoParsing: true): string;
    css<cssKey extends keyof AllProperties>(cssKey: cssKey, preventAutoParsing?: boolean): any;
    css<cssKey extends keyof AllProperties>(cssKey: cssKey, value: AllProperties[cssKey]): this;
    css(css: AllProperties): this;
  }

  interface DragEvent {
    getData(): any;
    setData(data: any): void;
  }

}


