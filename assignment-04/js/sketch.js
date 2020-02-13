var character;
//var p1 = [];
var idle = [];
var walkArray = [];
var deadArray = [];
let x=0;
let y=200;
let i=0;
let j=0;
let k=0;
var isdead = false;
function addIdle(data){
  for (var i=0; i < data.length; i++) {
    character = loadImage(data[i]);
    console.log('assets/'+ data[i]);
    idle[i] = character;
  }
}

function addWalk(data){
  for (var i =0; i< data.length;i++){
    character = loadImage(data[i]);
    console.log('assets/'+ data[i]);
    walkArray[i] = character;
  }
}

function addDead(data){
  for (var i=0; i< data.length;i++) {
    character = loadImage(data[i]);
    console.log('assets/'+ data[i]);
    deadArray[i] = character;
  }
}
function preload(){
  loadStrings('assets/idle.txt',addIdle)
  loadStrings('assets/walk.txt',addWalk)
  loadStrings('assets/dead.txt',addDead)
}
function setup() {
  createCanvas(800, 800);
  //p1=new classs(0,200);
}

function draw() {
  background(120);
  fill(130);
  rect(0,650,800,200);
  //p1[i].movement();
  if(keyIsDown(RIGHT_ARROW)) {
    image(walkArray[j],x,y);
    x+=7;
  }
  else if (keyIsDown(LEFT_ARROW )){
    image(walkArray[j],x,y);
    x-=7;
  }
  else if  (keyIsDown(32)) {
    image(deadArray[k],x,y);
    isdead = true;
  }
  else {
    image(idle[i], x, y);
  }
  k++;
  i++;
  j++;
  if (i >= idle.length) {
        i = 0;
    }
  if (j>=walkArray.length) {
    j=0;
  }
  if(k>=deadArray.length) {
    k=0;
  }
  /*class classs{
    constructor(x,y){
      this.x = x;
      this.y= y;
    }
    movement(){
      if(keyIsDown(RIGHT_ARROW)) {
        image(walkArray[j],this.x,this.y);
        x+=7;
      }
      else if (keyIsDown(LEFT_ARROW )){
        image(walkArray[j],this.x,this.y);
        x-=7;
      }
      else if  (keyIsDown(32)) {
        image(deadArray[k],this.x,this.y);
        isdead = true;
      }
      else {
        image(idle[i], this.x, this.y);
      }
      k++;
      i++;
      j++;
      if (i >= idle.length) {
            i = 0;
        }
      if (j>=walkArray.length) {
        j=0;
      }
      if(k>=deadArray.length) {
        k=0;
      }
    }*/
  }
