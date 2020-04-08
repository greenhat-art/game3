class Ground {
    constructor(x,y,width,height) {
     
      this.body = createSprite(x,y,width,height);
      this.width = width;
      this.height = height;
      this.body.visible= false;
   
    }
    
}