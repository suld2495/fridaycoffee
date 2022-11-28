function solution(sides) {
    const [first, seconds, third] = sides.sort((a, b) => a - b);
    return first + seconds > third ? 1 : 2;
}