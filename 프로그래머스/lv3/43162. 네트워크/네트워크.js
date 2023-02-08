function solution(n, computers) {
    const list = [];
    for (let i = 0; i < computers.length; i += 1) {
        list.push(dfs([i], computers[i]));
    }
    
    function dfs(list, computer, i) {
        for (let j = 0; j < computer.length; j += 1) {
            if (i !== j && computer[j] && !list.includes(j)) {
                list.push(j);
                dfs(list, computers[j]);
            }
        }       
        
        return list;
    }
    
    return new Set(
        list.map(
            (l) => l
                .sort((a, b) => a - b)
                .join('')
        )
    ).size;
}