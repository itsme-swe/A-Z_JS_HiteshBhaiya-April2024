// Created String object by using new keyword
let text = new String('I am Harsh Mehra')
console.log(typeof(text));

// String Interpolation using object
const person = {
    name: "Harsh",
    age: 31
}
console.log(`My name is ${person.name.toUpperCase()} and I am ${person.age} years old.`);

// String interpolation using function
function greet(name){
    return `Hello, ${name}`;
}
console.log(greet("Harsh"));

let car = "AstonMartin"
let car1 = new String("Porsche")
console.log(typeof(car));   // string type
console.log(typeof(car1));  // object type





