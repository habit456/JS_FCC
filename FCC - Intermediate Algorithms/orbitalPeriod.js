function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  let avgAlt = 0;
  let t = Math.round(2 * Math.PI * Math.sqrt(((earthRadius + avgAlt)**3)/GM));
  for (let i of arr) {
    avgAlt = i.avgAlt;
    t = Math.round(2 * Math.PI * Math.sqrt(((earthRadius + avgAlt)**3)/GM));
    delete i.avgAlt;
    i.orbitalPeriod = t;
  }
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);