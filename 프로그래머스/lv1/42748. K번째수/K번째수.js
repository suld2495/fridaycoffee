function solution(array, commands) {
  const list = [];
  
  for (let i = 0; i < commands.length; i += 1) {
      const [start, end, n] = commands[i];

      list.push(
        array
              .slice(start - 1, end)
              .sort((a, b) => a - b)[n - 1]
      );
  }
  
  return list;
}