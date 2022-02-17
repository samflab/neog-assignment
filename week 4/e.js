//Return an array of numbers where odd numbers are incremented by one and even numbers are decremented by one.
const fun1 = (prev, curr) => {
    if(curr % 2 === 0)
        prev.push(curr - 1);
    else
        prev.push(curr + 1);

    return prev;
}

const numbers = [1,23, 45, 66, 89, 10, 100]
numbers.reduce(fun1, []);
//[2, 24, 46, 65, 90, 9, 99]
