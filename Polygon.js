class polygon{

    constructor(x,y,radius){
        
        var options={
       'isStatic': false,
       'restitution': 0.3,
        'friction':0.5,
        'density' : 1.2,           
        }
        

        this.body=Bodies.circle(x,y,radius/2,options);
        this.radius=radius;
        //this.image=loadImage('Sprites/paper.png')
        World.add(world, this.body)
    }

    display(){
        var pos=this.body.position;
        //image(this.image,this.body.position.x-50,this.body.position.y-50,80,80);
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill(255);
        strokeWeight(4);
        stroke(255);
        ellipse(0,0,this.radius);
        pop();
   
    }
}