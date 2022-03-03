// function minSubarrayLen(array, num){
//     //goal: algo that finds the minimum range of contiguous integers in an array needed to equal or surpass a given number
//     //null if array = 0
//     //create minimum counter
//     //create dummy window of len = array/2, summing digits within; bind to minimum counter
//     //compare window to num; if greater, bind window.length to minimum counter subtract from left; if smaller, sub left and add right
//     //continue until array is iterated
//     //return minimum 


//     if(array.length === 0){return null}
    
//     let minimum = 0;
//     let sum = 0;
    
//     for(let i = 0; i < array.length; i++){
//         sum += array[i];
//     }
//     if(sum >= num){
//             minimum = array.length;
//         } else {return null}

//     let left = 0;
//     let right = array.length;
    
//     while(right > left){
//         sum -= array[right];
//         if(sum >= num){
//             right--;
//         } else if (sum < num){
//             return minimum = (right + 1) - left;
//         }
//     }
    
// }

// minSubarrayLen([1,2,3,4,5,6,7,8,9,10], 15)

function minSubArrayLen(array, num){
  //goal: algo that finds the minimum range of contiguous integers in an array needed to equal or surpass a given number
  //null if array = 0
  //create minimum counter
  //create dummy window of len = array/2, summing digits within; bind to minimum counter
  //compare window to num; if greater, bind window.length to minimum counter subtract from left; if smaller, sub left and add right
  //continue until array is iterated
  //return minimum 

  if(array.length === 0){return null}
  
  let minimum = Infinity;
  let sum = 0;
  let start = 0;
  let end = 0;

  while(start < array.length){
      
      if(sum < num && end < array.length){
          sum += array[end];
          end++;
      } else if (sum >= num) {
          minimum = Math.min(minimum, end - start);
          sum -= array[start];
          start++;
          } else {
              break;
          }
          
  }
  return minimum === Infinity ? 0 : minimum;
}