class Rope{
    constructor(body1,pointB) {
        
        var options = {
            stiffness:0.04,
            length:200,
            bodyA:body1,
            pointB:pointB
            
        }
        this.pointB=pointB;
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
        var pointA=this.rope.bodyA.position;
        var pointB=this.pointB;
        strokeWeight(4);
        stroke("yellow");
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
} 