// 18 Puzzle Demo
// Brittney Mines
// April 29, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let shape = "cross";
let rannum;
let winningb = 0;
let winningw = 0;
let current_col, current_row;
const NUM_ROWS = 4;
const NUM_COLS = 5;
let rectWidth, rectHeight;
let gridData = [[ , , , , ],
               [ , , , , ],
               [ , , , , ],
               [ , , , , ]];

function randomNumberizer() {
  rannum = int(random(0,2));
  if (rannum === 1) {
    winningw += 1;
    return 255;
  }
  else {
    winningb += 1;
    return 0;
  }
}

function randomizeBoard() {
  for (let x = 0; x < NUM_COLS; x++) {
    for (let y = 0; y < NUM_ROWS; y++) {
      gridData[y][x] = randomNumberizer();
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectWidth = windowWidth / NUM_COLS;
  rectHeight = windowHeight / NUM_ROWS;
  randomizeBoard();
}

function drawGrid() {
  for (let y = 0; y < NUM_ROWS; y++) {
    for (let x = 0; x < NUM_COLS; x++) {
      fill(gridData[y][x]);
      rect(x * rectWidth, y * rectHeight, rectWidth, rectHeight);
    }
  }
}

function flip(col, row) {
  if (col >= 0 && col < NUM_COLS && row >= 0 && row < NUM_ROWS) {
    if (gridData[row][col] === 0) {
      gridData[row][col] = 255;
      winningb -= 1;
      winningw += 1;
    }
    else {
      gridData[row][col] = 0;
      winningw -= 1;
      winningb += 1;
    }
  }
}

function ifWin() {
  if (winningb === 20 || winningw === 20) {
    textSize(100);
    textAlign(CENTER);
    fill(255, 0, 0);
    text("You Win!!", width/2, height/2);
  }
}

function determineActiveSquare() {
  current_col = int(mouseX / rectWidth);
  current_row = int(mouseY / rectHeight);
}

function draw() {
  drawGrid();
  determineActiveSquare();
  ifWin();
}

function keyTyped() {
  if (key === " ") {
    if (shape === "cross") {
      shape = "square";
    }
    else {
      shape = "cross";
    }
  }
}

function mousePressed() {
  if (mouseButton === LEFT) {
    if (shape === "cross") {
      flip(current_col + 1, current_row);
      flip(current_col - 1, current_row);
      flip(current_col, current_row + 1);
      flip(current_col, current_row - 1);
      flip(current_col, current_row);
    }
    else {
      flip(current_col - 1, current_row);
      flip(current_col, current_row);
      flip(current_col - 1, current_row + 1);
      flip(current_col, current_row + 1);
    }
  }
  if (mouseButton === CENTER) {
    flip(current_col, current_row);
  }
}