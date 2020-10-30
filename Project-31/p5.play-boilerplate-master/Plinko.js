class Plinko
{
constructor(x,y){
    var options ={
        isStatic: true
    }
this.body = Bodies.circle(x,y,8,options)
this.x = x;
this.y = y;
World.add(world, this.body);
    }
    display(){
        push();
        var pos =this.body.position;
        ellipseMode(RADIUS);
        fill("brown");
        ellipse(pos.x, pos.y, 8,8);
    pop();  
    }
}