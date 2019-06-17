function addTogether(...nums) {
  nums = [...nums];
  if (nums.length === 2 && nums.every(a => typeof(a) === 'number') === true) {
    return nums[0] + nums[1];
  } else if (nums.every(a => typeof(a) === 'number') === false) {
    return undefined;
  } else if (nums.length === 1) {
    return function (num2) {
      if (typeof(num2) === 'number') {
        return nums[0] + num2;
      } else {
        return undefined;
      }
    }
  }
}

console.log(addTogether(2)('9'));