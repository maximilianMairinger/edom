import ae from "../lib/attatchToProto"
import { Tel } from "../edom"

ae(["listener", "listen", "ls"], function(event?: any, listener?: any, patch?: boolean) {
  return new Tel(this, event, listener, patch)
})
