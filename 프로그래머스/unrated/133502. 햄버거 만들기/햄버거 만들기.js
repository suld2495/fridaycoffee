function solution(ingredient) {
    let count = 0;
    
    for (let i = 3; i < ingredient.length && ingredient.length > 3; i += 1) {
        if (ingredient[i] !== 1 || i < 3) {
            continue;
        }
        
        const str = ingredient.slice(i - 3, i + 1).join('');
        
        if (str === '1231') {
            ingredient.splice(i - 3, 4)
            i -= 3;
            count += 1;       
        }
    }
    
    return count;
}