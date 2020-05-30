import { at, an } from "../lib/attatchToProto";

at("hide", function() {
  this.css("display", "none");
  return this;
})

at("show", function() {
  this.css("display", "block");
  return this;
})

at("height", {
  get() {
    return this.css("height")
  },
  set(to) {
    this.css("height", to)
  }
})

at("width", {
  get() {
    return this.css("width")
  },
  set(to) {
    this.css("width", to)
  }
})

at("offsetRight", function() {
    return this.offsetLeft + this.offsetWidth
})

at("offsetBottom", function() {
  return this.offsetTop + this.offsetHeight
})

at("absoluteOffset", function() {
  return this.getBoundingClientRect()
})

at("outerWidth", function() {
  return this.offsetWidth
})

at("outerHeight", function() {
  return this.offsetHeight
})

at("innerWidth", function() {
  return this.clientWidth
})


at("innerHeight", function() {
  return this.clientHeight
})


an("parent", function() {
  return this.parentElement
})

