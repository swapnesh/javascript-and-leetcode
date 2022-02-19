/*
Question 09

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters
and removing all non-alphanumeric characters, it reads the same forward and backward.
Alphanumeric characters include letters and numbers.
Given a string s, return true if it is a palindrome, or false otherwise.
*/

// This function sanitizes the string
function sanitize(s) {
  let result = '';

  // Change uppercase to lowercase
  result = s.toLowerCase();

  // Remove all alphanumeric characters
  // [^a-zA-Z0-9] or use -> /\W/g
  result = result.replace(/[^a-z0-9]/g, '');

  return result;
}

// Naive Code
function isPalindrome(s) {
  const sanitizedStr = sanitize(s);
  return (sanitizedStr === sanitizedStr.split('').reverse().join(''));
}

// Better Approach
function isPalindromeWithPointer(s) {
  const sanitizedStr = sanitize(s);
  let left = 0;
  let right = sanitizedStr.length - 1;

  while(left < right) {
    if(sanitizedStr[left] !== sanitizedStr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(isPalindrome('race car'));
console.log(isPalindrome('sa 1r1 a s'));
console.log(isPalindrome('sa @r# 1a1 s'));
console.log(isPalindrome('sarah'));

console.log(`==============================`);

console.log(isPalindromeWithPointer('race car'));
console.log(isPalindromeWithPointer('sa 1r1 a s'));
console.log(isPalindromeWithPointer('sa @r# 1a1 s'));
console.log(isPalindromeWithPointer('sarah'));
