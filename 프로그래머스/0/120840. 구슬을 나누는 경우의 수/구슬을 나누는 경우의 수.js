function solution(balls, share) {
    let count = 0;
    const visited = [];
    
    function dfs(length, index) {
        if (length === share) {
            count += 1;
            return;
        }

        for (let i = index; i < balls; i += 1) {
            if (!visited[i]) {
                visited[i] = true;
                dfs(length + 1, i + 1);
                visited[i] = false;
            }
        }
    }

    dfs(0, 0);
    return count;
}