const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var engine,world;
var ground, ball;

function setup() {
  createCanvas(400,400);
engine=Engine.create();
world=engine.world;
var options={
  isStatic:true
}
  ground=Bodies.rectangle(200,390,400,10,options);
  World.add(world,ground);

  var option={
    restitution:1.0
  }
  ball=Bodies.circle(100,100,30,option);
  World.add(world,ball);
}

function draw() {
  background("lightblue");  
  Engine.update(engine);
  stroke("lightblue");
  fill("green")
  rectMode(CENTER);
 rect(ground.position.x,ground.position.y,400,10);

 fill("red");
 ellipseMode(CENTER);
 ellipse(ball.position.x,ball.position.y,30,30);
}