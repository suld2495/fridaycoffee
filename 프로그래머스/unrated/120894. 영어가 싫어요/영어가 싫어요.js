function solution(numbers) {
    return Number(["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"].reduce((acc, number, i) => {
        const regex = new RegExp(number, 'g');
        acc = acc.replace(regex, i);
        return acc;
    }, numbers));
}