function solution(n) {
    let sum = 1;
    let i = 1;
    
    while (sum <= n) {
        sum *= i++;        
    }
    
    return i - 2;
}