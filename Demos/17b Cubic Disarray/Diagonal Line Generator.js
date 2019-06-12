// Diagonal Line Generator
// Brittney Mines
// April 8, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let spacing = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function diagonalAscending(x,y,spacing) {
  line(x-spacing/2, y+spacing/2, x+spacing/2, y-spacing/2);
}

function diagonalDescending(x,y,spacing) {
  line(x-spacing/2, y-spacing/2, x+spacing/2, y+spacing/2);
}

function draw() {
  background(220);
  drawLines(spacing);
}

function drawLines(spacing) {
  for (let x = spacing/2; x < width - spacing/2; x += spacing){
    for (let y = spacing/2; y < height - spacing/2; y += spacing){
      if (int(random(2)) === 0){
        diagonalDescending(x,y,spacing);
      }
      else {
        diagonalAscending(x,y,spacing);
      }
    }
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}