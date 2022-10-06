function sort(numbers) {
  var odd = [];
  var even = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      even.push(numbers[i]);
    } else {
      odd.push(numbers[i]);
    }
  }
  const returnObject = {
    odd,
    even,
  };
  return rturnObject;
}
console.log(sort([1, 2, 3, 4, 5, 6]));

//-----------------------------------------
