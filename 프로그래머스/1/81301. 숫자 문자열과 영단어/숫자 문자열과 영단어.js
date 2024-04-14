function solution(s) {
    const alphabets = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    alphabets.forEach((alphabet, i) => {
        s = s.replaceAll(alphabet, i);
    });
    
    return Number(s);
}