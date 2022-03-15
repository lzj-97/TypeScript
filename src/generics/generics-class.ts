class Log<T> {
  run(value: T) {
    return value
  }
}

const log1 = new Log<number>();
log1.run(1)

const log2 = new Log();
log2.run('2')


// 类型约束
interface Length {
  length: number
}
function logInfo2<T extends Length>(value: T): T {
  console.log(value, value.length);
  return value;
}

logInfo2([1])
logInfo2('123456')
console.log({});
