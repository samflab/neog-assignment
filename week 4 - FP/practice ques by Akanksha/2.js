//1. Get the names in an array for only those who have a cycle.
const family = [
  {
    name    : 'Tanay',
    haveCycle : true
  },
  {
    name     : 'Akanksha',
    haveCycle : false
  },
  {
    name     : 'Tanvi',
    haveCycle : true
  },
	{
    name     : 'Kanak',
    haveCycle : false
  }
];

const checkCycle = (acc, curr) => {
  curr.haveCycle === true ? acc.push(curr.name): "";
  return acc;
}

console.log(family.reduce(checkCycle, []))

//["Tanay","Tanvi"]
