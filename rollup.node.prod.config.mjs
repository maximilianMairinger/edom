import merge from "webpack-merge"
import commonMod from "./rollup.node.common.config.mjs"


export default merge(commonMod, {
  input: 'app/src/edom.ts',
  output: {
    file: 'app/dist/cjs/edom.js',
    format: 'cjs'
  },
})