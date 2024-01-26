function fObject(): void {
  let o1: object; // array and function also object
  o1 = { name: "John" };
  console.log(o1);

  let o2: { name: string; age: number } = { name: "John", age: 123 };

  type Person = { name: string; age: number }; // type annotation
  let o3: Person;
  o3 = { name: "a", age: 12 };
}

fObject();
