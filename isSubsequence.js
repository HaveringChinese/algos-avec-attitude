// //complete later
// var isSubsequence = function(s, t) {
//   for(let i = 0; i < t.length; i++){
//       if(t[i] === s[0]){
          
//           break;
//       }
//       if(i === t.length) return false;
//   }
//   for(let j = 
// };

// Runtime: 125 ms, faster than 7.71% of JavaScript online submissions for Is Subsequence.
// Memory Usage: 42.5 MB, less than 19.80% of JavaScript online submissions for Is Subsequence.
//after changing to simple boolean return improved to:
// Runtime: 66 ms, faster than 90.08% of JavaScript online submissions for Is Subsequence.
// Memory Usage: 42.2 MB, less than 39.13% of JavaScript online submissions for Is Subsequence.

var isSubsequence = function(s, t) {
  //edge case of inequal lengths
  if(s.length > t.length) return false;

  let subsequence = 0;

  for(let i = 0; i < t.length; i++){
      if(s[subsequence] === t[i]) subsequence++;
  }
  return subsequence === s.length;
};



isSubsequence("code", "lecetode");