const VERTICAL = 0;
const HORIZONTAL = 1;

var amp;
var freq;

var waves = [];

var xoff = 0.0;

let osc;
let monoSynth;

function setup() {
  userStartAudio();
  createCanvas(500, 500);
  noFill();
  strokeWeight(1);

  // Values setup
  amp = height / 10;
  freq = 30 / width;

  // Creating waves
  createWave(0, HORIZONTAL);
  createWave(height / 4, HORIZONTAL);
  createWave(height / 2, HORIZONTAL);
  createWave(3 * height / 4, HORIZONTAL);
  createWave(height, HORIZONTAL);
  createWave(0, VERTICAL);
  createWave(height / 4, VERTICAL);
  createWave(height / 2, VERTICAL);
  createWave(3 * height / 4, VERTICAL);
  createWave(height, VERTICAL);

  monoSynth = new p5.MonoSynth();
}

function draw() {
  background(0);
  monoSynth.triggerRelease();

  for (var i = 0; i < waves.length; i++) { updateWave(i); }

  n = noise(xoff)
  // Variating frequency
  noisedFreq = map(n, 0, 1, -200 / width, 200 / width);
  freq = noisedFreq;
  // Variating amplitude
  noisedAmp = map(n, 0, 1, 0, height / 5);
  amp = noisedAmp;

  let soundFreq = map(n, 0, 1, 0, 1000);
  monoSynth.play(soundFreq, 1, 0, 1/100);

  xoff += 0.01;

}

function createWave(pos, dir) {
  waves.push([0, 0, pos, dir]);
}

function updateWave(index) {
  var pos = waves[index][2]
  var dir = waves[index][3]
  stroke(255, 255, 0);
  beginShape();
  for (var i = 0; i < width; i++) {
    let x = i;
    let y = sin((i + waves[index][0]) * freq);
    if (dir == HORIZONTAL) {
      vertex(x, y * amp + pos);
    } else {
      vertex(y * amp + pos, x);
    }
    waves[index][0] += 0.001;
  }
  endShape();
  stroke(0, 255, 255);
  beginShape();
  for (var i = 0; i < width; i++) {
    let x = i;
    let y = -1 * sin((i + waves[index][1]) * freq);
    if (dir == HORIZONTAL) {
      vertex(x, y * amp + pos);
    } else {
      vertex(y * amp + pos, x);
    }
    waves[index][1] += 0.001;
  }
  endShape();
}
