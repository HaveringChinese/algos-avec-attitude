//naive solution faster than 46% of leetcode users, less memory than 58%
var isPalindrome = function(x) {
  let reversed = [], stringified = x.toString();
  for(let i = stringified.length - 1; i >= 0; i--){
      reversed.push(stringified[i]);
  }
  if(stringified === reversed.join('')) return true;
  return false;
};

//singly linked list isPalindrome checker

naiveIsPalindrome(head) {
  let reversed = [head.val], regular = [head.val], location = head;
  while(location.next !== null){
      location = location.next;
      regular.push(location.val);
      reversed.unshift(location.val);
  }
  console.log(reversed.join(), regular.join());
  if(reversed.join() === regular.join()) return true;
  return false;
}

  // var isPalindrome = function(head) {
//     let reversed = [head.val], regular = [head.val], location = head;
//     while(location.next !== null){
//         location = location.next;
//         regular.push(location.val);
//         reversed.unshift(location.val);
//     }
//     if(reversed.toString() === regular.toString()) return true;
//     return false;
// };
  
  //ill-fated divide and conquer attempt
//    isPalindrome(head) {
//     let pointer = head, counter = 0, midpoint;
//     while(pointer.next !== null){
//         pointer = pointer.next;
//         counter++;
//     }
//     let left = [], right = [];
//     pointer = head;
//     while(pointer.next !== null){
//         if(counter = Math.ceil(counter / 2)) midpoint = pointer;
//     }
// }
//this one should work much faster but required me to look up the method; it makes use of the simple stack data structure!! :))
  isPalindrome(head){
      var stack = [], current = head;
      while(current.next !== null){
          stack.push(current);
          current = current.next;
      }
      current = head;
      while(current.next !== null){
          if(current === stack.pop()){
              current = current.next;
          } else {
              return false;
          }
      }
      return true;
  }

