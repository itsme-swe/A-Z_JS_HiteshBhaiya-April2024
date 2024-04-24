//  Immediately Invoked Function Expression 

(function buyCar(carnam){
    console.log(`I own ${carnam}`);
    
})("Aston Martin");

console.log();

// IIFE with Arrow function 
(() => {
    console.log(`We are connected to Server`);
    
})();
