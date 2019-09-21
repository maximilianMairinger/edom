// -------- edom start

type NodeLs<T extends EventTarget = EventTarget> = import("./edom").NodeLs<T>

interface CSSStyleMap {
    alignContent?: any;
    alignItems?: any;
    alignSelf?: any;
    alignmentBaseline?: any;
    animation?: any;
    animationDelay?: any;
    animationDirection?: any;
    animationDuration?: any;
    animationFillMode?: any;
    animationIterationCount?: any;
    animationName?: any;
    animationPlayState?: any;
    animationTimingFunction?: any;
    backfaceVisibility?: any;
    background?: any;
    backgroundAttachment?: any;
    backgroundClip?: any;
    backgroundColor?: any;
    backgroundImage?: any;
    backgroundOrigin?: any;
    backgroundPosition?: any;
    backgroundPositionX?: any;
    backgroundPositionY?: any;
    backgroundRepeat?: any;
    backgroundSize?: any;
    baselineShift?: any;
    border?: any;
    borderBottom?: any;
    borderBottomColor?: any;
    borderBottomLeftRadius?: any;
    borderBottomRightRadius?: any;
    borderBottomStyle?: any;
    borderBottomWidth?: any;
    borderCollapse?: any;
    borderColor?: any;
    borderImage?: any;
    borderImageOutset?: any;
    borderImageRepeat?: any;
    borderImageSlice?: any;
    borderImageSource?: any;
    borderImageWidth?: any;
    borderLeft?: any;
    borderLeftColor?: any;
    borderLeftStyle?: any;
    borderLeftWidth?: any;
    borderRadius?: any;
    borderRight?: any;
    borderRightColor?: any;
    borderRightStyle?: any;
    borderRightWidth?: any;
    borderSpacing?: any;
    borderStyle?: any;
    borderTop?: any;
    borderTopColor?: any;
    borderTopLeftRadius?: any;
    borderTopRightRadius?: any;
    borderTopStyle?: any;
    borderTopWidth?: any;
    borderWidth?: any;
    bottom?: any;
    boxShadow?: any;
    boxSizing?: any;
    breakAfter?: any;
    breakBefore?: any;
    breakInside?: any;
    captionSide?: any;
    clear?: any;
    clip?: any;
    clipPath?: any;
    clipRule?: any;
    color?: any;
    colorInterpolationFilters?: any;
    columnCount?: any;
    columnFill?: any;
    columnGap?: any;
    columnRule?: any;
    columnRuleColor?: any;
    columnRuleStyle?: any;
    columnRuleWidth?: any;
    columnSpan?: any;
    columnWidth?: any;
    columns?: any;
    content?: any;
    counterIncrement?: any;
    counterReset?: any;
    cssFloat?: any;
    cssText?: string;
    cursor?: any;
    direction?: any;
    display?: any;
    dominantBaseline?: any;
    emptyCells?: any;
    enableBackground?: any;
    fill?: any;
    fillOpacity?: any;
    fillRule?: any;
    filter?: any;
    flex?: any;
    flexBasis?: any;
    flexDirection?: any;
    flexFlow?: any;
    flexGrow?: any;
    flexShrink?: any;
    flexWrap?: any;
    floodColor?: any;
    floodOpacity?: any;
    font?: any;
    fontFamily?: any;
    fontFeatureSettings?: any;
    fontSize?: any;
    fontSizeAdjust?: any;
    fontStretch?: any;
    fontStyle?: any;
    fontVariant?: any;
    fontWeight?: any;
    gap?: any;
    glyphOrientationHorizontal?: any;
    glyphOrientationVertical?: any;
    grid?: any;
    gridArea?: any;
    gridAutoColumns?: any;
    gridAutoFlow?: any;
    gridAutoRows?: any;
    gridColumn?: any;
    gridColumnEnd?: any;
    gridColumnGap?: any;
    gridColumnStart?: any;
    gridGap?: any;
    gridRow?: any;
    gridRowEnd?: any;
    gridRowGap?: any;
    gridRowStart?: any;
    gridTemplate?: any;
    gridTemplateAreas?: any;
    gridTemplateColumns?: any;
    gridTemplateRows?: any;
    height?: any;
    imeMode?: any;
    justifyContent?: any;
    justifyItems?: any;
    justifySelf?: any;
    kerning?: any;
    layoutGrid?: any;
    layoutGridChar?: any;
    layoutGridLine?: any;
    layoutGridMode?: any;
    layoutGridType?: any;
    left?: any;
    readonly length?: number;
    letterSpacing?: any;
    lightingColor?: any;
    lineBreak?: any;
    lineHeight?: any;
    listStyle?: any;
    listStyleImage?: any;
    listStylePosition?: any;
    listStyleType?: any;
    margin?: any;
    marginBottom?: any;
    marginLeft?: any;
    marginRight?: any;
    marginTop?: any;
    marker?: any;
    markerEnd?: any;
    markerMid?: any;
    markerStart?: any;
    mask?: any;
    maskImage?: any;
    maxHeight?: any;
    maxWidth?: any;
    minHeight?: any;
    minWidth?: any;
    msContentZoomChaining?: any;
    msContentZoomLimit?: any;
    msContentZoomLimitMax?: any;
    msContentZoomLimitMin?: any;
    msContentZoomSnap?: any;
    msContentZoomSnapPoints?: any;
    msContentZoomSnapType?: any;
    msContentZooming?: any;
    msFlowFrom?: any;
    msFlowInto?: any;
    msFontFeatureSettings?: any;
    msGridColumn?: any;
    msGridColumnAlign?: any;
    msGridColumnSpan?: any;
    msGridColumns?: any;
    msGridRow?: any;
    msGridRowAlign?: any;
    msGridRowSpan?: any;
    msGridRows?: any;
    msHighContrastAdjust?: any;
    msHyphenateLimitChars?: any;
    msHyphenateLimitLines?: any;
    msHyphenateLimitZone?: any;
    msHyphens?: any;
    msImeAlign?: any;
    msOverflowStyle?: any;
    msScrollChaining?: any;
    msScrollLimit?: any;
    msScrollLimitXMax?: any;
    msScrollLimitXMin?: any;
    msScrollLimitYMax?: any;
    msScrollLimitYMin?: any;
    msScrollRails?: any;
    msScrollSnapPointsX?: any;
    msScrollSnapPointsY?: any;
    msScrollSnapType?: any;
    msScrollSnapX?: any;
    msScrollSnapY?: any;
    msScrollTranslation?: any;
    msTextCombineHorizontal?: any;
    msTextSizeAdjust?: any;
    msTouchAction?: any;
    msTouchSelect?: any;
    msUserSelect?: any;
    msWrapFlow?: string;
    msWrapMargin?: any;
    msWrapThrough?: string;
    objectFit?: any;
    objectPosition?: any;
    opacity?: any;
    order?: any;
    orphans?: any;
    outline?: any;
    outlineColor?: any;
    outlineOffset?: any;
    outlineStyle?: any;
    outlineWidth?: any;
    overflow?: any;
    overflowX?: any;
    overflowY?: any;
    padding?: any;
    paddingBottom?: any;
    paddingLeft?: any;
    paddingRight?: any;
    paddingTop?: any;
    pageBreakAfter?: any;
    pageBreakBefore?: any;
    pageBreakInside?: any;
    readonly parentRule?: CSSRule;
    penAction?: any;
    perspective?: any;
    perspectiveOrigin?: any;
    pointerEvents?: any;
    position?: any;
    quotes?: any;
    resize?: any;
    right?: any;
    rotate?: any;
    rowGap?: any;
    rubyAlign?: any;
    rubyOverhang?: any;
    rubyPosition?: any;
    scale?: any;
    stopColor?: any;
    stopOpacity?: any;
    stroke?: any;
    strokeDasharray?: any;
    strokeDashoffset?: any;
    strokeLinecap?: any;
    strokeLinejoin?: any;
    strokeMiterlimit?: any;
    strokeOpacity?: any;
    strokeWidth?: any;
    tableLayout?: any;
    textAlign?: any;
    textAlignLast?: any;
    textAnchor?: any;
    textCombineUpright?: any;
    textDecoration?: any;
    textIndent?: any;
    textJustify?: any;
    textKashida?: any;
    textKashidaSpace?: any;
    textOverflow?: any;
    textShadow?: any;
    textTransform?: any;
    textUnderlinePosition?: any;
    top?: any;
    touchAction?: any;
    transform?: any;
    transformOrigin?: any;
    transformStyle?: any;
    transition?: any;
    transitionDelay?: any;
    transitionDuration?: any;
    transitionProperty?: any;
    transitionTimingFunction?: any;
    translate?: any;
    unicodeBidi?: any;
    userSelect?: any;
    verticalAlign?: any;
    visibility?: any;
    webkitAlignContent?: any;
    webkitAlignItems?: any;
    webkitAlignSelf?: any;
    webkitAnimation?: any;
    webkitAnimationDelay?: any;
    webkitAnimationDirection?: any;
    webkitAnimationDuration?: any;
    webkitAnimationFillMode?: any;
    webkitAnimationIterationCount?: any;
    webkitAnimationName?: any;
    webkitAnimationPlayState?: any;
    webkitAnimationTimingFunction?: any;
    webkitAppearance?: any;
    webkitBackfaceVisibility?: any;
    webkitBackgroundClip?: any;
    webkitBackgroundOrigin?: any;
    webkitBackgroundSize?: any;
    webkitBorderBottomLeftRadius?: any;
    webkitBorderBottomRightRadius?: any;
    webkitBorderImage?: any;
    webkitBorderRadius?: any;
    webkitBorderTopLeftRadius?: any;
    webkitBorderTopRightRadius?: any;
    webkitBoxAlign?: any;
    webkitBoxDirection?: any;
    webkitBoxFlex?: any;
    webkitBoxOrdinalGroup?: any;
    webkitBoxOrient?: any;
    webkitBoxPack?: any;
    webkitBoxSizing?: any;
    webkitColumnBreakAfter?: any;
    webkitColumnBreakBefore?: any;
    webkitColumnBreakInside?: any;
    webkitColumnCount?: any;
    webkitColumnGap?: any;
    webkitColumnRule?: any;
    webkitColumnRuleColor?: any;
    webkitColumnRuleStyle?: any;
    webkitColumnRuleWidth?: any;
    webkitColumnSpan?: any;
    webkitColumnWidth?: any;
    webkitColumns?: any;
    webkitFilter?: any;
    webkitFlex?: any;
    webkitFlexBasis?: any;
    webkitFlexDirection?: any;
    webkitFlexFlow?: any;
    webkitFlexGrow?: any;
    webkitFlexShrink?: any;
    webkitFlexWrap?: any;
    webkitJustifyContent?: any;
    webkitOrder?: any;
    webkitPerspective?: any;
    webkitPerspectiveOrigin?: any;
    webkitTapHighlightColor?: any;
    webkitTextFillColor?: any;
    webkitTextSizeAdjust?: any;
    webkitTextStroke?: any;
    webkitTextStrokeColor?: any;
    webkitTextStrokeWidth?: any;
    webkitTransform?: any;
    webkitTransformOrigin?: any;
    webkitTransformStyle?: any;
    webkitTransition?: any;
    webkitTransitionDelay?: any;
    webkitTransitionDuration?: any;
    webkitTransitionProperty?: any;
    webkitTransitionTimingFunction?: any;
    webkitUserModify?: any;
    webkitUserSelect?: any;
    webkitWritingMode?: any;
    whiteSpace?: any;
    widows?: any;
    width?: any;
    wordBreak?: any;
    wordSpacing?: any;
    wordWrap?: any;
    writingMode?: any;
    zIndex?: any;
    zoom?: any;
}

