const fs = require('fs');
let [N, M] = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);

const visited = [];

function dfs(list, i) {
  if (list.length === M) {
    console.log(list.join(' '));
    return;
  }

  for (; i <= N; i += 1) {
    if (!visited[i]) {
      visited[i] = true;
      dfs([...list, i], i + 1);
      visited[i] = false;
    }
  }
}

dfs([], 1);

