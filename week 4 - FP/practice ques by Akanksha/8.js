//1. Given an array. Convert it in to an object with key as the index of each element and value as the element itself.

const arr = ["You", "all", "are", "rockstars"];

const reducer = (acc, curr, index) =>{
 (!acc[index]) ? (acc[index] = curr) : "";
  return acc;
}

console.log(arr.reduce(reducer, {}))

//{'0': "You", '1': "all", '2': "are", '3': "rockstars"}
