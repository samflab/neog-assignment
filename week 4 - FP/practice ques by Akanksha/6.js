//Given an array. Write a function to find the product of all elements which are even.

const arr = [1, 2, 3, 7, 5, 6, 8, 9];

const productofEven = (acc, curr) => {
  curr % 2 === 0 ? acc *= curr : acc;
  return acc;
}

console.log(arr.reduce(productofEven, 1))
//96
