function sameFrequency(num1, num2){
    
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  
  if(strNum1.length !== strNum2.length) return false;
  
  let counts1 = {};
  let counts2 = {};
  
  for (let letter = 0; letter < strNum1.length; letter++){
      counts1[strNum1[letter]] = (counts1[strNum1[letter]] || 0) + 1;
  }
  for (let char = 0; char < strNum2.length; char++){
      counts2[strNum2[char]] = (counts2[strNum2[char]] || 0) + 1;
  }

  for (let key in counts1){
      if (counts1[key] !== counts2[key]){
          return false;
      }
      }
  return true;
}
  

sameFrequency(12345, 54321);