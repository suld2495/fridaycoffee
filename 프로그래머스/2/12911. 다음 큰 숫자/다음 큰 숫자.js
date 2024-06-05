function calc(number) {
  const 이진수 = [];

  while (number > 0) {
    이진수.push(number % 2);
    number = Math.floor(number / 2);
  }

  return 이진수.reverse().join("");
}

function solution(number, count) {
  const originCount = calc(number++)
    .split("")
    .map(Number)
    .reduce((a, b) => a + b);

  if (originCount === count) {
    return number - 1;
  }

  return solution(number, count ?? originCount);
}