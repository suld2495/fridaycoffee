const fs = require('fs');
let [N, M] = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);

const visited = [];

function dfs(list) {
  if (list.length === M) {
    console.log(list.join(' '));
    return;
  }

  for (let i = 1; i <= N; i += 1) {
    if (!visited[i]) {
      visited[i] = true;
      dfs([...list, i]);
      visited[i] = false;
    }
  }
}

dfs([]);

