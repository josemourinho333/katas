const sumLargestNumbers = function(data) {
  let descendingOrder = [];
  let number = 0;
  for (let i = 0; i < data.length; i++) {
    if (number < data[i]) {
      number = data[i];
    }
  }
  descendingOrder.push(number);
  console.log(descendingOrder);

  // let maxIndex = 0;
  // let secondMaxindex = 0;
  // for (let i = 0; i < data.length; i++) {
  //   if (data[i] > maxIndex) {
  //     maxIndex = data[i];
  //   }
  // }



}

console.log(sumLargestNumbers([1, 2, 3]));