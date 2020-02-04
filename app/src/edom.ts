import Xrray from "xrray"
Xrray(Array)


export { init as polyfill } from "./lib/polyfill"
import { init as polyfill } from "./lib/polyfill"
export default polyfill

export * from "./components/elementList"
export * from "./components/tel"



import "./extentions/childs"
import "./extentions/class"
import "./extentions/cssShorthands"
import "./extentions/htmlText"
import "./extentions/insertAfter"
import "./extentions/listener"
import "./extentions/onOff"
import "./extentions/styleManipulation"







// ----------------------------------- \\
// ----------------------------------- \\
// ----------------------------------- \\
// -------------- Types -------------- \\
// ----------------------------------- \\
// ----------------------------------- \\
// ----------------------------------- \\


// Imports
type Data<T = any> = import("front-db").Data<T>
type EasingCls = import("waapi-easing").Easing
type ElementList<T extends EventTarget = EventTarget> = import("./components/elementList").ElementList<T>



type cssProp = number | string
type cssProps = cssProp[] | cssProp;


type ReBaseArray<Base> = {
  [K in keyof Base]: Base[K][]
}

type MakeAnimatable<Base> = Base & {offset?: number}

// ---------
// Transform
// ---------

interface TransformPrimitives {
  rotateX?: cssProp
  rotateY?: cssProp
  rotateZ?: cssProp

  scaleX?: cssProp
  scaleY?: cssProp
  scaleZ?: cssProp

  translateX?: cssProp
  translateY?: cssProp
  translateZ?: cssProp

  skewX?: cssProp
  skewY?: cssProp

  perspective?: cssProp
}

type TransfromPrimitivesBaseArray = ReBaseArray<TransformPrimitives>


interface TransformUmbrellas {
  rotate?: cssProps
  rotate3d?: cssProps
  scale?: cssProps
  scale3d?: cssProps
  translate?: cssProps
  translate3d?: cssProps
  skew?: cssProps
  matrix?: cssProps
  matrix3d?: cssProps
}

type TransformUmbrellasBaseArray = ReBaseArray<TransformUmbrellas>


type TransfromProperties = TransformUmbrellas & TransformPrimitives
type TransfromPropertiesBaseArray = ReBaseArray<TransfromProperties>

type AnimatableTransfromPropertyKeys = keyof TransfromProperties

type AnimatableTransfromProperties = MakeAnimatable<Pick<TransfromProperties, AnimatableTransfromPropertyKeys>>
type AnimatableTransfromPropertiesBaseArray = MakeAnimatable<Pick<TransfromPropertiesBaseArray, AnimatableTransfromPropertyKeys>>



// ---
// Css
// ---

interface CssUmbrellas {
  background?: cssProps;
  border?: cssProps;
  borderLeft?: cssProps;
  borderBottom?: cssProps;
  borderRight?: cssProps;
  borderTop?: cssProps;
  boxShadow?: cssProps;
  cssOffset?: cssProps;
  fontVariationSettings?: cssProps;
  inset?: cssProps;
  insetBlock?: cssProps;
  insetInline?: cssProps;
  margin?: cssProps;
  maskBorder?: cssProps;
  maskPosition?: cssProps;
  maskSize?: cssProps;
  maxLines?: cssProps;
  offsetAnchor?: cssProps;
  offsetPosition?: cssProps;
  offsetRotate?: cssProps;
  padding?: cssProps;
  scrollMargin?: cssProps;
  scrollMarginBlock?: cssProps;
  scrollMarginInline?: cssProps;
  scrollPadding?: cssProps;
  scrollPaddingBlock?: cssProps;
  scrollPaddingInline?: cssProps;
  scrollbarColor?: cssProps;
  textDecoration?: cssProps;
  textEmphasis?: cssProps;
  textIndent?: cssProps;
  textShadow?: cssProps;
}

type CssUmbrellasBaseArray = ReBaseArray<CssUmbrellas>



