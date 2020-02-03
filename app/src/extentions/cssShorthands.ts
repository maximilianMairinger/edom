import ae from "../lib/attatchToProto";

ae("hide", function() {
  this.css("display", "none");
  return this;
})

ae("show", function() {
  this.css("display", "block");
  return this;
})

ae("height", {
  get() {
    return this.css("height")
  },
  set(to) {
    this.css("height", to)
  }
})

ae("width", {
  get() {
    return this.css("width")
  },
  set(to) {
    this.css("width", to)
  }
})

ae("offsetRight", function() {
    return this.offsetLeft + this.offsetWidth
})

ae("offsetBottom", function() {
  return this.offsetTop + this.offsetHeight
})

ae("absoluteOffset", function() {
  return this.getBoundingClientRect()
})

ae("outerWidth", function() {
  return this.offsetWidth
})

ae("outerHeight", function() {
  return this.offsetHeight
})

ae("innerWidth", function() {
  return this.clientWidth
})


ae("innerHeight", function() {
  return this.clientHeight
})


ae("parent", function() {
  return this.parentElement
})

