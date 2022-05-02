const multiplicationTable = function(maxValue) {
  let output = '';
  for (let i = 1; i <= maxValue; i++) {
    for (let y = 1; y <= maxValue; y++) {
      output += i * y + " ";
    }
    output += '\n';
  }
  return output;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));