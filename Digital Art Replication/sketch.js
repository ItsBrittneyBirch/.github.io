// Ninety Parallel Sinusoids With Linearly Increasing Period
// Brittney Mines
// April 11, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let y = 200;
let x1, x2;

function setup() {
  createCanvas(windowWidth, windowHeight); // 958, 959
  background(225);
  x1 = width * 0.2;
  x2 = width * 0.75;
  noLoop();
  noFill();
  strokeWeight(10);
  rect(0, 0, width, height);
  strokeWeight(1);
}

function draw() {
  drawNinetyParallelSinusoids();
}

function drawNinetyParallelSinusoids() { // Draw 90 Lines
  for (let num = 1; num < 91; num++) {
    drawOneParallelSinusoid();
    y += 5;
  }
}

function drawOneParallelSinusoid() { // Draws One Line
  bezier(x1, y, x1 + 7.5, y - 25, x1 + 12.5, y - 25, x1 + 20, y); // First Curve
  bezier(x1 + 20, y, x1 + 40, y + 50, x1 + 42.5, y + 50, x1 + 60, y); // Second Curve
  bezier(x1 + 60, y, x1 + 70, y - 25, x1 + 85, y - 25, x1 + 100, y); // Third Curve
  bezier(x1 + 100, y, x1 + 140, y + 50, x1 + 145, y + 50, x1 + 180, y); // Fourth Curve
  bezier(x1 + 180, y, x1 + 202.5, y - 25, x1 + 212.5, y - 25, x1 + 240, y); // Fifth Curve
  bezier(x1 + 240, y, x1 + 300, y + 50, x1 + 307.5, y + 50, x1 + 360, y); // Sixth Curve
  bezier(x1 + 360, y, x1 + 420, y - 50, x1 + 425, y - 35, x1 + 460, y - 30); // Ending Curv-ish Line
}