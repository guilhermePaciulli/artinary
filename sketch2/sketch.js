var xoff = 0.0;
// var xoff2 = 10000.0;

var inc = 0.01;
var zoff = 0;

function setup(){
   let cnv = createCanvas(640, 480);
   noStroke();
   pixelDensity(1);
}

function draw(){
  background(0);
  var yoff = 0;
  loadPixels();
  for (var j = 0; j < height; j++) {
    var xoff = 0;
    for (var i = 0; i < width; i++) {
      var index = (i + j * width) * 4;
      var r = noise(xoff, yoff, zoff) * 255;
      pixels[index + 0] = r; // red
      pixels[index + 1] = r / 2; // green
      pixels[index + 2] = r / 3; // blue
      pixels[index + 3] = 255; // alpha
      xoff += inc;
    }
    yoff += inc;
  }
  zoff += 0.05;
  updatePixels();
}
