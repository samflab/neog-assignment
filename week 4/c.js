// Return the biggest number in the array

const biggestNum = (a, b) => a > b ? a : b 
const numbers = [1,23, 45, 66, 89, 10, 100]

numbers.reduce(biggestNum, -1)
//100
