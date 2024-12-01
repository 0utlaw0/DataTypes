'use strict';
const arr = [false, 1, -10, `super`, true, `10`, true, `Hi`];
const countTypesInArray = (x) => {
  const count = {};
  for (const value of x) {
    if (count[typeof value] === undefined) {
      count[typeof value] = 0;
    }
    count[typeof value]++;
  }
  return count;
};
console.dir(countTypesInArray(arr));
module.exports = { countTypesInArray };
