//Find the sum of all the odd numbers
const oddSum = (prev, curr) => { 
    if(curr % 2 === 1)
        prev += curr;
    return prev;
}

const numbers = [1,23, 45, 66, 89, 10, 100]

numbers.reduce(oddSum) //158
