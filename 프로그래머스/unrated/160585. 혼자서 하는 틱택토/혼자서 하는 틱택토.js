function calcWinner(list, value) {
    const winner = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    
    for (let i = 0; i < winner.length; i += 1) {
        const [a,b,c] = winner[i];
        
        if (list[a] === value && list[a] === list[b] && list[a] === list[c] && list[b] === list[c]) {
            return true;
        }
    }
    
    return false;
}

function solution(board) {
    const map = { 'O': 0, 'X': 1, '.': 2};
    const list = board
        .join('')
        .split('')
        .map((v) => map[v]);
    const xLength = list.filter(v => v === 1).length;
    const oLength = list.filter(v => !v).length;
    
    if (calcWinner(list, 0) && (oLength - xLength) !== 1) {
        return 0;
    }
    
    if (calcWinner(list, 1) && (oLength - xLength) !== 0) {
        return 0;
    }
    
    if (xLength > oLength || (oLength - xLength) > 1) {
        return 0;
    }    

    return 1;
}