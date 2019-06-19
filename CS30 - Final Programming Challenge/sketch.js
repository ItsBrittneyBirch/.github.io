// CS30 - Final Programming Challenge
// Brittney Mines
// June 19, 2019
// 
//
//
//

//variable declarations - included for convenience, but you don't have to use these.
//                        feel free to handle this in a different way if you prefer.

let staticImages = [];      //array to hold 1 image for each direction -> should use this to start  
let animationImages = [];   //array to hold all 8 images in each direction
let lastdirection = "Up";
let playerx, playery;
let playersize = 75;
let pepsi = false;
let randomdirection;

function preload(){
  loadStatic();     //defined at bottom
  loadAnimation();  //also defined at bottom
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  playerx = width/2;
  playery = height/2;
}

function draw() {
  background(220);
  drawFox();
  pepsiMode(); 
}

function drawFox() {
  if (pepsi !== true) {
    noTint();
  }
  if (keyIsDown(LEFT_ARROW)) {
    image(staticImages[0], playerx, playery, playersize, playersize);
    lastdirection = "Left";
    playerx -= 5;
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    image(staticImages[1], playerx, playery, playersize, playersize);
    lastdirection = "Right";
    playerx += 5;
  }
  else if (keyIsDown(UP_ARROW)) {
    image(staticImages[2], playerx, playery, playersize, playersize);
    lastdirection = "Up";
    playery -= 5;
  }
  else if (keyIsDown(DOWN_ARROW)) {
    image(staticImages[3], playerx, playery, playersize, playersize);
    lastdirection = "Down";
    playery += 5;
  }
  else {
    if (lastdirection === "Left") {
      image(staticImages[0], playerx, playery, playersize, playersize);
    }
    else if (lastdirection === "Right") {
      image(staticImages[1], playerx, playery, playersize, playersize);
    }
    else if (lastdirection === "Up") {
      image(staticImages[2], playerx, playery, playersize, playersize);
    }
    else if (lastdirection === "Down") {
      image(staticImages[3], playerx, playery, playersize, playersize);
    }
  }
}

function keyTyped() {
  if (key === "r") {
    playersize = 75;
    playerx = width/2;
    playery = height/2;
    redraw();
  }
  else if (key === "p") {
    pepsi = !pepsi;
  }
}

function loadStatic(){
  staticImages.push(loadImage("/assets/left1.png"));   //0 - left
  staticImages.push(loadImage("/assets/right1.png"));   //1 - right
  staticImages.push(loadImage("/assets/up1.png"));   //2 - up
  staticImages.push(loadImage("/assets/down1.png"));   //3 - down
}

function loadAnimation(){
  for(let i = 1; i <= 8; i++){    //0-7 LEFT
    animationImages.push(loadImage("/assets/left" + i + ".png"));
  }

  for(let i = 1; i <= 8; i++){  //8-15 RIGHT
    animationImages.push(loadImage("/assets/right" + i + ".png"));
  }

  for(let i = 1; i <= 8; i++){  //16-23 UP
    animationImages.push(loadImage("/assets/up" + i + ".png"));
  }

  for(let i = 1; i <= 8; i++){  //24-31 DOWN
    animationImages.push(loadImage("/assets/down" + i + ".png"));
  }
}

function mousePressed() {
  if (mouseY <= height/2) {
    playersize += 5;
  }
  else if (mouseY >= height/2) {
    playersize -= 5;
  }
}

function pepsiMode() {
  if (pepsi === true) {
    randomdirection = int(random(4));

    if (randomdirection === 0) { // LEFT
      if (playerx <= 0) {
        playerx += 5;
      }
      else {
        playerx -= 5;
      }
      lastdirection = "Left";
      playersize += int(random(-5, 5));
    }
    else if (randomdirection === 1) { // RIGHT
      if (playerx >= width) {
        playerx -= 5;
      }
      else {
        playerx += 5;
      }
      lastdirection = "Right";
      playersize += int(random(-5, 5));
    }
    else if (randomdirection === 2) { // UP
      if (playery <= 0) {
        playery += 5;
      }
      else {
        playery -= 5;
      }
      lastdirection = "Up";
      playersize += int(random(-5, 5));
    }
    else if (randomdirection === 3) { // DOWN
      if (playery >= height) {
        playery -= 5;
      }
      else {
        playery += 5;
      }
      lastdirection = "Down";
      playersize += int(random(-5, 5));
    }

    
    tint(random(255), random(255), random(255));
  }
}