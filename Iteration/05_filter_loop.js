
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter((num) => {
    return num > 5
})

console.log(newNums);

// The main difference b/w "forEach loop" and "filter loop" is "filter loop" returns value and "for each loop" do not return value 

