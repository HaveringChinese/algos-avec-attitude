function reverse(str){
  // add whatever parameters you deem necessary - good luck!

    //base case when str position equals zero
    //return last character and clip string each time
    
    if(str.length <= 1) return str;
    return reverse(str.slice(1) + str[0]);
}


// reverse('awesome') // 'emosewa'

// reverse('rithmschool') // 'loohcsmhtir'

let string = "goober"
let string2 = "ooberg"
console.log(string.slice(1));
console.log(string.slice(1) + string[0]);
console.log(string2.slice(1) + string2[0]);