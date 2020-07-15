class box{
    constructor(x,y,angle){
        
        var options={
            'isStatic': true,
            'friction':1.0,
            'density':1.0
        }
        
        this.x=x;
        this.y=y;
        this.width=200;
        this.height=100;
        this.thickness=20;
        this.angle=angle;
        this.bottomBody=Bodies.rectangle(this.x,this.y,this.width,this.thickness,options);
        this.leftWall=Bodies.rectangle(this.x-this.width/2,this.y-this.height/2,this.thickness,this.height,options);
        Matter.Body.setAngle(this.leftWall, this.angle);
        this.rightWall=Bodies.rectangle(this.x+this.width/2,this.y-this.height/2,this.thickness,this.height,options);
        Matter.Body.setAngle(this.rightWall, -1*this.angle)
        this.image=loadImage('Sprites/dustbingreen.png')
        World.add(world,this.bottomBody);
        World.add(world, this.leftWall);
        World.add(world, this.rightWall);
    }
    display(){
        image(this.image,1200,600,250,130);
        var Bottom=this.bottomBody.position;
        var left=this.leftWall.position;
        var right=this.rightWall.position
        imageMode(CENTER);
        push();
        translate(left.x,left.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill(255);
        strokeWeight(4);
        stroke(255);
        rotate(this.angle);
        rect(0,0,this.thickness,this.height);
        pop();   

        push();
        translate(right.x,right.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill(255);
        strokeWeight(4);
        stroke(255);
        rotate(-1*this.angle);
        rect(0,0,this.thickness,this.height);
        pop();
        
        push();
        translate(Bottom.x,Bottom.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill(255);
        strokeWeight(4);
        stroke(255);
        rotate(this.angle);
        rect(0,0,this.width,this.thickness);
        pop();   
    }
}