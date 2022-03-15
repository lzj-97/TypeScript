let a = 1
let b = [1, '3']

// let c = (x = 1) => x + 1
let c = (x = 1) => x + '1'

window.onkeydown = (event) => {
  console.log(event);
  
}


interface Foo {
  bar: number
}
// let foo = {} as Foo
// foo.bar = 1
let foo: Foo = {
  bar: 1
}