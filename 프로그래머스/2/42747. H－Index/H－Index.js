function solution(list) {
  list.sort((a, b) => b - a);

  if (list.every((v) => !v)) return 0;

  return Array.from({ length: list.length }, (_, i) => list.length - i)
    .find((h) => {
      const length = list.findIndex((v) => h > v);
      return length === -1 ? list.length : length >= h;
    });
};