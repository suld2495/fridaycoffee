function solution(arr) {
    arr.sort((a, b) => b - a);
    let check = true;
    let num = arr[0];
    
    while (check) {
        if (arr.every((value) => !(num % value))) {
            return num;
        }
        
        num += 1;
    }
}