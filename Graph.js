const Edge = require('./Edge.js');
const Vertex = require('./Vertex.js');

class Graph {
    constructor() {
        this.vertices = []; // Initialize vertices as an empty array
    }

    addVertex(data) {
        const newVertex = new Vertex(data);
        this.vertices.push(newVertex);
        return newVertex;
      }

      removeVertex(vertexToRemove) {
        this.vertices = this.vertices.filter(vertex => vertex !== vertexToRemove);
      }

    print() {
        const vertexList = this.vertices || [];
        vertexList.forEach(vertex => vertex.print());
    }
}

module.exports = Graph;

// Creating the train network
const trainNetwork = new Graph();

const atlantaStation = trainNetwork.addVertex('Atlanta');
const newYorkStation = trainNetwork.addVertex('New York');

// Remove atlanta station
trainNetwork.removeVertex(atlantaStation);

trainNetwork.print(); 