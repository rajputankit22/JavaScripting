var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = numbers.map(function (el) {
  return el * el
}).filter(function (number) {
  return (number % 2) === 0;
}).reduce(function(acc, curr) {
       return acc + curr;
}, 0);
console.log(sum);
// console.log(num);
