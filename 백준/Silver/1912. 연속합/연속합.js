const fs = require('fs');
let [[N], inputs] = fs.readFileSync('/dev/stdin').toString().split('\n').map((v) => v.split(' ').map(Number)) ;

const sums = [inputs[0]];

for (let i = 1; i < N; i += 1) {
  const input = inputs[i];
  const sum = sums[i - 1] + input;

  if (sum < input) {
    sums[i] = input;
  } else {
    sums[i] = sums[i - 1] + input;
  }
}

console.log(Math.max(...sums));