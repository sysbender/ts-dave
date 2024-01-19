interface iGreet {
  name: string;
  greet(message: string): void;
}

// use interface
let max: iGreet;
max = {
  name: "Max",
  greet(message) {
    console.log(`Hi ${message}, I am ${this.name}`);
  },
};
max.greet("Hello");

// use interface with class
class Person implements iGreet {
  constructor(public name: string) {
    this.name = name;
  }
  greet(message: string): void {
    console.log(`${message}, I am ${this.name}`);
  }
}

let john = new Person("John");
john.greet("Bonjour");

// readonly interface
// extends interface

// function interface - without method name
interface fGreet {
  (message: string): void;
}
