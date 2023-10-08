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

    print() {
        const vertexList = this.vertices || [];
        vertexList.forEach(vertex => vertex.print());
    }
}

module.exports = Graph;