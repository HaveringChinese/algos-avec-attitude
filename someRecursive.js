function someRecursive(arr, callback){
  //base case when array length is 0
  //pass each value to the callback
  //trim array and recursively call someRecursive

  if(arr.length === 0) return false;
  if(callback(arr[0])) return true;
  return someRecursive(arr.slice(1), callback);
}