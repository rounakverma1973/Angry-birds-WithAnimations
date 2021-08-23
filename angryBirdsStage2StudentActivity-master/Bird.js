class Bird extends BaseClass{
  constructor(x,y){
    super(x,y,50,50);

    //ading the image//
    this.image = loadImage("sprites/bird.png");
  }
  display(){


    ///moving the bird with mouse//
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    super.display();
  }
}