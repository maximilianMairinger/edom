import { at } from "../lib/attatchToProto";

at("addClass", function(...className: string[]) {
  this.classList.add(...className);
  return this;
})

at("removeClass", function(...className: string[]) {
  this.classList.remove(...className);
  return this;
})

at("hasClass", function(...className: string[]) {
  let has = true;
  className.ea((cls) => {
    if (!this.classList.contains(cls)) has = false;
  });
  return has
})

at("toggleClass", function(...className: string[]) {
  className.ea((cls) => {
    if (this.hasClass(cls)) this.removeClass(cls);
    else this.addClass(cls);
  });
  return this
})
