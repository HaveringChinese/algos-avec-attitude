function findLongestSubstring(str){

  //find the longest section of a given string that does not contain any repeated characters anywhere in the section
  //0 if str length is 0, null if no alphabetical characters given
  //create a start and end window borders, initialized to 0
  //grow end until repeated character found, then jump start to that index and start growing the end again
  //continue until start reaches the length of the string

  let start = 0;
  let end = 0;
  let longest = 0;
  let counts = {};

  while (start < str.length){
      counts[str[end]] = (counts[str[end]] || 0) + 1;
      if (end < str.length && counts[str[end]] <= 1){
          end++;
      } else {
          counts[str[start]] -= 1;
          start++;
          end = start;
      }
      longest = Math.max(longest, (end - start));
  }

  return longest;
}


findLongestSubstring("babyboy")
// findLongestSubstring("oottootto")


//personal attempt as of 5/7/22
function findLongestSubstring(str){

  //left and right window boundaries
  //end when left window boundary reaches end of string
  //when right window boundary encounters a repeated character, jump left window boundary to right and continue
  let start = 0, end = 0, seen = {}, max = 0;
  while(start < str.length - 1){
      end++;
      seen[str[end]] = (seen[str[end]] || 0) + 1;
      // length = Math.max(length, (end - start));
      if(seen[str[end]] > 1){
          max = Math.max(max, ((end - 1) - start));
          seen = {};
          end = start + 1;
          seen[str[end]] = 1;
          start++;
      }
  }
  return max;
}

findLongestSubstring("abcdefghijkabcdefg")
