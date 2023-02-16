const fs = require('fs');

let [n, ...list] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

list.unshift(0);
let max = 0;
const stack = [0];

for (let i = 1; i <= n + 1; i += 1) {
  while(stack.length && list[stack[stack.length - 1]] >  (list[i] || 0)) {
    const check = stack.pop();
    max = Math.max(max, list[check] * (i - 1 - stack[stack.length - 1]))
  }

  stack.push(i);
}

console.log(max);