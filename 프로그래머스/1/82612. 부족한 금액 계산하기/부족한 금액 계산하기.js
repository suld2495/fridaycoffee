function solution(price, money, count) {
    return Math.max(Math.abs(Array
        .from({ length: count }, (_, i) => i + 1)
        .reduce((acc, a) => acc + a) * price) - money, 0) 
}