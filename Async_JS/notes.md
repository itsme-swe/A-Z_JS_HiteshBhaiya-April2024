# Asynchronous JavaScript
Functions running in parallel with other functions are called asynchronous.

➡️ **Callbacks** is a function passed as an argument to another function. This technique allows a function to call another function and callback function can run after another function has finished.

➡️ **setTimeout( )** method calls a function after a number of milliseconds. 

    1 second = 1000 milliseconds.


    const greet = () => {
    console.log('Hello Harsh');
    
    }

    setTimeout(greet, 4000) 
    
    // output: After 4000 secs this will display 'Hello Harsh'

➡️ **clearTimeout** function in JavaScript is used to cancel a timeout previously set by the setTimeout() function. This is useful when you want to prevent the execution of a function that was scheduled to run after a delay.

    const changeText = function(){
        document.querySelector('h1').innerHTML = "Learning Async from Hitesh Sir"
    }

    const changeMe = setTimeout(changeText, 5000)

    document.querySelector('#stop').addEventListener('click', () => {       
        clearTimeout(changeMe)  
        console.log("Stop");
    })

➡️ **setInterval( )** method calls a function at specified intervals (in milliseconds). method continues calling the function until clearInterval() is called, or the window is closed.