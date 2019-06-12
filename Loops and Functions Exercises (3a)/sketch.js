// Loops and Functions Exercises (3A)
// Brittney Mines
// March 1, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let string = "";
let i = 1;

function setup() { // Creates the canvas 
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function repeatTalk(message) { // Function that repeats string
  while (i < 1001) {
    print (message);
    i++;
  }
}

function draw() { // Runs the program
  string = "HEEELP";
  repeatTalk(string);
}
