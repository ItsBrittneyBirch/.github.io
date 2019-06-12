// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  noFill();
}

function draw() {
  randomSeed();
  background(220);
  pushMatrix();
  translate(0, 0);
  rotate(radians(frameCount));
  rectangles(0, 0, height);
  popMatrix();
}

function rectangles(x, y, d) {
  if (d > 5) {
    rect(x, y, d, d);
    rectangles(x - d / 2, y - d / 2, d / 2);
    rectangles(x - d / 2, y + d / 2, d / 2);
    rectangles(x + d / 2, y + d / 2, d / 2);
    rectangles(x + d / 2, y - d / 2, d / 2);
  }
}