var cat;
var pics = [];
var i = 0;
var x = 0;
var hit = false;
let result = [];

function addImages(data) {
  result = data;
  var data = "";

  for (var i = 0; i < result.length; i++) {
    cat = loadImage(result[i]);
    console.log('assets/' + result[i])
    pics[i] = cat;
  }
}

function preload() {
  loadStrings('assets/Idle.txt', addImages);
}

function setup() {
  createCanvas(641, 542);
}

function draw() {
  background(120);
  square(500, 100, 20);
  image(pics[i], x, 0);
  pics[i].resize(320, 271);
  var hit = collideRectRect(x, 0, pics[i].width, pics[i].height, 500, 100, 20, 20);
  print("hit: " + hit);
  i += 1;
  if (keyIsDown(LEFT_ARROW))
  {
    x -= 5;
  } else if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
  }
  if (i >= pics.length) {
    i = 0;
  }
}
