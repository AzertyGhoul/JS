let array = [];
let size = 5;

for (let i = 0; i < size; i++) {
  let a = Math.round(Math.random() * 10) - 2;
  array.push(a);
}

let max = array[0];

array.forEach((item, index) => {
  if (item > max && index % 2 == 0) {
    max = item;
  }
});

console.table(array);
console.log("\n", max);
