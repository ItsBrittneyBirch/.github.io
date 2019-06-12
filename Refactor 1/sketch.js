// Refactor 1
// Brittney Mines
// March 28, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let a = 200;
let b = 300;
let c = random(3,8);
let d = random(3,8);

function setup() { //Creates a Canvas
  createCanvas(windowWidth, windowHeight);
}

function draw() { // Runs the program, colors the background, and draws a rectangle
  edges();
  background(80,80,80);
  rect(a,b,250,75);
}

function edges(){ // Checks if the rectangle is hitting the edge
  a += c; 
  b += d;
  if (b >= height - 75 || b <= 0) {
    d *= -1;
  }
  if (a >= width - 250 || a <= 0) {
    c *= -1;
  }
}