import init, { CancelFunction, ElementList, EventListener } from "../../app/src/edom"
import { Data } from "josm"
import animFrame, { nextFrame, now, stats } from "animation-frame-delta"
import Easing from "waapi-easing"

let from = "path('M105 55C105 85.3757 85.3757 110 55 110C24.6243 110 0 85.3757 0 55C0 24.6243 24.6243 0 55 0C85.3757 0 105 24.6243 105 55Z')"
let to = "M103.5 55.5C103.5 66 60.5 117 52.5 117C44.5 117 3.05176e-05 69 0 55.5C-3.05175e-05 42 27 -51.5 52.5 42C68.5 -47 103.5 36.4599 103.5 55.5Z"



let scrollData = new Data(2)
scrollData.get(console.log, false)




let ls: Array<Element>







init().then(() => {
  // console.log("init");
  const el = document.childs("#txt") as HTMLElement;
  
  // // window.scrollData().get(console.log)
  // // window.scrollEvent(300, () => {console.log("over")}, () => {console.log("back")})


  // // window.on("scroll", (e) => {
  // //   let o = {x: window.scrollX, y: window.scrollY}
  // //   console.log(o)
  // //   el.text(JSON.stringify(o), false)
  // // })

  



  

  


  // //to: number | {x?: number, y?: number} | ScrollToOptions, animateOptions_y?: number | ScrollAnimationOptions, dontTriggerScrollEvent: boolean = true

  
  //@ts-ignore
  // window.scroll(200, {speed: 1000, easing: new Easing("easeOut").function, cancelOnUserInput: true})



  // window.on("scroll", (e) => {
  //   e.velocity.y
  //   nextFrame(() => {
  //     nextFrame(() => {
        
  //     })
  //   })
  // }, {notifyOnAllChanges: true, velocity: true})


  // abhängig
  // buttons (opacity)
  // contentLoader
  // scrollSnap

  // scrollen können
  // User
  //    TouchPad
  //    Wheel
  //    Touch
  // Buttons
  // contentLoader
  // Snap


  window.addEventListener("scroll", (e) => {
    e.preventDefault()
    document.documentElement.scrollTop = 100
    
    
  }, {capture: true, passive: false})


//   const user = ((elem: EventTarget) => {
//     const user = {
//       wheeling: false,
//       touching: false
//     }

//     elem.on("wheel", () => {
//       user.wheeling = true
//     })
//     elem.on("touchstart", () => {
//       user.touching = true
//     })
//     new EventListener(elem, ["touchend", "touchcancel"], () => {
//       user.touching = false
//     })
//     return user
//   })(window as any as EventTarget)

  

//   let lastVel = 0
//   let lastSign: number

//   let guide: Data<number>
//   let cancel: CancelFunction
//   let f = Symbol()
//   window.on("scroll", (e) => {
//     // console.log("a")
//     const vel = Math.abs(e.velocity.y)
//     if (lastVel > vel) {
//       if (user.touching || user.wheeling) {
//         if (cancel) cancel()
//         console.log("canc", user.wheeling, user.touching)
//         user.wheeling = false
//         return
//       }
//       user.wheeling = false

//       console.log("special")

      
//       if (guide === undefined) {
//         let px = e.progress.y + (lastVel / 16 * lastSign * 2000)
//         guide = new Data(stats.absoluteDelta)
//         console.log("speed", lastVel / stats.delta * 100)
//         cancel = window.scroll(px, {guide, speed: {begin: lastVel / stats.delta * 100}})
//       }
//       else {
//         guide.set(guide.get() + stats.absoluteDelta)
//       }


//       let ff = f = Symbol()
//       nextFrame(() => {
//         nextFrame(() => {
//           if (f === ff) {
//             console.log("--------------------")
//             guide = undefined



            
            
//           }
//         }) 
//       })
      
//     }
//     else {
//       console.log("normal")
//     }

    

//     lastVel = vel
//     lastSign = Math.sign(e.velocity.y)

//   }, {velocity: true, notifyOnAllChanges: true}).activate();



//   (() => {
//     let lastProg: number = 0
//     let lastBesch: number = 0
//     window.on("scroll", (e) => {
//       let vel = window.scrollY - lastProg
//       lastProg = window.scrollY
//       let besch = vel - lastBesch
//       lastBesch = vel

//       el.text(formatNum(vel) + " / " + formatNum(besch), false)
//       console.log(formatNum(vel), formatNum(besch))
//     }, {notifyOnAllChanges: true})
//   })();
    
})


// function formatNum(n: number) {
//   let s = n + ""
//   if (s.includes(".")) {
//     n = Math.round(n * 10) / 10
//     s = n + ""
//   }
//   else {
//     s += ".0"
//   }

//   while(s.length !== 10) {
//     s += " "
//   }
//   return s
// }
