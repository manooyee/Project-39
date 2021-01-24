var monkey, monkey_running;
var obstacle, obstacleImage, obstacleGroup;
var banana ,bananaImage, foodGroup;
var backGround, backImage;
var score;
var ground;


function preload(){  
 monkey_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
 bananaImage = loadImage("banana.png");
 obstacleImage = loadImage("stone.png");
 backImage = loadImage("jungle.jpg");
 bananaImage = loadImage("banana.png");
 
}

function setup() {
  createCanvas(400,400);
  
  //backGround = createSprite(200,200,4000,400);
  //backGround.addImage(backImage);
  
  ground = createSprite(200,375,5000,10);
  ground.visible = false;

  monkey = createSprite(0,340,20,20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  foodGroup = createGroup();
  obstacleGroup = createGroup();
  
  score = 0;
}

function draw() {
  background(220);


  //if(backGround.x < 0){
 //   backGround.x = 1000
 // }

 image(backImage,0,0,2500,400)

    
  if(keyDown("space") && monkey.y >= 100){
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;

  monkey.velocityX = 3
  camera.position.x = monkey.x;
  camera.position.y = 200;
  
  monkey.collide(ground);


   
  food();

  if (foodGroup.isTouching(monkey)){
    score = score+2
    monkey.scale = (.09 + .01* score/10);
    foodGroup.destroyEach();
  }



  if(obstacleGroup.isTouching(monkey)){
    monkey.scale = 0.1;
  }

  if(monkey.x>2450){
    monkey.velocityX=0
    foodGroup.destroyEach();
  }

  
  drawSprites();
  
  fill("white");
  textSize(15);
  text("START",0,200);
  text("END",2450,200);
  fill("black");
  textSize(30);
  text("You got "+score,2500,180)
  text("Bananas ",2500,220)

}


function food(){
  if (frameCount % 50 === 0){
    banana = createSprite(2500,200,10,10);
    banana.y = Math.round(random(120,350));
    banana.addImage(bananaImage);
    banana.scale = 0.05;
    banana.velocityX = -10;
    banana.lifetime = 150;
    foodGroup.add(banana);
  }
}



