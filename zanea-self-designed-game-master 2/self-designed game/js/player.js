class Player extends BaseClass{
    constructor(x,y){
        super(x,y,150,250);
        //load the player image
        this.animation = loadAnimation("images/player.png");
        

    }
    setPlayerAnimation(){
        this.body.addAnimation("running",this.animation);
    }
}