let i = 1
let result = ""
while (i <= 10){
    result += i +  " ";
    i++;
}
console.log(result);

// Using while loop on Array

let myCollection = ['Bhakti', 'Home', 'Aston Martin', 'Laptop']

let arr = 0
while (arr < myCollection.length){
    console.log(myCollection[arr]);
    arr++
}


// do while loop

let score = 1
do {
    console.log(`Score is ${score}`);
    score++
}while(score <= 10)