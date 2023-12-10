function solution(t, p) {
    const { length } = p;
    let start = 0;
    let end = length;
    let count = 0;
    
    while (end <= t.length) {
        const number = t.slice(start++, end++);
        if (Number(number) <= Number(p)) count += 1;
    }
    
    return count;
}