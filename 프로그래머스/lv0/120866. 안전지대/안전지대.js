function solution(board) {
  const empty = new Array(board[0].length * board[0].length).fill(0);

  board.forEach((row, rowIndex) => {
    row.forEach((value, colIndex) => {
      if (!value) return;

      const now = rowIndex * board[0].length + colIndex;
      check(now, rowIndex);
      check(now - 1, rowIndex);
      check(now + 1, rowIndex);

      const prevLow = (rowIndex - 1) * board[0].length + colIndex;
      check(prevLow, rowIndex - 1);
      check(prevLow - 1, rowIndex - 1);
      check(prevLow + 1, rowIndex - 1);

      const nextLow = (rowIndex + 1) * board[0].length + colIndex;
      check(nextLow, rowIndex + 1);
      check(nextLow - 1, rowIndex + 1);
      check(nextLow + 1, rowIndex + 1);
    });
  });

  function check(index, row) {
    if (typeof empty[index] !== 'number'
      || row !== Math.floor(index / board[0].length)) return;

    empty[index] = 1;
  }

  return empty.reduce((acc, value) => {
    return acc + Number(!value)
  }, 0);
}