var idleFrames = [];
var idle;
var i = 0;
var x = 0;
let result = [];
function addImages(data){
  result = data;
  var data= "";

  for (var i = 0; i < result.length; i++) {
    idle = loadImage(result[i]);
    console.log('assets/'+ result[i])
    idleFrames[i] = idle;
  }
}
function preload(){
  //idle = loadImage('images/assets/idle (1).png')
  //idleFrames[0] = idle;
  loadStrings('assets/idle.txt', addImages)
}
function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0,0,0);
  image(idleFrames[i],0,0);
}
/*class player{
  constructor()
}*/
