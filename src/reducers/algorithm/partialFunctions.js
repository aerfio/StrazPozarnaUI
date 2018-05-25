export const run = (graph, start, end) => {
    let map = graphToMap(graph);

    // console.log(map);

    let visited = [];
    let frontier = [start];
    let table = { [start]: { vertex: start, cost: 0 } };

    let vertex;
    // eslint-disable-next-line
    while (vertex = frontier.shift()) {
        // Explore unvisited neighbors
        //console.log(map[vertex]);
        let neighbors = map[vertex]
            .filter(n => {return !visited.includes(n.vertex)});

        // Add neighbors to the frontier
        frontier.push(...neighbors.map(n => n.vertex));

        let costToVertex = table[vertex].cost;

        for (let { vertex: to, cost } of neighbors) {
            let currCostToNeighbor = table[to] && table[to].cost;
            let newCostToNeighbor = costToVertex + cost;
            // eslint-disable-next-line
            if (currCostToNeighbor == undefined ||
                newCostToNeighbor < currCostToNeighbor) {
                // Update the table
                table[to] = { vertex, cost: newCostToNeighbor };
            }
        }
        visited.push(vertex);
    }
    // eslint-disable-next-line
    if(typeof(table[end])=='undefined'){
        //console.log(start + ' '+ end +' '+Number.POSITIVE_INFINITY)
        return Number.MAX_SAFE_INTEGER;
    }else{
        //console.log(start + ' ' + end + ' ' +table[end].cost)
        return table[end].cost
    }
};

export const parseEdge = (edge) => {
    let [left, right, ...cost] = edge;
    cost = parseInt(cost.join(''), 10);
    return { left, right, cost };
};

export const addToMap = (map, origin, vertex, cost) => {
    (map[origin] = map[origin] || [])
        .push({ vertex, cost });
};

export const graphToMap = (graph) => {
    let map = {};

    for (let edge of graph) {
        let { left, right, cost } = parseEdge(edge);

        addToMap(map, left, right, cost);
        addToMap(map, right, left, cost);
    }

    return map;
};
