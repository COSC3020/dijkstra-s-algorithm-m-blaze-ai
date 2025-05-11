const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js') + '');

const graph = {
  A: { B: 1, C: 4 },
  B: { C: 2, D: 5 },
  C: { D: 1 },
  D: {},
};


const expected = {
  A: 0,
  B: 1,
  C: 3,
  D: 4
};


const testDijkstra = jsc.forall("nat", function(_) {
  const result = dijkstra(graph, "A");
  return (
    result.A === expected.A &&
    result.B === expected.B &&
    result.C === expected.C &&
    result.D === expected.D
  );
});

jsc.assert(testDijkstra);
