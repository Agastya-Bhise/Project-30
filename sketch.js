
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var score = 0;

function preload()
{
  //hexagon = loadImage(hexagon.png);
  
  backgroundDay = loadImage("bg.png")
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(400, 650, 1600, 10);
	ground2 = new Ground(490, 600, 250, 10);
	ground3 = new Ground(900, 500, 250, 10);

	block8 = new Box(400, 570, 30, 40);
	block9 = new Box(445, 570, 30, 40);
	block10 = new Box(490, 570, 30, 40);
	block11= new Box(535, 570, 30, 40);
	block12 = new Box(580, 570, 30, 40);

	block13 = new Box(440, 520, 30, 40);
	block14= new Box(490, 520, 30, 40);
	block15 = new Box(540, 520, 30, 40);

	block16 = new Box(490, 470, 30, 40);
  //box1 = new Box(100, 100, 50, 50);

  polygon = Bodies.circle(100, 200, 25);
  World.add(world, polygon);
  
  line1 = new SlingShot(polygon, {x:200, y:400});

	
  

	Engine.run(engine);
  
}


function draw() {


  rectMode(CENTER);
  background(backgroundDay);

  ground1.display();
  ground2.display();
  ground3.display();

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  block13.display();
  block14.display();
  block15.display();

  block16.display();

  ellipseMode(RADIUS);
  ellipse(polygon.position.x, polygon.position.y, 25);
  //polygon.addImage(hexagon);

  

  textSize(20);
  fill("white");
  text("Score : " + score);


  

  

  //box1.display();


  
  drawSprites();
 
}

function mouseDragged()
{
  Matter.Body.setPosition(polygon, {x:mouseX, y:mouseY})


}

function mouseReleased()
{
  line1.fly();



}

async function getBackgroundImage()
{
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJson = await response.json();
    var dateTime = responseJson.datetime;
    var hour = dateTime.slice(11, 13);
    if(hour >= 06 && hour <= 19)
    {
        backgroundDay = loadImage("sprites/bg.png");
    }
    else
    {
        backgroundNight = loadImage("sprites/bg2.png");
    }

  }
