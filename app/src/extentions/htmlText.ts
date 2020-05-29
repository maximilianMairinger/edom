import { at } from "../lib/attatchToProto"
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
  key: {
    open: "$[",
    end: "]",
    escape: "$",
  },

  space: [" ", "\t"],

  htmlTageOpen: "<",
  htmlTageClose: ">",
  attrbValBegin: ["=\"", "='", "=`"],

  htmlInTagBreak: [this.htmlTageClose, this.open, ...this.attrbValBegin]
}

const defaultKeyToken = clone(token.key)



// function constructTokenFunctions(str: string) {
//   let currentHeadPointer = 0


//   function headPointer(): number
//   function headPointer(to: number): number
//   function headPointer(to?: number): any {
//     if (to !== undefined) return currentHeadPointer = to
//     else return currentHeadPointer
//   }


//   const string = {
//     splice(start: number | undefined | null, del: number, ...append: string[]) {
//       if (start === undefined || start === null) start = currentHeadPointer
//       if (currentHeadPointer > start) {
//         currentHeadPointer -= del - append.length
//       }

//       return str = str.splice(start, del, ...append)
//     },
//     substring(start: number, end?: number) {
//       return str.substr(start, end)
//     },
//     head(to?: string) {
//       if (to !== undefined) return string.splice(null, 1, to)
//       else return str[currentHeadPointer] 
//     }
//   }

//   function isTokenInRange(token: Token, range: number, bothDirections: boolean = false) {
//     if (bothDirections) {
//       const s1 = str.substr(currentHeadPointer, range)
//       const s2 = str.substring(currentHeadPointer - range, currentHeadPointer)
  
//       return token instanceof Array ? token.ea((t) => {if (s1.includes(t) || s2.includes(t)) return true}) || false : s1.includes(token) || s2.includes(token)
  
//     }
//     else {
//       let sub: string
//       if (range < 0) sub = str.substring(currentHeadPointer - range, currentHeadPointer)
//       else sub = str.substr(currentHeadPointer, range)
  
//       return token instanceof Array ? token.ea((t) => {if (sub.includes(t)) return true}) || false : sub.includes(token)
//     }
    
//   }
  
  
  
//   function constructTokenFinder(fileSub: (currentIndex: number, str: string) => string) {
//     function tokenFinder(token: Token, additionalDetails?: false): number
//     function tokenFinder(token: Token, additionalDetails: true): {index: number, diff: number, found: string}
//     function tokenFinder(token: Token, additionalDetails: boolean = false): any {
//       const sub = fileSub(currentHeadPointer + 1, str)

//       let index: number
//       let found: string
//       if (token instanceof Array) {
//         index = Infinity
//         token.ea((t) => {
//           let ind = sub.indexOf(t)
//           if (ind < index) {
//             index = ind
//             if (additionalDetails) found = t
//           }
//         })
//       }
//       else {
//         index = sub.indexOf(token)
//         if (additionalDetails) found = token
//       }
      
      
//       let end: any
//       if (!additionalDetails) {
//         end = index
//       }
//       else {
//         end = {index, diff: index - currentHeadPointer, found}
//       }
      
//       currentHeadPointer = index
//       return end
//     }
//     return tokenFinder
//   }

//   return {isTokenInRange, constructTokenFinder, headPointer, string}
// }







type Prim = string | number | boolean;

at("html", {
  get() {
    return this.innerHTML;
  },
  set(to: Prim, library?: {[key in string]: Prim | Data<string>} | DataBase, customTokens?: {open?: Token, end?: Token, escape?: Token}) {
    if (typeof to === "string" && library !== undefined) {
      if (customTokens) {
        for (let key in customTokens) {
          token.key[key] = customTokens[key]
        }
      }
      
      // const { isTokenInRange, constructTokenFinder, string, headPointer } = constructTokenFunctions(to)
      

      // const nextToken = constructTokenFinder((index, str) => str.substring(index))
      // const prevToken = constructTokenFinder((index, str) => str.substring(0, index))







      this.innerHTML = to
      let childs = this.childs(Infinity)
      childs.



      // let parentIndex: HTMLElement[] = [this]
      // while (true) {
      //   let startTag = nextToken(token.htmlTageOpen)
      //   let endName = nextToken(token.space)
      //   const { found, index: foundIndex } = nextToken(token.htmlInTagBreak, true)

      //   let tagName = string.substring(startTag, endName)
      //   let elem = document.createElement(tagName)
      //   parentIndex.last.apd(elem)

      //   let inAttrb = false
      //   let currentAttrbClosingToken: string
        
      //   if (found === token.key.open) {
      //     if (!isTokenInRange(token.key.escape, -1)) {
      //       let keyEnd = nextToken(token.key.end)
      //       let keyString = string.substring(foundIndex + 1, keyEnd).trim()
      //       let keys = keyString.split(".")
      //       let cur = library
      //       keys.ea((key) => {
      //         cur = cur[key]
      //       })



      //       if (cur instanceof Data) {

      //       }
      //       else {

      //       }
      //     }
      //     else {
      //       string.splice(headPointer() - 1, 1)
      //     }
      //   }

      //   else if(token.attrbValBegin.includes(found)) {
      //     if (!inAttrb) {
      //       currentAttrbClosingToken = found
      //       inAttrb = true
      //     }
      //   }
  

      //   break
      // }
      

      if (customTokens) {
        for (let key in customTokens) {
          token.key[key] = defaultKeyToken[key]
        }
      }
    }
    else this.innerHTML = to;


    
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

