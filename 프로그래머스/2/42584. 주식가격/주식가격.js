function solution(prices) {
    const result = [];
    
    for (let i = 0; i < prices.length - 1; i += 1) {
        let count = 1;
        for (let j = i + 1; j < prices.length - 1; j += 1) {
            if (prices[j] < prices[i]) break;
            count += 1;
        }
        result.push(count);
    }
    result.push(0);
    return result;
}