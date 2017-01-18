var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var numsqr = numbers.map(function (el) {
  return el * el
})
var num = numsqr.filter(function (number) {
  return (number % 2) === 0;
});
var sum = num.reduce(function(acc, curr) {
       return acc + curr;
}, 0);
console.log(sum);
console.log(num);
