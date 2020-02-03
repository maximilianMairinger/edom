import { at } from "../lib/attatchToProto";

// TODO: data support

at("html", {
  get() {
    return this.innerHTML;
  },
  set(to: string) {
    this.innerHTML = to;
  }
})
