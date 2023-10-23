export function arrayify<T>(q: T): T extends any[] ? T : [T] {
  return (q instanceof Array ? q.clean() : [q]) as any
}


export function startsWith(s: string, pre: string[]) {
  return pre.ea((p) => {
    if (s.startsWith(p)) return true
  })
}

export function endsWith(s: string, post: string[]) {
  return post.ea((p) => {
    if (s.endsWith(p)) return true
  })
}

export function removeWhenStartsWith(s: string, pre: string[]) {
  return pre.ea((p) => {
    if (s.startsWith(p)) return s.substr(p.length)
  }) || s
}

export function removeWhenEndsWith(s: string, post: string[]) {
  return post.ea((p) => {
    if (s.endsWith(p)) return s.substr(0, s.length - p.length)
  }) || s
}





export function optionalPrePostFix(pre: string | string[], post: string | string[]) {
  pre = arrayify(pre)
  post = arrayify(post)

  const postFix = (post as string[]).last
  const preFix = (pre as string[]).last

  function f(dir: "inOut", parse: (s: string) => string): (s: string) => string
  function f<R>(dir: "out", parse: (s: R) => string): (s: R) => string
  function f<R>(dir: "in", parse: (s: string) => R): (s: string) => R
  function f(dir: "in" | "out" | "inOut"): (s: string) => string
  function f(dir: "in" | "out" | "inOut", parse?: (s: any) => any): any {
    function parseIn(style: string) {
      return removeWhenEndsWith(removeWhenStartsWith(style, pre as string[]), post as string[])
    }
    function parseOut(a: string) {
      return preFix + a + postFix
    }

    if (parse) {
      if (dir === "inOut") return function (style: string) {
        return parseOut(parse(parseIn(style)))
      }
      else if (dir === "in") return function (style: string) {
        return parse(parseIn(style))
      }
      else return function (style: any) {
        return parseOut(parse(style))
      }
    }
    else {
      if (dir === "inOut") return function (style: string) {
        if (!startsWith(style, pre as string[])) style = preFix + style
        if (!endsWith(style, post as string[])) style += postFix
        return style
      }
      else if (dir === "in") return parseIn
      else return parseOut
    }
  }
  return f
}
