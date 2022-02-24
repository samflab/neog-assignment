//1. Given an array. Write a function that takes in the given array and prints only the words which are more than 5 characters in length.
const arr = ['eat', 'sleep', 'repeat', 'code'];

const checkLength = (acc, curr) => {
  curr.length > 5 ? acc.push(curr) : "";
  return acc;
}

console.log(arr.reduce(checkLength, []))
