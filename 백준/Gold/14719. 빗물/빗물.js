const fs = require('fs');
let [[, W], inputs] = fs.readFileSync('/dev/stdin').toString().split('\n')
  .map((value) => value.split(' ').map(Number));

const list = [inputs[0]];
const reverseList = [];
reverseList[W - 1] = inputs[W - 1];

for (let i = 1; i < W; i += 1) {
  list[i] = Math.max(list[i - 1], inputs[i]); 
  reverseList[W - i - 1] = Math.max(reverseList[W - i], inputs[W - i - 1]); 
}

let result = 0;

for (let i = 0; i < W; i += 1) {
  const sum = Math.min(list[i], reverseList[i]);
  result += sum - inputs[i];
}

console.log(result);