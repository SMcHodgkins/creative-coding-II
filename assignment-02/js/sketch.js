var shape = [];
var test =1;
function setup() {
  createCanvas(450, 450);
  for(let i=0; i<random(255);i++){
    shape.push(new makeShape(random(50,400),random(50,400),random(25,50),random(255),random(255),random(255),95));
  }
}

function draw() {
  background(250);
  border();
  for(var i=0; i<shape.length; i++){
    shape[i].display1();
    shape[i].color();
  }
  }
function border(){
  fill(66, 221, 245);
  strokeWeight(0);
  //one solid color
  rect(0,0,5,450);
  rect(445,0,5,450);
  rect(0,0,450,5);
  rect(0,445,450,5);
}
class makeShape{
  constructor(x,y,diameter,red,green,blue,opacity){
    this.x= x;
    this.y= y;
    this.diam=diameter;
    this.red=red;
    this.green=green;
    this.blue=blue;
    this.opacity=opacity;
    this.counter=0;
  }
  display(){
    //this.shapechange=1;
    fill(this.red,this.green,this.blue,this.opacity);
    circle(this.x,this.y,this.diam);
    }
  display1(){
    fill(this.red,this.green,this.blue,this.opacity);
    square(this.x,this.y,this.diam);
  }
  color(){
    this.counter=this.counter+10;
    if(this.counter>1000){
      this.red=random(255);
      this.green=random(255);
      this.blue=random(255);
      this.x=random(50,400);
      this.y=random(50,400);
      if(this.counter>1000){
        this.diam+=100;
        if(this.diam>500){
          this.diam=0+random(50);
        }}
          this.counter=0;
    }
  }
}
