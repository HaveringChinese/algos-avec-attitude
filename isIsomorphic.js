// Runtime: 94 ms, faster than 72.85% of JavaScript online submissions for Isomorphic Strings.
// Memory Usage: 45.5 MB, less than 22.65% of JavaScript online submissions for Isomorphic Strings.

var isIsomorphic = function(s, t) {

  //check if s and t are the same length
  //check if s and t have the same number of unique characters

  if(s.length !== t.length) return false;

  //assign value to each encountered character
  let sChars = {}, modified = '';
  for(let i = 0; i < s.length; i++){
      if(!sChars[s[i]] && !Object.values(sChars).includes(t[i])) sChars[s[i]] = t[i];
      else if (sChars[s[i]] !== t[i]) return false;
  }
  
  for(let j = 0; j < s.length; j++){
      modified += sChars[s[j]];
  }

  if(modified === t) return true;
  else return false;
};

isIsomorphic('paper', 'title');
// isIsomorphic('badc', 'baba');


// var isIsomorphic = function(s, t) {
//     const dict = {}
//     for (let i = 0; i < s.length; i++) {
//         if (!dict[s[i]] && !Object.values(dict).includes(t[i])) {
//             dict[s[i]] = t[i]
//         } else if (dict[s[i]] !== t[i]) {
//             return false;
//         }
//     }
//     return true;
// };