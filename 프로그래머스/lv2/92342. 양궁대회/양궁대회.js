function solution(n, info) {
    const queue = [[Array(11).fill(0), 0, 0]];
    let max = 0;
    let maxList = [-1];
    
    while (queue.length) {
        const [list, count, index] = queue.shift();
        
        if (count === n) {
            const score = info.reduce((acc, v, i) => {
                if (v > list[i]) {
                    acc -= 10 - i;
                } else if (v < list[i]) {
                    acc += 10 - i;
                }

                return acc;
            }, 0); 

            if (score > max) {
              max = score;
              maxList = list;
            } else if (score === max) {
              const isMax = [...list]
                .sort((a, b) => b - a)
                .some((v, i) => maxList[i] < v);
                
              if (isMax) {
                maxList = list;
              }  
            }
          
            continue;
        }
        
        if (index === 10) {
          const newList = [...list];
          newList[index] = n - count;
          queue.push([newList, n, index + 1]);
        } else {
          queue.push([list, count, index + 1]);
        
          if (info[index] < n - count) {
            const newList = [...list];
            newList[index] = info[index] + 1;
            queue.push([newList, count + info[index] + 1, index + 1]); 
          }  
        }
    }

    if (max === 0) {
      return [-1];
    }

    return maxList;
}