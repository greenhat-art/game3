class Game{
    constructor(){
        //game levels
        this.level= 1;
        this.monsterCount= 0;
        //loading images for the background
    
        this.hauntedHouseImage=  loadImage('images/hauntedHouse2.png');
        this.autumnRoadImage= loadImage('images/autumnRoad.png');
        this.halloweenRoadImage= loadImage('images/halloweenRoad.png');
        this.monsoonRoadImage= loadImage('images/monsoonRoad.png');
        this.mummyAnimation= loadAnimation("images/mummy1.png","images/mummy2.png");

        //creating the haunted house sprite
        this.hauntedHouse= createSprite(400,450,50,30);
        this.hauntedHouse.addImage("far",this.hauntedHouseImage);
        this.hauntedHouse.scale= 0.2;

        //creating sword and player 
        this.sword= new Sword();
        this.player= new Player();
     
        this.monstersGroup= createGroup();
    }
    createGameBodies(){
        this.sword.createBaseBody(displayWidth/2-30,2*displayHeight/3-30);
        this.sword.body.scale = 0.5;
        this.player.createBaseBody(displayWidth/2-100,2*displayHeight/3+40);
        this.player.body.debug= true;
        this.player.body.setCollider("circle",0,0,20);
        
    }

    isTouching(){
        
        if(this.monstersGroup.isTouching(this.sword.body)){
            this.monstersGroup.destroyEach();
        }
        if(this.monstersGroup.isTouching(this.player.body)){
            this.player.body.destroy();
            this.sword.body.destroy();
        }
    }


    addGameAnimations(){
        this.sword.setSwordImage();
        this.player.setPlayerAnimation();
    }


    addGameBackground(){
        switch(this.level){
            case 1:
                background(this.autumnRoadImage);
                break;
             case 2:
                 background(this.halloweenRoadImage);
                 break;
             case 3:
                 background(this.monsoonRoadImage);
                 break;
             default:
                 break;   
                  
        }
        
    }

    hitSword(){
        this.sword.body.scale = 1;
        this.sword.body.x= this.sword.body.x-110;
        this.sword.body.changeImage("hit");
    }
    releaseSword(){
        this.sword.body.scale = 0.5;
        this.sword.body.x= this.sword.body.x+110;
        this.sword.body.changeImage("rest");
    }
    spawnMonsters(){
        if(frameCount%100===0 && this.monsterCount<15){
            var monster= createSprite(400,450,10,10);
            monster.debug= true;
            monster.setCollider("circle",0,0,3);
    
            monster.velocityX= 1;
            monster.velocityY= 1;
            monster.addAnimation("mummy",this.mummyAnimation);
            monster.scale= 0.2;
            monster.lifetime= 200;
            this.monstersGroup.add(monster);
            this.monsterCount= this.monsterCount+1;
            

            
            
        }
        
    }
    scaleMonsters(){
        if(frameCount%10===0){
           for (let index = 0; index < this.monstersGroup.length; index++) {
                this.monstersGroup.get(index).scale+=0.01;
               
           }
        }
        console.log(this.monstersGroup.length);
    }

    movePlayer(){
        if(keyIsDown(UP_ARROW)){
            this.player.body.position.x-=1;
            this.player.body.position.y-=1;
            this.sword.body.position.x-=1;
            this.sword.body.position.y-=1;

            if(frameCount%10===0){
                this.player.body.scale= this.player.body.scale-0.1;
                this.sword.body.scale= this.sword.body.scale-0.1; 
            }
            if(this.player.body.position.x<this.hauntedHouse.body.x){
                this.player.body.scale= 0;
                this.sword.body.scale= 0;
            }
        
        
        

        }
    }
       
      

    }
