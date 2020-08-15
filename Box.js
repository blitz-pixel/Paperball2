class box {
  constructor(x, y){

   var options={
       'restitution': 0.4,
       //'isStatic': true
   }

    this.body=Bodies.rectangle(x, y, 30, 40, options);
    this.x=x;
    this.y=y;
    this.width= 30;
    this.height= 40;
    this.visiblity=255;
    World.add(world, this.body);
  }
display(){
  //console.log(this.body.visiblity);
  if(this.body.speed<3){
var pos=this.body.position;
var angle=this.body.angle;
push()
translate(pos.x,pos.y);
rotate(angle);
rectMode(CENTER);
fill("red")
stroke("blue")
strokeWeight(4);
rect(0,0,this.width,this.height);
pop();
  } else{
    World.remove(world,this.body);
    push();
    this.visiblity=this.visiblity-5;
    tint(255,this.visiblity);
    pop();
  }
}
};
