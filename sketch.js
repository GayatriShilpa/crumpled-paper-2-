
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var binimage;

function preload()
{
	binimage=loadImage("dustbingreen.png")

  
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(width/2, 660, width, 10);

	paper1=new Paper(200,610,30);
	
	side1=new Bin(550,610,20,100);
 	side2=new Bin(730,610,20,100);
	side3=new Bin(640,650,200,20);


	Engine.run(engine);

	
}


function draw() {
  rectMode(CENTER);
  background("teel");

 

 ground.display();

 paper1.display();

side1.display();
side2.display()
side3.display();
image(binimage,525,528,235,130);


drawSprites();

}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:75,y:-75})
	}
}
