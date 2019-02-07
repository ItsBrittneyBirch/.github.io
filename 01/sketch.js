// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x 45;
let xSpeed = 6;

function setup() {
  createCanvas(windowWidth, windowHeight)
  rectMode(CENTER);
}

function draw() {
  background(0)
  fill(204,20,52)
  ellipse(2, 2 ,125)
  fill(25, 56, 30)
  rect(mouseX, 400, 75);\

  x += xSpeed
}
