let array = [];
let size = 5;
let indexMin = 0;
let indexMax = 0;

for (let i = 0; i < size; i++) {
  let a = Math.round(Math.random() * 10) - 2;
  array.push(a);
}

let min = array[0];
let max = array[0];

array.forEach((item, index) => {
  if (item < min) {
    min = item;
    indexMin = index;
  }
  if (item > max) {
    max = item;
    indexMax = index;
  }
});

console.log("Before");
console.table(array);

array.forEach((item, index) => {
  index == indexMax && (array[index] = min);
  index == indexMin && (array[index] = max);
});

console.log("After");
console.table(array);
