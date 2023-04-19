function solution(s) {
  const list = s
    .replace(/^{|}$/g, '')
    .split('},{')
    .sort((a, b) => a.split(',').length - b.split(',').length);

  return list.reduce((acc, cur) => {
    const v = cur.replace(/^{|}$/g, '')
      .split(',')
      .map(Number)
      .find((v) => !acc.includes(v));
    acc.push(v);

    return acc;
  }, []);
}