class Giants {
    constructor(x,y){
        this.giant=createSprite(x,y,30,35);
        this.giant.shapeColor="red";  
        giantG.add(this.giant);
    }

    move(){
        this.giant.bounceOff(wallG);

        //CHANGING ANIMATION
       /*  if(this.giant.velocityX < 0){
            this.giant.addImage(ghostImg4);
        }
        else if(this.giant.velocityX > 0){
            this.giant.addImage(ghostImg3);
        }
        else if(this.giant.velocityY < 0){
            this.giant.addImage(ghostImg3);
        }
        else if(this.giant.velocityY > 0){
            this.giant.addImage(ghostImg2);
        } */
    }
}

function createGiants(){
    giant1=new Giants(100,200)
    giant1.giant.velocityX= -1;
    
    giant2=new Giants(630,120)
    giant2.giant.velocityX= -1;

    giant3=new Giants(550,380)
    giant3.giant.velocityY= -1;

    giant4=new Giants(920,220)
    giant4.giant.velocityY= -1;

    giant5=new Giants(800,400)
    giant5.giant.velocityX= -1;

    giant6=new Giants(415,340)
    giant6.giant.velocityY= 1;
}

function moveGiants(){
    giant1.move();
    giant2.move();
    giant3.move();
    giant4.move();
    giant5.move();
    giant6.move();
}

