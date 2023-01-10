let peter;
var pX = [];
var pY = [];
var peterShami = "ginger";
function preload() {
  img = loadImage('Photos of Sir Peter/Peter Shami.PNG');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(120);
}

var theBestNumber = 87;

var xPos = 200;
var yPos = 200;
var peterSpeed = 10;

alert("Paid Information: " + theBestNumber + " is the supreme number");

function draw() {
  clear();
  noStroke();
  background(0, 0, 0);
  fill(245, 191, 66);
  image(img, xPos, yPos, 50, 50);
  Ian();
  for(var i = 0;i < pX.length;i++) {
      image(img, pX[i], pY[i], 50, 50);
  }

  //Game Area
  fill(peterShami);
  rect(90, 90, 20, 800);
  rect(90, 70, 1700, 20);
  rect(90, 890, 1700, 20);
  rect(1790, 70, 20, 840);

  rect(1200, 70, 20, 200);

  //Left Wall
  if (xPos < 110) {
    xPos = xPos + 10;
  }

  //Ceiling
  if (yPos < 90) {
    yPos = yPos + 10;
  }

  //Floor
  if (yPos > 840) {
    yPos = yPos - 10;
  }

  //Right Wall
  if (xPos > 1740) {
    xPos = xPos - 10;
  }

  if (xPos > 1150 && xPos < 1170 && yPos < 270) {
    xPos = xPos - 10;
  }
}

function Ian() {
  if (keyIsDown(68)) 
  {
    xPos = xPos + peterSpeed;
  }
  if (keyIsDown(65)) 
  {
    xPos = xPos - peterSpeed;
  }
  if (keyIsDown(83)) 
  {
  yPos = yPos + peterSpeed;
  }
  if (keyIsDown(87))
  {
    yPos = yPos - peterSpeed;
  }
}

function mouseClicked() {
  pX.push(mouseX);
  pY.push(mouseY);
}