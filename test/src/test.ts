import init from "../../app/src/edom";
import { Data } from "front-db"
import tweenSvgPath from "tween-svg-path"

let from = "path('M105 55C105 85.3757 85.3757 110 55 110C24.6243 110 0 85.3757 0 55C0 24.6243 24.6243 0 55 0C85.3757 0 105 24.6243 105 55Z')"
let to = "M103.5 55.5C103.5 66 60.5 117 52.5 117C44.5 117 3.05176e-05 69 0 55.5C-3.05175e-05 42 27 -51.5 52.5 42C68.5 -47 103.5 36.4599 103.5 55.5Z"

console.log("init");

let scrollData = new Data(2)



init().then(() => {
  window.on("scroll", () => {
        
    let t = window.scrollY;

    scrollData.val = t
  });
  

  console.log("go")
  const elem: SVGPathElement = document.querySelector("#heart path")

  // tweenSvgPath(elem, to)

  //@ts-ignore
  //elem.anim({d: to}, {duration: 1000})

  elem.style
  //@ts-ignore
  //elem.anim({d: to}, {end: 1000, duration: 1000, easing: "linear", smooth: true}, scrollData)
  debugger
  //@ts-ignore
  //document.querySelector("#test" ).anim({translate: [[500, 200], [0, 200]]}, {duration: 1000})
  document.querySelector("#test" ).anim({translateX: [[100, 50], [200, 200]]}, {duration: 1000})
  //document.querySelector("#test2").anim({marginLeft: 500})


  // elem.animate([
  //   {d: from},
  //   {d: to}
  // ], {duration: 1000})
})