interface CssPrimitives {
  alignContent?: cssProp;
  alignItems?: cssProp;
  alignSelf?: cssProp;
  alignmentBaseline?: cssProp;
  animation?: cssProp;
  animationDelay?: cssProp;
  animationDirection?: cssProp;
  animationDuration?: cssProp;
  animationFillMode?: cssProp;
  animationIterationCount?: cssProp;
  animationName?: cssProp;
  animationPlayState?: cssProp;
  animationTimingFunction?: cssProp;
  backdropFilter?: string;
  backfaceVisibility?: cssProp;
  backgroundAttachment?: cssProp;
  backgroundClip?: cssProp;
  backgroundColor?: string;
  backgroundImage?: cssProp;
  backgroundOrigin?: cssProp;
  backgroundPosition?: cssProp;
  backgroundPositionX?: cssProp;
  backgroundPositionY?: cssProp;
  backgroundRepeat?: cssProp;
  backgroundSize?: cssProp;
  baselineShift?: cssProp;
  borderBottomColor?: string;
  borderBottomLeftRadius?: cssProp;
  borderBottomRightRadius?: cssProp;
  borderBottomStyle?: cssProp;
  borderBottomWidth?: cssProp;
  borderCollapse?: cssProp;
  borderColor?: string;
  borderEndEndRadius?: cssProp;
  borderEndStartRadius?: cssProps;
  borderStartEndRadius?: cssProps;
  borderStartStartRadius?: cssProps;
  borderImage?: cssProp;
  borderImageOutset?: cssProp;
  borderImageRepeat?: cssProp;
  borderImageSlice?: cssProp;
  borderImageSource?: cssProp;
  borderImageWidth?: cssProp;
  borderLeftColor?: string;
  borderLeftStyle?: cssProp;
  borderLeftWidth?: cssProp;
  borderRadius?: cssProp;
  borderRightColor?: string;
  borderRightStyle?: cssProp;
  borderRightWidth?: cssProp;
  borderSpacing?: cssProp;
  borderStyle?: cssProp;
  borderTopColor?: string;
  borderTopLeftRadius?: cssProp;
  borderTopRightRadius?: cssProp;
  borderTopStyle?: cssProp;
  borderTopWidth?: cssProp;
  borderWidth?: cssProp;
  bottom?: cssProp;
  boxSizing?: cssProp;
  breakAfter?: cssProp;
  breakBefore?: cssProp;
  breakInside?: cssProp;
  captionSide?: cssProp;
  caretColor?: string;
  clear?: cssProp;
  clip?: cssProp;
  clipPath?: cssProp;
  clipRule?: cssProp;
  color?: string;
  colorInterpolationFilters?: string;
  columnCount?: cssProp;
  columnFill?: cssProp;
  columnGap?: cssProp;
  columnRule?: cssProp;
  columnRuleColor?: string;
  columnRuleStyle?: cssProp;
  columnRuleWidth?: cssProp;
  columnSpan?: cssProp;
  columnWidth?: cssProp;
  columns?: cssProp;
  content?: cssProp;
  counterIncrement?: cssProp;
  counterReset?: cssProp;
  cssFloat?: cssProp;
  cssText?: cssProp;
  cursor?: cssProp;
  direction?: cssProp;
  display?: cssProp;
  dominantBaseline?: cssProp;
  emptyCells?: cssProp;
  enableBackground?: cssProp;
  fill?: cssProp;
  fillOpacity?: cssProp;
  fillRule?: cssProp;
  filter?: cssProp;
  flex?: cssProp;
  flexBasis?: cssProp;
  flexDirection?: cssProp;
  flexFlow?: cssProp;
  flexGrow?: cssProp;
  flexShrink?: cssProp;
  flexWrap?: cssProp;
  floodColor?: string;
  floodOpacity?: cssProp;
  font?: cssProp;
  fontFamily?: cssProp;
  fontFeatureSettings?: cssProp;
  fontSize?: cssProp;
  fontSizeAdjust?: cssProp;
  fontStretch?: cssProp;
  fontStyle?: cssProp;
  fontVariant?: cssProp;
  fontWeight?: cssProp;
  gap?: cssProp;
  glyphOrientationHorizontal?: cssProp;
  glyphOrientationVertical?: cssProp;
  grid?: cssProp;
  gridArea?: cssProp;
  gridAutoColumns?: cssProp;
  gridAutoFlow?: cssProp;
  gridAutoRows?: cssProp;
  gridColumn?: cssProp;
  gridColumnEnd?: cssProp;
  gridColumnGap?: cssProp;
  gridColumnStart?: cssProp;
  gridGap?: cssProp;
  gridRow?: cssProp;
  gridRowEnd?: cssProp;
  gridRowGap?: cssProp;
  gridRowStart?: cssProp;
  gridTemplate?: cssProp;
  gridTemplateAreas?: cssProp;
  gridTemplateColumns?: cssProp;
  gridTemplateRows?: cssProp;
  height?: cssProp;
  imeMode?: cssProp;
  insetBlockEnd?: cssProp;
  insetBlockStart?: cssProp;
  insetInlineEnd?: cssProp;
  insetInlineStart?: cssProp;
  justifyContent?: cssProp;
  justifyItems?: cssProp;
  justifySelf?: cssProp;
  kerning?: cssProp;
  layoutGrid?: cssProp;
  layoutGridChar?: cssProp;
  layoutGridLine?: cssProp;
  layoutGridMode?: cssProp;
  layoutGridType?: cssProp;
  left?: cssProp;
  letterSpacing?: cssProp;
  lightingColor?: string;
  lineBreak?: cssProp;
  lineClamp?: cssProp;
  lineHeight?: cssProp;
  listStyle?: cssProp;
  listStyleImage?: cssProp;
  listStylePosition?: cssProp;
  listStyleType?: cssProp;
  marginBottom?: cssProp;
  marginLeft?: cssProp;
  marginRight?: cssProp;
  marginTop?: cssProp;
  marker?: cssProp;
  markerEnd?: cssProp;
  markerMid?: cssProp;
  markerStart?: cssProp;
  mask?: cssProp;
  maskImage?: cssProp;
  maxHeight?: cssProp;
  maxWidth?: cssProp;
  minHeight?: cssProp;
  minWidth?: cssProp;
  objectFit?: cssProp;
  objectPosition?: cssProp;
  offsetDistance?: cssProp;
  offsetPath?: string;
  opacity?: cssProp;
  order?: cssProp;
  orphans?: cssProp;
  outline?: cssProp;
  outlineColor?: string;
  outlineOffset?: cssProp;
  outlineStyle?: cssProp;
  outlineWidth?: cssProp;
  overflow?: cssProp;
  overflowX?: cssProp;
  overflowY?: cssProp;
  paddingBottom?: cssProp;
  paddingLeft?: cssProp;
  paddingRight?: cssProp;
  paddingTop?: cssProp;
  pageBreakAfter?: cssProp;
  pageBreakBefore?: cssProp;
  pageBreakInside?: cssProp;
  penAction?: cssProp;
  perspective?: cssProp;
  perspectiveOrigin?: cssProp;
  pointerEvents?: cssProp;
  position?: cssProp;
  quotes?: cssProp;
  resize?: cssProp;
  right?: cssProp;
  rowGap?: cssProp;
  rubyAlign?: cssProp;
  rubyOverhang?: cssProp;
  rubyPosition?: cssProp;
  scrollMarginBlockEnd?: cssProp;
  scrollMarginBlockStart?: cssProp;
  scrollMarginBottom?: cssProp;
  scrollMarginInlineEnd?: cssProp;
  scrollMarginInlineStart?: cssProp;
  scrollMarginLeft?: cssProp;
  scrollMarginRight?: cssProp;
  scrollMarginTop?: cssProp;
  scrollPaddingBlockEnd?: cssProp;
  scrollPaddingBlockStart?: cssProp;
  scrollPaddingBottom?: cssProp;
  scrollPaddingInlineEnd?: cssProp;
  scrollPaddingInlineStart?: cssProp;
  scrollPaddingLeft?: cssProp;
  scrollPaddingRight?: cssProp;
  scrollPaddingTop?: cssProp;
  shapeImageThreshold?: cssProp;
  shapeMargin?: cssProp;
  shapeOutside?: cssProp;
  stopColor?: string;
  stopOpacity?: cssProp;
  stroke?: cssProp;
  strokeDasharray?: cssProp;
  strokeDashoffset?: cssProp;
  strokeLinecap?: cssProp;
  strokeLinejoin?: cssProp;
  strokeMiterlimit?: cssProp;
  strokeOpacity?: cssProp;
  strokeWidth?: cssProp;
  tableLayout?: cssProp;
  tabSize?: cssProp;
  textAlign?: cssProp;
  textAlignLast?: cssProp;
  textAnchor?: cssProp;
  textCombineUpright?: cssProp;
  textDecorationColor?: string;
  textDecorationThickness?: cssProp;
  textEmphasisColor?: cssProp;
  textUnderlineOffset?: cssProp;
  textJustify?: cssProp;
  textKashida?: cssProp;
  textKashidaSpace?: cssProp;
  textOverflow?: cssProp;
  textTransform?: cssProp;
  textUnderlinePosition?: cssProp;
  top?: cssProp;
  touchAction?: cssProp;
  transform?: cssProp;
  transformOrigin?: cssProp;
  transformStyle?: cssProp;
  transition?: cssProp;
  transitionDelay?: cssProp;
  transitionDuration?: cssProp;
  transitionProperty?: cssProp;
  transitionTimingFunction?: cssProp;
  unicodeBidi?: cssProp;
  userSelect?: cssProp;
  verticalAlign?: cssProp;
  visibility?: cssProp;
  whiteSpace?: cssProp;
  widows?: cssProp;
  width?: cssProp;
  wordBreak?: cssProp;
  wordSpacing?: cssProp;
  wordWrap?: any;
  writingMode?: cssProp;
  zIndex?: cssProp;
  zoom?: cssProp;
}

