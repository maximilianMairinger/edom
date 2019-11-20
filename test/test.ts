import init from "./../edom";
import { Data } from "front-db"

const c = function (query: string) {
  return document.childs(query)
}

declare let global: any;

window.addEventListener("load", () => {
  init().then(() => {
    let elem = c("#test")[0]
    global.elem = elem;
    console.log(elem);

    window.on("scroll", () => {
      let t = window.scrollY;
      console.log(t);
      

      guide.val = t
    });


    let guide = new Data(1000);

    
      elem.anim({translateY: 1500}, {end: 1500}, guide)
    
    
    

    // elem.anim([
    //   {translateX: 200, translateY: 200},
    //   {translateX: 600},
    //   {translateX: 300, translateY: 0}
    // ], {duration: 4000})
  })
}) 