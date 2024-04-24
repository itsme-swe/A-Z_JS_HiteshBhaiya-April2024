const coding = ['Java', 'C++', 'Python', 'Ruby', 'Swift']

coding.forEach((item, index, arr) => {              // for each loop takes call back function
    console.log(item, index, arr);
    
})

// Now passing object inside Array
const myCoding = [
    {
        langName: "Javascript",
        langFileName: "JS"
    },
    {
        langName: "python",
        langFileName: "py"
    },
    {
        langName: "C++",
        langFileName: "cpp"
    }
]

myCoding.forEach((item) => {
    console.log(item.langFileName);
    
})

myCoding.forEach((item) => {
    console.log(item.langName);
    
})
