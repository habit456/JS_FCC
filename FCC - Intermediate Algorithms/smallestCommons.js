function smallestCommons(arr) {
  arr.sort((a,b) => a-b);
  let myArr = [], bigPlus = 0, answer = 0;
  for (let i = arr[0]; i <= arr[1]; i++) {
    myArr.push(i);
  }
  let big = Math.max(...myArr);
  while (answer === 0) {
    bigPlus += big;
    if (myArr.every(num => bigPlus % num === 0)) {
      answer = bigPlus;
    }
  }
  return answer;
}


console.log(smallestCommons([5,1]));