// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let colors = 0


function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  for (let x = 0; x <= width; x += width / 8) {
    for (let y = 0; y <= height; y += height / 8) {
      if (colors === 0) {
        fill(colors);
        rect(x, y, width / 8, height / 8);
        colors = 255;
      }
      else if(colors === 255) {
        fill(colors);
        rect(x, y, width / 8, height / 8);
        colors = 0;
      }
    }
  }
}