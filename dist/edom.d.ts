export declare function polyfill(): Promise<void>;
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
