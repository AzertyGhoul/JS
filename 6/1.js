let matrix = [];

for (let i = 0; i < 3; ++i) {
  let tmpArray = [];
  for (let j = 0; j < 3; ++j) {
    tmpArray.push(Math.round(Math.random() * 10));
  }
  matrix.push(tmpArray);
}
console.table(matrix);

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (matrix[i][j] % 5 == 0)
      console.log(`matrix[${i}][${j}] = ${matrix[i][j]}`);
  }
}
