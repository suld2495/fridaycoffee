function solution(storey) {
    const queue = [[storey, 0, 0]];
    let sum = new Set();
    
    while (queue.length) {
        const [num, count, i] = queue.shift();
        
        if (num === 0) {
            sum.add(count);
            continue;
        }
        
        const str = String(num);
        const n = Number(str[str.length - i - 1]);
        
        if (n !== 1) {
            queue.push([num + (10 - n) * (10 ** i), count + 10 - n, i + 1]);    
        }
        
        queue.push([num - n * (10 ** i), count + n, i + 1]);
    }
    
    return Math.min(...[...sum]);
}