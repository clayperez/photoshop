// Get the active document
var doc = app.activeDocument

// Check if any objects are selected
if (doc.selection.length > 0) {
  var selectedObjects = doc.selection
  var swatches = app.activeDocument.swatches
  var colorSwatches = []

  // Get the swatches from the active library (assuming you have only the 4 colors in it)
  for (var i = 0; i < swatches.length; i++) {
    if (swatches[i].color) {
      // Check if it's a color swatch and not a gradient or pattern
      colorSwatches.push(swatches[i])
    }
  }

  for (var j = 0; j < selectedObjects.length; j++) {
    var randomIndex = Math.floor(Math.random() * colorSwatches.length) // Generate a random index
    selectedObjects[j].fillColor = colorSwatches[randomIndex].color // Assign the random color to the selected object
  }
} else {
  alert('Please select some objects first!')
}
