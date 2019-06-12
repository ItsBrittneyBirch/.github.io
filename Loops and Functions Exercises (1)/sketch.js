// Loops and Functions Exercises (1)
// Brittney Mines
// March 1, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop(); // Will only run draw() one time
}

function draw() {
  print (myConstrain(50,0,100)); // Prints 50
  print (myConstrain(1,5,10)); // Prints 5
  print (myConstrain(-100,-300,-200)); // Prints - 200
  print (myConstrain(mouseX, 0, 200)); // Prints values between 0 - 200
  // All right half of sketch will print 200
}

function myConstrain(inputValue, floorValue, ceilingValue) {
  if (inputValue >= floorValue && inputValue <= ceilingValue) {
    return inputValue; // If inputValue is within range
  }
  else if (inputValue < floorValue) {
    return floorValue; // If inputValue is less than floorValue
  }
  else if (inputValue > ceilingValue) {
    return ceilingValue; // If inputValue is more than ceilingValue
  }
}