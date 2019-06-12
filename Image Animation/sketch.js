// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let links = [];
let x = 340;
let y = 480;
let counter = 1;

function preload() {
  for (let i = 1; i < 9; i++) {
    links.push(loadImage("assets/LinkFD" + i + ".png")); //Link Going Up (1 to 8)
  }
  for (let i = 1; i < 9; i++) {
    links.push(loadImage("assets/LinkR" + i + ".png")); // Link Going Right (9 to 16)
  }
  for (let i = 1; i < 9; i++) {
    links.push(loadImage("assets/LinkBD" + i + ".png")); // Link Going Down (17 to 24)
  }
  for (let i = 1; i < 9; i++) {
    links.push(loadImage("assets/LinkL" + i + ".png")); // Link Going Left (25 to 32)
  }
}

function setup() {
  createCanvas(675, 960);
  frameRate(60);
  imageMode(CENTER);
}

function draw() {
  background(255);
  print(width, height);

  image(links[counter], x, y);
}

function keyPressed() {
  if (keyCode === UP_ARROW) { // 1 to 8
    if (counter > 6) {
      counter = 1;
      y -= 5;
    }
    else {
      counter++;
      y -= 5;
    }
  }
  if (keyCode === RIGHT_ARROW) { // 9 to 16
    if (counter < 9 || counter > 14) {
      counter = 9;
      x += 5;
    }
    else {
      counter++;
      x += 5;
    }
  }
  if (keyCode === DOWN_ARROW) { // 17 to 24
    if (counter < 17 || counter > 22) {
      counter = 17;
      y += 5;
    }
    else {
      counter++;
      y += 5;
    }
  }
  if (keyCode === LEFT_ARROW) { // 25 to 32
    if (counter < 25 || counter > 30) {
      counter = 25;
      x -= 5;
    }
    else {
      counter++;
      x -= 5;
    }
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}