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
        let error = true            // This time now we'll be handling error

        // Here if condition get's true the resolve statement will execute other wise the reject statement will execute
        if (!error){
            resolve({carName: 'Aston Martin', ownerName: 'Harsh', color: 'glossy green'})
        } else{
            reject('ERROR: Something went wrong')
        }
    }, 3000)
}).then(function(user){
    console.log(user);
    
})
