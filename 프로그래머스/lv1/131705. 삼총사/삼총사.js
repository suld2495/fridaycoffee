function solution(number) {
    let set = new Set();
    number = number.map((v, i) => [v, i]);
    
    function dfs(number, sum, count, list) {
        if (count === 3) {
            if (sum === 0) {
                set.add(list.sort((a, b) => a - b).join(''));
            }
            return;
        }
        
        for (let i = 0; i < number.length; i += 1) {
            
            dfs(
                number.filter((_, index) => i !== index), 
                sum + number[i][0], 
                count + 1, 
                [...list, number[i][0] + number[i][1]]
            );
        }
    }
    
    dfs(number, 0, 0, []);
    
    return set.size;
}