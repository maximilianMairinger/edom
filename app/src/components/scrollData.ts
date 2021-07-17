import { Data, DataCollection } from "josm"
import { ScrollAnimationOptions } from "../types"
import "xrray"


type ReadonlyData<T> = Omit<Data<T>, "set">


class InternalScrollData extends Data<number> {
  constructor(elem_num: Element | Window | number = 0, direction: "x" | "y" = "one" as any, notifyOnAllChanges: boolean = true) {
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
  scrollTrigger(at: number | ReadonlyData<number>, margin?: number | ReadonlyData<number>) {
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
  new(prog?: number): NumericScrollData
}

export class ScrollTrigger {
  private listener: {
    forward: ((currentPos: number) => void)[],
    backward: ((currentPos: number) => void)[]
  } = {
    forward: [],
    backward: []
  }

  constructor(scrollData: ReadonlyData<number>, at: number | ReadonlyData<number>, margin: number | ReadonlyData<number> = 0) {
    if (typeof at === "number") at = new Data(at)
    if (typeof margin === "number") margin = new Data(margin);


    let _at = at as ReadonlyData<number>
    let _margin = margin as ReadonlyData<number>

    _margin = _margin.tunnel((margin) => margin / 2)
    
    const atForward = new Data()
    new DataCollection(_at as Data<number>, _margin as Data<number>).get((at, margin) => {
      atForward.set(at + margin)
    })
    const atBackward = new Data()
    new DataCollection(_at as Data<number>, _margin as Data<number>).get((at, margin) => {
      let b = at - margin
      if (b < 0) b = 0
      atBackward.set(b)
    })
    

    
    let lastProg = 0
    new DataCollection(scrollData as Data<number>, atForward, atBackward).get((prog, atForward, atBack) => {
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