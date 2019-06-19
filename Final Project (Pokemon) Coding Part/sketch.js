// Final Project (Pokemon)
// Brittney Mines
// May 28, 2019
//
// Extra for Experts:
// I incorporated my Computer Science final and my Digital 
// Media final into one game with both graphics, sound 
// effects, and (in my opinion) good coding

let topoftunnel;

let wildbattlemusic, gymmusic, walkingaroundmusic;

let departmentstoreHitbox, departmentstorePicture;
let departmentstoreleftHitbox, departmentstoreleftPicture;
let departmentstorerightHitbox, departmentstorerightPicture;
let departmentstoresignHitbox, departmentstoresignPicture;

let playerhouseleftHitbox, playerhouseleftPicture;
let playerhouserightHitbox, playerhouserightPicture;
let playerhousemiddleHitbox, playerhousemiddlePicture;
let characterHitbox, characterHitboxPicture;

let playerx, playery;
let lastdirection = "";
let femaleidledown, femaleidleup, femaleidleright, femaleidleleft;
let maleidledown, maleidleup, maleidleright, maleidleleft;
let startscreen = true;
let malebutton, femalebutton;
let chosengender = "";
let input, button, chosenname;
let gamebackground;
let partybackground = true;
let femalebattle, femalehealinggive, femalehealingtake, femalerunningup, femalerunningdown, femalerunningleft, femalerunningright, femalesaving, femalewalkingup, femalewalkingdown, femalewalkingright, femalewalkingleft;
let malebattle, malehealinggive, malehealingtake, malerunningup, malerunningdown, malerunningleft, malerunningright, malesaving, malewalkingup, malewalkingdown, malewalkingleft, malewalkingright;
let femaletrainercardsprite;
let maletrainercardsprite;
let bbb, bfb, bpb, brb;
let blank, bug, dark, dragon, electric, fighting, fire, flying, ghost, grass, ground, ice, normal, poison, psychic, rock, steel, water;

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
  // wildbattlemusic = loadSound("assets/Pokemon Wild Battle.mp3");
  // gymmusic = loadSound("assets/Pokemon Gym.mp3");
  //walkingaroundmusic = loadSound("assets/")

  myFont = loadFont("assets/pixeled.ttf");
  gamebackground = loadImage("assets/Pokemon Background.png");
  topoftunnel = loadImage("assets/Tunnel Top.png");

  // FOR HITBOXES
  departmentstorePicture = loadImage("assets/Hitboxes/Done/Department Store.png");
  departmentstoreleftPicture = loadImage("assets/Hitboxes/Done/Department Store Left.png");
  departmentstorerightPicture = loadImage("assets/Hitboxes/Done/Department Store Right.png");
  departmentstoresignPicture = loadImage("assets/Hitboxes/Done/Department Store Sign.png");
  playerhouseleftPicture = loadImage("assets/Hitboxes/Done/Player House Left.png");
  playerhousemiddlePicture = loadImage("assets/Hitboxes/Done/Player House Middle.png");
  playerhouserightPicture = loadImage("assets/Hitboxes/Done/Player House Right.png");
  characterHitboxPicture = loadImage("assets/Hitboxes/Done/Character Hitbox.png");

  // FOR FEMALE SPRITES
  femalebattle = loadAnimation("assets/Female Sprites/Female Battle/Female Throw 1.png", "assets/Female Sprites/Female Battle/Female Throw 5.png");
  femalehealinggive = loadAnimation("assets/Female Sprites/Female Healing/Female Healing 1.png", "assets/Female Sprites/Female Healing/Female Healing 6.png");
  femalehealingtake = loadAnimation("assets/Female Sprites/Female Healing/Female Healing 6.png", "assets/Female Sprites/Female Healing/Female Healing 1.png");
  femalesaving = loadAnimation("assets/Female Sprites/Female Saving/Female Saving 1.png", "assets/Female Sprites/Female Saving/Female Saving 2.png");

  femalerunningdown = loadAnimation("assets/Female Sprites/Female Running/Female Running 1.png", "assets/Female Sprites/Female Running/Female Running 2.png", "assets/Female Sprites/Female Running/Female Running 1.png", "assets/Female Sprites/Female Running/Female Running 3.png");
  femalerunningup = loadAnimation("assets/Female Sprites/Female Running/Female Running 7.png", "assets/Female Sprites/Female Running/Female Running 8.png", "assets/Female Sprites/Female Running/Female Running 7.png", "assets/Female Sprites/Female Running/Female Running 9.png");
  femalerunningright = loadAnimation("assets/Female Sprites/Female Running/Female Running 4.png", "assets/Female Sprites/Female Running/Female Running 5.png", "assets/Female Sprites/Female Running/Female Running 4.png", "assets/Female Sprites/Female Running/Female Running 6.png");
  femalerunningleft = loadAnimation("assets/Female Sprites/Female Running/Female Running 10.png", "assets/Female Sprites/Female Running/Female Running 11.png", "assets/Female Sprites/Female Running/Female Running 10.png", "assets/Female Sprites/Female Running/Female Running 12.png");

  femalewalkingdown = loadAnimation("assets/Female Sprites/Female Walking/Female Walking 1.png", "assets/Female Sprites/Female Walking/Female Walking 2.png", "assets/Female Sprites/Female Walking/Female Walking 1.png", "assets/Female Sprites/Female Walking/Female Walking 3.png");
  femalewalkingup = loadAnimation("assets/Female Sprites/Female Walking/Female Walking 7.png", "assets/Female Sprites/Female Walking/Female Walking 8.png", "assets/Female Sprites/Female Walking/Female Walking 7.png", "assets/Female Sprites/Female Walking/Female Walking 9.png");
  femalewalkingright = loadAnimation("assets/Female Sprites/Female Walking/Female Walking 4.png", "assets/Female Sprites/Female Walking/Female Walking 5.png", "assets/Female Sprites/Female Walking/Female Walking 4.png", "assets/Female Sprites/Female Walking/Female Walking 6.png");
  femalewalkingleft = loadAnimation("assets/Female Sprites/Female Walking/Female Walking 10.png", "assets/Female Sprites/Female Walking/Female Walking 11.png", "assets/Female Sprites/Female Walking/Female Walking 10.png", "assets/Female Sprites/Female Walking/Female Walking 12.png");

  femaleidledown = loadImage("assets/Female Sprites/Female Walking/Female Walking 1.png");
  femaleidleright = loadImage("assets/Female Sprites/Female Walking/Female Walking 4.png");
  femaleidleup = loadImage("assets/Female Sprites/Female Walking/Female Walking 7.png");
  femaleidleleft = loadImage("assets/Female Sprites/Female Walking/Female Walking 10.png");

  // FOR MALE SPRITES
  malebattle = loadAnimation("assets/Male Sprites/Male Battle/Male Throw 1.png", "assets/Male Sprites/Male Battle/Male Throw 5.png");
  malehealinggive = loadAnimation("assets/Male Sprites/Male Healing/Male Healing 1.png", "assets/Male Sprites/Male Healing/Male Healing 6.png");
  malehealingtake = loadAnimation("assets/Male Sprites/Male Healing/Male Healing 6.png", "assets/Male Sprites/Male Healing/Male Healing 1.png");
  malesaving = loadAnimation("assets/Male Sprites/Male Saving/Male Saving 1.png", "assets/Male Sprites/Male Saving/Male Saving 2.png");

  malerunningdown = loadAnimation("assets/Male Sprites/Male Running/Male Running 1.png", "assets/Male Sprites/Male Running/Male Running 2.png", "assets/Male Sprites/Male Running/Male Running 1.png", "assets/Male Sprites/Male Running/Male Running 3.png");
  malerunningup = loadAnimation("assets/Male Sprites/Male Running/Male Running 7.png", "assets/Male Sprites/Male Running/Male Running 8.png", "assets/Male Sprites/Male Running/Male Running 7.png", "assets/Male Sprites/Male Running/Male Running 9.png");
  malerunningright = loadAnimation("assets/Male Sprites/Male Running/Male Running 4.png", "assets/Male Sprites/Male Running/Male Running 5.png", "assets/Male Sprites/Male Running/Male Running 4.png", "assets/Male Sprites/Male Running/Male Running 6.png");
  malerunningleft = loadAnimation("assets/Male Sprites/Male Running/Male Running 10.png", "assets/Male Sprites/Male Running/Male Running 11.png", "assets/Male Sprites/Male Running/Male Running 10.png", "assets/Male Sprites/Male Running/Male Running 12.png");

  malewalkingdown = loadAnimation("assets/Male Sprites/Male Walking/Male Walking 1.png", "assets/Male Sprites/Male Walking/Male Walking 2.png", "assets/Male Sprites/Male Walking/Male Walking 1.png", "assets/Male Sprites/Male Walking/Male Walking 3.png");
  malewalkingup = loadAnimation("assets/Male Sprites/Male Walking/Male Walking 7.png", "assets/Male Sprites/Male Walking/Male Walking 8.png", "assets/Male Sprites/Male Walking/Male Walking 7.png", "assets/Male Sprites/Male Walking/Male Walking 9.png");
  malewalkingright = loadAnimation("assets/Male Sprites/Male Walking/Male Walking 4.png", "assets/Male Sprites/Male Walking/Male Walking 5.png", "assets/Male Sprites/Male Walking/Male Walking 4.png", "assets/Male Sprites/Male Walking/Male Walking 6.png");
  malewalkingleft = loadAnimation("assets/Male Sprites/Male Walking/Male Walking 10.png", "assets/Male Sprites/Male Walking/Male Walking 11.png", "assets/Male Sprites/Male Walking/Male Walking 10.png", "assets/Male Sprites/Male Walking/Male Walking 12.png");

  maleidledown = loadImage("assets/Male Sprites/Male Walking/Male Walking 1.png");
  maleidleup = loadImage("assets/Male Sprites/Male Walking/Male Walking 7.png");
  maleidleright = loadImage("assets/Male Sprites/Male Walking/Male Walking 4.png");
  maleidleleft = loadImage("assets/Male Sprites/Male Walking/Male Walking 10.png");

  // FOR MENU SPRITES
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

  // FOR BATTLE SPRITES
  bbb = loadImage("assets/Battle Stuff/Battle Bag Button.png");
  bfb = loadImage("assets/Battle Stuff/Battle Fight Button.png");
  brb = loadImage("assets/Battle Stuff/Battle Run Button.png");
  bpb = loadImage("assets/Battle Stuff/Battle Pokemon Button.png");

  // MOVE TYPES
  blank = loadImage("assets/Battle Stuff/Typed Moves/Blank.png");
  bug = loadImage("assets/Battle Stuff/Typed Moves/Bug.png");
  dark = loadImage("assets/Battle Stuff/Typed Moves/Dark.png");
  dragon = loadImage("assets/Battle Stuff/Typed Moves/Dragon.png");
  electric = loadImage("assets/Battle Stuff/Typed Moves/Electric.png");
  fighting = loadImage("assets/Battle Stuff/Typed Moves/Fighting.png");
  fire = loadImage("assets/Battle Stuff/Typed Moves/Fire.png");
  flying = loadImage("assets/Battle Stuff/Typed Moves/Flying.png");
  ghost = loadImage("assets/Battle Stuff/Typed Moves/Ghost.png");
  grass = loadImage("assets/Battle Stuff/Typed Moves/Grass.png");
  ground = loadImage("assets/Battle Stuff/Typed Moves/Ground.png");
  ice = loadImage("assets/Battle Stuff/Typed Moves/Ice.png");
  normal = loadImage("assets/Battle Stuff/Typed Moves/Normal.png");
  poison = loadImage("assets/Battle Stuff/Typed Moves/Poison.png");
  psychic = loadImage("assets/Battle Stuff/Typed Moves/Psychic.png");
  rock = loadImage("assets/Battle Stuff/Typed Moves/Rock.png");
  steel = loadImage("assets/Battle Stuff/Typed Moves/Steel.png");
  water = loadImage("assets/Battle Stuff/Typed Moves/Water.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);

  femalebutton = new Clickable();
  femalebutton.locate(150, 500);
  femalebutton.resize(250, 100);
  femalebutton.text = "Female?";
  malebutton = new Clickable();
  malebutton.locate(450, 500);
  malebutton.resize(250, 100);
  malebutton.text = "Male?";

  input = createInput();

  playerx = width/2;
  playery = height/2;

  // wildbattlemusic.setVolume(0.5);
  // wildbattlemusic.play();

  // CREATING HITBOXES
  departmentstoreleftHitbox = createSprite(179, 230); // GOOD
  departmentstoreleftHitbox.addImage(departmentstoreleftPicture);
  departmentstoreHitbox = createSprite(195, 185); // GOOD
  departmentstoreHitbox.addImage(departmentstorePicture);
  departmentstorerightHitbox = createSprite(213, 230); // GOOD
  departmentstorerightHitbox.addImage(departmentstorerightPicture);
  playerhouseleftHitbox = createSprite(350, 329); // GOOD
  playerhouseleftHitbox.addImage(playerhouseleftPicture);
  playerhousemiddleHitbox = createSprite(370, 319.5); //  GOOD
  playerhousemiddleHitbox.addImage(playerhousemiddlePicture);
  playerhouserightHitbox = createSprite(391, 328.4); // GOOD
  playerhouserightHitbox.addImage(playerhouserightPicture);
  characterHitbox = createSprite(width/2, height/2); // GOOD
  characterHitbox.addImage(characterHitboxPicture);

  background(128);
}