type CssPrimitivesBaseArray = ReBaseArray<CssPrimitives>


type CssProperties = CssUmbrellas & CssPrimitives
type CssPropertiesBaseArray = ReBaseArray<CssProperties>


type AnimatableCssPropertyKeys = "backdropFilter" | "background" | "backgroundColor" | "backgroundPosition" | "backgroundSize" | "border" | "borderBottom" | "borderBottomColor" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomWidth" | "borderColor" | "borderEndEndRadius" | "borderEndStartRadius" | "borderImageOutset" | "borderImageSlice" | "borderImageWidth" | "borderLeft" | "borderLeftColor" | "borderLeftWidth" | "borderRadius" | "borderRight" | "borderRightColor" | "borderRightWidth" | "borderStartEndRadius" | "borderStartStartRadius" | "borderTop" | "borderTopColor" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopWidth" | "borderWidth" | "bottom" | "boxShadow" | "caretColor" | "clip" | "clipPath" | "color" | "columnCount" | "columnGap" | "columnRule" | "columnRuleColor" | "columnRuleWidth" | "columnWidth" | "columns" | "filter" | "flex" | "flexBasis" | "flexGrow" | "flexShrink" | "font" | "fontSize" | "fontSizeAdjust" | "fontStretch" | "fontVariationSettings" | "fontWeight" | "gap" | "gridColumnGap" | "gridGap" | "gridRowGap" | "gridTemplateColumns" | "gridTemplateRows" | "height" | "inset" | "insetBlock" | "insetBlockEnd" | "insetBlockStart" | "insetInline" | "insetInlineEnd" | "insetInlineStart" | "left" | "letterSpacing" | "lineClamp" | "lineHeight" | "margin" | "marginBottom" | "marginLeft" | "marginRight" | "marginTop" | "mask" | "maskBorder" | "maskPosition" | "maskSize" | "maxHeight" | "maxLines" | "maxWidth" | "minHeight" | "minWidth" | "objectPosition" | "cssOffset" | "offsetAnchor" | "offsetDistance" | "offsetPath" | "offsetPosition" | "offsetRotate" | "opacity" | "order" | "outline" | "outlineColor" | "outlineOffset" | "outlineWidth" | "padding" | "paddingBottom" | "paddingLeft" | "paddingRight" | "paddingTop" | "perspective" | "perspectiveOrigin" | "right" | "rowGap" | "scrollMargin" | "scrollMarginBlock" | "scrollMarginBlockEnd" | "scrollMarginBlockStart" | "scrollMarginBottom" | "scrollMarginInline" | "scrollMarginInlineEnd" | "scrollMarginInlineStart" | "scrollMarginLeft" | "scrollMarginRight" | "scrollMarginTop" | "scrollPadding" | "scrollPaddingBlock" | "scrollPaddingBlockEnd" | "scrollPaddingBlockStart" | "scrollPaddingBottom" | "scrollPaddingInline" | "scrollPaddingInlineEnd" | "scrollPaddingInlineStart" | "scrollPaddingLeft" | "scrollPaddingRight" | "scrollPaddingTop" | "scrollbarColor" | "shapeImageThreshold" | "shapeMargin" | "shapeOutside" | "tabSize" | "textDecoration" | "textDecorationColor" | "textDecorationThickness" | "textEmphasis" | "textEmphasisColor" | "textIndent" | "textShadow" | "textUnderlineOffset" | "top" | "transform" | "transformOrigin" | "verticalAlign" | "visibility" | "width" | "wordSpacing" | "zIndex" | "zoom"

