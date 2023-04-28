function solution(tickets) {
  tickets.sort(([, a], [, b]) => {
    return a < b ? -1 : a === b ? 0 : 1
  });
  
  const visited = [];
  
  function dfs(start, list, count) {
    if ((list.length - 1) === tickets.length) {
        return list;
    }
      
      for (let i = 0; i < tickets.length; i += 1) {
          if (!visited[i] && tickets[i][0] === start) {
              visited[i] = true;
              const newlist = [...list];
              newlist.push(tickets[i][1]);
              const result = dfs(tickets[i][1], newlist, count + 1);

              if (result) {
                return result;
              }

              visited[i] = false;
          }
      }
  }
  
  return dfs('ICN', ['ICN'], 0);
}