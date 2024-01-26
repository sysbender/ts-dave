function array(): void {
  let a1 = ["a", 1, false];
  a1.push("b");
  console.log(a1);

  let a2: (string | number)[] = [];
  a2.push("a");
}

function tuple(): void {
  let t1: [string, number];
  t1 = ["a", 1];
  t1.push(4); // ok
  console.log(t1);
}
array();
tuple();
