const nums = [2, 24, 17, 5, 20, 3];

/* IMPERATIVE
Do exactly what I tell you.
- High control
- High effort
*/
const doubleAllNums = (arr) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const result = arr[i] * 2
    newArr.push(result)
  }
  return newArr;
}
const doubledNumsOld = doubleAllNums(nums);


/* DECLARATIVE
Specifies the result desired without HOW to get there
- Low effort
- Low control
*/
const doubledNums = nums.map((num) => num * 2);


// A higher order function is a function that takes in 
// a callback function and invokes that function
// OR 
// A function that returns a function






/** array.find(testCallback)
 * Get the first matching element in an Array, or `null`
 * Callback should accept: the current value. Its index and the entire array are optional
 * Callback should return: a boolean used to determine if the match is found or not
 * .find() returns: the found value or `null`
*/
/* Remember, the return value of the callback must return a boolean! */
const firstOddValue = nums.find((num) => num % 2);


/** array.findIndex(testCallback)
 * Get the index of the first matching element in an Array, or `null`
 * Callback should accept: the current value. Its index and the entire array are optional
 * Callback should return: a boolean used to determine if the match is found or not
 * .findIndex() returns: the found index or `-1`
*/
const firstOddValueIdx = nums.findIndex((num) => num % 2);



/** array.reduce(accumulatorCallback, startingValue)
 * "reduce" array values into a single value.
 * Callback should accept: an accumulator and the current value
 * Callback should return: the next value of the accumulator (the eventual return value)
 * .reduce() returns the final accumulated value
*/
const lunchCosts = [5, 10, 7, 9, 15, 8, 12];
const startingVal = 0;
const addUpCosts = (accumulator, currentVal) => accumulator + currentVal;
// reduce is tricky, always use good names!
const addUpCostsBetter = (total, dailyExpense) => total + dailyExpense;

const totalCost = lunchCosts.reduce(addUpCosts, startingVal);




/** Advanced stuff! */

// Don't forget about more arguments!
const multByIndexAndLength = [1, 2, 3, 4, 5]
  .map((num, idx, arr) => num * idx * arr.length);

// chaining
const numValuesBiggerThan12WhenTripled = nums
  .map((num) => num * 3)
  .filter((num) => num > 12)
  .length

// advanced Reduce example
const repeaters = [1, 2, 4, 2, 3, 1, 4, 6, 2];
const frequencyCounter = (acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
};

const frequencies = repeaters.reduce(frequencyCounter, {});

// more HOMs
const hasAtLeastOneEven = nums.some((num) => !(num % 2));