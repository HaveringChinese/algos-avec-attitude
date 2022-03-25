class Node{
  constructor(val){
      this.val = val;
      this.next = null;
      this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
  }

  push(val){
      let newNode = new Node(val);
      if(!this.head){
          this.head = newNode;
          this.tail = newNode;
      } else {
          this.tail.next = newNode;
          newNode.prev = this.tail;
          this.tail = newNode;
      }
      this.length++;
      return this;
  }

  pop(){
      if(!this.head) return undefined;
      var tail = this.tail;
      if(this.length === 1){
          this.head = null;
          this.tail = null;
      } else {
          this.tail = tail.prev;
          this.tail.next = null;
          tail.prev = null;    
      }
      this.length--;
      return tail;
  }

  shift(){
      if(this.length === 0) return undefined;
      var oldHead = this.head;
      if(this.length === 1){
          this.head = null;
          this.tail = null;
      } else {
          this.head = oldHead.next;
          this.head.prev = null;
          oldHead.next = null;
      }
      this.length--;
      return oldHead;
  }

  unshift(val){
      var newNode = new Node(val);
      if(this.length === 0){
          this.head = newNode;
          this.tail = newNode;
      } else {
          this.head.prev = newNode;
          newNode.next = this.head;
          this.head = newNode;
      }
      this.length++;
      return this;
  }

  get(index){
      if(index < 0 || index >= this.length) return null;
      var count, current;
      if(index <= this.length / 2){
          current = this.head;
          count = 0;
          while(count != index){
              current = current.next;
              count++;
          }
      } else {
          current = this.tail;
          count = this.length - 1;
          while(count != index){
              current = current.prev;
              count--;
          }
      }
        return current;
 }

  set(index, val){
      var foundNode = this.get(index);
      if(foundNode != null){
          foundNode.val = val;
          return true;
      }
      return false;
  }

  insert(index, val){
      if(index < 0 || index > this.length) return false;
      if(index === 0) return this.unshift(val);
      if(index === this.length) return this.push(val);
      var newNode = new Node(val);
      var prevNode = this.get(index - 1);
      var nextNode = prevNode.next;
      prevNode.next = newNode, newNode.prev = prevNode;
      newNode.next = nextNode, nextNode.prev = newNode;
      this.length++;
      return true;
  }

  remove(index){
      if(index < 0 || index >= this.length) return undefined;
      if(index === 0) return this.shift();
      if(index === this.length - 1) return this.pop();
      var foundNode = this.get(index);
      var beforeNode = foundNode.prev;
      var afterNode = foundNode.next;
      foundNode.prev = null, foundNode.next = null;
      beforeNode.next = afterNode, afterNode.prev = beforeNode;
      this.length--;
      return foundNode;
  }
}

let list = new DoublyLinkedList();
list.push("We're back, bitches!");
list.push("And it's getting better from here!");
list.push("Filler 1")
list.push("Filler 2")
list.push("Filler 3")
list.push("Even and espeically when it feels like it isn't.");