/** array.reduce(accumulatorCallback, startingValue)
 * "reduce" array values into a single value.
 * Callback should accept: an accumulator and the current value
 * Callback should return: the next value of the accumulator (the eventual return value)
 * .reduce() returns the final accumulated value
*/
const lunchCosts = [5, 10, 7, 9, 15, 8, 12];

const totalCost = lunchCosts.reduce((accumulator, currentVal) => {
  return accumulator + currentVal
}, 0); // <-- Don't forget the starting value

console.log(totalCost);



// Use descriptive parameter names!
const totalWithBetterNames = lunchCosts.reduce((total, currentExpense) => {
  return total + currentExpense
}, 0);

console.log(totalWithBetterNames);