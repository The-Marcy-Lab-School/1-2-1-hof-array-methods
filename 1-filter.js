const scores = [100, 85, 90, 70, 74];
const isPassing = (score) => {
  return score >= 75;
}
const passingScores = scores.filter(isPassing);
console.log(`There were ${passingScores.length} passing scores`);



const users = [
  { id: 1, username: 'ben', isAdmin: false },
  { id: 2, username: 'maya', isAdmin: true },
  { id: 3, username: 'reuben', isAdmin: true },
  { id: 4, username: 'gonzalo', isAdmin: false },
];
const admins = users.filter(user => user.isAdmin);
console.log(admins);



/* 
Implement your own `filter` function that takes an `array` and a `test` callback and returns an array. The `test` callback should be invoked with 3 inputs for every value:
1. The current `value`
2. The current value's `index` in the source `array`
3. The source `array` itself

The `test` callback should be expected to return `true` or `false`. If `test` returns `true`, the value it was called on should be added to the returned array.
*/
const filter = (array, test) => {
  // ??? 
};

const nums = [1, 2, 3, 4, 5];
const evens = filter(nums, value => value % 2 === 0);
console.log(evens);
// [2, 4]