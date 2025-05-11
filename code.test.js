const assert = require("assert");
const { dijkstra } = require("./code");

// Example graph as an adjacency list
const graph = {
  A: { B: 1, C: 4 },
  B: { C: 2, D: 5 },
  C: { D: 1 },
  D: {},
};

const result = dijkstra(graph, "A");

assert.strictEqual(result.A, 0);
assert.strictEqual(result.B, 1);
assert.strictEqual(result.C, 3);  // A -> B -> C
assert.strictEqual(result.D, 4);  // A -> B -> C -> D

console.log("All tests passed.");
