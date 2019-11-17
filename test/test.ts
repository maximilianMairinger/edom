import init from "./../edom";

const c = function (query: string) {
  return document.childs(query)
}

window.addEventListener("load", () => {
  init().then(() => {
    let elem = c("#test")[0]
    console.log("rdy");
    elem.anim({
      translateX: [200, 600],
    }, {duration: 4000})
  })
})
