function solution(sizes) {
    const max = Math.max(...sizes.reduce((acc, size) => [...acc, ...size]));
    let two = 0;
    
    for (size of sizes) {
        two = Math.max(two, Math.min(...size));
    }
    
    return max * two
}