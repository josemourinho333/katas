// find out a way to get second loop going instead of copying it with new style
const makeCase = function(input, caseStyle) {
  //Declaring Variables
  let style = [];

  //checks the passed along caseStyles values and turns them into an array if they are string.
  if (typeof caseStyle === 'object') {
    let empty = [];
    style = empty.concat(caseStyle);
  } else if (typeof caseStyle !== 'object') {
    style.push(caseStyle);
  }

  if (Array.isArray(style) === true) {

    let newText = '';

    if (style.includes('camel')) {
      newText += input[0].toLowerCase();
      for (let letter = 1; letter < input.length; letter++) {
        if (input[letter] === ' ') {
          newText += input[letter + 1].toUpperCase();
          letter++;
        } else {
          newText += input[letter];
        }
      }

    } else if (style.includes('pascal')) {
      newText += input[0].toUpperCase();
      for (let letter = 1; letter < input.length; letter++) {
        if (input[letter] === ' ') {
          newText += input[letter + 1].toUpperCase();
          letter++;
        } else {
          newText += input[letter];
        }
      }

    } else if (style.includes('snake')) {
        for (let letter = 0; letter < input.length; letter++) {
          if (input[letter] === ' ') {
            newText += '_';
          } else {
            newText  += input[letter];
          }
        }

    } else if (style.includes('kebab')) {
      for (let letter = 0; letter < input.length; letter++) {
        if (input[letter] === ' ') {
          newText += '-';
        } else {
          newText  += input[letter];
        }
      }
      
    } else if (style.includes('title')) {
      newText += input[0].toUpperCase();
      for (let letter = 1; letter < input.length; letter++) {
        if (input[letter] === ' ') {
          newText += input[letter + 1].toUpperCase();
          letter++;
        } else {
          newText  += input[letter];
        }
      }
    }

    if (style.includes('vowel')) {
      for (let letter = 0; letter < input.length; letter++) {
        if (input[letter] === 'a' || input[letter] === 'e' || input[letter] === 'i' || input[letter] === 'o' || input[letter] === 'u') {
          newText += input[letter].toUpperCase();
        } else {
          newText  += input[letter];
        }
      }

    } else if (style.includes('consonant')) {
      for (let letter = 0; letter < input.length; letter++) {
        if (input[letter] !== 'a' && input[letter] !== 'e' && input[letter] !== 'i' && input[letter] !== 'o' && input[letter] !== 'u') {
          newText += input[letter].toUpperCase();
        } else {
          newText  += input[letter];
        }
      }

    }

    if (style.includes('upper')) {
      for (let letter = 0; letter < input.length; letter++) { 
          newText = newText.toUpperCase();
      }
      
    } else if (style.includes('lower')) {
      for (let letter = 0; letter < input.length; letter++) { 
        newText = newText.toLowerCase();
      }
    }
    
    return newText;
  }
 
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));

