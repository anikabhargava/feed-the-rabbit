var garden,rabbit,apple,leaf;
var gardenImg,rabbitImg, appleImg, leafImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


}


function draw() {
  background(0);
  rabbit.x=World.mouseX;

  edges = createEdgeSprites();
  rabbit.collide(edges);

  spawnApples();
  createLeaves();

  drawSprites();
}

function spawnApples(){
  if (frameCount % 80 === 0){
    apple = createSprite(10,20,20,10);
    apple.x = Math.round(random(10, 400));
    apple.addImage(appleImg)
    apple.scale = 0.1
    apple.velocityY=4

  }
}

function createLeaves(){
  if (frameCount % 80 === 0){
    leaf = createSprite(10,20,20,10);
    leaf.x = Math.round(random(10, 400));
    leaf.addImage(leafImg)
    leaf.scale = 0.1
    leaf.velocityY=4
  }
}