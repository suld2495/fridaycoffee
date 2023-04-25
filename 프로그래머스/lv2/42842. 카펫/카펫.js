function solution(brown, yellow) {
    for (let i = 1; i <= Math.sqrt(yellow); i += 1) {
        if (yellow % i) continue;
        
        const column = yellow / i + 2;
        const row = i + 2;
        const total = column * 2 + row * 2 - 4
        if (total === brown) {
            return [column, row];
        }
    }
}