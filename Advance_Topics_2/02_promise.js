const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({userName: "Harsh", age: 31, emailId: "harsh@gmail.com"})       // this time here we are passig Object as parameter inside 'resolve()'
    }, 1000)
})

// Cosumig Promise
promiseThree.then((user) => {
    console.log(user);      // Data Consumption when passed as Parameter inside 'resolve()'   
})

console.log();

// Creatig new Promise

new Promise(function(resolve, reject){
    setTimeout(function(){

        let error = true           // This time now we'll be handling error, this will let us know if error comes how promise will react

        // Here if condition get's true the resolve statement will execute other wise the reject statement will execute
        if (!error){
            resolve({carName: 'Aston Martin', ownerName: 'Harsh', color: 'glossy green'})
        } else{
            reject('ERROR: Something went wrong')
        }
    }, 3000)
})  // Now here we are using multiple times '.then' which known as chaining
.then(function(user){
    console.log(user);
    return `The car owned by owner is ${user.carName}`    
})
.then((carName) => {
    console.log(carName);  
})
.catch(function(error){     // 'catch()' function handles the all error thrown by promises
    console.log(error);   
})
.finally(() => console.log('Promise is either resolved or rejected'))
