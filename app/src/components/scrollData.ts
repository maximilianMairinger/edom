import { Data, DataSubscription } from "josm"

export class ScrollData extends Data<number> {
  constructor(initialScrollProgress = 0) {
    super(initialScrollProgress)
  }
  scrollTrigger(at: number, margin?: number) {
    return new ScrollTrigger(this, at, margin)
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