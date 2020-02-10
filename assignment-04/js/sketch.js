var character;
var frames = [];
var idle = [];

function addImages(data){
  idle = data;
  var data = "";

  for (var i = 0; i<idle.length; i++){
    character = loadImage(idle[i]);
    console.log('assets/' + idle[i])
    frames[i] = character;
  }
}

/*function preload() {
  loadStrings('img/assets/idle.txt', addImages);
}*/

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0,0,0);

}
