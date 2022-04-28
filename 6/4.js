let matrix = [];

for (let i = 0; i < 3; ++i) {
  let tmpArray = [];
  for (let j = 0; j < 3; ++j) {
    tmpArray.push(Math.round(Math.random() * 10));
  }
  matrix.push(tmpArray);
}
console.table(matrix);

let min = matrix[0][0];
let max = matrix[0][0];
let indexMax = [];
let indexMin = [];

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (matrix[i][j] > max) {
      max = matrix[i][j];
      indexMax = [i, j];
    }
    if (matrix[i][j] < min) {
      min = matrix[i][j];
      indexMin = [i, j];
    }
  }
}

matrix[indexMax[0]][indexMax[1]] = min;
matrix[indexMin[0]][indexMin[1]] = max;
console.table(matrix);
