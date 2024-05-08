function solution(t, p) {
    let start = 0;
    let end = p.length;
    let count = 0;
    p = Number(p);
    
    while (end <= t.length) {
        const number = t.slice(start++, end++);
        if (Number(number) <= p) count += 1;
    }
    
    return count;
}