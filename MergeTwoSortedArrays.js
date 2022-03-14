//first stage of merge sort algorithm is to write a function that merges two sorted arrays into one sorted array

function mergeSorted(arr1, arr2){

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

mergeSorted([1,2,5,10,11], [3,4,6,8,20,21]);