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

# Strings
The String object is used to represent and manipulate a sequence of characters and to store text. Normally, JavaScript strings are primitive values, created from literals. But strings can also be defined as objects with the keyword new:

    let text = "Hello Hitesh Sir";                  // Primitive type

    let newText = new String("I am Harsh Mehra")    // Object type

**🟡 Template String -** Templates were introduced with ES6 (JavaScript 2016). Templates are strings enclosed in backticks(``). Templates allow multiline strings:

    let text = `I am glad
                that I can 
                learn coding
                fro you `;

**🟡 String Interpolation -** String interpolation allows you to embed expressions within string literals. We can use string interpolation in JavaScript with **Template Literals**, **Object properties** and with **Functions**.

    const name = "harsh"
    const age = 31
    console.log(`My name is ${name} and I am ${age} years old.`)

# JS String Methods  
**1. charAt( )** method returns the character at a specified index (position) in a string.

    let text = "Hello World"
    
    let letter = text.charAt(1)
    
    console.log(letter)     // Output : e

**2. charCodeAt( )** method returns the Unicode of the character at a specified index (position) in a string.

    let text = "Hello World"
    
    let letter = text.charCodeAt(1)
    
    console.log(letter)     // Output : 101

**3. concat( )** method joins two or more strings. It does not change the existing strings and  returns a new string.

    let text1 = "Hello"
    let text2 = "World"
    let text3 = "Have a nice day"

    let result = text1.concat(" ", text2," ", text3)    // " " stands for empty spaces
    console.log(result);

**4. endsWith( )** method returns **true** if a string ends with a specified string. Otherwise it returns **false** and it is case sensitive method.

    let newTxt = "Hello Sir"
    
    let output = newTxt.endsWith("Sir")
    
    console.log(output);        // true

**5. String.fromCharCode( )** method converts Unicode values to characters.

    let name = String.fromCharCode(72, 97, 114, 115, 104)
    
    console.log(name);      // output: Harsh

**6. includes( )** method returns **true** if a string contains a specified string. Otherwise it returns **false**.


    let role = "I am a software engineer"

    console.log(role.includes('software'));     // Output: true

**7. indexOf( )** method returns the position of the first occurrence of a value in a string and it returns -1 if the value is not found.

    let index = "This method will return index value of string"
    
    console.log(index.indexOf("return"));   // output: 17

**8. length** property returns the length of a string.

    let index = "This method will return index value of string"
    
    console.log(index.legth);       // Output: 45