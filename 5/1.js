let array = [];
let size = 5;
let sum = 0;

for (let i = 0; i < size; i++) {
  let a = Math.round(Math.random() * 10) - 2;
  array.push(a);
}

console.table(array);

array.forEach((item) => {
  if (item % 2 == 0 && item > 0) {
    sum += item;
  }
});

console.log("\n", sum);
