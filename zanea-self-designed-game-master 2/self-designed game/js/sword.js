class Sword extends BaseClass{
    constructor(x,y){
        super(x,y,150,150);
        this.image1= loadImage('images/sword1.png');
        this.image2= loadImage('images/sword2.png');  
    }
    setSwordImage(){
        this.body.addImage("rest",this.image1);
        this.body.addImage("hit",this.image2);
    }
    
}