// There are basically two types of data in JavaScript.
//  1. Primitive datatypes:
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 999999123999678999n



// 2. Reference (Non primitive)
// Array, Objects, Functions

const classFellows = ["Usama", "Hamad", "Faizan"];

let myObj = {
    myName: "Muhammad Hussain",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3