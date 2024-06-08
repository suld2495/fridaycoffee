function solution(num) {
  let count = 0;

  for (let i = 1; i <= num; i += 1) {
    let sum = 0;

    for (let j = i; j <= num && sum < num; j += 1) {
      sum += j;

      if (sum === num) {
        count += 1;
      }
    }
  }

  return count;
}