const fs = require('fs');
let [N, ...inputs] = fs.readFileSync('/dev/stdin').toString().split('\n');

N = Number(N);
inputs = inputs.map((input) => input.split(' ').map(Number));

const visited = [];
let min = Infinity;

function calculate(list) {
  const team2List = Array
    .from({ length: N }, (_, i) => i)
    .filter((i) => !list.includes(i));

  let team1 = cal(list);
  let team2 = cal(team2List);

  function cal(list) {
    let sum = 0;

    for (let i = 0; i < list.length; i += 1) {
      for (let j = 0; j < list.length; j += 1) {
        sum += inputs[list[i]][list[j]];
      }
    }

    return sum;
  }

  return Math.abs(team1 - team2);
}

function dfs(list, index) {
  if (list.length > (N / 2)) {
    return;
  }

  if (list.length === (N / 2)) {
    const sum = calculate(list);
    min = Math.min(sum, min);
    return;
  }

  for (let i = index; i < N; i += 1) {
    if (!visited[i]) {
      visited[i] = true;
      dfs([...list, i], i + 1);
      visited[i] = false;
    }
  }
}

dfs([], 0);

console.log(min);