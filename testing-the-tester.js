
var grid = []

function restart () {
// It should restart the game so it can be played again.
// It is assumed that the turns of the player will be automatically changed after an allowed move.
// The application will console log all the passed or failed test.
  if (isGameOver === true) {
    grid = []
  }
}

function isGameOver(){
//It should return a true or false if the game is over.
  var status = whoWon()
  if (status === 0) {
    return false
  }
  else if ((status === 1) || (status === 2)) {
    return true
  }
  else if (status === 3) {
    return true
  }
}

function whoWon(){
// It should return 0 if the game is not yet finished. Else it should return
// either 1 or 2 depending on which player one. It should return 3 if the game is a draw.
  if (grid.length === 9) {
    return 3
  }
  //Splitting grid into each player array
  var player1 = []
  for (var i = 0; i < grid.length; i+2){
    player1.push(grid[i])
  }

  var player2 = []
  for (var i = 1; i < grid.length; i+2){
    player2.push(grid[i])
  }

  var combo1 = [0,1,2]
  var combo2 = [3,4,5]
  var combo3 = [6,7,8]
  var combo4 = [0,3,6]
  var combo5 = [1,4,7]
  var combo6 = [2,5,8]
  var combo7 = [0,4,8]
  var combo8 = [2,4,6]

  function containsAll(playerGrid, combo){

    for (var i = 0; i < combo.length; i++){
      if (playerGrid.indexOf(combo[i] == -1)
      return false
    }
    return true
  }

  if (containsAll(player1, combo1) || containsAll(player1, combo2) ||
  containsAll(player1, combo3) || containsAll(player1, combo4) ||
  containsAll(player1, combo5)) || containsAll(player1, combo6) ||
  containsAll(player1, combo7) || containsAll(player1, combo8)){
  return 1
  }

  if (containsAll(player2, combo1) || containsAll(player2, combo2) ||
  containsAll(player2, combo3) || containsAll(player2, combo4) ||
  containsAll(player2, combo5)) || containsAll(player2, combo6) ||
  containsAll(player2, combo7) || containsAll(player2, combo8)){
  return 2
  }

  return 0
}

function playTurn (index) {
// It should take one parameter which is a zero-based index to your grid,
// indicating where the current players token should be played. It should return a
// boolean value to indicate whether the move was allowed or not - true if it was
// successful, false otherwise e.g. if the square is already taken or the game is over.
  if (grid.includes(index) === true) {
    return false
  }
  else {
    grid.push(index)
    if (isGameOver() === true) {
      return false
    }
    else {
      return true
    }
  }
}
