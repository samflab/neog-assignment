//Given an array. Write a function to get the sum of all elements which are greater than 50.

const arr = [1, 2, 3, 58, 5, 6, 62, 8, 70];

const sumGreaterThan50 = (acc, curr) => {
  curr > 50 ? acc += curr : acc;
  return acc
}

console.log(arr.reduce(sumGreaterThan50, 0))

//190
