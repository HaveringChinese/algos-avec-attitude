class MaxBinaryHeap{
  constructor(){
      this.values = [45, 43, 22, 10];
  }
  insert(element){
      this.values.push(element);
      this.bubbleUp();
  }
  bubbleUp(){
      let idx = this.values.length - 1;
      const element = this.values[idx]; 
      while(idx > 0){
          let parentIdx = Math.floor((idx - 1) / 2);
          let parent = this.values[parentIdx];
          if(element <= parent) break;
          this.values[parentIdx] = element;
          this.values[idx] = parent;
          idx = parentIdx;    
          }
      }
  extractMax(){
      if(this.values.length > 0){
      var max = this.values[0],
          end =  this.values.pop();
      this.values[0] = end;
      this.sinkDown();
      }
      return max;
  }
  sinkDown(){
      let idx = 0;
      const element = this.values[0];
      const length = this.values.length;
       while(true){
          let leftChildIdx = 2 * idx + 1,
              rightChildIdx = 2 * idx + 2,
              leftChild, rightChild, swap = null;
          if(leftChildIdx < length){
              leftChild = this.values[leftChildIdx];
              if(leftChild > element){
                  swap = leftChildIdx;
              }
          }
           if(rightChildIdx < length){
               rightChild = this.values[rightChildIdx];
               if(
                   (swap === null && rightChild > element) || 
                   (swap !== null && rightChild > leftChild)
                   ){
                   swap = rightChildIdx;
               }
           }
          if(swap === null) break;
          this.values[idx] = this.values[swap];
          this.values[swap] = element;
          idx = swap;
      }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(450);
heap.insert(45);
heap.insert(50);
heap.insert(40);
heap.insert(26);
heap.insert(33);




