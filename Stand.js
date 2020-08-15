class stand {
    constructor(x,y,width,height) {
     
      var options = {
          isStatic: true
        }
        
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.x=x;
      this.y=y;
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();  
      rectMode(CENTER); 
      translate(pos.x,pos.y);
      fill(255);
      //strokeWeight(4);
      //stroke(255);
      fill("brown");
      rect(0, 0, this.width, this.height);
      pop();    
    }
  };
