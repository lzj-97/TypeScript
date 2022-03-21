(() => {
  interface Obj {
    a: number,
    b: number,
    c: number,
  }

  type ReadonlyObj = Readonly<Obj>
  type PartialObj = Partial<Obj>
  type PickObj = Pick<Obj, 'a' | 'b'>

  // 非同态，将会创建新的属性，不会从它处拷贝属性修饰符。
  type RecordObj = Record<'x' | 'y' | 3 , Obj>
})()