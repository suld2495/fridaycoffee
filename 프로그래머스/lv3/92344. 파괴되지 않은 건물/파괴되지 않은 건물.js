function solution(list, type) {
    const skillType = [0, -1, 1];
    const sums = Array.from({ length: list.length + 1 },
        () => Array(list[0].length + 1).fill(0));
    
    type.forEach(([type, r1, c1, r2, c2, degree]) => {
        const skill = skillType[type] * degree;
        sums[r1 + 1][c1 + 1] += skill;
        
        [
            [r1 + 1, c2 + 2, -1],
            [r2 + 2, c1 + 1, -1],
            [r2 + 2, c2 + 2, 1]
        ].forEach(([r, c, type]) => {
            if (typeof sums[r]?.[c] === 'number') {
                sums[r][c] = sums[r][c] + skill * type;
            }
        });
    });
        
    for (let i = 1; i < sums.length; i += 1) {
        for (let j = 1; j < sums[0].length; j += 1) {
            sums[i][j] += sums[i][j - 1] + sums[i - 1][j] - sums[i - 1][j - 1];
        }
    }
    
    let sum = 0;
    
    for (let i = 1; i < sums.length; i += 1) {
        for (let j = 1; j < sums[0].length; j += 1) {
            sums[i][j] += list[i - 1][j - 1];
            
            if (sums[i][j] > 0) {
                sum += 1;
            }
        }
    }
    
    return sum;
}