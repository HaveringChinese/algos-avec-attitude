//attempt to count zeroes by dividing and conquering.....this is frustrating!

function countZeroes(array){

  //split array
  //if midpoint 1, split right array
  //if midpoint 0, split left array
  //if left of midpoint 1 and right of midpoint 0, loop over right of midpoint and add to count of zeroes
  //return count
  
  let count = 0;
  
  function helper(array){
      let halfway = Math.floor(array.length / 2);
      let pointer = array[halfway];
      if(pointer === 1){
          helper(array.slice(halfway, array.length));
      } else if(pointer === 0 && array[halfway - 1] !== 1){
          helper(array.slice(0, halfway));
      } else {
          for(let i = 0; i < array.length; i++){
              if(array[i] === 0) count++;
          }
      }   
  }
  helper(array);
  return count;
}

function naivelyCountZeroes(array){
  let count = 0;
  for(let i = 0; i < array.length; i++){
      if(array[i] === 0){
          count++;
      }
  }
  return count;
}

