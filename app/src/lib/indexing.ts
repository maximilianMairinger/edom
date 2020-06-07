

export function constructIndexStore<Pointer, Value>(init: (pointer: Pointer) => Value) {
  const index: Map<Pointer, Value> = new Map
  
  return function (pointer: Pointer) {
    let me = index.get(pointer)
    if (me === undefined) {
      me = init(pointer)
      index.set(pointer, me)
    }
    return me
  }
}