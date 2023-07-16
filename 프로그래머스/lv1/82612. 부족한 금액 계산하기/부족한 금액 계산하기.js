function solution(price, money, count) {
    return Math.max((1 + count) * count / 2 * price - money, 0);
}