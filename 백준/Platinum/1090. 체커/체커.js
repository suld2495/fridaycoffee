const fs = require('fs');
let [N, ...inputs] = fs.readFileSync('/dev/stdin').toString().split('\n');

N = +N;
inputs = inputs.map((input) => input.split(" ").map(Number));
const result = Array(N).fill(Infinity);

for (let i = 0; i < N; i += 1) {
  for (let j = 0; j < N; j += 1) {
    const [midX, midY] = [inputs[i][0], inputs[j][1]];
    
    const distance = [];
    for (let h = 0; h < N; h += 1) {
      distance.push(Math.abs(midX - inputs[h][0]) + Math.abs(midY - inputs[h][1]));
    }

    distance.sort((a, b) => a - b);
    let sum = 0;

    for (let h = 0; h < N; h += 1) {
      sum += distance[h];

      if (result[h] > sum) {
        result[h] = sum;
      }
    }
  }
}

console.log(result.join(" "));