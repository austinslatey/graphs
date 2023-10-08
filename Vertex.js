const Edge = require('./Edge.js');

class Vertex {
    constructor(data) {
        this.data = data;
        this.edges = []; // Initialize edges as an empty array
    }




    print() {
        const edgeList = this.edges.map(edge =>
            edge.weight !== null ? `${edge.end.data} (${edge.weight})` : edge.end.data) || [];

        const output = `${this.data} --> ${edgeList.join(', ')}`;
        console.log(output);
    }

    addEdge(vertex) {
        if (!(vertex instanceof Vertex)) {
            throw new Error('Edge must connect to an instance of Vertex');
        }

        const edge = new Edge(this, vertex);
        this.edges.push(edge);
    }

    removeEdge(endingVertex) {
        this.edges = this.edges.filter(edge => edge.end !== endingVertex);
    }
}

module.exports = Vertex;