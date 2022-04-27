class WeightedGraph {
  constructor(){
      this.adjacencyList = {};
  }
  addVertex(vertex){
      if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight){
      this.adjacencyList[vertex1].push({node: vertex2, weight});
      this.adjacencyList[vertex2].push({node: vertex1, weight});
  }
  Dijkstra(startVert, endVert){
      const distances = {};
      const queue = new PriorityMinHeap();
      const previous = {};
      let path = []; //to return at end
      let smallest;
      
      distances[startVert] = 0;
      queue.enqueue(startVert, 0);
      for(let vertex in this.adjacencyList){            
          if(vertex != startVert){
              distances[vertex] = Infinity;
              queue.enqueue(vertex, Infinity);
          }
          previous[vertex] = null;
      }
      
      while(queue.values.length){
          smallest = queue.dequeue().val;
          if(smallest === endVert){
              console.log(distances);
              console.log(previous);
            while(previous[smallest]){
                path.push(smallest);
                smallest = previous[smallest];
            }
              break;
          } 
          
          if(smallest || distances[smallest] !== Infinity){
              for(let neighbor in this.adjacencyList[smallest]){
                  //find neighboring node
                  let nextNode = this.adjacencyList[smallest][neighbor];
                  //calculate new distance to neighboring node
                  let candidate = distances[smallest] + nextNode.weight;
                  let nextNeighbor = nextNode.node;
                  if(candidate < distances[nextNeighbor]){
                      //updating new smallest distance to neighbor
                      distances[nextNeighbor] = candidate;
                      //updating previous - how we got to neighbor
                      previous[nextNeighbor] = smallest;
                      //enqueue in priority queue with new priority
                      queue.enqueue(nextNeighbor, candidate);
                  }
              }
          }
      }
      console.log(queue);
      return path.concat(smallest).reverse();
  }
}


class Node{
  constructor(val, priority){
      this.value = val;
      this.priority = priority;
  }
}

class PriorityMinHeap{
  constructor(){
      this.values = [];
  }
  enqueue(val, priority){
      let newNode = new Node(val, priority);
      this.values.push(newNode);
      this.bubbleUp();
      return this.values;
  }
  bubbleUp(){
      let idx = this.values.length - 1;
      const element = this.values[idx]; 
      while(idx > 0){
          let parentIdx = Math.floor((idx - 1) / 2);
          let parent = this.values[parentIdx];
          if(element.priority >= parent.priority) break;
          this.values[parentIdx] = element;
          this.values[idx] = parent;
          idx = parentIdx;    
          }
      }
  dequeue(){
      const min = this.values[0];
      const end = this.values.pop();
      if(this.values.length > 0){
          this.values[0] = end;
          this.sinkDown();
      }
      return min;
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
              if(leftChild.priority < element.priority){
                  swap = leftChildIdx;
              }
          }
           if(rightChildIdx < length){
               rightChild = this.values[rightChildIdx];
               if(
                   (swap === null && rightChild.priority < element.priority) || 
                   (swap !== null && rightChild.priority < leftChild.priority)
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
  };

let wg =  new WeightedGraph();
wg.addVertex("A");
wg.addVertex("B");
wg.addVertex("C");
wg.addVertex("D");
wg.addVertex("E");
wg.addVertex("F");
wg.addEdge("A", "B", 4);
wg.addEdge("A", "C", 2);
wg.addEdge("B", "E", 3);
wg.addEdge("C", "D", 2);
wg.addEdge("C", "F", 4);
wg.addEdge("D", "E", 3);
wg.addEdge("D", "F", 1);
wg.addEdge("E", "F", 1);
