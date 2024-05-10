const fs = require('fs');
const n = Number(fs.readFileSync("/dev/stdin").toString());
const arr = Array(n + 1).fill(BigInt(0));
arr[1] = BigInt(1);

for (let i = 2; i <= n; i += 1) {
  arr[i] = arr[i - 1] + arr[i - 2];
}

console.log(arr[n].toString());
