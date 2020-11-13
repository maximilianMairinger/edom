import { Data, DataSubscription } from "josm"
import { ScrollAnimationOptions } from "../types"





class InternalScrollData extends Data<number> {
  constructor(elem_num: Element | Window | number, direction: "x" | "y" = "one" as any, notifyOnAllChanges: boolean = true) {
    if (elem_num instanceof EventTarget) {
      super(0)
      let options = {direction, notifyOnAllChanges} as any
      direction = (elem_num.on("scroll", (e: any) => {
        super.set(e.progress[direction])
      }, options) as any).direction


      this.set = (prog: number, animOptions?: ScrollAnimationOptions, dontTriggerScrollEvent?: boolean) => {
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
  
  public tunnel<Ret>(func: (val: number) => Ret, init?: boolean, useConstructor?: true): this extends Data<Ret> ? this : Data<Ret>
  public tunnel<Ret>(func: (val: number) => Ret, init: boolean | undefined, useConstructor: boolean): Data<number>
  public tunnel<Ret>(func: (val: number) => Ret, init?: boolean, useConstructor = true): this extends Data<Ret> ? this : Data<Ret> {
    return super.tunnel(func, init, useConstructor as any) as any
  }
}

export type ElemScrollData = InternalScrollData & {set(to: number, animationOptions?: ScrollAnimationOptions, dontTriggerScrollEvent?: boolean): number}
export type NumericScrollData = InternalScrollData
export type ScrollData = ElemScrollData | NumericScrollData
export const ScrollData = InternalScrollData as {
  new(elem: Element | Window): ElemScrollData
  new(prog: number): NumericScrollData
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