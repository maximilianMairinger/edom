import init from "./../edom";
import { Data } from "front-db"

var parse = require('parse-svg-path')
var abs = require('abs-svg-path')
var normalize = require('normalize-svg-path')


let input = "M211.313,236.242,68.853.073H0L168.129,278.76h17.5ZM433.478,0H364.535L196.327,278.833H265.18ZM222.069,357.189,364.6,593.358h68.853l-168.2-278.686H247.817ZM0,593.431H68.853L237.151,314.6H168.264Z"
 
var segments = normalize(abs(parse(input)))


let s = ""
segments.forEach((e) => {
  s += e[0]
  for (let i = 1; i < e.length-1; i++) {
    
    s += e[i] + ","
  }
  s += e.last
})
//console.log(s);


const c = function (query: string) {
  return document.childs(query)
}

declare let global: any;

window.addEventListener("load", () => {
  init().then(() => {
    let elem = c("#test")[0]
    let svg = c("svg path")[0]
    global.elem = elem;
    console.log(elem);

    window.on("scroll", () => {
      let t = window.scrollY;
      //console.log(t);
      

      guide.val = t
    });


    let guide = new Data(1000);

    
    //elem.anim({translateY: 1500}, {end: 2000}, guide)
    //@ts-ignore
    svg.anim({d: "M218.172,299.236C218.172,299.236,396.895,0,396.895,0C396.895,0,318.2,0,318.2,0C318.2,0,138.631,299.236,138.631,299.236C138.631,299.236,216.69,298.625,216.69,298.625C216.69,298.625,218.172,299.236,218.172,299.236M465.808,0C465.808,0,396.895,0,396.895,0C396.895,0,213.62,299.236,213.62,299.236C213.62,299.236,287.25,297.185,287.25,297.185C287.25,297.185,465.808,0,465.808,0M216.69,294.742C216.69,294.742,34.985,593.1,34.985,593.1C34.985,593.1,109.514,593.1,109.514,593.1C109.514,593.1,288.5,295.089,288.5,295.089C288.5,295.089,254.489,297.177,254.489,297.177C254.489,297.177,216.69,294.742,216.69,294.742M-38.127,593.1C-38.127,593.1,34.985,593.1,34.985,593.1C34.985,593.1,220.71499999999997,295.091,220.71499999999997,295.091C220.71499999999997,295.091,139.62699999999998,297.25,139.62699999999998,297.25C139.62699999999998,297.25,-38.127,593.1,-38.127,593.1"}, {duration: 250, fill: "both"})
    
  })
}) 