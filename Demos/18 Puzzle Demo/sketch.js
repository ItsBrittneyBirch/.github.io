// 18 Puzzle Demo
// Brittney Mines
// April 29, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let current_col, current_row;
const NUM_ROWS = 4;
const NUM_COLS = 5;
let rectWidth, rectHeight;

let gridData = [[0,   255, 0,   255, 0],
               [ 255, 0,   255, 0,   255],
               [ 0,   255, 0,   255, 0],
               [ 255, 0,   255, 0,   255]];

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectWidth = windowWidth / NUM_COLS;
  rectHeight = windowHeight / NUM_ROWS;
  for (let row) {
    for (let col) {
      let rannum = int(random(0,2));
      gridData[col][row] = rannum;
    }
  }
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
    }
    else {
      gridData[row][col] = 0;
    }
  }
}

function determineActiveSquare() {
  current_col = int(mouseX / rectWidth);
  current_row = int(mouseY / rectHeight);
  print(current_col, current_row);
}

function draw() {
  drawGrid();
  determineActiveSquare();
}

function mousePressed() {
  flip(current_col + 1, current_row);
  flip(current_col - 1, current_row);
  flip(current_col, current_row + 1);
  flip(current_col, current_row - 1);
  flip(current_col, current_row);
}