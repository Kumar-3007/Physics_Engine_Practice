const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box;
function setup(){
    var canvas = createCanvas(400,400);
    //matter.engine.create is where we create new engines and set their properties.
    //from this engine we are creating a world for as a variable.
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
    var box_options ={
        restitution: 2
    }
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    box= Bodies.rectangle(200,200,20,20,box_options);
    World.add(world,box);
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    rect(box.position.x,box.position.y,20,20);
}