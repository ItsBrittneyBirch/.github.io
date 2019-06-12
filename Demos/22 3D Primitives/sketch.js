// 3D Primitives and Fractals
// Brittney Mines
// May 13, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let angle = 5;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  smooth();
}

function draw() {
  angle = map(mouseX, 0, width, -180, 180);
  background(220);
  rotateY(radians(frameCount));
  for (let i = 0; i < 360; i += 45) {
    push();
    rotateY(radians(i));
    boxes(100);
    pop();
  }
}

function boxes(size) {
  if (size > 20) {
    rotateZ(radians(angle));
    translate(size * 1.5, 0, 0);
    box(size);

    boxes(size * 0.8);
  }
}