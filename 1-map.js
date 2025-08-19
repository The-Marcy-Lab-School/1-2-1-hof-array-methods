const inchesArr = [70, 55, 62, 12, 36];

// This example converts inches to feet and inches strings
const getFeetAndInchesStr = inches => {
  const feet = Math.floor(inches / 12);
  const remainingInches = inches % 12;
  return `${inches} => ${feet} feet ${remainingInches} inches`;
}
const feetAndInches = inchesArr.map(getFeetAndInchesStr);
console.log(feetAndInches);


const users = [
  { id: 1, username: 'ben', isAdmin: false },
  { id: 2, username: 'maya', isAdmin: true },
  { id: 3, username: 'reuben', isAdmin: true },
  { id: 4, username: 'gonzalo', isAdmin: false },
];
const usernames = users.map(user => user.username);


const map = (array, modify) => {
  // ??? 
};

const nums = [1, 2, 3, 4, 5]
const doubled = map(nums, value => value * 2);
// [2,4,6,8,10]