// ALL MY DOM MANIPULATION JS CODES

document.addEventListener('DOMContentLoaded', init)

function init () {
  var ttt = tttModule()
  var grids = document.querySelectorAll('.grid')
  var playedPlayer = 0

  function gridClick (e) {
    var chosenGrid = e.target
    var chosenGridIndex = parseInt(chosenGrid.id.substring(4))
    playedPlayer = ttt.playTurn(chosenGridIndex)

    if (playedPlayer) {
      chosenGrid.classList.add(numToWord(playedPlayer))
      afterClick()
    } else {
      alert('click another grid')
    }
  }

  function afterClick () {
    if (ttt.isGameOver()) alert('Game Won by: ' + playedPlayer)
  }

  function numToWord (n) {
    return (n === 1) ? 'one' : 'two'
  }

  grids.forEach(function (grid) {
    grid.addEventListener('click', gridClick)
  })
}
