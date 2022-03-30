class Node {
  constructor(value){
      this.value = value;
      this.left = null;
      this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
      this.root = null;
  }
  insert(value){
      let newNode = new Node(value);
      if(!this.root){ 
          this.root = newNode;
          return this;
      } else {
      let current = this.root;
      while(true){
          if(current.value === value) return undefined;
          if(current.value > value){
              if(current.left === null){
                  current.left = newNode;
                  return this;
              } else {
                  current = current.left;
              }
          } else if(current.value < value){
              if(current.right === null){
                  current.right = newNode;
                  return this;
              } else {
                  current = current.right;
                  }
              }
          }
      }
  }
}

var tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);
