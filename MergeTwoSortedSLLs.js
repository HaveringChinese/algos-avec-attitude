/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

//list1 = [1,2,5]
//list2 = [1,4,5]
//merged = [1,1,2,4,5]
var mergeTwoLists = function(list1, list2) {
  let newHead;
  if(list1.head === list2.head){
      newHead = list1.head; 
      newHead.next = list2.head;
  } else {
      newHead = Math.max(list1.head, list2.head);
      newHead.next = Math.min(list1.head, list2.head);
  }
  
  while(){
      head.next = 
  }
      
};

//attempt 1
// var mergeTwoLists = function(list1, list2) {
//     var spot1 = list1.head, spot2 = list2.head, merged = Math.max(spot1, spot2);
//     while(spot1.next && spot2.next){

//         merged.next = Math.max(spot1, spot2);
      
//         spot1 = spot1.next;
//         spot2 = spot2.next;
//     }

//     return merged.head;
// };
  