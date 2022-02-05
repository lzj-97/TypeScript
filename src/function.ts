let add1: (x: number, y: number) => number

interface Add2 {
  (x: number, y: number): number
}

type Add3 = (x: number, y: number) => number


function add5(x: number, y?: number) {
  return y ? x + y : x;
}
add5(1)

function add6(x: number, y = 0, z: number, q = 1) {
  return x + y + z + q;
}

console.log(add6(1, undefined, 3));

function add7(x: number, ...rest: number[]) {
  return x + rest.reduce((pre, cur) => pre + cur);
}

console.log(add7(1, 2, 3, 4, 5));

function add8(...rest: number[] ): number;
function add8(...rest: string[] ): string;
function add8(...rest: any[] ): any {
  let first = rest[0];
  if(typeof first == 'string') {
    return rest.join('');
  }
  if(typeof first === 'number') {
    return rest.reduce((pre, cur) => pre +cur);
  }

}

console.log(add8(1, 2, 3));
console.log(add8('a', 'b', 'c'));


