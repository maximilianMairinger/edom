import init, { ElementList, EventListener } from "../../app/src/edom"
import { Data } from "josm"
import animFrame from "animation-frame-delta"

let from = "path('M105 55C105 85.3757 85.3757 110 55 110C24.6243 110 0 85.3757 0 55C0 24.6243 24.6243 0 55 0C85.3757 0 105 24.6243 105 55Z')"
let to = "M103.5 55.5C103.5 66 60.5 117 52.5 117C44.5 117 3.05176e-05 69 0 55.5C-3.05175e-05 42 27 -51.5 52.5 42C68.5 -47 103.5 36.4599 103.5 55.5Z"



let scrollData = new Data(2)
scrollData.get(console.log, false)




let ls: Array<Element>







init().then(() => {
  console.log("init");
  const elem = document.childs("#txt") 
  
  // window.scrollData().get(console.log)
  // window.scrollEvent(300, () => {console.log("over")}, () => {console.log("back")})
  console.log("wind")
  window.on("scroll", (e) => {
    let o = {x: window.scrollX, y: window.scrollY}
    console.log(o)
    elem.text(JSON.stringify(o), false)
  })

  let dur = 1000
  let max = 50
  setTimeout(() => {
    console.log("scroll??")
    //@ts-ignore
    window.scroll(100, {speed: 100, easing: e => e, cancelOnUserInput: false})
    // setTimeout(() => {
    //   //@ts-ignore
    //   window.scroll(0)
    // }, 900)
  }, 1000)

  
    
})


