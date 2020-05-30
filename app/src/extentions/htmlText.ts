import { at } from "../lib/attatchToProto"
// DataBase just used as type
import { Data, DataSubscription, DataBase } from "josm"
import clone from "fast-copy"




String.prototype.splice = function(index, count, add) {
  if (index < 0) {
      index += this.length;
      if (index < 0)
          index = 0;
  }
  return this.slice(0, index) + (add || "") + this.slice(index + count);
}




type Token = string | string[]

const token = {
  open: "$[",
  close: "]",
  escape: "$"
}

const defaultToken = clone(token)



function interpolateString(source: string, library: {[key in string]: Prim | Data<string>} | DataBase, cb: (s: string) => void) {
  let res = source
  let a = 0
  let subscriptions: DataSubscription<any>[] = []

  let subIndexStorage: number[] = []

  while (true) {
    let localStart = source.indexOf(token.open)
    let start = localStart + a

    if (localStart === -1) break
    if (source[localStart-1] === token.escape) {
      res = res.splice(start, 1, "")
      source = source.substr(localStart + 1)
      a = start
      continue
    }
    let localEnd = localStart + source.substr(localStart).indexOf(token.close) + 1
    if (localEnd === -1) break
    let end = localEnd + a
    let keysAsString = source.substring(localStart + token.open.length, localEnd - token.close.length).trim()

    let keys = keysAsString.split(".")
    let li: any = library
    if (keys.ea((key) => {
      li = li[key]
      if (li === undefined) return true
    })) li = keys.last


    let curInsert: string

    // FIXME: could be DataLink as well, do some other check to find out if data
    if (li instanceof Data) {
      curInsert = li.get()
      let mySubIndexStorageIndex = subIndexStorage.length
      subIndexStorage.add(start)
      subscriptions.add(li.get((newInsert: string) => {
        let start = subIndexStorage[mySubIndexStorageIndex]
        let omit = curInsert.length
        let delta = newInsert.length - omit
        curInsert = newInsert

        subIndexStorage.ea((e, i) => {
          if (e > start) subIndexStorage[i] = subIndexStorage[i] + delta
        })
        res = res.splice(start, omit, newInsert)

        cb(res)
      }, false))
    }
    else {
      curInsert = li
    }
    
    let omit = end - start
    res = res.splice(start, omit, curInsert)
    

    source = source.substring(localEnd)

    a = end - (omit - curInsert.length)

  }

  cb(res)

  return () => {
    subscriptions.Inner("deactivate", [])
  }
}



type Prim = string | number | boolean;

let htmlSubscriptionsSymbol = Symbol()

at("html", {
  get() {
    return this.innerHTML;
  },
  set(to: Prim, library?: {[key in string]: Prim | Data<string>} | DataBase, customTokens?: {open?: Token, close?: Token, escape?: Token}) {
    if (typeof to === "string" && library !== undefined) {
      if (customTokens) {
        for (let key in customTokens) {
          token[key] = customTokens[key]
        }
      }

      if (this[htmlSubscriptionsSymbol]) {
        this[htmlSubscriptionsSymbol].call()
      }

      let subs = this[htmlSubscriptionsSymbol] = []
      
      
      this.innerHTML = to

      
      let childs = this.childs(Infinity, true)
      childs.ea((elem: Element) => {
        for (let i = 0; i < elem.attributes.length; i++) {


          let destory = interpolateString(elem.attributes[i].value, library, (s) => {
            elem.attributes[i].value = s
          })

          subs.add(destory)

        }

        elem.ownTextNodes().ea((e) => {
          let destroy = interpolateString(e.data, library, (s) => {
            e.data = s
          })

          subs.add(destroy)
        })
        

      })


      

      if (customTokens) {
        for (let key in customTokens) {
          token[key] = defaultToken[key]
        }
      }
    }
    else this.innerHTML = to;


    
  }
})





at("ownTextNodes", {
  get() {
    //https://stackoverflow.com/questions/9340449/is-there-a-way-to-get-innertext-of-only-the-top-element-and-ignore-the-child-el

    let child: Node = this.firstChild,
    ar: Text[] = [];

    while (child) {
      if (child.nodeType == 3) {
          ar.push(child as Text);
      }
      child = child.nextSibling;
    }

    return ar
  }
})

at("ownTexts", {
  get() {
    return this.ownTextNodes.Inner("data")
  }
})

at("ownText", {
  get() {
    return this.ownTexts.join("")
  }
})



// TODO: deactivate on rmeove from dom

const textDataSymbol = Symbol("textDataSymbol")

at(["txt", "text"], {
  get() {
    return this.innerText
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

