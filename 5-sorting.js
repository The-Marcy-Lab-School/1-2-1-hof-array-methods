const nums = [4, 2, 3, 5, 1];

nums.sort();        // sorts the "source array" nums "in place"
console.log(nums);  // [ 1, 2, 3, 4, 5 ]


// We can change this default behavior though by providing a callback function as an argument:

// a and b will be values in the source array to compare
const compareDescending = (a, b) => {
  if (a > b) {
    // put a to the left of b
    return -1;
  }
  if (a < b) {
    // put a to the right of b
    return 1;
  }
  // they are the same, order doesn't matter
  return 0;
}

nums.sort(compareDescending);
console.log(nums); // [ 5, 4, 3, 2, 1 ]



// Code Along: Sort the evens first!
const compareEvens = (a, b) => {

}
// nums.sort(compareEvens);
// console.log(nums);


/* Challenge:
Implement your own callback function `sortAscendingByLength` that sorts an array of strings according to their length with shorter strings coming first.
*/
const animals = ['aardvark', 'bear', 'cheetah', 'deer'];
const sortAscendingByLength = (a, b) => {

}
animals.sort(sortAscendingByLength);
console.log(animals);
// ['bear', 'deer', 'cheetah', 'aardvark'];