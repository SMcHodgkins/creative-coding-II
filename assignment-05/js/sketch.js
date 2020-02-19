var character;
//var p1 = [];
var idle = [];
var walkArray = [];
var deadArray = [];
var jumpArray = [];
let x=0;
let y=200;
let i=0;
let j=0;
let k=0;
var speed= -15;
var speed2=  3 ;
var hit = false;
var hit2 = false;
var obstx = 500;
var obstx2= 1500;
var obstY= 610;
var direction;
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
function addJump(data){
  for (var i=0; i< data.length;i++) {
    character = loadImage(data[i]);
    console.log('assets/'+ data[i]);
    jumpArray[i] = character;
  }
/*function addDead(data){
  for (var i=0; i< data.length;i++) {
    character = loadImage(data[i]);
    console.log('assets/'+ data[i]);
    deadArray[i] = character;
  }*/
}
function preload(){
  loadStrings('assets/idle.txt',addIdle);
  loadStrings('assets/walk.txt',addWalk);
  //loadStrings('assets/dead.txt',addDead)
  loadStrings('assets/jump.txt',addJump);
  obst = loadImage("assets/obst.png");
}
function setup() {
  createCanvas(2000, 800);
  //p1=new classs(0,200);
  obst1 = new obstacle(obstx,obstY);
  obst2 = new obstacle(obstx2,obstY);
}

function draw() {
  background(120);
  fill(130);
  rect(0,650,2000,200);
  obst1.display();
  obst2.display();


  //p1[i].movement();
  if(keyIsDown(RIGHT_ARROW)) {
    image(walkArray[j],x,y);
    x+=5;
  }
  else if (keyIsDown(LEFT_ARROW )){
    image(walkArray[j],x,y);
    x-=5;
  }
  else if  (keyIsDown(32)) {
    image(jumpArray[k],x,y);
    y+=speed;
    x+=speed2 ;
    if(y<-50){
    speed*=-1;
    }
    if(y>=200){
      speed*=-1;
    }
}
  else {
    if(y<=190 ){
      image(jumpArray[k],x,y);
    }
    if(y>=190){
      image(idle[i], x, y);
    }

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
  if(k>=jumpArray.length) {
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
    if(y<=190){
      console.log("hi");
      y+=5;
      x+=4;
    }
    var hit = collideRectRect(x, y, idle[i].width, idle[i].height, obstx,obstY, 20, 20);
    var hit2 = collideRectRect(x, y, idle[i].width, idle[i].height, obstx2,obstY, 20, 20);
    if (hit==true){
      console.log("hit");
    }
    if (keyIsDown(LEFT_ARROW)) {
        direction = "left";
        if (hit == true ||hit2 == true) {
            x += 5;
        } else {
            x -= 5;
        }
    } else if (keyIsDown(RIGHT_ARROW)) {
        if (hit == true||hit2 == true) {

            x -= 5;
        } else {
            x += 5;
        }
    }
    if(x>2000){
      x=0;
    }
  }
class obstacle{
  constructor(x,y){
    this.x=x;
    this.y=y;
  }
  display(){
    image(obst, this.x, this.y);
    obst.resize(30,30);
  }
}
