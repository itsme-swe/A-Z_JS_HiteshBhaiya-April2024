const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({userName: "Harsh", age: 31, emailId: "harsh@gmail.com"})       // this time here we are passig Object as parameter inside 'resolve()'
    }, 1000)
})

// Cosumig Promise

promiseThree.then((user) => {
    console.log(user);      // Data Consumption when passed as Parameter inside 'resolve()'
    
})