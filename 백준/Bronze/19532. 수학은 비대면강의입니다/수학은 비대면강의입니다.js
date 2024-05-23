const fs = require('fs');
let [a,b,c,d,e,f] = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);

for (let x = -999; x <= 999; x += 1) {
  for (let y = -999; y <= 999; y += 1) {
    if (a * x + b * y === c
      && d * x + e * y === f
    ) {
      console.log(x, y);
      return;
    }
  }
}