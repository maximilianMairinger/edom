import { Tel } from "./tel"
import { Data } from "front-db"

type StaggerOptions = number | boolean
//@ts-ignore
export class ElementList<T extends Element = Element> extends Array<T> implements Element {
  constructor(...a: Array<T>) {
    super(...a);
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
      for (let e of this) {
        let anim = e.anim(frame_frames, options, guidance_stagger as Data<number>);
        if (awaitForAnimationDuration) await anim;
        //@ts-ignore
        else await delay(stagger)
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
  childs(selector: string | number = 1): ElementList<Element> {
    let ls = new ElementList();
    this.ea((e) => {
      ls.add(...e.childs(selector));
    });
    return ls;
  }

  private warn(cmd: string) {
    if (this.length === 0) console.warn("Trying to execute command \"" + cmd + "\" on empty NodeLs.")
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

//TODO: childs call can return NodeLs or just one Element because the structure is so similar (better performance). Maybe would also mean that you never know if getter give you array or not. They do have some differences though. You couldnt use rest operations e.g.




//has setterGetter -> make em
        //has "has" in name -> make has, contains and have method
        //any other function, call it with params and return array of results


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



