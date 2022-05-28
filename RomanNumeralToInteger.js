var romanToInt = function(s) {

  let numerals = {
      "I": 1,
      "II": 2,
      "III": 3,
      "IV": 4,
      "V": 5,
      "X": 10,
      "L": 50,
      "C": 100,
      "D": 500,
      "M": 1000
  };
  let nums = [], total = 0;

  for(let i = 0; i < s.length; i++){
      let numVersion = numerals[s[i]];
      nums.push(numVersion)
  }
  for(let i = 0; i < nums.length; i++){
      if(nums[i - 1] < nums[i]){
          total -= nums[i -1];
          total += nums[i] - nums[i - 1];            
      } else {
          total += nums[i];
      }
  } 
  return total;
};

romanToInt("MDCLXVIII");
//1668
romanToInt("MCMLIX");
//1959