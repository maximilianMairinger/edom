require("xrray")();

export async function polyfill() {
  if (Element.prototype.animate === undefined)
    require("web-animations-js")
}


export class Tel<K extends keyof HTMLElementEventMap = any> {
  private _enabled: boolean = false;
  private p: Nel<K>;
  constructor(nodes: Array<EventTarget> | EventTarget, event?: K, listener?: (this: HTMLElement | Window, ev: HTMLElementEventMap[K]) => any, enable: boolean = true) {
    this.p = new Nel(undefined, event, listener);
    if (nodes instanceof Array) this.p.nodes = new NodeLs(...nodes);
    else this.p.nodes = new NodeLs(nodes)
    if (enable) this.enable();
  }
  public get nodes(): NodeLs {
    return new NodeLs(...this.p.nodes);
  }
  public get event(): K {
    return this.p.event;
  }
  public get listener(): (this: EventTarget, ev: HTMLElementEventMap[K]) => any {
    return this.p.listener;
  }
  public setNode(...node: NodeLs) {
    this.disable();
    this.p.nodes = new NodeLs(...node);
    this.enable();
  }
  public set event(event: K) {
    this.disable();
    this.p.event = event;
    this.enable();
  }
  public set listener(listener: (this: EventTarget, ev: HTMLElementEventMap[K]) => any) {
    this.disable();
    this.p.listener = listener;
    this.enable();
  }
  public set enabled(to: boolean) {
    if (to) {
      if(this._enabled) return;
      this.p.nodes.on(this.event, this.listener);
    }
    else {
      if(!this._enabled) return;
      this.p.nodes.off(this.event, this.listener);
    }
    this._enabled = to;
  }
  public get enabled() {
    return this._enabled;
  }
  public enable(): void {
    this.enabled = true;
  }
  public disable(): void {
    this.enabled = false;
  }
  public repatch(): void {
    this.disable();
    this.enable();
  }
}

class Nel<K extends keyof HTMLElementEventMap = any, E extends EventTarget = EventTarget> {
  constructor(public nodes: NodeLs<E>, public event: K, public listener: (this: HTMLElement | Window, ev: HTMLElementEventMap[K]) => any) {

  }
}



let p: any = EventTarget.prototype;

let toBeNumbers:string[] = ["opacity", "offset", "grid-area", "flexGrow", "zIndex"];
function formatStyle(prop: string, style: string | number) {
  let intok = toBeNumbers.includes(prop);
  if (typeof style === "number") {
    if (!intok) return style + "px";
  }
  else if (intok) {
    let parsed = parseFloat(style);
    if (!isNaN(parsed)) return parsed;
  }
  else if (prop === "backgroundImage") {
    if (typeof style === "number") throw "Unexpected style";
    else {
      if (style.substring(0, 4) !== "url(") style = "url(" + style;
      let lc = style.charAt(style.length-1);
      if (lc !== ")" && lc !== ";") style += ")";
    }

  }
  return style;
}

function formatProp(prop: string) {
  let a = prop.split("-");
  if (a.length === 1) return prop;
  for (let i = 1; i < a.length; i++) {
  	a[i] = a[i].charAt(0).toUpperCase() + a[i].substring(1)
  }
  let s = "";
  a.ea((e) => {
  	s += e;
  })
  return s;
}





function formatCss(css: CSSStyleMap): object {
  let o: any = {};
  for (let key in css) {
    let formatedKey = formatProp(key);
    o[formatedKey] = formatStyle(formatedKey, css[key]);
  }
  return o;
}


p.css = function(key_css: any, val?: any): any {
  if (typeof key_css === "object") {
    let css = key_css.cloneData();
    css = formatCss(css);

    for(let prop in css) {
      this.style[prop] = css[prop];
    }
  }
  else if (val !== undefined && typeof val !== "boolean") {
    let css = formatProp(key_css);
    this.style[css] = formatStyle(css, val);
  }
  else {
    let s = window.getComputedStyle(this)[key_css];
    let n = parseFloat(s);
    if (val || isNaN(n)) return s;
    return n;
  }
  return this;
};

