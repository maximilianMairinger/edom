import init, { ElementList } from "../../app/src/edom"
import { DataBase } from "josm"
import animationFrameDelta from "animation-frame-delta"


const mainElem = document.querySelector("#main")



init().then(() => {
  let e = new DataBase({ok: "1okok1"})




  mainElem.html(`<qwe style="color: white" whatEver="$[ok]" ok="okokokoko">ww$[ok]ww<span>/<qwe</span></qwe>`, e)

  setTimeout(() => {
    let ok = e.ok
    animationFrameDelta((q, e) => {
      ok.set((Math.round(e)).toString())
    })
  }, 1000)
})





