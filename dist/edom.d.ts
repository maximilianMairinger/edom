import baz from "bezier-easing";
export default function init(): Promise<void>;
export declare class NodeLs<T extends EventTarget = EventTarget> extends Array<T> {
    constructor(...a: Array<T>);
    anim(frame_frames: CSSStyleMap | CSSStyleMap[], options?: GuidedAnimationOptions | UnguidedAnimationOptions, guided?: boolean, oneAfterTheOther?: boolean): Promise<void>;
    on(event: string, callback: Function): this;
    show(): this;
    removeClass(className: string): this;
    apd(...elems: Element[]): this;
    emptyNodes(): this;
    hide(): this;
    css(key_css: any, val?: any): this;
    childs(selector?: string | number): NodeLs<EventTarget>;
    addClass(...classNames: string[]): this;
    hasClass(...classNames: string[]): boolean;
    toggleClass(...classNames: string[]): this;
    off<K extends keyof ElementEventMap>(type: K, listener: (this: Element, ev: ElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): this;
    html: string;
    inner: string | Element;
    private warn;
    exec(functionName: string, args: IArguments): void;
}
export declare class Tel<K extends keyof ElementEventMap = any> {
    private _enabled;
    private p;
    constructor(nodes: Array<EventTarget> | EventTarget, event?: K, listener?: (this: Element | Window, ev: ElementEventMap[K]) => any, enable?: boolean);
    readonly nodes: NodeLs;
    event: K;
    listener: (this: EventTarget, ev: ElementEventMap[K]) => any;
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
