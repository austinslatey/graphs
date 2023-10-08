const Edge = require('./Edge.js');

class Vertex {
    constructor(data) {
        this.data = data;
        // Initialize edges as an empty array
        this.edges = []; 
    }




    print() {
        const edgeList = this.edges.map(edge =>
            edge.weight !== null ? `${edge.end.data} (${edge.weight})` : edge.end.data) || [];

        const output = `${this.data} --> ${edgeList.join(', ')}`;
        console.log(output);
    }

    addEdge(vertex, weight) {
        if (!(vertex instanceof Vertex)) {
            throw new Error('Edge must connect to an instance of Vertex');
        }

        const edge = new Edge(this, vertex, weight);
        this.edges.push(edge);
    }

    removeEdge(endingVertex) {
        this.edges = this.edges.filter(edge => edge.end !== endingVertex);
    }
}

module.exports = Vertex;