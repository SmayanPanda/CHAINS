
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
boy=new Boy(200,630,200,200)
ground=new Ground(400,680,800,20)
tree=new Tree(500,500,300,400)
stone=new Stone(90,600,30,30)
mango1=new Mango(520,420,40,40)
mango2=new Mango(480,480,40,40)
sling=new Sling(stone.body,{x:125,y:580})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  boy.display()
  ground.display()
  sling.display()
  boy.display()
  
  tree.display()
  stone.display()
  mango1.display(
  mango2.display()
  )
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
	
	
	
	}
	function mouseReleased(){
	sling.fly()
	}
	

