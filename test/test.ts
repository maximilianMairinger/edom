import init from "./../edom";

const c = function (query: string) {
  return document.childs(query)
}

declare let global: any;

window.addEventListener("load", () => {
  init().then(() => {
    let elem = c("#test")
    global.elem = elem;
    console.log(elem);
    //@ts-ignore
    elem.anim({translateY: [300, 600]}, {duration: 5000})

    setTimeout(() => {
      debugger
      elem.anim({translateX: 600}, {duration: 5000})
    }, 2000)
    

    // elem.anim([
    //   {translateX: 200, translateY: 200},
    //   {translateX: 600},
    //   {translateX: 300, translateY: 0}
    // ], {duration: 4000})
  })
}) 