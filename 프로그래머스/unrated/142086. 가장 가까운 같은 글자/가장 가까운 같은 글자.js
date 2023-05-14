function solution(s) {
    const list = [];
    
    for (let i = 0; i < s.length; i += 1) {
        let index = s.substr(0, i).lastIndexOf(s[i]);
        
        if (index > - 1) {
            index = i - index;
        }
        
        list.push(index);
    }
    
    return list;
}