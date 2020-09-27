const STEP = 1;

function setup() {
  createCanvas(500, 500);
  noStroke();
  frameRate(1);
}

var xoff = 0;
var yoff = 10000;
var zoff = 1000;
var inc = 0.1;
var lastX = 0;
var lastY = 0;

function draw() {
  background(0);
  for (let x = 0; x < width; x = x + STEP) {
    for (let y = 0; y < height; y = y + STEP) {
      let col = 0;
      if(x > width / 2) {
        col = random();
      } else {
        col = noise(xoff, yoff);
      }
      fill(col * 255);
      square(x, y, STEP, STEP);
      xoff += inc;
      yoff += inc;
      zoff += inc;
    }
  }
  noLoop();
}
