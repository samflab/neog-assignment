// 10. Given an array of objects.
//const inventory = [
//     {name: 'fans', quantity: 3},
//     {name: 'chimneys', quantity: 0},
//     {name: 'bulbs', quantity: 5},
//     {name: 'stove', quantity: 1}    
//   ];

const inventory = [
    {name: 'fans', quantity: 3},
    {name: 'chimneys', quantity: 0},
    {name: 'bulbs', quantity: 5},
    {name: 'stove', quantity: 1},
  {name:"cycle", quantity:100},
  {name:"table", quantity:0}
  ];
//a. Get all the items in an array whose quantity is less than 2.

const reducer1 = (acc, curr) => {
  curr.quantity <= 2 ? acc.push({...curr}) : "";
  
  return acc;
}

console.log(inventory.reduce(reducer1, []))

//b. Get the total quantity of items present in the inventory.

const reducer2 = (acc, curr) => acc += curr.quantity

console.log(inventory.reduce(reducer2, 0))

//c. Find the object which contains the item whose quantity is zero.

const reducer3 = (acc, curr) => {
  curr.quantity === 0 ? acc.push({...curr}) : "";
  return acc
}

console.log(inventory.reduce(reducer3, []))
