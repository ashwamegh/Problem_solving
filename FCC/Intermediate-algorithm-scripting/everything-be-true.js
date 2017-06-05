// https://www.freecodecamp.com/challenges/everything-be-true

function truthCheck(collection, pre) {
  // Is everyone being true?
let count = 0;
  collection.forEach( element => element.hasOwnProperty(pre) && element[pre] ?count++:count+0);
  return collection.length === count;
}

truthCheck([{"user": "Tinky-Winky", "sex": ""}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
