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
}

module.exports = Vertex;