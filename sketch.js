
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy, boyImage;
var launcher,stone;
function preload()
{
	boyImage=loadImage("boy.png");
}

function setup() {
	createCanvas(1000, 550);

	var boy=createSprite(350,460);
	boy.addImage(boyImage);
	boy.scale=0.1;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(450,530);
	
	stone=new Stone(90,400);

	tree=new Tree(700,275);

	mango1=new Mango(770,60);
	mango2=new Mango(650,85);
	mango3=new Mango(730,72);
	mango4=new Mango(600,55);
	mango5=new Mango(850,70);
	mango6=new Mango(900,180);
	mango7=new Mango(510,200);
	mango8=new Mango(800,30);
	mango9=new Mango(690,120);
	mango10=new Mango(710,30);
	mango11=new Mango(750,210);
	mango12=new Mango(650,190);

	launcher=new Launcher(stone.body, {x:290,y:400})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  textSize(20);
  text("Press SPACE to get a second chance to play!!", 50,50);

  

  
  tree.display();
  
  ground.display();
  
  stone.display();

  launcher.display();



  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();

  

  drawSprites();
 
  
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  detectCollision(stone,mango11);
  detectCollision(stone,mango12);  
}

function mouseDragged(){
Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	launcher.throw();
}

function keyPressed(){
	if(keyCode===32){
Matter.Body.setPosition(stone.body,{x:290,y:400})
launcher.attach(stone.body);
	}
}

function detectCollision(stone,mango){
	mPos=mango.body.position;
	sPos=stone.body.position;

	var distance=dist(sPos.x,sPos.y,mPos.x,mPos.y);

	if(distance<=45){
		Matter.Body.setStatic(mango.body,false);
	}
}


