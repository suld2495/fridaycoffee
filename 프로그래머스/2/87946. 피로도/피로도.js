function solution(k, dungeons) {
    let count = 0;
    let max = 0;
    
    function dfs(count, k, completed) {
        const next = count + 1;
        for (let i = 0; i < dungeons.length; i += 1) {
            const [최소필요피로도, 소모피로도] = dungeons[i];
            if (k < 최소필요피로도 || completed[i]) continue;
            completed[i] = true;
            dfs(next, k - 소모피로도, completed);
            completed[i] = false;
            max = Math.max(max, next);
        }
    }
    
    dfs(count, k, []);
    
    return max;
}