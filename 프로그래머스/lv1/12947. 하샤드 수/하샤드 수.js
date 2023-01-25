function solution(x) {
    var value = String(x)
        .split('')
        .map(v => Number.parseInt(v))
        .reduce((acc, v) => acc + v);
    return !(x % value);
}