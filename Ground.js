class ground{
    constructor(){
        var options={
            'isStatic':true,
        }
        
    this.body= Bodies.rectangle(width/2, 650,width, 10 , options);
    this.width=width;
    this.height=10;
 	World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        fill(255);
        rect(pos.x,pos.y,this.width,this.height);
    }
}