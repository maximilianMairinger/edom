// Just types
import { Data, DataBase } from "josm"
import { ElementList } from "./components/elementList"
import EasingCls from "waapi-easing"


export type VariableLibrary = {[key in string]: string | Data<string>} | DataBase
export type CancelFunction = () => void

export type SpeedyScrollAnimationOptions = {
  speed: number | {avg: number} | {begin: number} | {end: number}, 
  easing?: (n: number) => number, 
  cancelOnUserInput?: boolean
}

export type DurationScrollAnimationOptions = {
  duration: number
  easing?: (n: number) => number, 
  cancelOnUserInput?: boolean
}


export type ScrollAnimationOptions = SpeedyScrollAnimationOptions | DurationScrollAnimationOptions

type AbsoluteProgress = number
type RelativeProgress = number

export type GuidedScrollAnimationOptions = {
  speed: number | {avg: number} | {begin: number} | {end: number}, 
  easing?: (n: number) => number, 
  cancelOnUserInput?: boolean,
  guide: Data<AbsoluteProgress> 
} | {
  duration: number
  easing?: (n: number) => number, 
  cancelOnUserInput?: boolean,
  guide: Data<AbsoluteProgress>
} | {
  easing?: (n: number) => number, 
  cancelOnUserInput?: boolean,
  guide: Data<RelativeProgress>
}

export type Prim = string | number | boolean
export type PrimElem = Prim | Element
export type Activatable = { 
  activate(): void, 
  deactivate(): void, 
  active(): boolean
  active(active: boolean): void
}

export type ElementListOrElement = {
  [key in keyof Element]: keyof ElementList extends key ? ElementList[key] & Element[key] : Element[key]
} | Element

type EdomCustomElementEventMap = {
  resize: DOMRectReadOnly,
  scroll: HTMLElementEventMap["scroll"] & {velocity?: {x?: number, y?: number}, progress: {x: number, y: number}}
}
export type EdomCustomElementEventMapOptions<Options extends EventListenerOptions = AddEventListenerOptions> = {
  scroll: {direction?: "x" | "y" | "xy", velocity?: boolean, notifyOnAllChanges?: boolean}
} & {[key in keyof EdomElementEventMap]: Options | boolean}
export type EdomElementEventMap = Omit<HTMLElementEventMap, keyof EdomCustomElementEventMap> & EdomCustomElementEventMap

export type Token = string | string[]


export type cssProp = number | string
export type cssProps = cssProp[] | cssProp;


export type ReBaseArray<Base> = {
  [K in keyof Base]: Base[K][]
}

export type MakeAnimatable<Base> = Base & {offset?: number}

// ---------
// Transform
// ---------

