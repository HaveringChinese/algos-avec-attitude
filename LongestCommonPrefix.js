// Runtime: 107 ms, faster than 20.69% of JavaScript online submissions for Longest Common Prefix.
// Memory Usage: 42.3 MB, less than 72.65% of JavaScript online submissions for Longest Common Prefix.
// var longestCommonPrefix = function(strs) {
//     let longestEach = [];
//     for (let i = 1; i < strs.length; i++) {
//         let longest = 0;
//         for (let j = 0; j < strs[i].length; j++) {
//             if(strs[i][j] === strs[0][j]) longest++;
//             else break;
//         }
//         longestEach.push(longest);
//     }
//     console.log(longestEach);
//     let max = Math.min(...longestEach);
//     return strs[0].substring(0, max);
// };

//determine shortest word immediately, only compare this one
// Runtime: 92 ms, faster than 39.70% of JavaScript online submissions for Longest Common Prefix.
// Memory Usage: 42.9 MB, less than 36.41% of JavaScript online submissions for Longest Common Prefix.
var longestCommonPrefix = function(strs) {
  let i=0, minLenStr=strs[0], j=0;
  while(i < strs.length){
      if(strs[i].length < minLenStr.length) minLenStr = strs[i];
      i++;
  }

  while(j<minLenStr.length){
      let char = minLenStr[j];
      for(let s=0; s<strs.length; s++){
          if(strs[s][j] !== char){
              return minLenStr.slice(0, j)
          }
      }
      j++;
  }
  return minLenStr;
  
};

// longestCommonPrefix(["ab", "a"]);
// longestCommonPrefix(["floower", "floodght", "flood"]);
longestCommonPrefix(["car", "cir"]);
