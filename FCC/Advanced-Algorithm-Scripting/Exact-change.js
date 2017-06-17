function checkCashRegister(price, cash, cid) {
  let currencies = [
    [ 'ONE HUNDRED', 100 ],
  [ 'TWENTY', 20 ],
  [ 'TEN', 10 ],
  [ 'FIVE', 5 ],
  [ 'ONE', 1 ],
  [ 'QUARTER', 0.25 ],
  [ 'DIME', 0.1 ],
  [ 'NICKEL', 0.05 ],
  [ 'PENNY', 0.01 ] 
];
  
  let change = cash - price,
  totalcid = cid.map((val) => val[1]).reduce((accm, val) => accm+val);

  if( totalcid < change){
      return "Insufficient Funds";
  }
  else if( totalcid === change){
      return "Closed";
  }

  cid = cid.reverse();

  let exchangeValue = currencies.reduce((accum, next, index) => {

      if ( change >= next[1]){
          let currentValue = 0.0;

          while( change >= next[1] && cid[index][1] >= next[1]){
              currentValue += next[1];
              change -= next[1];
              change = Math.round(change * 100)/100;

              cid[index][1] -= next[1];
          }

          accum.push([next[0], currentValue]);
          return accum;
      }
      else{
          return accum;
      }
  }, []);
  console.log(change);
  return exchangeValue.length>0 && change === 0? exchangeValue: "Insufficient Value";
}


checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
