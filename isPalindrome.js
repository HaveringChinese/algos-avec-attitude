// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false
// isPalindrome('afifa') //true

function isPalindrome(str){

  //palindrome if str.length = 1
  //test for length 2 strings and opposite pairs from then on recursion (str.slice(1, -1))
  //trim string from far end
  //build string from back to front

  let newStr = "";

  function helper(str){

      if(newStr.length === str.length && newStr === str){
          return true;
      } else {return false};

      newStr += str[-1];
      
      return helper(str.slice(-1));
      
  }
}

isPalindrome("afifa");