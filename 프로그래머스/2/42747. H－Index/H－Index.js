function solution(list) {
    list.sort((a, b) => b - a);
    
    for (let i = list[0]; i >= 0; i -= 1) {
        const h = list.findIndex((h) => h < i);
        
        if (h >= i) {
            return i;
        }
        
        if (list.at(-1) && h === -1) {
            return list.length;
        }
    }
    
    return 0;
};