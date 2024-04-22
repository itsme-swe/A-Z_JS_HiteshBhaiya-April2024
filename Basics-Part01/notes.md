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

**9. match( )** method matches a string against a regular expression . **match( )** method returns an array with the matches and returns null if no match is found.

    let indx = "This method will return index value of string"
    
    console.log(indx.match("lue"));

**10. repeat( )** method returns a string with a number of copies of a string.

    let copies = "I will buy Aston Martin"
    
    let numCopies = copies.repeat(3)
    
    console.log(numCopies);

    // output - I will buy Aston MartinI will buy Aston MartinI will buy Aston Martin

**11. replace( )** method searches a string for a value or a regular expression and returns a new string with the value(s) replaced.

    let person = "Mr Blu has a blue house and a blue car "
    
    let newPerson = person.replace(/blue/g, "red")      // The g flag at the end (/blue/g) stands for "global", meaning it will replace all occurrences of the pattern in the string, not just the first one.
    
    console.log(newPerson);

    // output: Mr Blu has a red house and a red car

**12. slice( )** method extracts a part of a string and returns the extracted part in a new string. The start and end parameters specifies the part of the string to extract.

    let emailID = "harsh@gmail.com"
    
    let finalOne = emailID.slice(0,5)       // .slice(start_index, end_index)
    
    console.log(finalOne);      //Output: harsh

**13. split( )** method splits a string into an array of substrings and method returns the new array. If (" ") is used as separator, the string is split between words and it also convert string into object.

    let greet = "How are you doing today?";
    
    const myArray = greet.split(' ')
    
    console.log(myArray);

    //output: [ 'How', 'are', 'you', 'doing', 'today?' ]

**14. substring( )** method extracts characters, between two indices (positions), from a string, and returns the substring and extracts characters from start to end (exclusive). 

If start is greater than end, arguments are swapped: (4, 1) = (1, 4). Start or end values less than 0, are treated as 0.

    let raceCar = "Aston Martin"
    
    let fCar = raceCar.substring(2)     .substring(start, end)
    
    console.log(fCar);      // Output: ton Martin

**15. trim( )** method removes whitespace from both sides of a string.

    let newCar = "    Hyundai Creta   "
    
    let car = newCar.trim()
    
    console.log(newCar);

    console.log(car);


**16. valueOf()** method returns the primitive value of a string and can be used to convert a string object into a string.

    let str1 = new String("HelloWorld")
    
    let str2 = str1.valueOf()
    
    console.log(typeof(str1));      // object
    
    console.log(typeof(str2));      // string

**🔶 Note: All string methods return a new value. They do not change the original variable.s**

# JS Number Reference
The Number constructor contains constants and methods for working with numbers. Values of other types can be converted to numbers using the Number() function.

    let age = new Number(31)        // object type

    let num = Number(age)           // And, this will convert object to number

    console.log(typeof(num))        // output: number

# Number Methods
**1. Number.EPSILON** returns the difference between the smallest floating point number greater than 1 and 1. EPSILON is a property of the JavaScript Number object.

    let x = Number.EPSILON

    console.log(x);     //output: 2.220446049250313e-16

**2. Number.isInteger( )** method returns true if a value is an integer of the datatype Number. Otherwise it returns false.

    let a = Number.isInteger(2.5)
    
    let b = Number.isInteger(2)
    
    console.log(a);     // output: false
    
    console.log(b);     // output: true

**3. Number MAX_VALUE** Number.MAX_VALUE returns the largest number possible in JavaScript. It is a property of the JavaScript Number object. We can only use it as **Number.MAX_VALUE.**

**4. Number.MIN_VALUE** returns the smallest number possible in JavaScript and the value it return is 5e-324.

**5. toFixed( )** method converts a number to a string and rounds the string to a specified number of decimals.

    let number = 25.6756
    
    let n = number.toFixed(2)
    
    console.log(n);             // Output: 25.68
    
    console.log(typeof(n));     // string

**6. toLocaleString( )**  returns a number as a string, using local language format.

    let pay = 12500000

    let text = pay.toLocaleString("en-IN", {style:"currency", currency:"INR"})

    console.log(text);          // Output: ₹1,25,00,000.00

    console.log(typeof text);   // string

**7. toPrecision( )** method formats a number to a specified length.

    let amt = 25.234
    
    console.log(amt.toPrecision(3));    // output: 25.2

# JS Math Object
The JavaScript Math object allows us to perform mathematical tasks on numbers.

    console.log(Math.PI);       // Returning the value of pie

    // Output: 3.141592653589793

Unlike other objects, the Math object has no constructor, it is Static. All methods and properties can be used without creating a Math object first.

# Math Methods
**1. abs( ) :** The **Math.abs( )** method returns the absolute value of a number.

    let a = Math.abs(7.25)     // Output: 7.25
    let b = Math.abs(-7.25)    // Output: 7.25
    let c = Math.abs(null)     // Output: 0
    let d = Math.abs('Hello')  // Output: NaN
    let e = Math.abs(2-3)      // Output: 1

    console.table([a,b,c,d,e])

**2. ceil( ) :** The **Math.ceil( )** method rounds a number rounded UP to the nearest integer.

    let x = Math.ceil(1.2)      //output: 2

    let y = Math.ceil(-5.1)     //output: -5

    console.log(x,y);

**3. floor( ) :** The **Math.floor( )** method rounds a number DOWN to the nearest integer.

    let ab = Math.floor(2.7)        // output: 2

    let bc = Math.floor(-6.8)       //output: 7

    console.log(ab,bc);

**4. pow( ) :** The **Math.pow()** method returns the value of x to the power of y.

    let power = Math.pow(2,3)
    
    console.log(power);

    //output: 8

**5. random( ) :** The **Math.random()** method returns a random floating point number between 0 (inclusive) and 1 (exclusive).

**6. round( ) :** The **Math.round( )** method rounds a number to the nearest integer.
    
    2.49 will be rounded down (2), and 2.5 will be rounded up (3).

**7. trunc( ) :** The **Math.trunc( )** method returns the integer part of a number and it removes the decimals (does NOT round the number).

    let int = Math.trunc(77.890)
    
    console.log(int);

    //output: 77
