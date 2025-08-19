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