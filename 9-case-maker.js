const camelCase = function(input) {
  let newText = '';
  newText += input[0].toLowerCase();
  for (let i = 1; i < input.length; i++) {
    if (input[i] === ' ') {
      newText += input[i +1].toUpperCase();
      i++;
    } else {
      newText += input[i];
    }
  }
  return newText;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));