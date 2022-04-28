class PriorityQueue {
  constructor(){
      this.values = [];
  }
  enqueue(val, priority){
      this.values.push({val, priority});
      this.sort();
  };
  dequeue(){
      return this.values.shift();
  };
  sort(){
      this.values.sort((a,b) => a.priority - b.priority);
  };
}

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
      const queue = new PriorityQueue();
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
          
          if(smallest || distances[smallest] !== infinity){
              for(let neighbor in this.adjacencyList[smallest]){
                  let nextNode = this.adjacencyList[smallest][neighbor];
                  let nextNeighbor = nextNode.node;
                  let candidate = distances[smallest] + nextNode.weight;
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
      return path.concat(smallest).reverse();
  }
}

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