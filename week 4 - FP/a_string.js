//find the number of strings with the same string length
const input =["apple", "mango", "guava", "santra", "pineapple"];
//output: {5: 3, 6: 1, 9: 1}

const reducer = (acc, curr) =>{
  (!acc[curr.length]) ? (acc[curr.length] = 1) : acc[curr.length]++;
  
  return acc;
}

console.log(input.reduce(reducer, {}))
