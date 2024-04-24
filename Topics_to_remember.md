# Spread Operator(...)
The **spread operator**, denoted by three consecutive dots **(...)**, is primarily used for expanding iterables like arrays into individual elements. This operator allows us to efficiently merge, copy, or pass array elements to functions without explicitly iterating through them.

🟡 **Use cases of Spread Operator**

➡️ **Combining Arrays**

    const arr = [1,2,3]
    
    const arr1 = [4,5,6]
    
    const combined = [...arr,...arr1]
    
    console.log(combined);

    // output: [ 1, 2, 3, 4, 5, 6 ]

➡️ **Passing Arguments to Functions** The **spread operator** simplifies the process of passing variable-length arguments to functions. Instead of specifying each argument individually, we can use the spread operator to unpack an array of values into function parameters.

    function add(a,b,c){
    
        return a + b + c
    
    }

    const nums = [1,2,3]

    const result = add(...nums)     // Passig arguments by using (...)
    
    console.log("Result of sum: ", result);

    // output: Result of sum:  6

# Rest Operator(...)
While the **spread operator** expands elements, the **rest operator** combine them into a single entity within function parameters or array destructuring.

    function add(...val){
        return val
    }

let values = add(200, 300, 400, 500)

console.log(values);

// output: [ 200, 300, 400, 500 ]