function solution(numbers) {
  if (numbers.every(n => !n)) return "0";

  const a = numbers.map(String)
      .sort((a, b) => {
          const length = (a + b).length;
          
          [a, b] = [
              a.padEnd(length, b),
              b.padEnd(length, a),
          ];

          return b - a;
      }).join("");

  return a;
}