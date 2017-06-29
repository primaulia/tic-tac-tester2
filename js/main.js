// ALL MY DOM MANIPULATION JS CODES

document.addEventListener('DOMContentLoaded', init)

function init () {
  var ttt = tttModule()
  var grids = document.querySelectorAll('.grid')

  function gridClick (e) {
    var chosenGrid = e.target
    var chosenGridIndex = parseInt(chosenGrid.id.substring(4))

    chosenGrid.classList.add(numToWord(ttt.playTurn(chosenGridIndex)))
  }

  function numToWord (n) {
    return (n === 1) ? 'one' : 'two'
  }

  grids.forEach(function (grid) {
    grid.addEventListener('click', gridClick)
  })
}
