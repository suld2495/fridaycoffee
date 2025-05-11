const fs = require('fs');
let [[N], ...inputs] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map((v) => v.split(' ').map(Number)) ;

inputs.sort(([a], [b]) => a - b);

const length = inputs[inputs.length - 1][0];
const list = Array(length + 1).fill(0);
const reverseList = [...list, 0];

let start = 0;
let end = inputs.length - 1;

for (let i = 1; i <= length; i += 1) {
  const first = inputs[start];
  const last = inputs[end];

  if (i === first[0]) {
    start += 1;

    list[i] = Math.max(list[i - 1], first[1]);
  } else {
    list[i] = list[i - 1];
  }

  if (length - i + 1 === last?.[0]) {
    end -= 1;

    reverseList[length - i + 1] = Math.max(reverseList[length - i + 2], last[1]);
  } else {
    reverseList[length - i + 1] = reverseList[length - i + 2];
  }
}

let sum = 0;

for (let i = 0; i < list.length; i += 1) {
  sum += Math.min(list[i], reverseList[i]);
}

console.log(sum)