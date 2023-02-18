const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  // Copy your `addNums10` code here
  function addNums10(increment) {
    // Fill this in
    let array = [];

    for (let i = increment; i <= 10 * increment; i += increment) {
      console.time(`addNums(${i})`)
      array.push(addNums(i))
      console.timeEnd(`addNums(${i})`)
    }
    return array;
    // Then, add timing code
    // Your code here
  }
  const start = Date.now()
  addNums10(increment)
  const end = Date.now()

  console.log(`${end - start}ms`)
}





function addManyNums10Timing(increment) {
  // Copy your `addManyNums10` code here
  function addManyNums10(increment) {
    // Fill this in
    let array = [];

    for (let i = increment; i <= 10 * increment; i += increment) {
      console.time(`addManyNums10(${i})`)
      array.push(addManyNums(i))
      console.timeEnd(`addManyNums10(${i})`)
    }
    return array;
  }
  // Then, add timing code

  // Your code here
  const start = Date.now()
  addManyNums10(increment)
  const end = Date.now()

  console.log(`${end - start}ms`)
}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
