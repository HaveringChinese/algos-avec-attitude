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
}

let g = new Graph();
g.addVertex("Beijing");
g.addVertex("Kunming");
g.addVertex("Guangzhou");
g.addEdge("Beijing", "Guangzhou");
g.addEdge("Beijing", "Kunming");
g.addEdge("Kunming", "Guangzhou");

