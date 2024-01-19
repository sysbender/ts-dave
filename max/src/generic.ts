// builtin generic type : Array, Promise

let arr: Array<string>; // same as string[]
const promise: Promise<string> = new Promise((resolve, reject) => {
  resolve("hello");
});

// create a generic function
function merge<T, U>(a: T, b: U): T & U {
  return Object.assign({}, a, b); // {} create a new object for the target
}

const mergePerson = merge({ name: "John" }, { age: 23 });
console.log(mergePerson.name);

// type constrains
function mergeObject<T extends Object, U extends Object>(a: T, b: U): T & U {
  return Object.assign({}, a, b); // {} create a new object for the target
}

// another generic function example

interface ILength {
  length: number;
}

function countAndDescribe<T extends ILength>(item: T): [T, string] {
  const result = `Got length=${item.length}`;
  return [item, result];
}
console.log(countAndDescribe("Hello"));

// the keyof constraint - obtain the union type of all property names of a given type.
function extractAndConvert<T extends Object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}
console.log(extractAndConvert({ name: "John" }, "name"));
// generic class

class DataStore<T extends string | number> {
  data: T[] = [];
  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data = this.data.filter((value) => value !== item);
  }

  getItems() {
    return this.data;
  }
}

let d = new DataStore();
d.addItem("a");
d.addItem("b");
d.addItem("c");
d.removeItem("b");
console.log(d.getItems());
// utility types

//- Partial - create a new type from old type that turn all property to optional
type Complete = { name: string; age: number };
type Incomplete = Partial<Complete>; //  { name?: string; age?: number };
// Readonly -
type StringList = string[];
type FixStringList = Readonly<StringList>; // readonly string[]

// generic vs union type
