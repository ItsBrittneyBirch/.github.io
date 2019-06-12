// State Variables Assignment
// Brittney Mines
// February 26, 2019
//
// Extra for Experts:
// I changed the colors of the quadrants so that when you were in them, they would be different colors than black & white

let quadrant;
let fill1 = 255;
let fill2 = 255;
let fill3 = 255;
let fill4 = 255;

function setup() { // SETTING UP THE CANVAS
  createCanvas(windowWidth, windowHeight);
}

function quadrants() { // CALLING ALL QUADRANTS
  quad1();
  quad2();
  quad3();
  quad4();
}

function quad1() { // DRAWING AND COLORING QUADRANT 1 (TOP LEFT)
  if (mouseX >= 0 && mouseY >= 0 && mouseX <= width / 2 && mouseY <= height / 2) {
    fill(0, 243, 139);
    rect(0, 0, width / 2, height / 2);
    fill1 = 0;
  }
  else {
    fill1 += 5;
    fill(fill1, 243, 139);
    rect(0, 0, width / 2, height / 2);
  }
}

function quad2() { // DRAWING AND COLORING QUADRANT 2 (TOP RIGHT)
  if (mouseX >= width / 2 && mouseY >= 0 && mouseX <= width && mouseY <= height / 2) {
    fill(254, 133, 0);
    rect(width / 2, 0, width, height / 2);
    fill2 = 0;
  }
  else {
    fill2 += 5;
    fill(254, 133, fill2);
    rect(width / 2, 0, width, height / 2);
  }
}

function quad3() { // DRAWING AND COLORING QUADRANT 3 (BOTTOM LEFT)
  if (mouseX >= 0 && mouseY >= height / 2 && mouseX <= width / 2 && mouseY <= height) {
    fill(125, 0, 128);
    rect(0, height / 2, width / 2, height);
    fill3 = 0;
  }
  else {
    fill3 += 5;
    fill(125, fill3, 128);
    rect(0, height / 2, width / 2, height);
  }
}

function quad4 () { // DRAWING AND COLORING QUADRANT 4 (BOTTOM RIGHT)
  if (mouseX >= width / 2 && mouseY >= height / 2 && mouseX <= width && mouseY <= height) {
    fill(176, 185, 0);
    rect(width / 2, height / 2, width, height);
    fill4 = 0;
  }
  else {
    fill4 += 5;
    fill(176, 185, fill4);
    rect(width / 2, height / 2, width, height);
  }
}

function draw() { // DRAWING QUADRANTS
  quadrants();
}