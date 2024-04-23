// Creatig Objects using Singleton | Constructer 

const appUser = new Object()
appUser.ID = "121hm"
appUser.name = "Harsh"
appUser.lname = "Mehra"
appUser.age = 31
appUser.skills = ['Python', 'JS', 'React']

console.log(appUser);

// Merging two objects in one object 

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = {...obj1,...obj2}      // Here we are using spread operator 
console.log(obj3);
// output: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

console.log();

const ob1 = {name: "Harsh", lname: "Mehra"}
const ob2 = {age: 31, email: "harsh@gmail.com"}

const ob3 = Object.assign({}, ob1, ob2)         // And, here we are using 'Object.assign() method'
console.log(ob3);
// output: { name: 'Harsh', lname: 'Mehra', age: 31, email: 'harsh@gmail.com' }


