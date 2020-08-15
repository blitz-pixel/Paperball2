
//var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
//var packageBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Render=Matter.Render;
const Constraint = Matter.Constraint;

var Ground,Paperball,Dustbin;
var world;

var level1=[];
var level2=[];
var level3=[];
var level4=[];
var level5=[];
var level6=[];

function preload()
{
	//PaperballImg=loadImage('Sprites/paper.png');
}

function setup() {
	createCanvas(1000, 800);
rectMode(CENTER);
 //Paperball=createSprite();
	engine = Engine.create();
	world = engine.world;

	Ground=new ground(width/2,790,width,20);
  Stand= new ground(555,550,230,15);
  Stand2=new ground(570,260,230,15);

  Paperball=new polygon( 100, 450 , 20 );
  
  for(a=463;a<=643;a+=30){
   level1.push(new box(a,524))
  }

  for(b=493;b<=613;b+=30){
   level2.push(new box(b,510));
  }
  
  for(c=523;c<=583;c+=30){
    level3.push(new box(c,480));
  }
  
  Box1=new box(553,460);

  for(d=478;d<=683;d+=30){
    level4.push(new box(d,240))
  }

  
  for(e=508;e<=653;e+=30){
    level5.push(new box(e,200))
  }

  
  for(f=538;f<=623;f+=30){
    level6.push(new box(f,160))
  }

  Box2=new box(568,120);
 
	
	Hanger=new Shot(Paperball.body,{x:200,y:100});


}


function draw() {
	Engine.update(engine);
  background(0);
  Ground.display();
  
  Stand.display();
  Stand2.display();
  Paperball.display();

  for(k=0;k<level1.length;k++){
    level1[k].display();
  }

  for(l=0;l<level2.length;l++){
    level2[l].display();
  }

  for(m=0;m<level3.length;m++){
     level3[m].display();
  }

  Box1.display();

  for(n=0;n<level4.length;n++){
    level4[n].display();
  }

  
  for(o=0;o<level5.length;o++){
    level5[o].display();
  }

  
  for(p=0;p<level6.length;p++){
    level6[p].display();
  }

  Box2.display();

  Hanger.display();
   //keyPressed();
   //mouseDragged();
   //mouseReleased();
}

function keyPressed(){
	if(keyCode === 32){
		Hanger.attach(Paperball.body);
	}
}

function mouseReleased(){
   Hanger.fly();
}

function mouseDragged(){
    Matter.Body.setPosition(Paperball.body,{x:mouseX, y:mouseY});
}

