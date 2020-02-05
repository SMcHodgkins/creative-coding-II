var circles = [];

function setup() {
  createCanvas(800, 800);
  for (let i = 0; i < random(80, 200); i++) {
    circles.push(new myCircle(random(75, 300), random(75, 300), random(75, 100), random(255), random(255), random(255), 50));
  }
}

function draw() {
  background(220);
  for (var i = 0; i < circles.length; i++) {
    circles[i].display();
    circles[i].move();
    circles[i].sticky();
  }
}

class myCircle {
  constructor(x, y, diameter, red, green, blue, opacity) {
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.opacity = opacity;
    this.speed = random(5, 30);
    this.speedy = random(5, 30);
    this.bounceCount = 0;
  }
  move() {
    this.x = this.x + this.speed;
    this.y = this.y + this.speedy;
    if (this.x > width - (this.diameter / 2) || this.x < 0 + (this.diameter / 2)) {
      this.speed = this.speed * -1;
      this.bounceCount = this.bounceCount + 1;
    }
    if (this.y > height - (this.diameter / 2) || this.y < 0 + (this.diameter / 2)) {
      this.speedy = this.speedy * -1;
      this.bounceCount = this.bounceCount + 1;
    }
  }
  display() {
    fill(this.red, this.green, this.blue, this.opacity);
    circle(this.x, this.y, this.diameter);
  }
  sticky() {
    if (this.bounceCount >= 10) {
      this.speed = 0;
      this.speedy = 0;
      this.diameter = this.diameter + 5;
      if (this.diameter > 1000) {
        this.diameter = 100
      }
    }
  }
}
