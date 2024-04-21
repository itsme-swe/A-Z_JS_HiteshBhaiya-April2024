// charAt() method
let text = "Hello World"
let letter = text.charAt(1)
console.log(letter);


// charCodeAt() method
let txt = "Hello World"
let ltr = text.charCodeAt(1)
console.log(ltr);

// concat() method

let text1 = "Hello"
let text2 = "World"
let text3 = "Have a nice day"

let result = text1.concat(" ", text2," ", text3)
console.log(result);

// endsWith() method
let newTxt = "Hello Sir"
let output = newTxt.endsWith("Sir")
console.log(output);

// Strings.fromCharCode() method
let name = String.fromCharCode(72, 97, 114, 115, 104)
console.log(name);

// includes() method
let role = "I am a software engineer"
console.log(role.includes('software'));

// indexOf() method
let index = "This method will return index value of string"
console.log(index.indexOf("return"));
console.log(index.length);

// match() method
let indx = "This method will return index value of string"
console.log(indx.match("lue"));

// repeat() method
let copies = "I will buy Aston Martin"
let numCopies = copies.repeat(3)
console.log(numCopies);

// replace() method
let person = "Mr Blu has a blue house and a blue car "
let newPerson = person.replace(/blue/g, "red")
console.log(newPerson);

//slice() method
let emailID = "harsh@gmail.com"
let finalOne = emailID.slice(0,5)
console.log(finalOne);

// split() method
let greet = "How are you doing today?";
const myArray = greet.split()
console.log(myArray);

// substring() method
let raceCar = "Aston Martin"
let fCar = raceCar.substring(2)
console.log(fCar);

// trim() method
let newCar = "    Hyundai Creta   "
let car = newCar.trim()
console.log(newCar);
console.log(car);

// valueOf() method
let str1 = new String("HelloWorld")
let str2 = str1.valueOf()
console.log(typeof(str1));
console.log(typeof(str2));















