function calc(value) {
    let result = "";
    
    while (value > 1) {
        result = value % 2 + result;
        value = Math.floor(value / 2);
    }
    
    return value + result;
}

function solution(s) {
    let zero = 0;
    let count = 0;
    
    while (s !== "1") {
        const temp = s.length;
        s = s.replaceAll("0", "");         
        zero += temp - s.length;
        s = calc(s.length);
        count += 1;
    }
    
    return [count,zero];
}