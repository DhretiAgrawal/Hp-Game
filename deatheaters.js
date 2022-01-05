class DeathEaters {
    constructor(x,y){
        this.deatheater=createSprite(x,y,30,35);
       
       //this.deatheater.shapeColor="blue";
        deatheaterG.add(this.deatheater);
        //this.deatheater.addAnimation("move", ghostImg1 , ghostImg2,ghostImg3,ghostImg4);
    }

    move(){
        this.deatheater.bounceOff(wallG);

        //CHANGING ANIMATION
        if(this.deatheater.velocityX < 0){
            this.deatheater.addImage(ghostImg4);
        }
        else if(this.deatheater.velocityX > 0){
            this.deatheater.addImage(ghostImg3);
        }
        else if(this.deatheater.velocityY < 0){
            this.deatheater.addImage(ghostImg2);
        }
        else if(this.deatheater.velocityY > 0){
            this.deatheater.addImage(ghostImg1);
        }
        
    }
}

function createDeathEaters(){
    deatheater1=new DeathEaters(80,350)
    deatheater1.deatheater.velocityX= -1;
    
    deatheater2=new DeathEaters(200,540)
    deatheater2.deatheater.velocityX= -1;

    deatheater3=new DeathEaters(780,280)
    deatheater3.deatheater.velocityY= -1;

    deatheater4=new DeathEaters(1000,550)
    deatheater4.deatheater.velocityX= 1;

    deatheater5=new DeathEaters(1014,110)
    deatheater5.deatheater.velocityX= 1;
}

function moveDeathEaters(){
    deatheater1.move();
    deatheater2.move();
    deatheater3.move();
    deatheater4.move();
    deatheater5.move();
}