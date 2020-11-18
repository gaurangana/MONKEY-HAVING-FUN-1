
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime=0, score , SurvivalTime
var groun

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(500, 500); 

  monkey = createSprite(80,315,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.x = ground.width /2;
  ground.velocityX= -4;
  console.log(ground.x)
  
  invisibleGround = createSprite(31,340,400,10);
  invisibleGround.visible = false;
  
  
  //create Obstacle and foodGroups
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  
  score = 0;
}


function draw() {
   background(1000)
   //text(mouseX+","+mouseY,mouseX,mouseY);
  //displaying score
 stroke("white");
  textSize(20);
  fill("white");
  text("score: "+score ,500,50 );
  
  stroke("black")
  textSize(20);
  fill('black')
  survivalTime+ Math.ceil(frameCount/frameRate())
  text("SurvivalTime: "+ survivalTime, 100,50)
  
    
   if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
       
    }
  
   if(ground.x<0){
     ground.x=ground.width/2
     }
  
   //add gravity
    monkey.velocityY = monkey.velocityY + 0.8

    //stop monkey from falling down
    monkey.collide(invisibleGround);
  
  food();
  obstacle();
  drawSprites();
}

function food(){
  if (frameCount % 80 === 0) {
    var banana = createSprite(238,121,40,10);
   banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage );
    banana.scale = 0.1;
   banana.velocityX = -3;
    
     //assign lifetime to the variable
     banana.lifetime = 200;
  
    
    //add each cloud to the group
   FoodGroup.add(banana);
  }
  
}

function obstacle(){
  if (frameCount % 300 === 0){
   var obstacle = createSprite(179,324,10,40);
    obstacle.addImage( obstaceImage);
 
      //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
   
   //add each obstacle to the group
    obstacleGroup.add(obstacle);
    
  }
}



