//return an array of objects with the items as key and the value to be length of the item

const input =["apple", "mango", "guava", "santra", "pineapple"];

const reducer = (acc, curr) =>
  [...acc, !acc.curr ? {[curr]: curr.length} : ""]


console.log(input.reduce(reducer, []))
