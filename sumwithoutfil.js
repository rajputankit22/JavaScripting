var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = numbers.map(function (el) {
  return el * el
  }).reduce(function(acc, curr) {
    if ((curr % 2) === 0)
         return acc + curr;
    else
    return acc
  }, 0);
  console.log(sum);
  // console.log(num);
