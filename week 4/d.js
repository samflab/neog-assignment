//Return numbers which are divisible by 10

const divisibleBy10 = (num) => num % 10 === 0 ? num : "";
const numbers = [1,23, 45, 66, 89, 10, 100]

numbers.filter(divisibleBy10);
//[10,100]
