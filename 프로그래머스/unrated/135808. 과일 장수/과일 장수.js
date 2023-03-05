function solution(k, m, score) {
    score.sort((a, b) => a - b);
    let sum = 0;
    
    for (let i = score.length % m; i < score.length; i += m) {
        sum += score[i] * m;
    }
    return sum;
}