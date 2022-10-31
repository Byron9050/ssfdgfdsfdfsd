var ground
var ground2
var trex ,trex_running;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
ground = loadImage("ground2.png")

}

function setup(){
  createCanvas(600,200)
  
  //crear sprite de Trex
 trex = createSprite(50, 167);
 trex.addAnimation("running",trex_running);
 trex.scale = 0.7

 ground2 = createSprite(200,200)
 ground2.  addImage(ground)
}

function draw(){
  background("white");
  if(keyDown("space")) {

trex.velocityY = -10

  }
  trex.velocityY = trex.velocityY + 0.8;
  trex.collide(ground2)
  drawSprites();

}

