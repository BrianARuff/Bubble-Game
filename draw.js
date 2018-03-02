var bubbles = [];

function setup() {
  if (windowWidth > 796 && windowHeight > 900) {
    createCanvas(windowWidth-15, windowHeight);
  } else {
    createCanvas(windowWidth-15, windowHeight);
  }
}

function mouseDragged() {
  bubbles.push(new Bubble(mouseX, mouseY));
}

function draw() {
  background(0);
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
    if (bubbles.length > 1000) {
      bubbles.splice(0,1);
    }
  }
}

function Bubble(x, y) {
  this.x = x;
  this.y = y;

  this.display = function() {
    stroke(random(0,255));
    fill(color(random(0,255),(0,255),(0,255) ));
    ellipse(this.x, this.y, 24, 24);
  }

  this.move = function() {
    this.x = this.x + random(-10, 10);
    this.y = this.y + random(-10, 10);
  }
}