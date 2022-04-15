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
  DFS_recursive(vertex){
      let startNode = vertex;
      var results = [];
      var visited = {};

      function DFS(vertex){
          if(!this.adjacencyList[vertex]) return null;
          visited[vertex] = true;
          results.push(vertex);
          for(let i = 0; i < this.adjacencyList[vertex].length; i++){
              let currentAdjacent = this.adjacencyList[vertex][i];
              if(visited[currentAdjacent] !== true){
                  DFS(currentAdjacent);
              }
          }
      }
      DFS(startNode);
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

