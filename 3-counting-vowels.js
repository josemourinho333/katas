const numberOfVowels = function(data) {
  let counter = 0;
  for (let vowels of data) {
    if (vowels === 'a' || vowels === 'e' || vowels === 'i' || vowels === 'o' || vowels === 'u') {
      counter += 1;
    }
  }
  return counter;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));