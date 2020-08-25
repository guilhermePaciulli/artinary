
function setup() {
  createCanvas(1080, 720);
  stroke(0);
  strokeWeight(3);
  background(255);
  // frameRate(5);
}

var xoff = 0;
var yoff = 10000;
var inc = 0.1;
var lastX = 0;
var lastY = 0;

function draw() {
  // const x = random() * width;
  // const y = random() * height;

  const x = noise(xoff) * width;
  const y = noise(yoff) * height;


  stroke(random(255), random(255), random(255));
  line(x, y, lastX, lastY);
  lastX = x;
  lastY = y;

  xoff += inc;
  yoff += inc;
}
