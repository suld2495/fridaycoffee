function solution(n)
{
    return ('' + n).split('').reduce((acc, num) => +acc + +num, 0); 
}