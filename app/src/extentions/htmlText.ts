import ae from "../lib/attatchToProto";

// TODO: data support

ae("html", {
  get() {
    return this.innerHTML;
  },
  set(to: string) {
    this.innerHTML = to;
  }
})
