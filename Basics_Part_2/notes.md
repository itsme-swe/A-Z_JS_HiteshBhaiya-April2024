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