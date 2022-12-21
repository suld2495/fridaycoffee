function solution(dot) {
    const [num1, num2] = dot;
    
    return num1 > 0
        ? num2 > 0
            ? 1
            : 4
        : num2> 0
            ? 2
            : 3
}