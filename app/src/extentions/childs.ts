import { et, df } from "../lib/attatchToProto"
import { ElementList } from "../components/elementList"
// DataBase just used as type
import { Data, DataSubscription, DataBase } from "josm"
import clone from "fast-copy"

type CustomTokens = {open?: Token, close?: Token, escape?: Token}
const beforeend: "beforeend" = "beforeend"
et("apd", function(elem_elems: PrimElem | PrimElem[], library_elem?: PrimElem | Library, customTokens_elem?: CustomTokens | PrimElem, ...elemss: PrimElem[]) {
  let elems: PrimElem[]
  let library: {
    lib: Library,
    customTokens: CustomTokens
  }

  if (elem_elems instanceof Array) {
    elems = elem_elems
  }
  else if (elem_elems !== undefined) elems = [elem_elems]
  else return this

  
  if (library_elem instanceof Element) {
    elems.add(library_elem)
    //@ts-ignore
    if (customTokens_elem !== undefined) elems.add(customTokens_elem)
    elems.add(...elemss)
  }
  else if (library_elem instanceof Function) {
    library = {
      //@ts-ignore
      lib: library_elem,
      //@ts-ignore
      customTokens: customTokens_elem
    }
  }
  else if (library_elem !== undefined) {
    //@ts-ignore
    elems.add(library_elem)
    //@ts-ignore
    if (customTokens_elem !== undefined) elems.add(customTokens_elem)
    elems.add(...elemss)
  }


  if (library === undefined) {
    elems.ea((e) => {
      if (e instanceof Element) this.append(e)
      else this.insertAdjacentHTML(beforeend, e.toString())
    })
  }
  else {
    if (library.customTokens) {
      for (let key in library.customTokens) {
        token[key] = library.customTokens[key]
      }
    }

    let subs = this[htmlSubscriptionsSymbol] ? this[htmlSubscriptionsSymbol] : this[htmlSubscriptionsSymbol] = []

    let childs = this.children
    let childCountBeforeInsert: number
    elems.ea((to) => {
      if (typeof to === "string" || to instanceof Element) {
        let newChilds: ElementList
        if (typeof to === "string") {
          childCountBeforeInsert = childs.length
          this.insertAdjacentHTML(beforeend, to)
          //@ts-ignore
          newChilds = new ElementList(...childs)
          newChilds.splice(0, childCountBeforeInsert)
          //@ts-ignore
          newChilds = newChilds.add(...newChilds.childs(Infinity, true))
        }
        else childs = to.childs(Infinity, true)


        newChilds.ea((elem: Element) => {
          for (let i = 0; i < elem.attributes.length; i++) {
            let lastContent = elem.attributes[i].value
            let destory = interpolateString(elem.attributes[i].value, library.lib, (s) => {
              if (lastContent !== s) lastContent = elem.attributes[i].value = s
            })
    
            subs.add(destory)
          }
    
          elem.ownTextNodes().ea((e) => {
            let lastContent = e.data
            let destroy = interpolateString(e.data, library.lib, (s) => {
              if (lastContent !== s) lastContent = e.data = s
            })
    
            subs.add(destroy)
          })
        })
      }
      else this.insertAdjacentHTML(beforeend, to.toString())
    })



    if (library.customTokens) {
      for (let key in library.customTokens) {
        token[key] = defaultToken[key]
      }
    }
  }
  
  return this
})

df("insertAdjacentHTML", function(before: "beforebegin" | "afterbegin" | "beforeend" | "afterend", content: string) {
  let template = document.createElement('template')
  template.innerHTML = content
  let nodes = document.importNode(template.content, true)
  
  if (before === beforeend) {
    this.append(nodes)
  }
  else if (before === "afterbegin") {
    this.prepend(nodes)
  }
  else if (before === "afterend") {
    this.parent().insertAfter(content, this)
  }
  else {
    this.parent().insertBefore(content, this)
  }

  return this
})

et(["emptyNodes", "removeChilds"], function() {
  this.innerHTML = "";
  return this;
})

et("childs", function(selector_depth: string | number = 1, alwaysReturnElementList = false) {
  let ls: ElementList
  if (typeof selector_depth === "string") ls = new ElementList<Element>(...this.querySelectorAll(selector_depth));
  else if (selector_depth === 1) {
    ls = new ElementList<Element>(...this.children)
  }
  else if (selector_depth > 1) {
    ls = new ElementList<Element>(...this.children, ...new ElementList<Element>(...this.children).childs(selector_depth-1, true));
  }
  else return new ElementList

  return ls.length === 1 && !alwaysReturnElementList ? ls.first : ls
})







type Token = string | string[]

const token = {
  open: "$[",
  close: "]",
  escape: "$"
}

const defaultToken = clone(token)


function interpolateString(source: string, library: Library, cb: (s: string) => void) {

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



type PrimElem = string | number | boolean | Element
type Library = {[key in string]: string | Data<string>} | DataBase<{[key in string]: string}>

let htmlSubscriptionsSymbol = Symbol()


et("html", {
  get() {
    return this.innerHTML;
  },
  set(to: PrimElem | PrimElem[], library?: Library, customTokens?: {open?: Token, close?: Token, escape?: Token}) {
    this.removeChilds()
    if (this[htmlSubscriptionsSymbol]) this[htmlSubscriptionsSymbol].call().clear()
    this.apd(to, library, customTokens)
  }
})





et("ownTextNodes", {
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

et("ownTexts", {
  get() {
    return this.ownTextNodes.Inner("data")
  }
})

et("ownText", {
  get() {
    return this.ownTexts.join("")
  }
})



// TODO: deactivate on rmeove from dom

const textDataSymbol = Symbol("textDataSymbol")

et(["txt", "text"], {
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


et("insertAfter", function(newNode: DocumentFragment, referenceNode: Node) {
  if (referenceNode.parent !== this)
    throw new Error("This is not the parent of referenceNode.");
  let sib = referenceNode.nextSibling;
  if (sib !== null) this.insertBefore(newNode, sib);
  else this.apd(newNode);
  return this;
})

