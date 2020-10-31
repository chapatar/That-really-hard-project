class Launcher{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.004,
            length:1
        }
        this.pointB=pointB;
        this.launch=Matter.Constraint.create(options);
        World.add(world,this.launch);
    }

    throw(){
        this.launch.bodyA=null;
    }

    attach(body){
        this.launch.bodyA=body;
    }

    display(){
        if(this.launch.bodyA){
        var posA=this.launch.bodyA.position;
        var posB=this.pointB;
        strokeWeight(2);
        line(posA.x,posA.y,posB.x,posB.y);
        }
    }
}