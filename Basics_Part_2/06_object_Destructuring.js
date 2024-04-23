// Basic Destructuring 

const user = {
    name: "Alex",
    address: "15th Park Avenue",
    age: 31,
    sills: ['JS', 'Devops', 'React']
}

const {name: nam, age} = user        // Here we can give aliases name to property by using :
console.log(nam);
console.log(age);
