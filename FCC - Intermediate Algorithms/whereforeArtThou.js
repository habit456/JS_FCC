function objCompare(objArgs,objNames) {
  let aProps = Object.getOwnPropertyNames(objArgs);
  let nProps = Object.getOwnPropertyNames(objNames);
  if (nProps.length < aProps.length) {
    return false;
  } else {
    for (let i=0; i<aProps.length; i++) {
      if (objArgs[aProps[i]] !== objNames[aProps[i]]) {
        return false;
      }
    }
  }
  return true;
}

function whatIsInAName(collection, source) {
  var arr = [];
  for (let i=0; i<collection.length; i++) {
    if (objCompare(source,collection[i]) === true) {
      arr.push(collection[i]);
    }
  }
  return arr;
}
