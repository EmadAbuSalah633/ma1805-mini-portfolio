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
  line(160, 170, 210, 150);
  line(290, 150, 340, 170);

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
  arc(250, 290, 140, 100, 0, PI, CHORD);

  // Drawing the tears
  fill(100, 180, 255);
  stroke(0);
  ellipse(145, 245, 20, 35);
  ellipse(355, 245, 20, 35);

  // Drawing the teeth
  fill(255);
  stroke(0);
  rect(210, 290, 30, 20);
  rect(260, 290, 30, 20);

  // Freckles
  fill(0);
  noStroke();
  circle(175, 255, 4);
  circle(185, 265, 4);
  circle(170, 275, 4);
  circle(325, 255, 4);
  circle(315, 265, 4);
  circle(330, 275, 4);
}