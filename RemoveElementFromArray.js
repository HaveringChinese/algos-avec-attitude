var removeElement = function(nums, val, before = null, after = null, count = 0) {
  for(let i = 0; i < nums.length; i++){
      if(nums[i] === val){
          before = nums.slice(0, i);
          after = nums.slice(i + 1, nums.length);
          nums = before.concat(after);
          count++;
      }
  }
  for(let j = count; j > 0; j--) nums.push(val);
  return nums;
};

removeElement([3,2,2,3], 3);
// removeElement([5,1,2,3,4,5,6,7,8,9,0], 5);