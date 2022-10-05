function isItPrime(num) {
  if (num <= 1) {
    return false;
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  }
}

// const isPrime = isItPrime(2);
// // console.log(isPrime);

let array = [10, 18, 19, 29, 33, 35, 47, 66, 83];
let prime = [];
array.forEach(function (element) {
  const isPrime = isItPrime(element);
  if (isPrime) {
    prime.push(element);
  } else {
  }
});
console.log(prime);
