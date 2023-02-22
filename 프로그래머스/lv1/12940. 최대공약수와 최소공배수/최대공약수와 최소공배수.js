function solution(n, m) {
    const [min, max] = [n, m].sort((a, b) => a - b);
    let 최대공약수 = 1;
    let 최소공배수 = min * max;
    
    for (let i = max; i > 0; i -= 1) {
        if (!(max % i) && !(min % i)) {
            최대공약수 = i;
            break;
        }
    }
    
    for (let i = 2; i < min * max; i += 1) {
        if (!(i % min) && !(i % max)) {
            최소공배수 = i;
            break;
        }
    }
    
    return [최대공약수, 최소공배수]
}