function solution(list) {
  const obj = list.reduce((acc, [_, category]) => {
      acc[category] = (acc[category] || 0) + 1;
      return acc;
  }, {});
  
  return Object.values(obj).reduce((acc, value) => {
    return acc * (value + 1);
  }, 1) - 1;
}