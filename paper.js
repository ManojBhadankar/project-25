class paper{
    constructor(x,y){

 var options = {
    
     'restitution':0.3,
     'friction':0.5,
     'density':1.2
 }
  this.body = Bodies.circle(x,y,20);
   this.radius = 20
   this.image = loadImage("paper.png");
  
  World.add(world, this.body);
}
display(){
  var pos =this.body.position;
  var angle = this.body.angle;
  push();
  translate(pos.x,pos.y);
  rotate(angle);
  ellipseMode(RADIUS);
  fill("red");
  ellipse(0,0, this.radius,this.radius);
  pop();
}
};