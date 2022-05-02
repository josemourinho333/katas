// Find a way to pretty this

const urlDecode = function(text) {
  const Object = {};
  let stringArray = [];
  let everySplit = [];

  const splitString = function(text, stringArray) {
    stringArray = text.split('&');
    keyValuePairs(stringArray);
  }

  const keyValuePairs = function(stringArray) {
    for (let i = 0; i < stringArray.length; i++) {
      let pairs = stringArray[i].split('=');
      for (let j = 0; j < pairs.length; j++) {
        everySplit.push(pairs[j]);
      }
      
    }
  }

  const stringCleanUp = function(everySplit) {
    for (let y = 0; y < everySplit.length; y++) {
      for (let g = 0; g < everySplit[y].length; g++) {
        if (everySplit[y][g] === '%') {
          everySplit[y] = everySplit[y].replace('%20', ' ');
        }
      }
    }
  }

  const createKeysAndValues = function(everySplit, stringArray, text) {
    if (text.includes('&')) {
      splitString(text, stringArray);
    } else {
      everySplit = text.split('=');
    }

    stringCleanUp(everySplit);

    for (let x = 0; x < everySplit.length; x++) {
      if (x % 2 === 0) {
        Object[everySplit[x]] = everySplit[x + 1];
      }
    }
  }

  createKeysAndValues(everySplit, stringArray, text);
  return Object;

};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);