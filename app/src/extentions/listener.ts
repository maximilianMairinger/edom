import { at } from "../lib/attatchToProto"
import { Tel } from "../edom"

at(["listener", "listen", "ls"], function(event?: any, listener?: any, patch?: boolean) {
  return new Tel(this, event, listener, patch)
})
