const squareCode = function(message) {
  let text = message.split(' ');
  text = text.join('');
  let columns = Math.ceil(Math.sqrt(text.length));

  let result = '';

  for (let i = 0; i < columns; i++) {
    for (let j = i; j < text.length; j += columns) {
      result += text[j];
    }
    result += ' ';
  }
  return result;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));