type AnimatableCssProperties = MakeAnimatable<Pick<CssProperties, AnimatableCssPropertyKeys>>
type AnimatableCssPropertiesBaseArray = MakeAnimatable<Pick<CssPropertiesBaseArray, AnimatableCssPropertyKeys>>

// ----------
// Attributes
// ----------


interface AttributeProperties {
  d?: string;
}

type AttributePropertiesBaseArray = ReBaseArray<AttributeProperties>

type AnimatableAttributePropertyKeys = keyof AttributeProperties


type AnimatableAttributeProperties = MakeAnimatable<Pick<AttributeProperties, AnimatableAttributePropertyKeys>>
type AnimatableAttributePropertiesBaseArray = MakeAnimatable<Pick<AttributePropertiesBaseArray, AnimatableAttributePropertyKeys>>


// ----------
// Combination
// ----------


type AllProperties = TransfromProperties & CssProperties & AttributeProperties

type AllPropertiesBaseArray = TransfromPropertiesBaseArray & CssPropertiesBaseArray & AttributePropertiesBaseArray

type AnimatableAllProperties = AnimatableTransfromProperties & AnimatableCssProperties & AnimatableAttributeProperties

type AnimatableAllPropertiesBaseArray = AnimatableTransfromPropertiesBaseArray & AnimatableCssPropertiesBaseArray & AnimatableAttributePropertiesBaseArray




