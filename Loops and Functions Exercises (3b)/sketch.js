// Loops and Functions Exercises (3B)
// Brittney Mines
// March 1, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let i;

function setup() { // Creates the canvas
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function printOdds() { // Determines if the number is odd
  for (i = 1; i < 101; i += 2) {
    print (i);
  }
}

function draw() { // Runs the program
  printOdds();
}
