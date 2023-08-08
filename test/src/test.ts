import { Data, DataBase } from "josm";
import init, { ElementList, EventListener } from "../../app/src/edom"
import delay from "tiny-delay";

init().then(async () => {
  let el = document.childs("#txt")




  el.css({
    width: 100,
    height: 100,
    backgroundColor: "blue",
  })


  await delay(1000)

  el.css({
    translateX: 100
  })


  await delay(1000)
  await el.anim({
    translateX: 0
  })


  debugger
  await el.anim({
    translateX: 100
  })










  // el.txt("lel")
  // const anim = el.animate([
  //   {opacity: '1', offset: 0},
  //   {opacity: '0.5', offset: 1}
  // ], {fill: 'both', iterations: 1, duration: 400, easing: 'ease'})


  // console.log(anim)
  // anim.onfinish = () => {
  //   console.log("done test2")
  // }


  // const dat = new Data("wooo")

  // el.innerText = dat.get()

  // const elC = el.childNodes[0]

  // elC.txt(dat, false, true)


  // setTimeout(() => {
  //   dat.set("wooo2")
  // }, 1000)



})