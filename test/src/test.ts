import { Data, DataBase } from "josm";
import init, { ElementList, EventListener } from "../../app/src/edom"

init().then(() => {
  let el = document.childs("#txt")
  el.css({opacity: 0})
  const dat = new Data("wooo")

  el.innerText = dat.get()

  const elC = el.childNodes[0]

  elC.txt(dat, false, true)


  setTimeout(() => {
    dat.set("wooo2")
  }, 1000)



})