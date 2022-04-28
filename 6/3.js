let matrix = [];
let average = 0;

for (let i = 0; i < 3; ++i) {
  let tmpArray = [];
  for (let j = 0; j < 3; ++j) {
    tmpArray.push(Math.round(Math.random() * 10));
  }
  matrix.push(tmpArray);
}
console.table(matrix);

for (let i = 0; i < 3; i++) {
  let sum = 0;
  for (let j = 0; j < 3; j++) {
    sum += matrix[i][j];
  }
  console.log(sum / 3);
}
