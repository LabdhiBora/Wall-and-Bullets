var bullet , thickness,wall;
var speed,weight;
function setup() {
  createCanvas(1600,400);
  line=createSprite(50,280,4000,10);
  line.shapeColor="white";
  bullet =createSprite(50,350,40,30);
  bullet.shapeColor="white";
  speed=random(200,300);
  weight=random(22,83);
  
  bullet.velocityX=speed;

  
  line=createSprite(50,150,4000,10);
  line.shapeColor="white";
  
  // speed2=random(100,150);
 

  // bullet=createSprite(50,70,50,30);
  // bullet.shapeColor="yellow";
  // speed3=random(10,100);
  // bullet.velocityX=speed3;

  wall=createSprite(1500,200,60,height);
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background(0);  
 
  

  drawSprites();
  bullet.collide(wall);
  
  if (hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5 *weight * speed * speed /(thickness*thickness*thickness);
    
    if(damage>10){
      wall.shapeColor=color(255,0,0);

    }
    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }
}

function hasCollided(bullet1,wall1){
  bulletRightEdge=bullet1.x+bullet1.width;
  wallLeftEdge=wall1.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  else{
    return false;
  }
}