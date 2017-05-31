
function sumPrimes(num) {
  let primeNumbers = [], primeNumbersSum=0, allNumbers = [];
  
  for ( let i = 2; i <= num; i++){ allNumbers.push(i); }
  primeNumbers = allNumbers.filter((value) => {
      let count = 0;
      for(let j=1 ; j <=value; j++){count = value%j===0? count+1 : count+0;}
      return count<=2;
  });
  primeNumbersSum = primeNumbers.reduce((acc,current) => acc+current);
  return primeNumbersSum;
}

sumPrimes(10);
