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

# Scope
**Scope** in JavaScript refers to the context or environment in which variables are declared and can be accessed.

**1. Global Scope** is the widest scope available. Variables declared in global scope are accessible from anywhere in your code, whether it's inside functions, conditional statements, loops, or other blocks of code.

**2. Local Scope** refers to the area within a function where variables are defined and accessible. Variables declared within a function are only accessible within that function, meaning they have local scope. Here's a simple example:

    function myFunction() {
        let localVar = 10;      // localVar is only accessible within myFunction
        console.log(localVar);
    }

    myFunction(); // Output: 10

    console.log(localVar); // Error: localVar is not defined

**3. Block Scope** Unlike global and local scopes, which are defined by functions or global context, block scope is created within specific code blocks, such as conditional statements (if, else, switch) and loops (for, while).

Variables declared using **let** and **const** keywords have block scope.

    function myFunction() {
        if (true) {
        let blockVar = 10;  // blockVar is only accessible within this if block
        console.log(blockVar);
    }
    console.log(blockVar); // Error: blockVar is not defined outside of the if block
    }

    myFunction();

➡️ The key difference between **Block Scope** and **Local Scope** is local scope, variables are typically defined within a function, while block scope is created within code blocks like if, for, or while statements.

➡️ **Scope Chain** the process of searching for variables through multiple scopes is known as the "scope chain."

➡️ **Lexical Scoping** means that the scope of a function is determined by where the function is declared, not where it's called.