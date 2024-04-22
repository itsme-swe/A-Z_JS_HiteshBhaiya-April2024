// Get values b/w 10 and 20

const min = 10
const max = 20

console.log(Math.floor((Math.random() * (max - min + 1)) + min));

let age = 31
console.log(typeof(age));       // number type

let num = new Number(20)        // Using new keyword to initilise number will make value to object type
console.log(typeof(num));

let newVal = Number(num)        // So by using Number() method we can convert object to number 
console.log(typeof newVal);

console.log(Math.PI);




