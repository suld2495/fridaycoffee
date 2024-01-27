// 거꾸로 계산한다.
// 비교시 자신과 동일한 숫자가 있는지 확인
// 동일한 숫자를 만나면 지금까지의 index + 동일한 숫자가 가지는 인덱스
function solution(prices) {
    prices.reverse();
    const result = [0];
    
    for (let i = 1; i < prices.length; i += 1) {
        let j = i - 1;
        for (; j >= 0; j -= 1) {
            if (prices[j] < prices[i]) break;
        }
        result.push(i - Math.max(j, 0));
    }
    
    return result.reverse();
}