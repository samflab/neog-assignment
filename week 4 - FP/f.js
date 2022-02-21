//Return an object with 
const sum = (accumulator, curr) => {
    if(curr % 2 === 0)
        accumulator.even += curr;
    else
        accumulator.odd += curr;

    return accumulator;
}

numbers.reduce(sum, {odd: 0, even: 0})
//{odd: 257, even: 76}
