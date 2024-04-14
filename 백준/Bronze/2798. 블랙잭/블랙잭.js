const fs = require('fs');

let [[N, M], input] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' '));

[N, M] = [N, M].map(Number);
input = input.map(Number);

let max = 0;

function dfs(visited, sum, depth) {
  if (sum > M) {
    return;
  }

  if (depth === 3) {
    max = Math.max(max, sum);
    return;
  }

  for (let i = depth; i < N; i += 1) {
    if (!visited[i]) {
      visited[i] = true;
      dfs(visited, sum + input[i], depth + 1);
      visited[i] = false;
    }
  }
}

dfs([], 0, 0);

console.log(max);
