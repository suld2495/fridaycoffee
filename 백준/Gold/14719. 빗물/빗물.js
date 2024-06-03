const fs = require('fs');
let [[N, K], inputs] = fs.readFileSync('/dev/stdin').toString().split('\n').map((v) => v.split(' ').map(Number));

const nums = [inputs[0]];

for (let i = 1; i < K; i++) {
  nums[i] = nums[i - 1] > inputs[i] ? nums[i - 1] : inputs[i];
}

const numsReverse = [];
numsReverse[K - 1] = inputs[K - 1];

for (let i = K - 2; i >= 0; i--) {
  numsReverse[i] = numsReverse[i + 1] > inputs[i] ? numsReverse[i + 1] : inputs[i];
}

const sums = [];

for (let i = 0; i < K; i++) {
  const value = Math.min(numsReverse[i], nums[i]);
  sums[i] = Math.abs(inputs[i] - value);
}

console.log(sums.reduce((acc, cur) => acc + cur));