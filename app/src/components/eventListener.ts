import { EdomElementEventMap } from "../types";
import { internalOn, internalOff } from "../extentions/onOff";
import { arrayify } from "../lib/util";


export const dataSubscriptionCbBridge = Symbol()
type Listener<Event extends keyof EdomElementEventMap> = (this: EventTarget, ev: EdomElementEventMap[Event]) => void


export class EventListener<Event extends keyof EdomElementEventMap = any, Options extends AddEventListenerOptions | boolean = AddEventListenerOptions> {
  private n: NS<Event>;
  private _options: any
  private _active: boolean
  constructor(target?: EventTarget | EventTarget[], event?: Event | Event[], listener?: Listener<Event> | Listener<Event>[], activate: boolean = true, options?: Options) {
    this._active = false
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
    const o = this._options
    let ret: any
    this.loopAllProps((q, e, t, f) => {
      ret = t[internalOnOff](e, f, o)
      for (let key in ret) {
        this[key] = ret[key]
      }
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
  constructor(target?: EventTarget[] | EventTarget, event?: Event[] | Event, listener?: Listener<Event>[] | Listener<Event>) {
    this.target(target)
    this.event(event)
    this.listener(listener)
  }

  public target(): EventTarget[]
  public target(target: EventTarget[] | EventTarget): EventTarget[]
  public target(target?: EventTarget[] | EventTarget): any {
    return this.func(_targetString, target)
  }
  public event(): Event[]
  public event(event: Event[] | Event): Event[]
  public event(event?: Event[] | Event): any {
    return this.func(_eventString, event)
  }
  public listener(): Listener<Event>[]
  public listener(listener: Listener<Event>[] | Listener<Event>): Listener<Event>[]
  public listener(listener?: Listener<Event>[] | Listener<Event>): any {
    return this.func(_listenerString, listener)
  }

  private func(prop: "_target" | "_event" | "_listener", val: any): any {
    if (val) return this[prop] = arrayify(val)
    else return this[prop]
  }
}

const _listenerString = "_listener"
const _eventString =  "_event"
const _targetString =  "_target"



export class EventListenerList<Event extends keyof EdomElementEventMap = any, Options extends AddEventListenerOptions | boolean = AddEventListenerOptions> extends Promise<EdomElementEventMap[Event]> {
  private eventListenerLs: EventListener<Event, Options>[]
  constructor(...eventListener: EventListener<Event, Options>[]) {
    let res: () => void
    super((r) => {res = r})
    Promise.all(eventListener).then(res)

    this.eventListenerLs = eventListener
  }


  public eventListener(): EventListener<Event, Options>[]
  public eventListener(...eventListener: EventListener<Event, Options>[]): this
  public eventListener(...eventListener: EventListener<Event, Options>[]): any {
    if (eventListener.Clean().empty) {
      return this.eventListenerLs
    }
    else {
      let act = this.active()
      if (act) this.deactivate()
      this.eventListenerLs.set(eventListener)
      if (act) this.activate()
      return this
    }
  }

  public active(): boolean
  public active(active: boolean): this
  public active(active?: boolean): any {
    if (active !== undefined) {
      this.eventListenerLs.ea((q) => {
        q.active(active)
      })
      return this
    }
    else {
      let ac = true
      this.eventListenerLs.ea((q) => {
        if (!q.active()) return ac = false
      })
      return ac
    }
  }

  public activate() {
    return this.active(true)
  }

  public deactivate() {
    return this.active(false)
  }

  public isOneActive(): boolean {
    return this.eventListenerLs.ea((q) => {
      if (q.active()) return true
    }) || false
  }
}


