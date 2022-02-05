interface Human {
  name: string;
  eat(): void;
}

class Asian implements Human {
  constructor(name: string) {
    this.name = name;
  }
  // 接口只能约束类的公有成员
  // private name: string;
  name: string;
  eat() {}
  sleep() {}
}

interface Man extends Human {
  run(): void
}

interface Child extends Human {
  cry(): void
}

interface Boy extends Man, Child {}

let boy: Boy = {
  name: '',
  run () {},
  eat() {},
  cry() {},
}


// 接口继承类
class Auto {
  state = 1
  private state2 = 0
}

interface AutoInterface extends Auto {}

// class C implements AutoInterface {
//   state = 1
// }

class Bus extends Auto implements AutoInterface {}