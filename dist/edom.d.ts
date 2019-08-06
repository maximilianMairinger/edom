export declare class Tel<K extends keyof HTMLElementEventMap = any> {
    private _enabled;
    private p;
    constructor(nodes: Array<EventTarget> | EventTarget, event?: K, listener?: (this: HTMLElement | Window, ev: HTMLElementEventMap[K]) => any, enable?: boolean);
    readonly nodes: NodeLs;
    event: K;
    listener: (this: EventTarget, ev: HTMLElementEventMap[K]) => any;
    setNode(...node: NodeLs): void;
    enabled: boolean;
    enable(): void;
    disable(): void;
    repatch(): void;
}
export declare class NodeLs<T extends EventTarget = EventTarget> extends Array<T> {
    constructor(...a: Array<T>);
    anim(frame: object, options?: AnimationOptions, oneAfterTheOther?: boolean): Promise<void>;
    on(event: string, callback: Function): this;
    show(): this;
    removeClass(className: string): this;
    apd(...elems: HTMLElement[]): this;
    emptyNodes(): this;
    hide(): this;
    css(key_css: any, val?: any): this;
    childs(selector?: string | number): NodeLs<EventTarget>;
    addClass(...classNames: string[]): this;
    hasClass(...classNames: string[]): boolean;
    toggleClass(...classNames: string[]): this;
    off<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): this;
    html: string;
    inner: string | HTMLElement;
    exec(functionName: string, args: IArguments): void;
}