interface CssFunction {
	(key: string, preventAutoParsing: false): string;
	(key: string, preventAutoParsing: true): number;
	(key: string, preventAutoParsing?: boolean): any;
	(key: string, val: string | number): this;
	(css: CSSStyleMap): this;
}

interface DragEvent {
	setData(data: any): void;
	getData(): void;
}

interface UnguidedAnimationOptions {
  duration?: number,
  iterations?: number,
  easing?: string,
  fill?: boolean,
}

interface GuidedAnimationOptions {
	start?: number;
	end?: number;
	guidance: GenericData<number>;
  smooth?: boolean
}

declare class GenericData<T = any> {
    constructor(val: T);
    /**
     * Set the val
     */
    /**
    * Gets the current val
    */
    val: T;
    /**
     * Subscribe to val
     * @param cb callback which gets called whenever the val changes
     */
    subscribe(cb: (val: T) => any, init?: boolean): void;
    unsubscribe(cb: (val: T) => any | null): void;
    toString(tabIn?: number, insideArray?: boolean): string;
    /**
     * Compares if all keys in this are equal to the equivelent ones on data
     * Different Data Instances holding the same value are the equal
     * Data can have more keys than this and still be equal.
     * If you dont want this pass in true to the strict param. This will be more recource intensive
     */
    equals(data: GenericData<T>, strict?: boolean): boolean;
    clone(): GenericData<T>;
}


