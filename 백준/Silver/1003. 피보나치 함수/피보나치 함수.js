const fs = require('fs');
const [N, ...input] = fs
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

let numberList = [];
let consoleList = [];

function fibonacci(n, temp) {
    if (numberList[n]) {
        temp[0] += consoleList[n][0];
        temp[1] += consoleList[n][1]
        return numberList[n];
    }

    if (n === 0) {
        temp[0] = 1;
        return 0;
    } else if (n === 1) {
        temp[1] = 1;
        return 1;
    } else {
        return fibonacci(n - 1, temp) + fibonacci(n - 2, temp);
    }
}

for (let i = 0; i <= Math.max(...input); i += 1) {
    consoleList[i] = [0, 0];
    numberList[i] = fibonacci(i, consoleList[i]);
}

let output = [];

for (let i = 0; i < N; i += 1) {
    output.push(consoleList[input[i]].join(' '));
}

console.log(output.join('\n'));
