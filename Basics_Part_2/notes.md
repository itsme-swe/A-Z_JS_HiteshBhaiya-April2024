# Array
An array is a special variable, which can hold more than one value. Arrays are a special type of objects. The **typeof** operator in JavaScript returns "object" for arrays. We can create in following ways:

    const cars = ["Saab", "Volvo", "BMW"];      // Using array literal

    const company = new Array('Nexa', 'Hyundai', 'Maruti')      // Using new keyword

# Array Methods
**1. length** The **length** property returns the length (size) of an array:

    const fruits = ["Apple", "orange", "Mango", "Kiwi"]
    
    let size = fruits.length
    
    console.log(size);      // output: 4

**2. toString( )** method **toString( )** converts an array to a string of (comma separated) array values.

    const fruits = ["Apple", "orange", "Mango", "Kiwi"]
    
    console.log(fruits.toString());      // output: 4

**3. at( )** method returns an indexed element from an array.

    const fruits = ["Apple", "orange", "Mango", "Kiwi"]
    
    let fruit = fruits.at(2)

    console.log(fruit)      // output: Mango

**4. push( )** method adds a new element to an array (at the end):

    const fruits = ["Banana", "Orange", "Apple", "Mango"];

    fruits.push('Melon')

    console.log(fruits)

**5. pop( )** method removes the last element from an array.

    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    
    fruits.pop();

**6. join( )** method also joins all array elements into a string. It behaves just like toString(), but in addition you can specify the separator.

    let cars = ['Hyundai', 'BMW', 'Skoda', 'Jimny']
    
    console.log(cars.join('-'));

    // output: Hyundai-BMW-Skoda-Jimny      string type

**7. shift( )** method removes the first array element and "shifts" all other elements to a lower index and the method returns the value that was "shifted out":

    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    
    fruits.shift();

    // output: Banana 

**8. unshift( )** method adds a new element to an array (at the beginning), and "unshifts" older elements:

    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    
    fruits.unshift('Lemon');

**9. concat( )** method creates a new array by merging (concatenating) existing arrays.

    const myGirls = ["Cecilie", "Lone"];
    
    const myBoys = ["Emil", "Tobias", "Linus"];

    const myChildren = myGirls.concat(myBoys);
    
    console.log(myChildren);

    // output: ['Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus']

**10. flat( )** method creates a new array with sub-array elements concatenated to a specified depth.

    const myArr = [[1,2],[3,4],[5,6]];
    
    const newArr = myArr.flat();
    
    console.log(newArr);

    // output: [ 1, 2, 3, 4, 5, 6 ]

**11. splice( )**  method can be used to add new items to an array.

    const vegies = ['Tomato', 'Onion', 'Carrot' ]
    
    vegies.splice(1, 0,'Garlic','Ginger')
    
    console.log(vegies);        // output: ['Tomato', 'Garlic', 'Ginger', 'Onion', 'Carrot']

    
    🔸 The first parameter (1) defines the index_value where new elements should be added (spliced in).

    🔸 The second parameter (0) defines how many elements should be removed.

    🔸 The rest of the parameters ("Garlic" , "Ginger") define the new elements to be added.

And, we ca use **splice( )** method to remove elements from array by using clever parameter settings and it returns an array with the deleted items.

    const vegies = ['Tomato', 'Garlic', 'Ginger', 'Onion', 'Carrot']

    vegies.splice(1, 2)

    console.log(vegies);    // output: [ 'Tomato', 'Onion', 'Carrot' ]


    🔸 The first parameter (1) defines the index_value from where the elements should be removed.

    🔸 The second parameter (2) defines how many elements should be removed.

    🔸 The rest of the parameters ("Garlic" , "Ginger") define the new elements to be added.

**12. slice( )** method slices out a piece of an array into a new array.

    const stack1 = ['Java', 'Python', 'Ruby', 'JS', 'C++']
    
    const st = stack1.slice(1)
    
    console.log(st);    // output: [ 'Python', 'Ruby', 'JS', 'C++' ]

🟡 **Note -** The main difference between the **splice()** and **slice()** methods in JavaScript is that splice() modifies the original array, while slice() creates a new array.

**13. indexOf( )** method searches an array for an element value and returns its index value and it returns -1 if the item is not found.

    const names = ['Ravi', 'Shyam', 'Mohan', 'Pinki']
    
    const position = names.indexOf('Shyam')
    
    const p1 = names.indexOf('Pinki')
    
    console.log(position);      // output: 1
    
    console.log(p1);        // output: 3

**14. includes( )** method allows us to check if an element is present in an array (including NaN, unlike indexOf) and it returns boolean value.

    const names = ['Ravi', 'Shyam', 'Mohan', 'Pinki']

    console.log(names.includes('Shyam'));       // output: true

**15. Array.isArray( )** method returns **true** if an object is an array, otherwise **false**.

    const text = "Hello Harsh"
    
    let isArray = Array.isArray(text)
    
    console.log(isArray);       // output: false

**16. Array.from( )** method returns an array from any object with a length property ad returns an array from any iterable object.

    const text = "Hello Harsh"
       
    const myarr = Array.from(text)
    
    console.log(myarr);

    // output: [
      'H', 'e', 'l', 'l',
      'o', ' ', 'H', 'a',
      'r', 's', 'h'
    ]

**17. spread( ) operator** (...) allows us to quickly copy all or part of an existing array or object into another array or object.

    const numbersOne = [1, 2, 3];
    
    const numbersTwo = [4, 5, 6];
    
    const numbersCombined = [...numbersOne, ...numbersTwo];
    
    console.log(numbersCombined);   // output: [ 1, 2, 3, 4, 5, 6 ]

# JS Objects
In JavaScript, almost "everything" is an object.

🔸Booleans can be objects (if defined with the **new** keyword)

🔸Numbers can be objects (if defined with the **new** keyword)

🔸Strings can be objects (if defined with the **new** keyword)

🔸Dates are always objects

🔸Maths are always objects

🔸Regular expressions are always objects

🔸Arrays are always objects

🔸Functions are always objects

🔸Objects are always objects

    const person = {

        firstName: "Harsh",
        lastName: "Mehra",
        age: 31,
        height: "5'6",
        weight: 68.5

    }

    🔸Accessing objects in two ways: 

    1. console.log(person.firstName)    By using object.propertyName

    2. console.log(person["lastName"])  By using object[propertyName]


➡️ Another method to create object is **Object.create( )**

➡️  The **Object.freeze( )** method is used to freeze an object, making it immutable.

    Object.freeze(person)

    person.age = 29     // This change will not take effect

    console.log(person)

➡️ **this keyword** keyword refers to an object. The **this** keyword refers to different objects depending on how it is used:

    In an object method, this refers to the object.
    
    Alone, this refers to the global object.
    
    In a function, this refers to the global object.
    
    In a function, in strict mode, this is undefined.
    
    In an event, this refers to the element that received the event.
    
    Methods like call(), apply(), and bind() can refer this to any object.
