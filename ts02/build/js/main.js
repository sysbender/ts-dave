"use strict";
let a = ["a", "b", "c", 21, true];
// tuple - restrict size and type
let person = ["John", 42, false];
// object - infer
let obj = { name: "John", age: 42 };
let user = { name: "abc", age: 12 };
user.name = "test";
user.isMarried = true;
// interface - to define a class
// enum - runtime feature , not a type
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
})(Grade || (Grade = {}));
// literal types
let weekday = 1;
let multiply = function (a, b) {
    return a * b;
};
let add = function (a, b) {
    return a + b;
};
console.log(add(3, 4));
let subtract = (a, b) => {
    return a - b;
};
console.log("subtract", subtract(5, 2));
//optional parameter - type guard , default param value not work with interface
const addAll = (a = 0, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
addAll(undefined, 3);
addAll(undefined, 3, 2);
// rest parameter
const sumAll = (...nums) => {
    return nums.reduce((prev, curr) => {
        return prev + curr;
    });
};
console.log(sumAll(1, 2, 30));
// never type - for error, infinite loop
const createError = (errMessage) => {
    throw new Error(errMessage);
};
// use of never type
const numberOrString = (value) => {
    if (typeof value === "string")
        return "string";
    if (typeof value === "number")
        return "number";
    return createError("only number and string allowed");
};
let v1 = "hello";
let v2 = v1; // less specific
let v3 = v1; // more specific
let v4 = v1;
// double or force casting
let dix = 10;
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
    const year = document.getElementById("year"); //assertion
    const thisYear = new Date().getFullYear();
    year.setAttribute("datatime", thisYear.toString());
    year.textContent = thisYear.toString();
}
// class
class Customer {
    constructor(name) {
        this.name = name;
    }
}
// visibility modifier - public
class Coder {
    constructor(name, music, age, lang) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return this.age;
    }
}
const Dave = new Coder("Dave", "Rock", 42, "ts");
class WebDev extends Coder {
    constructor(computer, name, music, age, lang) {
        super(name, music, age, lang);
        this.computer = computer;
        this.computer = computer;
    }
}
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return action;
    }
}
// static member
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
// getter and setter
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(arr) {
        if (Array.isArray(arr) && arr.every((el) => typeof el === "string")) {
            this.dataState = arr;
        }
    }
}
// interface Transcation {
//   pizza: number;
//   books: number;
// }
const tran = {
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
