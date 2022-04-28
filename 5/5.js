let array = [];
let size = 5;

for (let i = 0; i < size; i++) {
  let a = Math.round(Math.random() * 10) - 2;
  array.push(a);
}

console.table(array);

maxCounter = 1;
num = array[0];

for (let i = 0; i < size; i++) {
  let counter = 1;
  for (let j = i + 1; j < size; j++) {
    if (array[i] == array[j]) {
      counter += 1;
    }
  }
  if (counter > maxCounter) {
    maxCounter = counter;
    num = array[i];
  }
}

if (maxCounter == 1) {
  console.log("All elements unique");
} else {
  console.log(" Amount of numbers", maxCounter, "\n", "Number", num);
}
