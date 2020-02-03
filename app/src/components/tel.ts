export class Tel<K extends keyof HTMLElementEventMap = any> {
  private _enabled: boolean = false;
  private p: Nel<K>;
  constructor(nodes: Array<EventTarget> | EventTarget, event?: K, listener?: (this: EventTarget | Window, ev: HTMLElementEventMap[K]) => any, enable: boolean = true) {
    this.p = new Nel(undefined, event, listener);
    // We ll only use methods here that are avalable to EventTargets here (on, off)
    //@ts-ignore
    if (nodes instanceof Array) this.p.nodes = new NodeLs(...nodes);
    //@ts-ignore
    else this.p.nodes = new NodeLs(nodes)
    if (enable) this.enable();
  }
  public get event(): K {
    return this.p.event;
  }
  public get nodes(): EventTarget[] {
    return this.p.nodes;
  }
  public get listener(): (this: EventTarget, ev: HTMLElementEventMap[K]) => any {
    return this.p.listener;
  }
  public set nodes(node: EventTarget[]) {
    this.disable();
    //@ts-ignore
    this.p.nodes = new NodeLs(...node);
    this.enable();
  }
  public set event(event: K) {
    this.disable();
    this.p.event = event;
    this.enable();
  }
  public set listener(listener: (this: EventTarget, ev: HTMLElementEventMap[K]) => any) {
    this.disable();
    this.p.listener = listener;
    this.enable();
  }
  public set enabled(to: boolean) {
    if (to) {
      if(this._enabled) return;
      //@ts-ignore
      this.p.nodes.on(this.event, this.listener);
    }
    else {
      if(!this._enabled) return;
      //@ts-ignore
      this.p.nodes.off(this.event, this.listener);
    }
    this._enabled = to;
  }
  public get enabled() {
    return this._enabled;
  }
  public enable(): void {
    this.enabled = true;
  }
  public disable(): void {
    this.enabled = false;
  }
  public repatch(): void {
    this.disable();
    this.enable();
  }
}

class Nel<K extends keyof HTMLElementEventMap = any> {
  //@ts-ignore
  constructor(public nodes: NodeLs, public event: K, public listener: (this: EventTarget, ev: HTMLElementEventMap[K]) => any) {

  }
}