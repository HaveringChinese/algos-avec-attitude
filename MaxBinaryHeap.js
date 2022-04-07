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
      if(this.length === 0) return undefined;
      var first = this.values[0],
          last =  this.values.pop();
      this.values[0] = last;
      sinkDown();
      return first;
  }
  sinkDown(){
      let parentIdx = this.values[0],
          leftChild = (parentIdx * 2) + 1,
          rightChild = leftChild + 1;
       while(true){
          if(leftChild > this.values[0] || rightChild > this.values[0]){
              let max = Math.max(leftChild, rightChild);
              this.values[0] = max;
              max = parentIdx;
          } else break;
      }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(100);
heap.insert(450);


