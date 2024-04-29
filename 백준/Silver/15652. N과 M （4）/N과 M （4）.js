const fs = require('fs');
let [N, M] = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);

function dfs(list, i) {
  if (list.length === M) {
    console.log(list.join(' '))
    return;
  }

  for (;i <= N; i += 1) {
    dfs([...list, i], i);
  }
}

dfs([], 1);