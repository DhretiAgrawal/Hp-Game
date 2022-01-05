class Player {
    constructor(x,y,width,height){
        this.harry=createSprite(x,y,width,height);
        this.harry.shapeColor="black"; 
        this.harry.addImage(harryImg5);
        this.harry.scale=1.5;
        //this.harry.debug = true;
        this.harry.setCollider("rectangle",0,-3,15,32);
    }

    //Movement with arrow keys
    move(){
        if(keyDown(UP_ARROW)){
            this.harry.y = this.harry.y - 10;
            this.harry.addImage(harryImg4);
            this.harry.setCollider("rectangle",0,0,15,30);


        }
        if(keyDown(DOWN_ARROW)){
            this.harry.y = this.harry.y + 10;
            this.harry.addImage(harryImg5);
             this.harry.setCollider("rectangle",0,-3,15,32);


        }
        if(keyDown(RIGHT_ARROW)){
            this.harry.x = this.harry.x + 10;
            this.harry.addImage(harryImg2);
            this.harry.setCollider("rectangle",0,3,15,28);


        }
        if(keyDown(LEFT_ARROW)){
            this.harry.x = this.harry.x - 10;
            this.harry.addImage(harryImg3);
            this.harry.setCollider("rectangle",0,0,15,25);


        }
        
    }

    count(){
        if(this.harry.isTouching("Cpotion")){
            Cpotion++;
            Cpotion.destroy();
        } 
    }
    
}