function defaultFrame(frame: CSSStyleMap, that: any): CSSStyleMap {
  let ret: CSSStyleMap = {};
  for(let prop in frame) {
    if (prop !== "offset") {
      let style = that.css(prop);
      if (style === "") style = "unset";
      //@ts-ignore
      ret[prop] = style;
    }
  }
  return ret;
}

//use css aniamtions if the transition property is set for aniamting style
function removeIfInTransitionProperties(css: CSSStyleMap, transitionPropertys: string, transitionDuration: number, that: any) {
  for (let key in css) {
    //in order for iterators like the one above to not pick the property up one must DELETE the property and not just set it undefined
    if (transitionDuration !== 0 && (transitionPropertys.includes(key) || transitionPropertys === "all")) {
      that.css(key, css[key]);

      delete css[key];
      console.warn("The transition property \"" + key + "\" is not empty for the following element. It is recommended to not use css aniamtions and this framework for the same properties (to prevent an aniamtion from triggering twice in a row).\n\nThis animation is beeing handled by css-animations.\n\n", that);
    }
  }
  return css;
}


p.anim = function(frame_frames: CSSStyleMap | CSSStyleMap[], options: GuidedAnimationOptions | UnguidedAnimationOptions = {}, guided: boolean = false) {
  frame_frames = JSON.parse(JSON.stringify(frame_frames));


  let endFrames: object[];
  let transitionProperty:string = this.css("transition-property");
  let transitionDuration = this.css("transition-duration");

  if (frame_frames instanceof Array) {
    frame_frames.ea((frame) => {
      frame = formatCss(frame);
      removeIfInTransitionProperties(frame, transitionProperty, transitionDuration, this);
    });
    //@ts-ignore
    if(frame_frames[0].offset !== undefined && frame_frames[0].offset !== 0) {
      let initFrame = defaultFrame(frame_frames[0], this);
      frame_frames.dda(initFrame);
    }
    endFrames = frame_frames;
  }
  else {
    frame_frames = formatCss(frame_frames);
    removeIfInTransitionProperties(frame_frames, transitionProperty, transitionDuration, this);
    let initFrame = formatCss(defaultFrame(frame_frames, this));
    endFrames = [initFrame, frame_frames];
  }

  if (!guided) {
    //@ts-ignore
    let o: UnguidedAnimationOptions = options;

    //Defaults
    if (o.duration === undefined) o.duration = 200;
    if (o.iterations === undefined) o.iterations = 1;
    if (o.easing === undefined) o.easing = "ease";
    let fill = o.fill;
    if (fill === undefined) fill = true;
    //@ts-ignore
    o.fill = "none";

    //If not supported
    if (this.animate === undefined) {
      if (fill) {
        if (frame_frames instanceof Array) this.css(frame_frames.last);
        else this.css(frame_frames);
      }
      return Promise.resolve()
    }

    //if supported
    return new Promise((res) => {
      try {
        this.animate(endFrames, o).onfinish = () => {
          if (fill) this.css(endFrames.last);
          res();
        };
      }
      catch(e) {
        if (e instanceof DOMException) {
          console.error("Animating to partial keyframes is not supported.\nFalling back on css.", frame_frames);
          if (frame_frames instanceof Array) this.css(frame_frames.last);
          else this.css(frame_frames);
        }
        else throw e;
      }
    });
  }
  else {
    //@ts-ignore
    let o: GuidedAnimationOptions = options;

    //Defaults
    if (o.start === undefined) o.start = 0;
    if (o.end === undefined) o.end = 100;

    let lastAnimation: any;
    let lastAnimationProgress = 0;

    o.guidance.subscribe((absoluteProgress) => {
      let progress = ((absoluteProgress - o.start) / o.end) * 100
      if (progress < minAnimationProgress) progress = minAnimationProgress;
      else if (progress > maxAnimationProgress) progress = maxAnimationProgress;

      if (lastAnimationProgress === progress) return
      if (lastAnimation !== undefined) lastAnimation.cancel()

      let thisAnimation = this.animate(endFrames, {duration: 100, fill: "none", easing: "linear", iterations: 1, delay: -progress});
      thisAnimation.pause()

      lastAnimation = thisAnimation;

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (lastAnimation === thisAnimation) {
            for (let k in endFrames) {
              this.css(k, this.css(k))
            }
          }
        })
      })
    })
  }
}

