const fs = require('fs');
let [_, inputs] = fs.readFileSync('/dev/stdin').toString().split('\n');
inputs = inputs.split(' ').map(Number);

const result = [];

inputs.forEach((num, index) => {
  result.splice(result.length - num, 0, index + 1);
});

console.log(result.join(' '));