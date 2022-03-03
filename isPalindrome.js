// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false
// isPalindrome('afifa') //true

// function isPalindrome(str){

//     //palindrome if str.length = 1
//     //test for length 2 strings and opposite pairs from then on recursion (str.slice(1, -1))
//     //trim string from far end
//     //build string from back to front

//     let newStr = "";

//     function helper(str){

//         if(newStr.length === str.length && newStr === str){
//             return true;
//         } else {return false};

//         newStr += str[-1];
        
//         return helper(str.slice(-1));
        
//     }
// }


function isPalindrome(str){

  if(str.length === 1) return true;
  if(str.length === 2) return str[0] === str[1];
  if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}

let string = "afifa";

console.log(string.slice(-2))
isPalindrome("afifa");


