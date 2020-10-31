class Stone {

    constructor(x,y){
        var options = {
            isStatic:false
        }
        this.image=loadImage("stone.png");
        this.body=Bodies.circle(x,y,10,options);
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y+5,40,40);
        
    }
}