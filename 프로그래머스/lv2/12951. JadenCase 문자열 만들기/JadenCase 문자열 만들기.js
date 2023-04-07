function solution(s) {
  const small = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const big = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const str = s.split(' ');

  return str.map((s) => s.split('').map((v, i) => {
    if (i === 0) {
      return small.includes(v) ? big[small.indexOf(v)] : v;
    }

    return big.includes(v) ? small[big.indexOf(v)] : v;
  }).join('')).join(' ');
}