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
var obstY= 300;
var direction;
let playerHealth=10;
//var isdead;
var obstacleArray = [];
var enemyHealth=3;


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
  createCanvas(800, 800);
  //p1=new classs(0,200);
  obst1 = new obstacle(obstx,obstY, 100,100,"assets/obst.png");
  //obst2 = new obstacle(obstx2,obstY,  100,100,"assets/obst.png");
  obstacleArray[0]=obst1;
  //obstacleArray[1]=obst2;
}

function draw() {
  background(120);
  fill(130);
  rect(0,650,2000,200);
  playerHealthTotal();
  /*obst1.display();
  obst2.display();
  obst1.move();
  obst2.move();*/
  for (let i=0; i<obstacleArray.length; i++){
    obstacleArray[i].display();
    obstacleArray[i].move();
  }

  //p1[i].movement();
  if(keyIsDown(RIGHT_ARROW)) {
    image(walkArray[j],x,y);
    x+=5;
  }
  else if (keyIsDown(LEFT_ARROW )){
    image(walkArray[j],x,y);
    x-=5;
  }
  else if  (keyIsDown(32)) {    //making my jump animation my attack animation
    image(jumpArray[k],x,y);
    /*y+=speed;
    x+=speed2 ;
    if(y<-50){
    speed*=-1;
    }
    if(y>=200){
      speed*=-1;
    }*/
}
  else {
    if(dead=true){

    }
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
    playerHealth= playerHealth -1;
    obst1.decreaseHealth();
    if(playerHealth<=0){
      x=-1000;
    }
    else {
      obst1.setX(random(500,1000));
    }
      /*let enemyHealth = obstacleArray[i].decreaseHealth();
      if(enemyHealth<=0){
        obstacleArray.splice(i, 1);
      } else {
        obstacleArray[i].setX(random(500,1000));
      }*/
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
    /*if(x>2000){
      x=0;
    }*/

  }
class obstacle{
  constructor(x,y,h,w,imagePath){
    this.x=x;
    this.y=y;
    this.h=h;
    this.w=w;
    this.health = 3;
    this.imagePath = imagePath;
    this.obst = loadImage(imagePath);
  }
  display(){
    image(this.obst, this.x, this.y);
    this.obst.resize(300,300);
  }
  decreaseHealth() {
    this.health = this.health - 1;
    return this.health;
  }
  move(playerX){
    //if (this.x>playerX){
      this.x--;
    //}
  }
  setX(x) {
        this.x = x;
    }
}
function playerHealthTotal(){
  textSize(40);
  text("Health: "+ playerHealth,50,50);
}
