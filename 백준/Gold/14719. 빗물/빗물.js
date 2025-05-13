const fs = require('fs');
let [[H, W], inputs] = fs.readFileSync('/dev/stdin').toString().split('\n').map((v) => v.split(' ').map(Number));

const max = inputs.reduce((a, b) => a > b ? a : b);
const minIndex = inputs.indexOf(max);
const maxIndex = inputs.lastIndexOf(max);

let sum = 0;
let cur = 0;

for (let i = 0; i <= minIndex; i += 1) {
  cur = Math.max(cur, inputs[i]);
  sum += Math.max(cur - inputs[i], 0);
}

for (let i = minIndex + 1; i < maxIndex; i += 1) {
  sum += Math.max(cur - inputs[i], 0);
}

cur = 0;

for (let i = W - 1; i >= maxIndex; i -= 1) {
  cur = Math.max(cur, inputs[i]);
  sum += Math.max(cur - inputs[i], 0);
}

console.log(sum)