const car = () => {
    let carName = "Aston Martin"
    console.log(this.carName);
    
}
car()

// Arrow function implicit return
const addNum = (num1, num2) => num1 + num2

console.log(addNum(5,5));
