const Edge = require('./Edge.js');
const Vertex = require('./Vertex.js');

class Graph {
    constructor(isWeighted = false) {
        // Initialize vertices as an empty array
        this.vertices = []; 
        this.isWeighted = isWeighted;
    }

    addVertex(data) {
        const newVertex = new Vertex(data);
        this.vertices.push(newVertex);
        return newVertex;
    }

    removeVertex(vertexToRemove) {
        this.vertices = this.vertices.filter(vertex => vertex !== vertexToRemove);
    }

    addEdge(vertexOne, vertexTwo, weight) {
        if (!(vertexOne instanceof Vertex) || !(vertexTwo instanceof Vertex)) {
            throw new Error('Edges must connect two instances of Vertex');
        }

        const edgeWeight = this.isWeighted ? weight : null;

        vertexOne.addEdge(vertexTwo, edgeWeight);
        vertexTwo.addEdge(vertexOne, edgeWeight);
    }

    removeEdge(vertexOne, vertexTwo) {
        if (!(vertexOne instanceof Vertex) || !(vertexTwo instanceof Vertex)) {
          throw new Error('Edges must connect two instances of Vertex');
        }
    
        // Make sure edges is initialized
        vertexOne.edges = vertexOne.edges || [];
        vertexTwo.edges = vertexTwo.edges || [];
    
        // Remove the edge
        vertexOne.removeEdge(vertexTwo);
        vertexTwo.removeEdge(vertexOne);
      }

    print() {
        const vertexList = this.vertices || [];
        vertexList.forEach(vertex => vertex.print());
    }
}

module.exports = Graph;

// Create Graph and make weighted 
const trainNetwork = new Graph(true); 

const atlantaStation = trainNetwork.addVertex('Atlanta');
const newYorkStation = trainNetwork.addVertex('New York');

trainNetwork.addEdge(atlantaStation, newYorkStation, 800);

// Print Graph with an edge between ATL & NY having a weight of 800
trainNetwork.print(); 