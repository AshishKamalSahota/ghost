var tower,towerimage, doorimage ,door, doorsgroup;

var climber,climberimage,climbersgroup;

var ghost,ghostimage;

var invisibleblockg , invisibleblock;

var gamestate = "play";


function preload(){
 towerimage=loadImage("tower.png");
  doorimage=loadImage("door.png");
  climberimage=loadImage("climber.png");
  ghostimage=loadImage("ghost-standing.png");
}

function setup(){
  createCanvas(600,600);
  
  tower=createSprite(300,300,100,100);
  tower.addImage("tower",towerimage);
  tower.velocityY=1;
  
  ghost=createSprite(300,430,10,10);
   ghost.addImage("ghost",ghostimage);
  ghost.scale=0.3;
  //climber=createSprite(300,220,10,10);
  // climber.addImage("climber",climberimage);
 // climber.scale=1;
  doorg= new Group();
 // doorg.createGroup();
  climberg=new Group();
  invisibleblockg=new Group();
}

function draw(){
  background(0);
  if (gamestate==="play"){
  if (tower.y>400){
    tower.y=300;
  }
  if (keyDown("right_arrow")){
    ghost.x=ghost.x+3;
  }
   if (keyDown("left_arrow")){
    ghost.x=ghost.x-3;
  }
  if(keyDown("space")){
    ghost.velocityY=-5;
  }

  ghost.velocityY=ghost.velocityY+0.8;
  if(climberg.isTouching(ghost)){
    ghost.velocityY=0;
  }
  if(invisibleblockg.isTouching(ghost)){
    ghost.destroy();
    gamestate="end";
  }
  spawndoors();
  drawSprites();
}
  else if(gamestate==="end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("gameover",230,250);
  }
}
function spawndoors(){
  if (frameCount%240===0){
    door=createSprite(200,-50,10,10);
    door.addImage(doorimage);
    door.x=Math.round(random(120,400));
    door.velocityY=1;
    door.lifetime=600;
    doorg.add(door);
    ghost.depth=door.depth;
    ghost.depth=ghost.depth+1;
    
     climber=createSprite(200,5,10,10);
    climber.addImage(climberimage);
    climber.x=door.x;
    climber.velocityY=1;
    climber.lifetime=600;
    climberg.add(climber);
    
    
    
    invisibleblock=createSprite(200,15,10,2);
    
    invisibleblock.width=climber.width;
    invisibleblock.velocityY=1;
    invisibleblock.x=door.x
    invisibleblock.lifetime=600;
    invisibleblockg.add(invisibleblock);
  }

}