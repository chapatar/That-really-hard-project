class Ground{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,900,40,options);
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        fill("brown");
        rectMode(CENTER);
        rect(pos.x,pos.y,900,40);
        
    }
}