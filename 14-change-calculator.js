const calculateChange = function(total, cash) {

  const giveChange = new Object();
  giveChange.twentyDollar = 0;
  giveChange.tenDollar = 0;
  giveChange.fiveDollar = 0;
  giveChange.twoDollar = 0;
  giveChange.oneDollar = 0;
  giveChange.quarter = 0;
  giveChange.dime = 0;
  giveChange.nickel = 0;
  giveChange.penny = 0;

  let changeAmount = cash - total; 

  while (changeAmount > 0) {
    if (changeAmount >= 2000) {
      giveChange.twentyDollar ++;
      changeAmount -= 2000;
    } else if (changeAmount >= 1000) {
      giveChange.tenDollar ++;
      changeAmount -= 1000;
    } else if (changeAmount >= 500) {
      giveChange.fiveDollar ++;
      changeAmount -= 500;
    } else if (changeAmount >= 200) {
      giveChange.twoDollar ++;
      changeAmount -= 200;
    } else if (changeAmount >= 100) {
      giveChange.oneDollar ++;
      changeAmount -= 100;
    } else if (changeAmount >= 25) {
      giveChange.quarter ++;
      changeAmount -= 25;
    } else if (changeAmount >= 10) {
      giveChange.dime ++;
      changeAmount -= 10;
    } else if (changeAmount >= 5) {
      giveChange.nickel ++;
      changeAmount -= 5;
    } else if (changeAmount >= 1) {
      giveChange.penny ++;
      changeAmount -= 1;
    }
  }

  Object.keys(giveChange).forEach(function(key) {
    if (giveChange[key] === 0) {
      delete giveChange[key];
    }
  });

  return giveChange;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));