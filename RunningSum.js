// Runtime: 111 ms, faster than 11.89% of JavaScript online submissions for Running Sum of 1d Array.
// Memory Usage: 42.1 MB, less than 89.25% of JavaScript online submissions for Running Sum of 1d Array.
// var runningSum = function(nums) {
//     let gross = 0, sum = [];
//     for (let i = 0; i < nums.length; i++) {
//         gross+= nums[i];
//         sum.push(gross);
//     }
//     return sum;
// };

// Runtime: 100 ms, faster than 23.51% of JavaScript online submissions for Running Sum of 1d Array.
// Memory Usage: 42.6 MB, less than 24.28% of JavaScript online submissions for Running Sum of 1d Array.
// var runningSum = function(nums, gross = 0) {
//     for (let i = 0; i < nums.length; i++) {
//         gross += nums[i];
//         nums[i] = gross;
//     }
//     return nums;
// }


// Runtime: 78 ms, faster than 57.23% of JavaScript online submissions for Running Sum of 1d Array.
// Memory Usage: 42.7 MB, less than 16.64% of JavaScript online submissions for Running Sum of 1d Array.
var runningSum = function(nums) {
  for (let i = 1; i < nums.length; i++) {
      nums[i] += nums[i - 1];
  }
  return nums;
}

runningSum([1,2,4,6]);

// Runtime: 80 ms, faster than 66.61% of JavaScript online submissions for Running Sum of 1d Array.
// Memory Usage: 42.4 MB, less than 60.82% of JavaScript online submissions for Running Sum of 1d Array.
var runningSum = function(nums) {
  for(let i = 1; i < nums.length; i++){
      nums[i] += nums[i - 1];
  }
  return nums;
};

//BEST YET!
// Runtime: 73 ms, faster than 80.17% of JavaScript online submissions for Running Sum of 1d Array.
// Memory Usage: 42.2 MB, less than 72.48% of JavaScript online submissions for Running Sum of 1d Array.
var runningSum = function(nums) {
  let sum = [nums[0]];
  for(let i = 1; i < nums.length; i++) sum.push(nums[i] + sum[i - 1]);
  return sum;
};