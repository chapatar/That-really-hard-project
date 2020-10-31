class Tree{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.image=loadImage("tree.png")
        this.body=Bodies.rectangle(x,y,0,0,options);
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,600,600);
        
    }
}