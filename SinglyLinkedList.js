class Node{
  constructor(val){
      this.val = val;
      this.next = null;
  }
  
}

class SinglyLinkedList{
  constructor(){
      this.head = null;
      this.tail = null;
      this.length = 0;
  }
  push(val){
      var newNode = new Node(val);
      if(!this.head){
          this.head = newNode;
          this.tail = this.head; 
      }
      else{
          this.tail.next = newNode;
          this.tail = newNode;
      }
      this.length +=1;
      return this;

  }

  pop(){
      let current = this.head;
      let newTail = current;
      if(!this.head)return undefined;
      while(current.next){
          newTail = current;
          current = current.next;
      }
      this.tail = newTail;
      this.tail.next = null;
      this.length--;
      if(this.length === 0){
          this.head = null;
          this.tail = null;
      }
      return current;
  }
  shift(){
      if(this.head === null) return undefined;
      let current = this.head;
      this.head = current.next;
      this.length -= 1;
      if(this.length === 0){
          this.tail = null;
      }
      return current;
  }
  unshift(value){
      let newNode = new Node(value);
      if(!this.head || !this.tail){
          this.head = newNode;
          this.tail = newNode;
      } else {
      newNode.next = this.head;
      this.head = newNode;
      }
      this.length++;
      return this;
  }
  get(index){
      let location = this.head;
      if(index < 0 || index >= this.length){
          return null;
      } else {
          let counter = 0;
          while(counter !== index){
              location = location.next;
              counter++;
          }
          return location;
      }
  }

  set(index, value){
      let location = this.get(index);
      if(location){
      location.val = value;
      return true;
      } else{
          return false;
      }
  }

  insert(index, value){
      if(index < 0 || index > this.length) return false;
      if(index === this.length) return !!this.push(value);
      if(index === 0) return !!this.unshift(value);
      
      let previous = this.get(index - 1);
      let newNode = new Node(value);
      let temp = previous.next;
      previous.next = newNode;
      newNode.next = temp;
      this.length++;
      return true;
  }

  remove(index){
      if(index < 0 || index > this.length) return undefined;
      if(index === this.length - 1) return this.pop();
      if(index === 0) return this.shift();
      let previous = this.get(index - 1);
      let removed = previous.next;
      previous.next = removed.next;
      this.length--;
      return removed;
  }

  reverse(){      
      let node = this.head;
      this.head = this.tail;
      this.tail = node;

      let prev = null;
      let next;

      for(let i = 0; i < this.length; i++){
          next = node.next; //below on chain
          node.next = prev; //previous node
          prev = node; //previous node now this node
          node = next; //node iterates up one on the chain
      }
      return this;
  }
  
  print(){
      var arr = [];
      var current = this.head;
      while(current){
          arr.push(current.val);
          current = current.next;
      }
      console.log(arr);
  }
}

var list = new SinglyLinkedList();
list.push("HELLO"); //TAIL down
list.push("GOODBYE"); //down
list.push("Oh yeah!"); //down
list.push("Big time."); //down
list.push("This is great!"); //HEAD down 




//5/9/22 review attempt

  push(val){
      let newNode = new Node(val);
      if(!this.head){
          this.head = newNode;
          this.tail = newNode;
      } else {
          this.tail.next = newNode;
          this.tail = this.tail.next;
      }
      this.length++;
      return this;
  }

  //5/12/22 review attempt (realized that the course becomes bullshit at this point!)

  pop(){
    if(!this.head) return null;
    let current = this.head;
    let previous = current;
    while(current.next){
        previous = current;
        current = current.next;
    }
    this.tail = previous;
    this.tail.next = null;
    this.length--;
    if(this.length === 0){
        this.head = null;
        this.tail = null;
    }
    return current;
}

//5/15/22 review attempt (realized that while the course becomes bullshit at this point, each prompt still is a vital review opportunity and I will make full use of them)
get(index){
  let location = this.head;
  let counter = 0;
  if(!location || index <= 0 || index > this.length) return null;

  while(counter !== index){
      location = location.next;
      counter++;
  }   
  return location;
  }

insert(value, index){
  //checks
  if(index < 0 || index > this.length) return null;
  if(index === 0) return !!this.unshift(value);
  if(index === this.length) return !!this.push(value);
  
  let previous = this.get(index - 1);
  let newNode = new Node(value);
  let temp = previous.next;
  previous.next = newNode;
  newNode.next = temp;
  this.length++;
  return true;
}

//add rotate method to be finalized in GOOGLE CHROME you asshole! how do you possibly expect to solve problems by shooting
//in the dark from the hip like an asshole??? and do you truly expect to learn ANYTHING this way??? Honestly.
//Stop doing things mindlessly you doltish clod!

// rotate(number){
//   if(!this.get(number)){
//    return null;   
//   } else {
//       let preNumber = [];
//       let counter = 0;
//       let location = this.head;
//       while(counter < number){
//           preNumber.push(location.val);
//           location.next = this.head;
//           location = location.next;
//           counter++;
//       }
//       for(let i = 0; i < preNumber.length; i++){
//           this.push(preNumber[i]);
//       }
//   }
//   return this;
// }

//5/17/22 create working rotate method for SLL using actual testing as vowed in above comment 

rotate(number){
  if(!this.get(number)) {
      return null;
  } else {
  let preNumber = [];
  let counter = 0;
  let location = this.head;
  let next = location.next;
  while(counter < number){
      preNumber.push(location);
      this.remove(location);
      this.head = next;
      location = next;
      next = location.next;
      counter++;
  }
  for(let i = 0; i < preNumber.length; i++){
      this.push(preNumber[i]);
  }
return this;
  }
}

//5/17/22 create super easy "set" method, confirm that udemy testing is trash and I need to make sure myself that every method works
//it's better if I do this anyway, since it will both reinforce my understanding and build my self-sufficiency skills
set(index, value){
  if(index < 0 || index > this.length) {
      return false;
  } else {
      let location = this.head;
      let counter = 0;
      while(counter < index){
          location = location.next;
          counter++;
      }
      location.val = value;
      return true;
  }
}