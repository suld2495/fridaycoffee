function solution(my_string) {
    return my_string
        .replace(/[^0-9]/gi, '')
        .split('')
        .map(Number)
        .reduce((a, b) => a + b);
}