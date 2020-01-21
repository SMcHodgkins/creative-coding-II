function setup() {
  createCanvas(450, 450);
}

function draw() {
  background(113);
  drawShapes();
  title();
  signature();
  border();
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
function signature(){
  fill(112);
  stroke(252, 154, 234);
  strokeWeight(4);
  textSize(40);
  text('Scott', 345, 435);
}
function title(){
  fill(0);
  stroke(255, 112, 243);
  strokeWeight(3);
  textSize(40);
  text('Shapes,Shapes,Shapes', 10, 45);
}
function drawShapes(){
  //I couldn't remember how to get something to be random but only be created once
  fill(252, 228, 154);
  triangle(180,200,30,50,200,18);
  fill(183, 154, 252)
  triangle(400,300,200,50,50,50);
  fill(215, 165, 217);
  triangle(19,394, 50, 199, 40, 59);
  fill(50,39,144);
  circle(50,100,50);
  fill(155,29,88);
  circle(101, 171, 138);
  fill(80,255,10);
  circle(300,150,100);
  fill(50,166,69);
  rect(50,300,40,59);
  fill(143, 76, 88);
  triangle(400, 100, 320, 100, 310, 80);
  fill(101, 134, 171);
  arc(300, 400, 200, 280, PI, TWO_PI);
  fill(55, 70, 153);
  rect(150,300,150,50);
}
