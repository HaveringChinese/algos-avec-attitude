//naive solution faster than 46% of leetcode users, less memory than 58%
var isPalindrome = function(x) {
  let reversed = [], stringified = x.toString();
  for(let i = stringified.length - 1; i >= 0; i--){
      reversed.push(stringified[i]);
  }
  if(stringified === reversed.join('')) return true;
  return false;
};
