function solution(s, n) {
    function getNumber(a) {
        return (a <= 'Z'.charCodeAt() 
            ? ['A', 'Z'] 
            : ['a', 'z'])
            .map(a => a.charCodeAt())
            .map((a, i) => i === 0 ? a : a + 1);
    }
        
    return s.split('')
        .map(a => a === ' ' ? ' ' : a.charCodeAt())
        .map(v => {
            if (v === ' ') {
                return ' ';
            }
        
            const [a, z] = getNumber(v);
            return String.fromCharCode((v + n) % z + a * parseInt((v + n) / z));
        })
        .join('');
}