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
  // y = x


  // 函数兼容性
  // 参数兼容：目标函数不可扩大原函数的参数范围（参数个数、类型）
  type Handler = (a: number, b: number) => void
  function hof(handler: Handler) {
    return handler
  }

  // 参数个数
  let handler = (a: number) => {}
  hof(handler);

  let handler2 = (a: number, b: number, c: number) => {}
  // hof(handler2)

  // 可选参数和剩余参数
  let a = (a: number, b: number) => {}
  let b = (a?: number, b?: number) => {}
  let c = (...args: number[]) => {}
  a = b
  a = c
  b = a
  b = c
  c = a
  c = b


  // 参数类型
  let handler3 = (a: string) => {}
  hof(handler3)


  interface Point3D {
    x: number,
    y: number,
    z: number,
  }

  interface Point2D {
    x: number,
    y: number,
  }

  // 函数双向协变
  let p3d = (point: Point3D) => {};
  let p2d = (point: Point2D) => {};
  p3d = p2d
  p2d = p3d

  // 目标函数的返回值范围必须大于或等于原函数
  let f = () => ({name: 'll'})
  let g = () => ({name: 'll', location: 's'})
  f = g
  // g = f

  // 重载的实现参数范围不能大于之前的声明，返回值不能小于
  function overload(a: number, b: number): number;
  function overload(a: string, b: string): string;
  function overload(a: any, b: any): any {};

  // 枚举兼容性
  enum Fruit { Apple, Banana }
  enum Color { Red, Yellow }
  let fruit: Fruit.Apple = 3
  let no: number  = Fruit.Apple;
  // let color: Color.Red = Fruit.Apple

  // 类兼容性
  // 实例属性类型相同则兼容，不比较构造函数和静态成员
  // 若有私有成员则不兼容
  class A {
    constructor(a: number, b: number) {}
    id: number = 1
    private name: string = ''
  }
  class B {
    static s = 1
    constructor(a: number) {}
    id: number = 2
    private name: string = ''
  }

  let aa = new A(1, 2)
  let bb = new B(1)
  aa = bb
  bb = aa

  // 父类和子类的实例互相兼容
  class C extends A {}
  let cc = new C(1, 2);
  aa = cc
  cc = aa

  // 泛型兼容性
  interface Empty<T> {
    value: T
  }
  let obj1: Empty<number> = {}
  let obj2: Empty<string> = {}
  obj1 = obj2

  let log1 = <T>(x: T): T => {
    console.log('x');
    return x
  }
  let log2 = <U>(y: U): U => {
    console.log('y');
    return y
  }
  
})()
