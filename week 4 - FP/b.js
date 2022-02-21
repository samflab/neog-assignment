// Return the sum of the all the numbers present at odd indices
const oddIndicesSum = (sum, num, index) => index % 2 === 1 ? sum += num : sum

const numbers = [1,23, 45, 66, 89, 10, 100]

numbers.reduce(oddIndicesSum, 0) //99
