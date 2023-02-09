const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const numbers = input[1].split(' '); // 20 1 15 8 4 10
const result = new Set();

function dfs(list, number) {
    if (number.split(',').length === numbers.length) {
        result.add(number);
        return;
    }

    for (let i = 0; i < list.length; i += 1) {
        dfs(list.filter((_, index) => index !== i), `${number ? `${number},` : ''}${list[i]}`);
    }
}

dfs(numbers, '');

let max = -Infinity;

for (n of result) {
    let sum = 0;
    n = n.split(',');
    for (let i = 0; i < n.length - 1; i += 1) {
        sum += Math.abs(n[i] - n[i + 1]);
    }

    max = Math.max(max, sum);
}

console.log(max);