function draw() {
  characterHitbox.position.x = playerx;
  characterHitbox.position.y = playery;
  if (startscreen === true) {
    if (chosengender === "") {
      textSize(24);
      text("What gender would you like your character to be?", 150, 200);
      femalebutton.draw();
      malebutton.draw();
      femalebutton.onRelease = function(){
        chosengender = "Female";
      };
      malebutton.onRelease = function() {
        chosengender = "Male";
      };
    }
    else {
      startscreen = false;
      
    }
  }
  else {
    
    imageMode(CORNER);
    background(gamebackground);
    imageMode(CENTER);
    iswalking();
    isfading();
    menudisplay();
    if (sidemenuchoice.length > 0) {
      insidemenu();
    }
    imageMode(CENTER);
    image(topoftunnel, 255, 613);
    drawSprites();
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
        if (chosengender === "Female") {
          animation(femalewalkingleft, playerx, playery);
        }
        else {
          animation(malewalkingleft, playerx, playery);
        }
        playerx -= 2;
        if (characterHitbox.collide()) {
          playerx += 2;
        }
      }
      else {
        //CODE TO RUN LEFT;
        if (chosengender === "Female") {
          animation(femalerunningleft, playerx, playery);
        }
        else {
          animation(malerunningleft, playerx, playery);
        }
        playerx -= 4;
        if (characterHitbox.collide()) {
          playerx += 4;
        }
      }
      lastdirection = "Left";
    }
    else if (keyIsDown(RIGHT_ARROW)) {
      if (walking === true) {
        //CODE TO WALK RIGHT
        if (chosengender === "Female") {
          animation(femalewalkingright, playerx, playery);
        }
        else {
          animation(malewalkingright, playerx, playery);
        }
        playerx += 2;
        if (characterHitbox.collide()) {
          playerx -= 2;
        }
      }
      else {
        //CODE TO RUN RIGHT;
        if (chosengender === "Female") {
          animation(femalerunningright, playerx, playery);
        }
        else {
          animation(malerunningright, playerx, playery);
        }
        playerx += 4;
        if (characterHitbox.collide()) {
          playerx -= 4;
        }
      }
      lastdirection = "Right";
    }
    else if (keyIsDown(UP_ARROW)) {
      if (walking === true) {
        //CODE TO WALK UP;
        if (chosengender === "Female") {
          animation(femalewalkingup, playerx, playery);
        }
        else {
          animation(malewalkingup, playerx, playery);
        }
        playery -= 2;
        if (characterHitbox.collide()) {
          playery += 2;
        }
      }
      else {
        //CODE TO RUN UP;
        if (chosengender === "Female") {
          animation(femalerunningup, playerx, playery);
        }
        else {
          animation(malerunningup, playerx, playery);
        }
        playery -= 4;
        if (characterHitbox.collide()) {
          playery += 4;
        }
      }
      lastdirection = "Up";
    }
    else if (keyIsDown(DOWN_ARROW)) {
      if (walking === true) {
        //CODE TO WALK DOWN;
        if (chosengender === "Female") {
          animation(femalewalkingdown, playerx, playery);
        }
        else {
          animation(malewalkingdown, playerx, playery);
        }
        playery += 2;
        if (characterHitbox.collide()) {
          playery -= 2;
        }
      }
      else {
        //CODE TO RUN DOWN;
        if (chosengender === "Female") {
          animation(femalerunningdown, playerx, playery);
        }
        else {
          animation(malerunningdown, playerx, playery);
        }
        playery += 4;
        if (characterHitbox.collide()) {
          playery -= 4;
        }
      }
      lastdirection = "Down";
    }
    else {
      if (chosengender === "Female") {
        if (lastdirection === "Up") {
          image(femaleidleup, playerx, playery);
        }
        else if (lastdirection === "Down" || lastdirection === "") {
          image(femaleidledown, playerx, playery);
        }
        else if (lastdirection === "Left") {
          image(femaleidleleft, playerx, playery);
        }
        else if (lastdirection === "Right") {
          image(femaleidleright, playerx, playery);
        }
      }
      else {
        if (lastdirection === "Up") {
          image(maleidleup, playerx, playery);
        }
        else if (lastdirection === "Down" || lastdirection === "") {
          image(maleidledown, playerx, playery);
        }
        else if (lastdirection === "Left") {
          image(maleidleleft, playerx, playery);
        }
        else if (lastdirection === "Right") {
          image(maleidleright, playerx, playery);
        }
      }
    }
  }
  else {
    if (chosengender === "Female") {
      if (lastdirection === "Up") {
        image(femaleidleup, playerx, playery);
      }
      else if (lastdirection === "Down" || lastdirection === "") {
        image(femaleidledown, playerx, playery);
      }
      else if (lastdirection === "Left") {
        image(femaleidleleft, playerx, playery);
      }
      else if (lastdirection === "Right") {
        image(femaleidleright, playerx, playery);
      }
    }
    else {
      if (lastdirection === "Up") {
        image(maleidleup, playerx, playery);
      }
      else if (lastdirection === "Down" || lastdirection === "") {
        image(maleidledown, playerx, playery);
      }
      else if (lastdirection === "Left") {
        image(maleidleleft, playerx, playery);
      }
      else if (lastdirection === "Right") {
        image(maleidleright, playerx, playery);
      }
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
    imageMode(CORNER);
    fill(29, 35, 115);
    rect(width - 76, height - 619.5, 80, 405, 10, 10, 10, 10);
    fill(255);
    noStroke();
    rect(width - 71.75, height - 617, 75, 400, 10, 10, 10, 10);
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
      rect(width - 71.75, 150, 75, 66.66, 10, 10, 10, 10);
    }
    else if (menuchoice === 1) { // POKEMON
      rect(width - 71.75, 216.66, 75, 66.66, 10, 10, 10, 10);
    }
    else if (menuchoice === 2) { // BAG
      rect(width - 71.75, 283.32, 75, 66.66, 10, 10, 10, 10);
    }
    else if (menuchoice === 3) { // TRAINER CARD
      rect(width - 71.75, 349.98, 75, 66.66, 10, 10, 10, 10);
    }
    else if (menuchoice === 4) { // SAVE
      rect(width - 71.75, 416.64, 75, 66.66, 10, 10, 10, 10);
    }
    else if (menuchoice === 5) { // OPTIONS
      rect(width - 71.75, 483.3, 75, 66.66, 10, 10, 10, 10);
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
  imageMode(CENTER);
  image(playercard, width/2, height/2);
  imageMode(CORNER);
  fill(0);
  textSize(17); // PokeDollars
  text("00001", 250, 260);
  text("Trainer", 500, 257);
  text("June 17, 2019", 400, 530);
}