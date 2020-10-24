import { Data, DataSubscription } from "josm"





export class ScrollData extends Data<number> {
  constructor(elem_num: Element | Window | number, direction?: "x" | "y", notifyOnAllChanges: boolean = true) {
    if (elem_num instanceof EventTarget) {
      super(0)
      let options = {direction: direction ? direction : "one", notifyOnAllChanges} as any
      direction = (elem_num.on("scroll", (e: any) => {
        super.set(e.progress[direction])
      }, options) as any).direction

      this.set = (prog: number, animOptions?: any, dontTriggerScrollEvent?: boolean) => {
        //@ts-ignore
        elem_num.scroll(prog, animOptions, dontTriggerScrollEvent)
        return prog
      }
    }
    else super(elem_num)
    
  }
  scrollTrigger(at: number, margin?: number) {
    return new ScrollTrigger(this as Data<number>, at, margin)
  }
  
  public tunnel<Ret>(func: (val: number) => Ret, init?: boolean, useConstructor?: true): Data<Ret>
  public tunnel<Ret>(func: (val: number) => Ret, init: boolean, useConstructor: boolean): this extends Data<Ret> ? this : Data<Ret>
  public tunnel<Ret>(func: (val: number) => Ret, init?: boolean, useConstructor = true): this extends Data<Ret> ? this : Data<Ret> {
    return super.tunnel(func, init, useConstructor as any) as any
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