# Promises
A **Promise** is like a guarantee that something will happen in the future, and when it's done, you'll get the result you were expecting, whether it's success or failure. It helps handle asynchronous tasks, like fetching data from the internet or waiting for user input, in a structured and manageable way.

    Promise is having 3 states:

    🔸pending: initial state, neither fulfilled nor rejected.

    🔸fulfilled: meaning that the operation was completed successfully.
    
    🔸rejected: meaning that the operation failed
 
# fetch( )
**fetch( )** is a built-in JavaScript function used to make asynchronous HTTP requests to servers, allowing you to retrieve resources such as data or files from a specified URL. It returns a Promise that resolves to the Response object representing the response to the request.

The fetch method can also make HTTP requests- GET request (to get data) and POST request (to post data). Fetch also integrates advanced HTTP concepts such as CORS and other extensions to HTTP

    fetch('https://randomuser.me/api/')
        .then(function(response){
        return response.json()
    })
    .then((data) => {
    console.log(data);
    })
    .catch((error) => (console.log(error)))