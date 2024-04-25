const myNums = [1 ,2, 3]

const myTotal = myNums.reduce((acc, currVal) => {
    console.log(`acc: ${acc} and currval: ${currVal}`);
    return acc + currVal
}, 0)

console.log(myTotal);       // output: 6

/* output: acc: 0 and currval: 1
           acc: 1 and currval: 2
           acc: 3 and currval: 3 */



/*Notes: Here 'acc' stands for accumulator and 'currVal' stands for current value. 
Accumulator is the value that is returned by the callback function and passed as the first argument in the next iteration.   */  