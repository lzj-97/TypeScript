(() => {
  interface DogInterface {
    run(): void
  }

  interface CatInterface {
    jump(): void
  }

  // 交叉类型
  let pet: DogInterface & CatInterface = {
    run() {},
    jump() {}
  }

  let a: number | string = 'a'
  a = 2

  // 字面量联合类型
  let b: 'a' | 'b' | 'c'
  let c: 1 | 2 | 3

  class Dog implements DogInterface {
    run() {}
    eat() {}
  }
  class Cat implements CatInterface {
    jump() {}
    eat() {}
  }
  enum Master { Boy, Girl }
  function getPet(master: Master) {
    let pet = master === Master.Boy ? new Dog() : new Cat()
    return pet
  }

  interface Square {
    kind: 'square',
    size: number,
  }

  interface Rectangle {
    kind: 'rectangle';
    width: number;
    height: number;
  }

  interface Circle {
    kind: 'circle',
    r: number
  }
  type Shape = Square | Rectangle | Circle
  // function area(s: Shape): number {
  function area(s: Shape) {
    // 可辨识联合
    // 字面量+联合类型下使用的类型保护，(使用显式的返回值类型声明 或 default将s赋给never保证switch遗漏时报错----完整性检查)
    switch (s.kind) {
      case "square":
        return s.size * s.size
      case "rectangle":
        return s.width * s.height
      case "circle":
        return Math.PI * s.r ** 2
      default:
        return ((e: never) => { throw new Error(e) })(s)
    }
  }

  console.log(area({ kind: 'circle', r: 1}));
  
})()