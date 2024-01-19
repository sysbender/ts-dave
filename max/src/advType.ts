// intersection types - similar to extend interface
type English = {
  englishLevel: number;
};
type French = {
  frenchLevel: number;
};
type Bilingual = English & French;

let bill: Bilingual = {
  englishLevel: 1,
  frenchLevel: 2,
};

console.log(bill);
// type guards - help union type
// discriminated union  - pattern make type guards easier

type Car = {
  typename: "Car";
  runSpeed: number;
};

type Plane = {
  typename: "Plane";
  flySpeed: number;
};

type Vehicle = Car | Plane;

function getSpeed(v: Vehicle): number {
  switch (v.typename) {
    case "Car":
      return v.runSpeed;
    case "Plane":
      return v.flySpeed;
    default:
      return 0;
  }
}

//type casting  - two syntax

// const pElement1 = document.getElementById("#p") as HTMLParagraphElement;
// const pElement2 = <HTMLParagraphElement>document.getElementById("#p");
// index property
interface ErrorContainer {
  [prop: string]: string;
}

//function overload
function add2(a: number, b: number): number;
function add2(a: string, b: string): string;
// function implementation
function add2(a: string | number, b: string | number): number | string {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return a.toString() + b.toString();
  }
}

console.log(add2(30, 4));
console.log(add2("30", "4"));

// option chaining
type Coder = {
  name: string;
  js: number;
  py?: number;
  address?: { postalCode?: string };
};

let coder1: Coder = { name: "Max", js: 5 };
console.log(`py = ${coder1?.py}`);
console.log(`addr = ${coder1?.address?.postalCode}`);

// nullish coalescing -

// the problem
let s: string | null = "";
const s1 = s || "default";
const s2 = s ?? "default";
console.log(`s1 = ${s1} `); // maybe we want to keep it as ""
console.log(`s2 = ${s2}`); // get ""
