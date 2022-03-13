//has noswaps checker to see if array is already nearly sorted

function bubbleSort(arr){
  let noSwaps;
  for(let i = arr.length; i > 0; i--){
      noSwaps = true;
      for(let j = 0; j < i - 1; j++){
          console.log(arr);
          if(arr[j] > arr[j + 1]){
              let temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
              noSwaps = false;
          }
      }
      if(noSwaps) break;
  }
  return arr;
}

let model = [4, 5, 6, 3, 2, 1, 22];
let nearly = [1, 8, 2, 3, 4, 7, 5, 6, 9, 10]
bubbleSort(nearly);