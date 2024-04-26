fetch('https://randomuser.me/api/')
.then(function(response){
    return response.json()
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => (console.log(error)))