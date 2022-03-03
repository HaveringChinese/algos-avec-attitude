// function countUniqueValues(array){

//     var frequency = {};
    
//     for (let val of array){
//         frequency[val] = (frequency[val] || 0) + 1;
//     }
//     return Object.keys(frequency).length;    
// }

// countUniqueValues([-3, -2, -1, -1, 0, 0, 1, 1, 1, 2, 5])

//OR 

function totalUniqueValues(array){

  let fast = 1;
  let slow = 0;

  while(fast < array.length){
      if(array[fast] === array[slow]){
          fast++;
      } else {
          slow++;
          array[slow] = array[fast];
      }
  }
  console.log(array, array.slice(0, slow + 1));
  return slow + 1;
}

totalUniqueValues([-3, -2, -1, -1, 0, 0, 1, 1, 1, 2, 5, 10, 11, 11])