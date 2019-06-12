// Final Project (Pokemon)
// Brittney Mines
// May 28, 2019
//
// Extra for Experts:
// I incorporated my Computer Science final and my Digital 
// Media final into one game with both graphics, sound 
// effects, and (in my opinion) good coding

//let chosengender;
let gamebackground;
let partybackground = true;
let femalebattle, femalehealinggive, femalehealingtake, femalerunningup, femalerunningdown, femalerunningleft, femalerunningright, femalesaving, femalewalkingup, femalewalkingdown, femalewalkingright, femalewalkingleft;
let malebattle, malehealinggive, malehealingtake, malerunningup, malerunningdown, malerunningleft, malerunningright, malesaving, malewalkingup, malewalkingdown, malewalkingleft, malewalkingright;
let femaletrainercardsprite;
let maletrainercardsprite;

let menupokedex;
let menupokeball;
let pokeballwithinparty;
let menubag;
let menutrainercard;
let playercard;
let menusave;
let menuoptions;

let partyslot = 0;
let myFont;
let menuchoicebackground = true;
let sidemenuchoice = "";
let menuchoice = 0;
let fadeopacity = 0;
let fadecounter = 0;
let sidemenu = false;
let walking = true;
let fading = false;
let insidesidemenu = false;

function preload() {
  myFont = loadFont("assets/pixeled.ttf");
  gamebackground = loadImage("assets/Pokemon Background.png");

  femalebattle = loadAnimation("assets/Female Sprites/Female Battle/Female Throw 1.png", "assets/Female Sprites/Female Battle/Female Throw 5");


  menupokedex = loadImage("assets/Pokedex.png");
  menupokeball = loadImage("assets/Pokeball.jpg.png");
  menubag = loadImage("assets/Bag.png");
  menutrainercard = loadImage("assets/Trainer Card Sprite.png");
  menusave = loadImage("assets/Save.png");
  menuoptions = loadImage("assets/Settings.png");

  pokeballwithinparty = loadImage("assets/Pokeball withing party.jpg.png");
  playercard = loadImage("assets/Trainer Card.png");
  femaletrainercardsprite = loadImage("assets/Female Sprites/Trainer Card Sprite Female.png");
  maletrainercardsprite = loadImage("assets/Male Sprites/Trainer Card Sprite Male.png");
  
  gamebackground = loadImage("assets/Pokemon Background.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(gamebackground);
}

function draw() {
  background(gamebackground);
  iswalking();
  isfading();
  menudisplay();
  if (sidemenuchoice.length > 0) {
    insidemenu();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
  if (keyCode === SHIFT) {
    sidemenu = !sidemenu;
  }
  if (keyCode === DOWN_ARROW && sidemenu === true) {
    if (menuchoice >= 5) {
      menuchoice = 0;
    }
    else {
      menuchoice++;
    }
  }
  if (keyCode === UP_ARROW && sidemenu === true) {
    if (menuchoice <= 0) {
      menuchoice = 5;
    }
    else {
      menuchoice--;
    }
  }
  if (keyCode === ENTER && sidemenu === true) {
    if (menuchoice === 0) { // POKEDEX
      sidemenuchoice = "Pokedex";
    }
    else if (menuchoice === 1) { // POKEMON
      sidemenuchoice = "Pokemon";
    }
    else if (menuchoice === 2) { // BAG
      sidemenuchoice = "Bag";
    }
    else if (menuchoice === 3) { // TRAINER CARD
      sidemenuchoice = "Trainer Card";
    }
    else if (menuchoice === 4) { // SAVE
      sidemenuchoice = "Save";
    }
    else if (menuchoice === 5) { // OPTIONS
      sidemenuchoice = "Options";
    }
  }
  if (keyCode === BACKSPACE && insidesidemenu === true) {
    sidemenuchoice = "";
    insidesidemenu = false;
    sidemenu = true;
  }
  if (keyCode === UP_ARROW && insidesidemenu === true && sidemenuchoice === "Pokemon") {
    if (partyslot === 0) {
      partyslot = 4;
    }
    else {
      partyslot -= 2;
    }
  }
  if (keyCode === DOWN_ARROW && insidesidemenu === true && sidemenuchoice === "Pokemon") {
    if (partyslot === 4) {
      partyslot = 0;
    }
    else {
      partyslot += 2;
    }
  }
  if (keyCode === LEFT_ARROW && insidesidemenu === true && sidemenuchoice === "Pokemon") {
    if (partyslot % 2 !== 0) {
      partyslot--;
    }
    else {
      partyslot++;
    }
  }
  if (keyCode === RIGHT_ARROW && insidesidemenu === true && sidemenuchoice === "Pokemon") {
    if (partyslot % 2 !== 0) {
      partyslot--;
    }
    else {
      partyslot++;
    }
  }
}

function keyTyped(){
  if (sidemenu === false) {
    if (key === " "){
      walking = !walking;
    }
    if (key === "h") {
      fading = !fading;
    }
  }
}

// WALKING & RUNNING
function iswalking(){
  if (sidemenu === false) {
    if (keyIsDown(LEFT_ARROW)) {
      if (walking === true) {
        //CODE TO WALK LEFT
        print("walkleft");
      }
      else {
        //CODE TO RUN LEFT;
        print("runleft");
      }
    }
    else if (keyIsDown(RIGHT_ARROW)) {
      if (walking === true) {
        //CODE TO WALK RIGHT
        print("walkright");
      }
      else {
        //CODE TO RUN RIGHT;
        print("runright");
      }
    }
    else if (keyIsDown(UP_ARROW)) {
      if (walking === true) {
        //CODE TO WALK UP;
        print("walkup");
      }
      else {
        //CODE TO RUN UP;
        print("runup");
      }
    }
    else if (keyIsDown(DOWN_ARROW)) {
      if (walking === true) {
        //CODE TO WALK DOWN;
        print("walkdown");
      }
      else {
        //CODE TO RUN DOWN;
        print("rundown");
      }
    }
    else {
      //RUN IDLE ANIMATION;
      print("idleanimation");
    }
  }
}

// FADING
function isfading() {
  if (fading === true) {
    fill(0, fadeopacity);
    rect(0, 0, width, height);
    fadeopacity += 5;
  }
  else {
    if (fadeopacity > 0) {
      fill(0, fadeopacity);
      rect(0, 0, width, height);
      fadeopacity -= 7;
    }
  }
}

// SIDE MENU
function menudisplay() {
  strokeWeight(1);
  if (sidemenu === true) {
    fill(29, 35, 115);
    rect(690, 147.5, 80, 405, 10, 10, 10, 10);
    fill(255);
    noStroke();
    rect(694.25, 150, 75, 400, 10, 10, 10, 10);
    fill(0);
    textFont(myFont);
    image(menupokedex, 705, 162.66);
    image(menupokeball, 705, 229.32);
    image(menubag, 705, 295.98); // -24
    image(menutrainercard, 705, 362.64);
    image(menusave, 705, 429.3);
    image(menuoptions, 705, 495.96);
    strokeWeight(2);
    stroke(210, 116, 22);
    noFill();
    if (menuchoice === 0) { // POKEDEX
      rect(694.25, 150, 75, 66.66, 10, 10, 10, 10);
    }
    else if (menuchoice === 1) { // POKEMON
      rect(694.25, 216.66, 75, 66.66, 10, 10, 10, 10);
    }
    else if (menuchoice === 2) { // BAG
      rect(694.25, 283.32, 75, 66.66, 10, 10, 10, 10);
    }
    else if (menuchoice === 3) { // TRAINER CARD
      rect(694.25, 349.98, 75, 66.66, 10, 10, 10, 10);
    }
    else if (menuchoice === 4) { // SAVE
      rect(694.25, 416.64, 75, 66.66, 10, 10, 10, 10);
    }
    else if (menuchoice === 5) { // OPTIONS
      rect(694.25, 483.3, 75, 66.66, 10, 10, 10, 10);
    }
  }
  else {
    noFill();
    noStroke();
  }
}

// INSIDE THE SIDE MENU
function insidemenu() {
  insidesidemenu = true;
  if (sidemenuchoice === "Pokedex") {
    insidesidemenubackground();
    textSize(32);
    text("Pokedex", 30, 30);
  }
  else if (sidemenuchoice === "Pokemon") {
    party();
  }
  else if (sidemenuchoice === "Bag") {
    insidesidemenubackground();
    textSize(32);
    text("Bag", 30, 30);
  }
  else if (sidemenuchoice === "Trainer Card") {
    trainercard();
  }
  else if (sidemenuchoice === "Save") {
    insidesidemenubackground();
    textSize(32);
    text("Save", 30, 30);
  }
  else if (sidemenuchoice === "Options") {
    insidesidemenubackground();
    textSize(32);
    text("Options", 30, 30);
  }
}

function insidesidemenubackground() {
  noStroke();
  for (let i = 0; i <= height; i += 2.5) {
    if (menuchoicebackground === true) {
      fill(255);
    }
    else {
      fill (191, 165, 167);
    }
    rect(0, i, width, i + 2.5);
    menuchoicebackground = !menuchoicebackground;
  }
  menuchoicebackground = true;
}

function party() {
  insidesidemenubackground();
  fill(14, 52, 95);
  rect(25, 50, 300, 200, 20, 0, 0, 0); // TOP LEFT
  rect(400, 50, 300, 200, 20, 0, 0, 0); // TOP RIGHT
  rect(25, 275, 300, 200, 20, 0, 0, 0); // MIDDLE LEFT
  rect(400, 275, 300, 200, 20, 0, 0, 0); // MIDDLE RIGHT
  rect(25, 500, 300, 200, 20, 0, 0, 0); // BOTTOM LEFT
  rect(400, 500, 300, 200, 20, 0, 0, 0); // BOTTOM RIGHT
  image(pokeballwithinparty, 25, 50);
  image(pokeballwithinparty, 400, 50);
  image(pokeballwithinparty, 25, 275);
  image(pokeballwithinparty, 400, 275);
  image(pokeballwithinparty, 25, 500);
  image(pokeballwithinparty, 400, 500);
  strokeWeight(3);
  stroke(210, 116, 22);
  noFill();
  if (partyslot === 0) {
    rect(25, 50, 300, 200, 20, 0, 0, 0);
  }
  else if (partyslot === 1) {
    rect(400, 50, 300, 200, 20, 0, 0, 0);
  }
  else if (partyslot === 2) {
    rect(25, 275, 300, 200, 20, 0, 0, 0);
  }
  else if (partyslot === 3) {
    rect(400, 275, 300, 200, 20, 0, 0, 0);
  }
  else if (partyslot === 4) {
    rect(25, 500, 300, 200, 20, 0, 0, 0);
  }
  else if (partyslot === 5) {
    rect(400, 500, 300, 200, 20, 0, 0, 0);
  }
}

function trainercard() {
  insidesidemenubackground();
  image(playercard, 0, 0);
}