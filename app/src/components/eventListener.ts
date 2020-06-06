import { EdomElementEventMap } from "../types";
import { internalIsSubscribed, internalOn, internalOff } from "../extentions/onOff";


export const dataSubscriptionCbBridge = Symbol()

type Listener<Event extends keyof EdomElementEventMap> = (this: EventTarget, ev: EdomElementEventMap[Event]) => void


export class EventListener<Event extends keyof EdomElementEventMap = any, Options extends {[key in string]: any} = {[key in string]: any}> {
  private n: NS<Event>;
  private _options: any
  constructor(target?: EventTarget | EventTarget[], event?: Event | Event[], listener?: Listener<Event> | Listener<Event>[], activate: boolean = true, options?: Options) {
    this.n = new NS(target, event, listener);
    if (options) this._options = options
    listener[dataSubscriptionCbBridge] = this
    if (activate) this.activate();
  }

  public event(): Event[]
  public event(event: Event | Event[]): this
  public event(event?: Event | Event[]) {
    if (event !== undefined) {
      let active = this.active()
      if (active) this.deactivate();
      this.n.event(event)
      if (active) this.activate();
      return this
    }
    else return this.n.event();
  }

  public options(): Options
  public options(options: Options): this
  public options(options?: Options) {
    if (options !== undefined) {
      let active = this.active()
      if (active) this.deactivate();
      this._options = options;
      if (active) this.activate();
      return this
    }
    else return this._options;
  }

  public target(): EventTarget[]
  public target(target: EventTarget[] | EventTarget): this
  public target(target?: EventTarget[] | EventTarget) {
    if (target !== undefined) {
      let active = this.active()
      if (active) this.deactivate();
      this.n.target(target)
      if (active) this.activate();
      return this
    }
    else return this.n.target();
  }


  public listener(): Listener<Event>[]
  public listener(listener: Listener<Event> | Listener<Event>[]): this
  public listener(listener?: Listener<Event> | Listener<Event>[]) {
    if (listener) {
      if (listener !== this.n.listener) {
        let active = this.active()
        if (active) this.deactivate();
        this.n.listener(listener)
        listener[dataSubscriptionCbBridge] = this
        if (active) this.activate();
      }
      
      return this
    }
    else return this.n.listener();
    
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

class NS<Event extends keyof EdomElementEventMap = any> {
  private _target: EventTarget[]
  private _event: Event[]
  private _listener: Listener<Event>[]
  constructor(target: EventTarget[] | EventTarget, event: Event[] | Event, listener: Listener<Event>[] | Listener<Event>) {
    this.target(target)
    this.event(event)
    this.listener(listener)
  }

  public target(): EventTarget[]
  public target(target: EventTarget[] | EventTarget): void
  public target(target?: EventTarget[] | EventTarget): any {
    if (target) this._target = this.arrayify(target)
    else return this._target
  }
  public event(): Event[]
  public event(event: Event[] | Event): void
  public event(event?: Event[] | Event): any {
    if (event) this._event = this.arrayify(event)
    else return this._event
  }
  public listener(): Listener<Event>[]
  public listener(listener: Listener<Event>[] | Listener<Event>): void
  public listener(listener?: Listener<Event>[] | Listener<Event>): any {
    if (listener) this._listener = this.arrayify(listener)
    else return this._listener
  }
  private arrayify<T>(q: T): T extends any[] ? T : [T] {
    return (q instanceof Array ? q : [q]).clean() as any
  }

}