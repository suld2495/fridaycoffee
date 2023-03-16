function solution(n) {
    const list = [0, 1];
    
    for (let i = 2; i <= n; i += 1) {
        list[i] = (list[i - 1] + list[i - 2]) % 1234567;
    }
    
    return list[n];
}