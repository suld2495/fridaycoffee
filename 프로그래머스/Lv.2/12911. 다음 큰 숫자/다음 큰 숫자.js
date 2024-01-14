function calc(n) {
    let result = '';
    
    while (n > 1) {
        result = n % 2 + result;       
        n = parseInt(n / 2); 
    }
    
    return 1 + result;
}

function solution(n) {
    let start = n + 1;
    let result = 0;
    const diff = String(calc(n))
        .split('')
        .map(Number)
        .reduce((a, b) => a + b);
    
    while (result !== diff) {
        result = String(calc(start++))
            .split('')
            .map(Number)
            .reduce((a, b) => a + b);
    }
    
    return start - 1;
}