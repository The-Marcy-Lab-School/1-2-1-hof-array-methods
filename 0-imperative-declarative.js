// Imperative: High Control & High Effort:
const nums = [1, 5, 10, 20];

const doubleAllNums = (arr) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const result = arr[i] * 2
    newArr.push(result)
  }
  return newArr;
}
const doubledImperatively = doubleAllNums(nums);
console.log(doubledImperatively);

// Declarative: Low Control & Low Effort:
const doubledDeclaratively = nums.map((num) => num * 2);
console.log(doubledDeclaratively);