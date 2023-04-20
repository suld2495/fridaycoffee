function isPrimeNumber(number) {
    if (number < 2) return false;
    
    for (let i = 2; i <= Math.sqrt(number); i += 1) {
        if (!(number % i)) return false;
    }    

    return true;
}

function solution(n, k) {
    const numbers = n.toString(k).split('0');
    
    return numbers.map(Number).filter(isPrimeNumber).length;
}