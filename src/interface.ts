interface List {
  readonly id: number;
  name: string;
  // [x: string]: any;
  age?: number
}

interface Result {
  data: List[];
}

function render(result: Result) {
  result.data.forEach(value => {
    console.log(value.id, value.name);
    if(value.age) {
      console.log(value.age);
    }
    // value.id++;
  })
}

// 多余字段不报错，但直接传对象字面量多余字段会报错
let result = {
  data: [
    {id: 1, name: 'A', sex: 'male'},
    {id: 2, name: 'B'},
  ]
}
// render(result);
// render({
//   data: [
//     {id: 1, name: 'A', sex: 'male'},
//     {id: 2, name: 'B'},
//   ]
// });

// 用类型断言绕过编译器类型检查
render({
  data: [
    {id: 1, name: 'A', sex: 'male'},
    {id: 2, name: 'B'},
  ]
} as Result);
// 类型断言另一种写法
render(<Result>{
  data: [
    {id: 1, name: 'A', sex: 'male'},
    {id: 2, name: 'B'},
  ]
});


interface StringArray {
  [index: number]: string,
}
let chars: StringArray = ['A', 'B'];
let chars2: StringArray = {
  1: 'g',
  2: '3'
};

interface Name {
  // interface可索引类型 支持number,string索引签名
  // 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型
  // [x: string]: string,
  [x: string]: any,
  [x: number]: number
}


// let add: (x: number, y: number) => number

// interface Add {
//   (x: number, y: number): number
// }

type Add = (x: number, y: number) => number

interface Lib {
  (): void;
  version: string;
  doSomething(): void;
}

function getLib() {
  let lib: Lib = (() => {}) as Lib;
  lib.version = '1.0';
  lib.doSomething = () => {}
  return lib;
}

let lib1 = getLib();
lib1();
lib1.doSomething();
let lib2 = getLib();