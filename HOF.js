// map, filter, reduce

let myArr = [1, 2, 3, 4, 5];
let newArr = myArr.map(function (x) {
  return x * x;
});

console.log(myArr);
console.log(newArr);

// filter

let filterdArr = myArr.filter(function (x) {
  return x % 2 === 0;
});

console.log(filterdArr);

// reduce

let sumArr = myArr.reduce(function (accumulator, x) {
  return accumulator + x;
}, 0);
console.log(sumArr);
