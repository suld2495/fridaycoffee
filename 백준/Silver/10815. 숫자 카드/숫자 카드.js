const fs = require('fs');

let [n, my, m, all] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

[n, m] = [n, m].map(Number);
my = my.split(' ').map(Number);
all = all.split(' ').map(Number);

const result = [];
let str = '';

my.forEach((value) => result[value] = true);

for (let i = 0; i < all.length; i += 1) {
  str += `${Number(result[all[i]]) || 0} `;
}

console.log(str);
