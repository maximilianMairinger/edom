import { DataBase } from "josm";
import init, { ElementList, EventListener } from "../../app/src/edom"

init().then(() => {
  const el = document.childs("#txt") as HTMLElement;
  el.css({
    fontSize: "30px",
    fontFamily: "monospace"
  })


  const db = new DataBase({
    aaa: "aaa2",
  })

  el.apd(`
    <div>$[ aaa ]</div>
  `, db)

  setTimeout(() => {
    db.aaa.set("change")
  }, 3000)
})