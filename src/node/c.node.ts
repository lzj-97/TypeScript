let c1 = require('./a.node')
// let c2 = require('./b.node')

const { c, d } = require('./b.node')

// let c3 = require('./../es6/a')

// import c3 = require('./../es6/d')
import c3 from './../es6/d';   // 这种写法需要打开tsconfig的esModuleInterop配置项

console.log(c1);
// console.log(c2);


console.log(c);


// c3.default()
// console.log(c3);

c3()