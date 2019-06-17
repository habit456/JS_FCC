function uniteUnique(...arr) {
  let newArr = [];
  for (let a of arr) {
    a.map(n => {
      if (!newArr.includes(n)) {
        newArr.push(n);
      }
    });
  }
  return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);