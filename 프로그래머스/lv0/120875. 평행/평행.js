
function solution(dots) {
  let check = 0;
  for (let i = 1; i < dots.length; i += 1) {
    const newList = [...dots].sort((([aX], [bX]) => aX - bX));
    const firstLine = [...newList.splice(0, 1), ...newList.splice(i - 1, 1)];

    if ((newList[0][0] - newList[1][0]) / (newList[0][1] - newList[1][1])
      === (firstLine[0][0] - firstLine[1][0]) / (firstLine[0][1] - firstLine[1][1])) {
      check = 1;
    }
  }

  return check;
}
