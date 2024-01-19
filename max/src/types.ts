// type assignment
let first: string;
// type inference
let num = 1;

// object type - looks similar to object
const person = { name: "John", age: 23 };

type personType = { name: string; age: number };

let p1: personType;
p1 = { name: "abc", age: 123 };

// array type
let languages = ["English", "French"];
for (const language of languages) {
  console.log(language.toUpperCase());
}

// tuple - fixed length and type
let pos: [number, number] = [45, -70];
// enum

enum PrimaryColor {
  red = "r",
  green = "g",
  blue = "b",
}

console.log(PrimaryColor.red);

// any
let any1: any;

// union
type sn = number | string;
function combine(a: sn, b: sn): sn {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return a.toString() + b.toString();
  }
}
console.log(combine(2, 3));
console.log(combine("a", "b"));

// literal types - exact value

let ling: "English" | "French" = "French";

// type alias
type caLang = "English" | "French";
let ca1 = ling;
console.log(typeof ca1);

// function as type
let f1: (a: number, b: number) => number;

// function callback
type cbFunc = (msg: string) => void;
let f2: (cb: cbFunc) => void;

// unknown type - different from any , cast a unknown before assign to other variable
let n1: unknown;
let n2: any;
n1 = 1;
n2 = 2;
let n3: number;
n3 = n1 as number; // unknown must be casted
n3 = n2; // any can be assigned

// never type - generate error , infinite loop
function generateError(message: string): never {
  throw new Error(message);
}
