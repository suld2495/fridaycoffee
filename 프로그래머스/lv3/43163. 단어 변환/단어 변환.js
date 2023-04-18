function solution(begin, target, words) {
    let max = Infinity;
    const visited = [];
    
    function dfs(word, count) {
        if (word === target) {
            max = Math.min(count, max);
            return;
        }
        
        for (let i = 0; i < words.length; i += 1) {
            if (!visited[i]) {
                const { length } = [...word].filter((c, index) => c !== words[i][index]);
                
                if (length !== 1) continue;
                
                visited[i] = true;
                dfs(words[i], count + 1);
                visited[i] = false;
            }
        }
    }
    
    dfs(begin, 0);

    return isFinite(max) ? max : 0;
}