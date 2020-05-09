import { Tel } from "./tel"
import { Data } from "josm"
import delay from "delay"
import { AnimatableAllProperties, AnimatableAllPropertiesBaseArray, UnguidedAnimationOptions, GuidedAnimationOptions } from "./../types"

type StaggerOptions = number | boolean

class InternalElementList<Elem extends Element = Element> extends Array<Elem> {
  constructor(...elems: Array<Elem>) {
    super(...elems);
  }
  anim(frame_frames: AnimatableAllProperties | AnimatableAllProperties[] | AnimatableAllPropertiesBaseArray, options?: UnguidedAnimationOptions | number, stagger?: StaggerOptions): Promise<void>
	anim(frame_frames: AnimatableAllProperties | AnimatableAllProperties[] | AnimatableAllPropertiesBaseArray, options: GuidedAnimationOptions, guidance: Data<number>, stagger?: number): Promise<void>
  async anim(frame_frames: AnimatableAllProperties | AnimatableAllProperties[] | AnimatableAllPropertiesBaseArray, options?: GuidedAnimationOptions | UnguidedAnimationOptions, guidance_stagger?: Data<number> | StaggerOptions, stagger?: StaggerOptions) {
    this.warn("anim")
    if (!(guidance_stagger instanceof Data)) {
      stagger = guidance_stagger
      guidance_stagger = undefined
    }

    if (stagger) {
      let awaitForAnimationDuration = stagger === true
      if (awaitForAnimationDuration) {
        for (let e of this) {
          await e.anim(frame_frames, options, guidance_stagger as Data<number>);
        }
      }
      else {
        for (let i = 0; i < this.length; i++) {
          if (i !== this.length-1) {
            this[i].anim(frame_frames, options, guidance_stagger as Data<number>);
            await delay(stagger as number)
          }
          else await (this[i] as Element).anim(frame_frames, options, guidance_stagger as Data<number>);
        }
      }
    }
    else {
      let ls = [];
      for(let e of this) {
        ls.add(e.anim(frame_frames, options, guidance_stagger as Data<number>));
      }
      await Promise.all(ls)
    }
  }




  /**
   * Gets children matching given css-selector
   * @param selector css-selector filter childs similar to document.querySelector
   * @param alwaysReturnElementList when true, always return a ELementList instead of defaulting to a single instance when the query does only math once (defaults to false)
   */
  childs(selector: string, alwaysReturnElementList: true): ElementList<Element>
  /**
   * Gets children matching given css-selector
   * @param selector css-selector filter childs similar to document.querySelector
   * @param alwaysReturnElementList when true, always return a ELementList instead of defaulting to a single instance when the query does only math once (defaults to false)
   */
  childs(selector: string, alwaysReturnElementList?: boolean): ElementList<Element> | Element

  /**
   * Gets all chilren up to the given depth
   * @param selector depth How deep children shall be gathered (defaults to 1)
   * @param alwaysReturnElementList when true, always return a ELementList instead of defaulting to a single instance when the query does only math once (defaults to false)
   */
  childs(depth: number, alwaysReturnElementList: true): ElementList<Element>
  /**
   * Gets all chilren up to the given depth
   * @param selector depth How deep children shall be gathered (defaults to 1)
   * @param alwaysReturnElementList when true, always return a ELementList instead of defaulting to a single instance when the query does only math once (defaults to false)
   */
  childs(depth?: number, alwaysReturnElementList?: boolean): ElementList<Element> | Element


  /**
   * Gets children matching given css-selector or all up to given depth
   * @param selector_depth css-selector filter childs similar to document.querySelector or the depth
   * @param alwaysReturnElementList when true, always return a ELementList instead of defaulting to a single instance when the query does only math once (defaults to false)
   */
  childs(selector_depth: string | number, alwaysReturnElementList: true): ElementList<Element>
  /**
   * Gets children matching given css-selector or all up to given depth
   * @param selector_depth css-selector filter childs similar to document.querySelector or the depth
   * @param alwaysReturnElementList when true, always return a ELementList instead of defaulting to a single instance when the query does only math once (defaults to false)
   */
  childs(selector_depth: string | number = 1, alwaysReturnElementList = false): ElementList<Element> | Element {
    let ls = new ElementList();
    this.ea((e) => {
      ls.add(...e.childs(selector_depth, true));
    });
    return ls.length === 1 && !alwaysReturnElementList ? ls.first : ls;
  }
  /**
   * Removes node or element from list
   * @param valueOrIndices When 1 or more is given, The matching elements will be removed from the ElementList (Xrray implementation). When no parameter is given all Elements of the ElementList will be removed from the dom (dom implementation).
   */
  public remove(...valueOrIndices: Elem[] | number[]): this {
    if (valueOrIndices.empty) {
      this.ea((e) => {
        e.remove()
      })
    }
    else {
      super.remove(...valueOrIndices)
    }

    return this
  }

