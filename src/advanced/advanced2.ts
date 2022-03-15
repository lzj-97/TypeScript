/*
 * X 兼容 Y: X (目标类型) = Y (源类型)
 */

(() => {
  let s: string = 'a'
  s = null


  // 接口兼容性
  interface X {
    a: any
    b: any
  }

  interface Y {
    a: any
    b: any
    c: any
  }

  let x: X = { a: 1, b: 2 }
  let y: Y = { a: 1, b: 2, c: 3 }
  x = y
  y = x


  // 函数兼容性
})()
