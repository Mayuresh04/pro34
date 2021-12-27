
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var roadImg , bImg , cbImg;
var road , blue_car , cannon_ball;


function preload(){
  roadImg = loadImage("road.png");
  bImg    = loadImage("b_car.png");
  cbImg   = loadImage("cannonball.png");
}


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  road = createSprite(350,350,20,20);
  road.addImage(roadImg);

  blue_car = createSprite(310,150);
  blue_car.scale(0.25);
  blue_car.addImage(bImg);

  cannon_ball = createSprite(380,380);
  cannon_ball.addImage(cbImg);
  cannon_ball.scale(0.015);
    
}


function draw() 
{
  background(51);
  Engine.update(engine);
 
  drawSprites();
}

