// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x, y;
let xSpeed, ySpeed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = width / 2;
  xSpeed = random (-5, 5);
  ySpeed = random (-5, 5);
  background(0);
}

function draw() {
 // background(220)
  ellipse(x, y, 25, 25);
  x += xSpeed
  y += ySpeed
  fill (random(255), random(255), random(255));

  if (x < 0 || x > width) {
    xSpeed *= -1;
  }
  if (y < 0 || y > width) {
    ySpeed *= -1
  }

}

function mousePressed() {
  //fill(255, 0, 0)
  xSpeed = random (-5, 5);
  ySpeed = random (-5, 5);
}

function mouseReleased() {
  //fill (0, 255, 0);
}