interface DragEvent {
	getData(): any;
	setData(data: any): void;
}

interface EventTarget {
	readonly eventListener: Function[];
	/**
	 * Animates this element
	 * @param frame the state this element should become on finish (simular to jquery.animate)
	 * @param options options altering the development (ger: Ablauf) of the animation | following options are available: {duration; iteration; easing; fill}
	 */
	anim(frame_frames: object | object[], options?: UnguidedAnimationOptions): Promise<void>;
	/**
	 * Animates this element
	 * @param frame the state this element should become on finish (simular to jquery.animate)
	 * @param options options altering the development (ger: Ablauf) of the animation | following options are available: {duration; iteration; easing; fill}
	 */
	anim(frame_frames: object | object[], options?: UnguidedAnimationOptions, guided?: false): Promise<void>;
	/**
	 * Animates this element
	 * @param frame the state this element should become on finish (simular to jquery.animate)
	 * @param options options altering the development (ger: Ablauf) of the animation | following options are available: {duration; iteration; easing; fill}
	 */
	anim(frame_frames: object | object[], options?: GuidedAnimationOptions, guided?: true): void;


	listener<K extends keyof HTMLElementEventMap>(event: K, listener?: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, patch?: boolean): any;
	listen<K extends keyof HTMLElementEventMap>(event: K, listener?: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, patch?: boolean): any;
	ls<K extends keyof HTMLElementEventMap>(event: K, listener?: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, patch?: boolean): any;

