function sumPrimes(num) {
  let numArr = [];
  for (let i = 1; i <= num; i++) {
    numArr.push(i);
  }
  numArr = numArr.filter(function (a) {
    let counter = 0
    for (let i = 0; i < numArr.length; i++) {
      if (a % numArr[i] === 0) {
        counter += 1;
      }
    }
    return counter === 2;
  })
  return numArr.reduce((a,b) => a+b);
}

console.log(sumPrimes(10));