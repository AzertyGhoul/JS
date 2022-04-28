const N = 5;

const matrix = [];

for (let i = 0; i < N; i++) {
  matrix[i] = [];
  matrix[i][0] = 1;
  matrix[i][i] = 1;

  for (let j = 1; j < i; j++) {
    matrix[i][j] = matrix[i - 1][j - 1] + matrix[i - 1][j];
  }
}

console.table(matrix);
