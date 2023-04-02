function solution(people, limit) {
    people.sort((a, b) => b - a);
    let count = 0;
    let sum = 0;
    let reverse = false;
    let first = 0;
    let last = people.length - 1;
    
    while (first <= last) {
        const w = people[reverse ? last : first];
        
        if (sum + w > limit) {
            if (reverse) {
                sum = 0;
                count += 1;    
            }
            
            reverse = !reverse;
            continue;
        }
        
        sum += w;
        
        if (reverse) {
            last -= 1;    
        } else {
            first += 1;
        }
        
    }
    
    return count += 1;
}