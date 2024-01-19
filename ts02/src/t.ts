interface TranscationObject {
  Pizza: number;
  Books: number;
  Job: number;
}

const tran1: TranscationObject = {
  Pizza: -10,
  Books: -5,
  Job: 50,
};

console.log(tran.Pizza);
console.log(tran["Pizza"]);

let prop1: string = "Pizza";
console.log(tran[prop1]);