let maxAnimationProgress = 99.9999999
let minAnimationProgress = .00000001

p.insertAfter = function(newNode: HTMLElement, referenceNode: HTMLElement) {
  if (referenceNode.parent !== this)
    throw new Error("This is not the parent of referenceNode.");
  let sib = referenceNode.nextSibling;
  if (sib !== null) this.insertBefore(newNode, sib);
  else this.apd(newNode);
  return this;
}





const dataTransfers: any = {};
let dataTransferID = 0;

const key = "advancedDataTransfere";

p.on = function(...a) {
  if (this.eventListener === undefined) this.eventListener = [];

  let actualListener: Function;

  if (a[0] === "dragstart") {
    dataTransferID++;
    actualListener = (e) => {
      e.setData = (data: any) => {
        dataTransfers[dataTransferID] = data;
        e.dataTransfer.setData(key, dataTransferID);
      }
      a[1](e);
    }

  }
  else if (a[0] === "drop") {
    actualListener = (e) => {
      e.getData = () => {
        let id = e.dataTransfer.getData(key);
        let found = id !== "" ? dataTransfers[id] : null;
        delete dataTransfers[id];

        return found;

      }
      a[1](e);
    }

  }
  else {
    actualListener = a[1];
  }
  this.eventListener.add({event: a[0], actualListener, userListener: a[1], options: a[2]});
  this.addEventListener(a[0], actualListener, a[2]);
  return this
}


p.off = function(...a) {
  let toBeRm: any[] = [];
  if (a[0] !== undefined && a[1] !== undefined) {
    this.eventListener.ea((e) => {
      if (e.event === a[0] && e.userListener === a[1]) toBeRm.add(e);
    })
  }
  else {
    this.eventListener.ea((e) => {
      if (e.event === a[0] || e.userListener === a[1]) toBeRm.add(e);
    })
  }

  toBeRm.ea((e) => {
    this.removeEventListener(e.event, e.actualListener);
    this.eventListener.remove(e);
  })


  return this
}

p.listener = p.listen = p.ls = function(event?: any, listener?: any, patch?: boolean) {
  return new Tel(this, event, listener, patch)
}

Object.defineProperty(p, "html", {
  get() {
    return this.innerHTML;
  },
  set(to: string) {
    this.innerHTML = to;
  }
});
Object.defineProperty(p, "inner", {
set(to: string | HTMLElement | number | boolean | Array<string | number | string | boolean>) {
  if (to instanceof Array) {
    this.html = "";
    this.apd(...to);
  }
  else if (to instanceof HTMLElement) {
    this.html = "";
    this.append(to);
  }
  else this.innerHTML = to;
}});

p.addClass = function(...className: string[]) {
  this.classList.add(...className);
  return this;
}

p.removeClass = function(...className: string[]) {
  this.classList.remove(...className);
  return this;
}

p.hasClass = function(...className: string[]) {
  let has = true;
  className.ea((cls) => {
    if (!this.classList.contains(cls)) has = false;
  });
  return has
}

p.toggleClass = function(...className: string[]) {
  className.ea((cls) => {
    if (this.hasClass(cls)) this.removeClass(cls);
    else this.addClass(cls);
  });
  return this
}

//innerHTML += removes listener and stuff
p.apd = function(...elems: Array<HTMLElement | string | boolean | number>) {
  elems.ea((e) => {
    if (e instanceof HTMLElement) this.append(e);
    else this.innerHTML += e;
  });
  return this;
}

p.emptyNodes = function() {
  this.html = "";
  return this;
}

p.hide = function() {
  this.css("display", "none");
  return this;
}

p.show = function() {
  this.css("display", "block");
  return this;
}

