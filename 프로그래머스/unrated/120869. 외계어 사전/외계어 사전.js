function solution(spell, dic) {
  const str = spell.sort().join('');
  return dic
    .filter((item) => item.length === spell.length)
    .map((item) => item.split('').sort().join(''))
    .includes(str) ? 1 : 2;
}