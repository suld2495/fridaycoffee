function solution(d, budget) {
    let count = 0;
    d = d.sort((a, b) => a - b);
    
    while (budget >= 0) {
        budget -= d[count++];
    }
    
    return count - 1
}