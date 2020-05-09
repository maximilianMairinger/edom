import { at } from "../lib/attatchToProto"
import { Data, DataSubscription } from "josm"


at("html", {
  get() {
    return this.innerHTML;
  },
  set(to: string | number | boolean) {
    this.innerHTML = to;
  }
})


const textDataSymbol = Symbol("textDataSymbol")

at("text", {
  get() {
    return this.innerText;
  },
  set(to: string | number | boolean | Data, anim: boolean = true) {
    if (to instanceof Data) {
      if (this[textDataSymbol]) {
        (this[textDataSymbol] as DataSubscription<unknown[]>).data(to)
      }
      else {
        to.get(async (val) => {
          let color: any
          if (anim) {
            color = this.css("color")
            await this.anim({color: "transparent"})
          }
          this.innerText = val
          if (anim) await this.anim({color})
        })
      }
    }
    
    else {
      if (this[textDataSymbol]) {
        (this[textDataSymbol] as DataSubscription<unknown[]>).deactivate()
      }
      delete this[textDataSymbol];
      (async () => {
        let color: any
        if (anim) {
          color = this.css("color")
          await this.anim({color: "transparent"})
        }
        this.innerText = to;
        if (anim) this.anim({color})
      })()
      
    }

    return this 
  }
})

