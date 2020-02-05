var shape = [];
function setup() {
  createCanvas(450, 450);
  for(let i=0; i<random(500,3000);i++){
    shape.push(new makeShape(random(-100,600),random(-100,450),random(1,50),random(255),random(255),random(255),95));
  }
}

function draw() {
  background(250);
  noStroke();
  for(var i=0; i<shape.length; i++){
    shape[i].display();
    shape[i].color();
  }
  border();
  words();
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
function words(){
  fill(112);
  stroke(252, 154, 234);
  strokeWeight(4);
  textSize(40);
  text('Scott', 345, 435);
  fill(0);
  stroke(255, 112, 243);
  strokeWeight(3);
  textSize(40);
  text('Shapes,Shapes,Shapes', 10, 45);
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
    if(this.counter>500){
      fill(this.red,this.green,this.blue,this.opacity);
      square(this.x,this.y,this.diam);
      this.x=this.x+random(1,5);
    }
    else if(this.counter<500){
      fill(this.red,this.green,this.blue,this.opacity);
      circle(this.x,this.y,this.diam);
      this.x=this.x-random(1,5);
    }


    }

  color(){
    this.counter=this.counter+10;
    if(this.counter>1000){
      this.red=random(255);
      this.green=random(255);
      this.blue=random(255);
      this.x=random(-200,800);
      this.y=random(0,600);
      if(this.counter>1000){
        this.diam+=1+random(5,10);
        if(this.diam>100){
          this.diam=5;
        }}
          this.counter=0;
    }
  }
}
