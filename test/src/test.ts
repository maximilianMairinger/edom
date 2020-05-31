import init, { ElementList } from "../../app/src/edom"
import { Data } from "josm"

let from = "path('M105 55C105 85.3757 85.3757 110 55 110C24.6243 110 0 85.3757 0 55C0 24.6243 24.6243 0 55 0C85.3757 0 105 24.6243 105 55Z')"
let to = "M103.5 55.5C103.5 66 60.5 117 52.5 117C44.5 117 3.05176e-05 69 0 55.5C-3.05175e-05 42 27 -51.5 52.5 42C68.5 -47 103.5 36.4599 103.5 55.5Z"

console.log("init");

let scrollData = new Data(2)

const mainElem = document.querySelector("#main")
const elem = document.querySelector("#test") as HTMLElement

init().then(() => {
  setTimeout(async () => {

    await elem.anim({opacity: 0})
    // await elem.anim({rotateZ: 360}, {iterations: Infinity, duration: 1000})

  }, 500)
})



