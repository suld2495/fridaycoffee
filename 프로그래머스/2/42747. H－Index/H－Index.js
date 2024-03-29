function solution(list) {
    list.sort((a, b) => b - a);
    
    if (list.at(-1) >= list.length) {
        return list.length;
    }
    
    for (let i = list[0]; i >= 0; i -= 1) {
        const h = list.findIndex((h) => h < i);
        
        if (h >= i) {
            return i;
        }
    }
    
    return 0;
};