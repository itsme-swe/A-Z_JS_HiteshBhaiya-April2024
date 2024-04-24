# JS Functions
A JavaScript function is a block of code designed to perform a particular task. A JavaScript function is executed when "something" invokes it (calls it).

A JavaScript function is defined with the **function** keyword, followed by a name, followed by parentheses ( ). The parentheses may include parameter names separated by commas **(parameter1, parameter2, ...)**

    function add(num1, num2) {
        
        return num1 + num2

    }

    console.log(add(5,5));  // Function arguments are the values received by the function when it is invoked.

➡️ **Arrow Functios** It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword.

    const addNum = (num1, num2) => num1 + num2

    console.log(addNum(5,5));       // output: 10

    Note: This works only if the function has only one statement.

    Note: If we write curly {} we need to write return statement but when we mentio parenthesis () we dont't need to write return statement. 

➡️ **Immediately Invoked Function Expression (IIFE) :**  It's a function that is executed as soon as it's defined. This pattern is often used to create a private scope for variables, preventing them from polluting the global scope.

    (function buyCar(carnam){
        console.log(`I own ${carnam}`);
    
    })("Aston Martin");     // output: I own Aston Martin

    console.log();

    // IIFE with Arrow function 
    (() => {
        console.log(`We are connected to Server`);

    })();       // output: We are connected to Server

