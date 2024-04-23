// Creating object usig Object Literals

const mySymbol = Symbol("Surya")     // Declaring Symbol

let person = {
    firstName: "Harsh",
    lastName: "Mehra",
    [mySymbol]: "SuryaVasham",      // Way to refer Symbol data type inside object 
    age: 31,
    email: "harsh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ['Monday', 'Wednesday', "Friday"]
}
// Accessing Objects
console.log(person["lastName"]);
console.log(person.firstName);
console.log(person[mySymbol]);      // way to asccess symbol datatype

// Changig values of objects
person.email = "harsh@05gmail.com"
console.log(person);

// To lock the object, means no one can change the values of the object

Object.freeze(person)

// Now trying to change the value of Object person after freezing
person.age = 29
console.log(person);





