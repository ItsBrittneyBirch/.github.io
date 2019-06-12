// Color Solutions Demo
// Brittney Mines
// April 10, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectWidth = 10;
let rectHeight = 50;
let colorList = ["#2F5057", "#7AC3C2", "#9EDBD4", "#D1F0EE", "#DFE9F2"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  drawRowRGB(height * 0.25);
  drawRowHSB(height / 2);
  drawRowCustom(height * 0.75);
  drawRowCustom2(height * 0.9);
}

function drawRowCustom(yPos) {
  colorMode(RGB);
  let counter = 0;
  for (let x = 0; x < width; x += rectWidth) {
    //fill(colorList[counter % 5]);
    fill(colorList[int(random(colorList.length))]);
    rect(x, yPos, rectWidth, rectHeight);
    counter++;

  }
}

function drawRowCustom2(yPos) {
  colorMode(RGB);
  let counter = 0;
  for (let x = 0; x < width; x += rectWidth) {
    fill(colorList[counter % 5]);
    rect(x, yPos, rectWidth, rectHeight);
    counter++;
  }
}

function drawRowRGB(yPos) {
  colorMode(RGB);
  for (let x = 0; x < width; x += rectWidth) {
    fill(random(255), random(255), random(255));
    rect(x, yPos, rectWidth, rectHeight);
  }
}

function drawRowHSB(yPos) {
  colorMode(HSB, 360);
  for (let x = 0; x < width; x += rectWidth) {
    fill(x % 360, 280, 330); // Fill = (Hue, Saturation, Brightness)
    rect(x, yPos, rectWidth, rectHeight);
  }
}

function draw() {
}
