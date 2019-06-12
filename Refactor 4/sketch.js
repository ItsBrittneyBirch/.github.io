// Chess Board
// Brittney Mines
// April 4, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function setup(){
  createCanvas(600, 600);
  noLoop();
}

let color = 0;

function chess(){
  for(let x = 0; x < 525; x += 75){
    for(let y = 0; y < 525; y += 75){
      if (color === 255){
        color = 0;
      }
      else{
        color = 255;
      }
      fill (color);
      rect(x, y, 75, 75);
    }
  }
}

function draw(){
  chess();
}