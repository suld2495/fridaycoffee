const fs = require('fs');
let N = +fs.readFileSync('/dev/stdin').toString();

function check(str) {
  for (let i = 1; i <= Math.floor(str.length / 2); i += 1) {
    for (let j = 0; j < str.length - i; j += 1) {
      const standard = str.substr(j, i);
      if (str.includes(standard + standard)) {
        return false;
      }
    }
  }

  return true;
}

function dfs(str) {
  if (str.length === N && check(str)) {
    console.log(str);
    return true;
  }  

  if (str.length === N) return false;

  for (let i = 1; i <= 3; i += 1) {
    if (str[str.length - 1] === i) break;
    const newStr = str + i + "";
    let result = check(newStr);
    if (!result) continue;

    result = dfs(newStr);
    if (result) return result;
  }
}

dfs('');