function validAnagram(str1, str2){

  if (str1.length != str2.length){
      return false;
  }
  
let charcount = {};

for (let letter of str1){
    charcount[letter] ? charcount[letter] += 1 : charcount[letter] = 1;
}

for (let key of str2){
    if (!charcount[key]){
        return false;
    } else {
        charcount[key] -= 1;
    }
  }
  return true;
}

// validAnagram("pace", "epac")
// validAnagram("spear", "spears")
// validAnagram("banana", "aaannbb")
validAnagram("ribs", "sibr")