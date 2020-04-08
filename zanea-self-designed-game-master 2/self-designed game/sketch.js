
var game;

var engine,world;





function preload(){
  game= new Game(); 
}

function setup(){
   createCanvas(displayWidth-200, displayHeight-100);
   loadSound('sounds/leaves.mp3',true);
   
   game.createGameBodies();
   game.addGameAnimations();
}


function draw(){
  game.addGameBackground();
  //game.addGameAnimations();
  game.spawnMonsters();
  game.isTouching();
  game.scaleMonsters();
  game.movePlayer();
  drawSprites();
  

}


function keyPressed(){
  if(keyCode===32){
     game.hitSword();
     
  } 
}


function keyReleased(){
  if(keyCode===32){
    game.releaseSword();
    
  }
} 

