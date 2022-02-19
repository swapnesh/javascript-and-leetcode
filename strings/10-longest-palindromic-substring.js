function longestPalindrome(str) {
  let startIndex = 0;
  let maxLength = 1;

  function expandAroundMiddle(left, right) {
    while(left >=0 && right < str.length && str[left] === str[right]) {
      const currentPalLength = right -left + 1;

      if(currentPalLength > maxLength) {
        maxLength = currentPalLength;
        startIndex = left;
      }

      left--;
      right++;
    }
  }

  for(let i=0; i < str.length; i++) {
    expandAroundMiddle(i-1, i+1);
    expandAroundMiddle(i, i+1);
  }

  return str.slice(startIndex, startIndex + maxLength);
}

console.log(longestPalindrome('abccbade')) // returns abccba
console.log(longestPalindrome('abccbadedsdabcdefedcba')) // returns abcdefedcba
console.log(longestPalindrome('abccbadedsdabcdeffedcba')) // returns abcdeffedcba
