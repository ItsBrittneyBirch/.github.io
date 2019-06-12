// Generative Art
// Brittney Mines
// May 3, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let petalList = [[336.82, 17.81, 96.86], [166.03, 34.27, 83.53], [311, 92.1, 39.6]];
// VINES = 153, 64.2, 58
// OUTER VINES = 130, 41.1, 77.3
function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
}

function drawPetals() {
  stroke(0);
  endShape();
}

function draw() {
  background(152, 49.3, 79.6);
  fill(61.58, 14.9, 100);
  rect(width / 2, height / 2, 25, 25);
}
