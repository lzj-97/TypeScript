interface A {
  x: number,
  foo (bar: number): number,  // 5
  foo (bar: 'a'): number,  // 2
}

interface A {
  y: number,
  foo (bar: string): string,  // 4
  foo (bar: string[]): string[],  // 3
  foo (bar: 'b'): string[],  // 1
}

let aaa: A = {
  x: 1,
  y: 2,
  foo(bar: any) {
    return bar
  }
}

// 命名空间和函数合并，为函数添加属性
function Lib() {}
namespace Lib {
  export let version = '1.0'
}
console.log(Lib.version);

// 命名空间和类合并，为类添加静态属性
class C {}
namespace C {
  export let state = 1
}
console.log(C.state);

enum Color {
  Red,
  Yellow,
  Blue,
}
namespace Color {
  export function mix() {}
}
console.log(Color);


