/*
Given an integer array nums, return true if any value appears at least twice in the array,
and return false if every element is distinct.
*/

function containsDuplicate(arr = []) {
  const visitedNums = {};

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (visitedNums[num]) return true;
    visitedNums[num] = true;
  }

  return false;
}

console.log(containsDuplicate([1, 2, 3, 1])) // true
console.log(containsDuplicate([1, 2, 3, 4])) // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])) // true
