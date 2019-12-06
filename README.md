# Edom

Edom (extended-dom) is an utility library, with the aim to make many common dom manipulation processes easier. This includes simple enhancements similar to jqueries `addClass(...cls)` or `on(ev, func)` and an complex animation framework, with an api similar to WAAPIs `Element.animate(...)`. 


## Example

The following examples are just displaying the various aspects of edom. For the full implementation details please view the [API](#API).

### General dom manipulation

```js
elem.addClass("class1", "class2")
elem.removeClass("class1")
```

Some properties get suffixed with their default unit (px, deg...) automatically. This rule generally applies to mothods of edom manipulating css properties (so `css()` and `anim()`). `css()` removes this suffix by default again when getting a property, though this can be disabled with a flag (`true`).

```js
elem.css("width", 100)
let width = elem.css("width")                   //  100
let widthAsString = elem.css("width", true)     // "100px"
```

### Method Chaining

All edom methods **not** getting a value, return this as default. Thus they are chainable.

```js
elem.toggleClass("class2").show().on("click", (e) => {
  console.log("clicked")
})
```

### ElementList

ElementList is an Interface exposing the **whole** Element API (including the edom API). 

```js
let ls = elem.childs(".hasThisClass")

ls.setAttribute("attr", "val")

ls.remove(...someElements)
  .off(someListener)
```

ElementList is an extention of `Array`, thus the native Array API is available to manipulate the List. 

```js
ls.pop();
ls.push(...otherElem.childs("div.hasAnotherClass"))
ls.forEach((e, i) => {
  e.html = "Element " + i
})

let span = document.createElement("span").css("color", "red")
span.inner = "Element RED"

ls[5].inner = span
```

Edom has [xrray](https://www.npmjs.com/package/xrray) as dependency, a utility library in its usecase similiar to edom just for Arrays instead of the dom. Its API is also available in ElementList. For more detils please visit the [documentation](https://www.npmjs.com/package/xrray#readme).

```js
ls.remove(someElement)

await ls.ea(async (e, i) => {
  e.content = await fetchContentForContent(i)
})
```

All getter functions (edom or native) return an array of the returned statements with to the ElementList matching indexes.

```js
ls.getAttribute("attr")                                // ["foo", "bar", ...]
```

Further, additional to **all** `has...()` functions (part of edom or native) on Element get additional `contains...()` and `excludes...()` functions. Contains returns true when all elements of the List match whatever `...` is, and excludes true when none do so.

```js
ls.containsClass("cls1", "cls2")                      // true / false
ls.excludesPointerCapture(event.pointerId)            // true / false
ls.hasAttribute("attr")                               // [true, false, ...]
```

### Animation

The animation framework relies on the WAAPI engine everywhere possible. It provides a abstraction layer to make the WAAPI work as it should with (a lot of) bells and whistles.

#### Keyframe declaration

Similar to the WAAPI animation can be given as object literals in one of the following fashions.

 <!-- > Note: that as a difference to the WAAPI implementation the first frame gets calculated as the current style of the element. Allowing to process single keyframe literals as "animate element from current style to the given one". This is generally the case even when multiple keyframes are present. To disable this, manually set the offset of the first keyfeame to 0. -->

This example animates from the  current position to `top: "100px"` 

```js
await elem.anim({top: 100})
```

Note that the *from* frame gets calculated by default as the current style of the element. To disable this set the offset of the first frame manually to 0 (only possible with the following syntax).

```js
await elem.anim([
  // default calculation {left: 0, top: 0}
  {left: 100, top: 100},
  {left: 100, top: 200},
  {left: 300, top: 300}
])

await elem.anim([
  {left: 100, top: 100, offset: 0},
  {left: 100, top: 200, offset: .7},
  {left: 300, top: 300}
])
```
This syntax does not support offset declaration

```js
await elem.anim({
  top: [100, 200, 300],
  left: [100, 100, 300]
})
```

#### Options

Edom animations support options as second argument similar to the WAAPI. 

```js
await elem.anim({top: 100}, {
  name: "animation-*",
  easing: "ease",
  duration: 200,
  iteration: 1,
  fill: "both",
})
```

All options have as wildely as possible applicable defaults (with an focus on UX design). The obove given options are the defaults.

You may wonder about the `name` option. This is used in the developer tools as indecator of the percentage of the animation.




### Transition seperation

## Concept

Comming soon (why not a wrapper like jquery)

## Installation



## API

Comming soon



## Polyfill

