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
    


    // elem.anim([
    //   {translateX: 200, translateY: 200},
    //   {translateX: 600},
    //   {translateX: 300, translateY: 0}
    // ], {duration: 4000})
  })
}) 