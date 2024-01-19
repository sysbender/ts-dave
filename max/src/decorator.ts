// meta programming

// decorator factory

function ClassLoggerFactory(message: string) {
  return function (constructor: Function) {
    console.log(message);
    console.log(constructor.name);
  };
}
// class decorator
function ClassLogger(constructor: any) {
  console.log(`----------------- in decorator  ${constructor.name} in Logger`);
}

// property decorator
function PropLogger(...rest: any[]) {
  console.log("==========prop log: ");
}

@ClassLogger
@ClassLoggerFactory("--------------in decorator factory")
class Thing {
  @PropLogger
  name = "something";
  constructor() {
    console.log(` run constructor in Thing`);
  }
}

const thing = new Thing();
// factory decorator
