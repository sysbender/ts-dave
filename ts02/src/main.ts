let a: (number | string | boolean)[] = ["a", "b", "c", 21, true];

// tuple - restrict size and type
let person: [string, number, boolean] = ["John", 42, false];
// object - infer
let obj = { name: "John", age: 42 };

// type
type User = { name: string; age: number; isMarried?: boolean };

let user: User = { name: "abc", age: 12 };
user.name = "test";
user.isMarried = true;
// interface - to define a class

// enum - runtime feature , not a type

enum Grade {
  U,
  D,
  C,
  B,
  A,
}

// type alias - can not do this in interface
type strNum = string | number;
type stringNumber = strNum;
// literal types
let weekday: 1 | 2 | 3 | 4 | 5 = 1;
// function type
type mathFunction = (a: number, b: number) => number;
let multiply: mathFunction = function (a, b) {
  return a * b;
};

let add: mathFunction = function (a, b) {
  return a + b;
};
console.log(add(3, 4));

interface mathInterface {
  (a: number, b: number): number;
}

let subtract: mathInterface = (a, b) => {
  return a - b;
};

console.log("subtract", subtract(5, 2));
//optional parameter - type guard , default param value not work with interface

const addAll = (a: number = 0, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};
addAll(undefined, 3);
addAll(undefined, 3, 2);
// rest parameter

const sumAll = (...nums: number[]): number => {
  return nums.reduce((prev, curr) => {
    return prev + curr;
  });
};

console.log(sumAll(1, 2, 30));

// never type - for error, infinite loop
const createError = (errMessage: string): never => {
  throw new Error(errMessage);
};

// use of never type
const numberOrString = (value: number | string) => {
  if (typeof value === "string") return "string";
  if (typeof value === "number") return "number";
  return createError("only number and string allowed");
};

// type casting / assertion  : angle bracket , as

type One = string;
type Two = string | number;
type Three = "hello";

let v1: One = "hello";
let v2 = v1 as Two; // less specific
let v3 = v1 as Three; // more specific

let v4 = <Two>v1;
// double or force casting
let dix = 10 as unknown as string;
console.log(` dix = ${dix + "1"}, type= ${typeof dix}`);

// non null assert - '!'

{
  const year = document.getElementById("year");
  const thisYear = new Date().getFullYear();
  if (year) {
    year.setAttribute("datatime", thisYear.toString());
    year.textContent = thisYear.toString();
  }
}

{
  const year = document.getElementById("year") as HTMLSpanElement; //assertion
  const thisYear = new Date().getFullYear();

  year.setAttribute("datatime", thisYear.toString());
  year.textContent = thisYear.toString();
}
// class

class Customer {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

// visibility modifier - public

class Coder {
  secondLang!: string; // ignore warning
  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  public getAge() {
    return this.age;
  }
}

const Dave = new Coder("Dave", "Rock", 42, "ts");
class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number,
    lang: string
  ) {
    super(name, music, age, lang);
    this.computer = computer;
  }
}

// implement interface
interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  constructor(public name: string, public instrument: string) {}

  public play(action: string) {
    return action;
  }
}

// static member
class Peeps {
  static count: number = 0;
  static getCount(): number {
    return Peeps.count;
  }
  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}
// getter and setter

class Bands {
  private dataState: string[];
  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }
  public set data(arr: string[]) {
    if (Array.isArray(arr) && arr.every((el) => typeof el === "string")) {
      this.dataState = arr;
    }
  }
}

// index signature - access property dynamically
 
interface Transaction {
  //[index: string]: number; // property name is string, value is number
  [index:  string]: number; // property name is string, value is number
}
}
// interface Transcation {
//   pizza: number;
//   books: number;
// }
const tran: Transaction = {
  pizza: 10,
  books: 20,
};
tran.pizza;
tran["pizza"];
let prop = "pizza";
tran[prop];

for (const t in tran) {
  console.log(tran[t]);
}
