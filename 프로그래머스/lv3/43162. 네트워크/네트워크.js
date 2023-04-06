function solution(n, computers) {
  const list = [];

  if (n === 1) {
    return 1;
  }

  for (let i = 0; i < computers.length; i += 1) {
    dfs(i, i, i + 1);
  }

  function dfs(prev, current, network) {
    if (list[current] || !computers[prev][current]) {
      return;
    }

    list[current] = network;

    for (let i = 0; i < computers.length; i += 1) {
      dfs(current, i, network);
    }
  }

  return new Set(list).size;
}