p.childs = function(selector: string | number = 1) {
  if (typeof selector === "string") return new NodeLs(...this.querySelectorAll(selector));
  else if (selector > 0) {
     return new NodeLs(...this.children, ...new NodeLs(...this.children).childs(selector--));
  }
  return new NodeLs();
}

Object.defineProperty(p, "height", {
  get() {
    return this.css("height")
  },
  set(to) {
    this.css("height", to)
  }
});

Object.defineProperty(p, "width", {
  get() {
    return this.css("width")
  },
  set(to) {
    this.css("width", to)
  }
});

Object.defineProperty(p, "offset", {get() {
  return {top: this.offsetTop, left: this.offsetLeft, width: this.offsetWidth, height: this.offsetHeight}
}});

Object.defineProperty(p, "absoluteOffset", {get() {
  return this.getBoundingClientRect()
}});



Object.defineProperty(p, "outerWidth", {get() {
  return this.offsetWidth
}});

Object.defineProperty(p, "outerHeight", {get() {
  return this.offsetHeight
}});

Object.defineProperty(p, "innerWidth", {get() {
  return this.clientWidth
}});

Object.defineProperty(p, "innerHeight", {get() {
  return this.clientHeight
}});

Object.defineProperty(p, "parent", {get() {
  return this.parentElement
}});

//@ts-ignore
declare let global: any;

global.NodeLs = class NodeLs<T extends EventTarget = EventTarget> extends Array<T> {
  constructor(...a: Array<T>) {
    super(...a);
  }
  async anim(frame_frames: CSSStyleMap | CSSStyleMap[], options: GuidedAnimationOptions | UnguidedAnimationOptions = {}, guided: boolean = false, oneAfterTheOther: boolean): Promise<void> {
    this.warn("anim")
    if (oneAfterTheOther) {
      for(let e of this) {
        //@ts-ignore
        await e.anim(frame_frames, options, guided);
      }
    }
    else {
      let ls = [];
      for(let e of this) {
        //@ts-ignore
        ls.add(e.anim(frame_frames, options, guided));
      }
      await Promise.all(ls)
    }
  }
  on(event: string, callback: Function): this {
    this.exec("on", arguments);
    return this;
  }
  show(): this {
    this.exec("show", arguments);
    return this;
  }
  removeClass(className: string): this {
    this.exec("removeClass", arguments);
    return this;
  }
  apd(...elems: HTMLElement[]): this {
    this.exec("apd", arguments);
    return this;
  }
  emptyNodes(): this {
    this.exec("empty", arguments);
    return this;
  }
  hide(): this {
    this.exec("hide", arguments);
    return this;
  }
  css(key_css: any, val?: any): this {
    this.exec("css", arguments);
    return this;
  }
  childs(selector: string | number = 1): NodeLs<EventTarget> {
    let ls = new NodeLs();
    this.ea((e) => {
      ls.add(...e.childs(selector));
    });
    return ls;
  }
  addClass(...classNames: string[]): this {
    this.exec("addClass", arguments);
    return this;
  }
  hasClass(...classNames: string[]): boolean {
    let has = true;
    this.ea((e) => {
      if (!e.hasClass(...classNames)) has = false;
    });
    return has
  }
  toggleClass(...classNames: string[]): this {
    this.exec("toggleClass", arguments);
    return this
  }
  off<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): this {
    this.exec("off", arguments);
    return this;
  }

  set html(to: string) {
    this.ea((e) => {
      e.html = to;
    });
  }
  get html(): string {
    let s = "";
    this.ea((e) => {
      s += e.html;
    })
    return s;
  }
  set inner(to: string | HTMLElement) {
    this.ea((e) => {
      e.inner = to;
    });
  }

  private warn(cmd: string) {
    if (this.length === 0) console.warn("Trying to execute command \"" + cmd + "\" on empty NodeLs.")
  }

  exec(functionName: string, args: IArguments): void {
    this.warn(functionName)
    this.ea((e) => {
      e[functionName](...args);
    });
  }
}
