var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup,bananaGroup,edges;
var score;
var survivalTime=0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  monkey=createSprite(80,315,20,20);
 monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
 monkey.velocityXEach=5;
 
 
  ground=createSprite(680,350,1000,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  score=0;
  
    obstacleGroup=new Group();
    bananaGroup=new Group();
}


function draw() {
  background("white")


edges=createEdgeSprites();
  monkey.bounceOff(edges);
stroke("white");
  textSize(20);
  fill("white")

  stroke("black")
  textSize(20);
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival Time:"+survivalTime,100,50)
  
  if(keyDown("space")&& monkey.y >= 250){
monkey.velocityY= -12;
}
  monkey.velocityY = monkey.velocityY + 0.8
if(ground.x < 0){

  ground.x = ground.width/2;
}
monkey.collide(ground);
  
 createObstacle();
  spawnFood(); 
 
  drawSprites();
 if(obstacleGroup.isTouching(monkey)){
  ground.velocityX = 0;
  monkey.velocityY = 0;
 obstacleGroup.setVelocityXEach(0);
   bananaGroup.setVelocityXEach(0);
 obstacleGroup.setLifetimeEach(-1);
   bananaGroup.setLifetimeEach(-1);
   survivalTime=0;

  }
   
 
  
  
}

function spawnFood(){ 
if(frameCount%150===0){
 var  banana=createSprite(600,250,40,10);
      banana.y=random(120,200);
    banana.addImage(bananaImage);
  banana.scale=0.1;
   banana.lifetime=300;
  banana.velocityX=-4
   bananaGroup.add(banana);
 }
}
function createObstacle(){
if(frameCount%150===0){
 var  obstacles=createSprite(800,320,10,40);
  obstacles.velocityX=-6;
  obstacles.addImage(obstacleImage);
  obstacles.scale=0.15;
  obstacles.lifetime=300;
  obstacleGroup.add(obstacles);

}

}
