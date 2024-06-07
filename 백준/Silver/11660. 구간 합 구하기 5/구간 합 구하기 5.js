const fs = require('fs');
let [[N, M], ...inputs] = fs.readFileSync('/dev/stdin').toString().split('\n').map((v) => v.split(' ').map(Number));

const table = inputs.splice(0, N)
const sumList = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));

for (let i = 1; i < N + 1; i += 1) {
  for (let j = 1; j < N + 1; j += 1) {
    sumList[i][j] = sumList[i][j - 1] + sumList[i - 1][j] + table[i - 1][j - 1] - sumList[i - 1][j - 1];
  }
}

const output = [];

for (let i = 0; i < M; i += 1) {
  const [x1, y1, x2, y2] = inputs[i];
  output.push(sumList[x2][y2] - sumList[x1 - 1][y2] - sumList[x2][y1 - 1] + sumList[x1 - 1][y1 - 1]);
}

console.log(output.join('\n'));