/*
  1) Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, OR if you cannot return the exact change.
  2) Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
  3) Return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
*/

let currency = [0.01, 0.05, 0.10, 0.25, 1, 5, 10, 20, 100];

//checks cash register total
function checkTotal(arr) {
  let total = 0;
  for (let i=0; i<arr.length; i++) {
    total += arr[i][1];
  }
  return total.toFixed(2);
}

//gives the indexStart for returnChange
function greatestVal(changeDue) {
  for (let i=0; i<currency.length; i++) {
    if (changeDue - currency[i] === 0) {
      return i;
    } else if (changeDue - currency[i] < 0) {
      return i - 1;
    }
  }
}

//where the magic happens
function returnChange(cid,changeDue,indexStart) {
  let change = [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];
  for (let i=indexStart; changeDue>0 && i>=0; i--) {
    changeDue = changeDue.toFixed(2)
    if (Math.floor(changeDue/currency[i])*currency[i] >= cid[i][1]) {
      change[i][1] += cid[i][1];
      changeDue -= cid[i][1];
    } else if (Math.floor(changeDue/currency[i])*currency[i] < cid[i][1]) {
      change[i][1] += Math.floor(changeDue/currency[i])*currency[i];
      changeDue -= Math.floor(changeDue/currency[i])*currency[i];
    }
  }
  if (changeDue > 0) {
    return false;
  } else {
    return change.filter(a => a[1] !== 0).reverse();
  }
}

function checkCashRegister(price, cash, cid) {
  let changeDue = cash - price;
  let change = [];
  let indexStart = greatestVal(changeDue);
  if (checkTotal(cid) == changeDue) {
    return {status: "CLOSED", change: cid};
  } else if (checkTotal(cid) <= changeDue || returnChange(cid,changeDue,indexStart) === false) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  } else {
    return {status: "OPEN", change: returnChange(cid,changeDue,indexStart)};
  }
}
