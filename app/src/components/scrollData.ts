import { Data, DataSubscription } from "josm"
import { Subscription } from "josm/app/dist/data"

export class ScrollData extends Data<number> {
  private inited: boolean
  constructor(initialScrollProgress?: number) {
    let inited = initialScrollProgress !== undefined
    super(inited ? initialScrollProgress : 0)
    this.inited = inited    
  }
  scrollTrigger(at: number, margin?: number) {
    return new ScrollTrigger(this as Data<number>, at, margin)
  }
  
  public tunnel<Ret>(func: (val: number) => Ret, init: boolean, useConstructor: true): Data<Ret>
  public tunnel<Ret>(func: (val: number) => Ret, init?: boolean, useConstructor?: false): this extends Data<Ret> ? this : Data<Ret>
  public tunnel<Ret>(func: (val: number) => Ret, init?: boolean, useConstructor = true): this extends Data<Ret> ? this : Data<Ret> {
    return super.tunnel(func, init, useConstructor as any) as any
  }

  get(): number;
  get(subscription: Subscription<[number]>, initialize?: boolean): DataSubscription<[number]>
  get(subscription: DataSubscription<[number]>, initialize?: boolean): DataSubscription<[number]>
  get(subscription?: Subscription<[number]> | DataSubscription<[number]>, initialize: boolean = this.inited): number | DataSubscription<[number]> {
    return super.get(subscription as any, initialize as any)
  }
}

export class ScrollTrigger {
  private listener: {
    forward: ((currentPos: number) => void)[],
    backward: ((currentPos: number) => void)[]
  } = {
    forward: [],
    backward: []
  }
  public subscription: DataSubscription<[number]>
  constructor(scrollData: Omit<Data<number>, "set">, at: number, margin = 0) {
    margin = margin / 2
    const atForward = at + margin
    let atBack = at - margin
    if (atBack < 0) atBack = 0
    let lastProg = 0
    this.subscription = scrollData.get((prog) => {
      if (prog >= atForward && lastProg < atForward) this.listener.forward.Call(prog)
      else if (prog < atBack && lastProg >= atBack) this.listener.backward.Call(prog)
      lastProg = prog
    })
  }
  on(direction: "forward" | "backward", listener: (currentPos: number) => void) {
    this.listener[direction].add(listener)
    return this
  }
  off(direction: "forward" | "backward", listener: (currentPos: number) => void) {
    this.listener[direction].rmV(listener)
    return this
  }
}