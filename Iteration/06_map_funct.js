// Chaining achieved with the help of map() function
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8]

const newNums = myNumbers
                .map((val) => val * 10)
                .map((val) => val + 1)
                .filter((val) => val >= 31)

console.log(newNums);       // output: [ 31, 41, 51, 61, 71, 81 ]
