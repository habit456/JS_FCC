function uniteUnique(...arr) {
  let myArr = [...arr];
  let newArr = [];
  let finalArr = [];
  for (let i=0; i<myArr.length; i++) {
    myArr[i].map(a => newArr.push(a));
  }
  for (let i=0; i<newArr.length; i++) {
    if (finalArr.indexOf(newArr[i]) === -1) {
      finalArr.push(newArr[i]);
    }
  }
  return finalArr;
}


uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);