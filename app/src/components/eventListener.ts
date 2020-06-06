import { EdomElementEventMap } from "../types";
import { internalOn, internalOff } from "../extentions/onOff";


export const dataSubscriptionCbBridge = Symbol()

type Listener<Event extends keyof EdomElementEventMap> = (this: EventTarget, ev: EdomElementEventMap[Event]) => void


export class EventListener<Event extends keyof EdomElementEventMap = any, Options extends {[key in string]: any} = {[key in string]: any}> {
  private n: NS<Event>;
  private _options: any
  private _active: boolean = false
  constructor(target?: EventTarget | EventTarget[], event?: Event | Event[], listener?: Listener<Event> | Listener<Event>[], activate: boolean = true, options?: Options) {
    this.n = new NS(target, event, listener);
    if (options) this._options = options
    if (activate) this.activate();
    this.reLink()
  }

  public event(): Event[]
  public event(event: Event | Event[]): this
  public event(event?: Event | Event[]) {
    return this.nFunc("event", event)
  }

  public target(): EventTarget[]
  public target(target: EventTarget[] | EventTarget): this
  public target(target?: EventTarget[] | EventTarget) {
    return this.nFunc("target", target)
  }

  public listener(): Listener<Event>[]
  public listener(listener: Listener<Event> | Listener<Event>[]): this
  public listener(listener?: Listener<Event> | Listener<Event>[]) {
    return this.nFunc("listener", listener)
  }


  public options(): Options
  public options(options: Options): this
  public options(options?: Options) {
    return this.nFunc("_options", options, true)
  }

  public active(): boolean
  public active(to: boolean): this
  public active(to?: boolean) {
    if (to !== undefined) {
      if (to) {
        if (!this._active) {
          this._active = true
          this.onOff(internalOn)
        }
      }
      else {
        if (this._active) {
          this._active = false
          this.onOff(internalOff)
        }
      }
      return this
    }
    else return this._active
  }
  public activate(): this {
    return this.active(true)
  }
  public deactivate(): this {
    return this.active(false);
  }


  private onOff(internalOnOff: any) {
    let o = this._options
    this.loopAllProps((q, e, t, f) => {
      t[internalOnOff](e, f, o)
    })
  }


  private nFunc(prop: string, set: any, local: true): any
  private nFunc(prop: "target" | "listener" | "event", set?: any, local?: false): any
  private nFunc(prop: string, set?: any, local: boolean = false) {
    if (set !== undefined) {
      let active = this._active
      if (active) this.deactivate()
      if (local) this[prop] = set
      else this.reLink(prop as "target" | "listener" | "event", set)
      if (active) this.activate()
      return this
    }
    else return local ? this[prop] : this.n[prop]()
  }

  /**
   * Link everything, doesnt unlink
   */
  private reLink(): void
  /**
   * Relink everything
   * @param reLink relink this property
   * @param set set the property to
   */
  private reLink(reLink: "target" | "listener" | "event", set: any): void
  private reLink(reLink?: "target" | "listener" | "event", set?: any): void {
    let o = this.allProps()


    if (reLink) {
      this.loopAllProps((q, e) => {
        delete q[e]
      }, o)

      o[reLink] = this.n[reLink](set) as any
    }
    

    this.loopAllProps((q, e) => {
      q[e] = this
    }, o)
  }

  private loopAllProps(loop: (q: any, e: any, t: any, f: any) => void, o: { target: EventTarget[], listener: Listener<Event>[], event: Event[] } = this.allProps()) {
    o.listener.ea((f) => {
      o.target.ea((t: any) => {
        let q = f[EventListenerBridge] ? f[EventListenerBridge] : f[EventListenerBridge] = new Map
        let qt = q.get(t)
        q = qt ? qt : q.set(t, {})
        o.event.ea((e) => {
          loop(q, e, t, f)
        })
      })
    })
  }

  private allProps() {
    return {
      target: this.n.target(), 
      listener: this.n.listener(),
      event: this.n.event()
    }
  }
}

export const EventListenerBridge = Symbol()

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
  public target(target: EventTarget[] | EventTarget): EventTarget[]
  public target(target?: EventTarget[] | EventTarget): any {
    if (target) return this._target = this.arrayify(target)
    else return this._target
  }
  public event(): Event[]
  public event(event: Event[] | Event): Event[]
  public event(event?: Event[] | Event): any {
    if (event) return this._event = this.arrayify(event)
    else return this._event
  }
  public listener(): Listener<Event>[]
  public listener(listener: Listener<Event>[] | Listener<Event>): Listener<Event>[]
  public listener(listener?: Listener<Event>[] | Listener<Event>): any {
    if (listener) return this._listener = this.arrayify(listener)
    else return this._listener
  }
  private arrayify<T>(q: T): T extends any[] ? T : [T] {
    return (q instanceof Array ? q : [q]).clean() as any
  }

}