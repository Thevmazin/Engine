const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine,world
var object
var ground
var ball

function setup(){
createCanvas (650,650);
engine = Engine.create();
world = engine.world
var object2 = {
isStatic:true
}
object = Bodies.rectangle(200,200,10,10,object2);
World.add(world,object)

ground = Bodies.rectangle(325,650,650,20, object2);
World.add(world,ground)

var object3 = {
restitution:1
}
ball = Bodies.circle(100,100,20,object3);
World.add(world,ball)
}

function draw(){
background("red");
Engine.update(engine);
rectMode(CENTER);
rect(object.position.x,object.position.y,10,10);
rect(ground.position.x,ground.position.y,650,20)
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20,20);
}