let phoneRegX = {
  0 : function(str) {
    let regX = /^1?\s?\d{10}$/;
    return regX.test(str);
  },
  1 : function(str) {
    let regX = /^1?\s?\d{3}\-\d{3}\-\d{4}$/;
    return regX.test(str);
  },
  2 : function(str) {
    let regX = /^1?\s?\d{3}\s\d{3}\s\d{4}$/;
    return regX.test(str);
  },
  3 : function(str) {
    let regX = /^1?\s?\(\d{3}\)\s?\d{3}\-\d{4}$/;
    return regX.test(str);
  }
};

function telephoneCheck(str) {
  for (let prop in phoneRegX) {
    if (phoneRegX[prop](str) === true) {
      return true;
    }
  }
  return false;
}
