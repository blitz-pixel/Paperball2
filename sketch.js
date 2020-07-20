//var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
//var packageBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;
const Constraint = Matter.Constraint;

var Ground,Paperball,Dustbin;
var world;

function preload()
{
	//PaperballImg=loadImage('Sprites/paper.png');
}

function setup() {
	createCanvas(1600, 700);
rectMode(CENTER);
 //Paperball=createSprite();
	engine = Engine.create();
	world = engine.world;

	Ground=new ground(width/2,670,width,20);
	//Ground2=new ground(width/2,170,width,20);	
	Paperball=new paper( 100, 450 , 20 );
	//Paperball.addImage(PaperballImg);
	Dustbin=new box(1200,650);
	//Dustbin1=new box(540,595,20,100);
	//Dustbin2=new box(740,595,20,100);	
	Hanger=new launcher(Paperball.body,{x:100,y:200});

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody)
	
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
			width: 1200,
            height: 700,
            wireframes: false
		}
	});
	Engine.run(engine); 
}


function draw() {
	Engine.update(engine);
  background(0);
  //Paperball.x=packageBody.x;
  //Paperball.y=packageBody.y;
  Ground.display();
  //Ground2.display();
  Paperball.display();
  Dustbin.display();
  Hanger.display();
  // keyPressed();
   //mouseDragged();
   //mouseReleased();
}

//function keyPressed(){
	//if(keyCode === UP_ARROW){
	//	Matter.Body.applyForce(Paperball.body,Paperball.body.position,{x:85,y:-85})
	//}
//}

function mouseReleased(){
   Hanger.fly();
}

function mouseDragged(){
    Matter.Body.setPosition(Paperball.body,{x:mouseX, y:mouseY});
}
