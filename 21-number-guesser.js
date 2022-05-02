let prompt = require("prompt-sync")();

const guessNumber = () => {

  let number = Math.floor(Math.random()* 3);
  let guesses = [];
  let guessedRight = false;

  console.log(`Secret number is ${number}.`);
  console.log('Guess a number:');



  while (guessedRight === false) {

    const guess = Number(prompt('> '));

    if (guesses.includes(guess)) {
      console.log('Already guessed. Try again.');
      guesses.push(guess);
    }

    if (isNaN(guess) === true) {
      console.log('Not a number. Try again.');
    }

    if (guess > number && !guesses.includes(guess)) {
      console.log('Guessed too high. Try again.');
      guesses.push(guess);
    }

    if (guess < number && !guesses.includes(guess)) {
      console.log('Guessed too low. Try again.');
      guesses.push(guess);
    }

    if (guess === number) {
      guesses.push(guess);
      console.log(`Correct. Took you ${guesses.length} attempts.`);
      guessedRight = true;
    }
  }

}

guessNumber();
