// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let squareSize = 30;
let x, y;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  background(255);
  noLoop();
  fill(0);
  stroke(0);
}

function diagonalAscending() {
  line(x - squareSize / 2, y + squareSize / 2, x + squareSize / 2, y - squareSize / 2);
}

function diagonalDescending() {
  line(x - squareSize / 2, y - squareSize / 2, x + squareSize / 2, y + squareSize / 2);
}


function drawLines(){
  for (x = 0; x < width; x += squareSize) {
    for (y = 0; y < height; y += squareSize) {
      if (int(random(1,3)) === 1) {
        diagonalAscending();
      }
      else {
        diagonalDescending();
      }
    }
  }
}

function draw() {
  drawLines();
}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}