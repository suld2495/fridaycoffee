function solution(n) {
    let sum = 1;
    let i = 0;
    
    while (sum <= n) {
        sum *= ++i;        
    }
    
    return i - 1
}