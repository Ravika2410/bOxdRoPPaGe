var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var b,o,x;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


b=createSprite(width/2,height-50,200,20);
o=createSprite(300,610,20,100);
x=createSprite(500,610,20,100);
b.shapeColor=("#FF0000");
o.shapeColor=("#FF0000");
x.shapeColor=("#FF0000");


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	b= Bodies.rectangle(width/2, height-50, 200, 20 , {isStatic:true} );
	 World.add(world, b);
	 
	 o= Bodies.rectangle(300, 610, 20, 100 , {isStatic:true} );
	 World.add(world, o);
	 
	 x= Bodies.rectangle(500, 610, 20, 100 , {isStatic:true} );
 	World.add(world, x);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

	Matter.Body.setStatic(packageBody,false);
	
  }
}



