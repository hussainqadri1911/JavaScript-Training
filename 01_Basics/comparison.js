console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);


console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0); // Avoid
console.log(null == 0); // false. The equality (==) does not perform type conversion between null and 0, so null == 0 is false. // Avoid
console.log(null >= 0); // true. The relational operator (>=) does convert null to a number, so null >= 0 becomes 0 >= 0, which is true. // Avoid

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === 

console.log("2" === 2);