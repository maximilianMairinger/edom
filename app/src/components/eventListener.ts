import { EdomElementEventMap } from "../types";
import { internalIsSubscribed, internalOn, internalOff } from "../extentions/onOff";


export const dataSubscriptionCbBridge = Symbol()


export class EventListener<Event extends keyof EdomElementEventMap = any, Options extends {[key in string]: any} = {[key in string]: any}> {
  private n: NS<Event>;
  constructor(target: EventTarget, event?: Event, listener?: (this: EventTarget | Window, ev: EdomElementEventMap[Event]) => any, activate: boolean = true, options?: Options) {
    this.n = new NS(target, event, listener, options);
    listener[dataSubscriptionCbBridge] = this
    if (activate) this.activate();
  }

  public event(): Event
  public event(event: Event): this
  public event(event?: Event) {
    if (event !== undefined) {
      let active = this.active()
      if (active) this.deactivate();
      this.n.event = event;
      if (active) this.activate();
      return this
    }
    else return this.n.event;
  }

  public options(): Options
  public options(options: Options): this
  public options(options?: Options) {
    if (options !== undefined) {
      let active = this.active()
      if (active) this.deactivate();
      this.n.options = options;
      if (active) this.activate();
      return this
    }
    else return this.n.options;
  }

  public target(): EventTarget
  public target(target: EventTarget): this
  public target(target?: EventTarget) {
    if (target !== undefined) {
      let active = this.active()
      if (active) this.deactivate();
      this.n.target = target
      if (active) this.activate();
      return this
    }
    else return this.n.target;
  }


  public listener(): (this: EventTarget, ev: EdomElementEventMap[Event]) => void
  public listener(listener: (this: EventTarget, ev: EdomElementEventMap[Event]) => void): this
  public listener(listener?: (this: EventTarget, ev: EdomElementEventMap[Event]) => void) {
    if (listener) {
      if (listener !== this.n.listener) {
        let active = this.active()
        if (active) this.deactivate();
        delete this.n.listener[dataSubscriptionCbBridge]
        this.n.listener = listener;
        listener[dataSubscriptionCbBridge] = this
        if (active) this.activate();
      }
      
      return this
    }
    else return this.n.listener;
    
  }

  public active(): boolean
  public active(to: boolean): this
  public active(to?: boolean) {
    const isSubscribed = (this.n.target as any)[internalIsSubscribed](this.n.event, this.n.listener)
    if (to !== undefined) {
      if (to) {
        if(isSubscribed) return;
        this.n.target[internalOn](this.n.event, this.n.listener);
      }
      else {
        if(!isSubscribed) return;
        this.n.target[internalOff](this.n.event, this.n.listener);
      }
      return this
    }
    else return isSubscribed;
  }
  public activate(): void {
    this.active(true)
  }
  public deactivate(): void {
    this.active(false);
  }
}

class NS<K extends keyof EdomElementEventMap = any> {
  constructor(public target: EventTarget, public event: K, public listener: (this: EventTarget, ev: EdomElementEventMap[K]) => void, public options: any) {

  }
}