/*
// ---- CONSOLE - Runtime Space
console.log("Hello and Welcome to JS");
console.log(234 + 2 - 1);
console.log(2 + 2 - 1);
console.log(2134 + 3 - 14);

// ---- DOM - Document Object Model
document.querySelector("span").textContent = "Hello";
document.querySelector("output").textContent = 234 + 4 - 1 + 345;

// PROMPT - MESSAGE BOX with an Input Area

var myAge = prompt("Your Age ?");

console.log("ME: My age is " + myAge);

console.log("RE: So, you are " + myAge + " years old.");

document.querySelector("output").textContent =
  "RE: So, you are " + myAge + " years old.";


// DATA Declarations
var myVar = 123;
myVar = 34;
myVar = 123 + 34;
myVar = "Hello from JS 😁";
// DYNAMIC TYPING
console.log(myVar);

// let const - ES6 or ES2015
// ES - ECMA SCRIPT [European Computer Manufacturer Association]

let myLet = 34;
myLet = 90;
myLet = "Hi 😜";
console.log(myLet);
// SCOPE CHAIN - It is a process of building or making scope to a variable with or without blocking.

if (true) {
  var myName = "Logesh";
}

console.log(myName);

// 1. Age - Birth Year
var age = prompt("Enter your Age:");
console.log("Birth Year: " + (2024 - age - 1));
// "Birth Year: 2024" - "23"
// Implicit Data Type - Type Coercion
// NOTE: + Num -> Str ; - * / Str -> Num

const myConst = "My Constant Variable 😀";
console.log(myConst);
// JS FUNCTIONS
console.log(myRegFunction());

// REGULAR FUNCTION
function myRegFunction() {
  return "Hey There I am Regular function 👋";
}

// EXPRESSION FUNCTION
let myExpFunction = function () {
  return "Hey there JS functions are too powerful";
};

// ARROW FUNCTION
let myArrFunction = () => "Hello from the Arrow 🎯 function.";

console.log(myArrFunction());

// IIFE - immediately invoked function expression
(function () {
  console.log("Hello Everyone from the IIFE 😆");
})();

// PRIMITIVE DS
console.log(typeof 123);
console.log(typeof "Hello World 🌍");
console.log(typeof (100 > 200));
console.log(typeof NaN);
console.log(typeof {});
console.log(typeof []);
console.log(typeof null);

// NON PRIMITIVE - ARRAY
const arr = ["Logesh", "Hilary", "Mugilan", "Adbul", "Vignesh"];

console.log(arr);
// console.log(arr[1 + 1]);
// console.log(arr.length);

// for (let i of arr.values()) {
  //   console.log(i);
  // }
  
  // Mutable - Changeable
  arr.pop();
  arr.pop();
  arr.pop();
  console.log(arr);
  
  arr.push("Aswin");
  console.log(arr);

arr.shift();
console.log(arr);

arr.unshift("Logi");
console.log(arr);

// LOOPING STATEMENTS
// FOR LOOP | WHILE LOOP | DO WHILE LOOP
// ---- 1. FOR LOOP
console.log("---- FOR LOOP -----");
for (let ite = 0; ite <= 4; ite++) {
  console.log("ITE: " + ite);
}
// ---- 2. WHILE LOOP
console.log("---- WHILE LOOP -----");
let ite1 = 0;
while (ite1 <= 4) {
  console.log("ITE: " + ite1);
  ite1++;
}
// ---- 3. DO WHILE LOOP
console.log("---- DO WHILE LOOP -----");
let ite2 = 0;
do {
  console.log("ITE: " + ite2);
  ite2++;
} while (ite2 <= 4);

// FOR OF Loop
console.log("---- FOR OF LOOP -----");
for (const iterator of [100, 200, 300]) {
  console.log(iterator);
}

// FOR IN LOOP
console.log("---- FOR IN LOOP -----");
for (const key in [100, 300, 400]) {
  console.log(key);
}

NEED TO KNOW:
for (const key in object) {
  if (Object.hasOwnProperty.call(object, key)) {
    const element = object[key];
  }
}

// OBJECTS
const myObj = {
  _id: "001",
  _name: "Logesh",
  _addr: "#23, HJK St,",
  _city: "Pondicherry",
  myFunc: function () {
    console.log(this);
  },
};

function exmFunction(uid, uname) {
  const objMine = new Object();
  this.uid = uid;
  this.uname = uname;
  return 0;
}

function anoExmFunction(cate) {
  this.cate = cate;
  console.log(this);
  return 0;
}

exmFunction("123", "Logi");
anoExmFunction("Chinese");


const arr = [100, 300, 500];
const arr2 = arr.forEach((ele, ind, arr) => {
  return (ele += 100);
  // console.log(`Element ${ind}: ${ele} from ${arr}`);
});

const arr3 = arr.map((ele, ind, arr) => {
  return (ele += 100);
  // console.log(`Element ${ind}: ${ele} from ${arr}`);
});

console.log(arr);
console.log(arr2);
console.log(arr3);
"use strict";
console.log("Hello There!");
// Data Declarations
if (true) {
  let myName = "Logesh";
}
console.log(myName);

// For Loop
console.log("Hi, there");
console.log("Hi, there");
console.log("Hi, there");
console.log("Hi, there");

let times = 4;

for (let i = 1; i <= times; i++) {
  // i = i + 1; i++
  // code to be executed
  console.log("Loop get executed " + i);
  // 1 - Loop get executed 1
  // 2 - Loop get executed 2
  // 3 - Loop get executed 3
  // 4 - Loop get executed 4
}

let arr = [123, 456, 678, -90];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  // 0 1 2 3
}

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);

// for of Loop
const arr2 = [300, 900, 600, 1000, 2000];
for (const [key, val] of arr2.entries()) {
  // code to be executed
  // console.log("Key: " + key + " Value: " + val);
  console.log(`Key: ${key} Value: ${val}`);
}

console.log(arr2);

const obj = {
  fname: "Logesh",
  address: "#123, JKL st",
  pin: "111",
};

for (const [key, val] of Object.entries(obj)) {
  console.log(`Key: ${key}`);
  console.log(`Values: ${val}`);
}

console.log(obj);

const obj = {
  fname: "Logesh",
  pin: "111",
  address: "#123, JKL st",
};

for (let ite in obj) {
  console.log(ite);
}

const result1 = [100, 200, 400].forEach((val, key, arr) => {
  // console.log(`Value : ${val} Key: ${key} Origin: ${arr}`);
  return val;
});

console.log(result1);

const result2 = [100, 200, 400].map((val, key, arr) => {
  // console.log(`Value : ${val} Key: ${key} Origin: ${arr}`);
  return val + 200;
});

console.log(result2);
*/

// CODE CHALLENGE #1 - Solution
const checkDogs = (dogsJulia, dogsKate) => {
  // Julia's Data Modify
  let newJuliaDogs = dogsJulia.slice(1, -2);

  // Combining Both Julia[corrected] and Kates Data
  const dogs = [newJuliaDogs, dogsKate].flat();

  // TEST
  console.log(dogs);

  // Check Dog Criteria
  dogs.forEach((ageDog, ind) => {
    const resultStr =
      ageDog >= 3
        ? `an adult, and is ${ageDog} years old.`
        : `still a puppy 🐶.`;
    console.log(`Dog number ${ind + 1} is ${resultStr}`);
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
