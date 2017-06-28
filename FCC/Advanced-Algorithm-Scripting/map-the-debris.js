// https://www.freecodecamp.com/challenges/map-the-debris

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  arr = arr.map((elem) => {
    let alt = elem.avgAlt + earthRadius;
    let orbitalPeriod = Math.round(2 * Math.PI * Math.pow((Math.pow(alt,3)/GM),0.5));
    return { name: elem.name, orbitalPeriod: orbitalPeriod};
  });
  console.log(arr);
  return arr;
}

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);
