function selectionSort(arr){

  for(let i = 0; i < arr.length; i++){
      let lowest = i;
      for(let j = i + 1; j < arr.length; j++){
          if(arr[j] < arr[lowest]){
              lowest = j;
          }
      }
              if(lowest !== i){
              let temp = arr[i];
              arr[i] = arr[lowest];
              arr[lowest] = temp;
              }
  }
  return arr;
}

selectionSort([1,2,3,4,6,7,8,3,33,44,22,23,56]);