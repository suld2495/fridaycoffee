function solution(arr)
{
    return arr.filter((v, i) => i === 0 ? true : arr[i - 1] !== v);
}