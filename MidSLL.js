// Runtime: 92 ms, faster than 39.68% of JavaScript online submissions for Middle of the Linked List.
// Memory Usage: 41.9 MB, less than 63.29% of JavaScript online submissions for Middle of the Linked List.
var middleNode = function(head) {
  //count total nodes, divide by 2, round up, return node as middleNode

    let count = 0, location = head, midCount = 0;
    while(location.next){
        count++;
        location = location.next;
    }
    count = Math.ceil(count / 2);
    location = head;
    while(midCount< count){
        location = location.next;
        midCount++;
    }
    return location;
};

//twice as fast! just as small!
// Runtime: 68 ms, faster than 82.79% of JavaScript online submissions for Middle of the Linked List.
// Memory Usage: 42 MB, less than 63.46% of JavaScript online submissions for Middle of the Linked List.
var middleNode = function(head) {
  let length = 0, current = head;
  while(current){
      current = current.next;
      length++;
  }
  current = head;
  for(let i = 0; i < Math.floor(length / 2); i++){
      current = current.next;
  }
  return current;
};