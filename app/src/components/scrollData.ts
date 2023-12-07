import { Data, DataCollection } from "josm"
import { ScrollAnimationOptions } from "../types"
import "xrray"
import "xtring"
import { ElementList } from "./elementList"


type ReadonlyData<T> = Omit<Data<T>, "set">

const coordsToBodyNameIndex = {
  x: "Width",
  y: "Height"
} as const

const coordsToOffsetNameIndex = {
  x: "Left",
  y: "Top"
} as const

export class ScrollData extends Data<number> {
  constructor(scrollPos: number = 0) {
    super(scrollPos)
  }
  scrollTrigger(at: number | ReadonlyData<number>, margin?: number | ReadonlyData<number>) {
    return new ScrollTrigger(this as Data<number>, at, margin)
  }
  
  public tunnel<Ret, Dat extends Data<Ret>>(func: (val: number) => Ret, init: boolean | undefined, useThisConstructor: {new(...a: any[]): Dat}): Dat
  public tunnel<Ret>(func: (val: number) => Ret, init: boolean | undefined, useThisConstructor: true): this extends Data<Ret> ? this : Data<Ret>
  public tunnel<Ret>(func: (val: number) => Ret, init?: boolean, useThisConstructor?: boolean): Data<Ret>
  public tunnel<Ret>(func: (val: number) => Ret, init?: boolean, useThisConstructor: boolean | {new(...a: any[]): Data<any>} = true) {
    return super.tunnel(func, init, useThisConstructor as any) as any
  }
}

let curScrollDataTunnelInstanceElem: Element | Window

class InnerElemScrollData extends ScrollData {
  constructor(elem: Element | Window, usePageEndAsReference: boolean = false, _direction: "x" | "y" | "one" = "one" as any, notifyOnAllChanges: boolean = true) {
    let f: Function
    if (usePageEndAsReference) {
      if (elem instanceof Window) {
        f = (e: any) => {
          super.set(e.progress[direction] + elem["inner" + coordsToBodyNameIndex[direction]])
        }
      } else {
        f = (e: any) => {
          super.set(e.progress[direction] + elem["inner" + coordsToBodyNameIndex[direction]]())
        }
      }
      
    }
    else {
      f = (e: any) => {
        super.set(e.progress[direction])
      }
    }
    let options = {direction: _direction, notifyOnAllChanges} as any
    const { direction } = elem.on("scroll", f as any, options)
    super(elem["scroll" + coordsToOffsetNameIndex[direction]])
    if (elem === undefined) elem = curScrollDataTunnelInstanceElem

    this.set = (prog: number, animOptions?: ScrollAnimationOptions, dontTriggerScrollEvent?: boolean) => {
      elem.scroll(prog, animOptions, dontTriggerScrollEvent)
      return prog
    }
  }


  public tunnel<Ret>(func: (val: number) => Ret, init?: boolean): this extends Data<Ret> ? this : Data<Ret>
  public tunnel<Ret>(func: (val: number) => Ret, init: boolean | undefined): Data<number>
  public tunnel<Ret>(func: (val: number) => Ret, init?: boolean): this extends Data<Ret> ? this : Data<Ret> {
    return super.tunnel(func, init, ScrollData as any) as any
  }
}
export type ElemScrollData = InnerElemScrollData & {set(prog: number, animOptions?: ScrollAnimationOptions, dontTriggerScrollEvent?: boolean): number}
export const ElemScrollData = InnerElemScrollData as any as {new(elem: Element | Window, usePageEndAsReference?: boolean, direction?: "x" | "y" | "one", notifyOnAllChanges?: boolean): ElemScrollData}

export class ScrollTrigger {
  private listener = {
    forward: [] as ((currentPos: number) => void)[],
    backward: [] as ((currentPos: number) => void)[]
  }

  constructor(private scrollData: ReadonlyData<number>, at: number | ReadonlyData<number>, margin: number | ReadonlyData<number> = 0) {
    if (typeof at === "number") at = new Data(at)
    if (typeof margin === "number") margin = new Data(margin);


    let _at = at as ReadonlyData<number>
    let _margin = margin as ReadonlyData<number>

    _margin = _margin.tunnel((margin) => margin / 2)
    
    const atForward = new Data<number>()
    new DataCollection(_at as Data<number>, _margin as Data<number>).get((at, margin) => {
      atForward.set(at + margin)
    })
    const atBackward = new Data<number>()
    new DataCollection(_at as Data<number>, _margin as Data<number>).get((at, margin) => {
      let b = at - margin
      if (b < 0) b = 0
      atBackward.set(b)
    })
    

    
    let lastProg = Infinity
    new DataCollection(scrollData as Data<number>, atForward, atBackward).get((prog, atForward, atBack) => {
      if (prog >= atForward && lastProg < atForward) (this.currentState as Data<keyof typeof this.listener>).set("forward")
      else if (prog < atBack && lastProg >= atBack) (this.currentState as Data<keyof typeof this.listener>).set("backward")
      lastProg = prog
    })

    this.currentState.get((dir) => {
      this.listener[dir].Call(scrollData.get())
    })
  }
  public currentState: ReadonlyData<keyof typeof this.listener> = new Data()
  on(direction: keyof typeof this.listener, listener: (currentPos: number) => void) {
    if (direction === this.currentState.get()) listener(this.scrollData.get())
    this.listener[direction].add(listener)
    return this
  }
  off(direction: keyof typeof this.listener, listener: (currentPos: number) => void) {
    this.listener[direction].rmV(listener)
    return this
  }
}