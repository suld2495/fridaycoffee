const fs = require('fs');
let [N, ...inputs] = fs.readFileSync('/dev/stdin').toString().split('\n');

N = +N;
inputs = inputs.map((input) => input.split(' ').map(Number));

function isDuplicated(num) {
  return new Set(String(num).split("")).size < 3 || String(num).split("").includes("0");
}

const index = {
  0: [1,2],
  1: [0,2],
  2: [0,1],
}

function check(num) {
  let count = 0;
  for (const [str, s, b] of inputs) {
    const newStr = "" + str;
    const strike = num.split("").filter((num, i) => num === newStr[i]).length;
    const ball = num.split("").filter((num, i) => index[i].some((i) => newStr[i] === num)).length;
    
    if (strike === s && ball === b) {
      count += 1;
    }
  }

  return count === N;
}

let count = 0;

for (let i = 123; i < 999; i += 1) {
  if (isDuplicated(i)) continue;
  
  if (check(String(i))) {
    count += 1;
  }
}

console.log(count);