	insertAfter(newNode: HTMLElement, referenceNode: HTMLElement): this;

	/**
	 * addEventListener alias
 	 */
	on<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): this;
	/**
	 * removeEventListener alias
	 * TODO: corect types
 	 */
	off<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): this;
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
	apd(...elems: Array<HTMLElement | string>): this;
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
   childs<T extends HTMLElement>(selector?: string | number): NodeLs<T>;
	/**
	 * Computed height of elem
 	 */
	height: number;
	/**
	 * Computed width of elem
 	 */
	width: number;
  readonly offsetRight: number;
  readonly offsetBottom: number;
	/**
	 * absulute offset of elem (relative to the chrome)
	 * wont work with floating elements
	 */
	readonly absoluteOffset: {width: number, height: number, top: number, bottom: number, left: number, right: number, x: number, y: number}
	/**
	 * Width including padding and border
 	 */
	readonly outerWidth: number;
	/**
	 * Height including padding and border
 	 */
	readonly outerHeight: number;
	/**
	 * Width including padding
 	 */
	readonly innerWidth: number;
	/**
	 * Height including padding
 	 */
	readonly innerHeight: number;
	/**
	 * ParentNode node
 	 */
	readonly parent: this;
	/**
	 * alias for innerHTML
 	 */
	html: string;			//just string acceped since just string gets returned
	inner: string | number | boolean | HTMLElement | Array<HTMLElement | boolean | string | number>;
}

