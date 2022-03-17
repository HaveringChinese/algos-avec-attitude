function pivot(arr, start=0, end=arr.length - 1){

  const swap = (arr, ind1, ind2) => [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]];

  let pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i < end + 1; i++){

    if(pivot > arr[i]){
      swapIndex++;
      swap(arr, swapIndex, i);
    }

  }
  swap(arr, start, swapIndex);
  return swapIndex;
}

function quickSort(arr, left=0, right=arr.length - 1){

  if(left < right){
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
    return arr;
}

quickSort([4,20,55,33,3,1,7,6,5]);