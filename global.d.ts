declare let global: any;

// -------- edom start

interface CssFunction {
	(key: string, preventAutoParsing: false): string;
	(key: string, preventAutoParsing: true): number;
	(key: string, preventAutoParsing?: boolean): any;
	(key: string, val: string | number): void;
	(css: CSSStyleMap): void;
}

interface DragEvent {
	setData(data);
	getData();
}

interface AnimationOptions {
  duration?: number,
  iterations?: number,
  easing?: string,
  fill?: boolean,
}

interface DragEvent {
	getData(): any;
	setData(data: any): void;
}

declare class NodeLs<T extends EventTarget = EventTarget> extends Array<T> {
	constructor(...nodes: T[])
	/**
	 * Animates this element using the waapi (https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
	 * @param frame the state this element should become on finish (simular to jquery.animate)
	 * @param options options altering the development (ger: Ablauf) of the animation | following options are available: {duration; iteration; easing; fill}
	 */
	anim(frame: object, options?: AnimationOptions): Promise<void>;
	/**
	 * addEventListener alias
	 */
	on<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
	/**
	 * removeEventListener alias
	 */
	off<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
	/**
	 * JQuery like implementation
	 */
	css: CssFunction
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
	apd(...elems: Array<HTMLElement | string | number | boolean>): this;
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
	childs(selector?: string | number): NodeLs<HTMLElement>;
	/**
	 * alias for innerHTML
	 */
	html: string;
	inner: string | number | boolean | HTMLElement | Array<HTMLElement | boolean | string | number>;
}

interface HTMLElement {
	readonly eventListener: Function[];
  /**
   * Animates this element using the waapi (https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
   * @param frame the state this element should become on finish (simular to jquery.animate)
	 * @param options options altering the development (ger: Ablauf) of the animation | following options are available: {duration; iteration; easing; fill}
   */
	anim(frame_frames: CSSStyleMap | CSSStyleMap[], options?: AnimationOptions): Promise<void>;


	listener<K extends keyof HTMLElementEventMap>(event: K, listener?: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, patch?: boolean): any;
	listen<K extends keyof HTMLElementEventMap>(event: K, listener?: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, patch?: boolean): any;
	ls<K extends keyof HTMLElementEventMap>(event: K, listener?: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, patch?: boolean): any;

	insertAfter(newNode: HTMLElement, referenceNode: HTMLElement): this;

	/**
	 * addEventListener alias
 	 */
	on<K extends keyof HTMLElementEventMap>(type: K, listener: Function, options?: boolean | AddEventListenerOptions): void;
	/**
	 * removeEventListener alias
	 * TODO: corect types
 	 */
	off<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
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
	childs(selector?: string | number): NodeLs<any>;
	/**
	 * Computed height of elem
 	 */
	height: number;
	/**
	 * Computed width of elem
 	 */
	width: number;
	/**
	 * offset of elem (relative to the parent)
 	 */
	readonly offset: {width: number, height: number, top: number, left: number};
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

interface Object {
  cloneData: <T = any>() => T;
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
}

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
