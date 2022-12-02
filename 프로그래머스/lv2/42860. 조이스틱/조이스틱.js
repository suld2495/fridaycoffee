function solution(name) {
    let sum = 0;
    let position = 0;
    const notA = [...name]
        .map((alphabet, index) => ({ alphabet, index }))
        .filter(({ alphabet }) => alphabet !== 'A')
        
    
    const newNotA = [...notA].filter(({ index }) => index !== 0).map(({ index }) => (index));

    const sumList = [];
    for (let i = 0; i <= newNotA.length; i += 1) {
        const list = [...newNotA];
        const small = list.splice(newNotA.length - i, i);
        const right = list.length ? list[list.length - 1] : 0;
        const left = small[0] ? name.length - small[0] : 0;  
        sumList.push(right + left + Math.min(right, left));
    }
    sum = Math.min(...sumList);
    
    return notA.reduce((acc, alphabet) => acc += Math.min(
        alphabet.alphabet.charCodeAt() - 'A'.charCodeAt(),
        'Z'.charCodeAt() - alphabet.alphabet.charCodeAt() + 1
    ), sum);
}