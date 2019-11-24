import baz from "bezier-easing";
import { Data } from "front-db";
export default function init(): Promise<void>;
export declare class NodeLs<T extends Element = Element> extends Array<T> implements Element {
    constructor(...a: Array<T>);
    /**
     *
     * @param frame_frames frame / frames to be animated to
     * @param options additional options / duration
     * @param guided When ommited, animation plays instantly through a linear realTime Timeline (normally). When given, animation can be be controlled by setting guidance to values between (in options) given start (default: 0) and end (default: 100)
     * @param stagger Delay between animation executions on this elements. When true delay is one animation duration. When false or ommited no delay at all
     */
    anim(frame_frames: CSSStyleMap | CSSStyleMap[], options?: GuidedAnimationOptions | UnguidedAnimationOptions, guidance?: Data<number>, stagger?: number | boolean): Promise<void>;
    childs(selector?: string | number): NodeLs<Element>;
    private warn;
    private exec;
    private execChain;
}
export declare class Tel<K extends keyof HTMLElementEventMap = any> {
    private _enabled;
    private p;
    constructor(nodes: Array<EventTarget> | EventTarget, event?: K, listener?: (this: EventTarget | Window, ev: HTMLElementEventMap[K]) => any, enable?: boolean);
    event: K;
    nodes: EventTarget[];
    listener: (this: EventTarget, ev: HTMLElementEventMap[K]) => any;
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
    private ax;
    private ay;
    private bx;
    private by;
    private keyword;
    constructor(keyword: easingKeyWord);
    constructor(ax: number, ay: number, bx: number, by: number);
    readonly string: string;
    readonly function: baz.EasingFunction;
}
export {};
