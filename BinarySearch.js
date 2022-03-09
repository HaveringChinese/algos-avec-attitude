function binarySearch(sortedArray, value){
  let start = 0;
  let end = sortedArray.length;
while (start < end){
  let middle = Math.floor((start + end) / 2);
  if(sortedArray[middle] === value){
      return middle;
  } else if (sortedArray[middle] < value){
      start++;
  } else if (sortedArray[middle] > value){
      end--;
  }
}
return -1;    
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
binarySearch(array, 3);