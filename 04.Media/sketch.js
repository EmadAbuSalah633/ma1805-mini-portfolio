let img;
let audio;

function preload() {
  img = loadImage('Image.jpg');
  audio = loadSound('hahaha-Peter_De_Lang-1639076107.wav');
}

function setup() {
  createCanvas(800, 800);

  if (!audio.isPlaying()) {
    audio.loop();
  }
}

function draw() {
  background(220);

  image(img, 0, 0, width, height);
}