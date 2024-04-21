function solution(s){
    s = s.toLowerCase();
    
    if (s.replaceAll('p', '').length === s.replaceAll('y', '').length) {
        return true;
    }
    
    return false
}