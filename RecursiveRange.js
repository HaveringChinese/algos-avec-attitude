//recursively sums numbers in range from 0 to number given
function recursiveRange(num){
  if(num === 0) return 0;
  return num + recursiveRange(num - 1);
}
