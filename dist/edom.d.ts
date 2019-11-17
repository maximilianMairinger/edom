import baz from "bezier-easing";
import { Data } from "front-db";
export default function init(): Promise<void>;
export declare class NodeLs<T extends Element = Element> extends Array<T> {
    constructor(...a: Array<T>);
    /**
     *
     * @param frame_frames frame / frames to be animated to
     * @param options additional options / duration
     * @param guided When ommited, animation plays instantly through a linear realTime Timeline (normally). When given, animation can be be controlled by setting guidance to values between (in options) given start (default: 0) and end (default: 100)
     * @param stagger Delay between animation executions on this elements. When true delay is one animation duration. When false or ommited no delay at all
     */
    anim(frame_frames: CSSStyleMap | CSSStyleMap[], options?: GuidedAnimationOptions | UnguidedAnimationOptions, guidance?: Data<number>, stagger?: number | boolean): Promise<void>;
    on<K extends keyof HTMLElementEventMap>(type: K, listener: (this: Element, ev: HTMLElementEventMap[K]) => any): this;
    show(): this;
    removeClass(className: string): this;
    apd(...elems: Element[]): this;
    emptyNodes(): this;
    hide(): this;
    css(key_css: any, val?: any): this;
    childs(selector?: string | number): NodeLs<Element>;
    addClass(...classNames: string[]): this;
    hasClass(...classNames: string[]): boolean;
    toggleClass(...classNames: string[]): this;
    off<K extends keyof HTMLElementEventMap>(type: K, listener: (this: Element, ev: HTMLElementEventMap[K]) => any): this;
    scroll(xCoord_options: number | ScrollToOptions, yCoord: number): this;
    scrollBy(xCoord_options: number | ScrollToOptions, yCoord: number): void;
    html: string;
    inner: string | Element;
    private warn;
    exec(functionName: string, args: IArguments): this;
}
export declare class Tel<K extends keyof HTMLElementEventMap = any> {
    private _enabled;
    private p;
    constructor(nodes: Array<EventTarget> | EventTarget, event?: K, listener?: (this: EventTarget | Window, ev: HTMLElementEventMap[K]) => any, enable?: boolean);
    event: K;
    listener: (this: EventTarget, ev: HTMLElementEventMap[K]) => any;
    setNode(...node: NodeLs): void;
    enabled: boolean;
    enable(): void;
    disable(): void;
    repatch(): void;
}
declare type easingKeyWordCamelCase = "linear" | "ease" | "easeIn" | "easeOut" | "easeInOut";
declare type easingKeyWordDashCase = "linear" | "ease" | "ease-in" | "ease-out" | "ease-in-out";
declare type easingKeyWord = easingKeyWordCamelCase | easingKeyWordDashCase;
export declare class Easing {
    static readonly keywords: {
        [qwe in easingKeyWordCamelCase]: number[];
    };
    private x1;
    private x2;
    private y1;
    private y2;
    private keyword;
    constructor(keyword: easingKeyWord);
    constructor(x1: number, y1: number, x2: number, y2: number);
    readonly string: string;
    readonly function: baz.EasingFunction;
}
export {};
