class BaseClass{
    constructor() {
        this.body = null;
        this.image= loadImage('images/hauntedHouse.png');
    
      }
      createBaseBody(x, y){
        this.body  = createSprite(x, y);
      }
}