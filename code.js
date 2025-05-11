function dijkstra(graph, sourceNode) {
    const dist = {};
    const visited = new Set();
    
    for (const node in graph) {
        dist[node] = Infinity;
    }
    dist[sourceNode] = 0;

    const queue = [[sourceNode, 0]];

    while (queue.length > 0) {
        queue.sort((a, b) => a[1] - b[1]);
        const [currentNode, currentDist] = queue.shift();

        if (visited.has(currentNode))
            continue;
        visited.add(currentNode);

        for (const neighbor in graph[currentNode]) {
            const weight = graph[currentNode][neighbor];
            const newDist = currentDist + weight;

            if (newDist < dist[neighbor]) {
                dist[neighbor] = newDist;
                queue.push([neighbor, newDist]);
            }
        }
    }
    return dist;
}
module.exports = { dijkstra };
