import { et, no } from "../lib/attatchToProto";

et("hide", function() {
  this.css("display", "none");
  return this;
})

et("show", function() {
  this.css("display", "block");
  return this;
})

et("height", {
  get() {
    return this.css("height")
  },
  set(to) {
    this.css("height", to)
  }
})

et("width", {
  get() {
    return this.css("width")
  },
  set(to) {
    this.css("width", to)
  }
})

et("offsetRight", function() {
    return this.offsetLeft + this.offsetWidth
})

et("offsetBottom", function() {
  return this.offsetTop + this.offsetHeight
})

et("absoluteOffset", function() {
  return this.getBoundingClientRect()
})

et("outerWidth", function() {
  return this.offsetWidth
})

et("outerHeight", function() {
  return this.offsetHeight
})

et("innerWidth", function() {
  return this.clientWidth
})


et("innerHeight", function() {
  return this.clientHeight
})


no("parent", function(justElements = false) {
  return justElements ? this.parentElement : this.parentNode
})


et("addClass", function(...className: string[]) {
  this.classList.add(...className);
  return this;
})

et("removeClass", function(...className: string[]) {
  this.classList.remove(...className);
  return this;
})

et("hasClass", function(...className: string[]) {
  let has = true;
  className.ea((cls) => {
    if (!this.classList.contains(cls)) has = false;
  });
  return has
})

et("toggleClass", function(...className: string[]) {
  className.ea((cls) => {
    if (this.hasClass(cls)) this.removeClass(cls);
    else this.addClass(cls);
  });
  return this
})
