let matrix = [];

for (let i = 0; i < 3; ++i) {
  let tmpArray = [];
  for (let j = 0; j < 3; ++j) {
    tmpArray.push(i + j + 2);
  }
  matrix.push(tmpArray);
}
console.table(matrix);
