// Write a method that takes a field for well-known board game "Battleship" as an argument and returns true if it has a valid disposition of ships, false otherwise. Argument is guaranteed to be 10*10 two-dimension array. Elements in the array are numbers, 0 if the cell is free and 1 if occupied by ship.

// Battleship (also Battleships or Sea Battle) is a guessing game for two players. Each player has a 10x10 grid containing several "ships" and objective is to destroy enemy's forces by targetting individual cells on his field. The ship occupies one or more cells in the grid. Size and number of ships may differ from version to version. In this kata we will use Soviet/Russian version of the game.


// Before the game begins, players set up the board and place the ships accordingly to the following rules:
// There must be single battleship (size of 4 cells), 2 cruisers (size 3), 3 destroyers (size 2) and 4 submarines (size 1). Any additional ships are not allowed, as well as missing ships.
// Each ship must be a straight line, except for submarines, which are just single cell.

// The ship cannot overlap or be in contact with any other ship, neither by edge nor by corner.

// This is all you need to solve this kata. If you're interested in more information about the game, visit this link.

function validateBattlefield(field) {
  function rec(x, y) {
    if (x < 0 || x > 9 || y < 0 || y > 9){
      return 0;
    }
    if(field[x][y] === 0) {
      return 0;
    }
    if (!checkDiags(x,y)) {return false;}
    if (field[x][y] === 1) {
      field[x][y] = 0;
      return rec(x-1, y) +
      rec(x, y-1) + 1 + rec(x, y+1) +
      rec(x+1, y);
    }
  }
  
  function checkDiags(x, y) {
    if (x === 0 && y === 0) {return field[x+1][y+1] !== 1;}
    if (x === 0 && y === 9) {return field[x+1][y-1] !== 1;}
    if (x === 9 && y === 0) {return field[x-1][y+1] !== 1;}
    if (x === 9 && y === 9) {return field[x-1][y-1] !== 1;}
    if (x === 0) {
      return ((field[x+1][y+1] !== 1) && (field[x+1][y-1] !== 1))
    }
    if (x === 9) {
      return ((field[x-1][y-1] !== 1) && (field[x-1][y+1] !== 1))
    }
    if (y === 0) {
      return ((field[x-1][y+1] !== 1) && (field[x+1][y+1] !== 1))
    }
    if (y === 9) {
      return ((field[x-1][y-1] !== 1) && (field[x+1][y-1] !== 1))
    } else {
      return ((field[x-1][y-1] !== 1) && (field[x-1][y+1] !== 1) && (field[x+1][y+1] !== 1) && (field[x+1][y-1] !== 1))
    }
  }
  
  let [b4, c3, d2, s1] = [0, 0, 0, 0];
  
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (field[i][j] === 1) {
        if (!checkDiags(i,j)) {
          return false;
        }
        let temp = 0;
        temp = rec(i, j);
        if (temp > 4) {return false;}
        if (temp === false) {return false;}
        if (temp >= 0){
          temp === 4 ? b4++ : temp === 3 ? c3++ : temp === 2 ? d2++ : s1++;
        }
      }

    }
  }
  return b4 === 1 && c3 === 2 && d2 === 3 && s1 === 4;
}