const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        
        let error = true

        if (!error){
            resolve({userName: 'Alex', country: 'USA', profession: "DevopsEng"})
        }else{
            reject("ERROR: Something went's wrong")
        }
    },1000)
})

// Consuming promise this time by new method called {async await} instead of '.then()' and '.catch()'

async  function consumePromiseFive(){

    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}

consumePromiseFive()