//failed attempt; keep trying!
//6/30: this attempt is too complicated and misses the concept that comparing one side total to the sum of nums 
// is faster than creating two separate side totals and therefore two separate pointers (which is where my confusion arrived)

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

//this version, found in the LC solution, understands and exploits the left vs. sum trick
var pivotIndex = function(nums) {
  let sum = 0, leftsum = 0;
  //find total sum of nums
  for(let i = 0; i < nums.length; i++) sum += nums[i];
  //iterate from leftmost number checking if at any point the sum to the left
  //of the pointer is equal to the sum to the right of the pointer
  //right sum is found by subtracting left sum and current index value from total
  //if leftsum ever equals rightsum in this way, return the index (j) at which this is true
  //otherwise, add the value of the next index to leftsum and repeat the check process
  for(let j = 0; j < nums.length; j++){
      if(leftsum === sum - leftsum - nums[j]) return j;
      leftsum += nums[j];
  }
  return -1;
};