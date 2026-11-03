let tearanimation = 0;
let mouthanimation = 0;
let direc = 1;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(240);

  // Drawing a face
  fill(255, 204, 0);
  stroke(0);
  strokeWeight(4);
  square(100, 100, 300);

  // Drawing the eyebrows
  line(160 , 170 , 210, 150);
  line(290 , 150 , 340, 170);

  // Drawing the eyes
  noFill();
  arc(180, 220, 50, 30, PI, TWO_PI);
  arc(320, 220, 50, 30, PI, TWO_PI);

  // Drawing the nose
  fill(255, 204, 0);
  stroke(0);
  circle(250, 250, 30);

  // Drawing the Mouth
  fill(150, 0, 0);
  stroke(0);
  arc(250, 290 + mouthanimation, 140, 100, 0, PI, CHORD);

  // Drawing the tears
  fill(100, 180, 255);
  stroke(0);
  ellipse(145, 245 + tearanimation, 20, 35);
  ellipse(355, 245 + tearanimation, 20, 35);

  // Drawing the teeth
  fill(255);
  stroke(0);
  rect(210, 290 + mouthanimation, 30, 20);
  rect(260, 290 + mouthanimation, 30, 20);

  // Freckles
  fill(0);
  noStroke();
  circle(175, 255, 4);
  circle(185, 265, 4);
  circle(170, 275, 4);
  circle(325, 255, 4);
  circle(315, 265, 4);
  circle(330, 275, 4);

  // Animate the mouth and tears
  tearanimation += 2;
  if (tearanimation > 80) {
    tearanimation = 0;
  }

  mouthanimation += 0.5 * direc;
  if (mouthanimation > 15 || mouthanimation < -15) {
    direc *= -1;
  }
}