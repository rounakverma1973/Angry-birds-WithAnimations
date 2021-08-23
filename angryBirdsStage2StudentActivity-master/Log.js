class Log extends BaseClass{
    constructor(x, y, height, angle) {
      super(x,y,20,height,angle);
     

      //Adding The Image//
      this.image=loadImage("sprites/wood2.png");

      //giving the angles for seeting of logs//

      Matter.Body.setAngle(this.body,angle);
    }

    
  };
  