function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let swapindx = start;

  const swap = (arr, ind1, ind2) => {
    [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]];
  };

  for (let i = start + 1; i < end + 1; i++) {
    if (pivot > arr[i]) {
      swapindx++;
      swap(arr, swapindx, i);
    }
  }
  swap(arr, start, swapindx);
  return swapindx;
}

function quickie(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickie(arr, left, pivotIndex - 1);
    quickie(arr, pivotIndex + 1, right);
  }
  return arr;
}

quickie([5, 2, 3, 8, 7, 10, 4, 50, 80, 30]);
