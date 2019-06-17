function steamrollArray(arr) {
  if (arr.every(a => Array.isArray(a) === false) === true) {
    return arr;
  } else {
    let newArr = [];
    for (let i of arr) {
      if (Array.isArray(i) === true) {
        i.map(a => newArr.push(a));
      } else {
        newArr.push(i);
      }
    }
    return steamrollArray(newArr);
  }
}

console.log(steamrollArray([1, {}, [3, [[4]]]]));