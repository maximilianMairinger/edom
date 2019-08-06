require("xrray")();

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
  ret.top = "qwe";
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

//TODO fix polifills

p.anim = function(frame_frames: CSSStyleMap | CSSStyleMap[], options: AnimationOptions = {}) {
  frame_frames = frame_frames.cloneData();
  //Defaults
  if (options.duration === undefined) options.duration = 200;
  if (options.iterations === undefined) options.iterations = 1;
  if (options.easing === undefined) options.easing = "ease";
  let fill = options.fill;
  if (fill === undefined) fill = true;
  //@ts-ignore
  options.fill = "none";

  //If not supported
  if (this.animate === undefined) {
    if (fill) {
      if (frame_frames instanceof Array) this.css(frame_frames.last);
      else this.css(frame_frames);
    }
    return Promise.resolve()
  }

  //If supported
  return new Promise((res) => {
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

    try {
      this.animate(endFrames, options).onfinish = () => {
        if (fill) this.css(endFrames.last);
        res();
      };
    }
    catch(e) {
      if (e instanceof DOMException) {
        console.error("Animating to partial keyframes is not supported.", frame_frames);
      }
      else throw e;
    }
  });
}

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


global.NodeLs = class NodeLs<T extends HTMLElement = HTMLElement> extends Array<T> {
  constructor(...a: Array<T>) {
    super(...a);
  }
  async anim(frame: object, options?: AnimationOptions, oneAfterTheOther: boolean = false): Promise<void> {
    if (oneAfterTheOther) {
      for(let e of this) {
        await e.anim(frame, options);
      }
      return;
    }
    if (this[0]) await this[0].anim(frame, options);
    for(let i = 1; i < this.length; i++) {
      this[i].anim(frame, options);
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
  childs(selector: string | number = 1): NodeLs<HTMLElement> {
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
  off(): this {
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


  exec(functionName: string, args: IArguments): void {
    this.ea((e) => {
      e[functionName](...args);
    });
  }
}

interface CSSStyleMap {
    alignContent?: string | null;
    alignItems?: string | null;
    alignSelf?: string | null;
    alignmentBaseline?: string | null;
    animation?: string | null;
    animationDelay?: string | null;
    animationDirection?: string | null;
    animationDuration?: string | null;
    animationFillMode?: string | null;
    animationIterationCount?: string | null;
    animationName?: string | null;
    animationPlayState?: string | null;
    animationTimingFunction?: string | null;
    backfaceVisibility?: string | null;
    background?: string | null;
    backgroundAttachment?: string | null;
    backgroundClip?: string | null;
    backgroundColor?: string | null;
    backgroundImage?: string | null;
    backgroundOrigin?: string | null;
    backgroundPosition?: string | null;
    backgroundPositionX?: string | null;
    backgroundPositionY?: string | null;
    backgroundRepeat?: string | null;
    backgroundSize?: string | null;
    baselineShift?: string | null;
    border?: string | null;
    borderBottom?: string | null;
    borderBottomColor?: string | null;
    borderBottomLeftRadius?: string | null;
    borderBottomRightRadius?: string | null;
    borderBottomStyle?: string | null;
    borderBottomWidth?: string | null;
    borderCollapse?: string | null;
    borderColor?: string | null;
    borderImage?: string | null;
    borderImageOutset?: string | null;
    borderImageRepeat?: string | null;
    borderImageSlice?: string | null;
    borderImageSource?: string | null;
    borderImageWidth?: string | null;
    borderLeft?: string | null;
    borderLeftColor?: string | null;
    borderLeftStyle?: string | null;
    borderLeftWidth?: string | null;
    borderRadius?: string | null;
    borderRight?: string | null;
    borderRightColor?: string | null;
    borderRightStyle?: string | null;
    borderRightWidth?: string | null;
    borderSpacing?: string | null;
    borderStyle?: string | null;
    borderTop?: string | null;
    borderTopColor?: string | null;
    borderTopLeftRadius?: string | null;
    borderTopRightRadius?: string | null;
    borderTopStyle?: string | null;
    borderTopWidth?: string | null;
    borderWidth?: string | null;
    bottom?: string | null;
    boxShadow?: string | null;
    boxSizing?: string | null;
    breakAfter?: string | null;
    breakBefore?: string | null;
    breakInside?: string | null;
    captionSide?: string | null;
    clear?: string | null;
    clip?: string | null;
    clipPath?: string | null;
    clipRule?: string | null;
    color?: string | null;
    colorInterpolationFilters?: string | null;
    columnCount?: any;
    columnFill?: string | null;
    columnGap?: any;
    columnRule?: string | null;
    columnRuleColor?: any;
    columnRuleStyle?: string | null;
    columnRuleWidth?: any;
    columnSpan?: string | null;
    columnWidth?: any;
    columns?: string | null;
    content?: string | null;
    counterIncrement?: string | null;
    counterReset?: string | null;
    cssFloat?: string | null;
    cssText?: string;
    cursor?: string | null;
    direction?: string | null;
    display?: string | null;
    dominantBaseline?: string | null;
    emptyCells?: string | null;
    enableBackground?: string | null;
    fill?: string | null;
    fillOpacity?: string | null;
    fillRule?: string | null;
    filter?: string | null;
    flex?: string | null;
    flexBasis?: string | null;
    flexDirection?: string | null;
    flexFlow?: string | null;
    flexGrow?: string | null;
    flexShrink?: string | null;
    flexWrap?: string | null;
    floodColor?: string | null;
    floodOpacity?: string | null;
    font?: string | null;
    fontFamily?: string | null;
    fontFeatureSettings?: string | null;
    fontSize?: string | null;
    fontSizeAdjust?: string | null;
    fontStretch?: string | null;
    fontStyle?: string | null;
    fontVariant?: string | null;
    fontWeight?: string | null;
    gap?: string | null;
    glyphOrientationHorizontal?: string | null;
    glyphOrientationVertical?: string | null;
    grid?: string | null;
    gridArea?: string | null;
    gridAutoColumns?: string | null;
    gridAutoFlow?: string | null;
    gridAutoRows?: string | null;
    gridColumn?: string | null;
    gridColumnEnd?: string | null;
    gridColumnGap?: string | null;
    gridColumnStart?: string | null;
    gridGap?: string | null;
    gridRow?: string | null;
    gridRowEnd?: string | null;
    gridRowGap?: string | null;
    gridRowStart?: string | null;
    gridTemplate?: string | null;
    gridTemplateAreas?: string | null;
    gridTemplateColumns?: string | null;
    gridTemplateRows?: string | null;
    height?: string | null;
    imeMode?: string | null;
    justifyContent?: string | null;
    justifyItems?: string | null;
    justifySelf?: string | null;
    kerning?: string | null;
    layoutGrid?: string | null;
    layoutGridChar?: string | null;
    layoutGridLine?: string | null;
    layoutGridMode?: string | null;
    layoutGridType?: string | null;
    left?: string | null;
    readonly length?: number;
    letterSpacing?: string | null;
    lightingColor?: string | null;
    lineBreak?: string | null;
    lineHeight?: string | null;
    listStyle?: string | null;
    listStyleImage?: string | null;
    listStylePosition?: string | null;
    listStyleType?: string | null;
    margin?: string | null;
    marginBottom?: string | null;
    marginLeft?: string | null;
    marginRight?: string | null;
    marginTop?: string | null;
    marker?: string | null;
    markerEnd?: string | null;
    markerMid?: string | null;
    markerStart?: string | null;
    mask?: string | null;
    maskImage?: string | null;
    maxHeight?: string | null;
    maxWidth?: string | null;
    minHeight?: string | null;
    minWidth?: string | null;
    msContentZoomChaining?: string | null;
    msContentZoomLimit?: string | null;
    msContentZoomLimitMax?: any;
    msContentZoomLimitMin?: any;
    msContentZoomSnap?: string | null;
    msContentZoomSnapPoints?: string | null;
    msContentZoomSnapType?: string | null;
    msContentZooming?: string | null;
    msFlowFrom?: string | null;
    msFlowInto?: string | null;
    msFontFeatureSettings?: string | null;
    msGridColumn?: any;
    msGridColumnAlign?: string | null;
    msGridColumnSpan?: any;
    msGridColumns?: string | null;
    msGridRow?: any;
    msGridRowAlign?: string | null;
    msGridRowSpan?: any;
    msGridRows?: string | null;
    msHighContrastAdjust?: string | null;
    msHyphenateLimitChars?: string | null;
    msHyphenateLimitLines?: any;
    msHyphenateLimitZone?: any;
    msHyphens?: string | null;
    msImeAlign?: string | null;
    msOverflowStyle?: string | null;
    msScrollChaining?: string | null;
    msScrollLimit?: string | null;
    msScrollLimitXMax?: any;
    msScrollLimitXMin?: any;
    msScrollLimitYMax?: any;
    msScrollLimitYMin?: any;
    msScrollRails?: string | null;
    msScrollSnapPointsX?: string | null;
    msScrollSnapPointsY?: string | null;
    msScrollSnapType?: string | null;
    msScrollSnapX?: string | null;
    msScrollSnapY?: string | null;
    msScrollTranslation?: string | null;
    msTextCombineHorizontal?: string | null;
    msTextSizeAdjust?: any;
    msTouchAction?: string | null;
    msTouchSelect?: string | null;
    msUserSelect?: string | null;
    msWrapFlow?: string;
    msWrapMargin?: any;
    msWrapThrough?: string;
    objectFit?: string | null;
    objectPosition?: string | null;
    opacity?: string | null;
    order?: string | null;
    orphans?: string | null;
    outline?: string | null;
    outlineColor?: string | null;
    outlineOffset?: string | null;
    outlineStyle?: string | null;
    outlineWidth?: string | null;
    overflow?: string | null;
    overflowX?: string | null;
    overflowY?: string | null;
    padding?: string | null;
    paddingBottom?: string | null;
    paddingLeft?: string | null;
    paddingRight?: string | null;
    paddingTop?: string | null;
    pageBreakAfter?: string | null;
    pageBreakBefore?: string | null;
    pageBreakInside?: string | null;
    readonly parentRule?: CSSRule;
    penAction?: string | null;
    perspective?: string | null;
    perspectiveOrigin?: string | null;
    pointerEvents?: string | null;
    position?: string | null;
    quotes?: string | null;
    resize?: string | null;
    right?: string | null;
    rotate?: string | null;
    rowGap?: string | null;
    rubyAlign?: string | null;
    rubyOverhang?: string | null;
    rubyPosition?: string | null;
    scale?: string | null;
    stopColor?: string | null;
    stopOpacity?: string | null;
    stroke?: string | null;
    strokeDasharray?: string | null;
    strokeDashoffset?: string | null;
    strokeLinecap?: string | null;
    strokeLinejoin?: string | null;
    strokeMiterlimit?: string | null;
    strokeOpacity?: string | null;
    strokeWidth?: string | null;
    tableLayout?: string | null;
    textAlign?: string | null;
    textAlignLast?: string | null;
    textAnchor?: string | null;
    textCombineUpright?: string | null;
    textDecoration?: string | null;
    textIndent?: string | null;
    textJustify?: string | null;
    textKashida?: string | null;
    textKashidaSpace?: string | null;
    textOverflow?: string | null;
    textShadow?: string | null;
    textTransform?: string | null;
    textUnderlinePosition?: string | null;
    top?: string | null;
    touchAction?: string | null;
    transform?: string | null;
    transformOrigin?: string | null;
    transformStyle?: string | null;
    transition?: string | null;
    transitionDelay?: string | null;
    transitionDuration?: string | null;
    transitionProperty?: string | null;
    transitionTimingFunction?: string | null;
    translate?: string | null;
    unicodeBidi?: string | null;
    userSelect?: string | null;
    verticalAlign?: string | null;
    visibility?: string | null;
    webkitAlignContent?: string | null;
    webkitAlignItems?: string | null;
    webkitAlignSelf?: string | null;
    webkitAnimation?: string | null;
    webkitAnimationDelay?: string | null;
    webkitAnimationDirection?: string | null;
    webkitAnimationDuration?: string | null;
    webkitAnimationFillMode?: string | null;
    webkitAnimationIterationCount?: string | null;
    webkitAnimationName?: string | null;
    webkitAnimationPlayState?: string | null;
    webkitAnimationTimingFunction?: string | null;
    webkitAppearance?: string | null;
    webkitBackfaceVisibility?: string | null;
    webkitBackgroundClip?: string | null;
    webkitBackgroundOrigin?: string | null;
    webkitBackgroundSize?: string | null;
    webkitBorderBottomLeftRadius?: string | null;
    webkitBorderBottomRightRadius?: string | null;
    webkitBorderImage?: string | null;
    webkitBorderRadius?: string | null;
    webkitBorderTopLeftRadius?: string | null;
    webkitBorderTopRightRadius?: string | null;
    webkitBoxAlign?: string | null;
    webkitBoxDirection?: string | null;
    webkitBoxFlex?: string | null;
    webkitBoxOrdinalGroup?: string | null;
    webkitBoxOrient?: string | null;
    webkitBoxPack?: string | null;
    webkitBoxSizing?: string | null;
    webkitColumnBreakAfter?: string | null;
    webkitColumnBreakBefore?: string | null;
    webkitColumnBreakInside?: string | null;
    webkitColumnCount?: any;
    webkitColumnGap?: any;
    webkitColumnRule?: string | null;
    webkitColumnRuleColor?: any;
    webkitColumnRuleStyle?: string | null;
    webkitColumnRuleWidth?: any;
    webkitColumnSpan?: string | null;
    webkitColumnWidth?: any;
    webkitColumns?: string | null;
    webkitFilter?: string | null;
    webkitFlex?: string | null;
    webkitFlexBasis?: string | null;
    webkitFlexDirection?: string | null;
    webkitFlexFlow?: string | null;
    webkitFlexGrow?: string | null;
    webkitFlexShrink?: string | null;
    webkitFlexWrap?: string | null;
    webkitJustifyContent?: string | null;
    webkitOrder?: string | null;
    webkitPerspective?: string | null;
    webkitPerspectiveOrigin?: string | null;
    webkitTapHighlightColor?: string | null;
    webkitTextFillColor?: string | null;
    webkitTextSizeAdjust?: any;
    webkitTextStroke?: string | null;
    webkitTextStrokeColor?: string | null;
    webkitTextStrokeWidth?: string | null;
    webkitTransform?: string | null;
    webkitTransformOrigin?: string | null;
    webkitTransformStyle?: string | null;
    webkitTransition?: string | null;
    webkitTransitionDelay?: string | null;
    webkitTransitionDuration?: string | null;
    webkitTransitionProperty?: string | null;
    webkitTransitionTimingFunction?: string | null;
    webkitUserModify?: string | null;
    webkitUserSelect?: string | null;
    webkitWritingMode?: string | null;
    whiteSpace?: string | null;
    widows?: string | null;
    width?: string | null;
    wordBreak?: string | null;
    wordSpacing?: string | null;
    wordWrap?: string | null;
    writingMode?: string | null;
    zIndex?: string | null;
    zoom?: string | null;
}
