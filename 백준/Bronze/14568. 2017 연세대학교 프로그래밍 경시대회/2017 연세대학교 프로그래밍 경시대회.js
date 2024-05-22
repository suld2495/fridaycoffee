const fs = require('fs');
const n = +fs.readFileSync("/dev/stdin").toString();

let count = 0;
const visited = [];
const result = [];

function dfs(list, num) {
  if (visited[list.join(',')]) return;

  if (num === 0 
    && list[2] > list[1] + 1
    && !result.includes(list.join(","))
  ) {
    result.push(list.join(","));
    count += 1;
  }

  if (num < 1) {
    return;
  }

  visited[list.join(',')] = true;

  let newList = [...list];
  newList[0] += 2;
  dfs(newList, num - 2);

  newList = [...list];
  newList[1] += 1;
  dfs(newList, num - 1);

  newList = [...list];
  newList[2] += 1;
  dfs(newList, num - 1);
}

dfs([2, 1, 3], n - 6);

console.log(count);