//next stores what second points to
//second points to head, stored in previous variable
//pointer moves to second, repeat

// var reverseList = function(head) {
//   let current = head, prev = null, next;

//   while(current){
//       current = head.next;
//       next = current.next;
//       current.next = prev;
//       prev.next = null;
//       current = next;
//   }
//   return prev;
// };

//still need to recreate to demonstrate understanding!
// Runtime: 119 ms, faster than 14.89% of JavaScript online submissions for Reverse Linked List.
// Memory Usage: 44 MB, less than 81.15% of JavaScript online submissions for Reverse Linked List.
var reverseList = function(head){
  var current = head, prev = null, next;

  while(current){
      next = current.next; //next binds the node after current [1C,2N,3,4,5]
      current.next = prev; // current points to null (tail, effectively) [null<-1C,2N,3,4,5]
      prev = current; //previous now goes from null/prev to current node [1CP,2N,3,4,5]
      current = next; //current node now goes to next (prep next for next.next) [1P,2CN,3,4,5]
  }
  return prev;

}

//new explanation to firm up thinking
// let current = head, prev = null, next;
// while(current){
//     next = current.next; //next pointer moves ahead of current so linkage is preserved thru switch
//     current.next = prev; //head.next set to prev (null), then forward facing node aimed to prev (backwards to reverse SLL)
//     prev = current; //previous node moves forward to prepare for next iteration
//     current = next; //current node moves forward to preserved linkage for next iteration
// }



