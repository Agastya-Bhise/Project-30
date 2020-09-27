class Box {
  constructor(x, y, width, height){
    this.body = Bodies.rectangle(x,y,width,height);
    World.add(world, this.body);
    this.Visibility = 255;
    this.image = loadImage("whitebox.png");
  }

  display(){
    console.log(this.body.speed);
    if(this.body.speed < 3){
  var pos =this.body.position;
rectMode(CENTER);
  fill("white");
  rect(pos.x, pos.y, this.width, this.height);
  //image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
  
    }
    else{
      World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity - 5;
      tint(255,this.Visiblity);
      pop();
    }

  
}

score()
{
  if(this.Visiblity > -1005 && this.Visiblity < 0)
  {
    score++
  }


}

};
