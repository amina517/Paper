
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var ground;
var bin;
var binL;
var binR;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,600,800,20);
	falseGround = new FalGround(400,678,800,30);

	paper = new Paper(100,450,50);

	bin = new Bin(600, 300, 150, 400);
	binL = new Bin(526,300,20,600);
	binR = new Bin(675, 300, 20, 600);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("AntiqueWhite");

  ground.display();
  falseGround.display();
  paper.display();
  bin.display();
  binL.display();
  binR.display();
  

  drawSprites();
  keyPressed();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:85, y:-85});
	}

}

	




