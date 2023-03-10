// 해시를 사용한다.
function solution(survey, choices) {
    const score = [0, 3, 2, 1, 0, 1, 2, 3]
    const result = {};
    
    survey.forEach((v, i) => {
        const [a, b] = v;
        const choice = choices[i];
        
        if (choice > 4) {
            result[b] = (result[b] || 0) + score[choice]; 
        } else if (choice < 4) {
            result[a] = (result[a] || 0) + score[choice];
        }
    });

    return ['RT', 'CF', 'JM', 'AN'].map((v) => {
        const [a, b] = v;
        const aScore = result[a] || 0;
        const bScore = result[b] || 0;
        
        if (aScore > bScore || aScore === bScore) {
            return a;
        } else {
            return b;
        }
    }).join('');
}