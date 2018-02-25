var bubbles = [];

function setup() {
  createCanvas(600,400);
}

function mouseDragged() {
  bubbles.push(new Bubble(mouseX, mouseY));
}

function draw() {
  background(0);
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
    if (bubbles.length > 50) {
      bubbles.splice(0,1);
    }
  }
}

function Bubble(x, y) {
  this.x = x;
  this.y = y;

  this.display = function() {
    stroke(255);
    fill(color(0,0,255));
    ellipse(this.x, this.y, 24, 24);
  }

  this.move = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }
}