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
              for (let i = info.length - 1; i >= 0; i -= 1) {
                if (maxList[i] < list[i]) {
                  maxList = list;
                  break;
                }
              }
            }
          
            continue;
        }
        
        for (let i = index; i < info.length; i += 1) {
            if (info[i] < n - count) {
                if (i === info.length - 1) {
                  const newList = [...list];
                  newList[i] = n - count;
                  queue.push([newList, n, i + 1]);
                } else {
                  queue.push([list, count, i + 1]);
                  queue.push([list.map((v, index) => index === i ? info[i] + 1 : v), count + info[i] + 1, i + 1]);
                }
            } else if (i === info.length - 1) {
              const newList = [...list];
              newList[i] = n - count;
              queue.push([newList, n, i + 1]);
            }
        }
    }

    if (max === 0) {
      return [-1];
    }

    return maxList;
}