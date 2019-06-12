// Flappy Bird
// Brittney Mines
// May 9, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let bird;

function Bird() {
  this.y = width/2;
  this.x = 64;
  this.gravity = 1;
  this.velocity = 0;
  this.show = function() {
    fill(255);
    ellipse(this.x, this.y, 32, 32);
  };

  this.up = function() {
    this.velocity += -this.gravity + 10;
    print(this.velocity);
  };

  this.update = function() {
    this.velocity += this.gravity;
    this.y += this.velocity;


    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  };
}

function setup() {
  createCanvas(400, 600);
  bird = new Bird();
}

function draw() {
  background(0);
  bird.update();
  bird.show();
}

function keyPressed() {
  if (key === " ") {
    bird.up();
  }
}