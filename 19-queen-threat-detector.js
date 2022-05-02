const generateBoard = function(whiteQueen, blackQueen) {
  let length = 8;
  let board = [];

  for (let i = 0; i < length; i++) {
    board.push([]);

    for (let j = 0; j < length; j++) {
      if ((whiteQueen[0] === i && whiteQueen[1] === j) || (blackQueen[0] === i && blackQueen[1] === j)) {
        board[i].push(1);
      } else {
        board[i].push(0);
      }
    }
  }

  return board;
}

const queenThreat = (board) => {
  if ( (whiteQueen[0] === blackQueen[0]) || (whiteQueen[1] === blackQueen[1]) || (Math.abs(whiteQueen[1] - blackQueen[1] === Math.abs(whiteQueen[0] - blackQueen[0]))) ) {
    return true;
  } else {
    return false;
  }
}

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
