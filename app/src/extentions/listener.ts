import { et } from "../lib/attatchToProto"
import { Tel } from "./../components/tel"

et(["listener", "listen", "ls"], function(event?: any, listener?: any, patch?: boolean) {
  console.warn("EventTarget#listener is deprecated and will be removed in edom@4.0.0. Please migrate to EventTarget#on.")
  return new Tel(this, event, listener, patch)
})

