// for loop 

for (let i = 0; i < 10; i++) {
    const element = i
    console.log(element);
}

let myCars = ['Panamera', 'Aston Martin', 'BMW', 'Bentley']

for (let i = 0; i < myCars.length; i++){
    const element = myCars[i]
    console.log(element);
}

// break and continue 

for (let i = 1; i <= 20; i++){
    if (i == 5){
        console.log(`Detected 5`);
        break
    }
    console.log(`Value of i is ${i}`);
    
}