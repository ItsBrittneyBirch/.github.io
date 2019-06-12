// Multi-Colored Grid
// Brittney Mines
// March 8, 2019
//
// Extra for Experts:
// 

let rectSize = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop(); 
}

function draw() {
  for (let w = 0; w <= width; w += rectSize) {
    for (let h = 0; h <= height; h += rectSize) {
      fill(random(255), 0, random(255));
      rect(w, h, rectSize, rectSize);
    }
  }
}

// Sees if Spacebar has been pressed (if so, resets the grid)
function keyPressed() {
  for(let w = 0; w <= width; w += rectSize) {
    for (let  h = 0; h <= height; h += rectSize) {
      fill(random(255), 0, random(255));
      rect(w, h, rectSize, rectSize);
    }
  }
}

// Sees if mouse has been clicked and which button was pressed (If left, size of rectangles shrinks else they grow bigger)
function mousePressed() {
  if (mouseButton === LEFT) {
    if (rectSize !== 5) {
      rectSize -= 5;
      for(let w = 0; w <= width; w += rectSize) {
        for (let  h = 0; h <= height; h += rectSize) {
          fill(random(255), 0, random(255));
          rect(w, h, rectSize, rectSize);
        }
      }
    }
  }
  if (mouseButton === RIGHT) {
    rectSize += 5;
    for(let w = 0; w <= width; w += rectSize) {
      for (let  h = 0; h <= height; h += rectSize) {
        fill(random(255), 0, random(255));
        rect(w, h, rectSize, rectSize);
      }
    }
  }
}

// Resets grid if window size has changed
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}