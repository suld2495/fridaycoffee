function solution(numbers) {
  if (numbers.every(n => !n)) {
    return "0";
  }  
    
  numbers.sort((a, b) => {
    const A = Number(String(b) + String(a));
    const B = Number(String(a) + String(b));
    
    if (A > B) {
        return 1;
    } else if (B > A) {
        return -1;
    }
      
    return 0;
  });
    
  return numbers.join('');
}