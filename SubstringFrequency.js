function findSubstrings(string, substring){

  let count = 0;

  for(let i = 0; i < string.length; i++){
      for(let j = 0; j < substring.length; j++){
          if (string[i + j] === substring[j]){
          } else {
              char = 0;
              break;
          } 
          if(j === substring.length - 1){
              count++;
          }
      }
  }
  return count;
}

let big = "alkjaslfjsdkdkfoofoodkadfoolsfkjfooofoo foo";
let small = "foo"

findSubstrings(big, small);