// Creation of Promises

//Here we are storing promise in variable
const promiseOne = new Promise(function(resolve, reject){
    // DB calls, network calls,
    setTimeout(function(){
        console.log('Async Task Completed');
        resolve()
        
    }, 1000 )
})

// Now Consuming promise
promiseOne.then(function(){
    console.log('Promise Consume');
    
})

console.log();

// Creatig new promise with Arrow function and this time we are creating promise directly without storig it into variable
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async Task 2');
        resolve()
        
    }, 2000)
}).then(() => (console.log('Promise cosumed'))
)
