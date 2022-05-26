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



//5/25/2022 review

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

unshift(val){
  let newNode = new Node(val);
  if(!this.head){
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

shift(){
  if(this.length === 0) return undefined;
  let oldHead = this.head;
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

set(index, val){
  if(!this.head) return undefined;
  let newNode = new Node(val);
  let counter, location;
  if(index < this.length / 2){
    location = this.head;
    counter = 0;
    while(index > counter){
        location = location.next;
        counter++;
    }
  } else {
    location = this.tail;
    counter = this.length - 1;
    while(index < counter){
      location = location.prev;
      counter--;
    }
  }
  if(location !== null){
    location.next.prev = newNode;
    location.prev.next = newNode;
    return true;
  }
    return false;
}

shift(){
  if(this.length === 0) return undefined;
  let oldHead = this.head;
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

remove(index){
  if(index < 0 || index > this.length || !this.head) return undefined;
  let foundNode = this.head;
  let counter = 0;
  while(counter < index){
      foundNode = foundNode.next;
      counter++;
  }
  if(foundNode !== null){
      foundNode.next.prev = foundNode.prev;
      foundNode.prev.next = foundNode.next;
      foundNode.next = null;
      foundNode.prev = null;
  }
  this.length--;
  return foundNode;
}

pop(){
  if(!this.head) return undefined;
  let tail = this.tail;
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

get(index){
  if(!this.head || index < 0 || index > this.length) return undefined;
  var count, location;
  if(index < this.length / 2){
      counter = 0;
      location = this.head;
      while(counter < index){
      location = location.next;
      counter++
      }
  } else {
      counter = this.length - 1;
      location = this.tail;
      while(counter > index){
          location = location.prev;
          counter--;
      }
  }
  if(location !== null){
      return location;
  }
  return null;
}

insert(index, val){
  let newNode = new Node(val);
  let counter, previous;
  if(index < 0 || index > this.length) return undefined;
  if(this.length === 0){
      this.head = newNode;
      this.tail = newNode;
  }
  if(index === this.length){
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
  }
  while(counter < index - 1){
      previous = previous.next;
      counter++;
  }
  previous.next.prev = newNode;
  newNode.next = previous.next;
  newNode.prev = previous;
  previous.next = newNode;
  this.length++;
  return true;
}

reverse(){
  if(!this.head) return undefined;
  let newHead = this.tail;
  let newTail = this.head;
  this.head = newHead;
  this.tail = newTail;
  this.tail.next = null;
  let current = newHead, temp;
    while (current != null) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev;
  }
  return this;
}