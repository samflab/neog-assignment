//return a string which has vowels
const vowels = /[aeiou]/gi;

const filterVowels =(str)=> (str.match(vowels));

const stringArray = ["abc", "def", "ghj", "klm", "poq", "asd"];

console.log(stringArray.filter(filterVowels));


