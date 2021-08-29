class Ball {

constructor(){

    this.body = createSprite (random([0,800]),random(0,500))
    this.image = loadImage("ball2.png")
    this.body.addImage(this.image) 
    this.body.scale=0.1


    if(this.body.x===0){
      this.body.velocityX=3
    }

    else{ 
        this.body.velocityX=-3
    }
}

}