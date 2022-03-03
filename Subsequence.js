function isSubsequence(str1, str2) {
  // good luck. Add any arguments you deem necessary.

    //false if either length 0
    //create two pointers (one for substring and one for full string)
    //iterate through str1 as each new character is found in str2
    //if str1 isn't fully iterated through by the time str2 is iterated, return false
    //else, return true!

    if(str1.length === 0 || str2.length === 0){return null}

    let start = 0;
    let sub = 0;
    
    while (start < str2.length - 1){
        if(str2[start] === str1[sub]){
            start++;
            sub++;
        } else {
            start++;
        }
    }
    if(sub < str1.length - 1){
        return false;
    } else {
        return true;
    }
    
}

isSubsequence("abc", "abddc");