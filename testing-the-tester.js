// OLD CODE THAT MIGHT NOT BE COMPATIBLE WITH HTML

// var arr = [true, true, true, true, true, true, true, true, true ]
// var counter = 1
// var winner = 0
// var winningMoves = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [3, 4, 5], [6, 7, 8], [2, 4, 6]]
// var player1 = []
// var player2 = []
//
// function restart () {
//   console.log('restarted')
//   for (var i = 0; i < arr.length; i++) {
//     arr[i] = true
//   }
//   counter = 1
//   player1 = []
//   player2 = []
//   winner = 0
// }
//
// function isGameOver () {
//   if (player1.length + player2.length == 9) {
//     return true
//   }
//   for (var i = 0; i < winningMoves.length; i++) {
//     if (player1.sort().toString() == winningMoves[i].toString()) {
//       winner = 1
//       return true
//     } else if (player2.sort().toString() == winningMoves[i].toString()) {
//       winner = 2
//       return true
//     }
//   }
//   return false
// }
//
// function whoWon () {
//   if (isGameOver() == false) {
//     return 0
//   } else {
//     if (winner == 1) {
//       return 1
//     } else if (winner == 2) {
//       return 2
//     } else {
//       return 3
//     }
//   }
// }
//
// function playTurn (index) {
//   if (arr[index] == false) {
//     return false
//   } else {
//     arr[index] = false
//     if ((counter - 1) % 2 === 0) {
//       player1.push(index)
//     } else {
//       player2.push(index)
//     }
//     counter += 1
//     return true
//   }
// }

document.addEventListener('DOMContentLoaded', init)

var p1Wins = 0
var p2Wins = 0
var grid = [null, null, null, null, null, null, null, null, null]
var player = 1
var turn = document.querySelector('.selectTurn')
// target the grids
var board = document.querySelectorAll('.board')
var restartButton = document.querySelector('.playButton')

function init () {
  board.forEach(function (square) {
    square.addEventListener('click', function () {
      var x = document.createElement('p')
      if (ttt().playTurn(square.id)) {
        var x = document.createElement('p')
        if (turn.textContent === 'X turn') {
          x.textContent = 'O'
        } else {
          x.textContent = 'X'
        }
        square.appendChild(x)
        setTimeout(function () {
          x.style.opacity = 1
        }, 50)
      } else {
        alert('Please make a valid move')
      }
      ttt().isGameOver()
    })
  })

  // target whose turn is it
  // target restart button
  restartButton.addEventListener('click', ttt().restart)
}

function ttt () {
  return {

    playTurn: function playTurn (index) {
      if (grid[index] || ttt().isGameOver()) {
        return false
      } else {
        grid[index] = player
        if (player === 1) {
          turn.textContent = 'X turn'
          player = 2
        } else {
          turn.textContent = 'O turn'
          player = 1
        }
        return true
      }
    },

    isGameOver: function isGameOver () {
      if (ttt().whoWon()) return true
      return false
    },

    whoWon: function whoWon () {
      if (grid[0] && grid[0] === grid[1] && grid[0] === grid[2]) {
        setTimeout(function () { alert('The winner is Player ' + grid[0] + '!') }, 125)
        if (grid[0] === 1) {
          p1Wins += 1
          var tempScore = document.querySelector('.Oscore')
          tempScore.textContent = p1Wins
        } else {
          p2Wins += 1
          var tempScore = document.querySelector('.Xscore')
          tempScore.textContent = p2Wins
        }
        return grid[0]
      }
      if (grid[3] && grid[3] === grid[4] && grid[3] === grid[5]) {
        setTimeout(function () { alert('The winner is Player ' + grid[3] + '!') }, 125)
        if (grid[3] === 1) {
          p1Wins += 1
          var tempScore = document.querySelector('.Oscore')
          tempScore.textContent = p1Wins
        } else {
          p2Wins += 1
          var tempScore = document.querySelector('Xscore')
          tempScore.textContent = p2Wins
        }
        return grid[3]
      }
      if (grid[6] && grid[6] === grid[7] && grid[6] === grid[8]) {
        setTimeout(function () { alert('The winner is Player ' + grid[6] + '!') }, 125)
        if (grid[6] === 1) {
          p1Wins += 1
          var tempScore = document.querySelector('.Oscore')
          tempScore.textContent = p1Wins
        } else {
          p2Wins += 1
          var tempScore = document.querySelector('.Xscore')
          tempScore.textContent = p2Wins
        }
        return grid[6]
      }
      if (grid[0] && grid[0] === grid[3] && grid[0] === grid[6]) {
        setTimeout(function () { alert('The winner is Player ' + grid[0] + '!') }, 125)
        if (grid[0] === 1) {
          p1Wins += 1
          var tempScore = document.querySelector('.Oscore')
          tempScore.textContent = p1Wins
        } else {
          p2Wins += 1
          var tempScore = document.querySelector('.Xscore')
          tempScore.textContent = p2Wins
        }
        return grid[0]
      }
      if (grid[1] && grid[1] === grid[4] && grid[1] === grid[7]) {
        setTimeout(function () { alert('The winner is Player ' + grid[1] + '!') }, 125)
        if (grid[1] === 1) {
          p1Wins += 1
          var tempScore = document.querySelector('.Oscore')
          tempScore.textContent = p1Wins
        } else {
          p2Wins += 1
          var tempScore = document.querySelector('.Xscore')
          tempScore.textContent = p2Wins
        }
        return grid[1]
      }
      if (grid[2] && grid[2] === grid[5] && grid[2] === grid[8]) {
        setTimeout(function () { alert('The winner is Player ' + grid[2] + '!') }, 125)
        if (grid[2] === 1) {
          p1Wins += 1
          var tempScore = document.querySelector('.Oscore')
          tempScore.textContent = p1Wins
        } else {
          p2Wins += 1
          var tempScore = document.querySelector('.Xscore')
          tempScore.textContent = p2Wins
        }
        return grid[2]
      }
      if (grid[0] && grid[0] === grid[4] && grid[0] === grid[8]) {
        setTimeout(function () { alert('The winner is Player ' + grid[0] + '!') }, 125)
        if (grid[0] === 1) {
          p1Wins += 1
          var tempScore = document.querySelector('.Oscore')
          tempScore.textContent = p1Wins
        } else {
          p2Wins += 1
          var tempScore = document.querySelector('.Xscore')
          tempScore.textContent = p2Wins
        }
        return grid[0]
      }
      if (grid[2] && grid[2] === grid[4] && grid[2] === grid[6]) {
        setTimeout(function () { alert('The winner is Player ' + grid[2] + '!') }, 125)
        if (grid[2] === 1) {
          p1Wins += 1
          var tempScore = document.querySelector('.Oscore')
          tempScore.textContent = p1Wins
        } else {
          p2Wins += 1
          var tempScore = document.querySelector('.Xscore')
          tempScore.textContent = p2Wins
        }
        return grid[2]
      }
      if (grid[0] && grid[1] && grid[2] && grid[3] && grid[4] &&
      grid[5] && grid[6] && grid[7] && grid[8]) {
        alert("It's a DRAW!")
        return 3
      }
      return 0
    },

    restart: function restart () {
      grid = [null, null, null, null, null, null, null, null, null]
      for (var i = 0; i < grid.length; i++) {
        board[i].textContent = ''
      }
    }
  }
}
