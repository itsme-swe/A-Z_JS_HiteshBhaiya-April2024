// High order Array Loops

// "for of" loop cannot be applied on objects 
const val = [1, 2, 3, 4]
for (const num of val) {
    console.log(num);
    
}

const greeting = "Hello World"
let result = ""
for (const greet of greeting) {
    result += greet + ""
    
}
console.log(typeof result);
console.log(result);

// Iterating over map
const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States')
map.set('Fr', 'France')
map.set('IN', "India")

console.log(map);   // output: Map(3) { 'IN' => 'India', 'USA' => 'United States', 'Fr' => 'France' }

for (const [key, val] of map) {
    console.log(key, ':-', val);
    
}
/* output: IN :- India
           USA :- United States
           Fr :- France */


// "for in" loop on objects
const myObj = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
} 

for (const key in myObj) {
    console.log(`${key} shortcut is for ${myObj[key]}`);
    
}

// "for in" loop on Array
const lang = ['Java', 'C++', 'Dart', 'JS']
for (const key in lang) {
    console.log(`${key} is for ${lang[key]}`);
    
}