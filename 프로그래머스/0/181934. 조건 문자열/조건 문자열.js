function solution(ineq, eq, n, m) {
    const answer = [ineq, eq].some((str) => {
        switch (str) {
            case "<":
                return n < m;
            case ">":
                return n > m;
            case "=":
                return n === m;
        }
    });
    
    
    
    return Number(answer);
}