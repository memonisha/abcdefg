
//namespacing
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

//declare variables
var engine, world;

var box1,box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    //create object of Box class
    box1=new Box(100,50,50,50);
    box2=new Box(200,30,40,40);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
}