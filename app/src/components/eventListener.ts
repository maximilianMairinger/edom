import { DataSubscription } from "josm"

class InternalEventListener<Values extends unknown[]> extends DataSubscription<Values> {
  private _elem: EventTarget
  // constructor() {
  //   super()
  // }

  public element(): EventTarget
  public element(to: EventTarget): this
  public element(to?: EventTarget) {
    if (to) {
      this._elem = to
 

      return this
    }
    else return this._elem
  }
}

export type EventListener<Values extends unknown[]> = Omit<InternalEventListener<Values>, "data">
export const EventListener = InternalEventListener as { new<Values extends unknown[]>(...a: any[]): EventListener<Values> }
