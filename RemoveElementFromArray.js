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

// var removeElement = function(nums, val, before = null, after = null, count = 0) {
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] === val){
//             before = nums.slice(0, i);
//             after = nums.slice(i + 1, nums.length);
//             before.concat(after);
//             count++;
//         }
//     }
//     console.log("this is before", before);
//     for(let j = count; j > 0; j--) before.push(val);
//     for(let k = 0; k < nums.length; k++){
//         nums[k] = before[k];
//     }
//     return nums;
// };

//attempt 2
// var removeElement = function(nums, val){
//     let right = 1, length = nums.length;
//     for (let index = 0; index < length; index++) {
//         if(nums[index] === val){
//             let temp = nums[index];
//             nums[index] = nums[right];
//             nums[nums.length - 1] = temp;
//             right++;
//         }
//     }
//     return nums;
// }

var removeElement = function(nums, val){
  let i = 0, l = nums.length;
  while(i < l){
      if(nums[i] === val){
          nums[i] = nums[l - 1];
          l--;
      } else {
          i++;
      }
  }
  return l;
}

removeElement([3,2,2,3], 3);
// removeElement([5,1,2,3,4,5,6,7,8,9,0], 5);