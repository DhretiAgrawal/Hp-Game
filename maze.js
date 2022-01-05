class Maze {
    constructor(x,y,width,height){
        this.wall=createSprite(x,y,width,height); 
        this.wall.shapeColor="brown";
        wallG.add(this.wall);
        
    }
    
}

function createWalls (){
     //Edges
  wall1=new Maze (625,5 , 1250,10);
  wall2=new Maze (625,595 , 1250,10);
  wall3=new Maze (5,300 , 10,600);
  wall4=new Maze (1245,300 , 10,600);
  
  //Vertical Walls 
  //First row
  wall5=new Maze (280, 50 , 3, 100);
  wall6 = new Maze(750, 35, 3, 50);
  wall7=new Maze (1100,35 , 3,50);

  //Second Row 
  wall8 = new Maze(150, 145, 3, 100);
  wall9 = new Maze(420, 120, 3, 50);
  wall10 = new Maze(750, 120, 3, 50);
  wall11 = new Maze(1000, 120, 3, 50);

  //Third Row
  //wall12 = new Maze(200, 360, 10, 130);
 // wall13 = new Maze(400, 320, 10, 50);
  wall14 = new Maze(600, 330, 3, 70);
  wall15 = new Maze(900, 300, 3, 50);

  //Fourth Row 
  wall16 = new Maze(100, 470, 3, 100);
  wall17 = new Maze(450, 475, 3, 235);
  wall18 = new Maze(755, 380, 3, 150);
  wall19 = new Maze(1100, 400, 3, 150);
  
  //Fifth Row 
  wall20 = new Maze(300, 550, 3, 250);
  wall21 = new Maze(700, 550, 3, 80);
  wall22 = new Maze(1000, 550, 3, 90);
  wall23 = new Maze(900, 300, 3, 50);

  //Sixth Row 
  wall36 = new Maze(330, 195, 3, 100);
  wall37 = new Maze(550, 130, 3, 50);
  wall38 = new Maze(135, 425, 250, 3);
  wall39 = new Maze(100, 520, 200, 3);


  //Horizontal Walls
  //First
  wall24 = new Maze(80, 100, 150, 3);
  wall25 = new Maze(300, 300, 200, 3);
  wall26 = new Maze(500, 360, 200, 3);
  wall27 = new Maze(1000, 150, 700, 3);

  //Second
  wall28 = new Maze(220, 200, 150, 3);
  wall29 = new Maze(100, 300, 200, 3);
  wall30 = new Maze(135, 425, 250, 3);
  wall31 = new Maze(100, 520, 200, 3);

  //Third 
  wall32 = new Maze(250, 200, 150, 3);
  wall33 = new Maze(380, 150, 90, 3);
  wall34 = new Maze(650, 150, 210, 3);  
  wall35 = new Maze(700, 230, 3, 150);
  wall36 = new Maze(730, 300, 60, 3);
  wall37 = new Maze(760, 300, 60, 3);
  wall38 = new Maze(650, 450, 210, 3);
  wall39 = new Maze(1020, 320, 240, 3);
  wall40 = new Maze(900, 250, 3, 140);
  wall41 = new Maze(850, 510, 310, 3);
}

/*
Adjust the walls - DONE 
crop and remove bg from images-DONE
find images - harry , de , giants , bg - DONE 
try the pixel for voldy -DONE
*/