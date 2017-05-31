
function sumFibs(num) {
  let fibonacciNumbers = [1,1], fibonacciNumbersSum=0;
  
  for ( i = 2; i <= num ;i++){fibonacciNumbers[i] = fibonacciNumbers[i-1] + fibonacciNumbers [i-2]; }
  fibonacciNumbers = fibonacciNumbers.filter((currentValue)=>(currentValue%2 !==0 && currentValue<=num));

  fibonacciNumbersSum = fibonacciNumbers.reduce((result, value)=>result+value);
  console.log(fibonacciNumbersSum);

  return fibonacciNumbersSum;
}

sumFibs(4);
