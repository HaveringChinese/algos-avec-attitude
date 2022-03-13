//crucial here to set J as a variable rather than ES6 "let"
//to avoid scoping issues 


function insertionSort(arr){
  for(let i = 1; i < arr.length; i++){
      let currentVal = arr[i];
      for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--){
          arr[j + 1] = arr[j];
      }
      arr[j + 1] = currentVal;
  }
  return arr;
}

insertionSort([4, 2, 3, 5, 7, 1, 3])