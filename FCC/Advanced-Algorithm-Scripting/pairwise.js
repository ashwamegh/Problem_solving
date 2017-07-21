// https://www.freecodecamp.org/challenges/pairwise
function pairwise(arr, arg) {
  let count = 0;
  let usedIndices = [];

  for(let i=0; i<arr.length-1; i++){
    for(let j=i+1; j<arr.length; j++){
      if(arr[i]+arr[j] === arg && usedIndices.indexOf(i)===-1 && usedIndices.indexOf(j)===-1){
        count+=i+j;
        usedIndices.push(i);
        usedIndices.push(j);
      }
    }
  }
  console.log(count);
  return count;
}

pairwise([0, 0, 0, 0, 1, 1], 1);
