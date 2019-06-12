// Terrain Generation and Perlin Noise
// Brittney Mines
// March 14, 2019
//
// Extra for Experts:
// My terrain slides across the screen as if it is moving

let inc = 0.01;
let start = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  generateTerrain();
}

function generateTerrain(){
  background(173, 216, 255);
  stroke(255);
  noFill();
  beginShape();

  let xOff = start;
  let x = 0;
  for (let x = 0; x <= width; x++) {
    stroke(255);
    let y = noise(xOff) * height;
    rect(x, y, 1, height);
    xOff += inc;
  }

  endShape();

  start += inc; // Slides across the screen
}