const fs = require('fs');
let [[, N], inputs] = fs.readFileSync('/dev/stdin').toString().split('\n')
  .map((value) => value.split(' ').map(Number));


const list = [0, inputs[0]];

for (let i = 1; i < inputs.length; i += 1) {
  list[i + 1] = inputs[i] + list[i];
}

let sum = -Infinity;

for (let i = N; i <= inputs.length; i += 1) {
  sum = Math.max(sum, list[i] - list[i - N]);
}

console.log(sum);