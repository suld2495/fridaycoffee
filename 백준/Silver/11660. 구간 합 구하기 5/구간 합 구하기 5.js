const fs = require('fs');

const [[N, M], ...input] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(v => v.split(' ').map(Number));

const table = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));

input.slice(0, N).forEach((row, x) => {
  row.forEach((cell, y) => {
    table[x + 1][y + 1] = cell;
  })
});

for (let i = 1; i < N + 1; i += 1) {
  for (let j = 1; j < N + 1; j += 1) {
    table[i][j] += table[i - 1][j] + table[i][j - 1] - table[i - 1][j - 1];
  }
}

const coords = input.slice(N);
const output = [];

coords.forEach(([ y1, x1, y2, x2 ]) => {
  output.push(table[y2][x2] - table[y1 - 1][x2] - table[y2][x1 - 1] + table[y1 - 1][x1 - 1]);
});

console.log(output.join('\n'));