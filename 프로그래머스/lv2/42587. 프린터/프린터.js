function solution(list, i) {
    let count = 0;
    let check = true;

    list = list.map((num, index) => ({ num, index }));

    while (check) {
        const current = list.shift();
        const big = list.some(({ num }) => num > current.num);

        if (big) {
            list.push(current);
        } else {
            if (current.index === i) {
                check = false;
            }

            count += 1;
        }
    }

    return count;
}