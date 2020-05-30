import init, { ElementList } from "../../app/src/edom"
import { DataBase } from "josm"
import animationFrameDelta from "animation-frame-delta"


const mainElem = document.querySelector("#main")



init().then(() => {
  let e = new DataBase({ok: "1okok1"})


  mainElem.attachShadow({mode: "open"})
  // var template = document.createElement( 'template' )
  // template.innerHTML = `<qwe style="color: white" whatEver="$[ok]" ok="okokokoko">ww$[ok]ww<span>/<qwe</span></qwe>` 
  // mainElem.shadowRoot.append( document.importNode( template.content, true ) )
  mainElem.shadowRoot.html(`<qwe style="color: white" whatEver="$[ok]" ok="okokokoko">ww$[ok]ww<span>/<qwe</span></qwe>`, e)
  let q: ShadowRoot


  setTimeout(() => {


    let ok = e.ok
    // animationFrameDelta((q, e) => {
    //   ok.set((Math.round(e)).toString())
    // })
  }, 1000)


  
})





