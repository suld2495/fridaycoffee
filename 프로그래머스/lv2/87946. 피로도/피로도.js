function solution(k, dungeons) {
    const list = [];
    const getList = (list, parent) => {
    for (let i = 0; i < dungeons.length; i += 1) {
        if (parent.includes(dungeons[i])) continue;

        const newList = [...parent, dungeons[i]];
        list.push(newList);
        getList(list, newList);

        if (list.includes(parent)) {
            const index = list.indexOf(parent);
            list.splice(index, 1);
        }
    }
  };

  getList(list, []);

  return Math.max(...list.map((dungeons) => {
    let fatigue = k;
    return dungeons.reduce((acc, [requirement, consumption]) => {
        if (fatigue >= requirement) {
            fatigue -= consumption;
            acc += 1;
        }

        return acc;
    }, 0);
  }));
}