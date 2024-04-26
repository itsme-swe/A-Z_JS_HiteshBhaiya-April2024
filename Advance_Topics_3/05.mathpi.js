// const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')

// console.log(descriptor);

// console.log();

const car = {
    carname: 'Aston Martin',
    ownername: 'Harsh Mehra',
    price: '4.5 cr'
}

console.log(Object.getOwnPropertyDescriptor(car, 'ownername'));

// Now changing properties of Object
Object.defineProperty(car, 'name', {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(car, 'name'));





