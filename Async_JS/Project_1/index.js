// setTimeout() function
function x() {
    let i = 1
    setTimeout(() => {
        console.log(i);
        
    },2000)
}
x()

const greet = () => {
    console.log('Hello Harsh');
    
}

setTimeout(greet, 4000)     // Here we are taking reference of function greet

const changeText = function(){
    document.querySelector('h1').innerHTML = "Learning Async from Hitesh Sir"
}

const changeMe = setTimeout(changeText, 5000)

document.querySelector('#stop').addEventListener('click', () => {

    // 'clearTimeout()' method clears a timer set with the setTimeout() method.
    clearTimeout(changeMe)  
    console.log("Stop");
    
})

