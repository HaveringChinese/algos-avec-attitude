class Graph {
  constructor(){
      this.adjacencyList = {};
  }
  addVertex(vertex){
      if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2){
      this.adjacencyList[v1].push(v2);
      this.adjacencyList[v2].push(v1);
  }
  removeEdge(v1, v2){
      this.adjacencyList[v1] = this.adjacencyList[v1].filter(function(item){
          return item !== v2;
      });
      this.adjacencyList[v2] = this.adjacencyList[v2].filter(function(item){
          return item !== v1;
      });
  }
  removeVertex(vertex){
      while(this.adjacencyList[vertex].length){
          const adjacentVertex = this.adjacencyList[vertex].pop();
          this.removeEdge(vertex, adjacentVertex);
      }
      delete this.adjacencyList[vertex];
  }
  DFS_recursive(startNode){
      const results = [];
      const visited = {};
      const adjacencyList = this.adjacencyList;
      (function DFS(vertex){
          if(!vertex) return null;
          visited[vertex] = true;
          results.push(vertex);
          for(let i = 0; i < adjacencyList[vertex].length; i++){
              let currentAdjacent = adjacencyList[vertex][i];
              if(!visited[currentAdjacent]){
                  DFS(currentAdjacent);
              }
          }
      })(startNode);
      return results;
  }
  DFS_iterative(startNode){
      const stack = [startNode];
      const results = [];
      const visited = {};
      let currentVertex;
      
      visited[startNode] = true;
      while (stack.length){
          console.log(stack);
          currentVertex = stack.pop();
          results.push(currentVertex);
          
          this.adjacencyList[currentVertex].forEach(neighbor => {
             if(!visited[neighbor]){
                  visited[neighbor] = true;
                  stack.push(neighbor); 
                 }
              });
          }
      return results;
  }
  //I defeated the course instructor on this algorithm!!!!!! Get wrecked son!
  BFS(startNode){
      const queue = [startNode];
      const results = [];
      const visited = {};
      let currentVertex;

      visited[startNode] = true;
      while(queue.length){
          currentVertex = queue.shift();
          results.push(currentVertex);
          this.adjacencyList[currentVertex].forEach(neighbor => {
              if(!visited[neighbor]){
                  visited[neighbor] = true;
                  queue.push(neighbor);
              }
          });
      }
      return results;
  }  
}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

