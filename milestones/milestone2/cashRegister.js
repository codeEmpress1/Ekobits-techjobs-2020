const checkCashRegister = (price, cash, cid) => {
  const moneyStore = {
    "PENNY": .01,
    "NICKEL": .05,
    "DIME": .10,
    "QUARTER": .25,
    "ONE": 1.00,
    "FIVE": 5.00,
    "TEN": 10.00,
    "TWENTY": 20.00,
    "ONE HUNDRED": 100.00
  }

  let totalCID = 0;
  for (let element of cid) {
    totalCID += element[1];
  }

  totalCID = totalCID.toFixed(2);

  let change = cash - price;
  const allChange = [];
  if (change > totalCID) {
    return { status: "INSUFFICIENT_FUNDS", change: allChange };
  } else if (change.toFixed(2) === totalCID) {
    return { status: "CLOSED", change: cid };
  } else {
    cid = cid.reverse();
    for (let elem of cid) {
      let temp = [elem[0], 0];
      while (change >= moneyStore[elem[0]] && elem[1] > 0) {
        temp[1] += moneyStore[elem[0]];
        elem[1] -= moneyStore[elem[0]];
        change -= moneyStore[elem[0]];
        change = change.toFixed(2);
      }
      if (temp[1] > 0) {
        allChange.push(temp);
      }
    }
  }
  if (change > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
  return { status: "OPEN", change: allChange};
}