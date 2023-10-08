const Edge = require('./Edge.js');
const Vertex = require('./Vertex.js');

class Graph {
    constructor(isWeighted = false, isDirected = false) {
        // Initialize vertices as an empty array
        this.vertices = [];
        this.isWeighted = isWeighted;
        this.isDirected = isDirected;
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

        if (!this.isDirected) {
            // If it's undirected, add the reverse edge
            vertexTwo.addEdge(vertexOne, edgeWeight);
        }
    }

    removeEdge(vertexOne, vertexTwo) {
        if (!(vertexOne instanceof Vertex) || !(vertexTwo instanceof Vertex)) {
            throw new Error('Edges must connect two instances of Vertex');
        }

        // Make sure edges is initialized
        vertexOne.edges = vertexOne.edges || [];
        vertexTwo.edges = vertexTwo.edges || [];

        // Remove the edge only if it's undirected
        if (!this.isDirected) {
            vertexOne.removeEdge(vertexTwo);
            vertexTwo.removeEdge(vertexOne);
        } else {
            // If it's directed, only remove the edge from vertexOne to vertexTwo
            vertexOne.removeEdge(vertexTwo);
        }
    }

    print() {
        const vertexList = this.vertices || [];
        vertexList.forEach(vertex => vertex.print());
    }
}

module.exports = Graph;

// In Graph.js (Usage)
const trainNetwork = new Graph(false, true); // Make the graph unweighted and directed

const atlantaStation = trainNetwork.addVertex('Atlanta');
const newYorkStation = trainNetwork.addVertex('New York');

trainNetwork.addEdge(atlantaStation, newYorkStation);

trainNetwork.print(); // This will print the graph with an edge going from Atlanta to New York

// Remove the edge between Atlanta and New York
trainNetwork.removeEdge(atlantaStation, newYorkStation);

trainNetwork.print();