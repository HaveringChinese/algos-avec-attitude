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