import init from "../../app/src/edom";
import { Data } from "front-db"
import tweenSvgPath from "tween-svg-path"

let to = "M103.5 55.5C103.5 66 60.5 117 52.5 117C44.5 117 3.05176e-05 69 0 55.5C-3.05175e-05 42 27 -51.5 52.5 42C68.5 -47 103.5 36.4599 103.5 55.5Z"


init().then(() => {
  const elem: SVGPathElement = document.querySelector("#heart path")

  tweenSvgPath(elem, to)
})



