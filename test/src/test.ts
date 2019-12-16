import init from "../../app/src/edom";
import { Data } from "front-db"
import tweenSvgPath from "tween-svg-path"

import * as pathData from "path-data"

const normalize = require('normalize-svg-path');

let from = "M 22,30 A 20,20 0,0,1 50,30 A 20,20 0,0,1 90,30 Q 90,60 50,90 Q 10,60 10,30 z"
let to = "M 10,30 A 20,20 0,0,1 50,30 A 20,20 0,0,1 90,30 Q 90,60 50,90 Q 10,60 10,30 z"

debugger
console.log(from, normalize(from))
debugger
console.log(to, normalize(to))


init().then(() => {
  const elem: SVGPathElement = document.querySelector("#heart path")

                     "M 10,30 A 20,20 0,0,1 50,30 A 20,20 0,0,1 90,30 Q 90,60 50,90 Q 10,60 10,30 z"
                     debugger
  tweenSvgPath(elem, "M 30,30 A 20,20 0,0,1 50,30 A 20,20 0,0,1 90,30 Q 90,60 50,90 Q 10,60 10,30 z")
})



