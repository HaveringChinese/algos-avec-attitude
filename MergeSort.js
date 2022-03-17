//sort array by breaking down into two sorted arrays and then merging them
// first stage of merge sort algorithm is to write a function that merges two sorted arrays into one sorted array

function merge(arr1, arr2){

  let newArr = [];
  let i = 0;
  let j = 0;
  
  while(i < arr1.length && j < arr2.length){

      if(arr1[i] < arr2[j]){
          newArr.push(arr1[i]);
          i++;
      } else if (arr2[j] < arr1[i]){
          newArr.push(arr2[j]);
          j++;
      } else if (arr1[i] === arr2[j]){
          newArr.push(arr1[i], arr2[j]);
          i++;
          j++;
      }
  }
  console.log("before the last items: ", newArr);
  
  if(i < arr1.length){ 
      newArr = newArr.concat(arr1.slice(i));
  } else if (j < arr2.length){
      newArr = newArr.concat(arr2.slice(j));
  }
  console.log("with the last items: ")
  return newArr;
}

// *******first attempt at merge sort array split
function mergeSort(arr){

  let fhalf = [];
  let shalf = [];
  let mid = Math.floor(arr.length / 2)

  if(arr.length <= 1) return arr; 

      fhalf = mergeSort(arr.slice(0, mid));
      shalf = mergeSort(arr.slice(mid));
      return merge(fhalf, shalf);
}

mergeSort([15, 9, 14, 19, 17]);


// mergeSorted([1,2,5,10,11], [3,4,6,8,20,21]);
// mergeSorted([100], [2,3,4,5]);



// function mergeSort(arr){

//     //base case return array when length is less than or equal to 1
//     //recursively split arrays into smaller chunks until base case satisfied
//     if(arr.length <= 1) return arr;
  
//     return mergeSort(arr.splice(0, Math.floor(arr.length / 2)));    
  
  
// }


// RE-CREATED THIS FROM MEMORY, helped my understanding greatly
// function merge(arr1, arr2){

//   let results = [];
//   let i = 0;
//   let j = 0;

//   while (i < arr1.length && j < arr2.length){
//       if(arr1[i] < arr2[j]){
//           results.push(arr1[i]);
//           i++;
//       }
//       else if (arr2[j] < arr1[i]){
//           results.push(arr2[j]);
//           j++;
//       } else if (arr1[i] === arr2[j]){
//           results.push(arr1[i], arr2[j]);
//           i++;
//           j++;
//       }
//   }
//   if(i < arr1.length){
//       results = results.concat(arr1.slice(i));
//   } else if (j < arr2.length){
//       results = results.concat(arr2.slice(j));
//   }
//   return results;
// }

// // merge([2,4,6,7], [1,3,5,7]);

// function sort(arr){

//   let left = [];
//   let right = [];
//   let mid = Math.floor(arr.length / 2);

//   if(arr.length <= 1) return arr;
//   left = sort(arr.slice(0, mid));
//   right = sort(arr.slice(mid));
//   return merge(left, right);
// }

// sort([2,12,6,13,1,3]);