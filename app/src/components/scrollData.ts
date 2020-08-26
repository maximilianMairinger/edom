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
  //@ts-ignore
  tunnel<Ret extends number>(func: (val: number) => Ret): ScrollData {
    let r = new ScrollData()
    super.tunnel(func).get(r.set.bind(r))
    return r
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
  constructor(scrollData: Data<number>, at: number, margin = 0) {
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