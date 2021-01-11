
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof=new Roof(400,200,250,30)
bob1=new Bob(300,400,25)
bob2=new Bob(350,400,25)
bob3=new Bob(400,400,25)
bob4=new Bob(450,400,25)
bob5=new Bob(500,400,25)
string1=new String(bob1.body,roof.body,-100,0)
string2=new String(bob2.body,roof.body,-50,0)
string3=new String(bob3.body,roof.body,0,0)
string4=new String(bob4.body,roof.body,50,0)
string5=new String(bob5.body,roof.body,100,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
 roof.display();
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 string1.display();
 string2.display();
 string3.display();
 string4.display();
 string5.display();
}

function keyPressed()
 { if (keyCode === UP_ARROW)
	 { Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45}
		); }
	 }