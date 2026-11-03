let TheText = ["Success", "is", "not", "final", "failure", "is", "not", "fatal", "it", "is", "the", "courage", "to", "continue", "that", "counts"];
let i = 0;

function setup() {
  createCanvas(500, 500);
  frameRate(2);
}

function draw() {
  background(220);

  // Creating random x, y postions, sizes, colour and fonts
  let x = random(20, width - 100);
  let y = random(50, height - 20);
  textSize(random(20, 60));
  let styles = [NORMAL, ITALIC, BOLD, BOLDITALIC];
  textStyle(random(styles));
  fill(random(255), random(255), random(255));

  // Text display
  text(TheText[i], x, y);
  i = i + 1;
  if (i > TheText.length) {
    i = 0;
    background(220);
  }
  console.log(i);
}