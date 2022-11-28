
function solution(lines) {
  lines.sort(([a], [b]) => a - b);
  const segments = [];

  for (let i = 0; i < lines.length - 1; i += 1) {
    for (let j = i + 1; j < lines.length; j += 1) {
      if (lines[j][0] < lines[i][1]) {
        segments.push([lines[j][0], Math.min(lines[i][1], lines[j][1])]);
      }
    }
  }

  const distance = new Set();

  for (let i = 0; i < segments.length; i += 1) {
    for (let j = segments[i][0]; j < segments[i][1]; j += 1) {
      distance.add(j);
    }
  }

  return distance.size;
}