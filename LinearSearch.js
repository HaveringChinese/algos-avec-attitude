function linearSearch(arr, val){

  for (let item = 0; item < arr.length; item++){
      if(arr[item] === val){
          return item;
      }        
  }
  return -1;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let array2 = [1, 2, 3, 4, 6, 7, 8, 9, 10]

linearSearch(array, 5);
linearSearch(array2, 5);