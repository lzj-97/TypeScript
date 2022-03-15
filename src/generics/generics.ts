function logInfo<T>(value: T): T {
  console.log(value);
  return value;
}

logInfo<string[]>(['a', 'b']);
logInfo(['a', 'b'])

// type Log = <T>(value: T) => T
// const myLog: Log = logInfo


// 定义泛型整个接口的泛型变量时，使用该接口要传入参数，或定义时传入默认值
interface LogInterface<T = number> {
  (value: T): T
}
const myLog: LogInterface = logInfo;