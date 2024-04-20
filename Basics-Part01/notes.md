# Keywords used to define variables in JS
**1. const -** const is also introduced in ES6 and is used to declare constants, whose values cannot be re-assigned and variables declared with const are block-scoped like let.

    const accountId = 21345

**2. let -** Variables declared with let are block-scoped, which means they are only accessible within the block they are declared in (e.g., within { } ). **let** variables can be reassigned but not re-declared within the same scope and **let** variables are not accessible before they are declared (this is known as the "temporal dead zone").

    let accountName = "Harsh Mehra"

**🔶 Command used to create new file using PowerShell**

    New-Item -ItemType File file.txt

    E.g : New-Item -ItemType File index.js

# Data Types 
**🔶 Primitive DataTypes**

**1. Number -** Represents numeric values. It includes integers, floating-point numbers, and special numeric values like Infinity, -Infinity, and NaN (Not-a-Number).

**2. String -** Represents textual data enclosed within single (''), double ("") or backtick (``) quotes. Strings are immutable in JavaScript.

**3. Bigint -**

**4. Boolean -**  Represents a logical value indicating true or false.

**5. Undefind -** Represents a variable that has been declared but not assigned a value. It also represents the value returned by functions with no return value.

**6. Null -** Represents an intentional absence of any value. It is a special value that signifies 'nothing' or 'empty'.

**7. Symbol -** Represents a unique identifier. Symbols are used to create unique property keys in objects.

**8. Object -** Represents a collection of key-value pairs where values can be of any data type (including other objects).

**🔶 Object DataTypes**

**1. An object**

**2. An array -**

**3. A date -**

# Conversion Operations
Data conversion operations allow you to convert values from one data type to another. There are two types of data conversions: **implicit and explicit**.

**1. Implicit Coversion -**  Implicit conversion, also known as type coercion, occurs automatically when values of different types are used together in an expression. 

    let score = 33
    let str = "10"

    let result = score + str    // Implicit conversion of num to string

    console.log(result);    // Output - "3310" string

**2. Explicit Conversion -** Explicit conversion involves using built-in functions or operators to explicitly convert values from one type to another. This allows for more control over the conversion process and can help avoid unexpected behavior.

Some common methods of explicit conversion include:

**🔸parseInt( ) and parseFloat( ) -** Convert strings to integers or floating-point numbers, respectively.

    let str = "10";
    
    let num = parseInt(str);
    
    console.log(num); // Output: 10

**🔸Number( ) -** Converts a value to a number.

    let str = "10";

    let num = Number(str);

    console.log(num); // Output: 10

**🔸Boolean( ) -** Converts a value to a boolean.

    let value = 0;
    
    let bool = Boolean(value);
    
    console.log(bool); // Output: false

**🔸toString( ) -** Converts a number to a string.

    let num = 10;
    
    let str = num.toString();
    
    console.log(str); // Output: "10"