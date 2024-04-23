const fruits = ["Apple", "orange", "Mango", "Kiwi"]
let size = fruits.length

let fruit = fruits.at(2)

fruits.push('Melon')

console.log(size)

console.log(size.toString());

console.log(fruits);


// join()

let cars = ['Hyundai', 'BMW', 'Skoda', 'Jimny']
console.log(cars.join('-'));

// shift()
const fruit1 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruit1.shift());
console.log(fruit1);

fruit1.unshift("Lemon")
console.log(fruit1);

// concat()
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren);

// flat()
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr);

// splice()
const vegies = ['Tomato', 'Onion', 'Carrot' ]
vegies.splice(1,0,'Garlic','Ginger')
console.log(vegies);
// output: [ 'Tomato', 'Garlic', 'Ginger', 'Onion', 'Carrot' ]

// splice() to remove elements
vegies.splice(1,2)
console.log(vegies);
// output: [ 'Tomato', 'Garlic', 'Carrot' ]


// slice()
const stack1 = ['Java', 'Python', 'Ruby', 'JS', 'C++']
const st = stack1.slice(1)
console.log(st);

// indexOf() and includes()
const names = ['Ravi', 'Shyam', 'Mohan', 'Pinki']

console.log(names.includes('Shyam'));       // output: true

const position = names.indexOf('Shyam')
const p1 = names.indexOf('Pinki')
console.log(position);
console.log(p1);

// Array.isArray()
const text = "Hello Harsh"
let isArray = Array.isArray(text)
console.log(isArray);

const myarr = Array.from(text)
console.log(myarr);

// spread()
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
console.log(numbersCombined);

const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  
  const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }
  
const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}

console.log(myUpdatedVehicle);















   



