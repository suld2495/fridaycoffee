function solution(want, number, discount) {
  const map = want.reduce((acc, value, i) => {
      acc[value] = i;
      return acc;
  }, {});
  
  let list = Array(want.length).fill(0);
  let count = 0;
  
  for (let i = 0; i < discount.length; i += 1) {
    
      if (typeof map[discount[i]] === 'number') {
        list[map[discount[i]]] += 1;
      }
      
      if (i > 9 && typeof map[discount[i - 10]] === 'number') {
          list[map[discount[i - 10]]] -= 1;
          
      }
      
      if (list.every((value, i) => value === number[i])) {
          count += 1;    
      }
  }
  
  return count;
}