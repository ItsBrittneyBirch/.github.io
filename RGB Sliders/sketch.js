// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let slider1, slider2, slider3, radio, inp1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  slider1 = createSlider(0, 255, 120);
  slider1.position(100, 880);
  slider1.style("width", "100px");
  slider2 = createSlider(0, 255, 120);
  slider2.position(100, 905);
  slider2.style("width", "100px");
  slider3 = createSlider(0, 255, 120);
  slider3.position(100, 930);
  slider3.style("width", "100px");
  radio = createRadio();
  radio.option("Ellipse");
  radio.option("Rectangle");
  radio.position(0, 0);
  radio.style("width", "60px");
  textAlign(CENTER);
  radio.value("Rectangle");
}


function draw() {
  background(slider1.value(), slider2.value(), slider3.value());
  let val = radio.value();
  if (val === "Ellipse") {
    fill();
    ellipse(width / 2, height / 2, 200);
  }
  if (val === "Rectangle") {
    rect(width / 2 - 100, height / 2 - 100, 200, 200);
  }
}
