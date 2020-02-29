import { at } from "../lib/attatchToProto";

// TODO: data support

at("html", {
  get() {
    return this.innerHTML;
  },
  set(to: string | number | boolean) {
    this.innerHTML = to;
  }
})

at("text", {
  get() {
    return this.innerText;
  },
  set(to: string | number | boolean) {
    this.innerText = to;
  }
})

