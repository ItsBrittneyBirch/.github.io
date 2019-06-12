// Refactor 2
// Brittney Mines
// March 28, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function setup() { // Creates a Canvas
  createCanvas(windowWidth, windowHeight);

}
function draw() { // Creates four quadrants and, if mouse is within space, turns the quadrant black
  background(255);
  stroke(0);
  line(width / 2, 0, width / 2, height);
  line(0, height / 2, width, height / 2);
  noStroke();
  fill(0);
  if (mouseX < width / 2 && mouseY < height / 2) {
    rect(0, 0, width / 2, height / 2);
  }
  else if (mouseX > width / 2 && mouseY < height / 2) {
    rect(width / 2, 0, width / 2, height / 2);
  }
  else if (mouseX < width / 2 && mouseY > height / 2) {
    rect(0, height / 2, width / 2, height / 2);
  }
  else if (mouseX > width / 2 && mouseY > height / 2) {
    rect(width / 2, height / 2, width / 2, height / 2);
  }
}

function windowResized() { // Resets dimensions to fit current window size
  resizeCanvas(windowWidth, windowHeight);
}