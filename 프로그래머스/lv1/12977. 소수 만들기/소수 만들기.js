function cal(num) {
    for (let i = 2; i <= Math.sqrt(num); i += 1) {
        if (!(num % i)) return false;
    }
    
    return true;
}

function solution(nums) {
    let sum = 0;
    
    for (let i = 0; i < nums.length; i += 1) {
        for (let j = i + 1; j < nums.length; j += 1) {
            for (let k = j + 1; k < nums.length; k += 1) {
                if (cal(nums[i] + nums[j] + nums[k])) {
                    sum += 1;
                }
            }
        }
    }
    
    return sum;
}