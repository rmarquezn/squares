let et = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  noFill();
  rectMode(CENTER);
  drawRect(width / 2, height / 2, 600);
  drawRect(width / 2 - (mouseX % width) / 4, height / 2, 400);
  drawRect(width / 2 + (mouseX % width) / 4, height / 2, 200);
  et++;
}

function drawRect(x, y, size) {
  for (let i = 0; i < size; i += 12) {
    stroke(255, 0, (et % (size * 2)) % 255, i);
    rect(x, y, i + (et % size));
  }
}
