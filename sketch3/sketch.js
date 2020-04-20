var zoff = 0;
var scl = 10;
var cols, rows;
var particles = [];
var flowfield = [];

function setup(){
   let cnv = createCanvas(640, 480);
   cols = floor(width / scl);
   rows = floor(height / scl);

   flowfield = new Array(cols * rows);

   for (var i = 0; i < 400; i++) {
     particles[i] = new Particle();
   }
   background(255);
}

function draw(){
  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      // Creating angle from noise
      var angle = noise(xoff, yoff, zoff) * TWO_PI;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(0.5);

      // Storing vector in array
      var index = x + y * cols;
      flowfield[index] = v;

      // Drawing vectors
      // strokeWeight(1);
      // stroke(0, 50);
      // push();
      // translate(x * scl, y * scl);
      // rotate(v.heading());
      // line(0, 0, scl, 0);
      // pop();

      xoff += 0.1;
    }
    yoff += 0.1;
  }

  for (var i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.follow(flowfield);
    p.update();
    p.show();
    p.edges();
  }

  zoff += 0.01;
}