// -------- edom end

//------------- XRRAY start

interface Array<T> extends Object {
	/**
	 * True if empty
	 */
	readonly empty: boolean;
	/**
	 * Last element
	 */
	readonly last: T;
	/**
	 * First element
	 */
	readonly first: T;
	/**
	 * length without empty slots
	 */
	readonly realLength: number;
	/**
	 * Clears the array of all elements
	 */
	clear(): T[];
	/**
	 * Clears the array of all elements
	 * The inital array stays unchanged; a new one gets inited;
	 */
	Clear(): T[];
	/**
	 * Adds values to the array
	 */
	add(...value: T[]): T[];
	/**
	 * Adds values to the array
	 * The inital array stays unchanged; a new one gets inited;
	 */
	Add(...value: T[]): T[];
	/**
	 * Sets the array to the given one without chnaging the refernece
	 */
	set(array: T[] | T[]): T[];
	/**
	 * Sets the array to the given one without chnaging the refernece
	 * The inital array stays unchanged; a new one gets inited;
	 */
	Set(array: T[] | T[]): T[];
	/**
	 * Iterates over all own properties
	 * awaits any promises
	 * when !== undefined gets returned => the the loop stopts and the returned val gets returned
	 */
	ea<R>(loop: (e?: any, i?: number, ...args: any) => R, thisArg?: any): R;
	/**
	 * Iterates over all own properties
	 * awaits any promises
	 * when !== undefined gets returned => the the loop stopts and the returned val gets returned
	 */
	each<R>(loop: (e?: any, i?: number, ...args: any) => R, thisArg?: any): R;
	/**
	 * Reverts the array
	 * The inital array stays unchanged; a new one gets inited;
	 */
	Reverse(): T[];
	/**
	 * Gets all indexes that match the given values
	 */
	index(...values: T[]): number[];
	/**
	 * Cleans the array of all nulls and undefineds
	 */
	clean(): T[];
	/**
	 * clones
	 */
	clone(): T[];
	/**
	 * Cleans the array of all nulls and undefineds
	 * The inital array stays unchanged; a new one gets inited;
	 */
	Clean(): T[];
	/**
	 * Removes given indexes
	 */
	removeI(...index: number[]): T[];
	/**
	 * Removes given indexes
	 */
	rmI(...index: number[]): T[];
	/**
	 * Removes given indexes
	 * The inital array stays unchanged; a new one gets inited;
	 */
	RemoveI(...index: number[]): T[];
	/**
	 * Removes given indexes
	 * The inital array stays unchanged; a new one gets inited;
	 */
	RmI(...index: number[]): T[];
	/**
	 * Removes given values
	 */
	removeV(...value: T[]): T[];
	/**
	 * Removes given values
	 */
	rmV(...value: T[]): T[];
	/**
	 * Removes given values
	 * The inital array stays unchanged; a new one gets inited;
	 */
	RemoveV(...value: T[]): T[];
	/**
	 * Removes given values
	 * The inital array stays unchanged; a new one gets inited;
	 */
	RmV(...value: T[]): T[];
	/**
	 * The inital array stays unchanged; a new one gets inited;
	 */
	remove(...valueOrIndex: T[] | number[]): T[];
	/**
	 * The inital array stays unchanged; a new one gets inited;
	 */
	rm(...valueOrIndex: T[] | number[]): T[];
	/**
	 * Removes given values / indexes
	 * The inital array stays unchanged; a new one gets inited;
	 */
	Remove(...valueOrIndex: T[] | number[]): T[];
	/**
	 * Removes given values / indexes
	 * The inital array stays unchanged; a new one gets inited;
	 */
	Rm(...valueOrIndex: T[] | number[]): T[];
	/**
	 * Sets the array to given indexes
	 */
	get(...index: number[]): T[];
	/**
	 * Sets the array to given indexes
	 * The inital array stays unchanged; a new one gets inited;
	 */
	Get(...index: number[]): T[];
	/**
	 * Adds given values to the end of the array
	 */
	dda(...value: T[]): T[];
	/**
	 * Adds given values to the end of the array
	 * The inital array stays unchanged; a new one gets inited;
	 */
	Dda(...value: T[]): T[];
	/**
	 * Removes given number of elements from the end of the array
	 */
	rem(amount: number): T[];
	/**
	 * Removes given number of elements from the end of the array
	 * The inital array stays unchanged; a new one gets inited;
	 */
	Rem(amount: number): T[];
	/**
	 * The inital array stays unchanged; a new one gets inited;
	 */
	mer(amount: number): T[];
	/**
	 * Removes given number of elements from the begin of the array
	 * The inital array stays unchanged; a new one gets inited;
	 */
	Mer(amount: number): T[];
	/**
	 * Swaps the two given indexes; the two parameters must have equal length
	 */
	swapI(i1: number, i2: number): T[];
	/**
	 * Swaps the two given indexes; the two parameters must have equal length
	 * The inital array stays unchanged; a new one gets inited;
	 */
	SwapI(i1: number | number[], i2: number | number[]): T[];
	/**
	 * Swaps the two given values; the two parameters must have equal length
	 */
	swapV(v1: T | T[], v2: T | T[]): T[];
	/**
	 * Swaps the two given values; the two parameters must have equal length
	 * The inital array stays unchanged; a new one gets inited;
	 */
	SwapV(v1: T | T[], v2: T | T[]): T[];
	/**
	 * Swaps the two given indexes or values; the two parameters must have equal length
	 */
	swap(vi1: number | number[] | T | T[], vi2: number | number[] | T | T[]): T[];
	/**
	 * Swaps the two given indexes or values; the two parameters must have equal length
	 * The inital array stays unchanged; a new one gets inited;
	 */
	Swap(vi1: number | number[] | T | T[], vi2: number | number[] | T | T[]): T[];
	/**
	 * Like default flat
	 * The inital array stays unchanged; a new one gets inited;
	 */
	Flat(ammount?: number): T[]
	 /**
 	 * Add elements a to array but only if they are not already present
 	 */
 	gather(...a: T[]): this;
 	/**
 	 * Add elements a to array but only if they are not already present
 	 * The inital array stays unchanged; a new one gets inited;
 	 */
 	Gather(...a: T[]): T[];
	/**
	 * Gets the element prior of that given as index
	 * If the prior index would be -1 the last one is returned
	 */
	prior(index: number, by?: number): T;
	/**
	 * Gets the element next of that given as index
	 * If the next index would be length the first one is returned
	 */
	 next(index: number, by?: number): T;
   /**
 	 * Inject item at index
 	 */
   inject(item: T, index: number): this
   /**
	 * True if all given vals are included within this
	 */
  contains(...vals: T[]): boolean
  /**
	 * True if non of the given vals are included within this
	 */
	excludes(...vals: T[]): boolean
}

interface IndexOutOfBoundsException extends Exception {
	index: number;
	array: any[];
}

interface InvalidInputException extends Exception {

}

interface InvalidConstructorException extends Exception {

}

interface InvalidValueException extends Exception {
	value: any;
	array: any[];
}

interface Exception extends Error {
	message: string;
}
//------------- XRRAY end
