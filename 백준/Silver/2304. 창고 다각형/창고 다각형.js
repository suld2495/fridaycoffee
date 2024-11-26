const fs = require('fs');
let [, ...inputs] = fs.readFileSync('/dev/stdin').toString().split('\n')
inputs = inputs.map((value) => value.split(' ').map(Number))
  .sort(([a], [b]) => a - b);

const min = inputs[0][0];
const max = inputs[inputs.length - 1][0];
inputs = inputs.reduce((acc, [key, value]) => {
  acc[key] = value;
  return acc;
}, {});

const height = [];
const reverseHeight = [];
reverseHeight[max] = inputs[max];

for (let i = min; i <= max; i += 1) {
  height[i] = (Math.max(height[i - 1] || 0, inputs[i] || 0));
  reverseHeight[max - i + min] = Math.max(reverseHeight[max - i + min + 1] || 0, inputs[max - i + min] || 0);
}

let result = 0;
for (let i = min; i <= max; i += 1) {
  const sum = Math.min(height[i], reverseHeight[i]);
  result += sum;
}

console.log(result);