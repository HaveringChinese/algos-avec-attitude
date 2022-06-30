//failed attempt; keep trying!
var pivotIndex = function(nums) {
  let left = 0, right = nums.length - 1;
  let leftTot = 0, rightTot = 0;
  while(left < right){
      rightTot += nums[right];
      leftTot += nums[left];
      left++;
      right--;
  }
  while(rightTot > leftTot && left < nums.length){
      rightTot -= nums[left];
      left++;
  }
  
  while(leftTot > rightTot && left > 0){
      leftTot -= nums[left];
      left--;
  }
  
  if(leftTot === rightTot) return left - 1;
  return -1;
};