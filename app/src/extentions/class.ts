import ae from "../lib/attatchToProto";

ae("addClass", function(...className: string[]) {
  this.classList.add(...className);
  return this;
})

ae("removeClass", function(...className: string[]) {
  this.classList.remove(...className);
  return this;
})

ae("hasClass", function(...className: string[]) {
  let has = true;
  className.ea((cls) => {
    if (!this.classList.contains(cls)) has = false;
  });
  return has
})

ae("toggleClass", function(...className: string[]) {
  className.ea((cls) => {
    if (this.hasClass(cls)) this.removeClass(cls);
    else this.addClass(cls);
  });
  return this
})
