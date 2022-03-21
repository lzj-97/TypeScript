(() => {

  let obj = {
    a: 1,
    b: 2,
    c: 3
  }

  // function getValues(obj: any, keys: string[]) {
  //   return keys.map(key => obj[key])
  // }
  function getValues<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
    return keys.map(key => obj[key])
  }
  console.log(getValues(obj, ['a','b']));
  console.log(getValues(obj, ['a','d']));
  console.log(getValues(obj, ['e','d']));

  // keyof T    索引类型查询
  interface Obj {
    a: number,
    b: string
  }
  let key: keyof Obj

  // T[k] 索引访问操作符
  let value: Obj['a']
  
})()