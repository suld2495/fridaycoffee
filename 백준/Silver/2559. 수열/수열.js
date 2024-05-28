const fs = require('fs');
let [[N, K], inputs] = fs.readFileSync('/dev/stdin').toString().split('\n').map((v) => v.split(' ').map(Number)) ;

const sums = [0];

for (let i = 1; i < N + 1; i += 1) {
  sums[i] = sums[i - 1] + inputs[i - 1];
}

let result = -Infinity;

for (let i = K; i < N + 1; i += 1) {
  result = Math.max(result, sums[i] - sums[i - K]);
}

if (K === N) {
  console.log(sums[N]);  
} else {
  console.log(result);
}


