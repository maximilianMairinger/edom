import init, { ElementList, EventListener } from "../../app/src/edom"
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


  (() => {
    let last: number
    window.on("scroll", (e) => {
      el.text(e.progress.y + " / " + (e.progress.y - last), false)
      last = e.progress.y
    }, {notifyOnAllChanges: true})
  })();





  const user = ((elem: EventTarget) => {
    const user = {
      wheeling: false,
      touching: false
    }

    elem.on("wheel", () => {
      user.wheeling = true
    })
    elem.on("touchstart", () => {
      user.touching = true
    })
    new EventListener(elem, ["touchend", "touchcancel"], () => {
      user.touching = false
    })
    return user
  })(window as any as EventTarget)

  
  const easing = new Easing("easeOut").function

  let lastVel = 0
  let lastSign: number
  let maxVel: number
  let baseFac = .99
  let runFac: number
  let absScroll: number

  let alreadyDone: {whereToGo: number, dur: number, progress: number}
  let todo: {duration: number, scrollDir: "scrollLeft" | "scrollTop", pxDelta: number, container: HTMLElement}
  let progRel: number
  let lastProgEaseRel: number

  let startTime: number
  let absProg: number

  let f = Symbol()
  window.on("scroll", (e) => {
    // return
    
    const vel = Math.abs(e.velocity.y)
    if (lastVel > vel) {
      if (user.touching || user.wheeling) {
        user.wheeling = false
        return
      }
      user.wheeling = false

      console.log("special", e.progress.y, e.velocity.y)

      
      if (maxVel === undefined) {
        maxVel = lastVel
        absScroll = e.progress.y
        let px = absScroll + (lastVel / 16 * lastSign * 2000)
        absProg = now()
        startTime = absProg - stats.absoluteDelta
        
      }
      else {
        absScroll += e.velocity.y
        absProg += stats.absoluteDelta / todo.duration
      }

      let nowEase = easing(progRel) 
      let deltaEaseProg = nowEase - lastProgEaseRel
      lastProgEaseRel = nowEase

      let add = deltaEaseProg * todo.pxDelta
      
      absScroll = (lastSign * (nowVel - vel)) + absScroll
      window.scroll({y: absScroll}, undefined, false)

      let ff = f = Symbol()
      nextFrame(() => {
        nextFrame(() => {
          if (f === ff) {
            lastVel = 0
            maxVel = undefined


            let px: number
            let options: {startAt?: number, speed?: any, duration?: number, easing: (q: number) => number} = {easing}
            if (alreadyDone === undefined) {
              px = absScroll + (nowVel / 16 * lastSign * 2000)
              options.startAt = 0
              options.speed = {begin: nowVel * 60}
            }
            else {

            }


            
            console.log("--------------------")
            
            

            window.scroll(px, options)
          }
        }) 
      })
      
    }
    else {
      console.log("normal", e.progress.y, e.velocity.y)
    }

    

    lastVel = vel
    lastSign = Math.sign(e.velocity.y)

  }, {velocity: true, passive: false, capture: true})



  
    
})


