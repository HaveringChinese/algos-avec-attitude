class Node{
  constructor(value){
      this.value = value;
      this.next = null;
  }
}

class Stack{
  constructor(){
      this.first = null;
      this.last = null;
      this.size = 0;
  }
  push(val){
      var newNode = new Node(val);
      if(this.size === 0){
          this.first = newNode;
          this.last = newNode;
      } else {
          let curFirst = this.first;
          this.first = newNode;
          newNode.next = curFirst;
      }
      return this.size++;;
  }
  pop(){
      if(!this.first)return null;
      let first = this.first;
      if(this.first === this.last){
          this.last = null;
      }
      this.first = first.next;
      this.size--;
      return first.value;
  }
}

var stack = new Stack();
stack.push("Wim Hof");
stack.push("is the best way...");
stack.push("to start your day!");
