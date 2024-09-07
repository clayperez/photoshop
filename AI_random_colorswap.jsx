// Illustrator script to shuffle fill colors among selected objects

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }
  return array
}

function main() {
  var doc = app.activeDocument
  var sel = doc.selection
  var colorArray = []

  if (sel.length === 0) {
    alert('No objects selected. Please select the objects you wish to shuffle the colors for.')
    return
  }

  // Collect the colors from the selected items
  for (var i = 0; i < sel.length; i++) {
    if (sel[i].filled) {
      colorArray.push(sel[i].fillColor)
    }
  }

  colorArray = shuffle(colorArray)

  // Re-apply the shuffled colors to the items
  for (i = 0; i < sel.length; i++) {
    if (sel[i].filled) {
      sel[i].fillColor = colorArray.pop()
    }
  }
}

main()
