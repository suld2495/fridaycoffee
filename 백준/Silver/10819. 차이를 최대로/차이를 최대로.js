const fs = require('fs');
let [N, inputs] = fs.readFileSync('/dev/stdin').toString().split('\n');

N = Number(N);
inputs = inputs.split(" ").map(Number);

let max = -Infinity;
const visited = [];

function calculate(list) {
  let sum = 0;

  for (let i = 0; i < N - 1; i += 1) {
    sum += Math.abs(list[i] - list[i + 1]);
  }

  return sum;
}

function dfs(list) {
  if (list.length === N) {
    max = Math.max(calculate(list), max);
    return;
  }

  for (let i = 0; i < N; i += 1) {
    if (!visited[i]) {
      visited[i] = true;
      dfs([...list, inputs[i]]);
      visited[i] = false;
    }
  }
}

dfs([]);

console.log(max);