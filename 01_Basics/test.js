// console.log("Muhammad Hussain")

// let score = "22Hussain"
// console.log(typeof score)
// console.log(typeof (score))

// let valInNum = Number(score)
// console.log(typeof valInNum)
// console.log(valInNum)

// let valu = null
// console.log(typeof valu)

// let valuInNum = Number(valu)
// console.log(typeof valuInNum)
// console.log(valuInNum)

// By applying Number(left), values converted into right.
// left                 right
// 22                   => 22
// "Muhammad Hussain"   => NaN
// "22Hussain"          => NaN
// undefined            => NaN
// null                 => 0
// false                => 0
// true                 => 1

// let isLoggedIn = 1
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

// let notLoggedIn = 0
// let booleanNotLoggedIn = Boolean(notLoggedIn)
// console.log(booleanNotLoggedIn)

// By applying Boolean(left), values converted into right.
// left                 right
// 0                 => false
// 1                 => true
// ""                => false
// "Hussain"         => true

let anyNum = false
let strAnyNum = String(anyNum)
console.log(strAnyNum)
console.log(typeof strAnyNum)

// By applying String(left), values converted into right.
// left                 right
// 22                => 22