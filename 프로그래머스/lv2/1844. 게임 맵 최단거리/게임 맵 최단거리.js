function solution(maps) {
    let directions = [[-1, 0], [0, -1], [1, 0], [0, 1]];
    let queue = [[0, 0, 1]];
    const n = maps[0].length - 1;
    const m = maps.length - 1;
    let min = Infinity;
    
    while (queue.length) {
        const [x, y, count] = queue.shift();
                
        if (x === n && y === m) return count;
        
        for ([dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;
            
            if (nx < 0 || ny < 0 || nx > n || ny > m || !maps[ny][nx]) continue;
            
            maps[ny][nx] = 0;
            queue.push([nx, ny, count + 1]);
        }
    }
    
    return -1;
}