let array = [];
let size = 5;
let indexMin = 0;

for (let i = 0; i < size; i++) {
  let a = Math.round(Math.random() * 10) - 2;
  array.push(a);
}

let min = Math.abs(array[0]);

array.forEach((item, index) => {
  if (Math.abs(item) < min) {
    min = Math.abs(item);
    indexMin = index;
  }
});

console.table(array);
console.log("\n", indexMin);
