var grid = [0,0,0,0,0,0,0,0,0]

var playerOne = [0,0,0,0,0,0,0,0,0]
var playerTwo = [0,0,0,0,0,0,0,0,0]
var turnCounter = 0
var PlayerTurn = 1

var winArr = [
  [9, 9, 9, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 9, 9, 9, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 9, 9, 9],
  [9, 0, 0, 9, 0, 0, 9, 0, 0],
  [0, 9, 0, 0, 9, 0, 0, 9, 0],
  [0, 0, 9, 0, 0, 9, 0, 0, 9],
  [9, 0, 0, 0, 9, 0, 0, 0, 9],
  [0, 0, 9, 0, 9, 0, 9, 0, 0]
]


// pass one test at a time
function restart () {
  grid = [0,0,0,0,0,0,0,0,0]
  playerOne = [0,0,0,0,0,0,0,0,0]
  playerTwo = [0,0,0,0,0,0,0,0,0]
  turnCounter = 0
  PlayerTurn = 1
}

function ArrEqual (arr1, arr2) {
  var isEqual = true
  if (arr1.length === arr2.length) {
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] != arr2[i]) {
        isEqual = false
        break
      }
    }
  } else {
    isEqual = false
  }
  return isEqual
}

function isGameOver () {
  if (whoWon() === 1 || whoWon() === 2 || whoWon() === 3) {
    return true
  }
  return false
}

function whoWon () {
  var GameStatus = 0
  if (turnCounter === 9) {
    GameStatus = 3
  } else {
     for (var i = 0; i < winArr.length; i++) {
       if (ArrEqual(playerOne, winArr[i])) {
         GameStatus = 1
         break
       } else if (ArrEqual(playerOne, winArr[i])) {
         GameStatus = 2
         break
     }
   }
   return GameStatus
  }
}

function playTurn (Index) {
  var isAllowed = true
  if (grid[Index] === 0) {
    grid[Index] = 9
    turnCounter += 1
    if (PlayerTurn === 1) {
      playerOne[Index] = 9
      PlayerTurn = 2
    } else {
      playerTwo[Index] = 9
      PlayerTurn = 1
    }
  } else {
    isAllowed = false
  }
  return isAllowed
}
