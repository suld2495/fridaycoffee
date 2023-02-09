const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const inputCount = Number(input[0]);

const list = [];
for (let i = 1; i <= inputCount; i += 1) {
  const num = input[i].split('').filter((_, index) => index < inputCount).map((v) => parseInt(v));
  list.push(num);
}

const result = [];
const queue = [];
const xLength = list[0].length - 1;
const yLength = list.length - 1;
const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
let count = 1;

for (let j = 0; j < list.length; j += 1) {
  for (let i = 0; i < list[0].length; i += 1) {
    if (list[j][i] !== 1) continue;
    let sum = 0;
    queue.push([i, j, ++count]);

    while (queue.length) {
      const [x, y, count] = queue.shift();

      if (x < 0 || y < 0 || x > xLength || y > yLength || list[y][x] !== 1) continue;

      sum += 1;
      list[y][x] = count;

      for (d of directions) {
        const nx = x + d[0];
        const ny = y + d[1];
        queue.push([nx, ny, count]);
      }
    }

    result.push(sum);
  }
}

console.log(count - 1);
result.sort((a, b) => a - b).forEach((v) => {
  console.log(v);
});