// ------------------------------------ \\
// Declaration done; Now Implementation \\
// ------------------------------------ \\





interface CssFunction {
	<CssKey extends keyof AllProperties>(cssKey: CssKey, preventAutoParsing: false): string;
	<cssKey extends keyof AllProperties>(cssKey: cssKey, preventAutoParsing: true): number;
	<cssKey extends keyof AllProperties>(cssKey: cssKey, preventAutoParsing?: boolean): any;
	<cssKey extends keyof AllProperties>(cssKey: cssKey, value: AllProperties[cssKey]): this;
	(css: AllProperties): this;
}

type easingKeyWordCamelCase = "linear" | "ease" | "easeIn" | "easeOut" | "easeInOut"
type easingKeyWordDashCase  = "linear" | "ease" | "ease-in" | "ease-out" | "ease-in-out"
type easingKeyWord = easingKeyWordCamelCase | easingKeyWordDashCase

interface AnimationOptions  {
	//default inc number
	readonly name?: string;
	//default ease / easeInOut
  readonly easing?: EasingCls | easingKeyWord
  //default 1
	readonly iterations?: number
}

interface UnguidedAnimationOptions extends AnimationOptions {
	//default 200
	readonly duration?: number
	//default true
	readonly fill?: boolean
}

interface GuidedAnimationOptions extends AnimationOptions {
  //default 0
	start?: number
	//default start + 100
	end?: number
	//default false | true
	readonly smooth?: boolean
	//default N/A
	outCb?: (() => void) | string
	//default N/A
	inCb?: (() => void) | string
	//default true
	readonly active?: Data<boolean>;
}