  private warn(cmd: string) {
    if (this.length === 0) console.warn("Trying to execute command \"" + cmd + "\" on empty ElementList.")
  }

  private exec(functionName: string, args: IArguments): this | any[] {
    this.warn(functionName)
    let end = []
    for (let e of this) {
      end.add(e[functionName](...args))
    }
    return end;
  }
  private execChain(functionName: string, args: IArguments): this | any[] {
    this.warn(functionName)
    for (let e of this) {
      e[functionName](...args)
    }
    return this;
  }
}


export type ElementList<Elem extends Element = Element> = InternalElementList<Elem> & Element
//@ts-ignore
export const ElementList = InternalElementList as ({ new<Elem extends Element = Element>(...elems: Array<Elem>): ElementList<Elem> })


//TODO: childs call can return ElementList or just one Element because the structure is so similar (better performance). Maybe would also mean that you never know if getter give you array or not. They do have some differences though. You couldnt use rest operations e.g.




//has setterGetter -> make em
        //has "has" in name -> make has, contains and have method
        //any other function, call it with params and return array of results


export function initPrototype() {
  const getPropDesc = Object.getOwnPropertyDescriptor.bind(Object)


  const elemProto = Element.prototype
  const lsProto = ElementList.prototype
  const NodeProto = Node.prototype
  const EvTarProto = EventTarget.prototype

  const has = "has"
  const includesString = "includes"
  const containsString = "contains"
  const excludesString = "excludes"
  const execString = "exec"
  const execChainString = "execChain"

  const chainAbleFunctions = ["insertAfter", "on", "off", "css", "addClass", "removeClass", "hasClass", "toggleClass", "apd", "emptyNodes", "hide", "show"]


  for (let k in elemProto) {
    if (lsProto[k] !== undefined) {
      //console.log("Skiping " + k);
      continue
    }

    


    let d = getPropDesc(elemProto, k);
    if (d === undefined) {
      d = getPropDesc(NodeProto, k);
      if (d === undefined) {
        d = getPropDesc(EvTarProto, k);
      }
    }


    if (d === undefined) {
      console.warn("Edom: Unexpected change in dom api. The property \"" + k + "\" will not available in " + ElementList.name)
    }
    else {
      //console.log(k, d.writable);

      
      
      if (d.get !== undefined) {
        defineGetterSetter(k, d.set !== undefined)
      }
      else {
        let val = d.value
        if (typeof val === "function") {
          if (k.substr(0, 3) === has) {
            let kName = k.substr(3)

            // Since this k starts with "has" it cant be chainable
            
            lsProto[excludesString + kName] = function(...args: any[]) {
              let end = true
              for (let e of this) {
                if (!e[k](...args)) {
                  end = false
                  break
                }
              }
              return end;
            }

            lsProto[containsString + kName] = lsProto[includesString + kName] = function(...args: any[]) {
              let end = false
              for (let e of this) {
                if (e[k](...args)) {
                  end = true
                  break
                }
              }
              return end;
            }
          }        

          let isChainAbleFunction = chainAbleFunctions.includes(k)
          lsProto[k] = function(...args: any[]) {
            return this[isChainAbleFunction ? execChainString : execString](k, args)
          }
        }
        else {
          defineGetterSetter(k, !d.writable || !d.configurable)
        }
      }
    } 
  }

  function defineGetterSetter(key: string, writeAble: boolean) {
    
    let o: any = {
      get() {
        let end = []
        for (let e of this) {
          end.add(e[key])
        }
        return end;
      }
    }
    if (writeAble) o.set = function(to: any) {
      for (let e of this) {
        e[key] = to
      }
    }

    Object.defineProperty(lsProto, key, o)
  }
}




