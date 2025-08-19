// Don't forget about more arguments!
const multipliedByIndexAndLength = [1, 2, 3, 4, 5]
  .map((num, idx, arr) => num * idx * arr.length);

// 1 * 0 * 5 -> [0]
// 2 * 1 * 5 -> [0, 10]
// 3 * 2 * 5 -> [0, 10, 30]
// 4 * 3 * 5 -> [0, 10, 30, 60]
// 5 * 4 * 5 -> [0, 10, 30, 60, 100]

// chaining
const myNums = [1, 2, 3, 4, 5];
const numberOfValuesBiggerThan12WhenTripled = myNums
  .map((num) => num * 3) // multiply by 3
  .filter((num) => num > 12) // keep the numbers bigger than 12
  .length // count how many there are

console.log(numberOfValuesBiggerThan12WhenTripled);
// 1

// advanced Reduce example
const repeaters = [1, 2, 4, 2, 3, 1, 4, 6, 2];

// The starting value here is an empty {}
// 
const frequencies = repeaters.reduce((frequencies, currentNum) => {
  if (!frequencies[currentNum]) {
    frequencies[currentNum] = 1;
  } else {
    frequencies[currentNum]++;
  }
  return frequencies;
}, {});

console.log('frequencies', frequencies);
// frequencies { '1': 2, '2': 3, '3': 1, '4': 2, '6': 1 }

// more HOMs
const hasAtLeastOneEven = nums.some((num) => !(num % 2));


// Nested Array
const smileyFace = [
  ['-', '-', '-', '-', '-', '-', '-'],
  ['-', '-', '*', '-', '*', '-', '-'],
  ['-', '-', '-', '*', '-', '-', '-'],
  ['-', '*', '-', '-', '-', '*', '-'],
  ['-', '-', '*', '*', '*', '-', '-'],
  ['-', '-', '-', '-', '-', '-', '-'],
]

// We can nest the forEach calls
smileyFace.forEach((row, r) => {
  let str = `${r}: `;
  row.forEach(cell => {
    str += cell;
  })
  console.log(str)
});