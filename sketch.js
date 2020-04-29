
var rectangle1,rectangle2,rectangle3,rectangle4,rectangle5,rectangle6,rectangle7,rectangle8,rectangle9,rectangle10

function setup() {
  createCanvas(1200,800);
  
  rectangle1 = createSprite(250,600,50,600);
  rectangle1.shapeColor="red";
  rectangle2 = createSprite(550,600,50,600);
  rectangle2.shapeColor="red";
  rectangle3 = createSprite(300,600,60,700);
  rectangle3.shapeColor="blue";
  rectangle4 = createSprite(500,600,60,700);
  rectangle4.shapeColor="blue";
  rectangle5 = createSprite(500,220,70,70);
  rectangle5.shapeColor="green";
  rectangle6 = createSprite(300,220,70,70);
  rectangle6.shapeColor="green";
  rectangle7 = createSprite(400,600,140,900);
  rectangle7.shapeColor="pink";
  rectangle8 = createSprite(400,100,200,100);
  rectangle8.shapeColor="purple";
  rectangle9 = createSprite(200,800,50,700);
  rectangle9.shapeColor="aqua";
  rectangle10 = createSprite(600,800,50,700);
  rectangle10.shapeColor="aqua";
}

function draw() {
  background(0);  
  
  drawSprites();
}