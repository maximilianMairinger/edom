import { Data, DataBase } from "josm";
import init, { ElementList, EventListener } from "../../app/src/edom"

init().then(() => {
  let el = document.childs("#txt")
  el.txt("lel")
  const anim = el.animate([
    {opacity: '1', offset: 0},
    {opacity: '0.5', offset: 1}
  ], {fill: 'both', iterations: 1, duration: 400, easing: 'ease'})


  console.log(anim)
  anim.onfinish = () => {
    console.log("done test2")
  }


  // const dat = new Data("wooo")

  // el.innerText = dat.get()

  // const elC = el.childNodes[0]

  // elC.txt(dat, false, true)


  // setTimeout(() => {
  //   dat.set("wooo2")
  // }, 1000)



})