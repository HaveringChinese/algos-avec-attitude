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
  find(value){
      if(this.root === null) return false;
      let current = this.root, 
          found = false;
      while(current && !found){
          if(value > current.value){
               current = current.right;   
              } else if (value < current){
              current = current.left;
              } else {
              found = true;
          }
      if(!found) return undefined;
      return current;
      }
  }
}

var tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);


// class Node {
//   constructor(value){
//       this.value = value;
//       this.left = null;
//       this.right = null;
//   }
// }

// class BinarySearchTree {
//   constructor(){
//       this.root = null;
//   }
//   insert(value){
//       let newNode = new Node(value);
//       if(!this.root){ 
//           this.root = newNode;
//           return this;
//       } else {
//       let current = this.root;
//       while(true){
//           if(current.value === value) return undefined;
//           if(current.value > value){
//               if(current.left === null){
//                   current.left = newNode;
//                   return this;
//               } else {
//                   current = current.left;
//               }
//           } else if(current.value < value){
//               if(current.right === null){
//                   current.right = newNode;
//                   return this;
//               } else {
//                   current = current.right;
//                   }
//               }
//           }
//       }
//   }
//   find(value){
//       if(this.root === null) return false;
//       let current = this.root, 
//           found = false;
//       while(current && !found){
//           if(value > current.value){
//                current = current.right;   
//               } else if (value < current){
//               current = current.left;
//               } else {
//               found = true;
//           }
//       if(!found) return undefined;
//       return current;
//       }
//   }
//   bfSearch(){
//       if(!this.root) return undefined;
//       var queue = [];
//       var found = [];
//       queue.push(this.root);
//       while(queue.length > 0){
//           let first = queue[0];
//           shift(first);
//           found.push(first);
//           if(first.left) found.push(first.left.value);
//           if(first.right) found.push(first.right.value);
//       }
//   }
// }

// var tree = new BinarySearchTree();
// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);
// tree.root.left.right = new Node(9);
