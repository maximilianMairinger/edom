import init, { ElementList } from "../../app/src/edom"
import { Data } from "josm"

let from = "path('M105 55C105 85.3757 85.3757 110 55 110C24.6243 110 0 85.3757 0 55C0 24.6243 24.6243 0 55 0C85.3757 0 105 24.6243 105 55Z')"
let to = "M103.5 55.5C103.5 66 60.5 117 52.5 117C44.5 117 3.05176e-05 69 0 55.5C-3.05175e-05 42 27 -51.5 52.5 42C68.5 -47 103.5 36.4599 103.5 55.5Z"

console.log("init");

let scrollData = new Data(2)
scrollData.get(console.log)




let ls: Array<Element>


let elemn: Element
elemn

const mainElem = document.childs("#main") as Element
const elem = mainElem.childs("#test") 

elem.css("alignItems", "qwe")




init().then(() => {
  elem.css({translateX: "100%"})
  setTimeout(() => {
    elem.anim({translateY: 20})
  }, 1000)
})








































class Button extends HTMLElement {
  private doesFocusOnHover: boolean;
  private mouseOverListener: EventListener;
  private mouseOutListener: EventListener;
  private callbacks: ((e: MouseEvent | KeyboardEvent) => void)[] = [];

  private preferedTabIndex: number
  private _hotKey: string
  constructor(protected readonly enabled: boolean = false, focusOnHover: boolean = false, public tabIndex: number = 0, public obtainDefault: boolean = false, public preventFocus = false, blurOnMouseOut: boolean = false, hotkey?: string) {
    super();

    
  }
  private enableForce(prevFocus: boolean) {
    return null
  }
  public enable(prevFocus: boolean = true) {
    return null
  }
  private disableForce(prevBlur: boolean) {
    return null
  }
  public disable(prevBlur: boolean = false) {
    return null
  }

  private _link: string
  private linkFn: any
  private hrefUpdateEventListener = [] as EventListener[]
  public link(): string
  public link(to: string, domainLevel?: number, push?: boolean): void
  public link(to?: string, domainLevel: number = 0, push = true) {

    return null
  }

  public blurOnMouseOut(to: boolean) {
    return null
  }
  public addActivationCallback<CB extends (e?: MouseEvent | KeyboardEvent) => void>(cb: CB): CB {
    return null
  }
  public removeActivationCallback<CB extends (e?: MouseEvent | KeyboardEvent) => void>(cb: CB): CB {
    return null
  }

  public focusOnHover(): boolean
  public focusOnHover(to: boolean): void
  public focusOnHover(to?: boolean) {
    return null
  }

  public click(e?: MouseEvent | KeyboardEvent) {

  }
  private hotKeyListener: (e: KeyboardEvent) => void

  public hotkey(): string
  public hotkey(to: string): void
  public hotkey(to?: string) {
    return null
  }
}










// type Map = {
//   k: "kkk"
//   w: "www"
// }

// type E = {on: <K extends keyof Map>(s: K) => Map[K]}

// type A = Array<string>

// type EA = E & A

// type OR = EA | E

// let ea: EA
// let or: OR

// or.on("k")

