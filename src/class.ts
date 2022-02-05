class Dog {
  protected constructor(name: string) {
    this.name = name
  }
  name: string
  run() {}
  private pri() {}
  protected pro() {}
  readonly legs: number = 4
  static food: string = 'bones';
}

console.log(Dog);
console.log(Dog.prototype);
// Dog构造函数被保护，无法调用，但Dog的子类可以调用
// let dog = new Dog('dog')
// console.log(dog);
// dog.pri();
// dog.pro();
// console.log(Dog.food);




class Husky extends Dog {
  constructor(name: string, public color: string) {
    super(name);
    this.color = color;
    this.pro()
  }
}

console.log(Husky.food);


// 抽象类只能被继承，不能被实例化
abstract class Animal {
  constructor() {}
  eat() {}
  // 抽象方法可以没有具体的实现
  // 抽象方法只能出现在抽象类中
  abstract sleep(): void
}
// let animal = new Animal()
console.log(Animal);


class Cat extends Animal {
  constructor(name: string) {
    super()
    this.name = name;
  }
  name: string
  run() {}
  sleep() {
    console.log('cat sleep');
  }
}

let cat = new Cat('miaomiao');
cat.sleep();
console.log(cat);

cat.eat();

// 非抽象类不会实现继承自父类的抽象成员
class Pig extends Animal {
  constructor(name: string) {
    super()
    this.name = name;
  }
  name: string
  sleep() {
    console.log('pig sleep');
  }
}

let pig = new Pig('peiqi');
pig.sleep();


let animals: Animal[] = [pig, cat];
animals.forEach(item => item.sleep())

// 实现链式调用
class WorkFlow {
  step1() {
    return this;
  }
  step2() {
    return this;
  }
}

new WorkFlow().step1().step2()

class MyFlow extends WorkFlow {
  next() {
    return this;
  }
}

new MyFlow().next().step1().step2()
