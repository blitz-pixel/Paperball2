class paper{
    constructor(x,y,radius){
        var options={
       'isStatic': false,
       'restitution': 0.3,
        'friction':0.5,
        'density' : 1.0           
        }

        this.body=Bodies.circle(x,y,radius);
        this.width=x;
        this.height=y;
        World.add(world, this.body)
    }

    display(){
        var pos=this.body.position;
        ellipseMode(CENTER);
        fill(255);
        ellipse(pos.x,pos.y,this.width,this.height)
   
    }
}