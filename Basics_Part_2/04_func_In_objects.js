// Function in Objects

const person1 = {
    name: "Vadana",
    lastName: "Mehra",
    age: 28,
    email: "vandi@gmail.com",
    hobbies: ['reading', 'cooking', 'designing'],

    // Declaring functio inside object
    greeting: function(){
        console.log('Hello Vandana');  
    },

    greeting2: function(){
        console.log(`Now I am using String Interpolation to access ${this.name}`);
        // using 'this' keyword to access same object 
    }
}

console.log(person1.greeting());    // Accessing function 
console.log(person1.greeting2());

