// Runtime: 117 ms, faster than 46.76% of JavaScript online submissions for Remove Duplicates from Sorted Array.
// Memory Usage: 44.7 MB, less than 57.00% of JavaScript online submissions for Remove Duplicates from Sorted Array.
var removeDuplicates = function(nums) {
  //loop array moving unique items to the front and duplicates to the end
  let n = nums.length;
  if(nums.length === 0) return 0;
  let  insertIndex = 1;
  for (let i = 1; i < n; i++) {
      if(nums[i] !== nums[i - 1]){
          nums[insertIndex] = nums[i];
          insertIndex++;
      }
  }
  return insertIndex;
};

removeDuplicates([0,0,1,1,1,2,2,3,3,4,4,5]);
