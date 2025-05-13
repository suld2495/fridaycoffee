const fs = require('fs');
let [[N, M], ...inputs] = fs.readFileSync('/dev/stdin').toString().split('\n').map((v) => v.split(' ').map(Number));

const table = inputs.splice(0, N);
const sumList = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));

for (let i = 0; i < N; i += 1) {
  for (let j = 0; j < N; j += 1) {
    sumList[i + 1][j + 1] = table[i][j] + sumList[i][j + 1] + sumList[i + 1][j] - sumList[i][j];
  }
}

const list = [];

for (let i = 0; i < M; i += 1) {
  const [x1, y1, x2, y2] = inputs[i];
  const sum = sumList[x2][y2] - sumList[x1 - 1][y2] - sumList[x2][y1 - 1] + sumList[x1 - 1][y1 - 1]
  list.push(sum);
}

console.log(list.join('\n'));