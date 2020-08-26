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
import { ScrollData, ScrollTrigger } from "./components/scrollData"

export { ElementList } from "./components/elementList"
export * from "./components/scrollData"
export * from "./components/tel"
export * from "./components/eventListener"



initPrototype()





// ----------------------------------- \\
// ----------------------------------- \\
// ----------------------------------- \\
// -------------- Types -------------- \\
// ----------------------------------- \\
// ----------------------------------- \\
// ----------------------------------- \\


export * from "./types"
import { AnimationKeyframes, UnguidedAnimationOptions, GuidedAnimationKeyframes, GuidedAnimationOptions, AllProperties, Token, EdomElementEventMap, ElementListOrElement, PrimElem, Activatable } from "./types"


type Data<T = unknown> = import("josm").Data<T>
type DataBase<T = unknown> = import("josm").DataBase<T>
type EasingCls = import("waapi-easing").Easing





declare global {
  // temp
  interface String {
    splice(start: number, del: number, ...append: string[]): string
  }

  interface Node {
    /**
     * ParentNode Element
     */
    parent(): Element
  }

  interface ShadowRoot {
    insertAdjacentHTML(before: "beforebegin" | "afterbegin" | "beforeend" | "afterend", html: string): this
  }


  interface EventTarget {

    /**
     * Get updated scrollposition as Data
     */
    scrollData(): ScrollData
    
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
  
    insertAfter(newNode: DocumentFragment, referenceNode: Node): this;
  

    //TODO
    /**
     * addEventListener alias
     */
    on:  <K extends keyof EdomElementEventMap, O extends boolean | AddEventListenerOptions>(type: K, listener: (ev: EdomElementEventMap[K]) => void, options?: boolean | AddEventListenerOptions) => EventListener<K, O>
    

    off: <K extends keyof EdomElementEventMap, O extends boolean | AddEventListenerOptions>(type: K, listener: (ev: EdomElementEventMap[K]) => void, options?: boolean | AddEventListenerOptions) => EventListener<K, O>
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
    apd(to: PrimElem | PrimElem[], library?: {[key in string]: string | Data<string>} | DataBase, customTokens?: {open?: Token, close?: Token, escape?: Token}): this;
    /**
     * Appends given elems
     */
    apd(...elems: PrimElem[]): this;
    
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
    text(to: string | number | boolean | Data): this;
    txt (to: string | number | boolean | Data): this;
    
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

