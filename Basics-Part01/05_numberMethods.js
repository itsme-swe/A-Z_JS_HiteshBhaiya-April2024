// Number.EPSILON
let x = Number.EPSILON
console.log(x);

// Number.isInteger()
let a = Number.isInteger(2.5)
let b = Number.isInteger(2)
console.log(a);
console.log(b);

// Number MAX_VALUE
let num = Number.MAX_VALUE

//toFixed() method
let number = 25.6756
let n = number.toFixed(2)
console.log(n);
console.log(typeof (n));

// toLocaleString() method
let pay = 12500000

let text = pay.toLocaleString("en-IN", {style:"currency", currency:"INR"})

console.log(text);

console.log(typeof text);

// toPrecision()

let amt = 25.234
console.log(amt.toPrecision(3));






