const repeatNumbers = function(data) {
  let output = '';

  for (let i = 0; i < data.length; i++) {
    let numberOne = data[i][0];
    let repeater = data[i][1];
    for (let y = 0; y < repeater; y++) {
      output += numberOne;
    }
  }

  return output;

}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));