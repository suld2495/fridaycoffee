function calculate(answers, list) {
    return answers.filter((v, i) => v === list[i % list.length]).length;
}

function solution(answers) {
    const 수포자1 = [1, 2, 3, 4, 5];
    const 수포자2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const 수포자3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    let max = 0;

    return [수포자1, 수포자2, 수포자3].reduce((acc, 수포자, i) => {
        const result = calculate(answers, 수포자);     

        if (max < result) {
            max = result;
            acc = [i + 1];
        } else if (max === result) {
            acc.push(i + 1);
        }

        return acc;
    }, []);
}