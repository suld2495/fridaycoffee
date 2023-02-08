function solution(numbers) {
    let list = new Set();
    
    function dfs(number, numbers) {
        for (let i = 0; i < numbers.length; i += 1) {
            const str = number + numbers[i];
            list.add(Number.parseInt(str));
            dfs(str, numbers
                .split('')
                .filter((_, index) => index !== i)
                .join(''));
        }
    }
    
    dfs('', numbers);
    
    list = [...list]
        .filter((num) => num >= 2);
    let count = list.length;
    
    for (let i = 0; i < list.length; i += 1) {
        for (let j = 2; j <= Math.sqrt(list[i]); j += 1) {
            if (!(list[i] % j)) {
                count -= 1;
                break;
            }
        }
    }
    
    return count;
}