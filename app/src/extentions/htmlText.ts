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

at(["txt", "text"], {
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
          if (anim) await this.anim({opacity: 0})
          this.innerText = val
          if (anim) await this.anim({opacity: 1})
        }, false);

        (async () => {
          let initAnim = !!this.innerText && anim
          if (initAnim) await this.anim({opacity: 0})
          this.innerText = to.get()
          if (initAnim) await this.anim({opacity: 1})
        })()
      }
    }
    
    else {
      if (this[textDataSymbol]) {
        (this[textDataSymbol] as DataSubscription<unknown[]>).deactivate()
        delete this[textDataSymbol];
      }

      if (!this.innerText) {
        anim = false
      }
      
      (async () => {
        
        if (anim) await this.anim({opacity: 0})
        this.innerText = to;
        if (anim) await this.anim({opacity: 1})
      })()
      
    }

    return this 
  }
})