declare global {
  interface EventTarget {
    listener<K extends keyof HTMLElementEventMap>(event: K, listener?: (this: Element, ev: HTMLElementEventMap[K]) => any, patch?: boolean): any;
    listen<K extends keyof HTMLElementEventMap>(event: K, listener?: (this: Element, ev: HTMLElementEventMap[K]) => any, patch?: boolean): any;
    ls<K extends keyof HTMLElementEventMap>(event: K, listener?: (this: Element, ev: HTMLElementEventMap[K]) => any, patch?: boolean): any;
  
    insertAfter(newNode: Element, referenceNode: Element): this;
  
    /**
     * addEventListener alias
      */
    on<K extends keyof HTMLElementEventMap>(type: K, listener: (this: Element, ev: HTMLElementEventMap[K]) => void, options?: boolean | AddEventListenerOptions): this;
    /**
     * removeEventListener alias
     * TODO: corect types
      */
    off<K extends keyof HTMLElementEventMap>(type: K, listener: (this: Element, ev: HTMLElementEventMap[K]) => void, options?: boolean | AddEventListenerOptions): this;
    /**
     * JQuery like implementation
      */
    css: CssFunction;
    /**
     * Adds cssClass
      */
    addClass(...className: string[]): this;
    /**
     * Removes cssClass
      */
    removeClass(...className: string[]): this;
    //JQuerylike
    hasClass(...classNames: string[]): boolean;
    //JQuerylike
    toggleClass(...classNames: string[]): this;
  
    /**
     * Appends given elems
      */
    apd(...elems: (Element | string)[]): this;
    /**
     * Empties the node so that no elements are inside
      */
    emptyNodes(): this;
    /**
     * Hides elem
      */
    hide(): this;
    /**
     * Shows elem
      */
    show(): this;
    /**
     * Gets children matching given css-selector or all as deep as depth is
     * @param selector css-selector filter of depth how far down all children shall be collected as number (defaults to 1)
      */
    childs(selector?: string | number): ElementList<any>;
    /**
     * Computed height of elem
      */
    height(to: number): this
    height(): number
    /**
     * Computed width of elem
     */
    width(to: number): this
    width(): number


    /**
     * alias for innerHTML
     */
    html(): string;
    html(...to: (string | number | boolean | Element)[]): this;
    

    /**
     * offset of elem (relative to the parent)
      */
    offset(): {width: number, height: number, top: number, left: number};
    /**
     * absulute offset of elem (relative to the chrome)
     * wont work with floating elements
     */
    absoluteOffset(): {width: number, height: number, top: number, left: number};
    /**
     * Width including padding and border
      */
    outerWidth(): number
    /**
     * Height including padding and border
     */
    outerHeight(): number
    /**
     * Width including padding
     */
    innerWidth(): number
    /**
     * Height including padding
     */
    innerHeight(): number
    /**
     * ParentNode Element
     */
    parent(): Element
  }


  interface Element {
    anim(frames: AnimationKeyframes, duration?: number): Promise<void>;
    anim(frames: AnimationKeyframes, options?: UnguidedAnimationOptions): Promise<void>;
    anim(frames: GuidedAnimationKeyframes, options: GuidedAnimationOptions, guidance: Data<number>): void
  }

  interface DragEvent {
    getData(): any;
    setData(data: any): void;
  }
}


type AnimationKeyframes = AnimatableAllProperties | AnimatableAllProperties[] | AnimatableAllPropertiesBaseArray
type GuidedAnimationKeyframes = AnimatableAllProperties | AnimatableAllProperties[] | AnimatableAllPropertiesBaseArray
