function solution(babbling) {
    return babbling
        .filter((value) => /^(aya|ye|woo|ma)+$/.test(value))
        .length;
}