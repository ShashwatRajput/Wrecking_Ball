const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1 = new Ball(220, 230, 25);

	rope1 = new Rope(ball1.body, { x : 220, y : 100})

	ground = new Ground(400, 300, 800, 20);

	box1 = new Box(300, 280, 40, 40)
	box2 = new Box(340, 280, 40, 40)
	box3 = new Box(380, 280, 40, 40)
	box4 = new Box(420, 280, 40, 40)
	box5 = new Box(460, 280, 40, 40)
	box6 = new Box(320, 250, 40, 40)
	box7 = new Box(360, 250, 40, 40)
	box8 = new Box(400, 250, 40, 40)
	box9 = new Box(440, 250, 40, 40)
	box10 = new Box(340, 220, 40, 40)
	box11 = new Box(380, 220, 40, 40)
	box12 = new Box(420, 220, 40, 40)
	box13 = new Box(360, 190, 40, 40)
	box14 = new Box(400, 190, 40, 40)
	box15 = new Box(380, 160, 40, 40)
	


	//Engine.run(engine);
  
}


function draw() {
  background("yellow");
  Engine.update(engine)
  ball1.display();

  rope1.display();

  ground.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();


}

function mouseDragged(){
	Matter.Body.setPosition(ball1.body, {x : mouseX, y : mouseY})
}