export interface TransformPrimitives {
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

export type TransfromPrimitivesBaseArray = ReBaseArray<TransformPrimitives>


export interface TransformUmbrellas {
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

export type TransformUmbrellasBaseArray = ReBaseArray<TransformUmbrellas>


export type TransfromProperties = TransformUmbrellas & TransformPrimitives
export type TransfromPropertiesBaseArray = ReBaseArray<TransfromProperties>

export type AnimatableTransfromPropertyKeys = keyof TransfromProperties

export type AnimatableTransfromProperties = MakeAnimatable<Pick<TransfromProperties, AnimatableTransfromPropertyKeys>>
export type AnimatableTransfromPropertiesBaseArray = MakeAnimatable<Pick<TransfromPropertiesBaseArray, AnimatableTransfromPropertyKeys>>



// ---
// Css
// ---

export interface CssUmbrellas {
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

export type CssUmbrellasBaseArray = ReBaseArray<CssUmbrellas>



export interface CssPrimitives {
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
  layoutGridtype?: cssProp;
  left?: cssProp;
  letterSpacing?: cssProp;
  lightingColor?: string;
  lineBreak?: cssProp;
  lineClamp?: cssProp;
  lineHeight?: cssProp;
  listStyle?: cssProp;
  listStyleImage?: cssProp;
  listStylePosition?: cssProp;
  listStyletype?: cssProp;
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

export type CssPrimitivesBaseArray = ReBaseArray<CssPrimitives>


export type CssProperties = CssUmbrellas & CssPrimitives
export type CssPropertiesBaseArray = ReBaseArray<CssProperties>


export type AnimatableCssPropertyKeys = "backdropFilter" | "background" | "backgroundColor" | "backgroundPosition" | "backgroundSize" | "border" | "borderBottom" | "borderBottomColor" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomWidth" | "borderColor" | "borderEndEndRadius" | "borderEndStartRadius" | "borderImageOutset" | "borderImageSlice" | "borderImageWidth" | "borderLeft" | "borderLeftColor" | "borderLeftWidth" | "borderRadius" | "borderRight" | "borderRightColor" | "borderRightWidth" | "borderStartEndRadius" | "borderStartStartRadius" | "borderTop" | "borderTopColor" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopWidth" | "borderWidth" | "bottom" | "boxShadow" | "caretColor" | "clip" | "clipPath" | "color" | "columnCount" | "columnGap" | "columnRule" | "columnRuleColor" | "columnRuleWidth" | "columnWidth" | "columns" | "filter" | "flex" | "flexBasis" | "flexGrow" | "flexShrink" | "font" | "fontSize" | "fontSizeAdjust" | "fontStretch" | "fontVariationSettings" | "fontWeight" | "gap" | "gridColumnGap" | "gridGap" | "gridRowGap" | "gridTemplateColumns" | "gridTemplateRows" | "height" | "inset" | "insetBlock" | "insetBlockEnd" | "insetBlockStart" | "insetInline" | "insetInlineEnd" | "insetInlineStart" | "left" | "letterSpacing" | "lineClamp" | "lineHeight" | "margin" | "marginBottom" | "marginLeft" | "marginRight" | "marginTop" | "mask" | "maskBorder" | "maskPosition" | "maskSize" | "maxHeight" | "maxLines" | "maxWidth" | "minHeight" | "minWidth" | "objectPosition" | "cssOffset" | "offsetAnchor" | "offsetDistance" | "offsetPath" | "offsetPosition" | "offsetRotate" | "opacity" | "order" | "outline" | "outlineColor" | "outlineOffset" | "outlineWidth" | "padding" | "paddingBottom" | "paddingLeft" | "paddingRight" | "paddingTop" | "perspective" | "perspectiveOrigin" | "right" | "rowGap" | "scrollMargin" | "scrollMarginBlock" | "scrollMarginBlockEnd" | "scrollMarginBlockStart" | "scrollMarginBottom" | "scrollMarginInline" | "scrollMarginInlineEnd" | "scrollMarginInlineStart" | "scrollMarginLeft" | "scrollMarginRight" | "scrollMarginTop" | "scrollPadding" | "scrollPaddingBlock" | "scrollPaddingBlockEnd" | "scrollPaddingBlockStart" | "scrollPaddingBottom" | "scrollPaddingInline" | "scrollPaddingInlineEnd" | "scrollPaddingInlineStart" | "scrollPaddingLeft" | "scrollPaddingRight" | "scrollPaddingTop" | "scrollbarColor" | "shapeImageThreshold" | "shapeMargin" | "shapeOutside" | "tabSize" | "textDecoration" | "textDecorationColor" | "textDecorationThickness" | "textEmphasis" | "textEmphasisColor" | "textIndent" | "textShadow" | "textUnderlineOffset" | "top" | "transform" | "transformOrigin" | "verticalAlign" | "visibility" | "width" | "wordSpacing" | "zIndex" | "zoom"

export type AnimatableCssProperties = MakeAnimatable<Pick<CssProperties, AnimatableCssPropertyKeys>>
export type AnimatableCssPropertiesBaseArray = MakeAnimatable<Pick<CssPropertiesBaseArray, AnimatableCssPropertyKeys>>

// ----------
// Attributes
// ----------


export interface AttributeProperties {
  d?: string;
}

export type AttributePropertiesBaseArray = ReBaseArray<AttributeProperties>

export type AnimatableAttributePropertyKeys = keyof AttributeProperties


export type AnimatableAttributeProperties = MakeAnimatable<Pick<AttributeProperties, AnimatableAttributePropertyKeys>>
export type AnimatableAttributePropertiesBaseArray = MakeAnimatable<Pick<AttributePropertiesBaseArray, AnimatableAttributePropertyKeys>>


// ----------
// Css variables
// ----------

export type CssVariablesProperties = {
  [key in `--${string}`]: string
}

export type CssVariablesPropertiesBaseArray = ReBaseArray<CssVariablesProperties>

// export type AnimatableCssVariablesPropertyKeys = keyof CssVariablesProperties
export type AnimatableCssVariablesPropertyKeys = never

export type AnimatableCssVariablesProperties = MakeAnimatable<Pick<CssVariablesProperties, AnimatableCssVariablesPropertyKeys>>
export type AnimatableCssVariablesPropertiesBaseArray = MakeAnimatable<Pick<CssVariablesPropertiesBaseArray, AnimatableCssVariablesPropertyKeys>>


// ----------
// Combination
// ----------


export type AllProperties = TransfromProperties & CssProperties & AttributeProperties & CssVariablesProperties

export type AllPropertiesBaseArray = TransfromPropertiesBaseArray & CssPropertiesBaseArray & AttributePropertiesBaseArray & CssVariablesPropertiesBaseArray

export type AnimatableAllProperties = AnimatableTransfromProperties & AnimatableCssProperties & AnimatableAttributeProperties & AnimatableCssVariablesProperties

export type AnimatableAllPropertiesBaseArray = AnimatableTransfromPropertiesBaseArray & AnimatableCssPropertiesBaseArray & AnimatableAttributePropertiesBaseArray & AnimatableCssVariablesPropertiesBaseArray




// ------------------------------------ \\
// Declaration done; Now Implementation \\
// ------------------------------------ \\




export type easingKeyWordCamelCase = "linear" | "ease" | "easeIn" | "easeOut" | "easeInOut"
export type easingKeyWordDashCase  = "linear" | "ease" | "ease-in" | "ease-out" | "ease-in-out"
export type easingKeyWord = easingKeyWordCamelCase | easingKeyWordDashCase

export interface AnimationOptions  {
	//default inc number
	readonly name?: string;
	//default ease / easeInOut
  readonly easing?: EasingCls | easingKeyWord
  //default 1
	readonly iterations?: number
}

export interface UnguidedAnimationOptions extends AnimationOptions {
	//default 200
	readonly duration?: number
	//default true
	readonly fill?: boolean
}

export interface GuidedAnimationOptions extends AnimationOptions {
  //default 0
	start?: number | Data<number>
	//default start + 100
	end?: number | Data<number>
	//default false | true
	readonly smooth?: boolean
	//default N/A
	outCb?: (() => void) | string
	//default N/A
	inCb?: (() => void) | string
	//default true
	readonly active?: Data<boolean>;
}



export type AnimationKeyframes = AnimatableAllProperties | AnimatableAllProperties[] | AnimatableAllPropertiesBaseArray
export type GuidedAnimationKeyframes = AnimatableAllProperties | AnimatableAllProperties[] | AnimatableAllPropertiesBaseArray


export {}
