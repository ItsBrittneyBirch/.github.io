// Primitive Paint
// Brittney Mines
// February 11, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x, y;
let shape = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = width / 2;
  background(0);
}

function draw() {
  // Name
  textSize (32);
  textFont ("Georgia");
  fill (255);
  text ("Brittney Mines", 10, 50);

  if (shape === 0) {
    rect (mouseX, mouseY, 75, 50);
  }
  else if (shape === 1) {
    ellipse (mouseX, mouseY, 50);
  }
  else if (shape === 2) {
    quad (mouseX, mouseY, mouseX - 25, mouseY + 25, mouseX, mouseY + 50, mouseX + 25, mouseY + 25);
  }
  // Autonomous Art
  stroke(random(255), random (255), random (255));
  strokeWeight (4);
  noFill();
  rect (5, 0, 225, 90);
}

function keyTyped() { //Placing Shapes
  if (key === "a") {
    fill (random(255), random(255), random(255));
    rect (mouseX, mouseY, 75, 50);
  }
  else if (key === "s") {
    fill (random(255), random(255), random(255));
    ellipse (mouseX, mouseY, 50);
  }
  else if (key === " ") {
    background (0);
  }
  else if (key === "d") {
    fill (random(255), random(255), random(255));
    quad (mouseX, mouseY, mouseX - 25, mouseY + 25, mouseX, mouseY + 50, mouseX + 25, mouseY + 25);
  }
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    if (shape === 0) {
      shape = 1;
    }
    else if (shape === 1) {
      shape = 2;
    }
    else if (shape === 2) {
      shape = 0;
    }
  }
}