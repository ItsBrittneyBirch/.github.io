// Saving and Resolution Demo
// Brittney Mines
// April 11, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  fill(255);
  ellipse(width / 2, height / 2, 400);
}

function keyPressed() {
  if (key === " "){
    save("SpyHole");
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}