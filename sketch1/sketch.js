let mic, fft;
let running = false;

function setup(){
   let cnv = createCanvas(1024, 600);
   cnv.mousePressed(userStartAudio);
   setupAudio();
   noFill();
   background(0);
}

function draw(){
  if (!running) { return; }
  let spectrum = fft.analyze();

  let bass = fft.getEnergy("bass");
  let lowMid = fft.getEnergy("lowMid");
  let mid = fft.getEnergy("mid");
  let highMid = fft.getEnergy("highMid");
  let treble = fft.getEnergy("treble");

  let energies = [bass, lowMid, mid, highMid, treble];
  background(bass, mid, treble);

  stroke(255, 255, 0);
  beginShape();
  curveVertex(0, height);
  curveVertex(0, height);
  for (var i = 0; i < energies.length; i++) {
    var freq = energies[i];
    var x = map(i + 1, 0, energies.length + 1, 0, width);
    var y = map(freq, 0, 255, height, 0);
    curveVertex(x, y);
  }
  curveVertex(width, height);
  curveVertex(width, height);
  endShape();

  stroke(255, 255, 0);
  beginShape();
  curveVertex(0, 0);
  curveVertex(0, 0);
  for (var i = 0; i < energies.length; i++) {
    var freq = energies[i];
    var x = map(i + 1, 0, energies.length + 1, 0, width);
    var y = map(freq, 0, 255, 0, height);
    curveVertex(x, y);
  }
  curveVertex(width, 0);
  curveVertex(width, 0);
  endShape();
}

function setupAudio() {
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
}

function keyPressed() {
  if (keyCode === ENTER) {
    if (running) {
      mic.stop();
    } else {
      mic.start();
    }
    running = !running;
  }
}
