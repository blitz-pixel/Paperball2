var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	//PaperballImg=loadImage("paper");
}

function setup() {
	createCanvas(800, 700);

 //Paperball=createSprite();
	engine = Engine.create();
	world = engine.world;

    Ground=new ground();	
	Paperball=new paper(50 , 50 , 70 );
	Dustbin=new box(650,635,200,20);
	Dustbin1=new box(540,595,20,100);
	Dustbin2=new box(740,595,20,100);
	
	

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	World.add(world, packageBody)
	

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  background(0);
  Paperball.x=packageBody.x;
  Paperball.y=packageBody.y;
  Ground.display();
  Paperball.display();
  Dustbin.display();
  Dustbin1.display();
  Dustbin2.display();
 keyPressed();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(packageBody.body,packageBody.body.position,{x:85,y:-85})
	}
}

