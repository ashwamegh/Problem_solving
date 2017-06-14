
function checkCashRegister(price, cashPay, cid) {
  let change = cashPay - price, cash_in_drawer = 0;

  let cash_in_drawer_arr = cid.map((arr) => cash_in_drawer + arr[1]);
  cash_in_drawer = cash_in_drawer_arr.reduce((accum, num) => accum+num);

  if(cash_in_drawer > change){
      console.log(change.toFixed(2));
  }
  else if(cash_in_drawer === change){
    console.log("Closed");
    return "Closed";
  }
  else if(cash_in_drawer < change || cash_in_drawer_arr.indexOf(change)===-1){
      console.log("Insufficient Funds");
      return "Insufficient Funds";
  }

  return change;
}

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
