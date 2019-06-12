// Black and White Target
// Brittney Mines
// April 4, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function setup() { // Creates a Canvas/Workspace
  createCanvas(400, 400);
}

function draw() {
  background(240); // Creates a background color
  for (let size = width; size >= 40; size -= 40) { // Draws a circle multiple times, but each with a different size
    ellipse(width/2, height/2, size, size);
  }
}