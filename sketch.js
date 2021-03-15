
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,world;
var ground;

var leftBox,rightBox,downBox;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Engine.run(engine);
	ball=new Paper(100,300,30);
	ground=Bodies.rectangle(400,600,800,20,{isStatic:true});
	World.add(world,ground);


	downBox=new Box(720, 585, 100, 10);

	leftBox=new Box(665, 550, 10, 100);

	rightBox=new Box(765, 550, 10, 100);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);

  downBox.display();
  leftBox.display();
  rightBox.display();
 // paperSprite.x=ball.position.x;
  //paperSprite.y=ball.position.y;
  fill(255);
  rect(ground.position.x,ground.position.y-20,800,20);
  ball.display();
  drawSprites();
 
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	}
}



