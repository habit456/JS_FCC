function sumFibs(num) {
  let newArr = [1,1], num1 = 1, num2 = 1, answer = 0;
  while (num1 < num) {
    num1 += num2;
    newArr.push(num1);
    num2 += num1;
    newArr.push(num2);
  }
  newArr = newArr.filter(a => a % 2 === 1);
  newArr = newArr.filter(a => a <= num);
  answer = newArr.reduce((a,b) => a+b);
  return answer;
}

console.log(sumFibs(1000));